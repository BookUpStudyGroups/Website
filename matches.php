<?php 
$body_id = 'matchbody';

require_once('header.php'); 
?>
<div class="white_bg">
	<div class="container">
     
          <div class="row successmsg">
          </div> 
      
      
          <div class="row errormsg">
             
          </div> 
     
<div class="col-md-12 col-sm-12 col-xs-12" id=placeholder>
        <div class="row" id="button_row">
<h2>Study Buddy Matchmaking Coming Soon!</h2>
</br>
</div>
</div>

    	<div class="row">
        <div class="col-md-6 col-sm-6">
        <div class="ms-group groups-css">

        
        <div class="responsive-table">
                  <table width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td class="greenbg" colspan="3">My Study Buddies</td>
                      </tr>
                     
                          <tr>
                            <td colspan="3" class="no_record">No Study Buddies Found.</td>
                          </tr>
                     
                        <tr>
                          <td width="70%">

<div class="col-sm-5 col-xs-5 col-md-4 col-lg-3">
<img class="center-block" id="classimg" width=100% src="images/.png">
</div>
<div class="col-sm-7 col-xs-7 col-md-8 col-lg-9">
 
<div class="img"><img width="50px" src="" alt=""></div>
<div class="name"></div>

                            <br />
                            <i></i>
</div>
                          </td>
                          <td width="30%">
<div class="edit"><a href="#">Details</a></div>

                              <div class="delete"><a href="matches.php?action=delete&id=">Unmatch</a></div>
                            
                          </td>
                        </tr>


                      <tr>
                    </tr></tbody>
                  </table>
                </div>
        </div>
        </div>
        <div class="col-md-6 col-sm-6">
        <div class="js-group groups-css">
        <div class="responsive-table">
                  <table width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td class="greenbg" colspan="3">Past Matches</td>
                      </tr>
                      </tbody>
                  </table>
                </div>
        </div>
        </div>
        </div>
    </div>
</div>

   
<?php require_once('footer.php'); ?>