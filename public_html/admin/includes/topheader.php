        <header class="header">
		
            <a href="<?php echo $baseURL; ?>/index.php" class="logo"> Admin </a>
			
            <nav class="navbar navbar-static-top" role="navigation">
                
                <a href="#" class="navbar-btn sidebar-toggle" data-toggle="offcanvas" role="button">
				
                    <span class="sr-only">Toggle navigation</span>
					
                    <span class="icon-bar"></span>
					
                    <span class="icon-bar"></span>
					
                    <span class="icon-bar"></span>
					
                </a>
				
                <div class="navbar-right">
				
                    <ul class="nav navbar-nav">
					
                        
                        <li class="dropdown user user-menu">
						
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
							
                                <i class="fa fa-user"></i>
								
                                <span>Admin <i class="caret"></i></span>
								
                            </a>
							
                            <ul class="dropdown-menu dropdown-custom dropdown-menu-right">
							
                                <li class="dropdown-header text-center">Account</li>

                                <li>
                                   <!-- <a href="#">
									
										<i class="fa fa-user fa-fw pull-right"></i> Profile
									
                                    </a> -->
									
                                    <a data-toggle="modal" href="<?=$baseURL;?>/change-passwd/">
									
										<i class="fa fa-cog fa-fw pull-right"></i> Settings
									
                                    </a>
									
                                </li>

                                <li class="divider"></li>

                                <li>
								
                                    <a href="<?php echo $baseURL; ?>/logout.php"><i class="fa fa-ban fa-fw pull-right"></i> Logout</a>
									
                                </li>
								
                            </ul>
							
                        </li>
						
                    </ul>
					
                </div>
				
            </nav>
			
        </header>
		