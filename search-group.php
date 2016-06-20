<?php

$body_id = 'search_group_body';


?>
<link rel=stylesheet" href="css/uikit.min.css"/>
<script src="js/jquery.min.js"></script>
<script src="js/uikit.min.js"></script>
        <!-- notify CSS -->
        <link rel="stylesheet" href="css/components/notify.css">
        <!-- notify Javascript -->
        <script src="js/components/notify.js"></script>
<?php require_once('header.php'); ?>


<div id="map-container">
	<div id="map"></div><!--#map-->
    
    <div id="user-classes">
       	<ul>                    
	

		</ul>
                          <a href="#" id="create-group">Add New Group</a>
    </div><!--#user-classes-->

    <div id="left-side-buttons">
    	<!--<a href="#" id="create-group">Add New Group</a>-->
    </div><!--#left-side-buttons-->
<input id="center-location" type="text" name="center-location" value="Dartmouth College"> 
</div><!--#map-container-->
<table id="user-id-table">
                         <tbody></tbody>
</table>  
<div id='user-classes'>
</div>
<table id="available-groups-table">
                                  <tbody></tbody>
    


</table>


<div id="group-details-div">
		<div class="close"><i class="fa fa-times"></i></div>
    <div class="reg-title">Join a Group</div>
          <div class="profileimg" id="profileimgId">
            <div class="row">
              <div class="col-md-12 col-sm-12">
                <div class="information">
                  <div class="responsive-table">
                    <input type="hidden" id="hiddengroupId" value="0">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" id="selected-group-info">
                      
                      <tr style="display:none;">
                        <td class="leftCol"><strong>Location:</strong></td>
                        <td class="rightCol location"></td>
                      </tr>
                      <tr>
                        <td class="leftCol"><strong>Class:</strong></td>
                        <td class="rightCol class"></td>
                      </tr>
                      <tr>
                        <td class="leftCol"><strong>Topic:</strong></td>
                        <td class="rightCol tname"></td>
                      </tr>
                      <tr>
                        <td class="leftCol"><strong>Date:</strong></td>
                        <td class="rightCol on_date"></td>
                      </tr>
                      <tr>
                        <td class="leftCol"><strong>Time:</strong></td>
                        <td class="rightCol start_end_time"></td>
                      </tr>
                    </table>
                  </div><!--.responsive-table-->
                  
                  <div class="moredetailsbtn">
                  	<a href="javascript:void(0);">More Details</a>
                  </div><!--.moredetailsbtn-->
                  <div class="more-details">
                    

                  </div>

                </div><!--.more-details-->
              </div>
              </div>
            </div>
  </div><!--group-details-div--> 
  
  
  <div id="create-group-div" class="resizable">
		<div class="close"><i class="fa fa-times"></i></div>
  	<div class="reg-title">Add New Group</div>
        <div class="login_box registration" id="createGroupInnerId">
          <form method="post" action="" id="addgroupform" onsubmit="submitNewGroup();return false; ">
            
            <div class="form-group">
              <label for="ag_class">Class Name</label>
              <select class="form-control" name="ag_class" id="ag_class">
				      <option value=''>Select Class</option>
              
              </select>
            </div>
            <div class="form-group">
              <label for="ag_topicname">Topic Name</label>
              <input type="text" class="form-control" placeholder="Enter Topic Name" name="ag_topicname" id="ag_topicname" value="">
            </div>
            <div class="form-group" id="dateDivId">
              <label for="ag_date">Date</label>
              <input type="text" class="form-control datepicker" name="ag_date" id="ag_date" value="">
            </div>
            <div class="form-group">
            <div id="time-range">
            	
                <label>Time: <span class="slider-time">10:00 AM</span> - <span class="slider-time2">12:00 PM</span>            
                </label>
                
                <div class="sliders_step1">
                    <div id="slider-range"></div>
                </div>
            </div>
            </div>
            
            <div class="form-group">
              <label for="ag_room">Location</label>
              <input type="text" class="form-control" placeholder="Enter Room Number" name="ag_room" id="ag_room" value="">
            </div>
<div class="form-group">
              <label for="ag_size">Max Group Size</label>
              <select class="form-control" name="ag_size" id="ag_size">
<option value='3'>3</option>
<option value='4'>4</option>
<option value='5'>5</option>
<option value='6'>6</option>
<option value='7'>7</option>
<option value='8'>8</option>              
              </select>
            </div>
            <div class="form-group" style="display:none;">
              <label for="ag_location">Location</label>
              <div id="map2"></div>
              <input type="hidden" class="form-control" name="ag_location" id="ag_location" readonly="true">
            </div>

            <!--Rdio buttons for open or closed groups -->
            <div class="form-group">
              <label for="ag_size">Group Type</label>
                
                <input id="publicRadio"type="radio" name= "isPublic" value= "yes" checked>Public
                <input id="privateRadio"type="radio" name="isPublic" value= "no" ]> Private
              
            </div>

            <!-- Dartmouth College Hanover New Hampshire United States 03755 -->
            <div class="submit">
            	<input type="hidden" name="ag_location_latlng" id="ag_location_latlng" value="" />
            	<input type="hidden" name="ag_start_time" id="ag_start_time" value="" />
            	<input type="hidden" name="ag_end_time" id="ag_end_time" value="" />
				      <button class="btn btn-default" title="Add" type="submit" name="ag_submit" id="ag_submit">Add Group</button>
            </div>
          </form>
        </div>
  </div><!--#create-group-div-->

<?php require_once('footer.php'); ?>