<?php 
define("CUR_PAGE", "Login"); 

include "includes/configurations.php";

include $baseROOT ."/includes/header.php";

include $baseROOT . "/logic/adminLogicLogin.php"; 

?>
		
	<div class="wrapper row-offcanvas row-offcanvas-left">
		
		<aside class="right-side" style="margin-left:0px; margin-top:100px;">
			
			<section class="content">
			
				<div class="col-lg-6 col-lg-offset-3">
				
					<section class="panel" style="width:80%; margin:20px auto;">
					
						<header class="panel-heading">Admin Login</header>
						
					  <div class="panel-body">
					  
						<?php include $baseROOT ."/includes/validationMassage.php"; ?>
					  
						  <form class="form-horizontal" name="signinForm" id="signinForm" action="" method="post" role="form">
						  
							  <div class="form-group" style="padding:10px 0 5px 0;">									
									
								  <label for="inputEmail1" class="col-lg-2 col-sm-2 control-label">Username</label>
								  
								  <div class="col-lg-10">
								  
									  <input type="text" name="username" id="username" value="<?php echo $_POST['username']; ?>" class="form-control" placeholder="Username">
									  
								  </div>
								  
							  </div>
							  
							  <div class="form-group">
							  
								  <label for="inputPassword1" class="col-lg-2 col-sm-2 control-label">Password</label>
								  
								  <div class="col-lg-10">
								  
									  <input type="password" class="form-control" id="password" name="password" placeholder="Password">
									  
								  </div>
								  
							  </div>
							  
							  <!-- <div class="form-group">
							  
								  <div class="col-lg-offset-2 col-lg-10">
								  
									  <div class="checkbox">
									  
										  <label>
										  
											  <input type="checkbox"> Remember me
											  
										  </label>
										  
									  </div>
									  
								  </div>
								  
							  </div> -->
							  
							  <div class="form-group">
							  
								  <div class="col-lg-offset-2 col-lg-10">
								  
									  <input name="submit" type="submit" class="btn btn-danger" value="Sign in">
									  
								  </div>
								  
							  </div>
							  
						  </form>
						  
					  </div>
					  
					</section>
					
				</div>  
				
			</section>
			
		</aside>

	</div>

	<?php include("includes/footer.php");?>
