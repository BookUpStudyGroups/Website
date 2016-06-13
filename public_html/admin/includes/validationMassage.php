<?php
	// if $errors is not empty, the form must have failed one or more validation 
	// tests. Loop through each and display them on the page for the user
	
	$successDiv = '<div class="alert alert-success"><button type="button" class="close close-sm" data-dismiss="alert">
                   <i class="fa fa-times"></i></button>';
				   
	$errorDiv = "<div class='alert alert-block alert-danger'><button type='button' class='close close-sm' data-dismiss='alert'><i class='fa fa-times'></i></button>";
	
	if (!empty($errors))
	{
	  echo $errorDiv."&nbsp; Please fix the following errors:\n<ol>";
	  foreach ($errors as $error)
		echo "<li>$error</li>\n";
	
	  echo "</ol></div>"; 
	}
	
	if (!empty($message))
	  echo "<div class='msgNotify'>$message</div>";

	if (!empty($messageError))
	  echo $errorDiv . "$messageError</div>";

	if (!empty($_REQUEST['mes'] ) )
	{	
		if ($_REQUEST['mes']== 'err')
	  		echo "<div class='msgError'>You are not authorized to view this page.</div>";
	
		if ($_REQUEST['mes']== 'forgotPassword')
	  		echo $successDiv . "Username and password has been sent to your e-mail ID.</div>";
	
			
		if ($_REQUEST['mes']== 'addClass')
	  		echo $successDiv . "Department has been added successfully.</div>";
		if ($_REQUEST['mes']== 'editClass' || $_REQUEST['mes']== 'updateClass')
	  		echo $successDiv . "Department has been updated successfully.</div>";
		if ($_REQUEST['mes']== 'delClass')
	  		echo $successDiv . "Department has been deleted successfully.</div>";
		if ($_REQUEST['mes']== 'createClass')
	  		echo $successDiv . "Department has been created successfully.</div>";
				
		if ($_REQUEST['mes']== 'addLecturer')
	  		echo $successDiv . "Lecturer has been added successfully.</div>";
		if ($_REQUEST['mes']== 'editLecturer' || $_REQUEST['mes']== 'updateLecturer')
	  		echo $successDiv . "Lecturer has been updated successfully.</div>";
		if ($_REQUEST['mes']== 'delLecturer')
	  		echo $successDiv . "Lecturer has been deleted successfully.</div>";
		if ($_REQUEST['mes']== 'createLecturer')
	  		echo $successDiv . "Lecturer has been created successfully.</div>";
			
		if ($_REQUEST['mes']== 'login')
	  		echo $successDiv . "You have been successfully logged in.</div>";						
		if ($_REQUEST['mes']== 'logout')
	  		echo $successDiv . "You have been successfully logged out.</div>";						
		if ($_REQUEST['mes']== 'password')
	  		echo $successDiv . "Password has been changed successfully.</div>";

		if ($_REQUEST['mes']== 'editSetting')
	  		echo $successDiv . "Setting has been updated successfully.</div>";

	}
	  
?>