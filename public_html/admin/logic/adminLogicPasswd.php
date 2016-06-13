<?php

	include $baseROOT . "/module/classAdministrator.php";
	
	$section 	= isset($_REQUEST['section'])? $_REQUEST['section'] : "";
	$id 		= isset($_REQUEST['id'])? $_REQUEST['id'] : 0;

	/************************************
	 *	PHP Get/Post(Request) Data		*
	 ************************************/
	if(!empty($_SERVER['HTTP_REFERER']))
	{
		if (isset($_POST['submit']))
		{
			// stores the validation rules			
			$rules 	= array(); 

			// standard form fields Validation					
			$rules[] 	= "required,userName,Please enter username.";				
			$rules[] 	= "required,password,Please enter password.";				
			$rules[] 	= "required,newPassword,Please enter new password.";				
			$rules[] 	= "required,confirmPassword,Please enter confirm password.";				
			$rules[] 	= "same_as,newPassword,confirmPassword,Please ensure the passwords you enter are the same.";
			
			$errors 	= validateFields($_POST, $rules);
			
			// if there were errors, re-populate the form fields
			if (!empty($errors))
			{  $fields = $_POST;  }
			
			// no errors! redirect the user to the thank you page (or whatever)
			else 
			{ 
				//$message 	= "All fields have been validated successfully!";
				$AdministratorObj->userName		= $_POST['userName'];
				$AdministratorObj->oldPassword	= $_POST['password'];
				$AdministratorObj->password		= $_POST['newPassword'];
							
				if( $CurrentAdministrator = $AdministratorObj->getAdministratorByPassword() )
				{	
					if( $CurrentAdministrator = $AdministratorObj->updateAdministratorUsernamePassword($CurrentAdministrator) )
						 exit("<script>window.location='$baseURL/change-passwd/?mes=password';</script>");
					else							
						$messageError = "Database can't modify! Please try again.";
				}							
				else						
					$messageError = "Invalid old password! Please try again.";
												
				// here you would either email the form contents to someone or store it in a database. 
				// To redirect to a "thank you" page, you'd just do this:					
			}		 
		}			
	} 
	
?>
<!------------------------------------
 -	JS Validation
 ------------------------------------>              
<script language="javascript" type="text/javascript">
	var rules = new Array(); // stores the validation rules
	// standard form fields
	rules.push("required,userName,Please enter username.");
	rules.push("required,password,Please enter password.");				
	rules.push("required,newPassword,Please enter new password.");				
	rules.push("required,confirmPassword,Please enter confirm password.");				
	rules.push("same_as,newPassword,confirmPassword,Please ensure the passwords you enter are the same.");				
</script>