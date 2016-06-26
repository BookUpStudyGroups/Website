<?php
require_once('admin/includes/configurations.php');
$body_id = 'add_group_body';
require_once('logincheck.php');

require_once('admin/module/classGroup1.php');
require_once('admin/module/classStudentCourse.php');
require_once('admin/module/classManageClass.php');
error_reporting(E_ERROR | E_PARSE);
$groupId = $CommanObj->inscrape($_GET['id']);
$user_id = $_SESSION['student_user']['id'];

if($groupId == ""){
  header("location:index.php");
  exit;
}

$groupDetails = $GroupObj->getGroupById($groupId);

if($groupDetails['user_id'] != $user_id){
  header("location:index.php");
  exit;
}



$my_classes = $StudentCourseObj->getStudentClassNamesById( $_SESSION['student_user']['id'] );

	
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
      
		<div class="reg-title">Edit Group</div>
        <div class="login_box registration">
          <form method="post" action="" id="addgroupform" onsubmit="return editGroupValidation();">
            <input type="hidden" name="action" value="editgroup" />
<input type="hidden" id="maptype" value="edit"/>
            <input type="hidden" name="hdngroupid" id="hdngroupid" value="<?php echo $groupDetails['id'];?>" />
            <div class="form-group">
              <label for="ag_class">Class Name</label>
              <select class="form-control" name="ag_class" id="ag_class">
				        <option value=''>Select Class</option>
              <?php
              	while( $row = mysql_fetch_array( $my_classes ) )
        				{
                  $LoSSelected = "";
                  if($row['class_id']  == $groupDetails['class_id'] && $row['course_num']  == $groupDetails['class_number']){
                      $LoSSelected = "selected='selected'";
                  }
        					echo '<option ' . $LoSSelected  . ' value="'.$row['class_id'] . '_' . $row['course_num'] .'">'.$row['class_name'] . ' ' . $row['course_num'] .'</option>';
        				}
			         ?>
              </select>
            </div>
            <div class="form-group">
              <label for="ag_topicname">Topic Name</label>
              <input type="text" class="form-control" placeholder="Enter Topic Name" name="ag_topicname" id="ag_topicname" value="<?php echo $CommanObj->inscrape($groupDetails['topic_name']);?>">
            </div>
            <div class="form-group">
              <label for="ag_date">Date</label>
              <input type="text" class="form-control datepicker" name="ag_date" id="ag_date" value="<?php echo date("m/d/Y",strtotime($CommanObj->inscrape($groupDetails['on_date'])));?>">
            </div>
            <div class="form-group">
            <div id="time-range">
            	
                <label>Time: <span class="slider-time"><?php echo date("g:i a", strtotime($groupDetails['start_time']));?></span> - <span class="slider-time2"><?php echo date("g:i a", strtotime($groupDetails['end_time']));?></span>            
                </label>
                
                <div class="sliders_step1">
                    <div id="slider-range"></div>
                </div>
            </div>
            </div>
            
            <div class="form-group">
              <label for="ag_room">Room no.</label>
              <input type="text" class="form-control" placeholder="Enter Room no." name="ag_room" id="ag_room" value="<?php echo $CommanObj->inscrape($groupDetails['room']);?>">
            </div>
            <div class="form-group">
              <label for="ag_location">Location</label>
              <div id="map2"></div>
              <input type="hidden" class="form-control" name="ag_location" id="ag_location" value="<?php echo $CommanObj->inscrape($groupDetails['location']);?>" readonly="true">
            </div>
            
            <div class="submit">
            	<input type="hidden" name="ag_location_latlng" id="ag_location_latlng" value="<?php echo $CommanObj->inscrape($groupDetails['location_latlng']);?>" />
            	<input type="hidden" name="ag_start_time" id="ag_start_time" value="<?php echo date("g:i a", strtotime($groupDetails['start_time']));?>" />
            	<input type="hidden" name="ag_end_time" id="ag_end_time" value="<?php echo date("g:i a", strtotime($groupDetails['end_time']));?>" />
				      
              <input type="hidden" name="ag_start_time_1" id="ag_start_time_1" value="<?php echo ((strtotime($groupDetails['start_time'])-strtotime('today'))/60);?>" />
              <input type="hidden" name="ag_end_time_1" id="ag_end_time_1" value="<?php echo ((strtotime($groupDetails['end_time'])-strtotime('today'))/60);?>" />

              <button class="btn btn-default" title="Edit" type="submit" name="ag_submit" id="ag_submit">Submit Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
<?php require_once('footer.php'); ?>