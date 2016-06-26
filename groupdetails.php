<?php
require_once('admin/includes/configurations.php');
$body_id = 'add_group_body';
require_once('logincheck.php');

require_once('admin/module/classStudent.php');
require_once('admin/module/classGroup1.php');
require_once('admin/module/classStudentCourse.php');
require_once('admin/module/classManageClass.php');
error_reporting(E_ERROR | E_PARSE);
$groupId = $CommanObj->inscrape($_GET['id']);
$user_id = $_SESSION['student_user']['id'];
$groupStudentsObj = $StudentObj->groupStudent($groupId);
if($groupId == ""){
  header("location:index.php");
  exit;
}

$groupDetails = $GroupObj->getGroupById($groupId);



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
      <div class="col-xs-12 col-md-6 col-sm-12">
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
      
		<div class="reg-title">GROUP DETAILS</div>
        <div class="login_box registration">
          <form method="post" action="" id="addgroupform" onsubmit="return editGroupValidation();">
            <input type="hidden" name="action" value="editgroup" />
<input type="hidden" id="maptype" value="detail"/>
            <input type="hidden" name="hdngroupid" id="hdngroupid" value="<?php echo $groupDetails['id'];?>" />
            <div class="form-group">
              <label for="ag_class">Class Name</label>
 <input type="text" readonly="readonly" class="form-control" placeholder="Select Class" name="ag_topicname" id="ag_topicname" value="<?php
              	while( $row = mysql_fetch_array( $my_classes ) )
        				{
                  $LoSSelected = "";
                  if($row['class_id']  == $groupDetails['class_id'] && $row['course_num']  == $groupDetails['class_number']){
                      $LoSSelected = "selected='selected'";
echo $row['class_name'] . ' ' . $row['course_num'];
                  }
        					
        				}
			         ?>">
            </div>
            <div class="form-group">
              <label for="ag_topicname">Topic Name</label>
              <input type="text" readonly="readonly" class="form-control" placeholder="Enter Topic Name" name="ag_topicname" id="ag_topicname" value="<?php echo $CommanObj->inscrape($groupDetails['topic_name']);?>">
            </div>
            <div class="form-group">
              <label for="ag_date">Date</label>
              <input type="text" readonly="readonly" class="form-control" name="ag_date" id="ag_date" value="<?php echo date("m/d/Y",strtotime($CommanObj->inscrape($groupDetails['on_date'])));?>">
            </div>
            <div class="form-group">
            <div id="time-range">
            	
                <label>Time: <span class="slider-time">
<input type="text" readonly="readonly" class="form-control" name="ag_time" id="ag_time" value="<?php echo date("g:i a", strtotime($groupDetails['start_time']));?> - <?php echo date("g:i a", strtotime($groupDetails['end_time']));?>">

           
                </label>
                
                
            </div>
            </div>
            
            <div class="form-group">
              <label for="ag_room">Room Number</label>
              <input type="text" readonly="readonly" class="form-control" placeholder="Enter Room no." name="ag_room" id="ag_room" value="<?php echo $CommanObj->inscrape($groupDetails['room']);?>">
            </div>
            <div class="form-group">
              <label for="ag_location">Location</label>
              <div id="map2"></div>
              <input type="hidden" class="form-control" name="ag_location" id="ag_location_latlng" value="<?php echo $CommanObj->inscrape($groupDetails['location_latlng']);?>" readonly="true">
            </div>
<div class="edit">
<a href="http://libcal.dartmouth.edu/booking/studyrooms">Reserve a Room in Baker-Berry</a>
</div>
<div class="edit">
<a href="http://oracle-www.dartmouth.edu/dart/groucho/dartr25_wvprod.startup">Reserve a Room Elsewhere on Campus</a>
</div>
<div class="moredetailsbtn">
            <div class="group_member">
          <?php
          	$Counter = 0;
          	while($groupStudent = mysql_fetch_assoc($groupStudentsObj)){
          		if($Counter%3 == 0){
          			echo '<div class="row">';
          		}

          		$defaultImage = "images/default.png";
                if($groupStudent['profile_pic'] != ""){
                  $defaultImage = PP_UPLOAD_PATH  . $groupStudent['profile_pic'];      
                }
          	?>
          		<div class="col-md-4 col-sm-4">
	              <div class="member">
	                <div class="img" ><img src="<?php echo $defaultImage;?>" alt=""></div>
	                
	              </div>
	            </div>

          	<?php	

          		if($Counter%3 == 2){
          			echo '</div>';
          		}
          		$Counter++;
          ?>
          
          <?php		
          	}
          	if($Counter > 0 && $Counter%3 != 3){
      			echo '</div>';
      		}
          ?>
        </div>
            </div>
          </form>

        </div>

      
</div>

<div class="col-xs-12 col-md-6 col-sm-6">

<!-- begin wwww.htmlcommentbox.com -->
 <div id="HCB_comment_box"><a href="http://www.htmlcommentbox.com">Widget</a> is loading comments...</div>
 <link rel="stylesheet" type="text/css" href="//www.htmlcommentbox.com/static/skins/bootstrap/twitter-bootstrap.css?v=0" />
 <script type="text/javascript" id="hcb"> /*<!--*/ if(!window.hcb_user){hcb_user={};} (function(){var s=document.createElement("script"), l=hcb_user.PAGE || (""+window.location).replace(/'/g,"%27"), h="//www.htmlcommentbox.com";s.setAttribute("type","text/javascript");s.setAttribute("src", h+"/jread?page="+encodeURIComponent(l).replace("+","%2B")+"&mod=%241%24wq1rdBcg%24vRqo5GtfcXOjv86TAhAfZ%2F"+"&opts=16862&num=10&ts=1461227587465");if (typeof s!="undefined") document.getElementsByTagName("head")[0].appendChild(s);})(); /*-->*/ </script>
<!-- end www.htmlcommentbox.com -->
<div class="row">
            <div id="spacer">&nbsp;</div>
        </div>  
        </div>
        </div>
  </div>  
  </div>
<?php require_once('footer.php'); ?>