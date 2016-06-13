<?php
	include "includes/configurations.php";
	
	$_SESSION['loginID']		= "";

	header("location: $baseURL/login.php?mes=logout"); 			
?>
