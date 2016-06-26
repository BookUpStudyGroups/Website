<?php
require_once('admin/includes/configurations.php');
$body_id = 'add_group_body';
require_once('logincheck.php');
require_once('admin/module/classGroup.php');
require_once('admin/module/classManageClass.php');

$user_id = $_SESSION['student_user']['id'];

$classes_result = $ManageClassObj->getAllClassByUserAndDepartment($user_id);

	
	if( isset( $_POST['ag_submit'] ) )
	{
		if($GroupObj->getGroupByGNTNCN( $CommanObj->inscrape($_POST['ag_groupname']), $CommanObj->inscrape($_POST['ag_topicname']), $_POST['ag_class'])){
			$errors[]   =  "This group with this topic has been already created.";     
			$fields = $_POST;  
		}else{
			
			$GroupObj->active = 1;
			$GroupObj->ag_groupname = $CommanObj->inscrape($_POST['ag_groupname']);
			$GroupObj->ag_topicname = $CommanObj->inscrape($_POST['ag_topicname']);
			$GroupObj->ag_class = $CommanObj->inscrape($_POST['ag_class']);
			$GroupObj->ag_date = $CommanObj->inscrape($_POST['ag_date']);
			$GroupObj->ag_building = $CommanObj->inscrape($_POST['ag_building']);
			$GroupObj->ag_room = $CommanObj->inscrape($_POST['ag_room']);
			$GroupObj->ag_location = $CommanObj->inscrape($_POST['ag_location']);
			$GroupObj->ag_location_latlng = $CommanObj->inscrape($_POST['ag_location_latlng']);
			$GroupObj->ag_start_time = $CommanObj->inscrape($_POST['ag_start_time']);
			$GroupObj->ag_end_time = $CommanObj->inscrape($_POST['ag_end_time']);
			$GroupObj->user_id = $CommanObj->inscrape($user_id);
			$GroupId = $GroupObj->insertGroup();
			if($GroupId != 0){
				//$success_msg = 'Your group has been created successfully.';
				exit("<script>window.location='add-group.php?mes=addGroup';</script>");
			}else{
				$error_msg = 'Group could not be created due to some problem.';
			}
		}
	}
?>
<?php require_once('header.php');?>
  <div class="white_bg padding-page">
    <div class="container">
      <div class="col-xs-12 col-md-6 col-sm-7 col-centered">
			<?php
          if( isset($errors) && count($errors) >0 ){
            foreach($errors as $key=>$val){
        ?>
            <p class="error_msg"><?php echo $val;?></p>
        <?php
            }
          }
       ?>
        	<?php
            	if( $_GET['mes'] == 'addGroup')
				{
                	echo '<p class="success_msg">Your group has been created successfully.</p>';
				}
            	if( isset($error_msg))
				{
                	echo '<p class="error_msg">'.$error_msg.'</p>';
				}
			?>
      
		<div class="reg-title">Add New Group</div>
        <div class="login_box registration">
          <form method="post" action="" id="addgroupform" onsubmit="return addGroupValidation();">
            <div class="form-group">
              <label for="ag_groupname">Group Name</label>
              <input type="text" class="form-control" placeholder="Enter Group Name" name="ag_groupname" id="ag_groupname" value="<?=(!empty($_POST['ag_groupname']))? $CommanObj->inscrape($_POST['ag_groupname']) : $CommanObj->inscrape($studentData['ag_groupname']);?>">
            </div>
            <div class="form-group">
              <label for="ag_topicname">Topic Name</label>
              <input type="text" class="form-control" placeholder="Enter Topic Name" name="ag_topicname" id="ag_topicname" value="<?=(!empty($_POST['ag_topicname']))? $CommanObj->inscrape($_POST['ag_topicname']) : $CommanObj->inscrape($studentData['ag_topicname']);?>">
            </div>
            <div class="form-group">
              <label for="ag_class">Class Name</label>
              <select class="form-control class" name="ag_class" id="ag_class">
				<option value=''>Select Class</option>
              <?php
              	while( $row = mysql_fetch_array( $classes_result ) )
        				{
        					echo '<option value="'.$row['classID'].'">'.$row['name'].'</option>';
        				}
			         ?>
              </select>
            </div>
            <div class="form-group">
              <label for="ag_date">Date</label>
              <input type="text" class="form-control datepicker" name="ag_date" id="ag_date" value="<?=(!empty($_POST['ag_date']))? $CommanObj->inscrape($_POST['ag_date']) : $CommanObj->inscrape($studentData['ag_date']);?>">
            </div>
            <div class="form-group">
            <div id="time-range">
            	
                <label>Timings: <span class="slider-time">10:00 AM</span>           
                </label>
                
                <div class="sliders_step1">
                    <div id="slider-range"></div>
                </div>
            </div>
            </div>
            <div class="form-group">
              <label for="ag_building">Building</label>
              <input type="text" class="form-control" placeholder="Enter Building" name="ag_building" id="ag_building" value="<?=(!empty($_POST['ag_building']))? $CommanObj->inscrape($_POST['ag_building']) : $CommanObj->inscrape($studentData['ag_building']);?>">
            </div>
            <div class="form-group">
              <label for="ag_room">Room no.</label>
              <input type="text" class="form-control" placeholder="Enter Room Number" name="ag_room" id="ag_room" value="<?=(!empty($_POST['ag_room']))? $CommanObj->inscrape($_POST['ag_room']) : $CommanObj->inscrape($studentData['ag_room']);?>">
            </div>
            <div class="form-group">
              <label for="ag_location">Location</label>
              <div id="map"></div>
              <input type="text" class="form-control" name="ag_location" id="ag_location" readonly="true">
            </div>
            
            <div class="submit">
            	<input type="hidden" name="ag_location_latlng" id="ag_location_latlng" value="" />
            	<input type="hidden" name="ag_start_time" id="ag_start_time" value="" />
            	<input type="hidden" name="ag_end_time" id="ag_end_time" value="" />
				      <button class="btn btn-default" title="Add" type="submit" name="ag_submit" id="ag_submit">Add Group</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

<?php require_once('footer.php'); ?>