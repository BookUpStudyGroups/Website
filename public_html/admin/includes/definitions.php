<?php
	
	require_once $baseROOT . "/module/classMysql.php"; 	
	require_once $baseROOT . "/module/classConfigurations.php";	
	require_once $baseROOT . "/module/validation.php";
	require_once $baseROOT . "/module/classUtility.php"; 	
	
	/*
	 * Mysql Table Name Defination
	 */	 

	define("tblConfigure",		"tbl_sb_configure", 			true);
	define("tblAdministrator",	"tbl_sb_administrator",			true);
	define("tblManageClass",	"tbl_sb_class",	 				true);
	define("tblLecturer",		"tbl_sb_lecturer", 				true);
	define("tblUser",			"tbl_sb_users", 				true);
	define("tblUserCourse",		"tbl_sb_user_courses", 			true);
	define("tblUserGroups",		"tbl_sb_groups", 				true);
	define("tblJoinGroup",		"tbl_sm_join_group", 				true);
define("tblUserMatches",		"tbl_sb_user_matches", 				true);
	define("tblJoinMatch",		"tbl_sm_join_match", 				true);
	
	$ConfigureObj->getAllConfigure();
	
	if ($ConfigureObj->getNumRow() > 0)
	{	
		while ($CurrentConfigure = $ConfigureObj->getRow())
		{ 
			$defines[] = array($CurrentConfigure['confKey'] => $CurrentConfigure['confValue']);
			
			define($CurrentConfigure['confKey'], $CurrentConfigure['confValue'], true); 
		}	
	}
		
	/*
	 * Common Defination
	 */	 
	 
	define("sessionID", 	session_id(), 		true);	
?>	