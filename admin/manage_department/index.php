<?php 
	define("CUR_PAGE", "Manage Department"); 
	
	include "../includes/configurations.php";
	
	include $baseROOT . "/includes/loginVerification.php";
	
	include $baseROOT . "/includes/header.php"; 
	
	include $baseROOT . "/logic/adminLogicManageClass.php"; 	
	
	include $baseROOT . "/includes/topheader.php";
	
?>
		
        <div class="wrapper row-offcanvas row-offcanvas-left">
            
            <?php include $baseROOT . "/includes/menu.php"; ?>
			
            <aside class="right-side">
			
                <section class="content">
				
				<?php
				
				switch($section)
				{	
					case "add" 	:
					
					case "edit" :
				?>
					<div class="col-xs-8 col-lg-offset-2">
					
                        <section class="panel">
						
                              <header class="panel-heading">Add Department</header>
							  
                              <div class="panel-body">
							  
								<?php include $baseROOT ."/includes/validationMassage.php"; ?>
							  
                                  <form class="form-horizontal tasi-form" method="post" id="classForm" name="classForm" action="?section=<?=$section?>&page=<?=$page;?>&id=<?=$CurrentManageClass['classID'];?>" role="form">
								  
                                      <div class="form-group">
									  
                                          <label class="col-sm-4 col-sm-4 control-label">Department Name <span class="rec_color">*</span></label>
										  
                                          <div class="col-sm-8">
										  
                                              <input type="text" class="form-control" id="name" name="name" placeholder="Name" value="<?=(!empty($_POST['name']))? $CommanObj->inscrape($_POST['name']) : $CommanObj->inscrape($CurrentManageClass['name']);?>">
											  
                                          </div>
										  
                                      </div>
									  
									  <div class="form-group">
									  
                                          <label class="col-sm-4 col-sm-4 control-label">Additional Information</label>
										  
                                          <div class="col-sm-8">
										  
                                              <textarea class="form-control" id="additionalInformation" name="additionalInformation" placeholder="Additional Information"><?=(!empty($_POST['additionalInformation']))? $CommanObj->inscrape($_POST['additionalInformation']) : $CommanObj->inscrape($CurrentManageClass['additionalInformation']);?></textarea>
											  
                                          </div>
										  
                                      </div>
									  
									  <div class="form-group">
									  
                                          <label class="col-sm-4 col-sm-4 control-label">Status</label>
										  
                                          <div class="col-sm-8" style="padding-top: 8px;">
										  
                                            <input type="radio" name="active" value="1" id="active" <?=($_POST['active'] == '1' || $CommanObj->inscrape($CurrentManageClass['active']) == '1' || $_POST['active'] == '') ? 'checked' : '';?>> Active &nbsp; &nbsp; 
											
											<input type="radio" name="active" value="0" id="active" <?=($_POST['active'] == '0' || $CommanObj->inscrape($CurrentManageClass['active']) == '0') ? 'checked' : '';?>> Inactive
				
                                          </div>
										  
                                      </div>
                                  
                                      <div class="form-group">
									  
                                          <label class="col-lg-4 col-sm-4 control-label"><input type="hidden" name="editmanageClassName" value="<?php echo $CurrentManageClass['name'];?>"></label>
										  
                                          <div class="col-lg-8">
										  
                                              <input name="submit" class="btn btn-info" type="submit" value="Submit">
											  
                                          </div>
										  
                                      </div>
                                      
                                  </form>
								  
                              </div>
							  
                        </section>
						
                    </div>			
					
					<?php 
					
					break;	
					
					default :
					
					?>
					
					<div class="col-xs-12">
					
                        <div class="panel">
						
                            <header class="panel-heading">
								
								<div class="row">
								
								<div class="col-md-8">Department List</div>
								
								<div class="col-md-4" style="text-align:right;"><a href="?section=add" class="btn btn-info">Add Department</a></div>
								
								</div>
								
							</header>
                            
                            <div class="panel-body table-responsive">
							
								<?php include $baseROOT ."/includes/validationMassage.php"; ?>

                                <div class="box-tools m-b-15">
								
									<form name="search" method="get" action="">
									
                                    <div class="input-group">
									
                                        <input type="text" value="<?php echo $_GET['search_val']; ?>" name="search_val" class="form-control input-sm pull-right" style="width: 150px;" placeholder="Search"/>
                                        
										<div class="input-group-btn">
										
                                            <button class="btn btn-sm btn-default" type="submit"><i class="fa fa-search"></i></button>
											
                                        </div>
										
                                    </div>
									
									</form>
									
                                </div>
								
                                <table class="table table-hover">
								
                                    <tr>
                                        <th>Sr. No.</th>
                                        <th>Department Name</th>
										<th>Status</th>
                                        <th>Action</th>
                                    </tr>
									<?php
									$searchValue = $_GET['search_val'] == '' ? '' : $_GET['search_val'];
									$ManageClassObj->getAllManageClass($searchValue);
									$rowPage	= $ManageClassObj->getNumRow();
									$limit		= 10;
									$showPage	= 10;
									$limitStart	= ($page - 1) * $limit;				
									$totalPage	= ceil($rowPage / $limit);
									$link		= "?search_val=".$_GET['search_val'];
									
									if(($page > $totalPage) && $totalPage > 0)
										header("location: $baseURL/manage_class/");
									
									$strPaging	= $CommanObj->getPaging($page, $totalPage, $showPage, $link, "colorRed size14 link");
									// Paging information end.
									$ManageClassObj->getLimitManageClass($searchValue, $limitStart, $limit, 'classID DESC');

									if($ManageClassObj->getNumRow() > 0)
									{	$sr = $limit * ($page-1) + 1;	$count = 1;
										while($CurrentManageClass = $ManageClassObj->getRow())
										{ 
								  ?> 
                                    <tr>
										<td><b><?=$sr?></b></td>
										<td><?=$CurrentManageClass['name']?></td>
										<td><?php echo $CurrentManageClass['active'] == '1' ? '<span class="label label-success">Approved</span>' : '<span class="label label-danger">Unapproved</span>';?></td>
										<td>
											<a href="?section=edit&page=<?=$page;?>&id=<?=$CurrentManageClass['classID'];?>" class="Link" title="Edit"><img src="<?=$baseURL;?>/images/edit.png" width="16" height="16" alt="Edit" /></a> &nbsp;
											<a href="?section=delete&page=<?=$page;?>&id=<?=$CurrentManageClass['classID'];?>&search_val=<?= $search_val; ?>" class="Link" title="Delete" onclick="return confirm('Are you sure? You want to delete this record.');"><img src="<?=$baseURL;?>/images/delete.png" width="16" height="16" alt="del" /></a>
										</td>
									  </tr>
									  <?php  $sr++; $count++;
											}
										 echo "</table>
												<div class=\"box-tools m-b-15 m-t-15\">
												<div class=\"pull-left\" style=\"width:30%; margin-top:15px;\"><b>Page " . $page ." of " . $totalPage . "</b></div>
												<div style=\"width:68%; text-align:right; float:right;\"><ul class=\"pagination pagination-sm m-b-10 m-t-10 pull-right\">" . $strPaging . "</ul></div>
											</div>";                
										   } else echo "<tr><td colspan=\"6\" style=\"text-align:center; color:#F00;\"><b>Sorry, No Department yet.</b></td></tr></table>";
              
									?>
    
                            </div>
							
                        </div>
						
                    </div>
					
					<?php         		                    	
					
					break;
					}
					?>
					
                </section>
                
            </aside>

        </div>
		
	<?php include $baseROOT . "/includes/footer.php"; ?> 
