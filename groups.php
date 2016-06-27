<?php 
$body_id = 'groupbody';
require_once('header.php'); 
?>

<script src='js/groupView.js'></script>
   <!-- <div id="quote_section"><br><br>Stay Tuned! Groups and Study Buddies Will Be Fully Launched 06/26/16 @6:00PM</div>-->

<div class="white_bg">

	<div class="container" val="">
      
          <div class="row successmsg">
              
          </div> 
    
       
    
          <div class="row errormsg">
              
          </div> 
     
<div class="col-xs-12 col-md-6 col-lg-6 col-sm-12" id="details" title="" style="display: none;">
			
        	<div title="" >
      
		<div class="reg-title" id= "groupViewTitle">
<div id="topic-title"></div>
         <ul id= "groupNavBar">
             <li class="groupNavElem" id= "detailsLi"><a href="#"><div class="img" id="chat-icon"> <img src= "images/detail.png" width="40px" alt=""></div>Details</a>
        </li>
            <li class="groupNavElem" id= "messagesLi"><a href="#">
                <div class="img" id="chat-icon"> <img src= "images/chat.png" width="40px" alt=""></div>Messages</a></li> 
             <li class="groupNavElem" id= "membersLi"> <a href="#"><div class="img" id="chat-icon"> <img src= "images/member.png" width="40px" alt=""></div>Members</a></li>
      </ul>

</div>
<div id="card">
<div class="details"> 
        <div class="login_box registration">
          <form method="post" action="" id="addgroupform" onsubmit="return editGroupValidation();">
            <input type="hidden" name="action" value="editgroup" />
<input type="hidden" id="maptype" value="detail"/>
            <input type="hidden" name="hdngroupid" id="hdngroupid" value="" />

            <div class="form-group">
              <label for="ag_class">Class Name</label>
 <input type="text" readonly="readonly" class="form-control" placeholder="Select Class" name="ag_topicname" id="ag_classname" value="">
            </div>
            <div class="form-group">
              <label for="ag_topicname">Topic Name</label>
              <input type="text" readonly="readonly" class="form-control" placeholder="Enter Topic Name" name="ag_topicname" id="ag_topicname" value="<">
            </div>

            <div class="form-group">
              <label for="ag_public">Group Type</label>
              <input type="text" readonly="readonly" class="form-control" placeholder="Enter Room no." name="ag_public" id="ag_public" value="">
            </div>

            <div class="form-group">
              <label for="ag_date">Date</label>
              <input type="text" readonly="readonly" class="form-control" name="ag_date" id="ag_date" value="">
            </div>
            <div class="form-group">
            <div id="time-range">
            	
                <label>Time: <span class="slider-time">
<input type="text" readonly="readonly" class="form-control" name="ag_time" id="ag_time" value="">

           
                </label>
                
                
            </div>
            </div>
            
            <div class="form-group">
              <label for="ag_room">Room Number</label>
              <input type="text" readonly="readonly" class="form-control" placeholder="Enter Room no." name="ag_room" id="ag_room" value="">
            </div>

            <div class="form-group">
              <label for="ag_location">Location</label>
              <div id="map2"></div>
 <input type="hidden" id="maptype" value="detail">
<input type="hidden" id="ag_location" value="">
              <input type="hidden" class="form-control" name="ag_location" id="ag_location_latlng" value="43.704472,-72.288951" readonly="true">
            </div>
<div class="edit">
<a href="http://libcal.dartmouth.edu/booking/studyrooms">Reserve a Room in Baker-Berry</a>
</div>
<div class="edit">
<a href="http://oracle-www.dartmouth.edu/dart/groucho/dartr25_wvprod.startup">Reserve a Room Elsewhere on Campus</a>
</div>

<div class="moredetailsbtn">
            
            </div>
          </form>

        </div>
</div>
<div class="messages"> 
<div id="wrapper" title="">



 
     
    <div id="chatbox"></div>
     
        <input name="usermsg" type="text" id="usermsg" size="63" />
        <input name="submitmsg" type="submit"  id="submitmsg" value="Send" />
</div>
</div>

<div class="members"> 
    <p class = 'membersTextHeaders' id= 'membersHeader'> Group Members </p>

<table style="width:100%" id= "membersDisplay">
  

</table>

<table style="width:100%">
  

</table>

</div>
      </div>
</div>
</div>


    	 <div class="row">
        <div class="col-md-6 col-sm-6">
        <div class="ms-group groups-css">

        <div class="responsive-table">
                  <table width="100%" id="myGroups" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td class="greenbg" colspan="3">My Study Groups</td>
                      </tr>
 
                          <tr>
                            <td colspan="3" class="no_record">No Groups Found.</td>
                          </tr>
                      </tbody>
                  </table>
                </div>
        </div>

        </div>

        <div class="col-md-6 col-sm-6">
        <div class="js-group groups-css">
        <div class="responsive-table">
                  <table width="100%" id="inviteGroups" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td class="greenbg" colspan="3">Pending Invites</td>
                      </tr>
 <tr>
                            <td colspan="3" class="no_record">No New Invites.</td>
                          </tr>
                   </tbody>
                  </table>
                </div>
        </div>
        </div>
        </div>

        <div class="col-md-6 col-sm-6">
        <div class="js-group groups-css">
        <div class="responsive-table">
                  <table width="100%" id="availGroups" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td class="greenbg" colspan="3">available study groups</td>
                      </tr>
                          
                          <tr>
                            <td colspan="3" class="no_record">No Groups Found.</td>
                          </tr>
                      
                        

                    

                   </tbody>
                  </table>
                </div>
        </div>
        </div>
        </div>
    </div>
    </div>
</div>






<?php require_once('footer.php'); ?>