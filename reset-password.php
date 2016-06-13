<?php
require_once('admin/includes/configurations.php');
$body_id = 'homebody';
require_once('logincheck.php');
require_once('admin/module/classStudent.php');

	if( isset( $_POST['rp_submit'] ) )
	{
		$invalid_link = false;
		
		$password = $_POST['rp_password'];
		$rp_hash = $_POST['rp_hash'];

		$rules[]  = "required,rp_password,Please enter password.";
		$rules[]  = "required,rp_hash,Invalid account.";
		$errors   = validateFields($_POST, $rules);

  	  	if (!empty($errors)){  
        	$fields = $_POST; 
        	$error_msg = $errors[0];
    	}else{
    		if($StudentObj->updateStudentPassword($CommanObj->inscrape($_POST['rp_password']), $CommanObj->inscrape($_POST['rp_hash']))){
    			$success_msg = 'Your password has been reset. <a href="login.php">Log in</a>.';
    		}else{
    			$error_msg = 'There was some problem resetting your password.';
    		}
    	}	
		
	}//submit check
	else if( isset( $_GET['rp'] ) && $_GET['rp'] != "")
	{
		$rp_hash = $CommanObj->inscrape($_GET['rp']);
		
		$user = $StudentObj->getStudentByHash($rp_hash );
		
		if( $user )
		{
			$show_form = true;	
		}
		else
		{
			$invalid_link = true;
		}		
	}
	else
	{
		$invalid_link = true;	
	}
?>
<?php require_once('header.php'); ?>
  <div class="white_bg padding-page">
    <div class="container">
    <div class="col-xs-12 col-md-5 col-sm-7 col-centered">
        <div class="login_box">
          <?php
          	if( $invalid_link )
			{
				echo '<p class="error_msg">Invalid link</p>';	
			}
			else
			{
				if( $show_form )
				{
					 ?>
                          <div class="title">Reset password</div>
                          <form method="post" action="reset-password.php" id="resetpasswordform" onsubmit="return validateResetForm();">
                            <div class="form-group">
                              <input type="password" class="form-control" placeholder="Enter Password" id="rp_password" name="rp_password" required>
                            </div>
                            
                            <div class="form-group">
                              <input type="password" class="form-control" placeholder="Confirm Password" id="rp_cpassword" name="rp_cpassword" required>
                            </div>
                           
                            <div class="submit">
                            	<input type="hidden" name="rp_hash" id="rp_hash" value="<?php echo $rp_hash; ?>" />
                              <button class="btn btn-default" title="Reset" type="submit" name="rp_submit" id="rp_submit">Reset</button>
                            </div>
                          </form>
                     <?php
				}//if show_form
				else
				{
					if( isset( $success_msg ) )
						{
							echo '<p class="success_msg">'.$success_msg.'</p>';
						}
						if( isset( $error_msg ) )
						{
							echo '<p class="error_msg">'.$error_msg.'</p>';
						}	
				}
			}//not invalid link
		  ?>
        </div>
    </div>
    </div>
  </div>
<?php require_once('footer.php'); ?>