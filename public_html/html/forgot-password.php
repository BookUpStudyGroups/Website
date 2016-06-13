<?php
require_once('admin/includes/configurations.php');
$body_id = 'forgotbody';
require_once('logincheck.php');
require_once('admin/module/classStudent.php');

if( isset( $_POST['fp_submit'] ) )
{
		
    $rules  = array(); 

    $rules[]  = "required,fp_email,Please enter email address.";
    $rules[]  = "valid_email,fp_email,Please enter a valid email address.";
    
    $errors   = validateFields($_POST, $rules);

    if (!empty($errors)){  
        $fields = $_POST;  
    }else{
      $studentRecord = $StudentObj->getStudentByEmail( $CommanObj->inscrape($_POST['fp_email']));
      if($studentRecord){
         $hash = md5(uniqid($_POST['fp_email'], true));
         if($StudentObj->updateStudentHash($studentRecord['id'], $hash)){
            $reset_link = $baseSite . 'reset-password.php?rp=' . $hash;
            $to = $_POST['fp_email'];
            $subject = 'Studybuddy Password Reset';       
            $headers = "MIME-Version: 1.0" . "\r\n";
            $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
            
            $message = "Hi,<br />Here is the link to reset your password: <a href='$reset_link'>$reset_link</a>.<br />Thank you.";
            
            $mail_sent = mail( $to, $subject, $message, $headers );
            
            if( $mail_sent )
            {
              $success_msg = 'Password reset link has been sent on your email address.'; 
            }
            else
            {
              $errors[] = 'There was some problem sending the password reset link on this email.';     
            }
         }else{
            $errors[] = 'There was some problem generating the password reset link.';   
         } 
          
      }else{
        $errors[]   =  "Your email address is not currently associated with an account.";     
        $fields = $_POST;
      }
    }
		
}//submit check
?>
<?php require_once('header.php'); ?>
  <div class="white_bg padding-page">
    <div class="container">
    <div class="col-xs-12 col-md-5 col-sm-7 col-centered">
    	
          <?php
          	if( isset( $success_msg ) )
			{
				echo '<p class="success_msg">'.$success_msg.'</p>';
			}
          if( isset($errors) && count($errors) >0 ){
            foreach($errors as $key=>$val){
        ?>
            <p class="error_msg"><?php echo $val;?></p>
        <?php
            }
          }
		  ?>
    
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