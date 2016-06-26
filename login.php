<?php
$body_id = 'loginbody';

?>

<?php require_once('header.php'); ?>
  <div class="white_bg padding-page">
    <div class="container">
    <div class="col-xs-12 col-md-5 col-sm-7 col-centered">

      
       
        
          
        <div class="login_box">
          <div class="title">Login to your BookUp account</div>
          <form method="post" action="" id="signinform" onsubmit="return checkLoginForm();">
            <div class="form-group">
              <input type="email" class="form-control" placeholder="Enter email" id="si_email" name="si_email" value="">
            </div>
            <div class="form-group">
              <input type="password" class="form-control" id="si_password" name="si_password" placeholder="Enter password">
            </div>
            <div class="submit">
              <button class="btn btn-default" title="Login" type="submit" name="si_submit" id="si_submit">Login</button>
            </div>
          </form>
          <div class="forgot_password"><a title="Forgot your password?" href="forgot-password.php">Forgot your password?</a></div>
          <div class="dontac"><a href="register.php">Don't have an account?</a></div>
        </div>
    </div>
    </div>
  </div>
  <div class="tellus">
    <div class="container">
      <div class="tellusbg">
        <div class="row">
          <div class="col-md-9 col-sm-8">
            <h2>Tell us what features you want</h2>
            <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, making it look like readable </p>
          </div>
          <div class="col-md-3 col-sm-4">
            <div class="readmore-1"><a href="#">Click here</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>


<script src="js/loginView.js"></script>
<?php require_once('footer.php'); ?>