<?php
/*
* @author     Rahul <rahul.ratnam2@gmail.com>
* @copyright  2015 Solutions With Us.
*/

include "includes/configurations.php"; 

if($_SESSION[loginID] == "" ) header ("location: $baseURL/login.php");
	
else header ("location: $baseURL/dashboard/");
	
?>
