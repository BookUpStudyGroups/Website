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
    </div><!--#user-classes-->

    <div id="left-side-buttons">
    	<a href="#" id="create-group">Add New Group</a>
    </div><!--#left-side-buttons-->
<div id="center-location"> Dartmouth College </div>
</div><!--#map-container-->
<table id="user-id-table">

</table>  
<div id='user-classes'>
<ul></ul>
</div>
<table id="available-groups-table">



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
          <form method="post" action="" id="addgroupform" onsubmit="return submitNewGroup();">
            
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
<script>
/*
function submitNewGroup() {

    var returnValue = addGroupValidation();
    var time = $.trim($(".slider-time").text());
    var time2 = $.trim($(".slider-time2").text());
    var date = $.trim($("#ag_date").val());
    var regDate = new Date(date + " " + time);
    var regDate2 = new Date(date + " " + time2);

    var initialArray = new Array();
    initialArray.push(getInitials(Parse.User.current().get("fullName")));

    var Group = Parse.Object.extend("studyGroup");
    var newGroup = new Group();

    newGroup.set("location_latlng", $("#ag_location_latlng").val());
    newGroup.set("groupName", $("#ag_topicname").val());
    newGroup.set("groupSize", parseInt($("#ag_size").val()));
    newGroup.set("location", $("#ag_room").val());
    newGroup.set("endDate", regDate2);
    newGroup.set("startDate", regDate);
    newGroup.set("initialArray", initialArray);
    newGroup.set("creator", Parse.User.current());
    var relation = newGroup.relation("members");
    relation.add(Parse.User.current());
    newGroup.set("numStudents", 1);

    newGroup.save(null, {
        success: function(newGroup) {
            // Execute any logic that should take place after the object is saved.
            alert('New group created with objectId: ' + newGroup.id);
            var classes = Parse.Object.extend("Class");
            var classQuery = new Parse.Query(classes);
            classQuery.get($("#ag_class").val(), {
                success: function(groups) {
                    var relation = groups.relation("classGroups");
                    relation.add(newGroup);
                    groups.save();



                },
                error: function(object, error) {
                    // The object was not retrieved successfully.
                    // error is a Parse.Error with an error code and message.
                    alert("Error: Courses could not be retrieved.");
                }
            });
            return true;
        },
        error: function(newGroup, error) {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            alert('Failed to create new group, with error code: ' + error.message);
        }
    });

    return false;

}



window.onload = function() {
    var classes = Parse.Object.extend("Class");
    var classQuery = new Parse.Query(classes);

    currentUser = Parse.User.current();
    classQuery.equalTo("students", Parse.User.current());
    classQuery.ascending("department", "number");
    // execute the query
    //classQuery.include("classGroups");
    classQuery.find({
        success: function(results) {
            for (var i = 0; i < results.length; i++) {

                var getClassDetails = new RSVP.Promise(function(fulfill) {
                    var prof = results[i].get("prof");
                    var dep = results[i].get("department");
                    var title = results[i].get("title");
                    var depId = results[i].get("depId");
                    var num = results[i].get("number");
                    var per = results[i].get("period");
var groupRelation=results[i].relation("classGroups");
var id=results[i].id;
                    $("#ag_class.form-control").append("<option value=" + id + ">" + title + " [" + dep + num + "] </option>");
                    var classDetails = new Array();
                    classDetails.push(prof);
                    classDetails.push(dep);
                    classDetails.push(title);
                    classDetails.push(per);
                    classDetails.push(depId);
                    classDetails.push(groupRelation);

                    classDetails.push(num);
                    fulfill(classDetails);
                });
                getClassDetails.then(function(classDetails) {
                    var prof = classDetails[0];
                    var dep = classDetails[1];
                    var title = classDetails[2];
                    var per = classDetails[3];
                    var depId = classDetails[4];
                    var groups = classDetails[5];
                    var number = classDetails[6]
                    var groupQuery = groups.query();

                    groupQuery.find({
                        success: function(results) {

                            // Messages for this group
                            for (var j = 0; j < results.length; j++) {
var groupId=results[j].id;
var groupName=results[j].get('groupName');
var creator=results[j].get("creator").id;
var location=results[j].get("location");
var latlng=results[j].get("location_latlng");
var startDate=results[j].get("startDate");
var startTime=results[j].get("startDate");
var endTime=results[j].get("endDate")

                                $("#available-groups-table>tbody").append("<tr id='" + groupId + "'><td class='topicname'>" + groupName + "</td><td class='class_id'>" + depId + "</td><td class='group_id'>" + groupId + "</td><td class='class_name'>" + title + "</td><td class='class_number'>" + number + "</td><td class='user_id'>" + creator + "</td><td class='location'>" + location + "</td><td class='latlng'>" + latlng + "</td><td class='on_date'>" + startDate + "</td><td class='room'>" + location + "</td><td class='start_time'>" + startTime + "</td><td class='end_time'>" + endTime + "</td></tr>");

                            }

                        }, //success
                        error: function(results, error) {
                            alert("Didn't make it");
                        }
                    }); //groupQuery
                }); //getClassDetails promise
                //for



            }
        },
        error: function(results, error) {
            alert("this isn't working");
        }
    });

};
*/
</script>
  <!--
  <script language="JavaScript" src="http://feed2js.org//feed2js.php?src=http%3A%2F%2Fevents.dartmouth.edu%2Fsearch.rss%3Fbegin%3D2016-05-16%26end%3D2016-05-16%26audience_ids%3D3&chan=y&desc=1&utf=y"  charset="UTF-8" type="text/javascript"></script>

<noscript>
<a href="http://feed2js.org//feed2js.php?src=http%3A%2F%2Fevents.dartmouth.edu%2Fsearch.rss%3Fbegin%3D2016-05-14%26end%3D2016-05-14%26audience_ids%3D3&chan=y&desc=1&utf=y&html=y">View RSS feed</a>
</noscript>
<script>

</script>

-->
<?php require_once('footer.php'); ?>