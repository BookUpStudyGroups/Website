<?php 
	define("CUR_PAGE", "adminChange Password"); 
	include "../includes/configurations.php";
	include "../includes/loginVerification.php";
	include $baseROOT . "/includes/header.php"; 
	include $baseROOT . "/logic/adminLogicPasswd.php"; 
	include $baseROOT . "/includes/topheader.php";
	
	$CurrentAdministrator = $AdministratorObj->getAdministratorDetailByAdministratorID($_SESSION['loginID']);
?>
<div class="wrapper row-offcanvas row-offcanvas-left">
            
	<?php include $baseROOT . "/includes/menu.php"; ?>
	
	<aside class="right-side">
	
		<section class="content">
		
			<div class="col-xs-8 col-lg-offset-2">
					
				<section class="panel">
				
					  <header class="panel-heading">Change Password</header>
					  
					  <div class="panel-body">
					  
						<?php include $baseROOT ."/includes/validationMassage.php"; ?>
					  
						  <form class="form-horizontal tasi-form" method="post" id="changePSWForm" name="changePSWForm" action="">
						  
							  <div class="form-group">
							  
								  <label class="col-sm-4 col-sm-4 control-label">Username <span class="rec_color">*</span></label>
								  
								  <div class="col-sm-8">
								  
									  <input name="userName" type="text" autocomplete="off" class="form-control" id="userName" value="<?=(!empty($_POST['userName']))? $CommanObj->inscrape($_POST['userName']) : $CommanObj->inscrape($CurrentAdministrator['userName']);?>" >
									  
								  </div>
								  
							  </div>
							  
							  <div class="form-group">
							  
								  <label class="col-sm-4 col-sm-4 control-label">Old Password <span class="rec_color">*</span></label>
								  
								  <div class="col-sm-8">
								  
									  <input name="password" type="password" autocomplete="off" class="form-control" id="password" value="<?=(!empty($_POST['password']))? $CommanObj->inscrape($_POST['password']) : '';?>" >
									  
								  </div>
								  
							  </div>
							  
							  <div class="form-group">
							  
								  <label class="col-sm-4 col-sm-4 control-label">New Password <span class="rec_color">*</span></label>
								  
								  <div class="col-sm-8">
								  
									  <input name="newPassword" type="password" autocomplete="off" class="form-control" id="newPassword" value="<?=(!empty($_POST['newPassword']))? $CommanObj->inscrape($_POST['newPassword']) : '';?>" >
									  
								  </div>
								  
							  </div>
							  
							  <div class="form-group">
							  
								  <label class="col-sm-4 col-sm-4 control-label">Confirm Password <span class="rec_color">*</span></label>
								  
								  <div class="col-sm-8">
								  
									  <input name="confirmPassword" type="password" autocomplete="off" class="form-control" id="confirmPassword" value="<?=(!empty($_POST['confirmPassword']))? $CommanObj->inscrape($_POST['confirmPassword']) : '';?>" >
									  
								  </div>
								  
							  </div>
							  
							
							  <div class="form-group">
							  
								  <label class="col-lg-4 col-sm-4 control-label">&nbsp;</label>
								  
								  <div class="col-lg-8">
								  
									  <input name="submit" class="btn btn-info" type="submit" value="Submit">
									  
								  </div>
								  
							  </div>
							  
						  </form>
						  
					  </div>
					  
				</section>
				
			</div>
			
		</section>
                
		</aside>

	</div>
	
<?php include $baseROOT . "/includes/footer.php"; ?> 