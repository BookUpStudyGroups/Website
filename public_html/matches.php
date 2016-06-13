<?php 
require_once('admin/includes/configurations.php');
$body_id = 'matchbody';
require_once('admin/module/classMatches.php');
require_once('admin/module/classStudent.php');
require_once('admin/module/classManageClass.php');

$user_id = $_SESSION['student_user']['id'];


$sucessMsg = "";
$errorMsg = "";
if(isset($_REQUEST['action']) && $_REQUEST['action'] != ""){
  $user_id = $_SESSION['student_user']['id'];
  $groupId =  $CommanObj->inscrape($_REQUEST['id']);
  $action =  $CommanObj->inscrape($_REQUEST['action']);
  if($action == "left"){
$counter=0;

		$groupStudentsObj = $StudentObj->matchStudent($groupId);
		$groupDetails=$MatchObj->getMatchById($groupId);

		$MatchObj->deleteMatchById($groupId);

		$sucessMsg = "You have successfully unmatched.";
  
    
  }else if($action == "delete"){
    $groupDetails = $MatchObj->getMatchById($matchId);
        $MatchObj->deleteMatchById($groupId);
        $sucessMsg =  "You have successfully unmatched.";  
      

  }

}

$objRsCreatedGroup = $MatchObj->getMatchesByUserId($user_id);
$jointGroupObj = $StudentObj->jointMatchDetails($user_id);
$groupStudentsObj = $StudentObj->matchStudent($groupId);
require_once('header.php'); 
?>
<div class="white_bg">
	<div class="container">
      <?php
        if($sucessMsg != ""){
      ?>
          <div class="row successmsg">
              <?php echo $sucessMsg;?>
          </div> 
      <?php    
        }
      ?>
      <?php
        if($errorMsg != ""){
      ?>
          <div class="row errormsg">
              <?php echo $errorMsg;?>
          </div> 
      <?php    
        }
      ?>
<div class="col-md-12 col-sm-12 col-xs-12" id=placeholder>
        <div class="row" id="button_row">
<h2>Study Buddy Matchmaking Coming Soon!</h2>
</br>
</div>
</div>

    	<div class="row">
        <div class="col-md-6 col-sm-6">
        <div class="ms-group groups-css">

        
        <div class="responsive-table">
                  <table width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td class="greenbg" colspan="3">My Study Buddies</td>
                      </tr>
                      <?php 
                        if(mysql_num_rows($objRsCreatedGroup) == 0){
                      ?>    
                          <tr>
                            <td colspan="3" class="no_record">No Study Buddies Found.</td>
                          </tr>
                      <?php
                        }
                        while($objGroup = mysql_fetch_assoc($objRsCreatedGroup)){
                            $LoSDataClass = $ManageClassObj->getManageClassByManageClassID($objGroup['class_id']);
                            $OtherJoinedObj = $StudentObj->isOtherStudentJointMatch($user_id, $objGroup['id']);
                      ?>
                        <tr>
                          <td width="70%">

<div class="col-sm-5 col-xs-5 col-md-4 col-lg-3">
<img class="center-block" id="classimg" width=100% src="images/<?php echo $CommanObj->inscrape($LoSDataClass['name']);?>.png">
</div>
<div class="col-sm-7 col-xs-7 col-md-8 col-lg-9">
  <?php 
$groupStudentsObj = $StudentObj->matchStudent($objGroup['id']);
while($groupStudent = mysql_fetch_assoc($groupStudentsObj)){
$defaultImage = "images/default.png";
                if($groupStudent['profile_pic'] != ""){
                  $defaultImage = PP_UPLOAD_PATH  . $groupStudent['profile_pic'];      
                }
?>                        
<div class="img"><img width="50px" src="<?php echo $defaultImage;?>" alt=""></div>
<div class="name"><?php echo $CommanObj->inscrape($groupStudent['fname']) . " " . $CommanObj->inscrape($groupStudent['mname']) . " " . $CommanObj->inscrape($groupStudent['lname']);?></div>
<?php
}
?>
                            <br />
                            <i><?php echo $CommanObj->inscrape($LoSDataClass['name']) . " " . $CommanObj->inscrape($objGroup['class_number']);?></i>
</div>
                          </td>
                          <td width="30%">
<div class="edit"><a href="#">Details</a></div>

                              <div class="delete"><a href="matches.php?action=delete&id=<?php echo $objGroup['id']; ?>">Unmatch</a></div>
                            
                          </td>
                        </tr>

                      <?php    
                        }
                      ?>

                      <tr>
                    </tr></tbody>
                  </table>
                </div>
        </div>
        </div>
        <div class="col-md-6 col-sm-6">
        <div class="js-group groups-css">
        <div class="responsive-table">
                  <table width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td class="greenbg" colspan="3">Past Matches</td>
                      </tr>
                      </tbody>
                  </table>
                </div>
        </div>
        </div>
        </div>
    </div>
</div>

   
<?php require_once('footer.php'); ?>