<?php 
define("CUR_PAGE", "Dashboard"); 

include "../includes/configurations.php";

include $baseROOT . "/includes/loginVerification.php";

include $baseROOT ."/includes/header.php";

include $baseROOT ."/includes/topheader.php";

?>
		
	<div class="wrapper row-offcanvas row-offcanvas-left">
		
		<?php include $baseROOT ."/includes/menu.php"; ?>
		
		<aside class="right-side">
			
			<section class="content">
			
				<div class="col-xs-12">
				
					<div class="panel">
					
						<header class="panel-heading">
						
							Welcome to admin panel.

						</header>
						
					</div>
					
				</div>
				
			</section>
			
		</aside>

	</div>

    <?php include $baseROOT ."/includes/footer.php" ;?>