<?php	
	ob_start();		
	session_start();	
	//error_reporting(0); //E_ALL ^ E_NOTICE ^ E_DEPRECATED
	
	ini_set('memory_limit', '200M');
	ini_set('post_max_size', '200M');
	ini_set('upload_max_filesize', '200M');				
	ini_set("max_execution_time", "0");
	set_time_limit(0);

	$localhost	= array ("localhost", '127.0.0.1');	
	
	$HTTPS = ($_SERVER['HTTPS']=='on')? 'https://' : 'http://';	
	
	define("HTTP_SERVER", 	$HTTPS . $_SERVER['SERVER_NAME'] . "",	true);
	define("DOC_ROOT", 		$_SERVER['DOCUMENT_ROOT'],				true);	
	
	define('PP_UPLOAD_PATH', 'uploads/profile_pics/');
	define('PP_MAX_FILE_SIZE', 3000000);
	// Local configuration 	
	switch( $_SERVER['SERVER_NAME'] )
	{
		// Local configuration
		case "localhost"	:
			$baseURL				= HTTP_SERVER	. "/admin";
			$baseHOME				= HTTP_SERVER	. "/admin";
			$baseROOT				= DOC_ROOT		. "/admin";
			$baseSite				= HTTP_SERVER	. "";
			define("dbHostname", 	"localhost",			true);
			define("dbUsername", 	"root",		true);
			define("dbPassword", 	"",			true);
			define("dbName",		"study_db",		true);
			
		break;

		// Server Client configuration

		case "bookup.org" :
		case "www.bookup.org" :
			$baseURL				= HTTP_SERVER	. "/admin";
			$baseHOME				= HTTP_SERVER	. "/admin";
			$baseROOT				= DOC_ROOT		. "/admin";
			$baseSite				= HTTP_SERVER	. "";
			
			define("dbHostname", 	"localhost",			true);
			define("dbUsername", 	"bookupUser",		true);
			define("dbPassword", 	"2^a4N%HERuiv",			true);
			define("dbName",		"studybuddy_db",		true);
		break;
	}
	
	require_once $baseROOT . "/includes/definitions.php";
?>