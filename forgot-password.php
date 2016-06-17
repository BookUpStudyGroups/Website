<?php
$body_id = 'forgotbody';

?>
<?php require_once('header.php'); ?>
  <div class="white_bg padding-page">
    <div class="container">
    <div class="col-xs-12 col-md-5 col-sm-7 col-centered">
    	
         
            <p class="error_msg"></p>
       
    
        <div class="login_box">
          <div class="title">Enter your email</div>
          <form method="post" action="" id="forgotpasswordform" onsubmit="return validateForgotPassword();">
            <div class="form-group">
              <input type="email" class="form-control" placeholder="Enter your email" id="fp_email" name="fp_email">
            </div>
           
            <div class="submit">
              <button class="btn btn-default" title="Submit" type="submit" name="fp_submit" id="fp_submit">Submit</button>
            </div>
          </form>
          <div class="dontac"><a href="register.php">Don't have an account?</a></div>
          <div class="create_account"><a target="_blank" href="#">
            </a></div>
        </div>
    </div>
    </div>
  </div>
<?php require_once('footer.php'); ?>