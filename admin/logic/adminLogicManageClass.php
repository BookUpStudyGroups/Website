<?php

	include $baseROOT . "/module/classManageClass.php";
	
	$section 	= isset($_REQUEST['section'])? $_REQUEST['section'] : "";	
	$id 		= isset($_REQUEST['id'])? $_REQUEST['id'] : 0;
	$page		= isset($_REQUEST['page'])? $_REQUEST['page'] : 1;
	$search_val	= isset($_REQUEST['search_val'])? $_REQUEST['search_val'] : "";
	

	if($section=='edit') $CurrentManageClass = $ManageClassObj->getManageClassByManageClassID($id);

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

					$rules[] 	= "required,name,Please enter department name.";
					
					$errors 	= validateFields($_POST, $rules);
					
					// if there were errors, re-populate the form fields
					if (!empty($errors))
					{  $fields = $_POST;  }
					
					// no errors! redirect the user to the thank you page (or whatever)
					else 
					{ 
						//$message 	= "All fields have been validated successfully!";
						$ManageClassObj->name					= $CommanObj->inscrape($_POST['name']);
						$ManageClassObj->active				= $CommanObj->inscrape($_POST['active']);
						$ManageClassObj->additionalInformation	= $CommanObj->inscrape($_POST['additionalInformation']);
						
						$ObjValue = $ManageClassObj->getManageClassIDByName($ManageClassObj->name);

						if($section == 'edit')
						{
							$editmanageClassName	= $_POST['editmanageClassName'];
							
							
							if($ManageClassObj->name == $editmanageClassName)
								$ObjValue 	= false;
						}

						if(!$ObjValue)
						{
							switch ($section)
							{
								case 'add' 	:	
									if($ObjVal = $ManageClassObj->insertManageClass())
										exit("<script>window.location='$baseURL/manage_department/?mes=addClass';</script>");
								break;
								case 'edit' :
									if($ObjVal = $ManageClassObj->updateManageClass($id))
										exit("<script>window.location='$baseURL/manage_department/?page=$page&mes=editClass';</script>");
								break;				
							}
							if(!$ObjVal)
								$messageError = "Database can't modify! Please try again.";
						}
						else						
							$messageError = "Class name already exits! Please try again.";
	
					}		 
				}
			break;
			
			case "update" 	:
				for ($i=1; $i < $_POST['count']; $i++)
				{
					$manageClassID 		= $_POST['manageClassID_'.$i];					
					$active 	= isset($_POST['active_'.$i])? $_POST['active_'.$i] : 0;
					
					$ManageClassObj->active		= $active;
										
					$ObjVal = $ManageClassObj->updateManageClassByManageClassID($manageClassID);
				}
				if($ObjVal)
					exit("<script>window.location='$baseURL/manage_department/?page=$page&mes=updateClass';</script>");
				else					
					$messageError = "Database can't modify! Please try again.";					
			break;
			
			case "delete" 	:
				$ManageClassObj->deleteManageClassByManageClassID($_GET['id']);
				exit("<script>window.location='$baseURL/manage_department/?page=$page&mes=delClass&search_val=".$search_val."';</script>");				
			break;
		}
	} 	
?>
