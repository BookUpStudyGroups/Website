<?php
require_once('admin/includes/configurations.php');
$body_id = 'loginbody';
require_once('logincheck.php');
/*
require_once('admin/module/classStudent.php');

if( isset( $_POST['si_submit'] ) ){
	
  $rules  = array(); 

  $rules[]  = "required,si_email,Please enter email address.";
  $rules[]  = "valid_email,si_email,Please enter valid email address.";
  $rules[]  = "required,si_password,Please enter password.";
  
  $errors   = validateFields($_POST, $rules);

  if (!empty($errors)){  
      $fields = $_POST;  
  }else{
    $studentRecord = $StudentObj->getStudentByEmailPassword( $CommanObj->inscrape($_POST['si_email']), $CommanObj->inscrape($_POST['si_password']) );
    if($studentRecord){
        if($_POST['si_email']=="brian.h.kim.15@dartmouth.edu"){
        $_SESSION['student_user'] = $studentRecord;
        header("location:index.php");
        exit;
}else{
$errors[]   =  "Site is under maintenance. Access is restricted.";     
      $fields = $_POST;
}
    }else{
      $errors[]   =  "Invalid email address and password.";     
      $fields = $_POST;
    }
  }
	
}//submit check
*/
?>
<script src="js/parse-1.6.14.js"></script>

<?php require_once('header.php'); ?>
  <div class="white_bg padding-page">
    <div class="container">
    <div class="col-xs-12 col-md-5 col-sm-7 col-centered">

      <?php
          if( isset($errors) && count($errors) >0 ){
            foreach($errors as $key=>$val){
        ?>
            <p class="error_msg"><?php echo $val;?></p>
        <?php
            }
          }else if( isset( $success_msg ) ){
			   ?>
            	<p class="success_msg"><?php echo $success_msg; ?></p>
          <?php	
		    	}
		      ?>
          
        <div class="login_box">
          <div class="title">Login to your BookUp account</div>
          <form method="post" action="" id="signinform" onsubmit="return checkLoginForm();">
            <div class="form-group">
              <input type="email" class="form-control" placeholder="Enter email" id="si_email" name="si_email" value="<?=(!empty($_POST['si_email']))? $CommanObj->inscrape($_POST['si_email']) : '';?>">
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


<script>

function checkLoginForm(){
if (validateLogin()==false){
return false;
}else{
 var username=document.getElementById("si_email").value;
var password=document.getElementById("si_password").value;

if(username=="chipmunk@dartmouth.edu"){
                Parse.User.logIn(username, password, {
  success: function(user) {
    // Do stuff after successful login.
window.location = "profile.php";
return true;
  },
  error: function(user, error) {
    // The login failed. Check error to see why.
alert("Error: User login failed. Please check your username and password.");
return false;
  }
});
}else{
alert("Sorry! Site is currently undergoing development. We'll be back up soon!");
}            



var test = Parse.Object.extend("_User");
var query = new Parse.Query(test);
query.get("yRP5UpmXfQ", {
  success: function(test) {
    // The object was retrieved successfully.
var email = test.get("username");
var fullName = test.get("fullName");
  },
  error: function(object, error) {
    // The object was not retrieved successfully.
    // error is a Parse.Error with an error code and message.
alert("Error: Database is Down");
  }
});
}
return false;
}


        </script>
<?php require_once('footer.php'); ?>