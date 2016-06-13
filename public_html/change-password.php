<?php
require_once('admin/includes/configurations.php');
$body_id = 'changepassword';
require_once('logincheck.php');
require_once('admin/module/classStudent.php');

if( isset( $_POST['si_submit'] ) ){
	
  $rules  = array(); 

  $rules[]  = "required,new_password,Please enter old password.";
  
  $errors   = validateFields($_POST, $rules);

  if (!empty($errors)){  
      $fields = $_POST;  
	  $error_msg = $errors[0];
  }else{
	$StudentObj->old_password		= $_POST['old_password'];
	$StudentObj->new_password		= $_POST['new_password'];
    if( $CurrentStudent = $StudentObj->getStudentByStudendIDPassword($_SESSION['student_user']['id'], $StudentObj->old_password) )
	{	
		if( $CurrentStudent = $StudentObj->updateStudentUsernamePassword($CurrentStudent['id']) )
			 exit("<script>window.location='change-password.php?mes=changepassword';</script>");
		else							
			$error_msg = "Database can't modify! Please try again.";
	}							
	else						
		$error_msg = "Invalid old password! Please try again.";
  }
	
}//submit check

?>
<?php require_once('header.php'); ?>
  <div class="white_bg padding-page">
    <div class="container">
    <div class="col-xs-12 col-md-5 col-sm-7 col-centered">

      <?php
          if( isset($error_msg) && count($error_msg) >0 ){
        ?>
            <p class="error_msg"><?php echo $error_msg;?></p>
        <?php
          }else if( $_GET['mes'] == 'changepassword' ){
			   ?>
            	<p class="success_msg">Your password has been changed successfully.</p>
          <?php	
		    	}
		      ?>
          
        <div class="login_box">
          <div class="title">Change Password</div>
          <form method="post" action="" id="changepasswordform" onsubmit="return validateChangePassword();">
            <div class="form-group">
              <input type="password" class="form-control" id="old_password" name="old_password" placeholder="Old Password">
            </div>
            <div class="form-group">
              <input type="password" class="form-control" id="new_password" name="new_password" placeholder="New Password">
            </div>
			<div class="form-group">
              <input type="password" class="form-control" id="con_new_password" name="con_new_password" placeholder="Confirm New Password">
            </div>
            <div class="submit">
              <button class="btn btn-default" title="Login" type="submit" name="si_submit" id="si_submit">Submit</button>
            </div>
          </form>
        </div>
    </div>
    </div>
  </div>
  
<?php require_once('footer.php'); ?>