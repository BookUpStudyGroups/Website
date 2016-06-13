<?php 
require_once('admin/includes/configurations.php');
$body_id = 'groupbody';
require_once('admin/module/classGroup1.php');
require_once('admin/module/classStudent.php');
require_once('admin/module/classManageClass.php');

$user_id = $_SESSION['student_user']['id'];
date_default_timezone_set('America/New_York');
$sucessMsg = "";
$errorMsg = "";
if(isset($_REQUEST['action']) && $_REQUEST['action'] != ""){
  $user_id = $_SESSION['student_user']['id'];
  $groupId =  $CommanObj->inscrape($_REQUEST['id']);
  $action =  $CommanObj->inscrape($_REQUEST['action']);
  if($action == "left"){
$counter=0;

		$groupStudentsObj = $StudentObj->groupStudent($groupId);
		$groupDetails=$GroupObj->getGroupById($groupId);
if(($groupDetails['user_id'] == $user_id)){
		while($groupStudent = mysql_fetch_assoc($groupStudentsObj)){
			$new_leader=$CommanObj->inscrape($groupStudent['id']);
			$counter++;
			if($new_leader!=$user_id){
			
			$GroupObj->updateGroupLeader($groupId,$new_leader);
          		break;
          		}
		}
}
		$StudentObj->leftStudentGroup($CommanObj->inscrape($user_id), $groupId); 

		$sucessMsg = "You have successfully left the class.";
  
    
  }else if($action == "delete"){
    $groupDetails = $GroupObj->getGroupById($groupId);
    if(($groupDetails['user_id'] == $user_id)){
      $OtherJoinedObj = $StudentObj->isOtherStudentJointGroup($user_id, $groupId);

      if(mysql_num_rows($OtherJoinedObj) > 0){
        $errorMsg = "You can not delete this group as another user has joined this group.";
      }else{
        $GroupObj->deleteGroupById($groupId);
        $sucessMsg =  "Group has been deleted successfully.";  
      }
      
    }else{
      $errorMsg = "You are not authorized for this.";
    }
  }

}

$objRsCreatedGroup = $GroupObj->getGroupsByUserId($user_id);
$jointGroupObj = $StudentObj->jointGroupDetails($user_id);
$groupStudentsObj = $StudentObj->groupStudent($groupId);
require_once('header.php'); 
?>
<script src="js/parse-1.6.14.js"></script>
<div class="white_bg">
	<div class="container" val="">
      <?php
        if($sucessMsg != ""){
      ?>
          <div class="row successmsg">
              
          </div> 
      <?php    
        }
      ?>
      <?php
        if($errorMsg != ""){
      ?>
          <div class="row errormsg">
              
          </div> 
      <?php    
        }
      ?>
<div class="col-xs-12 col-md-6 col-lg-6 col-sm-12">
			
        	<div id="details" title="" style="display: none;">
      
		<div class="reg-title" >GROUP DETAILS<div class="img" id="chat-icon"><a href="#"><img src="images/chat-2-icon.png" width="40px" alt=""></a></div></div>
<div id="card">
<div class="front"> 
        <div class="login_box registration">
          <form method="post" action="" id="addgroupform" onsubmit="return editGroupValidation();">
            <input type="hidden" name="action" value="editgroup" />
<input type="hidden" id="maptype" value="detail"/>
            <input type="hidden" name="hdngroupid" id="hdngroupid" value="<?php echo $groupDetails['id'];?>" />

            <div class="form-group">
              <label for="ag_class">Class Name</label>
 <input type="text" readonly="readonly" class="form-control" placeholder="Select Class" name="ag_topicname" id="ag_classname" value="">
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
 <input type="hidden" id="maptype" value="detail">
<input type="hidden" id="ag_location" value="">
              <input type="hidden" class="form-control" name="ag_location" id="ag_location_latlng" value="43.704472,-72.288951" readonly="true">
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
<div class="back"> 
<div id="wrapper" title="">



 
     
    <div id="chatbox"></div>
     
        <input name="usermsg" type="text" id="usermsg" size="63" />
        <input name="submitmsg" type="submit"  id="submitmsg" value="Send" />
</div>
</div>
      </div>
</div>

</div>
      <div class="col-sm-12 col-xs-12 col-md-6 col-lg-6">
<div id="wrapper" title="" style="display:none;">



    <div id="menu">
BookUp Study Chat
        <div style="clear:both"></div>
    </div>
     
    <div id="chatbox"></div>
     
        <input name="usermsg" type="text" id="usermsg" size="63" />
        <input name="submitmsg" type="submit"  id="submitmsg" value="Send" />
</div>

<div class="spacer"></div>
<div class="spacer"></div>
<div class="spacer"></div>
<div class="spacer"></div>
<div class="spacer"></div>
<div class="spacer"></div>
<div class="spacer"></div>
<div class="spacer"></div>
<div class="spacer"></div>
</div>
    	<div class="row">
        <div class="col-md-6 col-sm-6">
        <div class="ms-group groups-css">

        <div class="responsive-table">
                  <table width="100%" id="myGroups" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td class="greenbg" colspan="3">My Study Groups</td>
                      </tr>
 
                          <tr>
                            <td colspan="3" class="no_record">No Groups Found.</td>
                          </tr>

                      

                      

                      </tbody>
                  </table>
                </div>
        </div>

        </div>

        <div class="col-md-6 col-sm-6">
        <div class="js-group groups-css">
        <div class="responsive-table">
                  <table width="100%" id="availGroups" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td class="greenbg" colspan="3">available study groups</td>
                      </tr>
                      <?php 
                        if(mysql_num_rows($jointGroupObj) == 0){
                      ?>    
                          <tr>
                            <td colspan="3" class="no_record">No Groups Found.</td>
                          </tr>
                      <?php
                        }
                        while($objGroup = mysql_fetch_assoc($jointGroupObj)){
                            $LoSDataClass = $ManageClassObj->getManageClassByManageClassID($objGroup['class_id']);
                            $OtherJoinedObj = $StudentObj->isOtherStudentJointGroup($user_id, $objGroup['id']);
                      ?>
                        <tr>
                          <td width="70%">
<div class="col-sm-5 col-xs-5 col-md-4 col-lg-3">
<a href="groupdetails.php?id=<?php echo $objGroup['id']; ?>">
<img id="classimg" width=100% src="images/<?php echo $CommanObj->inscrape($LoSDataClass['name']);?>.png">
</a>
</div>
<div class="col-sm-7 col-xs-7 col-md-8 col-lg-9">

                            <?php echo $CommanObj->inscrape($objGroup['topic_name']);?>
                            <br />
                            <i><?php echo $CommanObj->inscrape($LoSDataClass['name']) . " " . $CommanObj->inscrape($objGroup['class_number']);?></i>
                          </div></td>
                          <td width="30%" align="right">
<div class="delete"><a href="groupdetails.php?id=<?php echo $objGroup['id']; ?>">Details</a></div>
                            <div class="delete"><a href="groups.php?action=left&id=<?php echo $objGroup['id']; ?>">Leave</a></div>
                          </td>
                        </tr>

                      <?php    
                        }
                      ?>

                    </tr></tbody>
                  </table>
                </div>
        </div>
        </div>
        </div>
    </div>
</div>


<script>

window.onload = function() {



};

   </script>



<?php require_once('footer.php'); ?>