<?php
	if($_SESSION['loginID'] == "")
	
	{ header("location: $baseURL/login.php"); exit(); }
?>
