<?php

	include $baseROOT . "/module/classAdministrator.php";
	
	$section 	= isset($_REQUEST['section'])? $_REQUEST['section'] : "";
	
	$id 		= isset($_REQUEST['id'])? $_REQUEST['id'] : 0;

	if(!empty($_SERVER['HTTP_REFERER']))
	{
		if (isset($_POST['submit']))
		{
			// stores the validation rules			
			$rules 	= array(); 

			// standard form fields Validation
			$rules[] 	= "required,username,Please enter username.";	
			
			$rules[] 	= "required,password,Please enter password.";				
			
			$errors 	= validateFields($_POST, $rules);
			
			// if there were errors, re-populate the form fields
			if (!empty($errors))
			{  $fields = $_POST;  }
			
			// no errors! redirect the user to the thank you page (or whatever)
			else 
			{ 
				//$message 	= "All fields have been validated successfully!";
				if( $CurrentAdministrator = $AdministratorObj->GetAdministratorByUserNameAndPassword($_POST['username'], $_POST['password']) )
				{
					if($CurrentAdministrator['active'] == '1')
					{		
						$AdministratorObj->dateLogin = date("Y-m-d H:i:s");
						
						$AdministratorObj->updateAdministratorLoginByAdministratorID($CurrentAdministrator['administratorID']);	
						
						$_SESSION['loginID']		= $CurrentAdministrator['administratorID'];
						
						$_SESSION['loginName']		= $CurrentAdministrator['name'];
						
						$_SESSION['loginUsername']	= $CurrentAdministrator['username'];
											
						exit("<script>window.location='$baseURL/dashboard/?mes=login';</script>");
					}
					else							
						$messageError = "Your Account is not active yet. Please contact administrator.";
					
				}							
				else						
					$messageError = "Invalid username / password! Please try again.";
																
			}		 
		}
	} 
	
?>
