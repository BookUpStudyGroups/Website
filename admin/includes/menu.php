            <aside class="left-side sidebar-offcanvas">
               
                <section class="sidebar">
                    
                    <div class="user-panel">
					
                        <div class="pull-left image">
						
                            <img src="<?=$baseURL;?>/img/26115.jpg" class="img-circle" alt="User Image" />
							
                        </div>
						
                        <div class="pull-left info">
						
                            <p>Hello, Admin</p>
							
                            <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
							
                        </div>
						
                    </div>
                    
                    <ul class="sidebar-menu">
					
                        <li class="<?php echo CUR_PAGE == 'Dashboard' ? 'active' : ''; ?>">
						
                            <a href="<?=$baseURL;?>/dashboard/"><i class="fa fa-dashboard"></i> <span>Dashboard</span></a>
							
                        </li>
						
						<li>
							
							<a href="#" style="font-size:16px;"><i class="fa fa-gift"></i> Department Management</a>
							
						</li>
						
                        <li class="<?php echo (CUR_PAGE == 'Manage Department' && $section != 'add') ? 'active' : ''; ?>">
						
                            <a href="<?=$baseURL;?>/manage_department/"  class="paddingL60"> Manage Department</a>
							
                        </li>
						
						<li class="<?php echo (CUR_PAGE == 'Manage Department' && $section == 'add') ? 'active' : ''; ?>">
						
                            <a href="<?=$baseURL;?>/manage_department/?section=add"  class="paddingL60"> Add Department</a>
							
                        </li>
						
						<li>
							
							<a href="#" style="font-size:16px;"><i class="fa fa-gift"></i> Lecturer Management</a>
							
						</li>
						
                        <li class="<?php echo (CUR_PAGE == 'Manage Lecturer' && $section != 'add') ? 'active' : ''; ?>">
						
                            <a href="<?=$baseURL;?>/lecturer/"  class="paddingL60"> Manage Lecturer</a>
							
                        </li>
						
						<li class="<?php echo (CUR_PAGE == 'Manage Lecturer' && $section == 'add') ? 'active' : ''; ?>">
						
                            <a href="<?=$baseURL;?>/lecturer/?section=add"  class="paddingL60"> Add Lecturer</a>
							
                        </li>

                    </ul>
					
                </section>
                
            </aside>
