<?php
require_once('admin/includes/configurations.php');
$body_id = 'search_group_body';
require_once('logincheck.php');

require_once('admin/module/classGroup.php');
require_once('admin/module/classStudentCourse.php');
require_once('admin/module/classManageClass.php');

$available_groups = $GroupObj->getAllGroupsForCurUser($_SESSION['student_user']['id']);
$my_classes = $StudentCourseObj->getStudentClassNamesById( $_SESSION['student_user']['id'] );

$errors = array();
$successMsg = "";
$fields = array();


?>
<?php require_once('header.php'); ?>


<table id="available-groups-table">
<?php
while( $row = mysql_fetch_array($available_groups) )
{
  $LoSDataClass = $ManageClassObj->getManageClassByManageClassID($row['class_id']);

	echo '<tr id="g_'.$row['id'].'">'.
		 '<td class="topicname">'.$row['topic_name'].'</td>'.
		 '<td class="class_id">'.$row['class_id'].'</td>'.
     '<td class="group_id">'.$row['id'].'</td>'.
     
     '<td class="class_name">'.$LoSDataClass['name'] . " " . $row['class_number'] .'</td>'.

     '<td class="class_number">'.$row['class_number'].'</td>'.
		 '<td class="location">'.$row['location'].'</td>'.
		 '<td class="latlng">'.$row['location_latlng'].'</td>'.
		 '<td class="on_date">'. date("m/d/Y", strtotime($row['on_date'])).'</td>'.
     '<td class="room">'.$row['room'].'</td>'.
		 '<td class="start_time">'.date("g:i a", strtotime($row['start_time'])).'</td>'.
		 '<td class="end_time">'.date("g:i a", strtotime($row['end_time'])).'</td>'.
		 '</tr>';
}
?>
</table>



<div id="group-details-div">
		<div class="close"><i class="fa fa-times"></i></div>
    <div class="reg-title">Information Currently Selected Group</div>
          <div class="profileimg" id="profileimgId">
            <div class="row">
              <div class="col-md-12 col-sm-12">
                <div class="information">
                  <div class="responsive-table">
                    <input type="hidden" id="hiddengroupId" value="0">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" id="selected-group-info">
                      
                      <tr style="display:none;">
                        <td class="leftCol"><strong>Location:</strong></td>
                        <td class="rightCol location"></td>
                      </tr>
                      <tr>
                        <td class="leftCol"><strong>Class:</strong></td>
                        <td class="rightCol class"></td>
                      </tr>
                      <tr>
                        <td class="leftCol"><strong>Topic:</strong></td>
                        <td class="rightCol tname"></td>
                      </tr>
                      <tr>
                        <td class="leftCol"><strong>Date:</strong></td>
                        <td class="rightCol on_date"></td>
                      </tr>
                      <tr>
                        <td class="leftCol"><strong>Time:</strong></td>
                        <td class="rightCol start_end_time"></td>
                      </tr>
                    </table>
                  </div><!--.responsive-table-->
                  
                  <div class="moredetailsbtn">
                  	<a href="javascript:void(0);">More Details</a>
                  </div><!--.moredetailsbtn-->
                  <div class="more-details">
                    

                  </div>

                </div><!--.more-details-->
              </div>
              </div>
            </div>

  </div><!--group-details-div--> 
  
  
  <div id="create-group-div">
		<div class="close"><i class="fa fa-times"></i></div>
  	<div class="reg-title">Add New Group</div>
        <div class="login_box registration" id="createGroupInnerId">
          <form method="post" action="add-group.php" id="addgroupform" onsubmit="return addGroupValidation();">
            
            <div class="form-group">
              <label for="ag_class">Class Name</label>
              <select class="form-control" name="ag_class" id="ag_class">
				      <option value=''>Select Class</option>
              <?php
                mysql_data_seek($my_classes, 0);
              	while( $row = mysql_fetch_array( $my_classes ) )
        				{
        					echo '<option value="'.$row['class_id'] . '_' . $row['course_num'] .'">'.$row['class_name'] . ' ' . $row['course_num'] .'</option>';
        				}
			         ?>
              </select>
            </div>
            <div class="form-group">
              <label for="ag_topicname">Topic Name</label>
              <input type="text" class="form-control" placeholder="Enter Topic Name" name="ag_topicname" id="ag_topicname" value="<?=(!empty($_POST['ag_topicname']))? $CommanObj->inscrape($_POST['ag_topicname']) : $CommanObj->inscrape($studentData['ag_topicname']);?>">
            </div>
            <div class="form-group" id="dateDivId">
              <label for="ag_date">Date</label>
              <input type="text" class="form-control datepicker" name="ag_date" id="ag_date" value="<?=(!empty($_POST['ag_date']))? $CommanObj->inscrape($_POST['ag_date']) : $CommanObj->inscrape($studentData['ag_date']);?>">
            </div>
            <div class="form-group">
            <div id="time-range">
            	
                <label>Time: <span class="slider-time">10:00 AM</span> - <span class="slider-time2">12:00 PM</span>            
                </label>
                
                <div class="sliders_step1">
                    <div id="slider-range"></div>
                </div>
            </div>
            </div>
            
            <div class="form-group">
              <label for="ag_room">Room no.</label>
              <input type="text" class="form-control" placeholder="Enter Room no." name="ag_room" id="ag_room" value="<?=(!empty($_POST['ag_room']))? $CommanObj->inscrape($_POST['ag_room']) : $CommanObj->inscrape($studentData['ag_room']);?>">
            </div>
            <div class="form-group" style="display:none;">
              <label for="ag_location">Location</label>
              <div id="map2"></div>
              <input type="hidden" class="form-control" name="ag_location" id="ag_location" readonly="true">
            </div>
            <!-- Dartmouth COllege Hanover new Hampshire united states 03755 -->
            <div class="submit">
            	<input type="hidden" name="ag_location_latlng" id="ag_location_latlng" value="" />
            	<input type="hidden" name="ag_start_time" id="ag_start_time" value="" />
            	<input type="hidden" name="ag_end_time" id="ag_end_time" value="" />
				      <button class="btn btn-default" title="Add" type="submit" name="ag_submit" id="ag_submit">Add Group</button>
            </div>
          </form>
        </div>
  </div><!--#create-group-div-->
  
  


<?php require_once('footer.php'); ?>