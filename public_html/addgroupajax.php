<?php
require_once('admin/includes/configurations.php');
require_once('logincheck.php');
require_once('admin/module/classGroup1.php');
require_once('admin/module/classStudent.php');
require_once('admin/module/classManageClass.php');
error_reporting(E_ERROR | E_PARSE);
$user_id = $_SESSION['student_user']['id'];
function debug_to_console( $data ) {

    if ( is_array( $data ) )
        $output = "<script>console.log( 'Debug Objects: " . implode( ',', $data) . "' );</script>";
    else
        $output = "<script>console.log( 'Debug Objects: " . $data . "' );</script>";

    echo $output;
}
$classes_result = $ManageClassObj->getAllClassByUserAndDepartment($user_id);

$DataArray = array('status' => "error", "message" => "Error in processing your request.");	

if(isset( $_POST['action'] )  && $_POST['action'] == "joinGroup"){
	if( isset( $_POST['groupId'] ) && $_POST['groupId'] != ""){
		$groupId =  $CommanObj->inscrape($_POST['groupId']);
		$isJointDetails = $StudentObj->isGroupJoint($user_id, $groupId);
		
		if(!(isset($isJointDetails) && isset($isJointDetails['user_id']) && $isJointDetails['user_id'] != "")){
			$StudentObj->joinStudentGroup($CommanObj->inscrape($user_id), $groupId); 
$StudentObj->addStudentGroupCount($groupId);
		}
	}
	exit;
}		

if(isset( $_POST['action'] )  && $_POST['action'] == "leftGroup"){
	debug_to_console("Test");
	if( isset( $_POST['groupId'] ) && $_POST['groupId'] != ""){
		$groupId =  $CommanObj->inscrape($_POST['groupId']);
		$StudentObj->leftStudentGroup($CommanObj->inscrape($user_id), $groupId); 
$StudentObj->subtractStudentGroupCount($groupId);

		
	}
	exit;
}	

if(isset( $_POST['action'] )  && $_POST['action'] == "deleteGroup"){
	if( isset( $_POST['groupId'] ) && $_POST['groupId'] != ""){

		$groupId =  $CommanObj->inscrape($_POST['groupId']);
		$groupDetails = $GroupObj->getGroupById($groupId);
		if(($groupDetails['user_id'] == $user_id)){
			$GroupObj->deleteGroupById($groupId);
			echo "Group has been deleted successfully.";
		}else{
			echo "You must be a group creator to delete this group.";
		}
	}
	exit;
}	

if(isset( $_POST['action'] )  && $_POST['action'] == "viewMember"){
	if( isset( $_POST['groupId'] ) && $_POST['groupId'] != ""){
		$groupId =  $CommanObj->inscrape($_POST['groupId']);
		$groupStudentsObj = $StudentObj->groupStudent($groupId);
		$groupDetails = $GroupObj->getGroupById($groupId);
		$isJointDetails = $StudentObj->isGroupJoint($user_id, $groupId);
		
		if(isset($isJointDetails) && isset($isJointDetails['user_id']) && $isJointDetails['user_id'] != ""){
			if(($groupDetails['user_id'] == $user_id) && mysql_num_rows($groupStudentsObj) == 1){
		?>
			
				<div class="joingroupbtn" id="joingroupbtnId" onclick="deleteGroup();"><a href="javascript:void(0);">Delete Group</a></div>
		<?php		
			}else if(($groupDetails['user_id'] == $user_id) && mysql_num_rows($groupStudentsObj) > 1){
		?>
			
				<div class="joingroupbtn" id="joingroupbtnId" onclick="leftGroup();"><a href="javascript:void(0);">Leave Group</a></div>
		<?php		
			}else{
?>
				<div class="joingroupbtn" id="joingroupbtnId" onclick="leftGroup();"><a href="javascript:void(0);">Leave Group</a></div>
<?php
			}
		}else{
?>
			<div class="joingroupbtn" id="joingroupbtnId" onclick="joinGroup();"><a href="javascript:void(0);">Join This Group</a></div>
<?php			
		} 
?>
		
        <div class="group_member">
          <h2>Group Members</h2>
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
	                <div class="img"><img src="<?php echo $defaultImage;?>" alt=""></div>
	                <div class="name"><?php echo $CommanObj->inscrape($groupStudent['fname']) . " " . $CommanObj->inscrape($groupStudent['mname']) . " " . $CommanObj->inscrape($groupStudent['lname']);?></div>
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
          	if($Counter > 0 && $Counter%3 != 2){
      			echo '</div>';
      		}
          ?>
        </div>

<?php		
	}
	exit;
}
if( isset( $_POST['ag_topicname'] ) && isset( $_POST['action'] ) && $_POST['action'] == "editgroup")
{
	
  $LoSClass = $_POST['ag_class'];
  $LoSArray = explode("_", $LoSClass);

  $_POST['ag_class'] = $LoSArray[0];
  $_POST['ag_class_number'] = $LoSArray[1];

  $_POST['ag_start_time'] = date("H:i", strtotime($_POST['ag_start_time']));
  $_POST['ag_end_time'] = date("H:i", strtotime($_POST['ag_end_time']));
  $tmpDate = explode("/", $_POST['ag_date']);
  $_POST['ag_date'] = $tmpDate[2] . "-" . $tmpDate[0] . "-" .$tmpDate[1];
  $groupId = $CommanObj->inscrape($_POST['hdngroupid']);

  $groupDetails = $GroupObj->getGroupById($groupId);
	if(($groupDetails['user_id'] == $user_id)){
		if($GroupObj->getGroupByGNTNCNUpdate( $groupId, $CommanObj->inscrape($_POST['ag_location']), $CommanObj->inscrape($_POST['ag_topicname']), $CommanObj->inscrape($_POST['ag_room']), $_POST['ag_class'], $CommanObj->inscrape($_POST['ag_class_number']), $CommanObj->inscrape($_POST['ag_date']), $CommanObj->inscrape($_POST['ag_start_time']), $CommanObj->inscrape($_POST['ag_end_time']))){
			$DataArray = array('status' => "error", "message" => "This group with this topic has been already created.");       
		}else{
			
			$GroupObj->active = 1;
			$GroupObj->ag_topicname = $CommanObj->inscrape($_POST['ag_topicname']);
			$GroupObj->ag_class = $CommanObj->inscrape($_POST['ag_class']);
	    	$GroupObj->ag_class_number = $CommanObj->inscrape($_POST['ag_class_number']);
			$GroupObj->ag_date = $CommanObj->inscrape($_POST['ag_date']);
			$GroupObj->ag_room = $CommanObj->inscrape($_POST['ag_room']);
			$GroupObj->ag_location = $CommanObj->inscrape($_POST['ag_location']);
			$GroupObj->ag_location_latlng = $CommanObj->inscrape($_POST['ag_location_latlng']);
			$GroupObj->ag_start_time = $CommanObj->inscrape($_POST['ag_start_time']);
			$GroupObj->ag_end_time = $CommanObj->inscrape($_POST['ag_end_time']);
			$GroupObj->user_id = $CommanObj->inscrape($user_id);
			$GroupId = $GroupObj->updateGroup($groupId);
			if($GroupId != 0){
				//$success_msg = 'Your group has been created successfully.';
				$DataArray = array('status' => "success", "message"  => "Your group has been updated successfully.");
			}else{
				$error_msg = 'Group could not be updated due to some problem.';
	      $DataArray = array('status' => "error", "message" => $error_msg); 
			}
		}
	}else{
		$DataArray = array('status' => "error", "message" => "You do not have permission.");  
	}

  	
}else if( isset( $_POST['ag_topicname'] ) ){
	
  $LoSClass = $_POST['ag_class'];
  $LoSArray = explode("_", $LoSClass);
  $_POST['ag_class'] = $LoSArray[0];
  $_POST['ag_class_number'] = $LoSArray[1];

  $_POST['ag_start_time'] = date("H:i", strtotime($_POST['ag_start_time']));
  $_POST['ag_end_time'] = date("H:i", strtotime($_POST['ag_end_time']));
  $tmpDate = explode("/", $_POST['ag_date']);
  $_POST['ag_date'] = $tmpDate[2] . "-" . $tmpDate[0] . "-" .$tmpDate[1];

  if($GroupObj->getGroupByGNTNCN( $CommanObj->inscrape($_POST['ag_location']), $CommanObj->inscrape($_POST['ag_topicname']), $CommanObj->inscrape($_POST['ag_room']), $_POST['ag_class'], $CommanObj->inscrape($_POST['ag_class_number']), $CommanObj->inscrape($_POST['ag_date']), $CommanObj->inscrape($_POST['ag_start_time']), $CommanObj->inscrape($_POST['ag_end_time']))){
		$DataArray = array('status' => "error", "message" => "A group with this topic has been already created.");       
	}else{
		
		$GroupObj->active = 1;
		$GroupObj->ag_topicname = $CommanObj->inscrape($_POST['ag_topicname']);
		$GroupObj->ag_class = $CommanObj->inscrape($_POST['ag_class']);
    	$GroupObj->ag_class_number = $CommanObj->inscrape($_POST['ag_class_number']);
		$GroupObj->ag_date = $CommanObj->inscrape($_POST['ag_date']);
		$GroupObj->ag_room = $CommanObj->inscrape($_POST['ag_room']);
		$GroupObj->ag_location = $CommanObj->inscrape($_POST['ag_location']);
		$GroupObj->ag_location_latlng = $CommanObj->inscrape($_POST['ag_location_latlng']);
		$GroupObj->ag_start_time = $CommanObj->inscrape($_POST['ag_start_time']);
		$GroupObj->ag_end_time = $CommanObj->inscrape($_POST['ag_end_time']);
		$GroupObj->user_id = $CommanObj->inscrape($user_id);
		$GroupId = $GroupObj->insertGroup();
		if($GroupId != 0){
			//$success_msg = 'Your group has been created successfully.';
			$DataArray = array('status' => "success", "message"  => "Your group has been created successfully.");
			$StudentObj->joinStudentGroup($CommanObj->inscrape($user_id), $GroupId); 
		}else{
			$error_msg = 'Group could not be created due to some problem.';
      			$DataArray = array('status' => "error", "message" => $error_msg); 
		}
	}
}
echo json_encode($DataArray);
?>