<?php
$body_id = 'changepassword';

?>
<?php require_once('header.php'); ?>
  <div class="white_bg padding-page">
    <div class="container">
    <div class="col-xs-12 col-md-5 col-sm-7 col-centered">

     
            <p class="error_msg"></p>
       
            	<p class="success_msg"></p>
          
          
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