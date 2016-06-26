<?php
$body_id = 'registerbody';

?>
<?php require_once('header.php'); ?>
<script src="js/regView.js"></script>
<div class="white_bg padding-page">
    <div class="container">
      <div class="col-xs-12 col-md-6 col-sm-7 col-centered">
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
          if( isset($successMsg) && $successMsg !="" ){
				?>
            <p class="success_msg">Your account has been registered successfully. Please <a href="login.php">Log in</a>.</p>
        <?php
				  }
			 ?>
      
		<div class="reg-title">Register your BookUp account</div>
        <div class="login_box registration">
          <form method="post" action="login.php" id="registerform" enctype="multipart/form-data" onSubmit="return checkRegForm();">
            <div class="row">
              <div class="col-md-4 col-sm-4">
                <div class="form-group">
                  <label for="fname">First Name</label>
                  <input type="text" class="form-control" value="<?=(!empty($_POST['fname']))? $CommanObj->inscrape($_POST['fname']) : '';?>" placeholder="First Name" name="fname" id="fname">
                </div>
              </div>
              
              <div class="col-md-4 col-sm-4">
                <div class="form-group">
                  <label for="lname">Last Name</label>
                  <input type="text" class="form-control" placeholder="Last Name" name="lname" id="lname" value="<?=(!empty($_POST['lname']))? $CommanObj->inscrape($_POST['lname']) : '';?>">
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" class="form-control" placeholder="Email Address" name="email" id="email" value="<?=(!empty($_POST['email']))? $CommanObj->inscrape($_POST['email']) : '';?>">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" placeholder="Password" name="password" id="password">
            </div>
            <div class="form-group">
              <label for="cpassword">Confirm Password</label>
              <input type="password" class="form-control" placeholder="Confirm Password" name="cpassword" id="cpassword">
            </div>
            
            <div class="form-group">
              <label for="">Currently Registered Courses</label>
			  
              <div class="classesrow" id="classesrow1">
				<div class="row">
               <div class="col-md-8 col-sm-8">
                  <select class="form-control" id="course-input">
                    <option value="" disabled selected>Select a Class</option>
</select>
</div>
				</div>
              </div><!--.classesrow-->
			  
              <div class="form-group">
                    <a class="btn btn-info" id="add-course-row">Add Course</a>
                    <a class="btn btn-warning" id="remove-course-row">Remove Course</a>
              </div>
            </div>

			<div class="form-group">
				  <label for="class_year">Don't see your class? Request we add it below!</label>
				  <input type="text" class="form-control" placeholder="Request class" name="class_name_custom" id="class_name_custom" value="">
				</div>
            <div class="form-group term">
              <!-- <input type="checkbox" class="form-control" placeholder="Email Address"> -->
              <label>By clicking BookUp, you have read and agree to our <a href="terms-and-conditions.php" title="Terms and Conditions"><b>Terms and Conditions</b>.</a></label>
            </div>
            <div class="submit">
              <button class="btn btn-default" title="BookUp" type="reg_submit" name="reg_submit" id="submit">BookUp</button>
            </div>
          </form>
          <div class="create_account"><a target="_blank" href="#"></a></div>
        </div>
      </div>
    </div>
  </div>

<?php require_once('footer.php'); ?>