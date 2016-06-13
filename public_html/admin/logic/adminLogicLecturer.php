<?php

	include $baseROOT . "/module/classLecturer.php";
	
	$section 	= isset($_REQUEST['section'])? $_REQUEST['section'] : "";	
	$id 		= isset($_REQUEST['id'])? $_REQUEST['id'] : 0;
	$page		= isset($_REQUEST['page'])? $_REQUEST['page'] : 1;
	$search_val	= isset($_REQUEST['search_val'])? $_REQUEST['search_val'] : "";
	

	if($section=='edit') $CurrentLecturer = $LecturerObj->getLecturerByLecturerID($id);

	/************************************
	 *	PHP Get/Post(Request) Data		*
	 ************************************/
	if(!empty($_SERVER['HTTP_REFERER']))
	{
		switch($section)
		{	
			case "add" 	:
			case "edit" :
				if (isset($_POST['submit']))
				{
					
					// stores the validation rules			
					$rules 	= array(); 

					// standard form fields Validation

					$rules[] 	= "required,firstName,Please enter first name.";
					$rules[] 	= "required,lastName,Please enter last name.";
					
					$errors 	= validateFields($_POST, $rules);
					
					// if there were errors, re-populate the form fields
					if (!empty($errors))
					{  $fields = $_POST;  }
					
					// no errors! redirect the user to the thank you page (or whatever)
					else 
					{ 
						//$message 	= "All fields have been validated successfully!";
						$LecturerObj->firstName				= $CommanObj->inscrape($_POST['firstName']);
						$LecturerObj->lastName				= $CommanObj->inscrape($_POST['lastName']);
						$LecturerObj->active				= $CommanObj->inscrape($_POST['active']);
						$LecturerObj->additionalInformation	= $CommanObj->inscrape($_POST['additionalInformation']);
						
						
						switch ($section)
						{
							case 'add' 	:	
								if($ObjVal = $LecturerObj->insertLecturer())
									exit("<script>window.location='$baseURL/lecturer/?mes=addLecturer';</script>");
							break;
							case 'edit' :
								if($ObjVal = $LecturerObj->updateLecturer($id))
									exit("<script>window.location='$baseURL/lecturer/?page=$page&mes=editLecturer';</script>");
							break;				
						}
						if(!$ObjVal)
							$messageError = "Database can't modify! Please try again.";
						
					}		 
				}
			break;
			
			case "update" 	:
				for ($i=1; $i < $_POST['count']; $i++)
				{
					$lecturerID 		= $_POST['lecturerID_'.$i];					
					$active 	= isset($_POST['active_'.$i])? $_POST['active_'.$i] : 0;
					
					$LecturerObj->active		= $active;
					
					$ObjVal = $LecturerObj->updateLecturerByLecturerID($lecturerID);
				}
				if($ObjVal)
					exit("<script>window.location='$baseURL/lecturer/?page=$page&mes=updateLecturer';</script>");
				else					
					$messageError = "Database can't modify! Please try again.";					
			break;
			
			case "delete" 	:
				$LecturerObj->deleteLecturerByLecturerID($_GET['id']);
				exit("<script>window.location='$baseURL/lecturer/?page=$page&mes=delLecturer&search_val=".$search_val."';</script>");				
			break;
		}
	} 	
?>
