//mike.js

$(document).ready(function(){

Parse.initialize("rLEJCpuVNM98AqXD2s49TvVJAO1eCYULyhpE824l",
    "Lxb9dOrCNS9h7E9246FlgrJDk0A1FcTaV7o83F9x",
    "SaelZZHqIg1ra22K978NdaQ32nTiNihb4DNd6CML");

if (Parse.User.current()) {
        $(".nav li").each(function(index) {
            if (1 <= index && index < 5) {
                $(this).css("display", "inline-block");
            }

        });
$("#Home").attr("href","profile.php");
        document.getElementById("logout").addEventListener("click", function() {
            Parse.User.logOut();
        });
    } else {
        $(".nav li").each(function(index) {
            if (index == 0 || index >= 5) {
                $(this).css("display", "inline-block");
            }
        });
    }
if($("#loginbody").length>0){
if (Parse.User.current()) {
window.location = "profile.php";
}
}
if($("#registerbody").length>0){
if (Parse.User.current()) {
window.location = "profile.php";
}
}
if($("#homebody").length>0){
if (Parse.User.current()) {
window.location = "profile.php";
}
}
if($("#matchbody").length>0){
$('#navigation ul li a').each(function(i, obj){
if (i==3){
$(this).css("background-color","#FFFFFF");
    $(this).css("color","#6CC8E8");
    $(this).css("border-bottom","3px solid #6CC8E8");
}
});
if (!Parse.User.current()) {
window.location = "index.php";
}
}
if($("#groupbody").length>0){
$('#navigation ul li a').each(function(i, obj){
if (i==2){
$(this).css("background-color","#FFFFFF");
    $(this).css("color","#6CC8E8");
    $(this).css("border-bottom","3px solid #6CC8E8");
}
});
if (!Parse.User.current()) {
window.location = "index.php";
}
}
if($("#search_group_body").length>0){
$('#navigation ul li a').each(function(i, obj){
if (i==1){
$(this).css("background-color","#FFFFFF");
    $(this).css("color","#6CC8E8");
    $(this).css("border-bottom","3px solid #6CC8E8");
   
}
});
if (!Parse.User.current()) {
window.location = "index.php";
}
}
if($("#profilebody").length>0){
    $('#shark_secret').click(function(event){
        if($("#slogan_section iframe").length>0){
            $("#slogan_section iframe").remove();
            $("#slogan_section br").remove();
        }else{
        $("#slogan_section").prepend('<iframe width="560" height="315" src="https://www.youtube.com/embed/XiWl8Ge1Hl8" frameborder="0" allowfullscreen></iframe><br>');
        }
    });
    
$('#navigation ul li a').each(function(i, obj){
if (i==0){
$(this).css("background-color","#FFFFFF");
    $(this).css("color","#6CC8E8");
    $(this).css("border-bottom","3px solid #6CC8E8");
}
});
if (!Parse.User.current()) {
window.location = "index.php";
}
}
	if($("#contactbody").length>0){
$('#navigation ul li a').each(function(i, obj){
if (i==5){
$(this).css("background-color","#FFFFFF");
    $(this).css("color","#6CC8E8");
    $(this).css("border-bottom","3px solid #6CC8E8");
}
});
if (!Parse.User.current()) {
window.location = "index.php";
}
Date.weeksBetween = function( date1, date2 ) {
  //Get 1 day in milliseconds
  var one_day=1000*60*60*24;

  // Convert both dates to milliseconds
  var date1_ms = date1.getTime();
  var date2_ms = date2.getTime();

  // Calculate the difference in milliseconds
  var difference_ms = date2_ms - date1_ms;
    
  // Convert back to days
  var difference_days = Math.round(difference_ms/one_day); 
  var difference_weeks = Math.round(difference_days/7);
  // Convert to weeks and return
  return Math.abs(difference_weeks);
}
var today, spring_start,spring_end,summer_start,summer_end,fall_start,fall_end,winter_start,winter_end, text,text1,text2;
today = new Date();

//Get the day of the week
var weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

text1 = weekday[today.getDay()];

//Set the term calender dates
spring_start = new Date();
spring_start.setFullYear(2016, 2, 28);
spring_end = new Date();
spring_end.setFullYear(2016, 5, 6);

summer_start = new Date();
summer_start.setFullYear(2016, 5, 23);
summer_end = new Date();
summer_end.setFullYear(2016, 7, 30);

fall_start = new Date();
fall_start.setFullYear(2016, 8, 12);
fall_end = new Date();
fall_end.setFullYear(2016, 10, 23);

winter_start = new Date();
winter_start.setFullYear(2017, 0, 4);
winter_end = new Date();
winter_end.setFullYear(2017, 2, 15);

//Update date according to date
if (today>=spring_start && today<=spring_end) {
    text = "Spring 2016";
    temp=new Date();
    temp.setFullYear(2016, 2, 27);
    text2 = Date.weeksBetween(today,temp)+1;
} else if (today>spring_end && today<summer_start){
    text = "Summer Break 2016";
    temp=new Date();
    temp.setFullYear(2016, 5, 5);
    text2 = Date.weeksBetween(today,temp);
}
else if (today>=summer_start && today<=summer_end){
    text = "Summer 2016";
    temp=new Date();
    temp.setFullYear(2016, 5, 19);
    text2 = Date.weeksBetween(today,temp);
}
else if (today>summer_end && today<fall_start){
    text = "Fall Break 2016";
    temp=new Date();
    temp.setFullYear(2016, 7, 28);
    text2 = Date.weeksBetween(today,temp);
}
else if (today>=fall_start && today<=fall_end){
    text = "Fall 2016";
    temp=new Date();
    temp.setFullYear(2016, 8, 11);
    text2 = Date.weeksBetween(today,temp);
}
else if (today>fall_end && today<winter_start){
    text = "Winter Break 2016";
    temp=new Date();
    temp.setFullYear(2016, 10, 20);
    text2 = Date.weeksBetween(today,temp);
}
else if (today>=winter_start && today<=winter_end){
    text = "Winter 2017";
    temp=new Date();
    temp.setFullYear(2016, 1, 1);
    text2 = Date.weeksBetween(today,temp);
}
else if (today>winter_end){
    text = "Spring Break 2017";
    temp=new Date();
    temp.setFullYear(2017, 2, 12);
    text2 = Date.weeksBetween(today,temp);
}
//text is temp
text2="";
document.getElementById("date").innerHTML = text1+", Week 10"+text2+", "+text;
}
	if($("#search_group_body").length > 0){
if (!Parse.User.current()) {
window.location = "index.php";
}
		$(".datepicker").datepicker({
			minDate: 0,
			beforeShow:function(textbox, instance){
				    $('#ui-datepicker-div').css({
				        position: 'absolute',
				        left:'-300px',
				        right: '200'
				    });
				    $('#ui-datepicker-div').css('left', '50px');	
				    $('#dateDivId').append($('#ui-datepicker-div'));
				    //$('#ui-datepicker-div').hide();

				}

		}).datepicker('setDate', new Date());

	}else{
		if($(".datepicker").val() == ""){
			$(".datepicker").datepicker({minDate: 0}).datepicker('setDate', new Date());	
		}else{
			$(".datepicker").datepicker({minDate: 0});	
		}
		
	}
	
	var srartTimeSlider = 600;
	var endTimeSlider = 720;
	if($("#ag_start_time_1").length >0 && $("#ag_start_time_1").val() != ""){
		srartTimeSlider = $("#ag_start_time_1").val();
	}

	if($("#ag_end_time_1").length >0 && $("#ag_end_time_1").val() != ""){
		endTimeSlider = $("#ag_end_time_1").val();
	}
	$("#slider-range").slider({
		range: true,
		min: 360,
		max: 1440,
		step: 15,
		values: [srartTimeSlider, endTimeSlider],
		slide: function (e, ui) {
			var hours1 = Math.floor(ui.values[0] / 60);
			var minutes1 = ui.values[0] - (hours1 * 60);
	
			if (hours1.length == 1) hours1 = '0' + hours1;
			if (minutes1.length == 1) minutes1 = '0' + minutes1;
			if (minutes1 == 0) minutes1 = '00';
			if (hours1 >= 12) {
				if (hours1 == 12) {
					hours1 = hours1;
					minutes1 = minutes1 + " PM";
				} else {
					hours1 = hours1 - 12;
					minutes1 = minutes1 + " PM";
				}
			} else {
				hours1 = hours1;
				minutes1 = minutes1 + " AM";
			}
			if (hours1 == 0) {
				hours1 = 12;
				minutes1 = minutes1;
			}
	
	
	
			$('.slider-time').html(hours1 + ':' + minutes1);
	
			var hours2 = Math.floor(ui.values[1] / 60);
			var minutes2 = ui.values[1] - (hours2 * 60);
	
			if (hours2.length == 1) hours2 = '0' + hours2;
			if (minutes2.length == 1) minutes2 = '0' + minutes2;
			if (minutes2 == 0) minutes2 = '00';
			if (hours2 >= 12) {
				if (hours2 == 12) {
					hours2 = hours2;
					minutes2 = minutes2 + " PM";
				} else if (hours2 == 24) {
					hours2 = 11;
					minutes2 = "59 PM";
				} else {
					hours2 = hours2 - 12;
					minutes2 = minutes2 + " PM";
				}
			} else {
				hours2 = hours2;
				minutes2 = minutes2 + " AM";
			}
	
			$('.slider-time2').html(hours2 + ':' + minutes2);
		}
	}).draggable();//Time slider
	

	if($(".profile_heading").length > 0){
		$(window).on('load resize', function(){
	      var winHeight = $(window).height();
	      var headerHeight = $("header#header").height() + 450;//20 for padding
	      //set slider sections min-height
	      $(".top_four_icons .container").css('height', (winHeight - headerHeight) + 'px');
	      
	      $(".top_four_icons #spacer").height( (winHeight-headerHeight ) * 0.5 );
	    });//window load or resize
	  	
	}	

	if($("#createGroupInnerId").length > 0){
		$(window).on('load resize', function(){
	      var winHeight = $(window).height();
	      var headerHeight = 50;//20 for padding
	      //set slider section's min-height
	      var finalHeight = ((winHeight * 65)/100) - 50;
	      $("#createGroupInnerId").css('height', finalHeight + 'px');
	      $("#profileimgId").css('height', finalHeight + 'px');
	    });//window load or resize
	  	
	}	
  
    


	if( $("#registerform").length )
	{
		var classesRow = $(".classesrow").html();
		
		if( ! $("#profilebody").length )
		{

			if( $(".classesrow").length == 1 )
			{
				console.log("insert row called on page load");
				$("#classesrow1").after('<div class="classesrow" id="classesrow2">'+classesRow+'</div>');				
				$("#classesrow2 select").val('');
			}
		}
		adjustAddRemoveCourseButtons();
		
		$("#add-course-row").on("click", function(e){
			e.preventDefault();			
			rows = $("#registerform .classesrow").length;			
			if( rows < 4 )
			{
				var rowHTML = $("#classesrow1").html();
				$("#classesrow"+rows).after('<div class="classesrow" id="classesrow'+(rows+1)+'">'+rowHTML+'</div>');		
								
				$("#classesrow"+(rows+1)+" select").val('');
				adjustAddRemoveCourseButtons();
			}
		});//#add-course-row click
		
		$("#remove-course-row").on("click", function(e){
			e.preventDefault();			
			rows = $("#registerform .classesrow").length;			
			if( rows > 1 )
			{
				$("#classesrow"+rows).remove();
				adjustAddRemoveCourseButtons();
			}
		});//#add-course-row click
	}//#registerform check
	
		
	if( $("#redirect-in-10").length )
	{
		window.location = $("#redirect-in-10").val();	
	}//if to be redirected
	if($("#matchbody").length){
    
}		
	//MAP SCRIPT START HERE	
//FIND THIS, edited so gray window appears #search-grou-bo
	if($("#map2").length){
if($("#groupbody").length){
    var selectedGroup;
    var selectedColor;
function selectGroup(idTag) {
    var groupId = idTag.slice(1);
    document.getElementById(groupId).style.outline = "thin outset #00FF7F";
    //document.getElementById(groupId).style.backgroundColor = "#85cf85";
    //document.getElementById(idTag).getElementsByTag("a")[0].style.backgroundColor = "#FFFFFF";
}

function leaveGroup(idTag) {
    $('#details').hide();
    var groupId = idTag.slice(1);
    var group = Parse.Object.extend("studyGroup");
    var groupQuery = new Parse.Query(group);
    groupQuery.get(groupId, {
        success: function(results) {
            var numStudents = results.get("numStudents");
            var groupSize = results.get("groupSize");
            var fullName = Parse.User.current().get("fullName");
            var initials = getInitials(fullName);
            results.remove("initialArray", initials);

            var members = results.relation("members");
            results.increment("numStudents", -1);

            members.remove(Parse.User.current());
            results.save();
            $('.row successmsg').append("Group exited successfully.");
            location.reload();

        },
        error: function(object, error) {
            $('.row errormsg').append("Error: Group exit failed.");
        }
    });
}



function joinGroup(idTag) {
    var groupId = idTag.slice(1);
    var group = Parse.Object.extend("studyGroup");
    var groupQuery = new Parse.Query(group);
    groupQuery.get(groupId, {
        success: function(results) {
            var numStudents = results.get("numStudents");
            var groupSize = results.get("groupSize");
            if (numStudents < groupSize) {
                var fullName = Parse.User.current().get("fullName");
                var initials = getInitials(fullName);
                var initialArray = results.get("initialArray");

                var members = results.relation("members");


                members.add(Parse.User.current());
                results.increment("numStudents");
                initialArray.push(initials);
                results.set("initialArray", initialArray);
                results.save();
                $('.row successmsg').append("Group joined successfully.");
                location.reload();
            }
        },
        error: function(object, error) {
            $('.row errormsg').append("Error: Group join failed.");
        }
    });
}

function toggleGroupViewDetails(){
		if($("#card .messages").is(":visible")){
			$("#card .messages").hide();
		}
		else{
			$("#card .members").hide();
		}
	$("#card .details").show("slow","swing");
	console.log("deatils show, other 2 hidden")
}

function toggleGroupViewMessages(){

	if($("#card .details").is(":visible")){
		$("#card .details").hide();
	}
	else{
		$("#card .members").hide();
	}
	$("#card .messages").show("slow","swing");
	console.log("messages show, other 2 hidden")
}

function toggleGroupViewMembers(){
	if($("#card .messages").is(":visible")){
		$("#card .messages").hide();
	}
	else{
		$("#card .details").hide();
	}
	$("#card .members").show("slow","swing");
	

}

function leaveGroupView(idTag,origColor) {
var groupId=idTag;
    $('#availGroups').show("slow","swing");
    $('#details').hide();
$('#'+groupId).css("background-color", origColor);
$('#1'+groupId+' span').text('View');
$('#1'+groupId).unbind();
$('#1'+groupId).bind("click", function() {
                                    focusGroupView(this.id)
                                });
}

function focusGroupView(idTag){
    if (typeof selectedGroup !=undefined){
        leaveGroupView(selectedGroup,selectedColor);
    }
    selectedGroup=idTag.slice(1);
    selectedColor=$('#'+idTag.slice(1)).css("background-color");
    
    $('#availGroups').hide("slow","swing");
$('#myGroups tr').each(function(index){
if(index>1){
//leaveGroupView(.css( "background-color" )
}
});
//$("#card").flip({trigger: 'manual',autoSize: 'true'});
$("#card .messages").hide();
$("#card .members").hide();
$("#card .details").show("slow","swing");
console.log("deatils show, other 2 hidden")


$('#details').fadeIn('fast', 'linear');
google.maps.event.trigger(document.getElementById('map2'), "resize");
        var groupId = idTag.slice(1);
        $('#details').prop('title', groupId);
var origColor=$('#'+groupId).css("background-color");
$('#'+groupId).css("background-color", "#e5f8ff");
$('#1'+groupId+' span').text('Hide');
$('#1'+groupId).unbind();
$('#1'+groupId).bind("click", function() {
                                    leaveGroupView(groupId,origColor);
                                });

//init groupnames and object id
var studyGroup = Parse.Object.extend("studyGroup");
        var groupQuery1 = new Parse.Query(studyGroup);

        var groupQuery = new Parse.Query(studyGroup);
        groupQuery.get(groupId, {
            success: function(results) {

           var groupName4View =results.get("groupName");
           var isPrivate = results.get("isPrivate");
           var membersRelation = results.get("members");

           //query all memebers in this group
           var membersQuery= membersRelation.query();
          	membersQuery.find({
  				success: function(members) {
    				$('#membersDisplay tr').remove();
					//get member's full name and email
    				for(i=0; i<members.length; i++){

    					var memName = members[i].get("fullName");
    					var memEmail = members[i].get("username");

    					console.log(memEmail);

    					//Find person's class year
    					var memClassYear= memEmail.split(".");
    					var arrayIndex= memClassYear.length -2;
    					memClassYear= memClassYear[arrayIndex].split("@");
    					memClassYear= " '"+ memClassYear[0];

    					memName= memName+ memClassYear;

    					//get mailto email link
    					var emailLink="mailto:"+memEmail;

    					//append member to member card 
    					$('#membersDisplay').append(
    						"<tr class= 'memberBox'> <td><p class= 'memberNameText'><a href= '"+emailLink+"'> <img class= 'mailImg' src= 'images/email.png'></a>&nbsp&nbsp"+memName+ "</p>  </td> </tr>"
    						);

    					console.log("appened html");

    				}

    				//psudeo group is not full variable
    				var groupFull= false;

    				if(groupFull){

    				}

    				else{
    					//pretend invite button
    					$('#membersDisplay').append(
    					"<tr> <td> <div> <p class = 'membersTextHeaders'> Add Classmate </p> </div></td>  </tr> "+
    					"<tr><td><img id='submitButt' class= 'mailImg' src= 'images/add.png'>&nbsp&nbsp<input id='emailPlaceholder' type='text'placeholder=' Enter Email'></td> </tr>"
    					);
                        
                     	//for invite button click
        				$('#submitButt').click( function(){
        					sendInvite(memName)
        				});

        				document.getElementById('#emailPlaceholder').onkeydown = function(event) {
        					var e = event || window.event;
    						if (e.keyCode == 13) {
    							sendInvite(memName);
    						}
    						else{
    							console.log("not 13");
    						}
    					}
    				}				
  				},

  				error: function(error) {
    				alert("Error: COuld not retirve group Members Data");
  					}
			});

//method to send an invite
function sendInvite(memName){

		//check if dartmouth email
        var email= $('#emailPlaceholder').val();
        var eSplit= email.split("@");

        //nothing in email box
        if(email==""){
		alert("Please input classmate's email in textfield");
		}

		//not a dartmouth email
		else if(eSplit[1]!="dartmouth.edu"){

			alert("Please invite a Classmate with their valid Dartmouth Email");

		}

		//is  valid dartmouth email and text no blank
		else{

			//clear input field
			$('#emailPlaceholder').val("");

			//get current user
			var inviteSender= Parse.User.current();

			//query all users
			var users = Parse.Object.extend("User");
			var userQuery = new Parse.Query(users);

			//create parse invite object
			var userExists;
			var PrivateInvite = Parse.Object.extend("PrivateInvite");
			var invite = new PrivateInvite();

			//set data for parse object
			invite.set("Email", email);
			invite.set("User", inviteSender);
			invite.set("Redeemed", false);
			invite.set("Group", groupId);

			//find if email in input is already a user
			userQuery.equalTo("username", email);
			userQuery.find({

					success: function(user) {

					//if the user was found make inviteObject
					if(user.length==1){

						userExists= true;
		    			invite.set("userExists", userExists);

		    			//append data for invite to database
		    			invite.save(null, {
								success: function(PrivateInvite) {

								},

							error: function(PrivateInvite, error) {
							// Execute any logic that should take place if the save fails.
							// error is a Parse.Error with an error code and message.
							    alert('Failed to create new object, with error code: ' + error.message);
							}

						});

						alert("Invite sent to "+email);

						}

						//the user wasn't found send email invite
						else{
							
						//get varibles for email and parse object
	 					var Class= $('#ag_classname').val();
	 					userExists= false;


						invite.save(null, {
								success: function(PrivateInvite) {

							    //vars for email bosy+ subject		
								var subject= "You've been Invited to Study!";
								var body= memName+" invites you to join Study Group titled "+groupName4View+" for your class "+Class+".%0D%0A%0D%0A Sign up with your Dartmouth Email and go to www.BookUp.org to Join!";
						
								window.location.replace('mailto:'+email+'?subject='+subject+'&body='+body);
							
							  },

							  error: function(PrivateInvite, error) {
							    // Execute any logic that should take place if the save fails.
							    // error is a Parse.Error with an error code and message.
							    alert('Failed to create new object, with error code: ' + error.message);
							  }

						});
						}
					},

					error: function(error) {
					alert("Error: " + error.code + " " + error.message);

					}
			});
	}
}

 $('#ag_classname').val($('#'+groupId+' #classname').text());
 $('#ag_topicname').val(groupName4View);
                $('#topic-title').empty();
 $('#topic-title').append(groupName4View);
$('#ag_room').val(results.get("location"));
$('#ag_location_latlng').val(results.get("location_latlng"));

//update group type data
if (!isPrivate) {
	$('#ag_public').val("Public");
}else{
	$('#ag_public').val("Private");
}

if($("#ag_location_latlng").length > 0 && $("#ag_location_latlng").val() != ""){
        		var latlangdata = $("#ag_location_latlng").val();
     		
var dataArray = latlangdata.split(",");
        		latLngmarker ={lat: parseFloat(dataArray[0]), lng: parseFloat(dataArray[1])};
        		placeMarker(latLngmarker, map);
map.setCenter(latLngmarker);
}

var time = new Date(results.get("endDate"));
                            var hours = time.getHours();
                            if (hours > 12) {
                                hours -= 12;
                                var ampm = "pm";
                            } else if (hours === 0) {
                                hours = 12;
                                var ampm = "pm";
                            } else {
                                var ampm = "am";
                            }
                            var minutes = time.getMinutes();
                            if (minutes < 10) {
                                var min = "0" + minutes;
                            } else {
                                var min = minutes;
                            }
                            var regTime = hours + ":" + min + " " + ampm;

var month=time.getMonth();
var day=time.getDate();
var year=time.getFullYear();
var regDate=month+"/"+day+"/"+year;
$('#ag_date').val(regDate);
$('#ag_time').val(regTime);



},
error: function(results,error){
alert("Error: Could not retrieve group data.");
}
});
joinChatroom(idTag);
}
    function joinChatroom(idTag) {
        var groupId = idTag.slice(1);
        $('#wrapper').prop('title', groupId);
$('#chatbox').empty();
        var studyGroup = Parse.Object.extend("studyGroup");
        var groupQuery = new Parse.Query(studyGroup);
        groupQuery.get(groupId, {
            success: function(result) {
                // The object was retrieved successfully.
                var relation = result.relation("messages");
                var messageQuery = relation.query();
                messageQuery.ascending("createdAt");
                messageQuery.include("from");
                messageQuery.find({
                    success: function(messages) {

                        // Messages for this group
                        for (var i = 0; i < messages.length; i++) {

                            var sender = messages[i].get("from").get("fullName");
                            var message = messages[i].get("message");
                            //make timestamp look good
                            var time = new Date(messages[i].get("createdAt"));
                            lastChecked = time;
                            var hours = time.getHours();
                            if (hours > 12) {
                                hours -= 12;
                                var ampm = "pm";
                            } else if (hours === 0) {
                                hours = 12;
                                var ampm = "pm";
                            } else {
                                var ampm = "am";
                            }
                            var minutes = time.getMinutes();
                            if (minutes < 10) {
                                var min = "0" + minutes;
                            } else {
                                var min = minutes;
                            }
                            var regTime = hours + ":" + min + " " + ampm;

                            var myName = currentUser.get("fullName");
                            if (myName == sender) {

                                $("#chatbox").append("<div class='msgrow' align='right'><div class='col-md-10 col-sm-10'><div class='selfmsg'><div class='msgbody'>" + message + "</div><div class='timestamp'>" + regTime + "</div></div></div><div class='col-md-2 col-sm-2'><div class='msgicon'>" + getInitials(sender) + "</div></div></div>");
                            } else {
                                $("#chatbox").append("<div class='msgrow' align='left'><div class='col-md-2 col-sm-2'><div class='msgicon'>" + getInitials(sender) + "</div></div><div class='col-md-10 col-sm-10'><div class='othermsg'><div class='msgbody'>" + message + "</div><div class='timestamp'>" + regTime + "</div></div></div></div>");
                            }
                            //$("#chatbox").append("<li><b>"+sender+":</b> "+message+"</li>");
                            //$("#chatbox").append("<li><i><sup>Sent At "+time.getHours()+":"+time.getMinutes()+" On "+time.getMonth()+"/"+time.getDate()+"/"+time.getFullYear()+"</sup></i></li>");
                        }
                        var chatWindow = document.getElementById("chatbox");
                        chatWindow.scrollTop = chatWindow.scrollHeight;
                    }
                });
                window.setInterval(function() {
                    updateMessages($('#wrapper').prop('title'));

                }, 3000);
                document.getElementById("submitmsg").addEventListener(
                    "click",
                    function() {
                        var userMsg = document.getElementById(
                            "usermsg");
                        if (userMsg.value) {
var groupTo=Parse.Object.extend("studyGroup");
var groupToQuery=new Parse.Query(groupTo);
        groupToQuery.get($('#wrapper').prop('title'), {
            success: function(sendGroup) {
//alert(groupToQuery.id);
                            var newMessage = userMsg.value;
                            document.getElementById("usermsg").value = "";
                            var Message = Parse.Object.extend("Message");
                            var mess = new Message();
                            mess.set("from", Parse.User.current());
                            mess.set("message", newMessage);
                            mess.set("group", sendGroup);
                            mess.save(null, {
                                success: function(mess) {
var relation = sendGroup.relation("messages");
                                    relation.add(mess);
                                    sendGroup.save();
                                    
                                    //updateMessages($('#wrapper').prop('title'));
                                    //location.reload();
                                },
                                error: function(mess, error) {
                                    alert("Error: " + error.code + " " + error.message + ".");
                                    // The save failed.
                                    // error is a Parse.Error with an error code and description.
                                }
                            });
},error:function(sendGroup,error){
alert("error, couldn't find group");
}
});
                        }
                    });
                document.getElementById("usermsg").addEventListener(
                    "keydown",
                    function(e) {
                        var userMsg = document.getElementById(
                            "usermsg");

                        if (e.keyCode == 13 && userMsg.value) {
var newMessage = userMsg.value;
                            document.getElementById("usermsg").value = '';
var groupTo=Parse.Object.extend("studyGroup");
var groupToQuery=new Parse.Query(groupTo);
        groupToQuery.get($('#wrapper').prop('title'), {
            success: function(sendGroup) {
//alert(groupToQuery.id);
                            
                            var Message = Parse.Object.extend("Message");
                            var mess = new Message();
                            mess.set("from", Parse.User.current());
                            mess.set("message", newMessage);
                            mess.set("group", sendGroup);
                            mess.save(null, {
                                success: function(mess) {
var relation = sendGroup.relation("messages");
                                    relation.add(mess);
                                    sendGroup.save();
                                    
                                    //updateMessages($('#wrapper').prop('title'));
                                    //location.reload();
                                },
                                error: function(mess, error) {
                                    alert("Error: " + error.code + " " + error.message + ".");
                                    // The save failed.
                                    // error is a Parse.Error with an error code and description.
                                }
                            });
},error:function(sendGroup,error){
alert("error, couldn't find group");
}
});
                        }
                    });

            },
            error: function(object, error) {
                // The object was not retrieved successfully.
                // error is a Parse.Error with an error code and message.
                alert("Error: Database is Down");
            }
        });
    }

    function updateMessages(groupId) {
        var studyGroup = Parse.Object.extend("studyGroup");
        var groupQuery = new Parse.Query(studyGroup);
        groupQuery.get(groupId, {
            success: function(result) {
                // The object was retrieved successfully.
                var relation = result.relation("messages");
                if (currentUser !== null) {
                    var relation = result.relation("messages");
                    var updateQuery = relation.query();
                    updateQuery.greaterThan("createdAt", lastChecked);
                    updateQuery.ascending("createdAt");
                    updateQuery.include("from");
                    updateQuery.find({
                        success: function(messages) {
                            for (var i = 0; i < messages.length; i++) {
                                /*
                                					var sender=results[i].get("from").get("fullName");
                                                    			var message=results[i].get("message");
                                                   			var time= new Date(results[i].get("createdAt"));
                                                    			$("#chatbox").append("<li><b>"+sender+":</b> "+message+"</li>");
                                */

                                var sender = messages[i].get("from").get("fullName");
                                var message = messages[i].get("message");
                                //make timestamp look good
                                var time = new Date(messages[i].get("createdAt"));
                                lastChecked = time;
                                var hours = time.getHours();
                                if (hours > 12) {
                                    hours -= 12;
                                    var ampm = "pm";
                                } else if (hours === 0) {
                                    hours = 12;
                                    var ampm = "pm";
                                } else {
                                    var ampm = "am";
                                }
                                var minutes = time.getMinutes();
                                if (minutes < 10) {
                                    var min = "0" + minutes;
                                } else {
                                    var min = minutes;
                                }
                                var regTime = hours + ":" + min + " " + ampm;

                                var myName = currentUser.get("fullName");
                                if (myName == sender) {

                                    $("#chatbox").append("<div class='msgrow' align='right'><div class='col-md-10 col-sm-10'><div class='selfmsg'><div class='msgbody'>" + message + "</div><div class='timestamp'>" + regTime + "</div></div></div><div class='col-md-2 col-sm-2'><div class='msgicon'>" + getInitials(sender) + "</div></div></div>");
                                } else {
                                    $("#chatbox").append("<div class='msgrow' align='left'><div class='col-md-2 col-sm-2'><div class='msgicon'>" + getInitials(sender) + "</div></div><div class='col-md-10 col-sm-10'><div class='othermsg'><div class='msgbody'>" + message + "</div><div class='timestamp'>" + regTime + "</div></div></div></div>");
                                }
                            }

                            if (messages.length != 0) {
                                lastChecked = messages[messages.length - 1].createdAt;
                                var chatWindow = document.getElementById("chatbox");
                                chatWindow.scrollTop = chatWindow.scrollHeight;
                            }


                        },

                        error: function(error) {
                            alert("Error: " + error.code + " " + error.message + ".");
                        }
                    })
                }
            },
            error: function(object, error) {
                // The object was not retrieved successfully.
                // error is a Parse.Error with an error code and message.
                alert("Error: Database is Down");
            }
        });
    }

var lastChecked;
var map;
var currentUser;



 /*Bind js function to 3 nav things in group view*/
 $('#detailsLi').bind("click", function() {
                                    toggleGroupViewDetails()
                                });

 $('#messagesLi').bind("click", function() {
                                    toggleGroupViewMessages()
                                });

 $('#membersLi').bind("click", function() {
                                    toggleGroupViewMembers()
                                });

var user= Parse.User.current();
var userEmail= user.get("username");


//find user's pending invites
var invites= new Parse.Object.extend("PrivateInvite");
var invitesQuery = new Parse.Query(invites);
invitesQuery.equalTo("Email", userEmail);

invitesQuery.find({
  success: function(invites) {

  	//get studyGroup objects of all pending invites for that person
  	var groupsWhoInvited = [];

  	for(i=0; i<invites.length; i++){
  		var string= invites[i].get("Group")
  		groupsWhoInvited.push(string);
  		
  	}

  	//var getGroupsInv= 
  	//get all groups for the classes
  	classes= new Parse.Object.extend("Class");
	var classesQuery = new Parse.Query(classes);
	classesQuery.equalTo("students", user);
	classesQuery.find({
        success: function(results) {
        	
        	//create array for group objects
            var validGroups= [];

            for (var i = 0; i < results.length; i++) {

                	var getClassDetails = new RSVP.Promise(function(fulfill) {
                    var classDetails = new Array();
                    classDetails.push(results[i].get("title"));
                    classDetails.push(results[i].get("department"));
                    classDetails.push(results[i].relation("classGroups"));
                    fulfill(classDetails);
                	});

                getClassDetails.then(function(classDetails) {
                    var title = classDetails[0];
                    var depId = classDetails[1];
                    var groups = classDetails[2];
                    var groupQuery = groups.query();

                    groupQuery.notEqualTo("members", Parse.User.current());
                    groupQuery.find({
                        success: function(results) {

                            //loop through two group arrays to find invited to groups
                            for(i=0; i<results.length; i++){

                            	//loop through both array to add valid invite groups
                            	if($.inArray(results[i].id, groupsWhoInvited)> -1){
                            		validGroups.push(results[i]);
                            	}
                            }
                            
                            // Messages for this group
                            for (var j = 0; j < validGroups.length; j++) {
                                var groupId = validGroups[j].id;
                                var topicname = validGroups[j].get("groupName");
                                var members = validGroups[j].get("numStudents");
                                var maxSize = validGroups[j].get("groupSize");
                                var isPrivate = validGroups[j].get("isPrivate");
                                var openSlots = maxSize - members;

								if(openSlots>0){
                                	var slots = "";
                                	for (var k = 0; k < members; k++) {
                                    	slots = slots.concat("<div class='member-slot-full'></div>");
                                	}	

                                	for (var k = 0; k < openSlots; k++) {
                                    	slots = slots.concat("<div class='member-slot-empty'></div>");
                                	}

                                	
                                	$('#inviteGroups tbody').append("<tr id='" + groupId + "'><td width='70%'><div class='col-sm-5 col-xs-5 col-md-4 col-lg-3'><a href='#'><img class='center-block' id='classimg' width=100% src='images/" + depId + ".png' alt='' ></a></div><div class='col-sm-7 col-xs-7 col-md-8 col-lg-9'>" + topicname + "<br><i>" + title + "</i><br>" + slots + "</div></td><td width='30%'><div class='edit' id='1" + groupId + "'><a href='#'>Details</a></div><div class='join' id='2" + groupId + "'><a href='#'>Join</a></div></td></tr>");
                                	console.log("appended");
                                	/*add event listener*/
                                	document.getElementById("2" + groupId).addEventListener("click", function() {
                                    	joinGroup(this.id)
                                	});

								}
                        	}
                        },

        				error: function(error) {
    						alert("Error: " + error.code + " " + error.message);
  						}
					});

					//hide pending invites if none exist
					if(validGroups.length==0){
						$('#inviteGroups').hide();
					}
                    

        		});

        	}
        }
	});
  },

 error: function(error) {
  	alert("Error: " + error.code + " " + error.message);
  }

});


lastChecked = new Date();
 var classes = Parse.Object.extend("Class");
 var classQuery = new Parse.Query(classes);

 currentUser = Parse.User.current();
    classQuery.equalTo("students", Parse.User.current());
    // execute the query
    //classQuery.include("classGroups");
    classQuery.find({
        success: function(results) {

            for (var i = 0; i < results.length; i++) {

                var getClassDetails = new RSVP.Promise(function(fulfill) {
                    var classDetails = new Array();
                    classDetails.push(results[i].get("prof"));
                    classDetails.push(results[i].get("department"));
                    classDetails.push(results[i].get("title"));
                    classDetails.push(results[i].get("period"));
                    classDetails.push(results[i].get("depId"));
                    classDetails.push(results[i].relation("classGroups"));
                    fulfill(classDetails);
                });
                getClassDetails.then(function(classDetails) {
                    var prof = classDetails[0];
                    var dep = classDetails[1];
                    var title = classDetails[2];
                    var per = classDetails[3];
                    var depId = classDetails[4];
                    var groups = classDetails[5];
                    var groupQuery = groups.query();
                    groupQuery.notEqualTo("members", Parse.User.current());
                    groupQuery.find({
                        success: function(results) {
                            if (results.length > 0) {
								$('#availGroups .no_record').remove();
                               
                            }
                            var isPrivate=false;
                            // Messages for this group
                            for (var j = 0; j < results.length; j++) {
                                var groupId = results[j].id;
                                var topicname = results[j].get("groupName");
                                var members = results[j].get("numStudents");
                                var maxSize = results[j].get("groupSize");
                                var isPrivate = results[j].get("isPrivate");
                                var openSlots = maxSize - members;

								if(openSlots>0){
	                                var slots = "";
	                                for (var k = 0; k < members; k++) {
	                                    slots = slots.concat("<div class='member-slot-full'></div>");
	                                }
	                                for (var k = 0; k < openSlots; k++) {
	                                    slots = slots.concat("<div class='member-slot-empty'></div>");
	                                }

	                                /*only show avalible group if its a public one*/
	                                if(!isPrivate){
	                                	$('#availGroups tbody').append("<tr id='" + groupId + "'><td width='70%'><div class='col-sm-5 col-xs-5 col-md-4 col-lg-3'><a href='#'><img class='center-block' id='classimg' width=100% src='images/" + dep + ".png' alt='' ></a></div><div class='col-sm-7 col-xs-7 col-md-8 col-lg-9'>" + topicname + "<br><i>" + title + "</i><br>" + slots + "</div></td><td width='30%'><div class='edit' id='1" + groupId + "'><a href='#'>Details</a></div><div class='join' id='2" + groupId + "'><a href='#'>Join</a></div></td></tr>");

	                                	/*add event listener*/
	                                	document.getElementById("2" + groupId).addEventListener("click", function() {
	                                    	joinGroup(this.id)
	                                	});
                                	}

								}
                        	}
                        }
                    });

                    var myGroupQuery = groups.query();
                    myGroupQuery.equalTo("members", Parse.User.current());
                    myGroupQuery.find({
                        success: function(results) {
                            if (results.length > 0) {

								$('#myGroups .no_record').remove();
                            }

                            // Messages for this group
                            var isPrivate = false;
                            for (var j = 0; j < results.length; j++) {
                                var groupId = results[j].id;
                                var topicname = results[j].get("groupName");
                                var members = results[j].get("numStudents");
                                var maxSize = results[j].get("groupSize");
                                var isPrivate = results[j].get("isPrivate");
                                var openSlots = maxSize - members;
                                var slots = "";
                                for (var k = 0; k < members; k++) {
                                    slots = slots.concat("<div class='member-slot-full'></div>");
                                }
                                for (var k = 0; k < openSlots; k++) {
                                    slots = slots.concat("<div class='member-slot-empty'></div>");
                                }
//#available-groups-table		
								/* Append group to table and add a private label if is*/
								if(!isPrivate){
									$('#myGroups tbody').append("<tr id='"+groupId+"'><td width='70%'><div class='col-sm-5 col-xs-5 col-md-4 col-lg-3'><a href='#'><img class='center-block' id='classimg' width=100% src='images/" + dep + ".png' alt='' ></a></div><div class='col-sm-7 col-xs-7 col-md-8 col-lg-9'>" + topicname + "<br><i><span id='classname'>" + title + "</span></i><br>" + slots + "</div></td><td width='30%'><div class='edit' id='1" + groupId + "'><a href='#'><span>View</span></a></div><div class='join' id='2" + groupId + "'><a href='#'>Leave</a></div></td></tr>");
								}
								else{
									$('#myGroups tbody').append("<tr id='"+groupId+"'><td width='70%'><div class='col-sm-5 col-xs-5 col-md-4 col-lg-3'><a href='#'><img class='center-block' id='classimg' width=100% src='images/" + dep + ".png' alt='' ></a></div><div class='col-sm-7 col-xs-7 col-md-8 col-lg-9'>" + topicname + " - <img src= 'images/lock.png' width='15px' alt=''> Private<br><i><span id='classname'>" + title + "</span></i><br>" + slots + "</div></td><td width='30%'><div class='edit' id='1" + groupId + "'><a href='#'><span>View</span></a></div><div class='join' id='2" + groupId + "'><a href='#'>Leave</a></div></td></tr>");
								}
                             

                                document.getElementById("2" + groupId).addEventListener("click", function() {
                                    leaveGroup(this.id)
                                });
                                $('#1'+groupId).bind("click", function() {
                                    focusGroupView(this.id)
                                });


                            }
                        }
                    });
                    //var groups=results[i].get("classGroups");

                });
            }
            // results contains all of the User objects, and their associated Weapon objects, too
        }
    });

    document.getElementById("usermsg").setAttribute("autocomplete", "off");

}
        
        
        
        
        
        
        
		var geocoder = new google.maps.Geocoder;
		
       var curr_sel_marker=undefined;

        var curr_sel_ind={};
        function init3(){
            	
		if($("#maptype").val()=="detail"){
	            	var mapOptions2 = {
	                	zoom: 18,
				disableDoubleClickZoom: true,
	                	center: new google.maps.LatLng(43.704472, -72.288951), // New York
				scrollwheel: false,
	    			navigationControl: false,
	    			scaleControl: false,
	    			draggable: false,
				mapTypeControl: false,
				zoomControl: false,
				streetViewControl: false,
				styles: [
						{
							"featureType":"water",
							"elementType":"geometry",
							"stylers":[{"color":"#e9e9e9"},{"lightness":17}]
						}, 
						{
							"featureType":"landscape",
							"elementType":"geometry",
							"stylers":[{"color":"#f5f5f5"},{"lightness":20}]
						},
						{
							"featureType":"road.highway",
							"elementType":"geometry.fill",
							"stylers":[{"color":"#ffffff"},{"lightness":17}]
						},
						{
							"featureType":"road.highway",
							"elementType":"geometry.stroke",
							"stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]
						},
						{
							"featureType":"road.arterial",
							"elementType":"geometry",
							"stylers":[{"color":"#ffffff"},{"lightness":18}]
						},
								
						{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},
						{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},
						{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#DBEAF9"},{"lightness":19}]},
						{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},
						{
							"featureType":"administrative",
							"elementType":"geometry.stroke",
							"stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]
						} 
					]
	            };
		}
		else{
			var mapOptions2 = {
			                zoom: 18,
					disableDoubleClickZoom: true,
			                center: new google.maps.LatLng(43.704472, -72.288951), // New York
					mapTypeControl: false,
					zoomControl: false,
					streetViewControl: false,
					styles: [
							{
								"featureType":"water",
								"elementType":"geometry",
								"stylers":[{"color":"#e9e9e9"},{"lightness":17}]
							}, 
							{
								"featureType":"landscape",
								"elementType":"geometry",
								"stylers":[{"color":"#f5f5f5"},{"lightness":20}]
							},
							{
								"featureType":"road.highway",
								"elementType":"geometry.fill",
								"stylers":[{"color":"#ffffff"},{"lightness":17}]
							},
							{
								"featureType":"road.highway",
								"elementType":"geometry.stroke",
								"stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]
							},
							{
								"featureType":"road.arterial",
								"elementType":"geometry",
								"stylers":[{"color":"#ffffff"},{"lightness":18}]
							},
										
							{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},
							{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},
							{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#DBEAF9"},{"lightness":19}]},
							{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},
							{
								"featureType":"administrative",
								"elementType":"geometry.stroke",
								"stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]
							} 
						]
			            };
			}            // Get the HTML DOM element that will contain your map 
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('map2');
            

            // Create the Google Map using our element and options defined above
            map = new google.maps.Map(mapElement, mapOptions2);
			if($("#ag_location_latlng").length > 0 && $("#ag_location_latlng").val() != ""){
        		var latlangdata = $("#ag_location_latlng").val();
     		
var dataArray = latlangdata.split(",");
        		latLngmarker ={lat: parseFloat(dataArray[0]), lng: parseFloat(dataArray[1])};
        		placeMarker(latLngmarker, map);
map.setCenter(latLngmarker);
        	}
if($("#maptype").val()=="edit"){
			google.maps.event.addListener(map, 'dblclick', function(event) {
				var lat = event.latLng.lat();
				var long = event.latLng.lng();					
				placeMarker(event.latLng, map);
				$("#ag_location_latlng").val( lat+","+long );
				
				geocoder.geocode({'location': {lat: lat, lng: long}}, function(results, status) {
					if (status === google.maps.GeocoderStatus.OK)
					{
						if (results[1])
						{
							$("#ag_location").val(results[1].formatted_address );
						}
						else
						{
							$("#ag_location").val('No results found');	
						}
					}
					else
					{
						$("#ag_location").val('Geocoder failed due to: ' + status);
					}
				});//geocode
			});
}
        }//init
		google.maps.event.addDomListener(window, 'load', init3);

		//MAP SCRIPT ENDS HERE
	
}//add_group_body_check	
	
	markers = [];
	
	if($("#search_group_body #map").length){
var initGroups = new RSVP.Promise(function(fulfill){
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
var totClasses=results.length;
                var checkedClasses=0;
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
classDetails.push(i);
classDetails.push(results.length-1);
/*
echo '<li class="'.$row['class_id'].'_' . $row['course_num'] . '" data-name="'.$row['class_name'].'">'.'<img margin="0px 10px 0px 0px" width=25 px src="images/class-'.$row['class_id'].'-marker.png">'.
    			'<span> &nbsp &nbsp'.$row['class_name']. " " . $row['course_num'] . '</span>'.
    			'<input type="checkbox" checked="checked" />'.
    			'</li>';*/
$("#user-classes ul").append("<li class='"+depId+"_"+num+"' data-name='"+title+"'><input type='checkbox' checked='checked' />&nbsp &nbsp<img margin='0px 10px 0px 0px' width=25 px src='images/class-"+depId+"-marker.png'><span>&nbsp &nbsp"+title+"&nbsp &nbsp</span></li>");
                    fulfill(classDetails);
                });
                getClassDetails.then(function(classDetails) {
                    var prof = classDetails[0];
                    var dep = classDetails[1];
                    var title = classDetails[2];
                    var per = classDetails[3];
                    var depId = classDetails[4];
                    var groups = classDetails[5];
                    var number = classDetails[6];
var currClassIndex=classDetails[7];
var classLength=classDetails[8];
                    var groupQuery = groups.query();

                    groupQuery.find({
                        success: function(results) {

                            // Messages for this group
                            if(results.length==0){
                                checkedClasses+=1;
                            }
                            for (var j = 0; j < results.length; j++) {
var groupId=results[j].id;
var groupName=results[j].get('groupName');
var creator=results[j].get("creator").id;
var location=results[j].get("location");
var latlng=results[j].get("location_latlng");
var startDate=results[j].get("startDate");
var startTime=results[j].get("startDate");
var endTime=results[j].get("endDate")
var groupLength=results.length-1;
                                $("#available-groups-table>tbody").append("<tr id='" + groupId + "'><td class='topicname'>" + groupName + "</td><td class='class_id'>" + depId + "</td><td class='group_id'>" + groupId + "</td><td class='class_name'>" + title + "</td><td class='class_number'>" + number + "</td><td class='user_id'>" + creator + "</td><td class='location'>" + location + "</td><td class='latlng'>" + latlng + "</td><td class='on_date'>" + startDate + "</td><td class='room'>" + location + "</td><td class='start_time'>" + startTime + "</td><td class='end_time'>" + endTime + "</td></tr>");

if(j==groupLength){
    checkedClasses+=1;
    if(checkedClasses==totClasses){
var groupDetails="All Groups Loaded";
fulfill(groupDetails);
    }
}
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
});
initGroups.then(function(groupDetails) {
    init();

});
		$(window).on('load resize', function(){
	      var winHeight = $(window).height();
	      var winWidth = $(window).width();
	       $( "#map-container" ).css( "maxWidth", winWidth);
	       $( "#map-container" ).css( "maxHeight", winHeight );

	       $( "#map" ).css( "maxWidth", winWidth);
	       $( "#map" ).css( "maxHeight", winHeight );

	       $( "#map-container" ).css( "minWidth", winWidth);
	       $( "#map-container" ).css( "minHeight", winHeight );

	       $( "#map" ).css( "minWidth", winWidth);
	       $( "#map" ).css( "minHeight", winHeight );

	    });//window load or resize



		var geocoder = new google.maps.Geocoder;
	
        
        function init(){
            var strictBounds = new google.maps.LatLngBounds(
	  	new google.maps.LatLng(43.700097, -72.297528),
  		new google.maps.LatLng(43.709869, -72.279739) 
		);
	    
            var mapOptions = {

                disableDoubleClickZoom: true,
                zoom: 18,
                maxZoom: 19,
minZoom: 16,
                center: new google.maps.LatLng(43.704472, -72.288951), // New York
mapTypeId: google.maps.MapTypeId.TERRAIN,
mapTypeControl: false,
				zoomControl: false,
				streetViewControl: false,
				bounds: strictBounds,
				styles: [
/*
							{
								"featureType":"water",
								"elementType":"geometry",
								"stylers":[{"color":"#436270"},{"lightness":17}]
							}, 
							{
								"featureType":"landscape",
								"elementType":"geometry",
								"stylers":[{"color":"#5C6643"},{"lightness":20}]
							},

							{
								"featureType":"road.highway",
								"elementType":"geometry.fill",
								"stylers":[{"color":"#57575C"},{"lightness":17}]
							},

							{
								"featureType":"road.highway",
								"elementType":"geometry.stroke",
								"stylers":[{"color":"#57575C"},{"lightness":29},{"weight":0.2}]
							},
							{
								"featureType":"road.arterial",
								"elementType":"geometry",
								"stylers":[{"color":"#57575C"},{"lightness":18}]
							},
							
							{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#57575C"},{"lightness":16}]},
{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#5C6643"},{"lightness":21}]},
							{"featureType":"poi.school","elementType":"geometry","stylers":[{"color":"#969198"},{"lightness":21}]},
							//{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#DBEAF9"},{"lightness":21}]},
{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#1F2121"},{"lightness":16}]},
							{"elementType":"labels.text.fill","stylers":[{ visibility: "off" },{"saturation":36},{"color":"#9E9CA9"},{"lightness":40}]},							
{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#1F2121"},{"lightness":16}]},
							{"featureType":"road","elementType":"labels.text.fill","stylers":[{ visibility: "on" },{"saturation":36},{"color":"#FFFFFF"},{"lightness":40}]},

							{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},
							{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#DBEAF9"},{"lightness":19}]},
							{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},
							{
								"featureType":"administrative",
								"elementType":"geometry.stroke",
								"stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]
							} 

*/
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#cfdae6"
            },
            {
                "weight": 0.85
            },
            {
                "hue": "#dadfe3"
            },
            {
                "gamma": 1.1
            }
        ]
    },
{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#1F2121"},{"lightness":16}]},
							{"elementType":"labels.text.fill","stylers":[{ visibility: "off" },{"saturation":36},{"color":"#9E9CA9"},{"lightness":40}]},							
{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#1F2121"},{"lightness":16}]},
							{"featureType":"road","elementType":"labels.text.fill","stylers":[{ visibility: "on" },{"color":"#000000"}]},
    {
        "featureType": "poi.medical",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#cfdae6"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#cfdae6"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#cfdae6"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#cfdae6"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#cfdae6"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ff9d4c"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#cfdae6"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#778bbd"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#4a90e6"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#4b98db"
            },
            {
                "weight": 1.34
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#0061a1"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#cfdae6"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "color": "#cfdae6"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "color": "#cfdae6"
            }
        ]
    },
    {
        "featureType": "transit.station.bus",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#005082"
            },
            {
                "weight": 0.48
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "labels.icon",
        "stylers": [
            {
                "hue": "#005082"
            },
            {
                "saturation": 14
            }
        ]
    },
{
"featureType": "road.local",
"elementType": "geometry.stroke",
"stylers":[
{
"color": "#4a90e6"
}
]
}/*

				{
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 13
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#144b53"
            },
            {
                "lightness": 14
            },
            {
                "weight": 1.4
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#08304b"
            }
        ]
    },
/*
{
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
*/
    ,{
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#0c4152"
            },
            {
                "lightness": 5
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#0b434f"
            },
            {
                "lightness": 25
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#0b3d51"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "color": "#146474"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#021019"
            }
        ]
    },{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#1F2121"},{"lightness":16}]},
							{"elementType":"labels.text.fill","stylers":[{ visibility: "off" },{"saturation":36},{"color":"#9E9CA9"},{"lightness":40}]},							
{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#1F2121"},{"lightness":16}]},
							{"featureType":"road","elementType":"labels.text.fill","stylers":[{ visibility: "on" },{"saturation":36},{"color":"#FFFFFF"},{"lightness":40}]}

						
						]};
               

            // Get the HTML DOM element that will contain your map 
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('map');

            // Create the Google Map using our element and options defined above
            var map = new google.maps.Map(mapElement, mapOptions);
var location=document.getElementById("center-location");
/*
var defaultColor='#57575C';
var hoverColor='#006633';
var dblClickColor='#006633';
var defaultOpac=1.0;
var hoverOpac=1.0;
var dblClickOpac=0.3;
var defaultStrokeOpac=1.0;
var defaultStrokeWeight=3.0;
var defaultStrokeColor='#FFFFFF';
*/
//#4a90e6,#00FF7F #6CC8E8
//opac 0.9,0.8
var defaultColor='#009859';
var hoverColor='#006633';
var dblClickColor='#009859';
var defaultOpac=1.0;
var hoverOpac=0.5;
var dblClickOpac=0.3;
var defaultStrokeOpac=0.9;
var defaultStrokeWeight=1.0;
var defaultStrokeColor='#00351F';
var hoverStrokeOpac=0.9;
var hoverStrokeWeight=3.0;
var hoverStrokeColor='#00FF7F';
var myCoordinates = [
new google.maps.LatLng(44.040219,-73.114014),
new google.maps.LatLng(42.382894,-73.278809),
new google.maps.LatLng(42.625876,-70.993652),
new google.maps.LatLng(44.527843,-71.235352),
new google.maps.LatLng(44.040219,-73.114014)
];
var polyOptions = {
path: myCoordinates,
strokeColor: "#FF0000",
strokeOpacity: 1,
strokeWeight: 0,
fillColor: "#D3D3D3",
fillOpacity: 0.2
}
var it = new google.maps.Polygon(polyOptions);
//it.setMap(map);


var buildings=[];
var buildingNames=[];
var buildingFullNames=[];

var i, tmp;
var polys=[];
polys.push("Polygon ((-71.05414536383989343 44.87570242278012245, -71.05406392227459378 44.87580389037437811, -71.05401804465337534 44.87578527407710283, -71.0540994862723494 44.87568380651553923, -71.05414536383989343 44.87570242278012245))");
polys.push("Polygon ((-71.05455015884581371 44.87582289436615213, -71.05445326122044492 44.87584760494867453, -71.05439177041121468 44.87572569943711898, -71.05442328912181438 44.87571766149171282, -71.05441305308552558 44.87569736646950247, -71.05445287498004348 44.87568721151369999, -71.05446294619717662 44.87570717719193425, -71.05448850176010467 44.87570065955800658, -71.05455015884581371 44.87582289436615213))");
polys.push("Polygon ((-71.06954017493038123 44.88242976700391296, -71.06964176083579332 44.88251601267970869, -71.06954903252527345 44.88257121880833012, -71.06944744791935875 44.88248497395755265, -71.06954017493038123 44.88242976700391296))");
polys.push("Polygon ((-71.07402987129810867 44.88583487319800724, -71.07393522322485069 44.88582496204632832, -71.07394152239827179 44.88579459227994306, -71.07387638929893114 44.88578776517322666, -71.0738882938524057 44.88573037049996373, -71.07395235969200087 44.88573708587493627, -71.07395648007947386 44.88571722350169324, -71.07394473335503449 44.88571599179095273, -71.07395257739435124 44.88567816823275791, -71.07404512488430726 44.88568786869640093, -71.07403874989759629 44.88571860162736016, -71.07404496845303754 44.88571925391474338, -71.07403967483369911 44.88574477315052036, -71.07404837046027524 44.88574568395927145, -71.07402987129810867 44.88583487319800724))");
polys.push("Polygon ((-71.07431203029267408 44.88586183069011071, -71.07433765273049175 44.88571482143960623, -71.07443144041441485 44.88572308281462142, -71.0744058182113605 44.88587009208718115, -71.07431203029267408 44.88586183069011071))");
polys.push("Polygon ((-71.11005400498532936 44.88482979964352637, -71.11002455294938329 44.88475822806913129, -71.11009967374597807 44.88474260421703121, -71.11012912585879064 44.88481417667247797, -71.11005400498532936 44.88482979964352637))");
polys.push("Polygon ((-71.14677471628407091 44.87865801259987819, -71.14684865430911032 44.87876023556262339, -71.14673610213753818 44.87880138952051112, -71.14666216426043377 44.87869916648629953, -71.14677471628407091 44.87865801259987819))");
polys.push("Polygon ((-71.29775459798290171 44.37139167654351013, -71.29765508476366165 44.37139299483056476, -71.29765430192334463 44.37136041188977487, -71.29763392308770165 44.37136066373862064, -71.29763207194237395 44.37128361743988592, -71.29775196574057361 44.37128213550841593, -71.29775459798290171 44.37139167654351013))");
polys.push("Polygon ((-71.71297350523499858 44.02774982807839876, -71.71305118923592659 44.02779022890680949, -71.71299347663133972 44.02784799827525575, -71.7129157925947851 44.02780759830805835, -71.71297350523499858 44.02774982807839876))");
polys.push("Polygon ((-71.80724381955822366 43.99668923363224593, -71.80713693578525181 43.99665946637417591, -71.80718685621691577 43.99656605748651828, -71.80729373984694064 43.99659582469856645, -71.80724381955822366 43.99668923363224593))");
polys.push("Polygon ((-71.81609079911454785 43.99339185451079004, -71.81600876736179373 43.99337114245185631, -71.81598160444092116 43.99342680829614949, -71.81581300760473141 43.99338422705201168, -71.81586039905738517 43.99328711043408902, -71.81592791251618735 43.99330416227680729, -71.81599341724292174 43.99316992754110345, -71.81611034687003325 43.99319946008949245, -71.81608736519551428 43.99324655408448592, -71.8161535463662517 43.99326326912803609, -71.81609079911454785 43.99339185451079004))");
polys.push("Polygon ((-71.87598777621383306 43.9985441375596622, -71.8759504404783911 43.99848514388151699, -71.87606807266404019 43.9984463516712978, -71.87610540724148223 43.99850534441349481, -71.87598777621383306 43.9985441375596622))");
polys.push("Polygon ((-71.96634107967800276 43.95375855039965529, -71.96623365774212289 43.95370048957502718, -71.96630552528208113 43.95363109531339774, -71.96641294716673087 43.95368915697132195, -71.96634107967800276 43.95375855039965529))");
polys.push("Polygon ((-72.043406862848272 43.78100960763234895, -72.04326476706694393 43.78099292989259794, -72.04328483036171349 43.78090319494019411, -72.04342692593573361 43.78091987265597851, -72.043406862848272 43.78100960763234895))");
polys.push("Polygon ((-72.0995556514569671 43.78757617051162754, -72.0995617176016026 43.78760829203860538, -72.09960236231543718 43.78760426335325207, -72.0996108374172735 43.78764910970613045, -72.09961216584365218 43.78764897866646066, -72.09962866698144524 43.78773635093279637, -72.09963504093276754 43.78773571925049879, -72.09965015188838322 43.78773858627757676, -72.09966257557536551 43.7877454192176927, -72.09967044335898834 43.78775517748919555, -72.09967255675772435 43.78776637334539146, -72.09966858178574967 43.78777731685180896, -72.09966469127522259 43.78778102901015501, -72.09978017570651332 43.78784455371572903, -72.09979964058456403 43.78782598205582843, -72.09988019155437655 43.7878702905988888, -72.09984240687373358 43.78790634143809513, -72.09986051985485744 43.78791630477962826, -72.09986704868222773 43.78795087717978163, -72.09983792104503664 43.78797866781695092, -72.09979019817818369 43.78798339844991716, -72.09977208518829173 43.78797343509739193, -72.09975376408095826 43.78799091425364765, -72.09970281068250131 43.78795998798204892, -72.09967349170202056 43.78798796021296624, -72.09962870607083119 43.78796345762196296, -72.09962722785157041 43.78796486910498942, -72.09947928454207045 43.78788348950737941, -72.0994471431780255 43.78771332834370611, -72.09943736746734544 43.78771429691578021, -72.09942826833594154 43.78766611461578862, -72.0994380440389051 43.78766514604449611, -72.09942978301150163 43.787621368131596, -72.09947042153807217 43.78761734041666642, -72.09946435544134147 43.78758521888468636, -72.0995556514569671 43.78757617051162754))");
polys.push("Polygon ((-72.10398391610368662 43.78356816222054704, -72.10405167681402361 43.78358941241298652, -72.10400504879845585 43.78366745720835951, -72.10386257552261213 43.78362277728948726, -72.10389265782308144 43.78357242570390184, -72.10396737148786883 43.78359585267921261, -72.10398391610368662 43.78356816222054704))");
polys.push("Polygon ((-72.13361600962738862 43.62282786383439515, -72.13373647801032007 43.62275889008877527, -72.13384708649792287 43.62286084100697536, -72.133726619278832 43.62292981486319832, -72.13361600962738862 43.62282786383439515))");
polys.push("Polygon ((-72.15482057149829132 43.69030742318332017, -72.15482894674926229 43.69028954536263143, -72.15484793462753998 43.69024901520246118, -72.15488751780431187 43.69025877929580304, -72.15489234128166629 43.69024848441453202, -72.1549066070329701 43.69025200305291889, -72.15490178479812755 43.69026229792949323, -72.1549108093370819 43.69026452395431903, -72.15490179520311642 43.69028376451306173, -72.1549385695055463 43.69029283583273582, -72.15492858712066493 43.69031412458448216, -72.15489182026337289 43.69030505502998807, -72.1548834450290002 43.69032293285513902, -72.15482057149829132 43.69030742318332017))");
polys.push("Polygon ((-72.16284778570744152 43.71883863741011567, -72.16277013521133199 43.71898589996595774, -72.16248191024817515 43.71890595224521547, -72.1625595613579236 43.71875869078029808, -72.16284778570744152 43.71883863741011567))");
polys.push("Polygon ((-72.17044225039479954 43.79227816626280401, -72.17040698806266619 43.79225343884832711, -72.17054697498110727 43.79214868482079481, -72.17058225230873347 43.79217342292703563, -72.17061626549192965 43.79214796978666868, -72.17073355014227332 43.79223021326554033, -72.1706995357204022 43.79225566644591794, -72.17073481442389493 43.79228040539855016, -72.17059482012093952 43.79238516508659984, -72.17055953892031539 43.79236042520218319, -72.17052551941119987 43.79238588195288884, -72.17040822223763996 43.7923036293174377, -72.17044225039479954 43.79227816626280401))");
polys.push("Polygon ((-72.19380739572027039 43.67956316745009104, -72.1941244232174455 43.67969555796274506, -72.194092777639014 43.67973547266105072, -72.19416192227998863 43.67976434735811608, -72.19411519170292024 43.67982328984103191, -72.19404622999250876 43.67979449167803097, -72.19404216496457138 43.67979961922809196, -72.19372495038422244 43.6796671501463436, -72.19380739572027039 43.67956316745009104))");
polys.push("Polygon ((-72.19395527808724466 43.67937547339690241, -72.19384635475694267 43.67951617965540123, -72.19348359202327003 43.67936826144048723, -72.19346407658605358 43.67939347142680617, -72.19292007068381167 43.67917164566311783, -72.19305313788642309 43.67899974698843124, -72.19359625655489765 43.67922121078755993, -72.19357368526782182 43.67925036818462559, -72.19382234412809396 43.67935176124749574, -72.19384028607179005 43.67932858451364808, -72.19395527808724466 43.67937547339690241))");
polys.push("Polygon ((-72.19414154353005131 43.67831458742423223, -72.1938494411266305 43.67815637867658296, -72.19394996532022901 43.67805861386005972, -72.19424206751641293 43.67821682325463684, -72.19414154353005131 43.67831458742423223))");
polys.push("Polygon ((-72.1943653637062539 43.679792585910036, -72.19447321046331467 43.67983614549361704, -72.19440698799974143 43.67992250600985926, -72.1942991436228283 43.67987894725360576, -72.1943653637062539 43.679792585910036))");
polys.push("Polygon ((-72.19441710901274689 43.67973276420578088, -72.19417259730948899 43.67963280061848508, -72.19424863477686927 43.67953486594059598, -72.1944931275326951 43.67963482135393605, -72.19441710901274689 43.67973276420578088))");
polys.push("Polygon ((-72.19449506964582497 43.67907588799753427, -72.1944320155479744 43.67915985862492079, -72.19441282317012565 43.67915226064037171, -72.19439301074214654 43.67917862424648234, -72.19432273000062139 43.67915080441170517, -72.19434256082335821 43.6791244146307136, -72.1942940323943958 43.67910520523592055, -72.19435710559342567 43.67902127599882789, -72.19449506964582497 43.67907588799753427))");
polys.push("Polygon ((-72.24051625752754546 43.65957563671077679, -72.24092753137253453 43.65969063115265669, -72.24070918217243786 43.66010220769585004, -72.24058200882818426 43.66006664625358269, -72.24046136310070665 43.66029405575344668, -72.24017726291317842 43.66021461357915712, -72.24051625752754546 43.65957563671077679))");
polys.push("Polygon ((-72.24087430431956136 43.6587336642048669, -72.24060244439729672 43.65925704278370034, -72.24036376127367021 43.6591916931682249, -72.24063562174663389 43.65866831514745883, -72.24087430431956136 43.6587336642048669))");
polys.push("Polygon ((-72.24095417227867699 43.65871611659785145, -72.24091859900202905 43.658495876526068, -72.24142988614113392 43.65845234546090126, -72.24146546126623036 43.65867258626505532, -72.24095417227867699 43.65871611659785145))");
polys.push("Polygon ((-72.24346480165908702 43.6602931279521087, -72.2429660303013037 43.66022423368284677, -72.24295403506236823 43.66026968210520209, -72.24284336312948085 43.66025439512483786, -72.24284078242156681 43.66026417031749673, -72.24270938764156824 43.66024602101963126, -72.24271842308058922 43.6602117862385839, -72.24268947586342904 43.66020778817798487, -72.2426813616611696 43.66023853233439667, -72.24251973366762059 43.66021620671348558, -72.24253375595031912 43.66016307410740893, -72.24227630142198109 43.66012751195065533, -72.24237645874886482 43.65974800777600251, -72.24231177186210573 43.65973907270090137, -72.24235643395350337 43.65956984207851832, -72.24250237508381645 43.65959000037643989, -72.2425082531551368 43.65956772817501275, -72.24255380375093694 43.65957402062787907, -72.24254789576151836 43.6595964036912676, -72.2436652597175879 43.65975074344739681, -72.24365563866682294 43.65978719904009608, -72.24375433410783387 43.65980083196100026, -72.24378059499915139 43.6597013232854323, -72.24381574533825301 43.65970617812232746, -72.24377763110459227 43.65985059725795026, -72.24364556286698758 43.65983235522688943, -72.24360875698586426 43.65997181730123344, -72.24379708496272201 43.65999783099051257, -72.24371229235521241 43.66031911775571928, -72.2437525651355088 43.66032468031165337, -72.24369486831297138 43.66054329581646698, -72.24340919774967062 43.66050383731947448, -72.24346480165908702 43.6602931279521087))");
polys.push("Polygon ((-72.24617059883770764 43.6542909614176935, -72.24612589099444904 43.65468972338005926, -72.24614243116094769 43.65468734164732467, -72.24614033797692514 43.65467425439314297, -72.24625057582329646 43.6546605976481743, -72.24626952989061124 43.65474125071111189, -72.24615695043873131 43.65475428929363488, -72.24615411909550744 43.65474140199785325, -72.24613663953857667 43.65474342666485086, -72.24637137764383965 43.65510579222667076, -72.24603463076738308 43.6552207889805004, -72.24580045341160428 43.65485856210418092, -72.24577066266813574 43.65487128705157716, -72.24574554022012762 43.65482206330833037, -72.24572819113561195 43.65477110174390418, -72.24571883606513722 43.65471904839676398, -72.24571759412245342 43.65466656151902214, -72.24575054609934455 43.65466791841723904, -72.24579529863666494 43.65426877744159384, -72.24617059883770764 43.6542909614176935))");
polys.push("Polygon ((-72.25050869846563728 43.73721876199924452, -72.25054477875684711 43.73726234312049144, -72.25057513648756924 43.73729481701970201, -72.25038730027566203 43.73738174211716512, -72.25031558966504974 43.73730280671824744, -72.25050869846563728 43.73721876199924452))");
polys.push("Polygon ((-72.25052929854631145 43.737243645142307, -72.25056872744475811 43.7372264847857366, -72.25053748027447398 43.73718781041259973, -72.2505102108481907 43.73715249813835726, -72.25064337825398297 43.73709164699534568, -72.2506459555856253 43.73709461302644996, -72.25070351953893066 43.737070066775388, -72.2507204431588832 43.73708784019333962, -72.25085483617979776 43.73702642810344798, -72.25090205560174184 43.73707795641499985, -72.25070786501255782 43.73716669304170779, -72.25069970870033842 43.73715730928805101, -72.25063465005690944 43.73718703857355194, -72.25065361406764453 43.73720885634761402, -72.2505425240479866 43.73725961935544149, -72.25052929854631145 43.737243645142307))");
polys.push("Polygon ((-72.2509833600705349 43.7368262835639996, -72.25112075865087036 43.7367633256912498, -72.25117445427997609 43.73673625091154094, -72.2511818519450344 43.73680546372060718, -72.25116683944284546 43.73681303349572858, -72.25122798203565821 43.73687898774345939, -72.25115085377217383 43.73691657717469639, -72.25117438098644129 43.7369419564683426, -72.25115268074662822 43.73695215171550643, -72.25112998006252951 43.73692675018971698, -72.2510931400114913 43.73694470395733447, -72.25106136313429772 43.73691042472838575, -72.2509833600705349 43.7368262835639996))");
polys.push("Polygon ((-72.25100168340058815 43.73702309337834748, -72.25135014634700781 43.73685937700780357, -72.25145614735752986 43.73697909446793375, -72.25110956749759339 43.73714042177025618, -72.25100168340058815 43.73702309337834748))");
polys.push("Polygon ((-72.2511818519450344 43.73680546372060718, -72.25117445427997609 43.73673625091154094, -72.25140742698704344 43.73672872284070223, -72.2514116877643886 43.73679803628871809, -72.2511818519450344 43.73680546372060718))");
polys.push("Polygon ((-72.25169613625395471 43.73663067527294146, -72.25196339239654719 43.73648669784782328, -72.25200175336291863 43.73652413292410301, -72.25173449713889795 43.73666810953837825, -72.25169613625395471 43.73663067527294146))");
polys.push("Polygon ((-72.25179997300767809 43.73676802307718958, -72.25174447037544212 43.73682749517035973, -72.25162978778426748 43.73677122535542594, -72.251685291729288 43.73671175421065271, -72.25179997300767809 43.73676802307718958))");
polys.push("Polygon ((-72.25183504758524577 43.73666110085714109, -72.25180452303226275 43.73667730970615253, -72.25177770449003845 43.73665074670973496, -72.25180823279582398 43.73663454144882934, -72.25183504758524577 43.73666110085714109))");
polys.push("Polygon ((-72.25225457325754519 43.73629422887709239, -72.25220770798027559 43.7362373151420698, -72.25231318146667547 43.73619165562761424, -72.25236004555726765 43.73624856842582176, -72.25225457325754519 43.73629422887709239))");
polys.push("Polygon ((-72.25246805573368647 43.73610990422938727, -72.25251000459610395 43.73615603423327514, -72.25246902415811689 43.73617562617682353, -72.25242707530439645 43.73612949525793425, -72.25246805573368647 43.73610990422938727))");
polys.push("Polygon ((-72.25277284905247654 43.6433034673641771, -72.25257718592757783 43.64330254694404942, -72.25254384532784968 43.64327320346967554, -72.25254577683195123 43.64312786477002248, -72.25258365507403369 43.64310532626831929, -72.25254847940804837 43.64307436666458528, -72.2525503805827185 43.6429312648016321, -72.252588409540067 43.6429085608114562, -72.25280613796499551 43.64290999362739853, -72.2527982807109197 43.64298017315808664, -72.25280897554343085 43.64298080057731255, -72.25277284905247654 43.6433034673641771))");
polys.push("Polygon ((-72.25868454306348099 43.6804275727843816, -72.25871962972325946 43.68079222774277071, -72.25832251857055155 43.68081235189047362, -72.25831210786509473 43.68070414457446304, -72.25817937652878697 43.68071087097419536, -72.25816694112718608 43.68058160890429775, -72.25829942550979013 43.68057489549810413, -72.25829553036109587 43.68053441255135994, -72.2583077575056052 43.68053379302246242, -72.25829941736284923 43.68044710283499654, -72.25868454306348099 43.6804275727843816))");
polys.push("Polygon ((-72.25979312630390439 43.67389223238013329, -72.25948556186195049 43.6741450221344607, -72.25906994846984333 43.67387861842033203, -72.25909999750744817 43.67385392047454218, -72.25890884503624534 43.67373139350118549, -72.25903639951505397 43.67362655663641391, -72.25922762679469713 43.67374913251477153, -72.25937756237038911 43.67362589972147191, -72.25938992552158879 43.67363382463737764, -72.25947221029271361 43.67356619419628316, -72.25974329307648247 43.67373995516842911, -72.25966103420365982 43.67380756406655706, -72.25979312630390439 43.67389223238013329))");
polys.push("Polygon ((-72.26010710569174478 43.67638631473020894, -72.25946655582205835 43.67598699674906015, -72.2594523725593092 43.67581274928984669, -72.25950599384324846 43.67581044964540382, -72.25950009563804599 43.67573798861452872, -72.25957466678883634 43.67573479092187227, -72.25958057360472253 43.67580736171273514, -72.25969990194525394 43.67580224414181345, -72.25970050004556811 43.67580958560827042, -72.25973750737570356 43.67580799849710615, -72.25976648563441529 43.67582421771166423, -72.25976849606699659 43.67584891959607063, -72.25973809592896657 43.67587342241581183, -72.2597385628802158 43.67587915703781221, -72.2603695467196161 43.67627250982177145, -72.26059979590858973 43.67626025813373047, -72.26059847384502177 43.67624717078897589, -72.26071289251794383 43.67624108309365027, -72.26077744353533205 43.67628105452914156, -72.26077781005652412 43.67631820300100998, -72.26079722527153137 43.67631733972955743, -72.26094539248126125 43.67640954040614787, -72.26095568861055085 43.6764008237056629, -72.26107318106758726 43.67647393660121935, -72.26099959405068773 43.67650242121221993, -72.26092685281886929 43.67645715507049431, -72.26093231709468512 43.6764412341323407, -72.26085924409380823 43.67639576265580814, -72.26087142195741819 43.67652621125476031, -72.26114523747669693 43.67669690066145449, -72.26116036396751952 43.6768499778386925, -72.26111910852010567 43.67688484057467946, -72.26103567986241671 43.67683283365930436, -72.26100976311418833 43.6768547339008677, -72.26096917995346303 43.67682943513458582, -72.26086393979444722 43.67691836818509898, -72.26006607131668602 43.67642098962691222, -72.26010710569174478 43.67638631473020894))");
polys.push("Polygon ((-72.26234276192367645 43.67663726435854699, -72.26233124356343751 43.67646800418037145, -72.26239280539967069 43.67646579771280813, -72.26239214066328032 43.67645601651989296, -72.26258839094325026 43.67644898110127372, -72.26259257315562934 43.67651043945587475, -72.26265849740764224 43.67650807599179075, -72.26266658629816675 43.67662694381701272, -72.26259398753410323 43.67662954639869355, -72.26259702903141147 43.67667423070015076, -72.26242209415316609 43.67668050159144144, -72.26242333192124079 43.67669869004779315, -72.26232993757515999 43.67670203809386464, -72.26232557267769607 43.6766378822747896, -72.26234276192367645 43.67663726435854699))");
polys.push("Polygon ((-72.26282271621880682 43.72279957149674345, -72.2628001294896336 43.72286646403130561, -72.26265110522834334 43.72284018260302219, -72.26267369087312886 43.72277329010317004, -72.26282271621880682 43.72279957149674345))");
polys.push("Polygon ((-72.26419477993360374 43.6708929663714116, -72.26406223429367515 43.67090004155872407, -72.26404914142865721 43.67077079775117454, -72.26418168678600296 43.6707637225805172, -72.26419477993360374 43.6708929663714116))");
polys.push("Polygon ((-72.26476071324921691 43.6775956882708698, -72.26473386940308785 43.67732113021717311, -72.26484684514106505 43.67731531145393831, -72.26484791914077732 43.67732630198274535, -72.26494715514384382 43.6773211913704813, -72.26494461110455347 43.67729517557578589, -72.26500887983044663 43.67729186534728569, -72.2650114116098905 43.6773177677959481, -72.26517547284480258 43.67730931770399394, -72.26520024391379593 43.67756266196894188, -72.265064154899747 43.67756967136478607, -72.26505225164994783 43.67757573624121648, -72.26503920469261288 43.67758039759470989, -72.26502532420236946 43.6775835448927765, -72.2650109405529264 43.67758510350017787, -72.26499639811660813 43.67758503471127085, -72.26498204416633087 43.67758334210865456, -72.26496822012337873 43.67758006440848817, -72.2649552578907759 43.67757528088002061, -72.26487337811640543 43.67757949780740745, -72.26487438993898138 43.6775898460112586, -72.26476071324921691 43.6775956882708698))");
polys.push("Polygon ((-72.26483743487935385 43.67523701161997707, -72.26471698552430212 43.6752304863151295, -72.26471231970253939 43.67527424961996729, -72.26444093818410863 43.67525954709466873, -72.26443418542699249 43.67532520469941204, -72.26424572549413483 43.67531499412517348, -72.26425622867290599 43.67521286949635595, -72.26412053808617486 43.67520551777172955, -72.26411003467828209 43.67530764238952656, -72.26392157484953316 43.67529743128016406, -72.26392832816313216 43.6752317737021869, -72.26371725351162922 43.67522033751314581, -72.26373132262121146 43.6750835506156676, -72.26382178279128254 43.67508845149267671, -72.2638420417139713 43.67489147877103761, -72.26415111266939562 43.67490822509716253, -72.26413610815404809 43.67505412204601356, -72.26427179840113979 43.67506147375430459, -72.26428230148721354 43.67495934821904768, -72.26447076031190875 43.67496955874000264, -72.26446400761638245 43.67503521634946395, -72.26485600214368787 43.67505645315128504, -72.26483743487935385 43.67523701161997707))");
polys.push("Polygon ((-72.26491441851287334 43.67505958029941837, -72.26489895917728745 43.67497426977924135, -72.26483553607505428 43.67497944316584579, -72.26481825024151817 43.67487640451423658, -72.264866208870842 43.67487316261167507, -72.26486230491757112 43.67484642756441104, -72.26482580523513377 43.67484923597319835, -72.26481257530727476 43.67484191112934155, -72.26480707728651964 43.67481149503490911, -72.26470728665216825 43.67481990448337115, -72.26468900747771329 43.67471034099900606, -72.26478919205065665 43.67470153437443514, -72.26478442021796411 43.67467293892005387, -72.26493562412149174 43.67466031261849935, -72.26496253652629775 43.67483010315806524, -72.2650201603491098 43.67482475124189989, -72.26503823170085639 43.67493442646728852, -72.26498165612886737 43.67493982780997186, -72.26498658532933916 43.67496702642263529, -72.26492287985331586 43.67497310860613169, -72.26493878534508042 43.67506088477949078, -72.26491441851287334 43.67505958029941837))");
polys.push("Polygon ((-72.26491441851287334 43.67505958029941837, -72.26493878534508042 43.67506088477949078, -72.26539635690919283 43.67508538126485718, -72.26536122810608731 43.67546531912073249, -72.26508434978730122 43.67545101864290302, -72.26508943407559116 43.67539648109814721, -72.26482234032805252 43.67538379658976311, -72.26483743487935385 43.67523701161997707, -72.26485600214368787 43.67505645315128504, -72.26491441851287334 43.67505958029941837))");
polys.push("Polygon ((-72.26509651410182755 43.67882773683214026, -72.26485118184041312 43.67883835557870498, -72.26483000140933655 43.6785805938653553, -72.26507403721960543 43.67857003055516429, -72.2650726928098095 43.67855367523326038, -72.26509080515361916 43.67853732606008066, -72.26507567563677981 43.67852849637996115, -72.26509566115896632 43.67851045697018009, -72.26511103391280244 43.67851942848525226, -72.2651169779464766 43.67851406355469379, -72.26511674389631423 43.67851122776156814, -72.26519968775875213 43.67850763783679469, -72.26520403240527912 43.67851017398427871, -72.26521304799358347 43.6785020360529046, -72.26523940023766102 43.67851741435580237, -72.26522990037020122 43.6785259886585564, -72.26525966049226213 43.67854335626592643, -72.26526120673869968 43.67856217041808264, -72.26545119144452656 43.67855394600054808, -72.26545081746985488 43.67854938730837944, -72.26557184357464791 43.67854414850513933, -72.26559357863106925 43.67880860189017511, -72.26547596219492675 43.67881369324452834, -72.26547550087624927 43.6788080837293009, -72.26528111595827397 43.67881649864388294, -72.26528234758720259 43.67883148284760608, -72.26509747418020879 43.67883948581044251, -72.26509651410182755 43.67882773683214026))");
polys.push("Polygon ((-72.26583235802304728 43.67599765760180475, -72.26515976418863829 43.67608933130470206, -72.26508942472537456 43.67582018539297195, -72.26576171473982413 43.67572693317107735, -72.26583235802304728 43.67599765760180475))");
polys.push("Polygon ((-72.26643190783872228 43.67359532035328584, -72.26608376374474574 43.67370386152793316, -72.26596474947481852 43.67350156656669213, -72.26631244422071632 43.67339357355098173, -72.26643190783872228 43.67359532035328584))");
polys.push("Polygon ((-72.26659704698769815 43.71797068343674653, -72.26654951671723381 43.71781679978671775, -72.26666228979546247 43.71779936227890317, -72.26691001443715834 43.71775892237927508, -72.26693345381113431 43.71773246253699341, -72.26724487172690203 43.71768162919051548, -72.2672474773866611 43.71769004279082083, -72.26728191963687209 43.71766477525022054, -72.26727346963816956 43.71765815738471161, -72.26741663584401465 43.7175619902067254, -72.26743935178586753 43.71757978026891323, -72.26747122642744614 43.71755836943628992, -72.26751557770010947 43.717593101955039, -72.2674847730253731 43.71761379432557248, -72.26750673980544093 43.71763099697064803, -72.26736095165784945 43.71772892506243835, -72.26734207239039165 43.71771259272622245, -72.26727819970471955 43.71772793152901215, -72.26726363837629208 43.7177422245413112, -72.26727874534375928 43.71779100418846298, -72.26706198276495741 43.71782597818116756, -72.26708856533338121 43.71791234721452923, -72.26693323089000387 43.71793748729413664, -72.26691346671695726 43.71787315646706418, -72.26670714796730977 43.71790667984230794, -72.26672071057413405 43.71795059022731778, -72.26659704698769815 43.71797068343674653))");
polys.push("Polygon ((-72.26761894078174464 43.68792135089609729, -72.26762590927296515 43.68763316023692767, -72.26778999682392168 43.68763524964936806, -72.2677830291093386 43.68792343941387202, -72.26761894078174464 43.68792135089609729))");
polys.push("Polygon ((-72.26798494312370735 43.68793014227711069, -72.26799190986282895 43.68764195160621711, -72.26814115493107238 43.68764385127546035, -72.26813419014678175 43.68793204194469126, -72.26798494312370735 43.68793014227711069))");
polys.push("Polygon ((-72.2681197821807757 43.67297967482100063, -72.26731077433164785 43.67300992095591283, -72.26728388275508053 43.67263092659115387, -72.26767894807169057 43.67261615728587998, -72.26767778084244753 43.67259971914004524, -72.26788537923781064 43.67259195701014107, -72.26788654528354527 43.67260839516008986, -72.26809288553057797 43.6726006806740088, -72.2681197821807757 43.67297967482100063))");
polys.push("Polygon ((-72.26833810784182788 43.68637891499623294, -72.26829735672045274 43.68604477579790313, -72.26832911909897916 43.68604273557443207, -72.26832221944013668 43.68598616480731778, -72.26853402252662306 43.68597256222085434, -72.2685409805364003 43.68602961510446647, -72.26859984347775878 43.6860258344834449, -72.26864053830625778 43.68635951123563643, -72.26833810784182788 43.68637891499623294))");
polys.push("Polygon ((-72.26846267685137093 43.68858154982250852, -72.26824926028010054 43.68857934027686696, -72.26825288397397173 43.68839647874542464, -72.26806177422113819 43.68839448447128149, -72.26806193332809869 43.68838644962941231, -72.26792556354125452 43.68838502577379046, -72.26792931515892349 43.68819575059009708, -72.26806896556749393 43.68819720758469316, -72.26806908399807128 43.68819118460805129, -72.26846685904067158 43.68819533483462436, -72.26846313379608944 43.68838335700194619, -72.26846660218511431 43.68838339364551615, -72.26846267685137093 43.68858154982250852))");
polys.push("Polygon ((-72.26850118082394658 43.68522341757727645, -72.26840079682463625 43.68494769981816006, -72.26863109087599923 43.68490354319752811, -72.26873147461184033 43.68517926075737989, -72.26850118082394658 43.68522341757727645))");
polys.push("Polygon ((-72.26862793653739914 43.68845960342640922, -72.26863616482378916 43.68816664384201687, -72.268787457441519 43.68816888110961116, -72.26878552228781416 43.68823779869214263, -72.26880966800180772 43.68823815573457381, -72.26880760927311087 43.68831145639751412, -72.26878317075951941 43.68831109459656403, -72.26878039966466361 43.68840977642069845, -72.26870875005214145 43.68840871641295109, -72.26870728775216435 43.68846080653465691, -72.26862793653739914 43.68845960342640922))");
polys.push("Polygon ((-72.26873608038881969 43.68805597631190807, -72.26833224533996258 43.68804854126995707, -72.26835011056944325 43.68753762902814231, -72.26875394220026294 43.68754506492748391, -72.26873608038881969 43.68805597631190807))");
polys.push("Polygon ((-72.26877567357576027 43.67759269690590429, -72.26875448239265154 43.67758613811376023, -72.26872964608399741 43.67762840658213008, -72.2686777883163245 43.67761235605075143, -72.268642801716382 43.67767176667562268, -72.26854253018538543 43.67764315584716428, -72.2685786544396791 43.67758167360265986, -72.26852567468827715 43.6775652760829658, -72.26854938195285172 43.67752492805114173, -72.26846196528978794 43.67749787228814995, -72.2684348717365026 43.6775439832725425, -72.26838454172754211 43.67752840610204856, -72.26837212345893136 43.67754954029761194, -72.26826351572334772 43.67751592461521426, -72.26827593402339289 43.67749479043113325, -72.26823619901536233 43.6774824921892133, -72.26826555100656435 43.6774325377694268, -72.26830528474735615 43.67744483600794325, -72.26837866383938547 43.67731995125332389, -72.26840780261677821 43.67732896957055289, -72.26841683336772348 43.67731359924703582, -72.26850689816652107 43.67734147546718759, -72.2684978674345615 43.67735684579764666, -72.26854554891140481 43.67737160340026037, -72.2685229708554715 43.67741003013892254, -72.26854697706046693 43.67741745982014834, -72.26855735520365442 43.67739979621462965, -72.26855214046294407 43.67739818194645096, -72.26856548412534664 43.67737547043665103, -72.26859677627513179 43.67738515511896935, -72.26858343138241025 43.67740786663885899, -72.26857821664032144 43.67740625237187402, -72.2685678372711493 43.67742391688577897, -72.26859184348711551 43.6774313465574977, -72.26861442151576398 43.67739292070558577, -72.26867799731833486 43.67741259803707266, -72.2687084768134298 43.67736072221715915, -72.26881443608134248 43.67739351706497786, -72.26878395542149747 43.67744539291894057, -72.2688289886128814 43.67745933088868782, -72.26880415240803757 43.67750159937357068, -72.26882534481565301 43.67750815905021256, -72.26877567357576027 43.67759269690590429))");
polys.push("Polygon ((-72.27011478807500566 43.71725703959216247, -72.27007868662282419 43.71725619151175835, -72.27007956984293457 43.7172363728572293, -72.2700636782674195 43.71723600041902813, -72.27006547505180833 43.71719567620154123, -72.27011746801467496 43.71719689491929728, -72.27011478807500566 43.71725703959216247))");
polys.push("Polygon ((-72.27062601313986079 43.71719053214501827, -72.27060302008831627 43.71718946285411533, -72.27060348154134317 43.71715373870630827, -72.27058157345815914 43.71715221184657452, -72.27058389620295031 43.71709855850519233, -72.27061443048296496 43.71709839716955059, -72.27064215322141649 43.71709741452360021, -72.27066954803794374 43.7170941771451993, -72.2706807094962187 43.71708977085791048, -72.27069261877255713 43.71708655320143322, -72.27071767638499011 43.71707770726764863, -72.27074445301910544 43.71707210507186403, -72.27077215736775884 43.71706991100643336, -72.2707999698396435 43.71707119150698873, -72.2708270697946773 43.71707590860820858, -72.27085265417454707 43.71708392164529755, -72.27087549654275733 43.7170934630778163, -72.27089961609837587 43.7171011769261213, -72.27092918900592622 43.71710352096423691, -72.27096563234668736 43.71710332829553636, -72.27096236150053699 43.71715719277151635, -72.2709287385904986 43.71715674768486792, -72.2709279494287955 43.71716675785981465, -72.27090273127008402 43.71716617292569396, -72.27089747188819047 43.71723085677068354, -72.27082410556319303 43.71722958847198726, -72.27082367119945161 43.71723810716613201, -72.27075027419728315 43.71723687408469772, -72.27075053570021623 43.7172283176017018, -72.27066004383370057 43.71722675357916188, -72.27066118157472374 43.71719214193607428, -72.27062601313986079 43.71719053214501827))");
polys.push("Polygon ((-72.2709656702652552 43.68946826907342285, -72.27096504352614659 43.68944970309296849, -72.27114750023406486 43.68944639456991297, -72.27114831973770492 43.68947019252274799, -72.27121179670895401 43.68946904135575693, -72.27121145538094993 43.68945913971764128, -72.27131203879231691 43.68945731520099685, -72.27131247861760244 43.68947010553463883, -72.27138310503710272 43.68946882464637582, -72.27138644981405946 43.6895659323403649, -72.27132117080985552 43.68956711653864744, -72.27132141638942642 43.68957427617693412, -72.27121691514963686 43.68957617182693554, -72.27121652492533599 43.68956486004179141, -72.27115477289827083 43.68956597958755594, -72.27115548215083152 43.68958658018292596, -72.27093430380207906 43.68959059116372146, -72.27093341957717598 43.68956490971056184, -72.27086314151424062 43.68956618397930924, -72.27086379636108404 43.68958520524555666, -72.27064472499931469 43.68958917662664732, -72.27064397391620787 43.68956735665751268, -72.27063495182555641 43.68956752043801828, -72.27063511155817821 43.6895721900445082, -72.27053651464288464 43.68957397736894421, -72.27053614895420708 43.68956336750446923, -72.27047938727851317 43.68956439641645062, -72.27047807983659311 43.68952643037302863, -72.27044639773683343 43.68952700455928806, -72.27044872580053436 43.6895946269379678, -72.27028383036793002 43.68959761569280431, -72.2702827502703542 43.68956622794051725, -72.27019192910309187 43.68956787489803872, -72.27018445922583112 43.68935087114508065, -72.27027438221104205 43.68934924153761301, -72.27027339479404588 43.68932053909617252, -72.27040080856129123 43.68931822986976243, -72.27040177461910275 43.68934628077396098, -72.27043059064835973 43.68934575864167158, -72.27043599236968419 43.6895026595906586, -72.27047651299056952 43.68950192440985347, -72.27047542418249293 43.68947029638691504, -72.27053836915092688 43.68946915560476185, -72.27053807349190606 43.68946058042289593, -72.27062980104143719 43.6894589176004331, -72.27063013897129906 43.68946873735213643, -72.27068115246645164 43.68946781254586398, -72.27068051172915375 43.68944920253446185, -72.27085360286454829 43.68944606457927904, -72.27085443642982909 43.68947028639176011, -72.2709656702652552 43.68946826907342285))");
polys.push("Polygon ((-72.27177861075253418 43.6774435545256452, -72.27137185946494924 43.67752951251237903, -72.27129581546194004 43.67732740545203995, -72.27169872438372522 43.67724263636169724, -72.27177861075253418 43.6774435545256452))");
polys.push("Polygon ((-72.2719914251712936 43.67479610598875439, -72.27193370193630528 43.67480840508437723, -72.27186932876959702 43.67482212096658145, -72.27184750436448724 43.67476816031819453, -72.27171851923223755 43.67479564361730127, -72.27146109690670528 43.67415917768568079, -72.27190335120766917 43.67406576420147957, -72.27190711897922881 43.67407148759813396, -72.2719258100038644 43.67406750482832223, -72.27194708923119038 43.67412091211201641, -72.27192869393432773 43.67412483211465002, -72.2721618089821618 43.67470118857989547, -72.27201311823198182 43.6747328710102849, -72.27203494402105832 43.67478683252004146, -72.2719914251712936 43.67479610598875439))");
polys.push("Polygon ((-72.27200466592579176 43.67650074270466121, -72.27201690745691565 43.67653100842071723, -72.27170078026264832 43.67659836562057762, -72.27172964026399882 43.6766697179849217, -72.27165100456072366 43.67668647226520307, -72.27175275747158878 43.6769380395540594, -72.27171140753362977 43.6769468495974138, -72.27171212987872195 43.67694863691225038, -72.27121073355473868 43.67705546743837886, -72.2711340779294602 43.67686594465981642, -72.27106154376055258 43.67688139897050092, -72.2709907524753703 43.67670637310465764, -72.27106419351729016 43.67669072592889279, -72.27100057208777173 43.6765334268257206, -72.27162134433299912 43.67640116137545192, -72.27168883958221102 43.67656803617373384, -72.27200466592579176 43.67650074270466121))");
polys.push("Polygon ((-72.27232074482706992 43.67520706157721833, -72.27218799720948539 43.67488362902347632, -72.272750378266295 43.67476390676583264, -72.27272353239750657 43.67469753574425084, -72.27298493499162646 43.67464183387034637, -72.27299162119228981 43.6746583128863648, -72.27308057081104664 43.67463929869213501, -72.27329436199494239 43.67516810290914719, -72.27303628240518663 43.67522346923432508, -72.27297342169478611 43.67506793309267721, -72.2725983204172735 43.6751494900590842, -72.27232074482706992 43.67520706157721833))");
polys.push("Polygon ((-72.27232996956402644 43.72218767329521683, -72.27244073404615676 43.7221939195815068, -72.27242632682984436 43.72232830775255508, -72.27231556210129781 43.72232206145385902, -72.27232996956402644 43.72218767329521683))");
polys.push("Polygon ((-72.27238342280817562 43.67536246043246706, -72.27226937595460754 43.67538673924918413, -72.27223487213140629 43.67530143252095343, -72.27218884714081071 43.67531123958136163, -72.27217930013536318 43.67530745495739808, -72.27216937514640449 43.67532071335575239, -72.27217601745736886 43.67532334597689214, -72.27215158364998615 43.67535585901556772, -72.27214494880372797 43.67535322905366257, -72.27214132778237854 43.67535804110545428, -72.27213303209333617 43.67535475748887563, -72.27213416527268919 43.6753532519703711, -72.27210430910733407 43.67534141848098272, -72.27210321202365151 43.67534293730905404, -72.27209491632063987 43.67533965188964373, -72.27209852357775333 43.67533482731123939, -72.27209190740875044 43.67533220444788356, -72.2721163860605742 43.67529970918568694, -72.27212302836693425 43.67530234180997439, -72.27213300853919975 43.67528914432806175, -72.27212348233143757 43.6752853307870339, -72.27211001507410515 43.67525203203235407, -72.27127580391668005 43.67542963173429627, -72.2711692840575779 43.6751666024715135, -72.27111790709929551 43.67517754989054168, -72.27108781761793921 43.67510315441710134, -72.27113920070954123 43.67509220607900033, -72.27112784373429122 43.67506412815347261, -72.27132758961926129 43.6750215685930101, -72.27130633789764147 43.67496902602381681, -72.27130907384660929 43.67496844270753797, -72.27130450228425218 43.67495713951059599, -72.2713286261469392 43.67492509812660018, -72.27137280965281718 43.67494260027178399, -72.27137742448074675 43.67495401214556239, -72.27138827389454434 43.67495166587154642, -72.27138348232914211 43.67493981929936808, -72.27141207554421953 43.67493372666849183, -72.27141112366824416 43.67493130691631364, -72.2714542714912227 43.67492211393780366, -72.27145542622066898 43.67492472883157717, -72.27148362344112797 43.67491872018431565, -72.27148833873467026 43.67493037904129949, -72.27149952011851042 43.67492799679751414, -72.27149490526954878 43.67491658492873086, -72.27149611677776875 43.67491497549394097, -72.27151904248279379 43.67488452633241991, -72.27156320110466936 43.67490201773492231, -72.27156777146213074 43.67491332002792603, -72.27157050740598265 43.67491273670542284, -72.27159184836193617 43.67496550017082768, -72.2719650754474543 43.67488597438584463, -72.27193370193630528 43.67480840508437723, -72.2719914251712936 43.67479610598875439, -72.27201818634074471 43.67486226881391786, -72.27216799485515253 43.67483417713562943, -72.27218799720948539 43.67488362902347632, -72.27232074482706992 43.67520706157721833, -72.27238342280817562 43.67536246043246706))");
polys.push("Polygon ((-72.27255926376670914 43.72196927298033842, -72.27245382982957267 43.72194219811289173, -72.27250208702720613 43.72184335129472288, -72.27260752081174644 43.72187042611898278, -72.27255926376670914 43.72196927298033842))");
polys.push("Polygon ((-72.27257209768889368 43.67518239430096827, -72.2725983204172735 43.6751494900590842, -72.27264637597934893 43.67516674526793707, -72.27261978775707973 43.6752014056942599, -72.27257209768889368 43.67518239430096827))");
polys.push("Polygon ((-72.27260292239117234 43.7225870198966291, -72.27247997624291997 43.7225198159058408, -72.27254643560195291 43.72245586432685371, -72.27266938293313103 43.72252306824065471, -72.27260292239117234 43.7225870198966291))");
polys.push("Polygon ((-72.27260956438001926 43.7185255319112116, -72.27261667302413173 43.71858036296614358, -72.27253150027020467 43.71858630125482392, -72.27252439170295872 43.71853147019419339, -72.27260956438001926 43.7185255319112116))");
polys.push("Polygon ((-72.27267006190533039 43.72152716983286069, -72.27276901588444957 43.72155290266942274, -72.27269854222321044 43.72169544752910042, -72.27259958803827544 43.72166971463335727, -72.27267006190533039 43.72152716983286069))");
polys.push("Polygon ((-72.2728428859632146 43.71840724335768158, -72.27285120831976428 43.71848236888347117, -72.27280584490942772 43.71848498652435211, -72.2728067161741734 43.71849632179781509, -72.2726313112937504 43.71850657920235506, -72.27262220216812239 43.7184283490140615, -72.27278374460836119 43.71841889688641913, -72.27278290593642396 43.718410671157514, -72.2728428859632146 43.71840724335768158))");
polys.push("Polygon ((-72.27286188463277483 43.72114250637777388, -72.27285388795347387 43.72106415153593417, -72.27300156821505084 43.72105622351940468, -72.27300956384459596 43.72113457835651218, -72.27286188463277483 43.72114250637777388))");
polys.push("Polygon ((-72.27301568838494461 43.72219761149867878, -72.27291713766840076 43.72217309452472023, -72.27298658279556776 43.72202626890069155, -72.27308513329840878 43.7220507858166556, -72.27301568838494461 43.72219761149867878))");
polys.push("Polygon ((-72.27308057081104664 43.67463929869213501, -72.27299162119228981 43.6746583128863648, -72.27298493499162646 43.67464183387034637, -72.27272353239750657 43.67469753574425084, -72.27269171927949287 43.67461888259526148, -72.27241426308411576 43.67467796312861594, -72.27231112394235879 43.67442284389772311, -72.27358409465846023 43.67415171816525543, -72.27368723873972556 43.674406839830894, -72.27311421655322476 43.67452886613322249, -72.27312702719999038 43.67456046442495676, -72.27316325615106507 43.67455274762091477, -72.27318869518920508 43.67461618637725707, -72.27308057081104664 43.67463929869213501))");
polys.push("Polygon ((-72.27325085175479558 43.72275647435084522, -72.27324850086428398 43.72269137541695727, -72.27345730129086121 43.7226874094290352, -72.27345965240722592 43.72275250835737381, -72.27325085175479558 43.72275647435084522))");
polys.push("Polygon ((-72.27325355179492306 43.72175483456119593, -72.27318304301661556 43.7218938075525827, -72.27306662141293714 43.72186273857321481, -72.27313713042552479 43.72172376565157492, -72.27325355179492306 43.72175483456119593))");
polys.push("Polygon ((-72.27326255195146132 43.7222563141984395, -72.27333309699925223 43.72212091242190013, -72.27342915166205728 43.72214723521219781, -72.27335860679194468 43.7222826361463035, -72.27326255195146132 43.7222563141984395))");
polys.push("Polygon ((-72.27326943695547357 43.67517345108819882, -72.27355867605034234 43.67588851349835721, -72.27304242652741095 43.67599876659059532, -72.27297955043050592 43.67584449605323726, -72.27268273710421909 43.67590763210812099, -72.27274547353626133 43.6760630034330859, -72.27244379769052784 43.67612009817847252, -72.27243448482843746 43.67609707424714571, -72.27243215100791929 43.67609757175272023, -72.27242756517182443 43.67608623537614676, -72.27244065858796773 43.67608344597725534, -72.27244853451185236 43.67607309754068723, -72.27243756997550861 43.6760689469223351, -72.27243459262669489 43.67607290410579424, -72.27242464085382778 43.67606896053547416, -72.27242611421372942 43.67606700047649326, -72.2723978774538125 43.67605580833382106, -72.27239632448680595 43.67605774451244827, -72.27238648848543789 43.67605384442873628, -72.27239101753603734 43.67604782506495553, -72.27239502664222925 43.67604941494484194, -72.2724167357059315 43.67602056067936189, -72.27241283309852804 43.67601883252519457, -72.27241735848718918 43.67601281948024194, -72.27242731026836964 43.67601676485129758, -72.272425863040894 43.67601873377252986, -72.27245397850131781 43.67603007326256659, -72.2724555656881904 43.67602796408843346, -72.27246544899198 43.67603188191691999, -72.27246247910510135 43.67603584086171509, -72.27247321600654573 43.67604029240732189, -72.27247507858666609 43.67603769933604951, -72.27248639872016156 43.67603528655845224, -72.27248743167574219 43.6760377472746768, -72.27252366404157158 43.67603002705646276, -72.27252266573309214 43.67602755895635624, -72.2725284074770542 43.67602633593118355, -72.27252565673161655 43.67601953608362919, -72.27252747082214057 43.67601914933923979, -72.27243395192778053 43.67578794274484721, -72.27243183590199749 43.6757883931926969, -72.27242323271350699 43.67576712333430322, -72.27236549210373084 43.6757793813352464, -72.27237090452582891 43.67579276189352555, -72.27230251863787203 43.6758073336455297, -72.27228434734894336 43.67576218341837802, -72.27227739541470442 43.67576366486260042, -72.27226903389019697 43.67574299045832475, -72.27225484417664347 43.67574601426348124, -72.27225520096008893 43.67574832105204763, -72.27225026976067568 43.67574937145635516, -72.27222695464779179 43.67570027646322472, -72.27221000495644887 43.67564982554172559, -72.27221536553133774 43.67564868285752766, -72.27221635588304594 43.67565085487967735, -72.27223054434523419 43.67564783198596956, -72.27222218161327305 43.67562715758422343, -72.27222913353317324 43.67562567614342584, -72.27221082201572244 43.67558062835385613, -72.27227917971931959 43.67556599020044672, -72.27228459210257938 43.67557937076354335, -72.27234231600124303 43.67556707148845874, -72.27226937595460754 43.67538673924918413, -72.27238342280817562 43.67536246043246706, -72.27303628240518663 43.67522346923432508, -72.27326943695547357 43.67517345108819882))");
polys.push("Polygon ((-72.27328415590879729 43.67449348362892891, -72.27333857609296786 43.67462333681572062, -72.27375532443986117 43.67453132423892725, -72.27375637781416629 43.67453383974014258, -72.27378470359708729 43.67452758592329332, -72.27378365022171636 43.67452507042233378, -72.27378997783215198 43.67452367320857576, -72.27379512644201043 43.67453595881832484, -72.2737993456762382 43.6745350273376971, -72.27392475273416039 43.67483425905219008, -72.27337872965564713 43.67495481383383549, -72.27338674348311542 43.67497393738472056, -72.27340354216596552 43.67497018403498998, -72.27340535279692801 43.6749745037599908, -72.27340480714097737 43.67497462456547197, -72.27340599899766005 43.67497746966026284, -72.27354209700358467 43.67494742109875716, -72.27359544450168016 43.67507471464865176, -72.27346004154036052 43.6751048486904736, -72.27347046176990375 43.67513067758149958, -72.27329436199494239 43.67516810290914719, -72.27308057081104664 43.67463929869213501, -72.27318869518920508 43.67461618637725707, -72.27316325615106507 43.67455274762091477, -72.27312702719999038 43.67456046442495676, -72.27311421655322476 43.67452886613322249, -72.27328384587839594 43.67449274361664635, -72.27328415590879729 43.67449348362892891))");
polys.push("Polygon ((-72.27345607044880182 43.72121020014552073, -72.27331530275631621 43.7211710583903681, -72.2733223987746527 43.7211576349968567, -72.27327844983447847 43.72114541498637408, -72.27331057492106936 43.72108464327216382, -72.27349526648347933 43.72113599881053858, -72.27345607044880182 43.72121020014552073))");
polys.push("Polygon ((-72.27347731376838169 43.67720551229759707, -72.27334773557171843 43.67715414458885448, -72.27332460360574373 43.67715906742969167, -72.27330226027508786 43.67710379033436396, -72.27332539222175001 43.67709886749810977, -72.27334973473591617 43.67706651851550959, -72.27330517539652988 43.67704885172378937, -72.27328203852526656 43.67705377638225173, -72.27325968537147105 43.6769985011298445, -72.27328281472871652 43.676993571115311, -72.27335359314221819 43.6768995351458571, -72.27334681157715579 43.6768827344388626, -72.27342297468690901 43.67686651325772118, -72.27342976362091065 43.67688330492040905, -72.27347433033169466 43.6769009734251128, -72.27349867523930982 43.67686863159760691, -72.27349188628784304 43.67685183993906861, -72.27356804433105708 43.67683561598791186, -72.27357483573656793 43.67685240312859207, -72.273605243308225 43.67686445831974851, -72.27374378820358913 43.67668038023634836, -72.27372523864706011 43.67663449959819388, -72.27399781722425587 43.67657647239377638, -72.2740038662431914 43.6765908350664489, -72.27431294716927823 43.67671372605256863, -72.27432956765427718 43.67669165800007391, -72.27432278471961524 43.67667486905870788, -72.27439893863478915 43.67665864907593942, -72.27440573149094405 43.67667543615993253, -72.27445028719620268 43.67669310704337704, -72.27447463883484602 43.67666075507059276, -72.27446785586339217 43.6766439661379593, -72.27454400602474038 43.67662775057881674, -72.27455080768881146 43.67664454660810947, -72.27468038325147859 43.67669590667102852, -72.2747035149260455 43.67669098355710844, -72.2747258593826416 43.67674626037588581, -72.27470272768877635 43.67675118349440311, -72.27467838603030259 43.67678353276190251, -72.27472295306424144 43.6768012043784708, -72.27474608222277652 43.67679627406882759, -72.27476843666070749 43.67685154902499534, -72.27474530748287407 43.67685647933920734, -72.2746745226764773 43.67695052160443225, -72.27468131196839352 43.67696731319044545, -72.27460515035612332 43.67698353880199846, -72.27459836108350544 43.67696674721140226, -72.27455378533670682 43.6769490809935661, -72.27452943972620858 43.67698142304881515, -72.27453623888358436 43.6769982127907781, -72.27446007591578336 43.67701443471256084, -72.27445328668902391 43.67699764401321971, -72.27432371054696603 43.67694627199796287, -72.27430058129540669 43.67695120222254701, -72.2742782272570139 43.67689592807357002, -72.27430135521288435 43.67689099426008426, -72.27432569595930545 43.67685865317881877, -72.27428113765058981 43.67684097866091264, -72.27425800843580816 43.6768459088767429, -72.27423565446747489 43.67679063381795856, -72.27425878367205314 43.67678570450673448, -72.27427127393353601 43.67676909843711286, -72.27413011290909139 43.67671313712035186, -72.2740427462540822 43.67673174138374037, -72.27400783865513745 43.67677812293064932, -72.2740161262260159 43.6767986454848085, -72.27400344232266605 43.67680134738143494, -72.27400447902284952 43.67680392597277717, -72.27393196971827649 43.67681942877629808, -72.27393090519528585 43.67681679632791969, -72.27391822128417687 43.67681949821510301, -72.27390992639409717 43.67679898469350519, -72.27384601462757985 43.67677364251731831, -72.27375864663642346 43.67679225467116311, -72.2736815225264877 43.67689470063804436, -72.27370441358986852 43.67690378228550685, -72.27372754287340229 43.6768988521813597, -72.27374989640858871 43.67695412644092556, -72.27372676710575661 43.67695905654968414, -72.27370241861946454 43.67699140384463874, -72.27374698920048957 43.67700907132199717, -72.27377012107351106 43.6770041483960938, -72.27379246479466701 43.67705942539862463, -72.27376933290234717 43.677064348329111, -72.27369855255165021 43.67715839266400479, -72.27370534159612703 43.67717518430883672, -72.27362917693494637 43.6771914056856545, -72.27362238790978211 43.67717461403623247, -72.27357782346915371 43.67715694917848168, -72.27355347976573796 43.67718929461513966, -72.27356026877342288 43.67720608626870415, -72.27348410275675406 43.67722230395575878, -72.27347731376838169 43.67720551229759707))");
polys.push("Polygon ((-72.27348090076749543 43.72183221494671557, -72.27357729350322302 43.72185715242315496, -72.27350682862856956 43.72200041237586277, -72.27341043568198131 43.72197547394173256, -72.27348090076749543 43.72183221494671557))");
polys.push("Polygon ((-72.27353616840059658 43.72154972312039689, -72.27344593257561201 43.72153532325699388, -72.27347115401326505 43.72145219189471987, -72.27356138971906319 43.72146659173912298, -72.27353616840059658 43.72154972312039689))");
polys.push("Polygon ((-72.27355867605034234 43.67588851349835721, -72.27384945417988149 43.67660805645586919, -72.27372523864706011 43.67663449959819388, -72.27329384558727554 43.6767263341403833, -72.27330079470443991 43.67674352099168544, -72.27334221751807775 43.67676044387437173, -72.27330975309097028 43.67680357199085961, -72.27325032145054706 43.67678001214420647, -72.27327282723200597 43.67675012111220667, -72.27326565555621585 43.67673238369768285, -72.27314485608735595 43.67675907990164319, -72.27315796127246017 43.67679179900135011, -72.27324048953596503 43.67682540802058355, -72.27307173905880688 43.67704956381897574, -72.27287462129096696 43.67697074980784322, -72.27295299605739842 43.67686760379890387, -72.27292756702205168 43.67680473830650811, -72.27267331534761752 43.67685883060093488, -72.27268600892834627 43.67689022883428862, -72.27263751648405332 43.67690055589410747, -72.27262490306003428 43.67686935704590923, -72.27251720182226791 43.67689217855568984, -72.27252513628066311 43.67691179581932204, -72.27246898270981035 43.67692376013686584, -72.27246104826802764 43.67690414286928302, -72.2724082509952126 43.67691542241799141, -72.27238901036560037 43.67686805921174198, -72.27236266876010973 43.67687369642015227, -72.27234622936008179 43.67683358372418212, -72.27237275312792519 43.67682793475341185, -72.27224869337041468 43.67652052256828199, -72.27203139358354633 43.67656682377788258, -72.27201690745691565 43.67653100842071723, -72.27200466592579176 43.67650074270466121, -72.27199625864427901 43.6764799587169037, -72.27201771736565661 43.67647538703211296, -72.2719415915537553 43.67628718057314785, -72.27196697911060141 43.67628177083059171, -72.27196441826859541 43.67627498256518237, -72.27196731793411288 43.67627106540852822, -72.27195736614943655 43.67626712089766983, -72.27195458153599361 43.67627088713322081, -72.27194462975218414 43.67626694262125397, -72.27194557326268409 43.67626568832854161, -72.27192566845921817 43.67625779930870067, -72.27192472494841979 43.67625905360127092, -72.27191477315943757 43.6762551081866448, -72.2719193022813613 43.67624908974143949, -72.27192195916536832 43.67625001174563693, -72.27194369790888118 43.6762211196107657, -72.27194111689473743 43.67622009639752179, -72.27194564600239346 43.6762140770512346, -72.27195559777747746 43.67621802156317301, -72.27195469221140911 43.67621922615124674, -72.27197455906234325 43.67622716487088042, -72.27197550258064496 43.67622591147794964, -72.27198545435965116 43.67622985598725904, -72.27198263359863972 43.67623360351348794, -72.27199258537936544 43.67623754802219338, -72.27199563742132682 43.6762334923472082, -72.2720128961437922 43.67622981507229696, -72.27200886860354956 43.67621985372910842, -72.27244413706648629 43.67612720693004746, -72.27244146386921386 43.67612059568423177, -72.27244379769052784 43.67612009817847252, -72.27274547353626133 43.6760630034330859, -72.27297284634657615 43.67601444586384929, -72.2729659748091251 43.67599743319235728, -72.27292400503500858 43.67598080919462689, -72.27295650537540439 43.67593719945386255, -72.27301701742690909 43.67596075912655351, -72.27299345439682554 43.6759898267560871, -72.27300074523618889 43.67600771566974771, -72.27304242652741095 43.67599876659059532, -72.27355867605034234 43.67588851349835721))");
polys.push("Polygon ((-72.27355867605034234 43.67588851349835721, -72.27385871041471432 43.67582565238195258, -72.27413060928822119 43.67576774097398129, -72.27417594267681977 43.67587990254872921, -72.27420026194535296 43.67587496512373235, -72.27422289094170083 43.67584482932665679, -72.27428228720022219 43.67586837805896494, -72.27424983623275523 43.67591149737626921, -72.27420866777121944 43.67589516931407445, -72.27418295619807509 43.67589731222381744, -72.2742295487480817 43.67601244991326581, -72.2740666414302666 43.67604716280040122, -72.27412709357821541 43.67619712348005123, -72.27429018999521304 43.67616243380415852, -72.27433546061722325 43.67627433732131692, -72.27435995082954889 43.67626912083233748, -72.27438243740535029 43.67623924318273509, -72.27444183411610368 43.67626279182788096, -72.27440938181392482 43.67630591119470296, -72.27436821428803171 43.67628958408633366, -72.27434372901011272 43.67629479875071041, -72.27438987582209506 43.67640736363711085, -72.27396555458476257 43.67649777971152503, -72.27397306849563563 43.67651635682953071, -72.27402403457928415 43.6765055543236187, -72.27403834232566737 43.6765400418710783, -72.27398691094785477 43.6765505759345416, -72.27399781722425587 43.67657647239377638, -72.27384945417988149 43.67660805645586919, -72.27355867605034234 43.67588851349835721))");
polys.push("Polygon ((-72.27376298891185513 43.72120083073189534, -72.27389194375712123 43.72123494933927645, -72.27384580557276195 43.721326820812628, -72.27376930541544198 43.72130661303786781, -72.27378488841833359 43.72127558251609969, -72.27373240924441689 43.72126171947253681, -72.27376298891185513 43.72120083073189534))");
polys.push("Polygon ((-72.27382739352587748 43.72248978942644726, -72.27375490856546492 43.72262805860066237, -72.27366136901437699 43.72260226726784538, -72.27373385540114725 43.72246399814466145, -72.27382739352587748 43.72248978942644726))");
polys.push("Polygon ((-72.27385871041471432 43.67582565238195258, -72.27355867605034234 43.67588851349835721, -72.27326943695547357 43.67517345108819882, -72.27329436199494239 43.67516810290914719, -72.27356958345683324 43.67510961175374717, -72.27360151154847756 43.67518858176509156, -72.27371028100368733 43.67516541512950567, -72.27372375946140437 43.67519875503938209, -72.27374813668647846 43.67519356268260822, -72.27377071010533882 43.67516357487811263, -72.27383013666928946 43.67518713898884641, -72.27379767470522154 43.67523027084224907, -72.27375648325387658 43.67521394093689224, -72.27373208618109857 43.6752191334008586, -72.2737811148912499 43.67534050033304283, -72.27380123114159005 43.67533652768890562, -72.273860207004887 43.67532386186944393, -72.27384082127548481 43.67527483723677051, -72.27405084454974826 43.67522965492887721, -72.27407017821342095 43.6752773134970198, -72.27409755947189751 43.67527156146077516, -72.27412637667038098 43.67528325863990091, -72.27413545793866945 43.67530626116537462, -72.27411968545827392 43.67532741741800351, -72.27409382608978206 43.67533602989445995, -72.27411183117968108 43.67538117891967175, -72.2739038116145025 43.67542515270150005, -72.27388403955946217 43.67537594651511768, -72.27382274850246802 43.67538899007259801, -72.27380247743398911 43.67539335237292875, -72.27385147211596461 43.67551463664540989, -72.27387584945728349 43.67550944426101012, -72.27389842292892297 43.67547945643261897, -72.2739578498552504 43.67550302047354904, -72.27392538905530728 43.67554615235471971, -72.27388419485458826 43.67552982071088508, -72.27385976181376748 43.67553502419378475, -72.27387315266321366 43.67556814493219974, -72.27376434542766503 43.67559132002278943, -72.27385871041471432 43.67582565238195258))");
polys.push("Polygon ((-72.27389601830815025 43.72274947628429942, -72.27404173907714835 43.72274227198352747, -72.27404860832302802 43.72281535834446942, -72.27390288736879143 43.72282256175491, -72.27389601830815025 43.72274947628429942))");
polys.push("Polygon ((-72.27397051569971609 43.72222540619051756, -72.2738970243940031 43.72236153775934042, -72.27380692002736851 43.72233595240982851, -72.27388041150713605 43.72219982089732326, -72.27397051569971609 43.72222540619051756))");
polys.push("Polygon ((-72.27406471793300113 43.68714225590838396, -72.27415539140791623 43.68702372924152399, -72.27416988024396005 43.68702956658400183, -72.27420706324798516 43.68698096150623655, -72.2742359163595296 43.68699258463449553, -72.27425421527088645 43.68696866617041508, -72.27423536510644908 43.68696107258626427, -72.27427239133447756 43.68691267353553798, -72.27429006709473924 43.68691979452042062, -72.2743069752959002 43.68689769257691324, -72.27428115596730152 43.68688729093307188, -72.27431795074041077 43.68683919372002578, -72.27431372141495558 43.68683748987296411, -72.27433244012209457 43.68681302102274344, -72.27430342767219429 43.68680133396060228, -72.27431990860272037 43.68677979052809945, -72.27434803558261933 43.68679112136631204, -72.27437434651321269 43.68675672759980699, -72.27434602650608042 43.68674531858820131, -72.27436386253620526 43.68672200201170597, -72.27439194341704365 43.68673331418288086, -72.27440248221513741 43.68671953751472614, -72.27461791501625044 43.68680632493855853, -72.2746042191371032 43.68682422722768877, -72.27464904060539652 43.68684228361419741, -72.27462770966998562 43.68687016776669907, -72.2745813389312417 43.68685148776380345, -72.27455654969965337 43.68688389153516738, -72.27459973227009016 43.68690128790620264, -72.27458029994798494 43.68692668856509442, -72.27453852341076868 43.68690985895283774, -72.27452731743396441 43.68692450684658013, -72.27449577799208669 43.68691180089384574, -72.27443400179140554 43.68699255404859372, -72.2744649746106802 43.68700503171364602, -72.27442742087406202 43.68705412128259269, -72.27439527488060378 43.68704117100882911, -72.2743642397631163 43.68708173915851489, -72.27438829695483946 43.68709143009758833, -72.27428238286185547 43.68722987816035896, -72.27406471793300113 43.68714225590838396))");
polys.push("Polygon ((-72.27408989323564015 43.72263342356437477, -72.27416037188442033 43.72249159249413708, -72.27427378618384068 43.72252123444181393, -72.27420330776945434 43.72266306557989424, -72.27408989323564015 43.72263342356437477))");
polys.push("Polygon ((-72.27410766934657715 43.72195533908710985, -72.27403711901013139 43.72209002582313531, -72.27394595490581253 43.72206490884524044, -72.27401650541825973 43.72193022216388414, -72.27410766934657715 43.72195533908710985))");
polys.push("Polygon ((-72.27423187461707244 43.70623361936073792, -72.2740907728126416 43.70621681172762152, -72.27413201639376439 43.70603186951644403, -72.27427311592926173 43.70604849439830275, -72.27423187461707244 43.70623361936073792))");
polys.push("Polygon ((-72.27423794005878221 43.72236901382921559, -72.27430652081538653 43.72223433654653491, -72.27440016832346714 43.72225941933007221, -72.27433158774022104 43.72239409576730651, -72.27423794005878221 43.72236901382921559))");
polys.push("Polygon ((-72.27424101163664716 43.72169815125992187, -72.27418130406651642 43.72183349510331141, -72.27407898481074255 43.72180975251208679, -72.27413869134785784 43.72167440872697597, -72.27424101163664716 43.72169815125992187))");
polys.push("Polygon ((-72.27428340506618554 43.72140929745485494, -72.27436765102704896 43.72143026295820789, -72.27429242196321013 43.72158926562621417, -72.27420817704548028 43.72156830006253614, -72.27428340506618554 43.72140929745485494))");
polys.push("Polygon ((-72.27435844812643495 43.72210903640635138, -72.27442903386547357 43.72197792073235689, -72.27453383232438 43.72200759563686034, -72.27446324802150457 43.72213871136717955, -72.27435844812643495 43.72210903640635138))");
polys.push("Polygon ((-72.27444865136524754 43.72130375600884378, -72.2743509082839779 43.72128157973524765, -72.27439566214390254 43.72117782199126879, -72.27449340631306995 43.7211999982212447, -72.27444865136524754 43.72130375600884378))");
polys.push("Polygon ((-72.27450368218434562 43.72185892885036651, -72.27448255164682678 43.7217175856000182, -72.27458125613415518 43.72170982326733935, -72.27460238690970584 43.7218511673983059, -72.27450368218434562 43.72185892885036651))");
polys.push("Polygon ((-72.27455798344885807 43.6867726139106054, -72.27464442362726516 43.68665570158248102, -72.27474758583568359 43.68669586829984297, -72.27466114579259227 43.68681277980432753, -72.27455798344885807 43.6867726139106054))");
polys.push("Polygon ((-72.27463034764997474 43.72288988688704592, -72.27456077554192859 43.72302385407169112, -72.27445858445074123 43.72299594115611399, -72.27452815675560771 43.72286197403189334, -72.27463034764997474 43.72288988688704592))");
polys.push("Polygon ((-72.2746775673202535 43.72278604394045232, -72.2745732319812646 43.72275775820570232, -72.2746437601991687 43.72262092732371741, -72.27474809409144996 43.7226492130025548, -72.2746775673202535 43.72278604394045232))");
polys.push("Polygon ((-72.27479736355304851 43.72255321754165891, -72.27470197755957315 43.72252613359410134, -72.2747715993688189 43.72239716679454347, -72.27486698518772812 43.72242425068565552, -72.27479736355304851 43.72255321754165891))");
polys.push("Polygon ((-72.27482999867605429 43.72142972816507012, -72.27471046963080425 43.7214879950972275, -72.27464700057871028 43.72141950943824895, -72.27476652955078862 43.72136124257221468, -72.27482999867605429 43.72142972816507012))");
polys.push("Polygon ((-72.27493657761411328 43.72229242624181467, -72.2748308512728812 43.72226323007834736, -72.27490432900589212 43.72212327901524986, -72.27501005388508304 43.72215247421929263, -72.27493657761411328 43.72229242624181467))");
polys.push("Polygon ((-72.27504524049571444 43.7220303680807092, -72.27497082669999884 43.72197093338743201, -72.2751195673169633 43.72187297994479138, -72.27519398113632576 43.72193241454210266, -72.27504524049571444 43.7220303680807092))");
polys.push("Polygon ((-72.27507848190539619 43.72142149958415303, -72.27517253505766348 43.72135960293654477, -72.27533231137566361 43.72148730453845644, -72.27523825819100978 43.72154920131637823, -72.27507848190539619 43.72142149958415303))");
polys.push("Polygon ((-72.27528923369000324 43.71510253096182197, -72.27537582482045764 43.71511267799932909, -72.27534831744641508 43.71523499730791684, -72.27526172429490714 43.71522466754774427, -72.27528923369000324 43.71510253096182197))");
polys.push("Polygon ((-72.27535334897790165 43.71525874659076294, -72.27541807574927191 43.71527614213199087, -72.27538990376720562 43.71533280625608597, -72.27532492690143329 43.71531559474377815, -72.27535334897790165 43.71525874659076294))");
polys.push("Polygon ((-72.27537828663336938 43.72164994851414832, -72.27536506673571637 43.7218036208806069, -72.2752633640183717 43.72179901859517059, -72.27527658542534539 43.72164534713222395, -72.27537828663336938 43.72164994851414832))");
polys.push("Polygon ((-72.27697368022042212 43.71165606977728402, -72.27700958106755991 43.71159113377223804, -72.27708063897638624 43.71161160339884333, -72.27708336011328072 43.71160646840240105, -72.27722320239291776 43.71164687242501401, -72.2772029019582618 43.71168374217708674, -72.27728407655062881 43.71170726735940093, -72.27724817593289686 43.71177220344800674, -72.27715865656173833 43.71174634574205697, -72.27716707121213346 43.71173075489227244, -72.27713242557587137 43.71172069720686437, -72.27713737151759688 43.71171116071451479, -72.277042035621065 43.711683504152127, -72.27704575065344272 43.71167690034502584, -72.27697368022042212 43.71165606977728402))");
polys.push("Polygon ((-72.27704027559380506 43.7053486316330364, -72.27701612754236749 43.70540362944565516, -72.27706034844493388 43.70541363514578848, -72.27703251231413617 43.70547797912990973, -72.27698045804491755 43.70546618631352942, -72.27699154821831939 43.70544107108716503, -72.27690259775496884 43.70542069600579538, -72.27694324010749938 43.70532647172473162, -72.27704027559380506 43.7053486316330364))");
polys.push("Polygon ((-72.27717592073832975 43.71076448160501826, -72.2772689747183108 43.7107413056253904, -72.27738057070295952 43.71075643803973065, -72.2774847024962952 43.71070686591654919, -72.2775430937741703 43.71077111546547656, -72.27747910976258083 43.71080163475942726, -72.27752118316618635 43.71084804764058873, -72.27751767120025761 43.71084971262680341, -72.2775283786207865 43.71086136073773787, -72.27757028338191958 43.71084156758193728, -72.27763097393552982 43.71090873090394524, -72.27754189667845708 43.71095108879306679, -72.27748172046099739 43.71088483804086877, -72.27748648930965203 43.71088280001295345, -72.27747552259938857 43.71087042243161846, -72.27742784638819273 43.71089298978780846, -72.27737761530237037 43.71083784123361227, -72.27727409578645279 43.7108235801367826, -72.27721172554451812 43.71083927650374079, -72.27717592073832975 43.71076448160501826))");
polys.push("Polygon ((-72.27812856107149742 43.71037064531408589, -72.27800946330738441 43.71032800728647771, -72.27802804836333905 43.71030069353948733, -72.27802357867751937 43.71029175190643912, -72.27803306801135363 43.71027780415875696, -72.27804685938097862 43.71027656840846731, -72.27807092747896434 43.71024119585285916, -72.27809456641794839 43.71024965871714585, -72.2781057000500482 43.71023329539568181, -72.27818896689652206 43.71026310649936875, -72.2781771669913411 43.7102804481629903, -72.27818743229497045 43.7102841231093393, -72.27812856107149742 43.71037064531408589))");
polys.push("Polygon ((-72.27815833263248635 43.70036740644466988, -72.27813704201510348 43.69976554370265376, -72.27813581497375139 43.69973086622744773, -72.27827225136722689 43.6997278690051445, -72.27827373647834008 43.69976254149773354, -72.27827373730590921 43.69976335515286792, -72.27827565365076623 43.69976331969708383, -72.27829576759424413 43.70033191687667795, -72.27817984823701636 43.7003340753108489, -72.2781798969038789 43.70033544585071894, -72.27829329585404139 43.70033333510557583, -72.27829378137209915 43.70034704681024351, -72.27818038116474497 43.70034915846266443, -72.27818101144490015 43.70036698449417401, -72.27815833263248635 43.70036740644466988))");
polys.push("Polygon ((-72.27818116405599369 43.69839229477739195, -72.27804814704880698 43.69839283712159528, -72.27804767698543742 43.69831861748377122, -72.27818048537507423 43.69831819326488187, -72.27817824753735465 43.69830880674671647, -72.27817747916606095 43.69827421681593904, -72.2782278769279003 43.69827362675756177, -72.2782578727743612 43.69827208556374387, -72.27839965707327963 43.69826464295111634, -72.27848529813806522 43.69825945473269968, -72.27853659290519772 43.69821605529191544, -72.27853011163874442 43.69815353448962014, -72.27851759569178114 43.69804861687076425, -72.27851543786853483 43.69802697372956146, -72.27856117317745088 43.69802416281662261, -72.27856245267911106 43.69803531228718185, -72.27858887122856402 43.69803431579536834, -72.27858999285409425 43.69805104382076877, -72.27863300491830501 43.6980488180999771, -72.27863105354266793 43.69802979124806797, -72.27863034856332547 43.69802292661753995, -72.27865064213384017 43.69802274686127674, -72.27865360908397463 43.69802294699191947, -72.27867136061296094 43.69802250812217892, -72.27867453743434112 43.69803956086744279, -72.27868805293825005 43.69812905228386768, -72.27870012572863345 43.69823866790027722, -72.27870143127906033 43.69827213256882459, -72.27870488293511642 43.69829985952514306, -72.27868719584921564 43.6983160330109186, -72.27868180974267887 43.69832058378220552, -72.27865220769510302 43.69834559760316495, -72.27864623980254066 43.69835064022356619, -72.27862673123978254 43.69836690535809254, -72.27841430294074598 43.69837908177991181, -72.27839158139612152 43.69838083970326892, -72.27818116405599369 43.69839229477739195))");
polys.push("Polygon ((-72.27854635042396581 43.71205972720713362, -72.27871315401803542 43.71215885375175958, -72.27862157852204916 43.71223993220089454, -72.27845477485105619 43.71214080552446291, -72.27854635042396581 43.71205972720713362))");
polys.push("Polygon ((-72.27857836377843626 43.69995419034791695, -72.27857489559023918 43.69993838215646065, -72.27849896393514939 43.69994715293620402, -72.27848063335002848 43.6998636196331347, -72.27845511465183392 43.69986656712689665, -72.27843450503847578 43.69977264755213753, -72.27852537048030968 43.6997621515554755, -72.27852616273170838 43.69976576377932531, -72.27853860979968204 43.69976432634943109, -72.27853781754754436 43.69976071412567364, -72.27866975886554712 43.69974547349318783, -72.27867055112537287 43.69974908571600025, -72.27868299818628373 43.69974764827041014, -72.27868220592571902 43.69974403604767588, -72.27875440007947816 43.69973569649043554, -72.27875796713249201 43.69975195148032299, -72.27876356800231861 43.69975130494236737, -72.27876237898394152 43.69974588661247594, -72.27876735780903061 43.69974531181041044, -72.278771682774547 43.69977887370838943, -72.27876887648456261 43.69981252149830198, -72.27875900900406236 43.69984546094635647, -72.27874230938701317 43.69987691676752206, -72.27873775779154641 43.69987534352368641, -72.27874493554161006 43.69986311999604567, -72.27874751712404588 43.69985872195103838, -72.27871334682404836 43.69986266900046701, -72.27871255456008726 43.69985905677805249, -72.27870010747690799 43.69986049422696084, -72.27870089974013013 43.69986410644946062, -72.27869903237241545 43.69986432256335718, -72.27870477969906915 43.69989051160816018, -72.27870166823907994 43.69989087119365223, -72.27870364951891702 43.6998999017465195, -72.27870676221988333 43.69989954215431283, -72.27871221168567217 43.69992437729427337, -72.27870723284523535 43.6999249520940154, -72.27870921412709038 43.69993398264671214, -72.27871419296825195 43.69993340784689906, -72.27871528311040095 43.69993837487348287, -72.27857836377843626 43.69995419034791695))");
polys.push("Polygon ((-72.27875202191381732 43.71226819150142262, -72.27898218932259056 43.71206096557549614, -72.27910409895537214 43.7121322095419842, -72.27887393169947927 43.71233943570996416, -72.27875202191381732 43.71226819150142262))");
polys.push("Polygon ((-72.27885083665633204 43.70081677111602403, -72.27887571120776045 43.7008159538396086, -72.27889883628252221 43.70136482234063635, -72.27888529301952758 43.70136512259752237, -72.27888937553389326 43.70146200899736044, -72.27888087051579191 43.70146219766178319, -72.27888106332599705 43.70146675906170231, -72.27887371149986961 43.70146689024524989, -72.27887396083802685 43.70147237390968087, -72.27874861545794261 43.70147537726504794, -72.27874229051508337 43.70133645810198431, -72.27874732992066242 43.70133633750961621, -72.27874780779396247 43.70134684771736744, -72.27876532850264368 43.70134642807011005, -72.2787476889524072 43.70095897135244911, -72.2787251302228384 43.70095951158113223, -72.27871869970228147 43.70081825099858719, -72.27884341364021736 43.70081526275912154, -72.27884349031127442 43.70081694547139506, -72.27885083665633204 43.70081677111602403))");
polys.push("Polygon ((-72.27887571120776045 43.7008159538396086, -72.27885083665633204 43.70081677111602403, -72.27885082899258862 43.7008165056376825, -72.27884434039958705 43.7006624932383545, -72.27933252710458589 43.70065166628122455, -72.27936775098055477 43.70148753678476794, -72.27888239168319728 43.70149830104701039, -72.27888136416973452 43.70147389047042452, -72.27888106332599705 43.70146675906170231, -72.27888087051579191 43.70146219766178319, -72.27888937553389326 43.70146200899736044, -72.27888529301952758 43.70136512259752237, -72.27889883628252221 43.70136482234063635, -72.27887571120776045 43.7008159538396086))");
polys.push("Polygon ((-72.27890444015478977 43.69888727741543022, -72.27883567501369555 43.69888771952550144, -72.27883508756367803 43.69882181173626634, -72.27890269707808102 43.69882094648494331, -72.27890444015478977 43.69888727741543022))");
polys.push("Polygon ((-72.27900145848423108 43.69903462416188944, -72.27914629474825858 43.69970217863272666, -72.27913070136133911 43.69970395971158439, -72.27913428103816784 43.69972083566758414, -72.2790135196790402 43.69973469924665466, -72.27895077253256773 43.6994536243723104, -72.2789255597609781 43.69945650372755352, -72.2789222770510662 43.69944137320151611, -72.2789474898164741 43.69943849384701196, -72.2788632532488009 43.69905040816488651, -72.27886500910102541 43.6990502079466836, -72.27886133463152873 43.69903327038338148, -72.27898218953166065 43.69901946856759878, -72.27898586402511683 43.69903640522685606, -72.27900145848423108 43.69903462416188944))");
polys.push("Polygon ((-72.27946754696398557 43.70296753844070992, -72.27933819577984309 43.70298999633112658, -72.27931529646296838 43.70291988786954107, -72.27944465060707557 43.70289761270225881, -72.27946754696398557 43.70296753844070992))");
polys.push("Polygon ((-72.27961443344254633 43.70331647034657863, -72.2796366403570687 43.70338152588932701, -72.27955636518950655 43.70339594786985771, -72.27954857522065879 43.70337367612026469, -72.27952039025244346 43.70337858228828765, -72.27950765388331433 43.7033409747418915, -72.27953609191574458 43.703336067220107, -72.27953402254203752 43.70333095694403625, -72.27961443344254633 43.70331647034657863))");
polys.push("Polygon ((-72.27961443344254633 43.70331647034657863, -72.27969305978525938 43.70330230468610466, -72.27969488353795668 43.70330814712966827, -72.279728099040355 43.70330211675768339, -72.27973979152409356 43.70333625472648009, -72.27970808456200302 43.7033419115845021, -72.27971691300436419 43.70336710386590084, -72.2796366403570687 43.70338152588932701, -72.27961443344254633 43.70331647034657863))");
polys.push("Polygon ((-72.2796554659155106 43.70132278526867964, -72.27963888221198374 43.70129255189233675, -72.27963068880050912 43.70129275874291608, -72.2796305468817053 43.70128978838729239, -72.27962361857444762 43.70128996325123438, -72.27960037289996365 43.70080491560025138, -72.27960730115145793 43.700804740738036, -72.27960715799468971 43.70080177038876457, -72.27961548054807395 43.70080158174872764, -72.27961545552638256 43.70080156118139314, -72.27962899981389455 43.70077056679120631, -72.27962534174413634 43.70074686877603654, -72.27963667921351032 43.70074658296071135, -72.27963529799592379 43.70077040790702938, -72.27965188769587712 43.70080075736304792, -72.27968842259060978 43.70079992958049786, -72.2797020602156266 43.70076872406568214, -72.27969840211724772 43.70074502605303479, -72.27970973958584011 43.70074474023046207, -72.27970835839724373 43.70076856517752617, -72.279724956243669 43.70079910179291005, -72.27976149113614213 43.70079827398698313, -72.27977512060319043 43.70076688039350188, -72.2797714624853711 43.7007431832833646, -72.27978279994401589 43.70074289655352118, -72.27978142002491779 43.70076672149465224, -72.27979802602746418 43.70079744616939621, -72.27983456091766357 43.70079661834012796, -72.27984818099494646 43.70076503757463371, -72.27984452283929784 43.70074133956699569, -72.27985586030634124 43.70074105372994211, -72.2798544804162475 43.7007648786717624, -72.27987109581589209 43.70079579139922288, -72.27990763070381774 43.7007949635466062, -72.27992124262222262 43.70076319470246062, -72.27991758443796755 43.7007394966973024, -72.27992892066369279 43.70073921085966617, -72.27992754080256077 43.70076303580222543, -72.27994416559059232 43.70079413568232951, -72.27998070047624424 43.70079330780637861, -72.27999430299480821 43.70076135089025371, -72.27999064479107005 43.70073765378758424, -72.28000198100686191 43.70073736704269152, -72.28000060117470582 43.70076119198596132, -72.28001723536075929 43.70079247991875349, -72.28005376900360091 43.70079165202611904, -72.28006736337155758 43.70075950793136599, -72.28006370513003276 43.70073580993120288, -72.28007504135419481 43.70073552407907869, -72.28007366155102886 43.70075934902307324, -72.28009030389500822 43.70079082501516865, -72.28012683877611266 43.70078999709252798, -72.28014042373413872 43.70075766402580086, -72.28013676547314503 43.70073396692816203, -72.28014810169655391 43.7007336810687903, -72.28014672192233547 43.70075750601348119, -72.28016337365608024 43.7007891691582131, -72.28019990853491095 43.7007883412122311, -72.28021348410088365 43.70075582097359046, -72.2802098258112693 43.70073212387842432, -72.28022116202471636 43.7007318371118032, -72.28021978227948807 43.70075566205722595, -72.280236443412619 43.70078751325456778, -72.28027297828917597 43.70078668528524446, -72.28027587580604063 43.70077969872156842, -72.28028654446265477 43.70075397787467608, -72.28028288613521113 43.70073027988202341, -72.28029422235705681 43.70072999400817082, -72.28029284264080445 43.70075381895431832, -72.28030951316459607 43.70078585730423981, -72.28034604680750874 43.70078503021824901, -72.28035960481021505 43.7007521338290843, -72.28035594646334516 43.70072843673895591, -72.28036728268439504 43.70072815085785578, -72.28036590298795261 43.70075197490469066, -72.28038258168066932 43.70078420221390303, -72.28041911655267882 43.70078337419788994, -72.28043266516196752 43.70075029063682592, -72.28042900678644855 43.70072659354919153, -72.2804403442381016 43.70072630675417003, -72.28043896333927876 43.70075013170843192, -72.28045565142356566 43.70078254617020264, -72.28049218629331563 43.70078171813084111, -72.28050572550873198 43.70074844739792752, -72.28050206709538372 43.70072474941275686, -72.2805134045554496 43.70072446351051099, -72.28051202368560268 43.70074828846547632, -72.28052872116191452 43.70078089007980537, -72.28056525603855675 43.70078006291711858, -72.2805787858412998 43.70074660321230908, -72.2805751274085253 43.70072290612964849, -72.28058646486780958 43.70072262022016929, -72.28058508401772997 43.70074644427584332, -72.28060179090489612 43.70077923484272731, -72.28063846840450424 43.70077840329032881, -72.28065184617804562 43.70074475988003115, -72.28064818771663624 43.70072106279989299, -72.28065952516595871 43.70072077598313598, -72.28065814435404945 43.70074460093955793, -72.28067485939361347 43.70077757866562251, -72.28071139425652802 43.7007767505562299, -72.28072490650978921 43.70074291650109899, -72.28072124801057896 43.70071921852343877, -72.28073258546831426 43.70071893259946449, -72.28073120468538093 43.70074275755658277, -72.28074801470631883 43.70077592107529085, -72.28076304117857376 43.70077558022673259, -72.2807707593687212 43.70093653891279928, -72.28079154292458952 43.70093601501856284, -72.28083142444843645 43.70096222936468422, -72.28085220800333843 43.70096170455936857, -72.28085742341185949 43.70107045757281838, -72.2808366385789185 43.70107098238596421, -72.28079936401128691 43.70109914410371488, -72.28077858040836645 43.70109966889971531, -72.28078629745085948 43.70126062758181718, -72.28077936915109092 43.70126080251574052, -72.28077951112653921 43.7012637728696447, -72.28077132888876122 43.70126397974195953, -72.28075768088608299 43.70129497572190047, -72.28076133943719128 43.70131867369573087, -72.28075000186665022 43.7013189596231868, -72.2807513826527952 43.70129513466817883, -72.28073479840809057 43.70126490145387521, -72.28069826792615515 43.7012658231541522, -72.28068461989452942 43.70129682002557558, -72.28068827840782262 43.70132051710186971, -72.28067694083648576 43.70132080302209943, -72.2806783216608153 43.70129697896784648, -72.28066173744298339 43.70126674484272655, -72.28062520695856108 43.7012676665196409, -72.2806115588887792 43.7012986633825733, -72.28061521737345174 43.70132236046137564, -72.2806038798105277 43.70132264727435256, -72.28060526065462454 43.70129882232082252, -72.280588676472874 43.70126858818490945, -72.280552145985979 43.70126950983847536, -72.28053849787804097 43.70130050669288835, -72.28054215634325885 43.70132420467421497, -72.280530818770373 43.70132449057994251, -72.28053219964345999 43.70130066562710169, -72.2805156154977908 43.70127043148038126, -72.28047908501754648 43.70127135401063612, -72.28046543687146652 43.70130235085654391, -72.28046909529888353 43.70132604794036979, -72.28045775772523029 43.70132633383882848, -72.28045913863645922 43.70130250978674979, -72.28044255452687139 43.7012722756292149, -72.28040602403495996 43.70127319723610526, -72.28039237585073806 43.70130419407351496, -72.28039603424949178 43.70132789115981353, -72.28038469668423716 43.70132817795109048, -72.28038607637472523 43.70130435300634275, -72.28036949354176954 43.70127411883135693, -72.280332963047357 43.70127504041492017, -72.28031931482497896 43.70130603724380336, -72.28032297320430644 43.7013297352326191, -72.28031163562910422 43.70133002111662535, -72.28031301534856823 43.70130619617262369, -72.2802964325516939 43.70127596198680209, -72.28025990206393203 43.70127688444705427, -72.2802462525628755 43.70130788127408294, -72.28024991090437368 43.70133157836540505, -72.28023857456894063 43.70133186423550598, -72.28023995432656079 43.70130804019223092, -72.28022337156575361 43.70127780599560907, -72.28018684106632463 43.70127872753251097, -72.28017319152711195 43.70130972435103445, -72.28017684984916968 43.70133342234485951, -72.28016551351296926 43.70133370820772001, -72.28016689329038513 43.70130988326513233, -72.28015031057483952 43.70127964995776182, -72.28011378006374343 43.70128057057128501, -72.28010013048637461 43.70131156738130329, -72.28010378877979747 43.70133526537760815, -72.28009245244281544 43.70133555123323532, -72.28009383224919304 43.70131172629138661, -72.280077249569743 43.70128149297318032, -72.28004071907449202 43.70128241536341562, -72.28002706944980105 43.70131341126491975, -72.28003072770542303 43.70133710836371677, -72.28001939136765941 43.70133739421208929, -72.28002077121220736 43.70131357017096008, -72.28000418856882447 43.70128333684196775, -72.27996765681217539 43.70128425741548739, -72.27995400839905926 43.70131525420181617, -72.27995766663521238 43.70133895220313747, -72.27994633029668137 43.70133923804427667, -72.27994771016102504 43.70131541310386325, -72.27993112630400674 43.70128517887069108, -72.27989459579457332 43.70128610031422767, -72.27988094734331526 43.70131709709207257, -72.2798846055508335 43.70134079509588076, -72.27987326921152089 43.70134108092977243, -72.27987464910485471 43.70131725599006955, -72.27985806529309798 43.7012870226461061, -72.27982153478116345 43.70128794406633688, -72.27980788629174924 43.70131894083564106, -72.2798115444614524 43.7013426379419414, -72.27980020812138662 43.70134292376859264, -72.27980158805284816 43.70131909972962347, -72.27978500426797837 43.70128886547485791, -72.27974847375355694 43.70128978687171895, -72.27973482522600079 43.70132078363251793, -72.2797384833762635 43.70134448164133545, -72.27972714703540191 43.70134476746075336, -72.2797285269866876 43.70132094252249999, -72.27971194323789916 43.70129070825691286, -72.27967541273015684 43.70129163053044863, -72.27966176415527855 43.70132262638274767, -72.27966542227690638 43.7013463243940663, -72.27965408469471242 43.70134661021288025, -72.2796554659155106 43.70132278526867964),(-72.2796574994799812 43.70129942576012638, -72.27966076976289855 43.70129199978161694, -72.27965352642007701 43.7012921826373173, -72.2796574994799812 43.70129942576012638),(-72.27972658744501189 43.70129033899257109, -72.27973056052272227 43.70129758301280276, -72.27973383078732184 43.70129015613223089, -72.27972658744501189 43.70129033899257109),(-72.27979964847408212 43.70128849620115119, -72.27980362156044691 43.70129574021878938, -72.2798068918159089 43.70128831333617825, -72.27979964847408212 43.70128849620115119),(-72.27987270948899834 43.70128665246303967, -72.27987668258401754 43.70129389647809859, -72.27987995283952216 43.70128647049347137, -72.27987270948899834 43.70128665246303967),(-72.27994577050809255 43.70128480957828288, -72.27994974361176617 43.7012920535907341, -72.27995301384893878 43.70128462670405867, -72.27994577050809255 43.70128480957828288),(-72.28001883152218454 43.70128296664682921, -72.28002280463448415 43.70129021065670827, -72.2800260748625476 43.70128278376797226, -72.28001883152218454 43.70128296664682921),(-72.28009189252210831 43.70128112276869814, -72.28009586564306233 43.70128836677599082, -72.28009913587112578 43.70128094078524583, -72.28009189252210831 43.70128112276869814),(-72.28016495352619586 43.70127927974390047, -72.28016892665579007 43.70128652374859968, -72.28017219686556416 43.70127909685579226, -72.28016495352619586 43.70127927974390047),(-72.2802380145252954 43.70127743667244147, -72.28024198766354402 43.7012846806745614, -72.28024525786415211 43.70127725377970762, -72.2802380145252954 43.70127743667244147),(-72.2803110755102125 43.70127559265428374, -72.28031504865708712 43.70128283665381019, -72.28031831884855762 43.70127540975692426, -72.2803110755102125 43.70127559265428374),(-72.28038413649932181 43.70127374948945942, -72.28038810965483663 43.70128099348639239, -72.28039137983716955 43.70127356658747431, -72.28038413649932181 43.70127374948945942),(-72.28045719748340048 43.70127190627797376, -72.2804611706475697 43.70127915027229903, -72.28046444082076505 43.7012717233713559, -72.28045719748340048 43.70127190627797376),(-72.28053025846250534 43.70127006301979833, -72.28053423162613456 43.70127730611153538, -72.28053750179019232 43.70126987920853168, -72.28053025846250534 43.70127006301979833),(-72.28060332066796434 43.70126821880828061, -72.28060729384941396 43.70127546279744735, -72.28061056276378338 43.70126803589906928, -72.28060332066796434 43.70126821880828061),(-72.28067638163705055 43.70126637545675408, -72.2806803548271688 43.70127361944333444, -72.2806836249729372 43.70126619253625222, -72.28067638163705055 43.70126637545675408),(-72.28074900477008669 43.7012645425113746, -72.28075345830671949 43.70127265877857781, -72.28075712127730412 43.70126433779390851, -72.28074900477008669 43.7012645425113746),(-72.27963722506606814 43.70080101150819729, -72.27963326567895308 43.70079376741064436, -72.27963001898928042 43.70080119326249957, -72.27962996998205369 43.70080125382969527, -72.27963730524002983 43.70080108758381954, -72.27963722506606814 43.70080101150819729),(-72.27971040604276709 43.70079943185000104, -72.27970632610869473 43.70079192468226381, -72.27970297155125934 43.70079959953284288, -72.27971040604276709 43.70079943185000104),(-72.27978354528849536 43.70079777496313511, -72.27977938652426815 43.70079008100719165, -72.27977597188454695 43.70079794609603852, -72.27978354528849536 43.70079777496313511),(-72.27985668204861724 43.70079611804280262, -72.27985244694403377 43.70078823818544578, -72.27984897345385207 43.70079629260598608, -72.27985668204861724 43.70079611804280262),(-72.27992981880414902 43.70079446107568799, -72.27992550734960275 43.70078639441702251, -72.27992197500944371 43.70079463816932019, -72.27992981880414902 43.70079446107568799),(-72.28000295431461097 43.70079280406847033, -72.27999856775937815 43.70078455150194685, -72.27999497781021887 43.7007929845794294, -72.28000295431461097 43.70079280406847033),(-72.28007608982053966 43.70079114701447054, -72.2800716281641229 43.70078270854017433, -72.28006798183781711 43.70079133003622474, -72.28007608982053966 43.70079114701447054),(-72.28014922408134169 43.70078948992036061, -72.28014468855471364 43.7007808646317244, -72.2801409858700481 43.70078967634646006, -72.28014922408134169 43.70078948992036061),(-72.28022235833762466 43.70078783277946854, -72.28021774894945395 43.70077902157660787, -72.28021399112911638 43.70078802170338861, -72.28022235833762466 43.70078783277946854),(-72.28029546225643287 43.70078612085064407, -72.28029080933920625 43.70077717847483001, -72.2802870121710157 43.70078633362655296, -72.28028697282256587 43.7007863680402906, -72.28029550994769181 43.70078617459856218, -72.28029546225643287 43.70078612085064407),(-72.28036862311485322 43.70078451837739664, -72.28036386971479033 43.70077533442636053, -72.28036000413305828 43.7007847140641843, -72.28036862311485322 43.70078451837739664),(-72.28044175363585566 43.70078286111616706, -72.28043693009455239 43.70077349123122445, -72.28043301185958569 43.70078305926798379, -72.28044175363585566 43.70078286111616706),(-72.2805148613358881 43.70078115622724368, -72.28050999046931224 43.70077164798941283, -72.28050602924876955 43.70078137917143124, -72.28050599974214663 43.70078140543178336, -72.28051491639712367 43.7007812027349587, -72.2805148613358881 43.70078115622724368),(-72.280587953887661 43.70077942617106714, -72.28058305082988966 43.70076980380091669, -72.28057906846714786 43.70077965030743172, -72.28057899010123322 43.70077975153568417, -72.28058806428572325 43.70077954618692218, -72.280587953887661 43.70077942617106714),(-72.28066114393097052 43.70077788905860672, -72.28065611119465927 43.70076796046577527, -72.28065203874274403 43.70077809547976955, -72.28066114393097052 43.70077788905860672),(-72.28073429924451432 43.70077623147702184, -72.28072912903002134 43.70076523254779488, -72.28072464956137821 43.70077645072989725, -72.28073429924451432 43.70077623147702184))");
polys.push("Polygon ((-72.27980169792816412 43.70283058816956157, -72.27980506874030198 43.70283971475240747, -72.27982116956960112 43.70283651865739216, -72.27984060169397651 43.70288799086282694, -72.27982600938868529 43.70289081254167485, -72.27982834737851192 43.70289756669141212, -72.27967839732554012 43.70292726848378351, -72.27967398935932408 43.70291522134705531, -72.27963725640482551 43.7029225504597818, -72.27962015869438517 43.70287746786672756, -72.27965991243051747 43.70286975623265135, -72.27965602491251218 43.70285935162353752, -72.27980169792816412 43.70283058816956157))");
polys.push("Polygon ((-72.27993350387313853 43.70348054280753303, -72.28005732035039443 43.70346188612013094, -72.28007140624424665 43.70351901597877031, -72.28006485838936612 43.70351978197084009, -72.28007090867764362 43.70354444009304729, -72.28000746289843903 43.70355264532911832, -72.28000218618157646 43.70352962927207585, -72.2799634145558656 43.70353477506915851, -72.2799544815793098 43.70349934152549309, -72.27993862185864771 43.70350162187902754, -72.27993350387313853 43.70348054280753303))");
polys.push("Polygon ((-72.27996888042262924 43.70276037451625228, -72.28011598829415618 43.70269922940953933, -72.28013565388607731 43.70272418078555887, -72.28016728339521535 43.70271084306594389, -72.28019461042850935 43.70274544611424261, -72.28016348022468662 43.70275823212148936, -72.28016577722034697 43.70276096319212655, -72.28001716443242231 43.70282284729088929, -72.28001333466445999 43.70281811279601669, -72.27998220439329202 43.70283089965422363, -72.27995743186461652 43.7027995752886369, -72.27998931204136568 43.70278623537339513, -72.27996888042262924 43.70276037451625228))");
polys.push("Polygon ((-72.27999051866200375 43.70373099597775024, -72.28011536476766707 43.70371130492862477, -72.28013126701272029 43.70377730597299859, -72.28012572898880705 43.70377806744877347, -72.28013100204944408 43.70380071809221789, -72.2800698219562463 43.70380872758930479, -72.28006325490692063 43.70378279234856223, -72.28002422941889904 43.7037877568152453, -72.28001633853315866 43.70375560922464331, -72.2799969523425716 43.70375809122261046, -72.27999051866200375 43.70373099597775024))");
polys.push("Polygon ((-72.28002450102593457 43.70223187895288675, -72.28004655848981486 43.70226888828956646, -72.28010209346159343 43.70225139810787596, -72.28013671966300535 43.70230955541612161, -72.28009249299599048 43.70232350977392599, -72.2800688952582675 43.70228376531274961, -72.28005859176496983 43.70228692943212678, -72.28007193458797985 43.70230990310498953, -72.27992215948994215 43.70235661281779471, -72.27987598464073926 43.7022783991380237, -72.28002450102593457 43.70223187895288675))");
polys.push("Polygon ((-72.28005732035039443 43.70346188612013094, -72.27993350387313853 43.70348054280753303, -72.2799267800731684 43.70345285237102928, -72.27994138493464504 43.70345112779175878, -72.27993402206968199 43.70342135623313595, -72.27997581756048362 43.70341601060756176, -72.27996896767677981 43.70338714986479545, -72.28003140593514786 43.7033789509565338, -72.28003824341185179 43.70340671368247598, -72.28004353080297051 43.70340595355588675, -72.28005732035039443 43.70346188612013094))");
polys.push("Polygon ((-72.2800679060041773 43.7039846340196263, -72.28017995428898246 43.70397216529772066, -72.28019361501922901 43.70403210742175304, -72.28018782388909358 43.70403287025911254, -72.28019336376473802 43.70405698297253849, -72.28012663790788395 43.70406502226708767, -72.28012135736291555 43.70404163991165092, -72.28008207801531171 43.70404642394723282, -72.2800679060041773 43.7039846340196263))");
polys.push("Polygon ((-72.28010577141620274 43.70191979153257478, -72.28005205293288782 43.70196708393974916, -72.27993157176717887 43.70189493851910356, -72.28003851251447998 43.70180108910741268, -72.28012348455527558 43.70185220865325704, -72.28007051542810757 43.7018987652945512, -72.28010577141620274 43.70191979153257478))");
polys.push("Polygon ((-72.28011536476766707 43.70371130492862477, -72.27999051866200375 43.70373099597775024, -72.27998615138903915 43.70371260857675821, -72.28000150748914621 43.70371033181913134, -72.27999280392441506 43.70367270178934405, -72.28003611064237077 43.70366734893291039, -72.28003083887026037 43.70364469827761411, -72.2800912676266023 43.70363724097322233, -72.28009705739466995 43.70366116873858431, -72.28010310034093777 43.70366040545443553, -72.28011536476766707 43.70371130492862477))");
polys.push("Polygon ((-72.28017995428898246 43.70397216529772066, -72.2800679060041773 43.7039846340196263, -72.28005543105501829 43.70393024611962574, -72.2800974812248711 43.70392526540967992, -72.28009089176650548 43.70389713503224982, -72.28015182942932881 43.70389004129141597, -72.28015841145324316 43.703917439952221, -72.28016722342871958 43.70391629457588323, -72.28017995428898246 43.70397216529772066))");
polys.push("Polygon ((-72.28041575820520848 43.70203426562625992, -72.28053439536292046 43.70195041118067536, -72.28061009684735438 43.70200688513704534, -72.2804914565716814 43.70209055606375159, -72.28041575820520848 43.70203426562625992))");
polys.push("Polygon ((-72.28047824608087524 43.70252536493255491, -72.28032217052559361 43.70264636439988948, -72.28028637864285599 43.70262223138238511, -72.28030838978237682 43.70260528739245132, -72.28028325899767026 43.70258823015676342, -72.28039631287958855 43.70250056525561178, -72.28042626834680107 43.70252088899948006, -72.28044727579143114 43.70250431579858486, -72.28047824608087524 43.70252536493255491))");
polys.push("Polygon ((-72.28055025867571715 43.70329407236649644, -72.28049820761368949 43.7033010789942864, -72.28049130975882974 43.70327410597698758, -72.28045211659465963 43.70327938111292809, -72.28043122798482045 43.70319769804251564, -72.28047041985718124 43.70319242292061546, -72.28046352202777314 43.70316544990098606, -72.28051557422659812 43.70315844418286844, -72.28052247207848779 43.70318541719925065, -72.2805616639345061 43.70318014204617185, -72.28058255270561006 43.70326182419196215, -72.28054336079837583 43.70326709935245191, -72.28055025867571715 43.70329407236649644))");
polys.push("Polygon ((-72.2805760042563179 43.7035391118804597, -72.28056910633812038 43.70351213886934971, -72.28052991302622843 43.70351741403263901, -72.2805090242246564 43.70343573098092804, -72.28054821624472481 43.70343045583170039, -72.28054131835199314 43.70340348281825982, -72.28059337074702739 43.70339647706383346, -72.28060026866221222 43.70342345007405527, -72.28063946066595236 43.70341817489362057, -72.28066035087860541 43.70349985791405345, -72.28062115758307016 43.70350513310852847, -72.28062805552370662 43.70353210611640549, -72.2805760042563179 43.7035391118804597))");
polys.push("Polygon ((-72.2805821735408216 43.70238324719210254, -72.28050504713414171 43.70236006799485295, -72.28057142174951366 43.70224375698762032, -72.2806485492722004 43.70226693613462743, -72.2805821735408216 43.70238324719210254))");
polys.push("Polygon ((-72.2805861916976653 43.70196183834561765, -72.2806187117012513 43.7019369730777143, -72.28068116421863465 43.7019798011519427, -72.28064839362414773 43.70200466778346993, -72.2805861916976653 43.70196183834561765))");
polys.push("Polygon ((-72.28059710668416926 43.70372304568535071, -72.28058714789979433 43.70368597148286938, -72.28057431024664936 43.70368787026637847, -72.28056696382790847 43.70365974398090714, -72.28058055824939743 43.70365784203369941, -72.28057137491397555 43.70362259259711379, -72.28058220219431007 43.70362125455151414, -72.28057381171335294 43.70358965872176782, -72.28065739410246238 43.70357823618077475, -72.2806660457906105 43.70361074416753411, -72.28067737674906823 43.70360940340732014, -72.28070359370630626 43.70370802493279427, -72.28059710668416926 43.70372304568535071))");
polys.push("Polygon ((-72.28068983611920828 43.70392877953452171, -72.28065064378792215 43.70393405473368631, -72.28062975467163653 43.70385237171182524, -72.28066894695169253 43.70384709652005029, -72.28066204895503688 43.70382012351645074, -72.28071410169535227 43.70381311770551491, -72.28072099971448949 43.70384009070586018, -72.28076019197820301 43.70383481548288529, -72.28078108125576762 43.70391649758013841, -72.28074188894085239 43.70392177281052426, -72.28074878698541283 43.70394874580853184, -72.28069673538190898 43.70395575252913289, -72.28068983611920828 43.70392877953452171))");
polys.push("Polygon ((-72.28089227141839501 43.70411321782580671, -72.28080136063582017 43.70412303459379899, -72.28079685153389278 43.70410111163105427, -72.28075026502510525 43.70410629968286287, -72.28076460507057277 43.70417755100665858, -72.28066437783400033 43.70418833128495351, -72.28063916546724954 43.70406464834759674, -72.28072327645138273 43.70405559999186806, -72.28071425707780406 43.70401175406567518, -72.28086762018475042 43.70399520143283922, -72.28089227141839501 43.70411321782580671))");
polys.push("Polygon ((-72.28102376500856963 43.7032452586602389, -72.28089135275693877 43.7032511564568722, -72.28088916172009704 43.70322527065108176, -72.28075909824589473 43.70323106476629249, -72.28075096899638652 43.70313500216394687, -72.28088103103247875 43.7031292089657768, -72.28088332499328317 43.70315630570705423, -72.2810157370371229 43.70315040792085881, -72.28102376500856963 43.7032452586602389))");
polys.push("Polygon ((-72.28119268089969296 43.70454762168067475, -72.28114611136346923 43.70445587638808149, -72.28128364068098222 43.70441929006208426, -72.28128904275885702 43.70442986918197903, -72.28132399233538763 43.70442071929762307, -72.28135281114113297 43.70447781026390288, -72.28131937507730242 43.70448695111812754, -72.28133146401258102 43.70451047951704737, -72.28119268089969296 43.70454762168067475))");
polys.push("Polygon ((-72.28120640127511365 43.70394107320177568, -72.28125035118198127 43.70402332157453174, -72.28108594848409041 43.70406974602325789, -72.28104200810545876 43.70398841200287166, -72.28104851739286119 43.70398398739708767, -72.28102358756652279 43.70393748361494346, -72.28108718768729091 43.70391958328310977, -72.28111314173948188 43.70396772776492611, -72.28120640127511365 43.70394107320177568))");
polys.push("Polygon ((-72.28120764684710764 43.70092880755226616, -72.28118208991597271 43.70082067155187389, -72.28120197877845499 43.70081818754965752, -72.28119669250749268 43.70079425622147085, -72.28128204615869379 43.70078392177748583, -72.28128705259946685 43.70080511030608506, -72.28130870673034281 43.70080261589311021, -72.28133428941477234 43.70091312970047426, -72.28120764684710764 43.70092880755226616))");
polys.push("Polygon ((-72.28123121036504983 43.70321003370708723, -72.28123340108010098 43.70323599511353763, -72.28110098810918771 43.70324181845146683, -72.28109296001656503 43.70314696771815477, -72.28122537200739828 43.70314106878931426, -72.2812230791246435 43.70311397114905816, -72.2813531423043969 43.70310817740754317, -72.28136127250169807 43.70320423906184004, -72.28123121036504983 43.70321003370708723))");
polys.push("Polygon ((-72.28125050645915906 43.70186700442322092, -72.28126675657188116 43.70192763816929471, -72.28113082079424601 43.70194684105629079, -72.28111457081293167 43.70188620729035023, -72.28125050645915906 43.70186700442322092))");
polys.push("Polygon ((-72.28126150005091688 43.70062345152836514, -72.2812038451914276 43.70063071092672402, -72.28119855147234318 43.70060604878452182, -72.28116304999869612 43.70061026384183123, -72.28114696376933068 43.70054084994457355, -72.28112506038850427 43.70054371109357305, -72.28111901683186602 43.70051960201831065, -72.28114142572677281 43.70051692086624939, -72.28114089468738257 43.70051436393402611, -72.28115021290864206 43.70051339847333338, -72.28114231067520734 43.70048015472318781, -72.28122539681459102 43.70047001432429568, -72.28124016107993555 43.70053339947824611, -72.28125476519410597 43.70053167473468392, -72.2812618790149628 43.70056181388885364, -72.28124752796270513 43.70056353727266441, -72.28126150005091688 43.70062345152836514))");
polys.push("Polygon ((-72.28132635376040582 43.70104942791743241, -72.28133609434111406 43.7010897947860073, -72.28137058753073063 43.70108558599766013, -72.28137901169471036 43.70112047314157877, -72.28136289894966637 43.70112257144069901, -72.28137000542169233 43.70115197887113823, -72.2812632581850778 43.70116572175457748, -72.28125721449866603 43.70114161178992163, -72.2812350590740067 43.70114447431502214, -72.28122583466065976 43.7011052018430064, -72.28121526092799343 43.70110653948675861, -72.28120550547721734 43.70106470918113217, -72.28132635376040582 43.70104942791743241))");
polys.push("Polygon ((-72.2814189380325729 43.70127791301105447, -72.28145390598015751 43.70141873551828127, -72.28132273939360175 43.70143590133627498, -72.28130933984678563 43.70138275161126984, -72.28128617700846803 43.70138561956338918, -72.28127749728551521 43.70135036746167856, -72.2813109833016938 43.70134616410705064, -72.28129809491525748 43.70129374248447363, -72.2814189380325729 43.70127791301105447))");
polys.push("Polygon ((-72.28158161529322001 43.70382504310057925, -72.28160896414976833 43.703879128497789, -72.28160718985456867 43.70387960067697009, -72.28162260036835107 43.7039100776823517, -72.28160307445425303 43.70391527440103374, -72.2816071986918729 43.70392343020541404, -72.28154802947757673 43.7039391765364087, -72.28155584361137187 43.70395462912306073, -72.28152034156738637 43.70396407727215404, -72.28151252868202903 43.70394862467637154, -72.28145335941772487 43.70396437095855191, -72.28143340563980246 43.70392491051371309, -72.28138784552551499 43.70393703550806919, -72.28135693483308444 43.70387590370119568, -72.28135930179701063 43.70387527352741586, -72.28133866560472143 43.70383446393720561, -72.28136529117070097 43.70382737764877845, -72.28133108829031528 43.70375973446527951, -72.28144469252815441 43.70372950144903257, -72.28150872234347446 43.70385613014721571, -72.28155132398576654 43.7038447932755858, -72.28154611457021872 43.70383449125073128, -72.28158161529322001 43.70382504310057925))");
polys.push("Polygon ((-72.28162888714997791 43.70008962036145306, -72.28160358197217761 43.70005555490264015, -72.28162241278290878 43.70004813785813269, -72.28161908672083769 43.70004340070477866, -72.28159925047334866 43.70005100587123081, -72.2815560552944163 43.69999307869382221, -72.28168937922796999 43.69994078492894829, -72.28169986170311745 43.69995517728278145, -72.28170739588017568 43.69995239334237169, -72.28174343912766631 43.70000121517985292, -72.28172184512624199 43.70000956157984717, -72.28171597150462446 43.70000209383681522, -72.281680568268456 43.70001600223547911, -72.28171124155915095 43.70005735362749277, -72.28162888714997791 43.70008962036145306))");
polys.push("Polygon ((-72.28164806460972613 43.70317420212037263, -72.28162919451192181 43.70307919914169048, -72.28175863849696725 43.70306588282370797, -72.28175465711051118 43.70304633412767004, -72.28187881179296426 43.70303359517636466, -72.28190379873726101 43.7031596579473387, -72.28178568916189306 43.70317199806733299, -72.28178329857921369 43.70316012286935603, -72.28164806460972613 43.70317420212037263))");
polys.push("Polygon ((-72.28186273459755284 43.70451822951086029, -72.28166682628709339 43.70454086552364004, -72.28165307166594289 43.70447784136390368, -72.28171098759013091 43.70447112757669572, -72.28171017596109493 43.70446564514693222, -72.28183809440147911 43.70445087434348608, -72.28182327987686051 43.70438273453707723, -72.28189529891429288 43.70437448304875971, -72.281892921348458 43.70436388767814861, -72.28193824749052965 43.70435870594515393, -72.28192476067202676 43.70429714298059309, -72.28194037118558413 43.70429523001966032, -72.28193903028930833 43.70428737246820106, -72.2820037457617417 43.70427989197837348, -72.28200561092104692 43.70428975745230105, -72.28204993024952785 43.7042847638083245, -72.2820787518716088 43.70441592633839889, -72.28191784396702246 43.70443435013946498, -72.28192074580273641 43.70444695433300097, -72.28184897977685353 43.70445520537563766, -72.28186273459755284 43.70451822951086029))");
polys.push("Polygon ((-72.28187413191169242 43.70373735082026911, -72.28192062684391317 43.70368030284365091, -72.2818927801020692 43.70363699578042116, -72.28186607270346542 43.70364237430844412, -72.28183035530121003 43.70355624488270507, -72.28198588547184045 43.70352609260049093, -72.2820575450667917 43.7037001430626546, -72.28198707377232779 43.70371383351669436, -72.28195835602519992 43.70374282259921017, -72.2819403987485174 43.70373859174880238, -72.28192424662618976 43.70375862053812455, -72.28187413191169242 43.70373735082026911))");
polys.push("Polygon ((-72.28187413191169242 43.70373735082026911, -72.28192424662618976 43.70375862053812455, -72.28190809205798928 43.70377865383859017, -72.28192133660492402 43.70378500181301717, -72.28191146849331972 43.70380551971305039, -72.28193460259296899 43.70385094478953647, -72.28177840337731652 43.70389558895102766, -72.28173461099636654 43.70382444043669068, -72.28182572665951966 43.70379674292775718, -72.28187413191169242 43.70373735082026911))");
polys.push("Polygon ((-72.2819257448157515 43.70335922201036993, -72.28194855276531428 43.70346993867931928, -72.28191961119622988 43.7034729089708236, -72.28192076565015611 43.70347964334566626, -72.28185197557083086 43.70348701430958016, -72.28185373569584726 43.70349619810320974, -72.28177328738935614 43.70350493415961068, -72.28176312600716358 43.70345502891798617, -72.28178537946858739 43.7034525734932302, -72.28177780944396602 43.70341597797357025, -72.28175299299667245 43.70341857499820293, -72.28174197123696842 43.70336472489729829, -72.2818249823479988 43.7033558463608216, -72.28182734688176936 43.70336747778002717, -72.28189613681853132 43.7033601059315302, -72.28189674124745068 43.70336255445609197, -72.2819257448157515 43.70335922201036993))");
polys.push("Polygon ((-72.28195432289587075 43.70063088049276701, -72.28327762563699821 43.70041689641492155, -72.28349538959058407 43.70112589760307742, -72.28217156655320252 43.70133970427217918, -72.28195432289587075 43.70063088049276701))");
polys.push("Polygon ((-72.28198167297374255 43.70499918172200893, -72.28197234894497569 43.70495355361394729, -72.28195301414808682 43.70495563153747298, -72.28195042804074433 43.70494296714210236, -72.28196975640040023 43.70494086675203249, -72.28196938549476158 43.704939053317446, -72.28199804956915386 43.70493593419671186, -72.28199787931657738 43.70493481543232406, -72.28202405025295718 43.70493200314781745, -72.28201920190844021 43.70490825853118366, -72.28204314203908609 43.70490568596843417, -72.28204224084852569 43.70490127600113084, -72.28206344578281062 43.70489899808002576, -72.28207411569478325 43.70488856468304562, -72.28210087529561179 43.70488568980721311, -72.28211886763730831 43.70489537483683051, -72.28216221316999679 43.70489071671686787, -72.28216988331695347 43.70488321747505012, -72.28219221718465803 43.7048952390849621, -72.28218401021858597 43.70490326235669443, -72.28218912770608995 43.7049283259124195, -72.28223105546571503 43.70492382031161327, -72.28223837262260076 43.70495966469886184, -72.28220908625937113 43.70498829867475621, -72.28213377582105181 43.70499639077032583, -72.2821312836398846 43.70498417950622638, -72.28212267152238724 43.70498510434183714, -72.28212437996131712 43.70499347204813745, -72.28209418116910001 43.70499671647227302, -72.28209247274347149 43.70498834966553403, -72.28201060622929219 43.70499714662751956, -72.28201035195438351 43.70499606161789075, -72.28198167297374255 43.70499918172200893))");
polys.push("Polygon ((-72.28215093800614 43.68469283919601054, -72.28227721584872256 43.68472029350643737, -72.28225492221447723 43.68477429705394854, -72.28220874575376342 43.68476425794752771, -72.28220283345956432 43.68477858106851386, -72.28212273071638094 43.68476116584343316, -72.28215093800614 43.68469283919601054))");
polys.push("Polygon ((-72.28215537669734658 43.68517099631802125, -72.28218441781415038 43.68510499455364737, -72.28224180529011278 43.68511829184551942, -72.28223181701828537 43.6851417960111803, -72.28220356047248174 43.6851987667788606, -72.2821755192712061 43.68519286391999401, -72.28218180789595237 43.68517713196843033, -72.28215537669734658 43.68517099631802125))");
polys.push("Polygon ((-72.2821790629140537 43.68462471009940629, -72.28220727007752089 43.68455638343720437, -72.28228613544767711 43.68457350014485741, -72.28227875751993281 43.68459137293225325, -72.28232618185997183 43.68460168251056785, -72.28230534186603506 43.6846521643731549, -72.2821790629140537 43.68462471009940629))");
polys.push("Polygon ((-72.2821790629140537 43.68462471009940629, -72.28230534186603506 43.6846521643731549, -72.28227721584872256 43.68472029350643737, -72.28215093800614 43.68469283919601054, -72.2821790629140537 43.68462471009940629))");
polys.push("Polygon ((-72.28218441781415038 43.68510499455364737, -72.28215537669734658 43.68517099631802125, -72.28215383757277834 43.68517063917793308, -72.28212586725555866 43.68516414638052936, -72.28211845370088895 43.68517915263060303, -72.28208830448471645 43.68517305138459506, -72.2821246209830548 43.68509113866245741, -72.28218441781415038 43.68510499455364737))");
polys.push("Polygon ((-72.28220356047248174 43.6851987667788606, -72.28223181701828537 43.6851417960111803, -72.28228640496085688 43.68515385546194807, -72.28225935999344642 43.68521832358602808, -72.28223142195075468 43.6852117154320041, -72.28222420828733163 43.68522686102294728, -72.28219438062835422 43.68522067346691529, -72.28220356047248174 43.6851987667788606))");
polys.push("Polygon ((-72.28225935999344642 43.68521832358602808, -72.28228640496085688 43.68515385546194807, -72.2823440496965901 43.68516659057432605, -72.28231046906265078 43.68524663898969607, -72.28228166378504227 43.68524000581663103, -72.28228729927320728 43.68522493082650016, -72.28225935999344642 43.68521832358602808))");
polys.push("Polygon ((-72.28231046906265078 43.68524663898969607, -72.2823440496965901 43.68516659057432605, -72.28240326448677422 43.68517967272699565, -72.2823758636626934 43.68524498885927443, -72.28234828838742487 43.68523819966621602, -72.2823392755867502 43.68525327214875631, -72.28231046906265078 43.68524663898969607))");
polys.push("Polygon ((-72.28235577651915378 43.68486269409928013, -72.28237677427385677 43.68481465866494773, -72.28243364390309011 43.68482827907496358, -72.2824912831813009 43.68484208432446536, -72.28246935467481649 43.68489030120721139, -72.28241256496399103 43.68487649767078551, -72.28235577651915378 43.68486269409928013))");
polys.push("Polygon ((-72.2823758636626934 43.68524498885927443, -72.28240326448677422 43.68517967272699565, -72.28246305236832825 43.68519288137130729, -72.28244417147084278 43.68523725473826858, -72.28242491880001808 43.68527353759198206, -72.28239656438044847 43.68526709013339371, -72.28240343894411524 43.685251778045604, -72.2823758636626934 43.68524498885927443))");
polys.push("Polygon ((-72.28242491880001808 43.68527353759198206, -72.28244417147084278 43.68523725473826858, -72.28249960392609808 43.68525001699094901, -72.2824717938187149 43.68531362972137089, -72.2824715973944194 43.68531358487610561, -72.2824434022120812 43.6853070654659561, -72.28243628025560952 43.6853225634026785, -72.28240589890076251 43.68531584604446749, -72.28242491880001808 43.68527353759198206))");
polys.push("Polygon ((-72.2824717938187149 43.68531362972137089, -72.28249960392609808 43.68525001699094901, -72.28255711132958083 43.68526325677365918, -72.28252251932667605 43.68534238182893858, -72.28251915865979527 43.68534158357380193, -72.28249402148772162 43.68533561924343189, -72.28249979258281144 43.68532010427927048, -72.2824717938187149 43.68531362972137089))");
polys.push("Polygon ((-72.28251392985862367 43.68493559820548455, -72.28254408501818773 43.68487124827071, -72.28257274966252055 43.68487784883338065, -72.28257918176295505 43.68486306115769935, -72.2826092817762742 43.68486872780681551, -72.28259956039342171 43.68489053933926414, -72.28257205778957939 43.68494781396096727, -72.28251392985862367 43.68493559820548455))");
polys.push("Polygon ((-72.28252159792576492 43.68484934476065007, -72.28251542037085642 43.68486464680079706, -72.28254408501818773 43.68487124827071, -72.28251392985862367 43.68493559820548455, -72.2824558007015554 43.68492338152692156, -72.28246935467481649 43.68489030120721139, -72.2824912831813009 43.68484208432446536, -72.28252159792576492 43.68484934476065007))");
polys.push("Polygon ((-72.28252251932667605 43.68534238182893858, -72.28255711132958083 43.68526325677365918, -72.28261507128443952 43.68527660029677406, -72.28258714496132598 43.68534048100136147, -72.28255800187316993 43.68533381101543966, -72.28255101840296959 43.68534914350056653, -72.28252251932667605 43.68534238182893858))");
polys.push("Polygon ((-72.28258714496132598 43.68534048100136147, -72.28261507128443952 43.68527660029677406, -72.28267072758492873 43.68528941346406214, -72.28264888701752966 43.68534840731920355, -72.28263848359637223 43.68537011542052539, -72.28260919034234178 43.68536210515543416, -72.28261628928687799 43.68534715007313451, -72.28258714496132598 43.68534048100136147))");
polys.push("Polygon ((-72.28262162696995574 43.68498491768916381, -72.2826499021686999 43.68491830338530235, -72.28267886422105448 43.68492451168898327, -72.28268492663544009 43.68491117240936461, -72.28271381023263586 43.68491771325217599, -72.28268137068020849 43.68499879340836145, -72.28262162696995574 43.68498491768916381))");
polys.push("Polygon ((-72.28263939363435497 43.70338842968712356, -72.28257035653379603 43.70325047247034433, -72.28254995805193062 43.70325584506537808, -72.2825183619460887 43.7031940107076835, -72.28253934803078096 43.70318847294043252, -72.2823337227253262 43.70277834262653016, -72.28237326729768597 43.70276793277935923, -72.28259602575512588 43.70270929586499165, -72.28259194105686447 43.70270112908075788, -72.28259065043464204 43.70269855014745275, -72.28261139891407083 43.70269308835236188, -72.28273076601070102 43.70266166641482641, -72.28274883198110956 43.70265691120318508, -72.28275012136859345 43.70265949014136453, -72.28275420608538582 43.70266765691989974, -72.28301517431293632 43.70259895931507543, -72.28321712094985685 43.70300372136544809, -72.28323889287470649 43.70299800371801524, -72.28324600248956244 43.70299613283381035, -72.28333142101369901 43.70297370233375034, -72.28334717933826425 43.70300524831237254, -72.28335210026266111 43.70301509998013501, -72.28336750140165634 43.7030459296306617, -72.28328217052484206 43.70306844699097581, -72.28327506214320408 43.70307031787076113, -72.28325330161008822 43.70307605976534404, -72.28332007786077895 43.70320924852335764, -72.28328053192612401 43.70321965870473235, -72.28326819209415532 43.7031950616827416, -72.28326778130745822 43.70319517010644006, -72.28326700108181058 43.70319361090190569, -72.28319827665063713 43.70321169759970559, -72.28319905815224899 43.70321326039807275, -72.28319194851951579 43.70321513217948706, -72.28319116955459833 43.70321357476775148, -72.28312244509581319 43.70323166322020825, -72.28312322531824918 43.70323322242573738, -72.28311611568075534 43.70323509420242658, -72.28311533671752898 43.70323353679019363, -72.28304661221271488 43.70325162519724671, -72.28304739243344557 43.70325318440331586, -72.28304589898893084 43.70325357768472685, -72.28304740371947901 43.70325658658931189, -72.28288981472827857 43.70329806973753506, -72.28288769065839858 43.70329346115354952, -72.28281911451749409 43.70331151262121949, -72.28281989347409819 43.70331307003549881, -72.28281278505816942 43.70331494178673637, -72.282812006101679 43.70331338437240021, -72.28274328142187244 43.70333147349791147, -72.28274406163583876 43.70333303270606962, -72.28273695196530468 43.70333490355926642, -72.2827361717515231 43.70333334435107275, -72.28266744953447187 43.70335143611787032, -72.28266822849693085 43.7033529944332173, -72.2826664504578531 43.70335346214871919, -72.28267875791449626 43.70337806841023109, -72.28263939363435497 43.70338842968712356))");
polys.push("Polygon ((-72.28264888701752966 43.68534840731920355, -72.28267072758492873 43.68528941346406214, -72.28268151002664865 43.68526693105844316, -72.28274075669661158 43.68528056640602841, -72.28271141279971346 43.68534771392783966, -72.28268281576109189 43.68534253154361835, -72.28267554949739804 43.68535507264901696, -72.28264888701752966 43.68534840731920355))");
polys.push("Polygon ((-72.2826499021686999 43.68491830338530235, -72.28262162696995574 43.68498491768916381, -72.28256188328693099 43.68497104193854597, -72.28257205778957939 43.68494781396096727, -72.28259956039342171 43.68489053933926414, -72.28262779493911694 43.68489716560746672, -72.28262094011303418 43.68491209417422994, -72.2826499021686999 43.68491830338530235))");
polys.push("Polygon ((-72.28266366361322071 43.6841184015836177, -72.28270274107873661 43.68408572552259272, -72.28279678497121097 43.68414495617754056, -72.28275765259115815 43.68417759746368034, -72.28266366361322071 43.6841184015836177))");
polys.push("Polygon ((-72.28266366361322071 43.6841184015836177, -72.28275765259115815 43.68417759746368034, -72.28276314223492705 43.68418137696407655, -72.28272278865928513 43.68421503739705969, -72.28268133889659453 43.68418860616364441, -72.28266563467339267 43.6842015761735496, -72.28260831538275966 43.68416468343416881, -72.28266366361322071 43.6841184015836177))");
polys.push("Polygon ((-72.28270274107873661 43.68408572552259272, -72.28274191810095317 43.68405296520511882, -72.28283591729967839 43.68411231397805494, -72.28279678497121097 43.68414495617754056, -72.28270274107873661 43.68408572552259272))");
polys.push("Polygon ((-72.28271141279971346 43.68534771392783966, -72.28274075669661158 43.68528056640602841, -72.2827994190714378 43.68529406626185363, -72.28276328682835583 43.68537572618285481, -72.28273317877099657 43.68536820907826268, -72.28274001108337643 43.68535289629819829, -72.28271141279971346 43.68534771392783966))");
polys.push("Polygon ((-72.28274111441768923 43.68501266909611758, -72.28276524673287895 43.68494554785301176, -72.28279412460881304 43.68495225431884421, -72.28279988571122772 43.68493759175697022, -72.28283054074638869 43.68494331296037814, -72.28280085941341326 43.68502654384577255, -72.28274111441768923 43.68501266909611758))");
polys.push("Polygon ((-72.28276524673287895 43.68494554785301176, -72.28274111441768923 43.68501266909611758, -72.28268137068020849 43.68499879340836145, -72.28271381023263586 43.68491771325217599, -72.28274269383602757 43.68492425408764035, -72.28273636886331133 43.6849388413798323, -72.28276524673287895 43.68494554785301176))");
polys.push("Polygon ((-72.28283591729967839 43.68411231397805494, -72.28274191810095317 43.68405296520511882, -72.28279663773045627 43.6840072087169986, -72.28285447068591907 43.68404424530507413, -72.28283958317580016 43.68405666279490873, -72.28288257192463107 43.68408186698246709, -72.28284142618892361 43.68411579274816603, -72.28283591729967839 43.68411231397805494))");
polys.push("Polygon ((-72.28286317505191505 43.70446542602380191, -72.2828677864587803 43.70448890276416165, -72.28287797408847837 43.7044878496699738, -72.28290467014274157 43.70462376498815615, -72.28284807661823663 43.70462961538929392, -72.2828531343982803 43.70465536598786827, -72.28277998526876047 43.70466292752054471, -72.28277492751932698 43.70463717691858108, -72.28276603128665556 43.70463809613362116, -72.28275268151773503 43.70457013666887036, -72.28268148820846761 43.70457749588282326, -72.28267502341057593 43.70454458114031837, -72.2826544510688791 43.7045467081551422, -72.28264711192097991 43.70450934100038154, -72.28266768425017119 43.70450721398694327, -72.2826510557082571 43.70442255436905299, -72.28267175071779604 43.70442041589294746, -72.28266649536014654 43.70439292922430496, -72.28269671242065897 43.70438980515907446, -72.28269641394798839 43.70438828205734438, -72.28270945335664521 43.70438693458826407, -72.28270799652541712 43.7043795178027068, -72.2827372543106037 43.7043764934036858, -72.2827387111453703 43.70438391018885227, -72.28278400017019578 43.70437922875677117, -72.28280216950909676 43.70447173221844395, -72.28286317505191505 43.70446542602380191))");
polys.push("Polygon ((-72.28288135394606684 43.68481150397526847, -72.28291259341722252 43.68473596114894519, -72.28299345616184723 43.68475357153766225, -72.28296221678353106 43.68482911438531602, -72.28288135394606684 43.68481150397526847))");
polys.push("Polygon ((-72.28289455659042062 43.68393865550745403, -72.28298605627787765 43.68399663692831325, -72.28296633857763709 43.68401298857502724, -72.28293324771136952 43.68399244561341277, -72.28291793289697864 43.68400394824769961, -72.28286009396323664 43.68396729695293601, -72.28289455659042062 43.68393865550745403))");
polys.push("Polygon ((-72.28289692831616264 43.68525496280128095, -72.28291568377642307 43.68521266469316799, -72.28294750810654534 43.68522003838641865, -72.28302573971318168 43.68524020112845818, -72.28301697286227068 43.68526038112480592, -72.28299759800815139 43.68525562432742504, -72.28298816986608699 43.68527626872204195, -72.28289692831616264 43.68525496280128095))");
polys.push("Polygon ((-72.28289692831616264 43.68525496280128095, -72.28298816986608699 43.68527626872204195, -72.282978742948643 43.68529691220915367, -72.28300010280122478 43.68530523337715721, -72.28299119495235914 43.68532484798870286, -72.28287777885196874 43.68529815139729067, -72.28289692831616264 43.68525496280128095))");
polys.push("Polygon ((-72.28291259341722252 43.68473596114894519, -72.28288135394606684 43.68481150397526847, -72.28286913097039701 43.68484106420278579, -72.28279671465652712 43.68482529294136896, -72.28281201796951905 43.68478828785458745, -72.28280447515633966 43.6847866453852447, -72.2828175139341198 43.6847551150179072, -72.28282505674371805 43.6847567574863902, -72.28284017846844733 43.68472019080741831, -72.28291259341722252 43.68473596114894519))");
polys.push("Polygon ((-72.28294088033078424 43.70410368763752729, -72.28285823749865813 43.70412571225045895, -72.2828684084079498 43.70414580357829948, -72.28277338128854979 43.70417112162646589, -72.2827632103973059 43.70415102939008989, -72.28268056977680089 43.70417304036154604, -72.28263885815681533 43.70409064096979534, -72.28289916462732378 43.70402128296158395, -72.28294088033078424 43.70410368763752729))");
polys.push("Polygon ((-72.28295484488403133 43.68388854949365907, -72.28301511217847519 43.68383846156225303, -72.28310566807809323 43.68389584583169238, -72.2831225886465063 43.68390683982081413, -72.28306280043844367 43.68395695942736268, -72.28295484488403133 43.68388854949365907))");
polys.push("Polygon ((-72.28296221678353106 43.68482911438531602, -72.28299345616184723 43.68475357153766225, -72.28306587118994742 43.68476934178152504, -72.28305074959065735 43.68480590848930945, -72.28305829241278957 43.68480755094233814, -72.28304525375959599 43.68483908223620915, -72.28303771093384 43.68483743978236333, -72.28302240897875208 43.68487444399158193, -72.28294999384419839 43.68485867462118222, -72.28296221678353106 43.68482911438531602))");
polys.push("Polygon ((-72.2829641974862227 43.68518019059410307, -72.28298160359013025 43.68513863330551317, -72.28309292000747632 43.6851631863548846, -72.28308341927946401 43.68518461060811831, -72.28306215718626504 43.68517965608321418, -72.28305323152545725 43.68519982883831432, -72.2829641974862227 43.68518019059410307))");
polys.push("Polygon ((-72.28298160359013025 43.68513863330551317, -72.28299932684767271 43.68509631644649716, -72.28309000539428553 43.68511631842343945, -72.28308095672970524 43.68513671056080483, -72.28310242196899083 43.68514176209411914, -72.28309292000747632 43.6851631863548846, -72.28298160359013025 43.68513863330551317))");
polys.push("Polygon ((-72.28298605627787765 43.68399663692831325, -72.28289455659042062 43.68393865550745403, -72.28295484488403133 43.68388854949365907, -72.28306280043844367 43.68395695942736268, -72.28300301213096191 43.68400707900278945, -72.28298605627787765 43.68399663692831325))");
polys.push("Polygon ((-72.28299932684767271 43.68509631644649716, -72.28301793024489541 43.68505189767979857, -72.2831309083631055 43.68507825446970827, -72.283119942031135 43.68510080631526904, -72.28309905528381307 43.68509592537860442, -72.28309000539428553 43.68511631842343945, -72.28299932684767271 43.68509631644649716))");
polys.push("Polygon ((-72.2830094670497374 43.684471822357132, -72.28305750419930575 43.6843621024261779, -72.28307974884401688 43.6843672316678564, -72.28307169199611337 43.68438563650821038, -72.28311605573544796 43.68439586505642325, -72.28307607677147928 43.68448718016436061, -72.2830094670497374 43.684471822357132))");
polys.push("Polygon ((-72.28301511217847519 43.68383846156225303, -72.28304895483755388 43.68381033465142593, -72.28310679373331027 43.68384698585182946, -72.28309176567822192 43.68385887039227811, -72.28312474076653871 43.68387949403899029, -72.28310566807809323 43.68389584583169238, -72.28301511217847519 43.68383846156225303))");
polys.push("Polygon ((-72.28302573971318168 43.68524020112845818, -72.28294750810654534 43.68522003838641865, -72.2829641974862227 43.68518019059410307, -72.28305323152545725 43.68519982883831432, -72.28304430585870932 43.6852200015926897, -72.2830651660144099 43.68522494658745359, -72.28305635348650071 43.68524720509048365, -72.28302573971318168 43.68524020112845818))");
polys.push("Polygon ((-72.28305750419930575 43.6843621024261779, -72.2830094670497374 43.684471822357132, -72.28294285859254842 43.68445646360414969, -72.28298093938576585 43.68436568171651402, -72.28299936117689128 43.68436992971754762, -72.28300780466575759 43.68435064343073293, -72.28305750419930575 43.6843621024261779))");
polys.push("Polygon ((-72.28309793400848093 43.70239131075981476, -72.28307448155270265 43.70239342818121742, -72.28307148383575509 43.70237595967587652, -72.28332214269049416 43.70235332560885411, -72.2833181295112297 43.70232987265270452, -72.28340362590982693 43.70232215234626238, -72.28352841631586045 43.70219239876191608, -72.28350889473846053 43.7021315192770814, -72.28353927989137162 43.70212639143563393, -72.2834889903738258 43.70196432881721904, -72.2835476786122797 43.70195442459819191, -72.28360001100033116 43.70211763814937456, -72.28362448977487986 43.70211350703434761, -72.28365547953039538 43.70221015800290587, -72.2836220466604118 43.70224510079291491, -72.28364711359608918 43.70225778962202412, -72.28352897950264833 43.70238029878790798, -72.28350412205432463 43.702367715910448, -72.28347045704504126 43.70240254109936728, -72.28333456895046538 43.702414812244605, -72.28333243798589081 43.7024023902372889, -72.28310338331958462 43.70242307438317653, -72.28309793400848093 43.70239131075981476))");
polys.push("Polygon ((-72.28309810011965908 43.70487664743995992, -72.28310805971385378 43.70488142437641699, -72.28311005731296746 43.70489148173084004, -72.28310254017142711 43.70489791903379029, -72.28310709891516694 43.70491975522810435, -72.28308419888463732 43.70492236290746035, -72.28309073089774017 43.70495454640921906, -72.2831005743169186 43.70495379667332259, -72.28312786797791034 43.70508245868134622, -72.28311826208339141 43.70508338535144333, -72.28312493770451397 43.70511577689089933, -72.28314811124307937 43.70511273209681491, -72.28315296151733094 43.70513468282447178, -72.28316272734407733 43.70513943379904731, -72.28316469760301288 43.70514924288158909, -72.28315752295510777 43.70515532551512905, -72.28316237838338054 43.70517729421572994, -72.28289940532677349 43.70520723174030309, -72.28288563151583901 43.70514271823282826, -72.28305487824771092 43.70512366486050837, -72.28304748646614541 43.70509136358518276, -72.28304193898878793 43.7050919371395068, -72.28301525664105043 43.70496334471999234, -72.28302483575984638 43.70496222828921873, -72.28301768355704837 43.70492993561984463, -72.28284475760874273 43.70494924548851401, -72.28283080013510187 43.70488483736913565, -72.28288416503121994 43.70487880816855863, -72.2828810822771004 43.70486103950253209, -72.28295140432106791 43.70485567940626481, -72.28295372824509002 43.70487094908089887, -72.28309361179785242 43.70485514478948375, -72.28309810011965908 43.70487664743995992))");
polys.push("Polygon ((-72.28313395414502907 43.70917913876215977, -72.28344174200708494 43.70958858722693918, -72.28324252478986978 43.70966738799575779, -72.28293473910940747 43.70925793898779688, -72.28313395414502907 43.70917913876215977))");
polys.push("Polygon ((-72.28315029679609438 43.6837132575969207, -72.28318971868692699 43.68368047600194615, -72.28328395684819441 43.68374016244720792, -72.28324445881187899 43.68377289498131688, -72.28315029679609438 43.6837132575969207))");
polys.push("Polygon ((-72.28315029679609438 43.6837132575969207, -72.28324445881187899 43.68377289498131688, -72.28325023995809318 43.68377643706826063, -72.28320956124881036 43.68381026864187788, -72.28316801483373411 43.68378396051366508, -72.28315366272850895 43.6837956010984243, -72.28309489749209149 43.68375932394501149, -72.28315029679609438 43.6837132575969207))");
polys.push("Polygon ((-72.28316165741249222 43.68492262795835757, -72.28318061259315641 43.68487854479219124, -72.28319504819907593 43.68488181428521955, -72.28320602733215594 43.68485628043667646, -72.28316272304377321 43.68484647464278936, -72.28319406500520472 43.68477358458844151, -72.28325511164135264 43.68478740887735512, -72.2832641197449135 43.6847664580014623, -72.28335433591249171 43.68478688709645752, -72.28334532783743782 43.68480783797919997, -72.28335284648122183 43.68480954084779455, -72.28333482905860308 43.6848514408188322, -72.28335648122570944 43.68485634458517808, -72.28334386068115691 43.68488569549201372, -72.28332220851369527 43.68488079262340307, -72.28327988630816492 43.68497921747377433, -72.28330153851698014 43.68498412125016728, -72.28328891791949218 43.68501347215060804, -72.28326726571029326 43.6850085692719432, -72.28324924817916042 43.68505047012875764, -72.28324173074827286 43.68504876724691144, -72.2832327213555601 43.68506971812698225, -72.28314250479397174 43.68504928803926646, -72.28315151422442852 43.68502833806607555, -72.283090467366506 43.68501451372374333, -72.28312180950088361 43.68494162369028544, -72.28316511262040933 43.68495143040586726, -72.2831760917785715 43.6849258965603866, -72.28316165741249222 43.68492262795835757))");
polys.push("Polygon ((-72.28316719874797514 43.70410362647055535, -72.2831648792898136 43.70409920615979615, -72.28312700686730352 43.70410966036436662, -72.28312211676887955 43.70410040076541947, -72.2830989000446209 43.7041068210318997, -72.28305590853526041 43.70402500473587537, -72.28304214332554523 43.70402053093649641, -72.28303094246918192 43.70399921388842301, -72.28303710926329018 43.7039892268133201, -72.28303273115923844 43.70398089421677668, -72.28314543210325382 43.70394972741448214, -72.28313731205177817 43.70393424508434776, -72.28317476743207237 43.70392390563366547, -72.28318287988209079 43.70393937180099897, -72.28329538395753673 43.70390825901642273, -72.28329974057784568 43.7039165503158813, -72.28331359789156352 43.70392105328958365, -72.28332479125090515 43.70394235684965167, -72.28331858299316082 43.70395240896875322, -72.28336155330943313 43.70403418567831721, -72.28335720095559225 43.70403538914602137, -72.28336211576335302 43.70404475660949828, -72.2833053381697539 43.7040604306417535, -72.28330765640529876 43.70406485185635859, -72.28316719874797514 43.70410362647055535))");
polys.push("Polygon ((-72.28318971868692699 43.68368047600194615, -72.28322914177505254 43.68364769438675665, -72.28332345607259413 43.68370742899279691, -72.28328395684819441 43.68374016244720792, -72.28318971868692699 43.68368047600194615))");
polys.push("Polygon ((-72.2831947775118806 43.6854812260194052, -72.28316292556122846 43.68555303873410622, -72.28306128105671746 43.6855292967644786, -72.28309313311673634 43.68545748407716189, -72.2831947775118806 43.6854812260194052))");
polys.push("Polygon ((-72.28320649723033853 43.70470394245763401, -72.28318559379815156 43.70466275122130639, -72.28313950158499779 43.70467515340232012, -72.28311385286464485 43.70462527241538453, -72.2831603357426502 43.70461297974564019, -72.28314694506433113 43.70458659185451467, -72.28332585710298019 43.7045388089759399, -72.28332499223289176 43.70453710351821286, -72.28332565665368747 43.70453692532103673, -72.283311498562 43.70450902497933754, -72.28331083290088088 43.70450920318314303, -72.28330952612637361 43.70450662884627491, -72.28331057985526797 43.70450630363842492, -72.28329882261147077 43.70448313458596346, -72.28329776887370883 43.70448345889366948, -72.28329646210033843 43.70448088455663793, -72.28329739929411346 43.70448056807817494, -72.28328564081989782 43.70445739903087201, -72.2832847048578202 43.70445771460252615, -72.28328339808557246 43.70445514026533118, -72.28328451007205047 43.70445493085184552, -72.28327275159867327 43.70443176090302728, -72.28327163961259316 43.70443197031640636, -72.28327033408210411 43.70442939597234044, -72.28327118354222591 43.70442911416984089, -72.28325811830914915 43.70440336988198737, -72.28325726885854863 43.70440365258438931, -72.28325596332929592 43.70440107824014575, -72.28325951188698184 43.70440013023054604, -72.28325998780354666 43.70440080721242282, -72.28328793457085055 43.70439334342289328, -72.28328745741340811 43.70439266644784482, -72.28329100597007084 43.70439171843726456, -72.28326302674959436 43.70433658377255171, -72.28329061023315205 43.70429598154346706, -72.28336749677394835 43.70427544668156372, -72.28342478288585937 43.70429338010775666, -72.28344166084521305 43.7043266337485079, -72.28345472489897361 43.70435237802207951, -72.28354410821849285 43.70452851004098704, -72.28356776530493732 43.70452219171536967, -72.2835844231203879 43.70455501539061771, -72.28356076478223713 43.70456133372641716, -72.28358221292037911 43.70460359663250927, -72.28350621194665848 43.70462389554208471, -72.28351100225336268 43.7046333347751883, -72.28347344530840246 43.70464336526067939, -72.28346865500675733 43.70463392602598418, -72.28343294657287288 43.7046434622880966, -72.28344356171892571 43.70466438012567068, -72.28336637775404938 43.70468499404789497, -72.28335576264025519 43.70466407710310364, -72.28332005417023254 43.70467361333011524, -72.28332484446107742 43.7046830534710864, -72.28328728869406916 43.70469308388899776, -72.28328249717687015 43.70468364465312305, -72.28320649723033853 43.70470394245763401))");
polys.push("Polygon ((-72.28322241793865999 43.70615521494383415, -72.28320780137165968 43.70609278518183771, -72.28322675172077538 43.70609045080143318, -72.28321915088304195 43.70605798955881482, -72.28325301811274528 43.70605381688341851, -72.28324964190889546 43.70603939175491348, -72.2832493253160635 43.70603803976515422, -72.28337359843072818 43.706022727969426, -72.2833772924996083 43.70603850507686161, -72.28341115970685848 43.70603433235472579, -72.28343084215433123 43.70611840651788071, -72.28339822024877037 43.70612242581602658, -72.28340075056858893 43.70613324444385484, -72.28322241793865999 43.70615521494383415))");
polys.push("Polygon ((-72.28323399283213746 43.68451731241604818, -72.28327822554783211 43.6844113310965767, -72.28331162828719414 43.68441809222924377, -72.28330191900397494 43.68444335371926712, -72.28332474514228068 43.68444797483794417, -72.28329310083107373 43.68453030467861709, -72.28323399283213746 43.68451731241604818))");
polys.push("Polygon ((-72.28323508201376058 43.70528224116681315, -72.28325476519817983 43.70536631536754868, -72.28322089835515385 43.70537048804167313, -72.28322459234206576 43.70538626515630654, -72.28310031925086321 43.70540157589082497, -72.28310000266490931 43.70540022390046886, -72.28309662654537249 43.70538579966536474, -72.28306275967990757 43.70538997229273548, -72.28305516026395594 43.70535751102749344, -72.28303621137908408 43.70535984537172425, -72.28302159520764292 43.70529741557496806, -72.28319992534720484 43.70527544269962306, -72.28320246054734355 43.70528626040704978, -72.28323508201376058 43.70528224116681315))");
polys.push("Polygon ((-72.28324435312244134 43.70558672633788433, -72.28321359640035837 43.70559051590633004, -72.28322246037994603 43.70564066651522239, -72.28310533290397188 43.70565509714958097, -72.28309720797855675 43.705620394860901, -72.28307172749424581 43.70562353399132149, -72.28303996217348981 43.70548784678687326, -72.28306544260216526 43.70548470766377136, -72.28305731771465048 43.70545000447092576, -72.2831772376699746 43.70543521499880768, -72.28318890096157645 43.70548503549021291, -72.28321965887205636 43.70548124592195904, -72.28324435312244134 43.70558672633788433))");
polys.push("Polygon ((-72.28325860073039166 43.70578274842728206, -72.28327026415070122 43.70583256800653515, -72.28330102223326037 43.70582877841561498, -72.28332571678488705 43.70593425970589863, -72.2832949586500888 43.70593804930373238, -72.28330662213201663 43.70598786887756404, -72.28330382274266697 43.70598819900251897, -72.28318669462059631 43.7060026306232956, -72.28317857083055742 43.70596792743635461, -72.2831530902128776 43.70597106748557081, -72.28312132327586426 43.70583538032083482, -72.28314680383788016 43.70583224027895142, -72.28313868010414467 43.70579753798786271, -72.28325860073039166 43.70578274842728206))");
polys.push("Polygon ((-72.28327822554783211 43.6844113310965767, -72.28323399283213746 43.68451731241604818, -72.28322073548972071 43.68451439839965644, -72.28321899343754353 43.68451893063903668, -72.28316311747332179 43.68450762023525158, -72.28319877396447168 43.68441485049953599, -72.28323783165136263 43.68442275664146024, -72.28324482281585972 43.68440456995411125, -72.28327822554783211 43.6844113310965767))");
polys.push("Polygon ((-72.28328677488191545 43.70573894419192129, -72.28317150468251384 43.70575314345854423, -72.28315905121134222 43.70569995198611934, -72.28319105829473301 43.70569600897758988, -72.28318852555058527 43.70568519035733601, -72.28327178852572388 43.70567493141412285, -72.28328677488191545 43.70573894419192129))");
polys.push("Polygon ((-72.28332345607259413 43.68370742899279691, -72.28322914177505254 43.68364769438675665, -72.28328361238905586 43.6836023998408649, -72.28334134053969251 43.6836391424282553, -72.28332854468598612 43.68365075033743494, -72.28336932320503649 43.68367668002181858, -72.28332907694722564 43.68371094403833155, -72.28332345607259413 43.68370742899279691))");
polys.push("Polygon ((-72.28339400576369655 43.68351084786277028, -72.28343306788447364 43.68347832464344549, -72.28352739256672521 43.68353798972169244, -72.28348820810943209 43.68357043442704679, -72.28339400576369655 43.68351084786277028))");
polys.push("Polygon ((-72.28339400576369655 43.68351084786277028, -72.28348820810943209 43.68357043442704679, -72.2834940125510883 43.68357407178333318, -72.28345302969381692 43.68360796989082928, -72.28341129580648783 43.6835813973415199, -72.28339607419667345 43.6835939886204514, -72.28333841191090414 43.68355713679680008, -72.28339400576369655 43.68351084786277028))");
polys.push("Polygon ((-72.28340936752204016 43.70655824816222434, -72.28343946422094746 43.70655453680834057, -72.28345112794769989 43.70660435636065699, -72.28348188641243155 43.70660056671928118, -72.28350658160364617 43.70670604705250639, -72.28347582432733986 43.70670983669407406, -72.28348748812496183 43.70675965714097799, -72.28348468870078136 43.70675998727053013, -72.28336663098417603 43.70677453299887816, -72.28335850698120169 43.70673982983061734, -72.2833339529357346 43.70674285511287138, -72.28330218640476801 43.70660716801480561, -72.28332766729259617 43.70660402883116546, -72.2833195421047634 43.7065693265655284, -72.28340181856356139 43.70655917905840226, -72.28340936752204016 43.70655824816222434))");
polys.push("Polygon ((-72.2834259753452244 43.70492216725002521, -72.28343879744340938 43.70497693902571967, -72.28342761307361286 43.70497831707126579, -72.28343035729763244 43.70499003641155156, -72.28344263808459402 43.70499334268836833, -72.28347326735033107 43.70512416927117272, -72.28346317937329957 43.70513023164250654, -72.28346592237085133 43.70514195098824217, -72.28347710677010696 43.70514057293881649, -72.2834899288990016 43.70519533840603543, -72.28339113415863437 43.70520751744527388, -72.28332717849350786 43.70493433994526811, -72.2834259753452244 43.70492216725002521))");
polys.push("Polygon ((-72.28342834107911585 43.70316771862619021, -72.28325949866447786 43.70282972795170195, -72.28327860821489992 43.70282486981987091, -72.28316330805952816 43.7025946798881435, -72.28352459854897916 43.70249945509165457, -72.28354390244466288 43.70253812393031723, -72.28358236875794773 43.70252785719383581, -72.28358622880047335 43.70253551841854289, -72.28359527921790573 43.7025330915977932, -72.28366039259523745 43.70266296070271039, -72.28372877919741768 43.70264503306094639, -72.28366366570195112 43.70251516489536669, -72.28398472651936402 43.70243039763887083, -72.2840116864776121 43.70248125693915853, -72.28414242218222796 43.70244722673939464, -72.28409031416951791 43.70234630306435974, -72.28423635914516865 43.7023109560699865, -72.28435049251902456 43.70254956504533794, -72.28458406272206105 43.70248897659142528, -72.28474827519823975 43.70281729755801337, -72.28423437632076798 43.70295303923573726, -72.28425753910272533 43.70299918644549564, -72.28396313208710922 43.70307619056557513, -72.28394124192320191 43.70303253500542695, -72.28342834107911585 43.70316771862619021))");
polys.push("Polygon ((-72.28343306788447364 43.68347832464344549, -72.28347212996310134 43.68344580141085487, -72.28356657821281317 43.68350554409627762, -72.28352739256672521 43.68353798972169244, -72.28343306788447364 43.68347832464344549))");
polys.push("Polygon ((-72.28348102950756981 43.68449425287468557, -72.28350653253602331 43.68443584663430812, -72.28363536286633462 43.68446547283685533, -72.2836098587107756 43.68452387911168699, -72.28348102950756981 43.68449425287468557))");
polys.push("Polygon ((-72.28348102950756981 43.68449425287468557, -72.2836098587107756 43.68452387911168699, -72.28358702055854224 43.68457618203001402, -72.28351164520108796 43.68455884847141135, -72.28350926513464003 43.68456429682738218, -72.28346602159878387 43.68455435220945304, -72.28346840042858901 43.68454890386104239, -72.28341764922056711 43.68453723290273416, -72.28344048874615169 43.68448493001044142, -72.28348102950756981 43.68449425287468557))");
polys.push("Polygon ((-72.28349699679836249 43.70571304013269298, -72.2833817267282086 43.70572724231085715, -72.28336674154247987 43.70566323223933836, -72.28346600797976862 43.70565100207285525, -72.28346991228870877 43.70566768080890085, -72.28348591580709126 43.70566570881231172, -72.28349699679836249 43.70571304013269298))");
polys.push("Polygon ((-72.2834971417015737 43.70640158807535869, -72.28351682563567238 43.70648566221020559, -72.28348295818234703 43.70648983496478479, -72.28348665230994641 43.70650561206704765, -72.28336237697929789 43.70652092309681791, -72.28336206038127898 43.7065195711075134, -72.28335868289249788 43.70650514689040733, -72.28332481541671939 43.70650931959824703, -72.28331721571132107 43.70647685835843532, -72.28329826648497658 43.70647919274770032, -72.28328365099750386 43.706416762993193, -72.28346198435068004 43.70639478969416558, -72.28346451964732466 43.70640560739310843, -72.2834971417015737 43.70640158807535869))");
polys.push("Polygon ((-72.28349761253579686 43.70186907785816999, -72.28350867260040502 43.70186724864328909, -72.28331005972739831 43.701235125070923, -72.28349562538294037 43.70120443695786605, -72.283700683335951 43.70185706671347248, -72.28360236770363656 43.70187332695034854, -72.2836114732989472 43.70190230131613163, -72.28351316003978866 43.70191856056332114, -72.28349761253579686 43.70186907785816999))");
polys.push("Polygon ((-72.28350653253602331 43.68443584663430812, -72.28346599181020338 43.68442652377879654, -72.28348883001254421 43.68437422088302213, -72.28353958109622113 43.68438589181079124, -72.28354196115304831 43.68438044345407434, -72.28358520457585712 43.68439038804424257, -72.28358282576276395 43.68439583639511881, -72.28365820093554817 43.68441316990836754, -72.28363536286633462 43.68446547283685533, -72.28350653253602331 43.68443584663430812))");
polys.push("Polygon ((-72.28354403021661767 43.68431039437617613, -72.28358512282682113 43.68421624417713645, -72.28364248255759605 43.68422942840926737, -72.28362764394358919 43.68426342667437723, -72.2836420587939017 43.68426674032674129, -72.28362179853667158 43.68431316179473356, -72.28360017562660289 43.68430819131516074, -72.28359874933921958 43.68431146086057026, -72.28358793726486908 43.68430897562243587, -72.28358337238175579 43.68431943655120619, -72.28354403021661767 43.68431039437617613))");
polys.push("Polygon ((-72.28356657821281317 43.68350554409627762, -72.28347212996310134 43.68344580141085487, -72.28352707676305045 43.68340005144358429, -72.28358690366296457 43.68343561249319862, -72.28357154698871057 43.68344832963421709, -72.28361371991515227 43.68347514547465238, -72.2835721815306016 43.68350891971412153, -72.28356657821281317 43.68350554409627762))");
polys.push("Polygon ((-72.28358327162065677 43.70423621853726104, -72.28351368801432386 43.70409500122556778, -72.28348468685778982 43.70408504279849637, -72.28347993900774782 43.70408627360693998, -72.28345957261922194 43.70404494180826305, -72.28346432045719894 43.70404371010065603, -72.28347804867041759 43.70402267080103798, -72.283408465563042 43.70388145341710384, -72.28346510418393223 43.70386676475447274, -72.28346910818184767 43.70386062810490557, -72.28346795866191599 43.70386092682917223, -72.28346626084791637 43.70385748244078883, -72.28349237327984156 43.70385071074863248, -72.28349407109514857 43.70385415513663929, -72.28349292156623562 43.70385445296118121, -72.28350138046451434 43.70385735772646996, -72.28355801904881162 43.70384266991803202, -72.28362760246035634 43.70398388721008587, -72.28364896709041432 43.70397834629641665, -72.28364854263577399 43.70397748542502825, -72.2836532904644713 43.70397625370961947, -72.28366559475800557 43.70400122530545417, -72.283683992156881 43.70399645465691663, -72.28368314447773457 43.70399473200769336, -72.28368670442853272 43.70399380912511589, -72.28370028210657949 43.70402136333072463, -72.28369672092300391 43.70402228712045911, -72.2836958732431043 43.70402056447134242, -72.28367747460647763 43.70402533602854334, -72.28368978015167556 43.70405030671474833, -72.28368503231789077 43.70405153843168478, -72.28368460786221306 43.7040506775604527, -72.28366324320066383 43.70405621758082759, -72.28373282587055826 43.70419743480732677, -72.28367618700609398 43.70421212360320595, -72.28367218300640218 43.7042182602596867, -72.28367333253210347 43.70421796153332394, -72.28367503036834307 43.70422140591831095, -72.2836489177970094 43.70422817765258827, -72.28364721996206299 43.70422473326720336, -72.28364837073786475 43.70422443543441204, -72.28363991178078152 43.70422153068050619, -72.28358327162065677 43.70423621853726104))");
polys.push("Polygon ((-72.28358512282682113 43.68421624417713645, -72.28354403021661767 43.68431039437617613, -72.28350468929414774 43.6843013512808156, -72.28350925542983418 43.68429089034840018, -72.28349844336278807 43.68428840510175348, -72.28349987089532647 43.68428513555085146, -72.28347824801436161 43.68428016594808838, -72.28349850837177826 43.68423374450468799, -72.28351292320803623 43.68423705817344427, -72.28352776187145423 43.68420305902268552, -72.28358512282682113 43.68421624417713645))");
polys.push("Polygon ((-72.28361031737918552 43.70689037128506271, -72.28357769506813213 43.70689439063630033, -72.28358022545418748 43.70690520925829503, -72.28340189060743626 43.70692718004850974, -72.2833872736578229 43.70686475032012197, -72.28340622300183327 43.70686241591556609, -72.28339862320581233 43.70682995468370535, -72.28343249085649802 43.70682578195319934, -72.28342911332359222 43.70681135683912544, -72.28342879672248955 43.70681000485010514, -72.28355307262263807 43.70679469284544183, -72.28355676678820885 43.70681046994437935, -72.28359063317579114 43.70680629717382715, -72.28361031737918552 43.70689037128506271))");
polys.push("Polygon ((-72.28362177024273194 43.70485648052393657, -72.28344064864124618 43.70490361693869374, -72.283406685709366 43.70483522154143685, -72.28358797428855098 43.70478732642401098, -72.28362177024273194 43.70485648052393657))");
polys.push("Polygon ((-72.28362492261187811 43.68333157000155609, -72.28371480819157568 43.68338855238076235, -72.28369586416744141 43.68340629418431575, -72.28366333616550321 43.68338596440990074, -72.28364837189845105 43.68339679019961608, -72.28359053311166349 43.6833601392697588, -72.28362492261187811 43.68333157000155609))");
polys.push("Polygon ((-72.28362786828834885 43.68411480438814465, -72.28366895939682024 43.68402065416398017, -72.28371415682306633 43.68403104269317083, -72.28370959198247192 43.68404150362722049, -72.28372175411996636 43.6840442992900293, -72.28371362172195802 43.68406293320172296, -72.28373524455282961 43.68406790366052661, -72.28371498443284793 43.6841143251458206, -72.28369336158688441 43.68410935468332212, -72.28368522793132911 43.68412798859957746, -72.28362786828834885 43.68411480438814465))");
polys.push("Polygon ((-72.28366895939682024 43.68402065416398017, -72.28362786828834885 43.68411480438814465, -72.28357050867018074 43.68410162014771458, -72.28357864111768549 43.68408298624603248, -72.28355701829399038 43.68407801575757077, -72.28357727852420567 43.68403159429934846, -72.28359890133280885 43.68403656478409403, -72.28360703376293372 43.68401793088028029, -72.28361919713118766 43.68402072654738788, -72.2836237632169798 43.68401026471009629, -72.28366895939682024 43.68402065416398017))");
polys.push("Polygon ((-72.28368531566358968 43.68328139642732566, -72.28374481580229372 43.68323196479727244, -72.28383647160531211 43.68328983579350222, -72.28385453747246459 43.68329943558608619, -72.2837937518540059 43.68335013880903261, -72.28368531566358968 43.68328139642732566))");
polys.push("Polygon ((-72.28369412275223738 43.68396254223284103, -72.28373521489577058 43.68386839197690819, -72.28379257432625593 43.68388157613630796, -72.28377773588077559 43.6839155744219596, -72.28379215065561425 43.6839188880560414, -72.28377189062847208 43.68396530955206458, -72.28375026783160706 43.68396033909991161, -72.28374884156040991 43.68396360864729644, -72.28373803078285675 43.68396112341621063, -72.28373346471141758 43.68397158435797678, -72.28369412275223738 43.68396254223284103))");
polys.push("Polygon ((-72.28371480819157568 43.68338855238076235, -72.28362492261187811 43.68333157000155609, -72.28368531566358968 43.68328139642732566, -72.2837937518540059 43.68335013880903261, -72.28373296612406307 43.68340084109980381, -72.28371480819157568 43.68338855238076235))");
polys.push("Polygon ((-72.28373521489577058 43.68386839197690819, -72.28369412275223738 43.68396254223284103, -72.28365478203572536 43.6839534991873677, -72.28365934811954219 43.68394303824862845, -72.28364853610912633 43.68394055301571655, -72.28364996362545014 43.68393728346283922, -72.28362834085768895 43.68393231388748177, -72.28364860098500344 43.68388589241604336, -72.28366301698598306 43.68388920605981696, -72.28367785548088875 43.68385520688851642, -72.28373521489577058 43.68386839197690819))");
polys.push("Polygon ((-72.28374481580229372 43.68323196479727244, -72.28377943388225901 43.68320320433358006, -72.28383727263108938 43.68323985516904884, -72.28382210667996333 43.6832521725840266, -72.28385788688893854 43.68327216882950381, -72.28383647160531211 43.68328983579350222, -72.28374481580229372 43.68323196479727244))");
polys.push("Polygon ((-72.2837763460300522 43.68498514471947658, -72.28381905474859082 43.68488590753761258, -72.28384495046699953 43.68489170726920889, -72.28383823192974944 43.68490731832471141, -72.28388806434139724 43.68491861242770113, -72.28387882430904199 43.68493990753042056, -72.28390157847033493 43.6849451067657597, -72.28388676954416781 43.68498236584692052, -72.28386264514200832 43.68497767804554854, -72.28385204762297178 43.68500230172718091, -72.2837763460300522 43.68498514471947658))");
polys.push("Polygon ((-72.28381374016062466 43.68376503082112094, -72.2838392438138726 43.68370662539614102, -72.28394284723590602 43.68373045061149895, -72.28391734491377463 43.68378885605211792, -72.28381374016062466 43.68376503082112094))");
polys.push("Polygon ((-72.28381374016062466 43.68376503082112094, -72.28391734491377463 43.68378885605211792, -72.28389450607008371 43.68384115994204109, -72.28384435583970458 43.68382962723704566, -72.28384197707170244 43.68383507559359913, -72.28379873400750455 43.68382513109751386, -72.28380111277903097 43.68381968274182725, -72.28375036212457871 43.68380801192648022, -72.28377319984139149 43.68375570807107522, -72.28381374016062466 43.68376503082112094))");
polys.push("Polygon ((-72.28381905474859082 43.68488590753761258, -72.2837763460300522 43.68498514471947658, -72.28370064447052812 43.68496798676131476, -72.28371128324428696 43.68494326836367492, -72.28368874335707517 43.68493815974072447, -72.2837047895463769 43.68490023245578868, -72.28372758054295844 43.68490539822447971, -72.2837366613799901 43.68488429750789237, -72.28378649375396492 43.68489559165543312, -72.28379315902587621 43.68488010690006007, -72.28381905474859082 43.68488590753761258))");
polys.push("Polygon ((-72.28383852527800002 43.70472951726792132, -72.2840606567634012 43.70461563220602841, -72.2841031049489402 43.70465920638439172, -72.28396583052708024 43.70472958586748291, -72.28396996462728907 43.70473382984918942, -72.28388510748210649 43.70477733551317101, -72.28383852527800002 43.70472951726792132))");
polys.push("Polygon ((-72.2838392438138726 43.68370662539614102, -72.28379870229004212 43.68369730266155671, -72.28382154116403058 43.68364499878928342, -72.28387229169413786 43.68365666957407711, -72.28387467045250503 43.68365122121678468, -72.283917913403684 43.68366116568511615, -72.28391553464885533 43.68366661404327544, -72.28396568475638162 43.68367814671808702, -72.28394284723590602 43.68373045061149895, -72.2838392438138726 43.68370662539614102))");
polys.push("Polygon ((-72.28388097773431298 43.68310619393739103, -72.28392056288410572 43.68307344540837533, -72.28401398004830014 43.68313291697490541, -72.28397455095721114 43.6831657646007443, -72.28388097773431298 43.68310619393739103))");
polys.push("Polygon ((-72.28388097773431298 43.68310619393739103, -72.28397455095721114 43.6831657646007443, -72.28398014134025118 43.68316933108314259, -72.28393933964514417 43.68320318428538229, -72.28389796433614833 43.68317613563941393, -72.28388339269193352 43.68318895659199796, -72.28382537545695641 43.68315219333457833, -72.28388097773431298 43.68310619393739103))");
polys.push("Polygon ((-72.28388889199183609 43.68460160304069717, -72.28391439466784618 43.68454319671247532, -72.28401799956237994 43.68456702184752061, -72.28399249696809648 43.68462542729803033, -72.28388889199183609 43.68460160304069717))");
polys.push("Polygon ((-72.28388889199183609 43.68460160304069717, -72.28399249696809648 43.68462542729803033, -72.28403303790767609 43.68463474996519835, -72.28401020009232525 43.68468705386513307, -72.28395944866521461 43.68467538314895648, -72.2839570698751146 43.68468083150723658, -72.28391382494304196 43.68467088706658075, -72.2839162049769044 43.68466543870247421, -72.28386605405394505 43.68465390601276965, -72.28388889199183609 43.68460160304069717))");
polys.push("Polygon ((-72.28392056288410572 43.68307344540837533, -72.28396014675995218 43.6830406977724266, -72.2840534090963871 43.68310006933552359, -72.28401398004830014 43.68313291697490541, -72.28392056288410572 43.68307344540837533))");
polys.push("Polygon ((-72.28392063920945532 43.70200686511052623, -72.28390985456401552 43.70197253994697917, -72.28389186491085638 43.70197551460087482, -72.28389158282720928 43.70197462325913307, -72.28387413009939166 43.70197745100039555, -72.28387036593871073 43.70196547075263283, -72.28376968676498393 43.70198209312113136, -72.2837705280484073 43.70198476717407488, -72.28376315383923156 43.70198598697217562, -72.28372874373525292 43.70199167754139324, -72.28370857009626604 43.70192747406657929, -72.2837208600211909 43.70192544107761279, -72.2837152568257153 43.7019076104259625, -72.28371649906874552 43.70190740480534686, -72.283700683335951 43.70185706671347248, -72.28349562538294037 43.70120443695786605, -72.28348449746937376 43.70116902182199681, -72.28353845708005565 43.70116009809373026, -72.28345784163984433 43.70090352298676351, -72.28357012679101956 43.70088513982858558, -72.28356935732826116 43.70088269220256905, -72.28354952261386757 43.70088597288256693, -72.28354910321631621 43.70088463494823827, -72.28353166748661351 43.70088751834991569, -72.28352790346461632 43.7008755380877858, -72.28354532125133858 43.70087259897945131, -72.28354504165002936 43.70087170672319132, -72.28356426082672215 43.70086852837329161, -72.28355348818497816 43.70083424450736942, -72.28358235161036305 43.70082947139167118, -72.28395136219506867 43.70200178393866963, -72.28392063920945532 43.70200686511052623))");
polys.push("Polygon ((-72.28396524222480934 43.70419504307339764, -72.28390526518391823 43.70421182916140879, -72.28388255184121647 43.7041691186121497, -72.28394252884613991 43.70415233253613962, -72.28396524222480934 43.70419504307339764))");
polys.push("Polygon ((-72.28401799956237994 43.68456702184752061, -72.28391439466784618 43.68454319671247532, -72.28393723375367586 43.68449089282350428, -72.28398738455375394 43.68450242548303919, -72.2839897633342332 43.68449697712404145, -72.28403300691304878 43.68450692154363679, -72.28403062813610802 43.68451236990352271, -72.28408137943887368 43.68452404058912464, -72.28405854170655687 43.68457634449923432, -72.28401799956237994 43.68456702184752061))");
polys.push("Polygon ((-72.28402414357769601 43.68504179353345052, -72.28405965198989236 43.68495778290137821, -72.28406648722172179 43.68494182467649978, -72.28415433738727813 43.68496164127135017, -72.2841121776555724 43.68506138955036988, -72.28402414357769601 43.68504179353345052))");
polys.push("Polygon ((-72.2840534090963871 43.68310006933552359, -72.28396014675995218 43.6830406977724266, -72.28401656418935772 43.68299402335532733, -72.28407341044039924 43.68303016639399772, -72.28405762082886099 43.68304285443718271, -72.28410051891400201 43.6830697606903442, -72.28405921184632632 43.68310354286009556, -72.2840534090963871 43.68310006933552359))");
polys.push("Polygon ((-72.28405965198989236 43.68495778290137821, -72.28402414357769601 43.68504179353345052, -72.28397219359534631 43.68503023010482877, -72.28399503122300018 43.68497680383155313, -72.28401799396185368 43.68498153748203805, -72.28403102213630405 43.68495108711669417, -72.28405965198989236 43.68495778290137821))");
polys.push("Polygon ((-72.2840818854279803 43.70448851565297588, -72.28392052832516868 43.70453337151106865, -72.28392323472441205 43.70453849536757218, -72.28386706785749993 43.70455410967556276, -72.28386325557471537 43.70456031010783704, -72.28386439623696447 43.7045599934261233, -72.28386620049148803 43.70456340843133347, -72.28384030557540996 43.70457060746471001, -72.2838385013129141 43.70456719155906455, -72.28383964197543321 43.7045668748775924, -72.28383109381793759 43.70456410922972879, -72.28377492690275119 43.70457972349264963, -72.28368292263640171 43.70440553914435355, -72.28366261845877716 43.70441118324764318, -72.28363689847522267 43.70436248994653283, -72.283657202638949 43.70435684584785463, -72.28364412757046864 43.70433209262866825, -72.28370029429906651 43.70431647933054364, -72.28370410657431933 43.70431027800341894, -72.28370296592515842 43.70431059558352871, -72.28370116167839399 43.70430717967547452, -72.28372705650765795 43.70429998157388241, -72.28372886074642167 43.70430339658152974, -72.28372772009754499 43.70430371416188109, -72.28373626820398101 43.70430647891785725, -72.28379243487509598 43.70429086467463975, -72.28382806695815077 43.70435832298410617, -72.28385454412111244 43.70436688905041223, -72.28385780716611464 43.70436193637400635, -72.2838540117327284 43.70436070847765819, -72.28385606552627962 43.70435736804699189, -72.28388283148433402 43.70436602705418494, -72.28389001789030033 43.70435433510497347, -72.28388627721909643 43.70435312401523476, -72.28388755975213087 43.70435103613908012, -72.28392439873745445 43.70436295388226711, -72.2839231162054574 43.70436504175884096, -72.28391937430154712 43.70436383157689875, -72.28391218666882878 43.70437552443461726, -72.28393895263369018 43.70438418252854262, -72.28393690009369266 43.70438752385395276, -72.28393310465708055 43.70438629596026914, -72.28393002459655747 43.7043913070549408, -72.28395668476794356 43.70439993151350677, -72.28404967033337414 43.70437408167050819, -72.28407119376431922 43.70441482926980115, -72.28407974066148256 43.70441759400654291, -72.28407930413318638 43.70441676650445118, -72.28408401273402717 43.70441545757751101, -72.28409393497211965 43.70443424324371051, -72.28408922637004252 43.7044355521710699, -72.28408878985069919 43.70443472556903686, -72.28408497883890504 43.70444092600195063, -72.2841065010682513 43.70448167270050988, -72.2840986575215112 43.7044838536245237, -72.28410632629673671 43.70449836985238079, -72.28408955295918759 43.70450303188866314, -72.2840818854279803 43.70448851565297588))");
polys.push("Polygon ((-72.2841121776555724 43.68506138955036988, -72.28415433738727813 43.68496164127135017, -72.28424218885021446 43.68498145779156516, -72.284234965602991 43.68499706799669013, -72.28419955914480965 43.68508083961368982, -72.2841121776555724 43.68506138955036988))");
polys.push("Polygon ((-72.28412003125876595 43.70382331625435768, -72.28408131237141276 43.70383358453419476, -72.28410165007632315 43.70387462565727787, -72.28407323657931727 43.7038819121542943, -72.28408301734324937 43.70390142854030557, -72.28400508202550157 43.70392269950173869, -72.28390925159938263 43.70374763951544139, -72.28391780226051822 43.70374558169485368, -72.28390390019072242 43.70371749102650938, -72.28396826599605163 43.70370068303617472, -72.28398035955241596 43.70372457655919618, -72.28406056618713649 43.70370365877216301, -72.28412003125876595 43.70382331625435768))");
polys.push("Polygon ((-72.28412560145714849 43.68447181647618294, -72.2839785796887071 43.68443903172482123, -72.28400928672853354 43.68436650939899835, -72.28415630833568173 43.68439929411223233, -72.28412560145714849 43.68447181647618294))");
polys.push("Polygon ((-72.28414075317746779 43.68285351701904062, -72.2842067096425609 43.68289734776757172, -72.28417956169440117 43.68291871264668913, -72.28411360522531481 43.68287488188267531, -72.28414075317746779 43.68285351701904062))");
polys.push("Polygon ((-72.28416300873728062 43.68471721421600051, -72.28419910413681748 43.68463315266144775, -72.28428676792705687 43.6846529764631839, -72.2842436989940893 43.68475327965013122, -72.28415591996582634 43.6847333583308739, -72.28416300873728062 43.68471721421600051))");
polys.push("Polygon ((-72.28419910413681748 43.68463315266144775, -72.28416300873728062 43.68471721421600051, -72.28413372890960886 43.68471038065727186, -72.28414677237039143 43.68468094817191627, -72.28412537204270905 43.68467592978618086, -72.28414851880850733 43.68462171334940081, -72.28419910413681748 43.68463315266144775))");
polys.push("Polygon ((-72.28419955914480965 43.68508083961368982, -72.284234965602991 43.68499706799669013, -72.28426376212601667 43.68500368452379234, -72.28425082104548949 43.68503390942771603, -72.28427155942094373 43.68503858664011119, -72.28424877434220264 43.68509179396748721, -72.28419955914480965 43.68508083961368982))");
polys.push("Polygon ((-72.2842436989940893 43.68475327965013122, -72.28428676792705687 43.6846529764631839, -72.2843745971188838 43.68467283800664802, -72.28433818818983525 43.6847576285652508, -72.2843314780797499 43.68477320090153881, -72.2842436989940893 43.68475327965013122))");
polys.push("Polygon ((-72.2842530573711457 43.68285007958500898, -72.28422792313035927 43.68287381607706976, -72.28416196595847509 43.6828372912003573, -72.28418710145052728 43.68281355471587801, -72.2842530573711457 43.68285007958500898))");
polys.push("Polygon ((-72.28429227389567302 43.68281999982058039, -72.28427165228480078 43.68283799380412091, -72.28420076727802268 43.6827955065192981, -72.28422139013596848 43.68277751254171903, -72.28429227389567302 43.68281999982058039))");
polys.push("Polygon ((-72.28433818818983525 43.6847576285652508, -72.2843745971188838 43.68467283800664802, -72.28442478720442921 43.68468418754762439, -72.28440058747526109 43.68473814330994287, -72.28437961673940038 43.68473341517240982, -72.28436672133018703 43.68476397016902268, -72.28433818818983525 43.6847576285652508))");
polys.push("Polygon ((-72.28439921070794583 43.70399804866559634, -72.28447089780246415 43.70413284560616063, -72.28447795309355683 43.70413087053169932, -72.28449960414691589 43.70417158225957621, -72.28450816081495134 43.70417433341059166, -72.28450772056999085 43.7041735068302728, -72.28451242533732568 43.70417218980577445, -72.28452240705060206 43.70419095891287498, -72.28451770228204509 43.70419227593779254, -72.28451726327743643 43.70419144935078037, -72.28451347100816804 43.70419765689742064, -72.28453512210079168 43.70423836771779236, -72.28419407926035944 43.70433382202066497, -72.28417242835348588 43.70429311023518437, -72.28416387293340506 43.70429035995240241, -72.284164311933921 43.70429118654075751, -72.28415960838091792 43.70429250264428589, -72.28414962676325217 43.70427373350527489, -72.28415433030579607 43.70427241650215677, -72.284154769306042 43.70427324309056161, -72.2841585616263842 43.70426703645566846, -72.28413691200860569 43.70422632465599833, -72.28426112782821633 43.70419155819384827, -72.2842534714500573 43.70417716161729516, -72.28423818309032356 43.70418144032490915, -72.2842396569492962 43.70418421356298921, -72.28423671754281088 43.70418503590293824, -72.28423490214115077 43.70418162366377146, -72.28423607864253597 43.70418129418379038, -72.28422518994003099 43.70416081892809501, -72.284224013429764 43.70416114750794634, -72.28422219802956761 43.7041577352685664, -72.2842250103780799 43.70415674260307526, -72.28422661376468739 43.70415968525383477, -72.28424190087913814 43.70415540655447018, -72.28423736422864465 43.70414687504658957, -72.28429895801902205 43.70412963541588169, -72.28425103360264359 43.70403952152273064, -72.28430751661764475 43.70402321676677815, -72.28431094408317392 43.70401760794126034, -72.28430980469265421 43.70401792642070404, -72.28430798929203149 43.70401451418258176, -72.28433386114708981 43.70400727286426701, -72.28433567654894887 43.70401068510196296, -72.28433453716796464 43.70401100448167853, -72.28434226975302579 43.70401349007885727, -72.28439921070794583 43.70399804866559634))");
polys.push("Polygon ((-72.28440294367679542 43.6851266864019081, -72.28443871678166488 43.68504313505798109, -72.28444547433116441 43.68502735094372724, -72.28453158495226205 43.68504683642404274, -72.28448908106507531 43.68514610876442816, -72.28440294367679542 43.6851266864019081))");
polys.push("Polygon ((-72.28443871678166488 43.68504313505798109, -72.28440294367679542 43.6851266864019081, -72.28435144699793113 43.68511507479266953, -72.28437319685616558 43.6850620368518392, -72.28439459191758942 43.68506664748835533, -72.28440810098068425 43.68503630158986795, -72.28443871678166488 43.68504313505798109))");
polys.push("Polygon ((-72.28448908106507531 43.68514610876442816, -72.28453158495226205 43.68504683642404274, -72.28461769685939942 43.6850663209323713, -72.28461080005230599 43.68508242983407541, -72.28457521851751721 43.6851655319616512, -72.28448908106507531 43.68514610876442816))");
polys.push("Polygon ((-72.2844892496629825 43.70954261162861343, -72.28437554104290541 43.70949123037724604, -72.28436112945647096 43.70950767592962194, -72.2843712072457123 43.70951227840053832, -72.28436616969888462 43.70951808223713897, -72.28426807336001048 43.7094732805826709, -72.28421234597314537 43.70948246891559563, -72.28421458066706862 43.70948960245267756, -72.28420536853080591 43.70949112112882773, -72.28415824671172629 43.70934073013770416, -72.2841580708507081 43.70933870774310037, -72.28414612784379756 43.70933310275717076, -72.2841489201026377 43.70932988794396579, -72.28415125005805919 43.70933095273395708, -72.28415108327976668 43.70933114444858347, -72.28415179263734558 43.70933147094005733, -72.28415309885228623 43.70932962595211535, -72.28413320244612805 43.70932220979851479, -72.28412271316993554 43.70936454158473339, -72.28406563020020315 43.70935709947967496, -72.28406830611058353 43.70934629685438466, -72.28406702639134096 43.70934613005440639, -72.28406181972707145 43.70935697605166581, -72.28403514444043765 43.70935023824274168, -72.28406899852625145 43.7092797009528482, -72.28359441326608703 43.70906295377572803, -72.28361663003057913 43.70903737193911098, -72.28352809965923598 43.70900437546004014, -72.28353441067906715 43.70899546496526256, -72.28354953274478589 43.70900110056159349, -72.28355234949724206 43.70899712687626248, -72.28346908989291819 43.70895129128778933, -72.28347743912560475 43.70894331126464749, -72.28349096674182306 43.70895075830203069, -72.28350583925895023 43.70893653892976261, -72.28343250964842071 43.70888343930914743, -72.28344226511222814 43.70887634906472385, -72.28345427188759231 43.70888504190167367, -72.28347515106969468 43.70886986305373512, -72.28341950512908909 43.70880721101842425, -72.28343111273036925 43.70880178310068942, -72.28344033135938673 43.70881215880333315, -72.2834847482897942 43.70879132474453144, -72.28343444684149688 43.70876840242119954, -72.28369842632574205 43.7084642527021785, -72.28379290277300129 43.70850738677791014, -72.28379885291435869 43.70849148921551119, -72.28378296008862947 43.70848835909220753, -72.28378657947608588 43.70847869175970857, -72.28384231191158449 43.70848966865073493, -72.283843816839493 43.70848723845124084, -72.28382877965846376 43.70848236838986622, -72.28383443933113028 43.70847323097815718, -72.28387361103182229 43.70848599839414561, -72.28388130218350227 43.7084771371310552, -72.2838818553525897 43.70847735826004765, -72.28389785285909852 43.708458889856864, -72.28402352600870984 43.70851628690797241, -72.28401254156329969 43.70852898584150381, -72.28401510562673593 43.70853037789357387, -72.28402490865381935 43.70852225226797572, -72.28406760495963113 43.70854935660872798, -72.28405779823960131 43.70855748495807802, -72.28406059827914021 43.70855926186214901, -72.28406850993897592 43.70855459909633822, -72.28407405625975457 43.70855944298666174, -72.28408659865048946 43.70857039112622999, -72.28399310631651531 43.70863876636644108, -72.28381534468866221 43.70884345498485146, -72.28405736298533668 43.70895398819772737, -72.28434213053019164 43.7090634186269682, -72.28433212134481778 43.70908264588720016, -72.28432615731421151 43.70908099229515642, -72.28432480578410946 43.70908349817728578, -72.2843374302585886 43.70908707971775442, -72.28431629913450251 43.70912628280240853, -72.28430676699505852 43.70912357831380746, -72.28430344381131079 43.70912740804365626, -72.28430289546137999 43.70912753611565904, -72.28439108801865132 43.70915283106828753, -72.28438571302366711 43.7091627437235104, -72.28450014151376024 43.70921456840888197, -72.28450950652518259 43.70920377911962618, -72.2845001555607638 43.70919950845591728, -72.28459073609468533 43.70909514507362559, -72.28460008704915651 43.709099415730023, -72.28460978432723039 43.70908824210871302, -72.28464965024419087 43.70910644909332632, -72.28464546344726216 43.70911172270530187, -72.28468582854591773 43.70912984417243052, -72.28472915535877519 43.70914928890609019, -72.28472351579057431 43.70915578726352635, -72.28473286676381804 43.70916005790893166, -72.28464228638129896 43.70926442140181223, -72.28463293539809342 43.70926015074912385, -72.28462357040024244 43.70927094004830593, -72.28469182440679219 43.70930292293258645, -72.28469157179763727 43.70930321411915997, -72.28469545008020702 43.7093049860774201, -72.28469074858864474 43.7093104037839737, -72.28468686906515472 43.70930863183225057, -72.28465805046984372 43.70934194421995045, -72.28466186765376733 43.70934368680757132, -72.28465716616543091 43.7093491054127341, -72.2846532804183397 43.70934733169342223, -72.28465286838390114 43.70934780555486299, -72.28464700172769142 43.70934512627990642, -72.28468226300363142 43.70930449933969442, -72.28463086186263808 43.70928102455139452, -72.28463010158088764 43.70928190082418752, -72.28462269534614393 43.70927851882076709, -72.28450189412656357 43.70941815979221445, -72.2845016273467138 43.70941803792543823, -72.28449407108450941 43.70942674638886416, -72.28449391774603328 43.70942667611262777, -72.28449382701471393 43.70942678191057951, -72.28444916637754147 43.70940638482927909, -72.28437889981596243 43.70948736085035335, -72.28448320190886989 43.70953498657071634, -72.28458462419162345 43.70941810950675688, -72.28458515775163562 43.70941835323991143, -72.2845861645070471 43.70941719211471366, -72.28459470144026966 43.7094210891449535, -72.28458999993989664 43.70942650774735938, -72.28458573146829735 43.70942455878214616, -72.28455721817989854 43.70945800990332941, -72.28456111765322589 43.70945979075219867, -72.28455641614681326 43.70946520935321189, -72.28455251543253723 43.70946342851090094, -72.28452363059835761 43.70949670881964266, -72.28452753506384454 43.70949849234287399, -72.28452283230144815 43.70950391004920021, -72.28451856506717377 43.70950196107480679, -72.28449004174230197 43.70953540863282427, -72.28449395118146015 43.70953719303035001, -72.2844892496629825 43.70954261162861343))");
polys.push("Polygon ((-72.28449924036357288 43.71255331158032931, -72.28451599817996964 43.71256165909596803, -72.28451849620644509 43.71255902100672586, -72.28453564315732649 43.71256756172985547, -72.28453314514052863 43.71257020071949739, -72.28454990296630456 43.71257854823007705, -72.28454312332014808 43.71258570888448247, -72.28458001525251575 43.71260408586852009, -72.28458643767579872 43.71259730156971557, -72.28463606139787601 43.71262201996017893, -72.28462847250085588 43.71263266104135425, -72.28466497534752477 43.71265084388745947, -72.28467425300006255 43.71264104423335795, -72.28471270405033522 43.7126601976000515, -72.28469450471929747 43.71267941966228676, -72.28470074090678565 43.71268252626543216, -72.284686824414635 43.71269722484941411, -72.28468058823557385 43.71269411914553871, -72.28464704600122559 43.71272954790027399, -72.28443322621063771 43.7126230390105448, -72.28449924036357288 43.71255331158032931))");
polys.push("Polygon ((-72.28452199622591934 43.70250507675192608, -72.28447505343369528 43.70240897398566915, -72.28444391331073859 43.70241694316236192, -72.28439956481332729 43.70232614932895387, -72.28426070185078345 43.70236184835474802, -72.28424464960916396 43.70232828884024201, -72.28438321058160909 43.70229266707132609, -72.28437593008230522 43.70227776262998276, -72.28447524579937067 43.70225216894476716, -72.28447008769320803 43.70224085779983625, -72.2846156685482697 43.70220349218197953, -72.2846210747602953 43.70221443655249516, -72.28472793209725467 43.70218679022852371, -72.28479411248395081 43.70232213972359148, -72.28469479678123832 43.70234773278544793, -72.28471489259352722 43.7023898731977809, -72.2845610158535834 43.70242947814671908, -72.28454247624102891 43.70239171981449999, -72.28451982338263804 43.70239751717793553, -72.28456707149577198 43.70249338425843888, -72.28452199622591934 43.70250507675192608))");
polys.push("Polygon ((-72.28456133149983032 43.68415988612168377, -72.28454228429362161 43.68420418783565395, -72.28457115282793666 43.68421072469111976, -72.28454300352454709 43.68427619480982571, -72.28451413372152956 43.68426965795421069, -72.28451178856586523 43.6842751142431851, -72.28435300782903994 43.68423915958616277, -72.28434597107089132 43.68425552755002883, -72.28423049448105075 43.6842293780701425, -72.2842375312769434 43.68421301101315635, -72.2840787521040653 43.68417705596609579, -72.2840810973045933 43.68417160058570659, -72.28405222883168335 43.68416506270598632, -72.28408037861959201 43.68409959270400833, -72.28410924829496764 43.68410612967014828, -72.28412829579046672 43.68406182802589655, -72.28421941371694004 43.68408246128569772, -72.28420590220414965 43.68411388726203626, -72.28424319176515667 43.68412233095330777, -72.28424769560150764 43.68411185592662349, -72.28430844095305474 43.68412561107724201, -72.2843039371263103 43.68413608610622845, -72.28435866690504952 43.68414847952871582, -72.28436317196333505 43.68413800449093998, -72.28442391736705019 43.68415175957981234, -72.28441941232760826 43.68416223551989219, -72.28445670194780348 43.68417067914109708, -72.28447021458191557 43.68413925312941615, -72.28456133149983032 43.68415988612168377))");
polys.push("Polygon ((-72.28457521851751721 43.6851655319616512, -72.28461080005230599 43.68508242983407541, -72.28464029777504152 43.68508908117831879, -72.28462773974588629 43.68511902863261298, -72.2846484433608083 43.68512369696378528, -72.28462566232381903 43.68517690614361726, -72.28457521851751721 43.6851655319616512))");
polys.push("Polygon ((-72.28460096103388821 43.70374290754506319, -72.28452132370190952 43.70376464169314801, -72.28451699739461844 43.7037562971724185, -72.28447836208687249 43.70376684055497662, -72.28447203721731285 43.70375464465507065, -72.28440951032155226 43.70377170940984968, -72.28441583393968983 43.70378390531995905, -72.28437719613344825 43.70379445048193645, -72.28438152366481972 43.70380279500129461, -72.28430188988536997 43.70382452807707097, -72.28429123751584484 43.70380398674464573, -72.28428239028409052 43.70380640172138698, -72.28423645576569356 43.7037178179764183, -72.28424530297709794 43.70371540210325634, -72.28424197412186913 43.70370898282263994, -72.28432160778019977 43.7036872506889793, -72.28432493663342484 43.70369366906724196, -72.28446473769496095 43.7036555158221347, -72.28446140881979431 43.70364909654797714, -72.28454109717240783 43.70362739006752406, -72.28454437245035535 43.70363378442728219, -72.28455321964605673 43.70363136943038995, -72.28459915456204499 43.7037199530470204, -72.28459042364792708 43.70372233591651678, -72.28460096103388821 43.70374290754506319))");
polys.push("Polygon ((-72.2846029786215496 43.68472404607226167, -72.28456577179437659 43.68481106508436795, -72.2845632967935785 43.684816801997016, -72.28450436525193368 43.68480341340849549, -72.28452134381454641 43.68476405886097069, -72.28449943205232842 43.68475912431595276, -72.28452220750448021 43.68470585848334053, -72.2846029786215496 43.68472404607226167))");
polys.push("Polygon ((-72.28462323765788256 43.68482412133920434, -72.28466049045648845 43.68473699675210753, -72.28471800106643741 43.6847499465095197, -72.28468070354605857 43.68483717756497953, -72.28462323765788256 43.68482412133920434))");
polys.push("Polygon ((-72.28464212202463557 43.68397198584282393, -72.28463977565169785 43.68397744214126988, -72.28466887909456773 43.68398343316105326, -72.284640494993468 43.68404944911701904, -72.28461162652934036 43.68404291227844283, -72.28459257815609362 43.68408721400796679, -72.28450185379438153 43.68406566624921794, -72.2845149714456312 43.6840351550359145, -72.28447768314183008 43.68402671142636962, -72.28447317935183491 43.68403718646199252, -72.28441243405306693 43.68402343139840838, -72.28441693785266864 43.68401295636510184, -72.28436220694557335 43.68400056297627998, -72.28435770313733144 43.68401103800749752, -72.28429695789071729 43.68399728288216011, -72.28430146170856574 43.68398680785325183, -72.28426417222375733 43.68397836418034075, -72.28425066074791516 43.68400978926224099, -72.28415954292128731 43.68398915602649168, -72.28417859159306147 43.68394485526669513, -72.28414972197867883 43.68393831741745004, -72.28417787155702001 43.6838728473901341, -72.28420674113367284 43.68387938433248507, -72.28420908755148844 43.68387392894263144, -72.28436786599858976 43.68390988381483453, -72.28437490395162968 43.68389351584217906, -72.28449037994738546 43.68391966428113449, -72.28448334202283831 43.68393603226066091, -72.28464212202463557 43.68397198584282393))");
polys.push("Polygon ((-72.28464379995421041 43.6845140797887268, -72.28461493002616578 43.68450754295955818, -72.28459588275239867 43.68455184468019326, -72.28449548150192072 43.68452900812933848, -72.28450895297862644 43.68449767504448999, -72.28447376905715771 43.68448970789685859, -72.28446926523271543 43.68450018293168569, -72.28440851946642454 43.68448642786990632, -72.28441302329122209 43.68447595193738664, -72.28437783816384865 43.68446798566675682, -72.28436432664047118 43.68449941075972021, -72.28426388558762028 43.68447666692722464, -72.28428293432338592 43.68443236525333617, -72.28425406447279045 43.68442582833247911, -72.284282215399557 43.68436035827764385, -72.28431108398146421 43.6843668951983517, -72.28431343039905244 43.68436143890672696, -72.28437116882611235 43.68437451361828039, -72.28437792456946909 43.68435880062135368, -72.28441837069122755 43.68436795985230958, -72.28441161370800216 43.68438367195823702, -72.28454724226712358 43.68441438367798924, -72.28455399796877145 43.68439867067100835, -72.2845944428940328 43.68440782894597163, -72.28458768720196304 43.68442354195526178, -72.28464542574674567 43.68443661652742804, -72.28464308058744336 43.6844420719188804, -72.28467194925599415 43.68444860964790166, -72.28464379995421041 43.6845140797887268))");
polys.push("Polygon ((-72.28466049045648845 43.68473699675210753, -72.28462323765788256 43.68482412133920434, -72.28456577179437659 43.68481106508436795, -72.2846029786215496 43.68472404607226167, -72.28466049045648845 43.68473699675210753))");
polys.push("Polygon ((-72.28467241209283145 43.7086840185023604, -72.28480732501161299 43.70866207355324917, -72.28467474804359938 43.70881620643697119, -72.28459144570022943 43.70877882980158802, -72.28467241209283145 43.7086840185023604))");
polys.push("Polygon ((-72.28468070354605857 43.68483717756497953, -72.28471800106643741 43.6847499465095197, -72.28479874868099841 43.68476812868657078, -72.28477697163644677 43.68482245845567036, -72.28475346662989409 43.68481733636010489, -72.28473714211578738 43.6848557522342773, -72.28467813175110734 43.68484254597545657, -72.28468070354605857 43.68483717756497953))");
polys.push("Polygon ((-72.28476162832974694 43.68460685898313045, -72.2848050021951849 43.684507478320036, -72.28482842667132502 43.68451286186063243, -72.28482614494598124 43.68451809189566859, -72.28486008074176539 43.68452589197178781, -72.28484638423341835 43.68455727581852699, -72.28486260062794599 43.68456100350579163, -72.2848523285485669 43.68458454093944709, -72.28483611090811678 43.684580813257476, -72.28482355585515506 43.6846095816303901, -72.28478000754124366 43.68459957255300452, -72.2847754416041397 43.68461003353444738, -72.28476162832974694 43.68460685898313045))");
polys.push("Polygon ((-72.28477235696892933 43.6852105981947858, -72.28480896618806639 43.68512710792010267, -72.28481576745612358 43.68511124164158588, -72.28490335596212901 43.68513101407152277, -72.2848596245417383 43.68523074952177154, -72.28477235696892933 43.6852105981947858))");
polys.push("Polygon ((-72.2847825649550515 43.68364073397940217, -72.28481143448405533 43.68364727076954779, -72.28478328445903855 43.68371274095747481, -72.28475441614170904 43.6837062041537294, -72.28475206978907863 43.68371166045464093, -72.28459329164267899 43.68367570611314932, -72.28458625377396629 43.68369207409936195, -72.28447077816612421 43.68366592485385524, -72.28447781607256672 43.68364955777452252, -72.28431903700970906 43.68361360305645036, -72.28432138340721735 43.68360814766415245, -72.28429251393961863 43.68360160984972396, -72.28432066444914028 43.6835361397785249, -72.2843495326388279 43.68354267669278812, -72.2843685810328509 43.68349837589954632, -72.28445969817526873 43.68351900807439847, -72.28444618691138146 43.68355043408073612, -72.28448347491510617 43.68355887770303525, -72.28448797866845155 43.68354840266635364, -72.2845487235034625 43.68356215769367878, -72.28454421976893229 43.68357263363267151, -72.28459895032244731 43.68358502693737222, -72.28460345404833731 43.6835745509962976, -72.28466419894471073 43.68358830686188554, -72.28465969521920442 43.68359878190526757, -72.28469698452228442 43.68360722545077124, -72.2847104956673121 43.68357579941581292, -72.28480161305056129 43.68359643221644006, -72.2847825649550515 43.68364073397940217))");
polys.push("Polygon ((-72.2848050021951849 43.684507478320036, -72.28476162832974694 43.68460685898313045, -72.28474781504756663 43.68460368353009926, -72.28475238098899069 43.6845932225497009, -72.28470883394791713 43.68458321433833902, -72.28472139029067023 43.68455444597091031, -72.28470517266624995 43.68455071827023062, -72.28471544479766919 43.68452718084938624, -72.28473166240712544 43.68453090764862878, -72.28474535897883868 43.68449952471517861, -72.28477929474472319 43.68450732391541891, -72.28478157771394308 43.68450209387459182, -72.2848050021951849 43.684507478320036))");
polys.push("Polygon ((-72.28480896618806639 43.68512710792010267, -72.28477235696892933 43.6852105981947858, -72.28472374156379487 43.68519937170326273, -72.28474652619661356 43.68514615798433454, -72.2847673629026275 43.6851508615769788, -72.28478003157120213 43.68512034106589681, -72.28480896618806639 43.68512710792010267))");
polys.push("Polygon ((-72.28480942565686007 43.70918532003841506, -72.28464546344726216 43.70911172270530187, -72.28465300898299972 43.70910221773245752, -72.2845200338864089 43.70904294821432501, -72.28470542738412519 43.70882997175162643, -72.28472664426585936 43.70884153086314683, -72.2848660619631147 43.70868840679683842, -72.28496613965151596 43.70873327463223745, -72.28498982130682293 43.70870699245386248, -72.28508656639436936 43.70874908351154176, -72.28509605748105571 43.70874043654476537, -72.28517357856915737 43.70877641209368392, -72.28512348437722324 43.70883319729814787, -72.28511385977878945 43.70882886066010542, -72.28510190274219838 43.70884300776319975, -72.2851464809044586 43.70886288480060244, -72.28514782836661823 43.7089448139730834, -72.28507824959662287 43.70894555586775709, -72.28487795841590469 43.70918092610317984, -72.28483084770422806 43.7091599654803673, -72.28480942565686007 43.70918532003841506))");
polys.push("Polygon ((-72.28481153784272806 43.68305811423416429, -72.28471580344928782 43.68303671704330071, -72.28474294314246151 43.6829727644425887, -72.28471417550761657 43.682966335091443, -72.28474895743393347 43.6828843748999418, -72.28503608802542146 43.68294855034185531, -72.28500130892602726 43.6830305097042455, -72.28483867744333224 43.68299416161151072, -72.28481153784272806 43.68305811423416429))");
polys.push("Polygon ((-72.28483299963760089 43.68352343254866099, -72.28474209554440222 43.68350230358181818, -72.28475539345336642 43.68347137373163491, -72.28450459636547976 43.68341458338537819, -72.28449108513866861 43.68344600849730597, -72.2843999680965652 43.68342537634661937, -72.28441901516782764 43.68338107465118014, -72.28439014703926091 43.68337453685386862, -72.28441829609874958 43.68330906676401781, -72.28444716542976778 43.6833156036477348, -72.28444951056415846 43.6833101482593662, -72.28460828890045775 43.68334610280241748, -72.28461532672378098 43.68332973481413717, -72.28473080049680277 43.68335588302528549, -72.28472376394216781 43.68337225101374344, -72.28488254135277202 43.68340820428016968, -72.28488019626325922 43.6834136605771306, -72.28490906445321684 43.68342019735020187, -72.28488091587823305 43.68348566755678064, -72.28485204641957296 43.68347913078356726, -72.28483299963760089 43.68352343254866099))");
polys.push("Polygon ((-72.2848596245417383 43.68523074952177154, -72.28490335596212901 43.68513101407152277, -72.28499094452497786 43.68515078643390126, -72.28498320323643611 43.68516641838947834, -72.28494622703807693 43.68525074686755261, -72.2848596245417383 43.68523074952177154))");
polys.push("Polygon ((-72.28487695362213117 43.70601941676829227, -72.28487743032231094 43.7060150965788452, -72.28487893313703694 43.70601090134896793, -72.28488141748493945 43.70600696002900065, -72.28488480889819812 43.70600339093015663, -72.28488900179121401 43.70600030263121027, -72.28489387058934312 43.70599779031809362, -72.28489926594231463 43.70599592950390644, -72.28490502589922073 43.70599477686852907, -72.28491097339018268 43.70599436667214377, -72.2849169298919918 43.70599471248114298, -72.28492271290051008 43.70599580268189754, -72.28492814590198634 43.70599760492670072, -72.28493306579849786 43.7060000642938391, -72.28493732170421993 43.70600310689413703, -72.28494078486134811 43.70600663891734428, -72.28494335118615766 43.70601055291874815, -72.28494494006532989 43.7060147314259666, -72.28494550551256737 43.70601904597852183, -72.28494502882649897 43.70602336706819813, -72.28494352600684181 43.70602756139890488, -72.2849410404307946 43.70603150362691025, -72.28493765025996254 43.70603507272070232, -72.28493345735782327 43.70603816012139475, -72.28492858855810255 43.7060406724362025, -72.28492319321131276 43.7060425341517842, -72.28491743325020025 43.70604368678806395, -72.28491148451378479 43.70604409699155468, -72.28490552924775159 43.70604375117555662, -72.28489974623491321 43.70604266097399915, -72.28489431322094561 43.70604085782787251, -72.2848893933226293 43.70603839845907856, -72.28488513742605903 43.70603535675703455, -72.2848816730298438 43.70603182473884374, -72.28487910793950277 43.70602790982933072, -72.28487751907378822 43.70602373222119041, -72.28487695362213117 43.70601941676829227))");
polys.push("Polygon ((-72.28491170010742906 43.68488823226239504, -72.28494808598884447 43.6848027179932572, -72.28503596970195133 43.68482241132018373, -72.2849931496446203 43.68492304646482438, -72.28490526584407405 43.68490335760620979, -72.28491170010742906 43.68488823226239504))");
polys.push("Polygon ((-72.2849152619103279 43.70172755288910338, -72.28491122833305838 43.70171436444436353, -72.28490091593546651 43.7017160241389675, -72.28460160840826632 43.70073737487041399, -72.28461189587322622 43.70073571893765774, -72.28460783930663069 43.70072245319850168, -72.28460650621758532 43.70072081688546461, -72.28459440878052078 43.70068141080471236, -72.28462240332824251 43.70067672942990811, -72.28462813642529738 43.70069547650548714, -72.28473962387953122 43.70067752944235195, -72.28475099769725887 43.70071471895856519, -72.28486382842122282 43.7006965007914232, -72.28486215715246033 43.70069129214951431, -72.28489421268382387 43.70068617651448761, -72.28489308943565561 43.70068250582144032, -72.28491768344048296 43.70067854661812845, -72.28491932149546528 43.70068390304965789, -72.28492670452850177 43.70068271463135545, -72.28494059460759047 43.70072813241969811, -72.28493321156925333 43.70072932083891715, -72.28504902070937987 43.70110613329780591, -72.28506040311745551 43.70110430128866597, -72.28506286024169469 43.70111233638208148, -72.28506762870669888 43.70111156802957453, -72.28510503492277905 43.70123387267891246, -72.28510026643932918 43.70123464013300207, -72.28510272356517419 43.70124267432527887, -72.28509134114156609 43.70124450723876919, -72.28513089779141865 43.70137384145506587, -72.28513039752435532 43.70137405387719554, -72.2852060759771291 43.701621492728421, -72.28521345911914864 43.70162030429113287, -72.28522734963878804 43.70166572203462607, -72.28521996649146786 43.70166691047283081, -72.2852216058417838 43.70167226689205364, -72.28519701145218335 43.70167622616237679, -72.28519583422166761 43.70167237665202009, -72.2851632463816145 43.70167765366292656, -72.28516210059056846 43.70167263839719851, -72.28501717158746942 43.7016958953601744, -72.28502161853104724 43.70171043256333832, -72.2849152619103279 43.70172755288910338))");
polys.push("Polygon ((-72.28494622703807693 43.68525074686755261, -72.28498320323643611 43.68516641838947834, -72.28501262023232243 43.68517305117275384, -72.28499966382209152 43.68520344095580299, -72.28502202843890245 43.6852090948092453, -72.28499809731113146 43.68526272431533641, -72.28494622703807693 43.68525074686755261))");
polys.push("Polygon ((-72.28494808598884447 43.6848027179932572, -72.28491170010742906 43.68488823226239504, -72.28488317285048481 43.68488114640667419, -72.28489741491179643 43.68485094859661189, -72.28487576166149609 43.68484607213017767, -72.28489791914110185 43.68479147656493211, -72.28494808598884447 43.6848027179932572))");
polys.push("Polygon ((-72.28497766395103952 43.68279928490894548, -72.28510532949158574 43.68282819661046545, -72.28509607998371678 43.68284970428635461, -72.28504361642950471 43.68283784439518058, -72.2850367394715505 43.68285355629102895, -72.28496162750383291 43.68283658048490992, -72.28497766395103952 43.68279928490894548))");
polys.push("Polygon ((-72.2849931496446203 43.68492304646482438, -72.28503596970195133 43.68482241132018373, -72.28512385222242642 43.68484210368580278, -72.28508776568833127 43.684926914337467, -72.28508103474217705 43.68494273524876093, -72.2849931496446203 43.68492304646482438))");
polys.push("Polygon ((-72.28500486858375496 43.68273601684446561, -72.28512527041007729 43.68276328378897233, -72.28510725107489066 43.68280494014509685, -72.28511457898366643 43.68280668803378575, -72.28510532949158574 43.68282819661046545, -72.28497766395103952 43.68279928490894548, -72.28500486858375496 43.68273601684446561))");
polys.push("Polygon ((-72.28503185511651452 43.68267325489115649, -72.28504771948838936 43.68263636076572709, -72.28512238398423051 43.68265326243124491, -72.28511558740875387 43.68266906840460706, -72.28516864526474706 43.68268108435952257, -72.28515957511116596 43.68270217883920736, -72.28503185511651452 43.68267325489115649))");
polys.push("Polygon ((-72.28503185511651452 43.68267325489115649, -72.28515957511116596 43.68270217883920736, -72.28515050495128946 43.68272327331813898, -72.28514328848048365 43.68272162743654974, -72.28512527041007729 43.68276328378897233, -72.28500486858375496 43.68273601684446561, -72.28503185511651452 43.68267325489115649))");
polys.push("Polygon ((-72.28508232972478709 43.68247267247406995, -72.28522073820663252 43.68250406772025229, -72.28521145620119626 43.68252566288911964, -72.28518982587483777 43.68252076565414654, -72.28518087507107737 43.68254140225545257, -72.28513893374170607 43.68253182204826146, -72.28513218296822629 43.68254761787434148, -72.28505732165571374 43.68253074068140762, -72.28508232972478709 43.68247267247406995))");
polys.push("Polygon ((-72.28508776568833127 43.684926914337467, -72.28512385222242642 43.68484210368580278, -72.28517558053721359 43.68485369479282099, -72.28515172709232672 43.68490870191823916, -72.28512943477592501 43.684903073800605, -72.28511636006030017 43.68493340573392203, -72.28508776568833127 43.684926914337467))");
polys.push("Polygon ((-72.28510038832598639 43.68243074138618454, -72.28523151571624794 43.68246048388380132, -72.28522272421548678 43.68248081000292871, -72.28523002143636234 43.68248247164384424, -72.28522073820663252 43.68250406772025229, -72.28508232972478709 43.68247267247406995, -72.28510038832598639 43.68243074138618454))");
polys.push("Polygon ((-72.28511845899878097 43.68238878052755325, -72.28514345363319649 43.68233074388056281, -72.2852179533993251 43.68234758067101353, -72.28521153665769816 43.68236341249759391, -72.28525348248068383 43.68237295755149319, -72.28524455068323107 43.6823936291580992, -72.28526616989915965 43.68239853544368856, -72.28525684739831547 43.68242016953871598, -72.28511845899878097 43.68238878052755325))");
polys.push("Polygon ((-72.28511845899878097 43.68238878052755325, -72.28525684739831547 43.68242016953871598, -72.28524752489084904 43.6824418036329547, -72.28524030845127868 43.68244015775723454, -72.28523151571624794 43.68246048388380132, -72.28510038832598639 43.68243074138618454, -72.28511845899878097 43.68238878052755325))");
polys.push("Polygon ((-72.28517357856915737 43.70877641209368392, -72.28509605748105571 43.70874043654476537, -72.28508656639436936 43.70874908351154176, -72.28500577621355205 43.70871385644068852, -72.28506905476980648 43.70863980782505109, -72.28477067578253923 43.70850589814683218, -72.28487580804325319 43.70838297391051697, -72.28518076758359712 43.70851940839177274, -72.28541892578522265 43.70824012098631783, -72.28545673166344443 43.70825796081687287, -72.2855892936069182 43.70810750385779642, -72.28563178786016863 43.70812590598612246, -72.2855613291697523 43.70821118429918783, -72.28589947758175072 43.70837500253228569, -72.28588029099246626 43.70839747577778667, -72.28554187056727187 43.7082312251869709, -72.28550004847200228 43.70827839988688623, -72.28558715223373099 43.70831950044777869, -72.28518881429992859 43.7087869378083127, -72.28517133565448205 43.70877898491384883, -72.28517357856915737 43.70877641209368392))");
polys.push("Polygon ((-72.28518346047127352 43.68223811646700483, -72.28529985791092827 43.68226441572308971, -72.28529115542524153 43.68228519230074625, -72.28524908959184359 43.6822759116300432, -72.28524233339877014 43.68229141587042363, -72.28516774976152703 43.68227473886161505, -72.28518346047127352 43.68223811646700483))");
polys.push("Polygon ((-72.28519627360593347 43.6853039598126287, -72.28523897895766481 43.68520472212500039, -72.28526483613843823 43.68521060724948768, -72.28525804113562003 43.68522610719274724, -72.28530793374042673 43.68523741385104842, -72.2852988485630874 43.68525852641526086, -72.28532027232394341 43.68526338154148192, -72.28530690469703757 43.68529501927868353, -72.28528525466970223 43.68529011317059485, -72.28527191757513037 43.68532110358937359, -72.28519627360593347 43.6853039598126287))");
polys.push("Polygon ((-72.28521070921391356 43.6821745996900006, -72.28534899648364842 43.68220584602735101, -72.28532163371438912 43.68226935715355808, -72.28529985791092827 43.68226441572308971, -72.28518346047127352 43.68223811646700483, -72.28521070921391356 43.6821745996900006))");
polys.push("Polygon ((-72.28523796638658894 43.68211106395877863, -72.28525362615548033 43.6820745615383359, -72.28532802296086857 43.68209130340787993, -72.28532125003646058 43.68210710656671836, -72.2853636736002727 43.68211669219832771, -72.28535476637486568 43.68213745458836428, -72.28523796638658894 43.68211106395877863))");
polys.push("Polygon ((-72.28523796638658894 43.68211106395877863, -72.28535476637486568 43.68213745458836428, -72.28537636042675274 43.68214233398748547, -72.28534899648364842 43.68220584602735101, -72.28521070921391356 43.6821745996900006, -72.28523796638658894 43.68211106395877863))");
polys.push("Polygon ((-72.28523897895766481 43.68520472212500039, -72.28519627360593347 43.6853039598126287, -72.28512051407085437 43.68528679050901786, -72.28513114139336437 43.68526209544459249, -72.28510784487966134 43.68525652226027489, -72.28512498217793336 43.6852191235155729, -72.28514744273044812 43.68522421428280467, -72.28515652918696333 43.68520310082347891, -72.28520639441380524 43.68521440227387842, -72.28521312302208912 43.68519883698793649, -72.28523897895766481 43.68520472212500039))");
polys.push("Polygon ((-72.28527157067721021 43.68449511561709642, -72.28531266070129391 43.68440096481534596, -72.28535200194436072 43.68441000638625837, -72.28534743736112489 43.68442046738351081, -72.28535824828610146 43.68442295246131124, -72.28535682085160374 43.68442622203476589, -72.28537844393619594 43.68443119128079388, -72.28535818496756349 43.68447761304759069, -72.28534376997461663 43.6844742996126314, -72.28532893227439615 43.68450829899182253, -72.28527157067721021 43.68449511561709642))");
polys.push("Polygon ((-72.28527167432147849 43.70796995898761139, -72.28518598311498522 43.70807037668980399, -72.28518473762447627 43.70807184693447311, -72.28518929862580933 43.70807401661079439, -72.28499647936106953 43.70830001838586298, -72.28490301297935616 43.70825791041435338, -72.28491870145330722 43.70823898720657752, -72.28473177222717538 43.70815495285238228, -72.28489145600343591 43.70796753739869445, -72.2851133391941687 43.70806711190334681, -72.28512454677063204 43.70805369970479859, -72.28511643721228097 43.70804972029498714, -72.28520796070043275 43.70794236758809603, -72.28527167432147849 43.70796995898761139))");
polys.push("Polygon ((-72.28529216561302917 43.68466688028343725, -72.28526329677390549 43.68466034271234832, -72.28524424869124232 43.68470464454398439, -72.28514380697134811 43.68468190148955443, -72.28515731935760869 43.68465047540088619, -72.28512213402281361 43.68464250846080432, -72.28511763030036263 43.68465298352030146, -72.28505688423521747 43.68463922880525274, -72.28506138920747048 43.68462875374136445, -72.28502620389775757 43.68462078677156057, -72.28501269268960527 43.68465221283855726, -72.28491225114258611 43.68462946957937021, -72.28493129944705231 43.68458516780115986, -72.2849024294451965 43.68457863014507581, -72.28493057849436809 43.68451315994278161, -72.28495944845849408 43.68451969669199997, -72.28496179359200369 43.6845142412942522, -72.28501953230312438 43.6845273156762488, -72.28502628913371097 43.68451160263561661, -72.28506673420503148 43.68452076074238022, -72.2850599786242185 43.68453647377863547, -72.28519560661035825 43.68456718473092337, -72.28520236215902628 43.68455147168695163, -72.28524280852349193 43.68456062972432363, -72.28523605298440202 43.68457634277062596, -72.28529379180397996 43.68458941611319091, -72.28529144546682517 43.68459487242422767, -72.28532031550837189 43.68460140908173628, -72.28529216561302917 43.68466688028343725))");
polys.push("Polygon ((-72.28531266070129391 43.68440096481534596, -72.28527157067721021 43.68449511561709642, -72.28521421033579486 43.6844819313066921, -72.28522904810388638 43.68444793284192684, -72.28521463312497985 43.68444461939058954, -72.28523489219378462 43.6843981976483704, -72.2852565152677613 43.68440316781763499, -72.28525794146699468 43.68439989825211001, -72.28526875362486237 43.68440238333172232, -72.28527331946067136 43.68439192233077506, -72.28531266070129391 43.68440096481534596))");
polys.push("Polygon ((-72.28533914000129812 43.68433044336406113, -72.28538022980994526 43.68423629253661034, -72.28542542768617807 43.68424668038601055, -72.28542086312779702 43.68425714138633964, -72.28543302538638216 43.68425993686623343, -72.28539650145557971 43.68434362670609516, -72.28533914000129812 43.68433044336406113))");
polys.push("Polygon ((-72.28534201804849602 43.70425282618532492, -72.28569189981972443 43.70416148608972406, -72.28569830177011113 43.70417439255510317, -72.28569489162032369 43.70417528228669823, -72.2856988882770537 43.70418364384856602, -72.2856947988019698 43.70418470917162779, -72.28573106079353749 43.70425795989600459, -72.28573875717418673 43.70425595426962673, -72.2857405549529517 43.7042595744953033, -72.28539067268846452 43.704350914741255, -72.28539408996039128 43.70434564976366687, -72.28539692661502158 43.70434135189867675, -72.28536404644189872 43.70427407179737855, -72.28535824406725396 43.70427228957332488, -72.28535582985782071 43.70427290748467186, -72.28535183008484921 43.7042648420492057, -72.28534841993396753 43.70426573267050685, -72.28534201804849602 43.70425282618532492))");
polys.push("Polygon ((-72.28535775816513365 43.70533281095001144, -72.28544349914274392 43.70533509021765184, -72.28544120793110039 43.70538192400055522, -72.2853549669481481 43.7053800128640404, -72.28535775816513365 43.70533281095001144))");
polys.push("Polygon ((-72.28536404644189872 43.70427407179737855, -72.28539670387893068 43.70434140890841945, -72.28539409995931919 43.70434565691006412, -72.28539064907054978 43.70435091036877395, -72.28538870115031045 43.70434692462385584, -72.28532202221784075 43.70436407445590987, -72.28532239101078005 43.70436482851453519, -72.28522526808021098 43.70438980891809422, -72.28513170656133013 43.7041983655097539, -72.28512294449255648 43.70420061897896602, -72.28508851095706689 43.70413016007062623, -72.28513053814353384 43.70411935061177644, -72.28512953696758814 43.70411730388036631, -72.2852266595001538 43.70409232355935814, -72.28531948356676651 43.70428225877539319, -72.28535824406725396 43.70427228957332488, -72.28536404644189872 43.70427407179737855))");
polys.push("Polygon ((-72.28537021903959214 43.68196977997446595, -72.28549797627971429 43.68199871684806368, -72.28548888811944551 43.68201972774736674, -72.28543581583900846 43.68200770571704084, -72.28542907389177685 43.68202338180513067, -72.28535443492606305 43.68200648289975874, -72.28537021903959214 43.68196977997446595))");
polys.push("Polygon ((-72.28538022980994526 43.68423629253661034, -72.28533914000129812 43.68433044336406113, -72.2852817798120526 43.68431725998634363, -72.28531830388716628 43.68423357018192377, -72.28533046737653933 43.68423636566607371, -72.28533503194913123 43.68422590466923339, -72.28538022980994526 43.68423629253661034))");
polys.push("Polygon ((-72.28539724495773555 43.68190693760764276, -72.28551773360436528 43.68193422887538446, -72.28549963919820698 43.6819760126151877, -72.28550706443373031 43.68197770594800033, -72.28549797627971429 43.68199871684806368, -72.28537021903959214 43.68196977997446595, -72.28539724495773555 43.68190693760764276))");
polys.push("Polygon ((-72.28540453371951457 43.68417906245051086, -72.2854456233249465 43.68408491159830476, -72.28550298332720558 43.68409809489541828, -72.28548814579821169 43.6841320933963928, -72.28550256071675051 43.68413540681376617, -72.28548230194104462 43.68418182860380483, -72.28546067892862936 43.68417685847669674, -72.28545925274559636 43.68418012804477968, -72.28544844186026808 43.68417764297618788, -72.28544387607081489 43.68418810398421925, -72.28540453371951457 43.68417906245051086))");
polys.push("Polygon ((-72.28542450821866794 43.68184354220687737, -72.28544039640281937 43.68180659568901802, -72.28551505574543512 43.68182332701587001, -72.28550823145177162 43.68183919256934189, -72.28556133838623055 43.68185122067932724, -72.28555209988732599 43.681872442114134, -72.28542450821866794 43.68184354220687737))");
polys.push("Polygon ((-72.28542450821866794 43.68184354220687737, -72.28555209988732599 43.681872442114134, -72.28554286138199814 43.68189366354818048, -72.28553582922585008 43.68189244512583258, -72.28551773360436528 43.68193422887538446, -72.28539724495773555 43.68190693760764276, -72.28542450821866794 43.68184354220687737))");
polys.push("Polygon ((-72.28544431377682145 43.70529174047879195, -72.28538052101497158 43.70529080501387398, -72.28538253409625725 43.70524141295213383, -72.2854463268057259 43.70524234841624889, -72.28544431377682145 43.70529174047879195))");
polys.push("Polygon ((-72.2854456233249465 43.68408491159830476, -72.28540453371951457 43.68417906245051086, -72.2853651926108256 43.68417001999645777, -72.28536975841267065 43.68415955899145331, -72.28535894753464675 43.68415707391434921, -72.28536037372263934 43.68415380434745998, -72.28533875073938475 43.68414883509717583, -72.28535900961526295 43.68410241333173616, -72.28537342575994273 43.68410572675880132, -72.28538826333830514 43.68407172737219923, -72.2854456233249465 43.68408491159830476))");
polys.push("Polygon ((-72.28551733179726568 43.68372817644343797, -72.28552646179257124 43.6837067476897758, -72.28553378961048281 43.68370847485018515, -72.28555163415778395 43.68366695078970707, -72.28567114344616584 43.68369417608259653, -72.28564395832653133 43.68375702295737284, -72.28551733179726568 43.68372817644343797))");
polys.push("Polygon ((-72.28551733179726568 43.68372817644343797, -72.28564395832653133 43.68375702295737284, -72.28562749942656751 43.68379507246515203, -72.28555437787096594 43.68377736351912688, -72.28556119410113467 43.68376165912402342, -72.28550820178627134 43.68374960429634513, -72.28551733179726568 43.68372817644343797))");
polys.push("Polygon ((-72.28555163415778395 43.68366695078970707, -72.28556947991167192 43.68362542581954955, -72.28556212369832679 43.6836239517343401, -72.28557127841968111 43.68360251834250363, -72.28569827642193957 43.68363145009227821, -72.28567114344616584 43.68369417608259653, -72.28555163415778395 43.68366695078970707))");
polys.push("Polygon ((-72.28557127841968111 43.68360251834250363, -72.28558043436552794 43.68358108404314066, -72.28563358082821821 43.68359318660673551, -72.28564033765607633 43.6835767750743571, -72.28571456806781725 43.68359378850847463, -72.28569827642193957 43.68363145009227821, -72.28557127841968111 43.68360251834250363))");
polys.push("Polygon ((-72.28561407416577822 43.68472745656475809, -72.28562208446581394 43.68470869717186389, -72.28564336671809087 43.6847140399412126, -72.28565915055030189 43.68467738019776903, -72.2856882408069481 43.68468397587425045, -72.28569482405447388 43.68466840414528463, -72.28573852970227165 43.68467813480075534, -72.28573176557087265 43.68469384522228438, -72.28577446736994716 43.68470352819668534, -72.28575081593575646 43.68475846144856689, -72.28561407416577822 43.68472745656475809))");
polys.push("Polygon ((-72.28561407416577822 43.68472745656475809, -72.28575081593575646 43.68475846144856689, -72.28572716323722602 43.68481339650205797, -72.28569540007941896 43.68480619426397737, -72.28568716299854202 43.6848231619540357, -72.28563398713480126 43.68481035752457586, -72.28564071027676619 43.68479379316639211, -72.28561184498637715 43.68478724846376338, -72.28562770034449159 43.68475042452541146, -72.28560606385156007 43.68474621505702515, -72.28561407416577822 43.68472745656475809))");
polys.push("Polygon ((-72.28563142705883138 43.68544204459616509, -72.28567415368488014 43.68534288583946079, -72.28573177094116886 43.68535587681063959, -72.28568926033871378 43.68545516852888966, -72.28563142705883138 43.68544204459616509))");
polys.push("Polygon ((-72.28563366004192403 43.70216031096586562, -72.2856262226157753 43.70213645270246872, -72.28562499398397279 43.70213665466983599, -72.28562290788597977 43.70212996497888014, -72.28562413775823359 43.70212976300479824, -72.28561079098713549 43.70208695165884194, -72.28560956234701962 43.70208715272602973, -72.28560747626177374 43.70208046393472756, -72.28560870613306122 43.70208026196082329, -72.2856007812200545 43.70205484202134727, -72.28559955258981518 43.70205504398845164, -72.28559746649757756 43.70204835429688472, -72.28559869637750523 43.70204815322311731, -72.28558534963397619 43.70200534097331513, -72.28558412100470321 43.70200554294024897, -72.28558203491596146 43.7019988532483552, -72.28558326478567153 43.70199865127470673, -72.28556991807373322 43.70195583992265398, -72.28556868943616109 43.70195604098938702, -72.28556660336016648 43.70194935219713983, -72.28556783322891022 43.7019491502236761, -72.28555365259346388 43.70190366208956334, -72.2855524239661662 43.70190386405614191, -72.28555033788458672 43.70189717436348786, -72.28555156776158697 43.70189697329021783, -72.28553815180001152 43.70185393819229347, -72.28553692317363755 43.70185414015872283, -72.28553483709556815 43.7018474504657064, -72.28554405800873894 43.70184593703388742, -72.28554433640378818 43.70184682929158981, -72.28557679972620065 43.70184150244271137, -72.28557652133994793 43.70184061108508189, -72.28558574225097288 43.70183909764990915, -72.28558602064661898 43.70183998990750496, -72.28564503695164944 43.70183030425126702, -72.28564475362999531 43.70182941562074319, -72.28565397329697362 43.70182790218679969, -72.28565425169355763 43.70182879444421786, -72.28568671499617437 43.70182346756422476, -72.28568643784895187 43.70182257620016486, -72.28569565751379855 43.7018210627628676, -72.28569774360875044 43.70182775245287843, -72.28569651374293414 43.70182795442772772, -72.28570992981160259 43.70187098950661664, -72.28571115843767814 43.70187078753834697, -72.28571324452690305 43.70187747632797226, -72.28571201466012042 43.70187767830300629, -72.28572619540872779 43.70192316641698937, -72.28572742403581231 43.70192296444853497, -72.2857295101379691 43.70192965413781394, -72.28572828026094044 43.70192985521299534, -72.28574162708862616 43.7019726674461424, -72.28574285571669122 43.70197246547752457, -72.28574514044433386 43.70197976973546616, -72.28602044671397664 43.70193459812390557, -72.28600946173159514 43.70189936607813053, -72.28603773754242923 43.70189472603653513, -72.28603115264972701 43.70187367318331439, -72.28602043448135817 43.70183905083691656, -72.28610065881039759 43.70183173150704903, -72.28609303118602725 43.70178772723701144, -72.28632282758768213 43.70176676035816143, -72.28633717959939986 43.70184955068348387, -72.28621500209860073 43.70186324863204419, -72.28621876357306064 43.7018974514342915, -72.28615623379243971 43.70190315743789, -72.28615977261041792 43.70192357154518703, -72.28612713746476004 43.70192654851972236, -72.28613790025329422 43.701960556769059, -72.28613927752473955 43.70196033238901379, -72.28614136367394849 43.70196702207043415, -72.28614013379755932 43.70196722315005644, -72.28614757141473035 43.70199108227962626, -72.28614880128229458 43.70199088029993106, -72.28615088619309859 43.70199756998786711, -72.28614965756594302 43.70199777196086899, -72.286163229276994 43.7020413083780781, -72.28616445914553879 43.70204110639819817, -72.28616654405988129 43.70204779608577184, -72.2861653154224939 43.70204799715893529, -72.28617275305997225 43.70207185628642321, -72.28617398292911389 43.70207165430642959, -72.28617606784561644 43.70207834399376878, -72.28616684690412342 43.70207985657664551, -72.28616656974857335 43.70207896521382906, -72.28610878684141028 43.70208844554039018, -72.28610906524596658 43.70208933779661464, -72.28609984555086498 43.70209085126737847, -72.28609956714642237 43.70208995901111848, -72.28604178546760295 43.70209944019719472, -72.28604206262139087 43.7021003315603096, -72.28603284292285025 43.70210184502568751, -72.28603256451935977 43.70210095276925699, -72.28597539713872777 43.70211033338600259, -72.28597616179952468 43.7021127855216136, -72.28596694209736029 43.70211429898167665, -72.2859666636947793 43.70211340672507561, -72.28593531370478331 43.7021185503397902, -72.28593559210690955 43.7021194425964552, -72.28592637115285413 43.70212095515995543, -72.28592609276010705 43.70212006380327097, -72.28588490873688954 43.70212682139549543, -72.28588518589776868 43.70212771365901716, -72.28587596618167765 43.70212922621174556, -72.28587568778037564 43.70212833395493135, -72.28584433778381424 43.7021334784447788, -72.28584461617541024 43.70213436980166222, -72.28583539522597334 43.70213588325786702, -72.2858346305613253 43.70213343022130914, -72.28577746434919504 43.70214280983265098, -72.28577774150855362 43.70214370209642851, -72.285768521787233 43.70214521464053092, -72.28576824339670281 43.70214432328346277, -72.28571046161165725 43.70215380430257568, -72.28571074000137742 43.70215469565979305, -72.28570151904531826 43.70215620910523313, -72.28570124064647473 43.70215531684799259, -72.28564345883994235 43.70216479783334051, -72.28564373722871039 43.70216568919072841, -72.28563451626924063 43.70216720263078258, -72.28563243140966676 43.70216051293332526, -72.28563366004192403 43.70216031096586562))");
polys.push("Polygon ((-72.28563728983372982 43.70174969223275241, -72.28562496017543992 43.70175195335954044, -72.2856233933690504 43.70174665775778777, -72.28557054472307186 43.70175554045154342, -72.28557158215632228 43.70175846094723937, -72.28551873537146832 43.70176752632025341, -72.28546302150552094 43.70159590733307908, -72.28547031892988173 43.70159458793366269, -72.28543035839879849 43.70148397018996889, -72.28572024663355933 43.70118794228429238, -72.28601856607158993 43.70114791861728776, -72.28601633378288227 43.70120042073939004, -72.28577994250603922 43.70123206149946071, -72.28555067451578964 43.70146594394184092, -72.28563728983372982 43.70174969223275241))");
polys.push("Polygon ((-72.28564738728987038 43.70156230601164538, -72.28590805947703757 43.70152071607055433, -72.28592661649773277 43.70159867822030719, -72.28566810175274782 43.70163861119993243, -72.28564738728987038 43.70156230601164538))");
polys.push("Polygon ((-72.28567346617610667 43.70514308707808482, -72.28560891743542527 43.705142339447832, -72.28561012586108347 43.70508819669471734, -72.28551128681667137 43.70508708564646128, -72.2855123080916826 43.70503934516942479, -72.28561190570984252 43.70504063392228034, -72.28561334968971153 43.70498502728698043, -72.28567713960062235 43.70498559631114688, -72.28567648825506353 43.70503310256987817, -72.28568360851748764 43.7050326121766588, -72.28569073683782165 43.70503302540465285, -72.28569765845851691 43.70503433081599809, -72.28570416204753712 43.70503648815225262, -72.28571005091009738 43.70503943277406478, -72.28571514545159005 43.70504307384754128, -72.28571929068593249 43.70504730060412868, -72.28572236124452388 43.70505198681376413, -72.28572426382042693 43.70505698717132503, -72.28572494104766122 43.70506215257678662, -72.28572437019592201 43.70506732384178861, -72.28572257075315122 43.70507234514949602, -72.28571959697272575 43.70507706319499874, -72.2857155391973123 43.70508133527861361, -72.28571052015574594 43.70508503112619536, -72.28570469253719466 43.70508803830260547, -72.28569823406579076 43.70509026583874856, -72.28569134007535979 43.70509164607177865, -72.2856842210559023 43.70509213735881104, -72.28567709147870346 43.70509172323716029, -72.28567495149887634 43.70509150350968497, -72.28567346617610667 43.70514308707808482))");
polys.push("Polygon ((-72.28567415368488014 43.68534288583946079, -72.28563142705883138 43.68544204459616509, -72.28555222832845573 43.68542407244043346, -72.28557501106959648 43.6853708585690228, -72.28559665971448567 43.68537574572818727, -72.28561653769338591 43.68532989483234275, -72.28567415368488014 43.68534288583946079))");
polys.push("Polygon ((-72.2856947988019698 43.70418470917162779, -72.28573350470006176 43.70417463032995187, -72.28563966608467695 43.70398495745981648, -72.28573665262726422 43.70395970382169537, -72.28573766371816589 43.70396174779392595, -72.28577963237755455 43.70395081960460004, -72.28581444401766021 43.70402118085150533, -72.28580569341630735 43.70402345861273119, -72.28590027888851921 43.70421463850819777, -72.28580329200637777 43.70423989228607553, -72.28580291949565151 43.70423913914920178, -72.28573104729503029 43.70425797437014381, -72.28569623686189516 43.70418761399429286, -72.2856947988019698 43.70418470917162779))");
polys.push("Polygon ((-72.28572377325561149 43.7081657406200037, -72.28507705270767758 43.70788567700465421, -72.28519545966989313 43.70774179374145518, -72.28533819736595945 43.70780360723362179, -72.28534982919514107 43.70778947266442316, -72.28539528935310443 43.70780915942143707, -72.28538365753090034 43.70782329399517607, -72.28578616623266839 43.70799760095011521, -72.28574142091088106 43.7080519740889315, -72.28579743392752732 43.70807623076010628, -72.28572377325561149 43.7081657406200037))");
polys.push("Polygon ((-72.28573961610041465 43.6831840812301877, -72.28574849786429013 43.68316301202847285, -72.28577016423695056 43.68316789006036061, -72.28577905374373813 43.68314709263495388, -72.2858942016299153 43.68317301371926931, -72.28587631731451779 43.68321485487609834, -72.28573961610041465 43.6831840812301877))");
polys.push("Polygon ((-72.28573961610041465 43.6831840812301877, -72.28587631731451779 43.68321485487609834, -72.28585166531904349 43.68327252799070948, -72.28577832722250207 43.68325601835009309, -72.28578505272044197 43.68324030633109345, -72.28574323529890933 43.68323089218866784, -72.28575210544406104 43.68321013987385015, -72.28573073432114882 43.68320514953115463, -72.28573961610041465 43.6831840812301877))");
polys.push("Polygon ((-72.28574684499744762 43.68546823527439926, -72.28578938822204236 43.68536886775260797, -72.28584700552747222 43.68538185866534462, -72.28582749319383538 43.68542779132648235, -72.28584907935034209 43.68543286959067729, -72.28582613832172399 43.68548622838432749, -72.28574684499744762 43.68546823527439926))");
polys.push("Polygon ((-72.28575256150391226 43.68518772329512956, -72.28579499307373624 43.68508861379074659, -72.28584893655688859 43.68510077673815317, -72.28580650506775385 43.68519988626187001, -72.28575256150391226 43.68518772329512956))");
polys.push("Polygon ((-72.28577538364842781 43.6831003998615941, -72.28578449163603636 43.68307938163547277, -72.28580593296392465 43.68308420777555057, -72.28581502931463376 43.68306350643408109, -72.28585666399162335 43.68307276852885934, -72.28586340617280825 43.68305699430967337, -72.28593673536776976 43.68307350394461253, -72.28591208592999351 43.68313117345949337, -72.28577538364842781 43.6831003998615941))");
polys.push("Polygon ((-72.28577905374373813 43.68314709263495388, -72.28578794447538769 43.68312629430209171, -72.28576627688542544 43.68312141718018893, -72.28577538364842781 43.6831003998615941, -72.28591208592999351 43.68313117345949337, -72.2858942016299153 43.68317301371926931, -72.28577905374373813 43.68314709263495388))");
polys.push("Polygon ((-72.28578938822204236 43.68536886775260797, -72.28574684499744762 43.68546823527439926, -72.28568926033871378 43.68545516852888966, -72.28573177094116886 43.68535587681063959, -72.28578938822204236 43.68536886775260797))");
polys.push("Polygon ((-72.28579089704655303 43.68457579603647645, -72.28583508934734425 43.6844758453070412, -72.28592720785545112 43.68449729444562735, -72.28589803626977073 43.6845657397574314, -72.28587643588114986 43.68456069488117777, -72.28586311043866885 43.6845916880097036, -72.28579089704655303 43.68457579603647645))");
polys.push("Polygon ((-72.28579499307373624 43.68508861379074659, -72.28575256150391226 43.68518772329512956, -72.28568428424834735 43.68517232927735705, -72.28570379662016876 43.68512639753847537, -72.28568216750220188 43.68512147159069769, -72.28570484614412806 43.68506828795671026, -72.28579499307373624 43.68508861379074659))");
polys.push("Polygon ((-72.28581868371772146 43.70130480106956838, -72.28590255163828715 43.70129452522776603, -72.28591765395825064 43.70135939844286099, -72.28583378595008924 43.70136967429616703, -72.28581868371772146 43.70130480106956838))");
polys.push("Polygon ((-72.28583174430033864 43.68399530798181729, -72.28596314653512422 43.6839538662398752, -72.2859945443040175 43.68400841397704681, -72.28596206146701775 43.68401826120459219, -72.28597096948219303 43.68403373731928241, -72.28591354522176005 43.68405168796719096, -72.28590437203804697 43.68403575244958859, -72.28588306751908021 43.68404221064407977, -72.28586345129414781 43.6840070981355737, -72.28584217387037825 43.68401341666511684, -72.28583174430033864 43.68399530798181729))");
polys.push("Polygon ((-72.28583508934734425 43.6844758453070412, -72.28579089704655303 43.68457579603647645, -72.28571070681479682 43.6845581488818695, -72.28572502307461889 43.68452640964865452, -72.28570337084786956 43.68452150723117455, -72.28573215713515765 43.68445187776523397, -72.28583508934734425 43.6844758453070412))");
polys.push("Polygon ((-72.28585356158920661 43.68294754801005553, -72.28586087155824202 43.68293054572181688, -72.28586809292285409 43.68293218073067408, -72.28588620126187436 43.68289006113845119, -72.28600490560316416 43.68291693672047415, -72.28597948989241218 43.68297605951344309, -72.28585356158920661 43.68294754801005553))");
polys.push("Polygon ((-72.28585356158920661 43.68294754801005553, -72.28597948989241218 43.68297605951344309, -72.28596214713347479 43.6830164009370705, -72.28588891836207608 43.68299964055518103, -72.2858956735580449 43.68298392746805803, -72.28584304540117955 43.68297200763132082, -72.28585356158920661 43.68294754801005553))");
polys.push("Polygon ((-72.28586702625821658 43.68521353198663348, -72.28590945765679976 43.68511442244121667, -72.28597906012009844 43.68513011516774469, -72.28595627873367846 43.68518353793012921, -72.28593462923109314 43.68517844292782826, -72.28591475153457679 43.68522429297843246, -72.28586702625821658 43.68521353198663348))");
polys.push("Polygon ((-72.28586842163147708 43.70726234083585382, -72.28593735687125843 43.70730822709693086, -72.2858684489940515 43.70736262589135634, -72.28603301039224505 43.70749328774508768, -72.28605056442455634 43.70748147648214399, -72.28608204655280645 43.707506605796695, -72.28608413076506167 43.70750537761464471, -72.28611507833906558 43.70752992207462739, -72.28600904031536345 43.70760027960135119, -72.28597808525739765 43.707575730653204, -72.28594543076728485 43.70759725261059003, -72.2857059186186035 43.70740730069336877, -72.28569057612807569 43.70741748071017696, -72.28561827353382796 43.70736013581135637, -72.28565501415175731 43.70733575661490988, -72.28565155902587946 43.70733301662762216, -72.28571666526326567 43.70728981285589754, -72.28573240848616877 43.7073022978933281, -72.28576501660035092 43.70728073844419725, -72.28580514264895385 43.70731236718722812, -72.28586842163147708 43.70726234083585382))");
polys.push("Polygon ((-72.28587529153394087 43.71246145368649394, -72.28588633798028695 43.71247583536762704, -72.28588892307901403 43.71247479078979126, -72.2859231289970694 43.7125193251462747, -72.28587015916548353 43.71254073121167494, -72.28590804392632663 43.71259005648373375, -72.28591107264433901 43.71258883218944646, -72.28598899431037239 43.71269028463090933, -72.2859570635950206 43.71270319174183783, -72.28595889742182123 43.71270558677647955, -72.28594347946437892 43.71271181774748982, -72.28598930764060526 43.71276866588981846, -72.28592378525385698 43.71279514524787402, -72.28587961177341015 43.71273763196879969, -72.28586308531943416 43.71274430636509578, -72.28586028816451403 43.71274066455877971, -72.2858246365976953 43.7127550687940456, -72.28574924069965846 43.71265691389612584, -72.2857848971714958 43.71264250785747407, -72.28578209624814122 43.71263886066918758, -72.28579531838660444 43.71263352097631838, -72.28572399254392167 43.71254065709016601, -72.28579612701709323 43.71251150574319411, -72.28579658734112456 43.71251210539247012, -72.28581186315715001 43.71250593191508216, -72.28580081672291158 43.71249155022674415, -72.28587529153394087 43.71246145368649394))");
polys.push("Polygon ((-72.28588620126187436 43.68289006113845119, -72.2859043095758409 43.68284794154316586, -72.28589709319032863 43.6828463074096689, -72.28590600560575297 43.68282557555416901, -72.28603192496836982 43.6828540843487616, -72.28600490560316416 43.68291693672047415, -72.28588620126187436 43.68289006113845119))");
polys.push("Polygon ((-72.28589602195050645 43.68433169692817586, -72.28593831134796233 43.6842318680718904, -72.28601076405807646 43.68424827349547002, -72.28599743875228967 43.68427926664050176, -72.28601904738833639 43.68428427814698267, -72.2859895201430902 43.68435237078475808, -72.28589602195050645 43.68433169692817586))");
polys.push("Polygon ((-72.28590600560575297 43.68282557555416901, -72.28591491924603929 43.68280484279120657, -72.28596731850538504 43.68281670803118999, -72.2859742999082755 43.68280104591733704, -72.28604759125477131 43.68281764119358712, -72.28603192496836982 43.6828540843487616, -72.28590600560575297 43.68282557555416901))");
polys.push("Polygon ((-72.28590945765679976 43.68511442244121667, -72.28586702625821658 43.68521353198663348, -72.28580650506775385 43.68519988626187001, -72.28584893655688859 43.68510077673815317, -72.28590945765679976 43.68511442244121667))");
polys.push("Polygon ((-72.28592440480898063 43.6853130413998727, -72.2859283670603503 43.68530383293893493, -72.28595473648766756 43.68524255655098898, -72.28604878600053496 43.68526375480797697, -72.28604208960740607 43.68527941717559315, -72.28608479429642841 43.68528909461673493, -72.28606115288094713 43.68534403147322109, -72.28592440480898063 43.6853130413998727))");
polys.push("Polygon ((-72.28592440480898063 43.6853130413998727, -72.28606115288094713 43.68534403147322109, -72.286037512663043 43.68539896831783409, -72.28599480789401355 43.68538928995959481, -72.28598803197003519 43.68540506076281815, -72.28589407305082659 43.68538352534022806, -72.28592440480898063 43.6853130413998727))");
polys.push("Polygon ((-72.28593831134796233 43.6842318680718904, -72.28589602195050645 43.68433169692817586, -72.28579360088828309 43.68430904977225993, -72.28582437321328769 43.68424007917415963, -72.2858460253574151 43.68424498246952226, -72.28585935073398616 43.68421398934151512, -72.28593831134796233 43.6842318680718904))");
polys.push("Polygon ((-72.285947143520346 43.70090212954912801, -72.28594605381877614 43.70075347700727519, -72.28598828600181037 43.7007527018496944, -72.28598785308837193 43.70074029408974781, -72.28604473871057223 43.70074018476844913, -72.28604482345272686 43.70076335920030886, -72.28605570882552911 43.70076338752085121, -72.2860551119629946 43.70088520564242884, -72.28605080829883889 43.70088520646164909, -72.28605081241884989 43.70090211597280216, -72.285947143520346 43.70090212954912801))");
polys.push("Polygon ((-72.28595979455297993 43.68267136253194849, -72.28596864757739127 43.68265028716658094, -72.2859903210567154 43.68265514891751877, -72.28599918182499096 43.68263434532844514, -72.28611436269279977 43.6826601832087249, -72.28609653585638739 43.68270203669305118, -72.28595979455297993 43.68267136253194849))");
polys.push("Polygon ((-72.28595979455297993 43.68267136253194849, -72.28609653585638739 43.68270203669305118, -72.28607196384194822 43.68275972832810083, -72.28599860452693804 43.68274327114600908, -72.28600530754219733 43.68272755473417845, -72.28596347834806579 43.68271817043736149, -72.28597231975494708 43.68269741195892664, -72.28595094151314981 43.68269243699658233, -72.28595979455297993 43.68267136253194849))");
polys.push("Polygon ((-72.28596314653512422 43.6839538662398752, -72.28583174430033864 43.68399530798181729, -72.28582131596755289 43.68397719839074256, -72.28584284054990405 43.68397127635643074, -72.28582192905740555 43.68393599624337043, -72.28584323353632612 43.68392953716032423, -72.28583406163032521 43.6839136016298184, -72.28588338460701834 43.68389952829916467, -72.28589212714746282 43.68391471639483825, -72.28593340818945023 43.68390220232291909, -72.28596314653512422 43.6839538662398752))");
polys.push("Polygon ((-72.28598730699275166 43.70061252192318335, -72.28598928821264735 43.70059974465648622, -72.28597546438491861 43.70059819853870664, -72.28597854340181073 43.70058251531243343, -72.2859721316881263 43.70058164458600203, -72.28598427876029575 43.70051575246525744, -72.28603951058705945 43.70052107950355946, -72.28604419881634158 43.70049396482141901, -72.28611630108153463 43.70050093213096432, -72.28610377399084541 43.70056701263886367, -72.28610106822111447 43.70056701110097919, -72.28609050946303682 43.70062268248079818, -72.28598730699275166 43.70061252192318335))");
polys.push("Polygon ((-72.2859954483649858 43.68258765470152838, -72.28600452761146755 43.68256663031133513, -72.28602597481685166 43.68257144107762713, -72.28603504242767031 43.68255073357212837, -72.28607668887812565 43.68255996582172429, -72.28608340980728997 43.68254418630296954, -72.2861567602112558 43.68256064257955984, -72.28613218950471264 43.68261832972145697, -72.2859954483649858 43.68258765470152838))");
polys.push("Polygon ((-72.28599918182499096 43.68263434532844514, -72.28600804381810008 43.68261354083192316, -72.28598637035240415 43.68260867908423251, -72.2859954483649858 43.68258765470152838, -72.28613218950471264 43.68261832972145697, -72.28611436269279977 43.6826601832087249, -72.28599918182499096 43.68263434532844514))");
polys.push("Polygon ((-72.28603595951874183 43.68149367813346373, -72.28599333036413555 43.68159283296146356, -72.28596438493826781 43.68158618887000699, -72.28597107091992768 43.68157063636189719, -72.2859425609079409 43.68156400070660794, -72.28595539153754146 43.68153380139411723, -72.28593366702740752 43.68152888230744679, -72.28595653755388639 43.6814756939513984, -72.28603595951874183 43.68149367813346373))");
polys.push("Polygon ((-72.28605014265129114 43.70031393836804057, -72.28615600143672282 43.70032452820562696, -72.28615195869242882 43.7003467331364277, -72.28619809235172511 43.70035150816343616, -72.28619241570707743 43.70038141931362929, -72.28614611015819946 43.70037682072877061, -72.28614249156321137 43.70039600093959109, -72.28603649188231373 43.70038547485776093, -72.28605014265129114 43.70031393836804057))");
polys.push("Polygon ((-72.28605293688509903 43.6844858682113113, -72.286069357030172 43.68444767664611561, -72.28607058767185833 43.68444481226082132, -72.28620734971222817 43.6844757777874122, -72.28618969777920711 43.68451683466505386, -72.28605293688509903 43.6844858682113113))");
polys.push("Polygon ((-72.28605293688509903 43.6844858682113113, -72.28618969777920711 43.68451683466505386, -72.28616234590940337 43.68458045391626143, -72.28608881866647096 43.68456380599406685, -72.28609562221849671 43.68454795942717794, -72.28603246615740829 43.68453347843434642, -72.28605293688509903 43.6844858682113113))");
polys.push("Polygon ((-72.28607061055969041 43.68241459628844581, -72.28607954057424934 43.68239353759767596, -72.28610119580250171 43.68239844173000108, -72.28611013232116989 43.68237765482222557, -72.28622521951999147 43.68240371361658703, -72.28620723993390129 43.6824455328452288, -72.28607061055969041 43.68241459628844581))");
polys.push("Polygon ((-72.28607061055969041 43.68241459628844581, -72.28620723993390129 43.6824455328452288, -72.28618245804041464 43.68250317704033847, -72.28610915833264983 43.68248657919457401, -72.28611591846816964 43.68247087506698989, -72.28607412334567073 43.68246141141948158, -72.28608304051253697 43.68244067052243906, -72.28606168176982294 43.6824356540717389, -72.28607061055969041 43.68241459628844581))");
polys.push("Polygon ((-72.28608618777529671 43.68440852968099364, -72.28610434727815459 43.68436629277869798, -72.2861676182668873 43.68438050758934565, -72.28617446456436824 43.68436460048104664, -72.28624799158643555 43.68438124835001446, -72.28622294850988794 43.68443949609631716, -72.28608618777529671 43.68440852968099364))");
polys.push("Polygon ((-72.28608618777529671 43.68440852968099364, -72.28622294850988794 43.68443949609631716, -72.28620734971222817 43.6844757777874122, -72.28607058767185833 43.68444481226082132, -72.28608618777529671 43.68440852968099364))");
polys.push("Polygon ((-72.28609358118187345 43.68150672561333892, -72.28605767444568642 43.68159024674582724, -72.28602903201678487 43.6815837612410931, -72.28602227579632711 43.68159947704557311, -72.28599333036413555 43.68159283296146356, -72.28603595951874183 43.68149367813346373, -72.28609358118187345 43.68150672561333892))");
polys.push("Polygon ((-72.28610250169180063 43.70600372255521648, -72.28629708884528782 43.70607921207546553, -72.28629308118510721 43.70608389523681581, -72.28641309754770816 43.70613044126704949, -72.28647127493265145 43.70616934973777745, -72.2864595086429631 43.70620818923310225, -72.2863550250310567 43.70628910182742288, -72.28630917777914533 43.7062987227551929, -72.28630236729851788 43.70630015207570551, -72.28629719701056899 43.70629663924911767, -72.28629765278812158 43.70629631995549857, -72.28624712310775635 43.70626198097455273, -72.28595955180995247 43.70648567720940036, -72.28590849613890157 43.70645098090377445, -72.28583781840615075 43.70650571329903755, -72.28578124266721261 43.70646726656665493, -72.28575495897256076 43.70648762078428007, -72.28573288095050486 43.70647261657426697, -72.28575873383510952 43.70645259681896988, -72.28568514052035709 43.70640258367050279, -72.28566703131164672 43.70641660664495731, -72.28562701484997888 43.70638941277407241, -72.28564596776668338 43.70637466788529224, -72.28562696474004667 43.70636175405407187, -72.28563854394870702 43.70635278790919642, -72.28563462024726505 43.70635008286067347, -72.28568727007554173 43.70630931282283882, -72.28569128361252183 43.70631194627790705, -72.2857556981083178 43.70626131348790011, -72.28573800703081531 43.70624929173374085, -72.28597154555994564 43.70606844118473333, -72.28602703856920186 43.70610610973617582, -72.28610250169180063 43.70600372255521648))");
polys.push("Polygon ((-72.28610579489001964 43.70594785118333903, -72.28630284975946552 43.70567959884444775, -72.28627478091786429 43.70566836698307611, -72.28628850872691203 43.70564975752961345, -72.28629359844539692 43.70564846534725945, -72.28628314330254057 43.70563006529283712, -72.28625144410573 43.70563954469766088, -72.28622680961231595 43.70563373780067451, -72.28628724222750179 43.70549355992804408, -72.2865035592982963 43.70554849713189327, -72.28649585956547696 43.70556620536022052, -72.28648892924869074 43.7055682779881991, -72.286498117037155 43.7055843276265108, -72.28653618863309305 43.70557294146016858, -72.28653508615965961 43.70557443614637805, -72.28656054304222778 43.70558431671101829, -72.28648787781874319 43.70568309597001644, -72.28667004398802476 43.70575356054713012, -72.28663340780961732 43.70580322863243339, -72.2865993156478055 43.70578999357440608, -72.28656469737269674 43.70583743113297714, -72.28661431676793825 43.70585762049314837, -72.2864131180730709 43.70613038625181446, -72.28629308118510721 43.70608389523681581, -72.28612152098895649 43.70601725366449131, -72.28615762341721052 43.70596823128394703, -72.28610579489001964 43.70594785118333903))");
polys.push("Polygon ((-72.28610656863007478 43.68233095697641488, -72.28611572487490378 43.68230995016060092, -72.28613715382090277 43.68231480240840625, -72.28614629719049844 43.6822941124840014, -72.28618790957023066 43.68230342408423184, -72.28619468762839517 43.6822876577496757, -72.28626797842595408 43.6823042546895195, -72.28624319784124452 43.68236189439170403, -72.28610656863007478 43.68233095697641488))");
polys.push("Polygon ((-72.28610857637690401 43.68161892882007891, -72.2861512053592179 43.68151977395056207, -72.28623063240883084 43.68153775886965917, -72.28620776340713405 43.68159095357209054, -72.28618612456497772 43.68158604757019248, -72.28617308456847468 43.68161637945299702, -72.28614450427026838 43.68160990804161514, -72.28613759332630195 43.68162540957494144, -72.28610857637690401 43.68161892882007891))");
polys.push("Polygon ((-72.28611013232116989 43.68237765482222557, -72.28611907007390869 43.68235686790703198, -72.28609741361908902 43.68235196378472551, -72.28610656863007478 43.68233095697641488, -72.28624319784124452 43.68236189439170403, -72.28622521951999147 43.68240371361658703, -72.28611013232116989 43.68237765482222557))");
polys.push("Polygon ((-72.28612497528665415 43.70827224798779298, -72.28621765482772332 43.70831389029076064, -72.28610036958130536 43.70845126465317065, -72.28612084859767606 43.70846164392053623, -72.28610090585506498 43.7084836991704293, -72.28608095623033591 43.7084740028798393, -72.28602234583821939 43.70854265067712419, -72.28583009438300166 43.70845626989385124, -72.28602540382138386 43.70822750892986619, -72.28612497528665415 43.70827224798779298))");
polys.push("Polygon ((-72.28612497528665415 43.70827224798779298, -72.28629555500548065 43.70806434996278256, -72.28639489086965852 43.70811079568632351, -72.28621765482772332 43.70831389029076064, -72.28612497528665415 43.70827224798779298))");
polys.push("Polygon ((-72.28613903073996028 43.70776747682263874, -72.28615854422403686 43.70773894432503681, -72.28611743042070259 43.70772409646556866, -72.28618140364619649 43.70763075057316627, -72.28622260420219447 43.70764559343933087, -72.28622152315668359 43.70764724551713698, -72.28626322988790776 43.70766232234193893, -72.28625267042302482 43.70767791379634559, -72.28646407330761292 43.70775404540670905, -72.28651682234585962 43.70769394287112419, -72.2865977819820813 43.70773133351664796, -72.28655044813460506 43.7077853447864868, -72.28660697870830631 43.70780575767964393, -72.28653506210629587 43.70791060830733699, -72.2865368890912805 43.7079112680473969, -72.28652593751199618 43.7079272144781541, -72.28644396331162625 43.70789758784091816, -72.28645491370383525 43.7078816450246137, -72.28613903073996028 43.70776747682263874))");
polys.push("Polygon ((-72.28614473575112243 43.70239028927684899, -72.28614255040139369 43.70238408796906526, -72.28614377134279323 43.70238386173603828, -72.28613303514475774 43.70235340770407362, -72.28613181420392664 43.7023536339369727, -72.28612962761633298 43.70234743263561228, -72.28613084855702198 43.70234720640273451, -72.2861201519697687 43.7023168628627019, -72.2861189310388994 43.70231708999549625, -72.2861167444539916 43.70231088869382319, -72.2861179666253264 43.70231066155434263, -72.28610723045380837 43.70228020751940079, -72.2861060095236212 43.70228043465204593, -72.28610382294139924 43.70227423335008154, -72.28611237072927054 43.70227264701479442, -72.28611268380582544 43.70227353278263394, -72.28614473894867842 43.70226758513952348, -72.28613911718278473 43.70225163854576067, -72.28618857372967454 43.70224246165234661, -72.28619419550774694 43.70225840824361541, -72.28622625063424323 43.70225246057773916, -72.28622593755613934 43.70225157481019096, -72.2862344865873041 43.70224998935910321, -72.28623667194146662 43.70225619066524558, -72.28623545100300873 43.70225641689924601, -72.2862461872349229 43.70228687092193098, -72.28624740816469796 43.70228664378779371, -72.286249594771391 43.70229284598690356, -72.2862483725916718 43.70229307222778914, -72.28625907047042176 43.70232341484881999, -72.286260291410116 43.70232318861455667, -72.28626247676969285 43.70232938992009508, -72.28626125583912199 43.70232961705440289, -72.28627199208828813 43.70236007017409463, -72.28627321302869291 43.70235984393967499, -72.28627539963153481 43.70236604523818613, -72.286266851834867 43.7023676315856946, -72.28626653875555519 43.70236674581830982, -72.2861529717171436 43.70238781716400922, -72.28615328480418611 43.7023887038317369, -72.28614473575112243 43.70239028927684899))");
polys.push("Polygon ((-72.2861512053592179 43.68151977395056207, -72.28610857637690401 43.68161892882007891, -72.28607956067382645 43.68161244805110499, -72.28608631688071284 43.68159673224334938, -72.28605767444568642 43.68159024674582724, -72.28609358118187345 43.68150672561333892, -72.2861512053592179 43.68151977395056207))");
polys.push("Polygon ((-72.28616406951364581 43.70006034937920703, -72.28615879797065702 43.70008731241838262, -72.28621366921636593 43.70009295905060043, -72.28621136878001607 43.70010472907875965, -72.28631806740595778 43.7001157093435566, -72.28630508026185453 43.70018214249739685, -72.2862632738304427 43.70017784089328217, -72.28625920326201992 43.70019866437831269, -72.28613191488437906 43.7001855670845103, -72.28612865154271105 43.70020225938856129, -72.28614237590079483 43.70020367191725796, -72.28613255995635711 43.70025388217997175, -72.28603483020614817 43.70024382521428663, -72.28604464623995796 43.70019361585941908, -72.2860508085932878 43.70019424941566655, -72.28605814257579709 43.7001567318354347, -72.28604067138851974 43.70015493367006343, -72.28604137970671673 43.7001513124675327, -72.28601583487468929 43.70014868408313191, -72.2860356873158878 43.70004713819729147, -72.28616406951364581 43.70006034937920703))");
polys.push("Polygon ((-72.28618288025963068 43.68218155775632994, -72.28619179248983073 43.68216082677734846, -72.28619901377064139 43.68216246176601203, -72.28621712166135183 43.68212034301845392, -72.28633582586502371 43.68214721826187485, -72.28630880834843708 43.68221006890264135, -72.28618288025963068 43.68218155775632994))");
polys.push("Polygon ((-72.28618288025963068 43.68218155775632994, -72.28630880834843708 43.68221006890264135, -72.28629306847579983 43.68224668260914001, -72.28621983930396766 43.68222992153867779, -72.28622659556938856 43.68221420842417047, -72.2861739680233768 43.68220228873458666, -72.28618288025963068 43.68218155775632994))");
polys.push("Polygon ((-72.28621712166135183 43.68212034301845392, -72.28623522951777147 43.68207822336787416, -72.28622801321600377 43.68207658925452819, -72.28623692664639577 43.68205585736509988, -72.28636284454751149 43.68208436580763987, -72.28633582586502371 43.68214721826187485, -72.28621712166135183 43.68212034301845392))");
polys.push("Polygon ((-72.28622074838690992 43.7071381353543913, -72.28613956961952169 43.70720261224492731, -72.28617463394137133 43.70722596249454739, -72.28614530946859418 43.70724913338137441, -72.28614363913290219 43.70724802005344145, -72.28611814323269869 43.70726814686631911, -72.28611982854923212 43.70726926911405741, -72.28609084621618308 43.70729217351354379, -72.28605569877194625 43.70726882458900775, -72.28597455381269299 43.70733288354787049, -72.28593735687125843 43.70730822709693086, -72.28586842163147708 43.70726234083585382, -72.2858554226610579 43.70725368872749783, -72.2859366967821444 43.70718951934462382, -72.28590141018678139 43.70716601991520633, -72.28593039378222329 43.70714311645648564, -72.28593226010991657 43.70714434663417336, -72.28595781485935845 43.70712415023849928, -72.28595596825273617 43.70712290735345817, -72.2859851979479231 43.70709980903340153, -72.28602040706839205 43.70712325575323831, -72.28610188695374461 43.70705898072919382, -72.28622074838690992 43.7071381353543913))");
polys.push("Polygon ((-72.28623692664639577 43.68205585736509988, -72.28624584006145426 43.68203512457488813, -72.286298238703381 43.68204698876835579, -72.28630521870205428 43.68203132753996698, -72.28637851043802698 43.68204792260459612, -72.28636284454751149 43.68208436580763987, -72.28623692664639577 43.68205585736509988))");
polys.push("Polygon ((-72.28629085002710042 43.68190207997191976, -72.28629977989970712 43.68188102216301161, -72.28632143495131857 43.68188592535498316, -72.28633037131969274 43.68186513842906038, -72.28644545639816954 43.68189119791601627, -72.28642747711448635 43.68193301718120836, -72.28629085002710042 43.68190207997191976))");
polys.push("Polygon ((-72.28629085002710042 43.68190207997191976, -72.28642747711448635 43.68193301718120836, -72.28640269562858123 43.68199066052670787, -72.28632939773672206 43.6819740637106193, -72.28633615775861188 43.68195835956927908, -72.28629436295912569 43.68194889599955388, -72.28630327996674509 43.68192815418434805, -72.28628192014832621 43.68192313778009606, -72.28629085002710042 43.68190207997191976))");
polys.push("Polygon ((-72.28629779686548318 43.70390687612680125, -72.28630080196614927 43.703797164390906, -72.2862970210891973 43.70379711018167512, -72.28629818314632871 43.70375466760796712, -72.28627959517410773 43.70375439934530704, -72.28628026042709109 43.70373009217829008, -72.28629884839179454 43.70373036044091464, -72.28629993756538852 43.70369059865601713, -72.28630371843563296 43.70369065286517696, -72.28630618143080255 43.70359708943396271, -72.286306726028144 43.70358094381171554, -72.28646370082161354 43.70358320335603963, -72.28650079848526389 43.7035837384429442, -72.28649779499626504 43.70369345017920182, -72.2865015758667937 43.70369350438182465, -72.28650057679762142 43.70372995704023111, -72.2865204254704139 43.70373024363208714, -72.28651950623408595 43.70376384715112295, -72.2864996612812547 43.7037635614390183, -72.28649865850698575 43.70380001591717445, -72.28649487887037139 43.70379996170778725, -72.28649187411436117 43.70390967254660097, -72.28629779686548318 43.70390687612680125))");
polys.push("Polygon ((-72.28632680750193629 43.68181844148678294, -72.2863359623443813 43.68179743375908686, -72.28635739237417113 43.68180228686030375, -72.28636653558277203 43.68178159601733057, -72.28640814764050049 43.68179090754014737, -72.28641492558466553 43.68177514119177829, -72.28648821582505946 43.68179173889528499, -72.28646343565716847 43.68184937864785411, -72.28632680750193629 43.68181844148678294))");
polys.push("Polygon ((-72.28632736663496416 43.70077829721662255, -72.28633775089272717 43.70089625482997775, -72.28618758105123732 43.70090321360019914, -72.28617951698818445 43.70082465007295269, -72.28618110026614829 43.70082455508536157, -72.28617725925825255 43.7007909323488235, -72.28625668861323561 43.70078799153669991, -72.28624629057748052 43.70068879675766027, -72.28634807323241773 43.70068274559499599, -72.28635724975949017 43.70077691291989908, -72.28632736663496416 43.70077829721662255, -72.28632736663496416 43.70077829721662255))");
polys.push("Polygon ((-72.28633037131969274 43.68186513842906038, -72.28633930768195626 43.68184435150241995, -72.28631765264391618 43.68183944831369558, -72.28632680750193629 43.68181844148678294, -72.28646343565716847 43.68184937864785411, -72.28644545639816954 43.68189119791601627, -72.28633037131969274 43.68186513842906038))");
polys.push("Polygon ((-72.28633544978475811 43.7016170479352013, -72.28606578374218827 43.70163208435101154, -72.28605058288421503 43.7014946385068086, -72.28632123700299417 43.70147995499637972, -72.28633544978475811 43.7016170479352013))");
polys.push("Polygon ((-72.28635697986254627 43.70717435530541906, -72.28635826965275157 43.70717333573999497, -72.2863174147371268 43.70714612865928217, -72.28633891909375109 43.70712913586502424, -72.28624419595691108 43.70706599318231156, -72.28618392466837861 43.70711357416683995, -72.28611488970379639 43.70706763908979298, -72.28617533404471374 43.70701987359016272, -72.28611162957638214 43.70697745047369409, -72.28614146588579104 43.70695387269144305, -72.28612242902769935 43.70694119584442916, -72.28617187187498416 43.70690212518856299, -72.28619090748101428 43.70691480113416105, -72.28622074249692275 43.70689122423804918, -72.28627878135682749 43.70692987433351817, -72.28628560075206622 43.70692448558152421, -72.28634941398365754 43.70696698181703255, -72.28634262331014781 43.70697238841835741, -72.28645428638129999 43.70704675027967312, -72.28648768876342956 43.70704571769249469, -72.28652265967821222 43.70706902963967622, -72.28649152086272522 43.70709310601937148, -72.2864948253085231 43.70709530855980773, -72.28647978831124021 43.70710718004804818, -72.28649966983151387 43.70712041929543545, -72.28639737506809126 43.707201256142163, -72.28635697986254627 43.70717435530541906))");
polys.push("Polygon ((-72.28636236495421485 43.70267752835015074, -72.2861996143825678 43.70271196863397023, -72.2862008506907614 43.70271504105662785, -72.28615970868833074 43.70272374716111585, -72.28616376782161979 43.70273384189614774, -72.2861129462755656 43.70274459678979184, -72.28610888714077021 43.70273450115293201, -72.28606774511135313 43.70274320722445793, -72.28606651257743465 43.70274013928024459, -72.28589952409200237 43.70277546976463157, -72.28584605555012388 43.70264247953829795, -72.28584182294090965 43.7026433692294205, -72.28582664352991571 43.70260562710757313, -72.28581273016845898 43.70260856558167006, -72.28579860881332309 43.70257345221603629, -72.28581252458369022 43.70257050743015981, -72.28579699493791111 43.70253188153665036, -72.28579941512830942 43.70253136979115993, -72.28574612021201062 43.70239881240327406, -72.28578181634213706 43.70239125922650913, -72.28578111095842473 43.70238950341929041, -72.2858022885184397 43.70238502699258021, -72.28580299260656261 43.70238677740627509, -72.28584050354538704 43.70237883995371675, -72.28583979816011151 43.70237708414688882, -72.28586278801587639 43.7023722198642659, -72.28586349463306249 43.70237397476423524, -72.28589979484399919 43.70236629316907084, -72.2860063842902747 43.70263140777674238, -72.28606023260179825 43.70262001818362307, -72.28599978900965084 43.7024696792592664, -72.28615830404815767 43.70243613617806488, -72.28620426597095161 43.70255045459072107, -72.28609929557215708 43.70257266737329616, -72.28611377501734125 43.70260868332677262, -72.28631736395202267 43.70256560166862414, -72.2863283051086114 43.70259281523562578, -72.28633072528752734 43.70259230257889982, -72.28633690189749927 43.70260766561206367, -72.28633448170873521 43.70260817736891568, -72.28634507018414013 43.70263451348223782, -72.28634749036456242 43.70263400082513527, -72.28635366698321718 43.70264936385725463, -72.28635124679293256 43.70264987561446901, -72.28636236495421485 43.70267752835015074))");
polys.push("Polygon ((-72.28643638981743891 43.70553258368600069, -72.28624354486628079 43.70549298044100794, -72.28624504741996759 43.7054891317192542, -72.28611905422695827 43.70546325638707685, -72.2860989687294051 43.70551472834348061, -72.28605409931410009 43.705505514512339, -72.28606730068237596 43.70546830899569812, -72.2859640630829432 43.70544710842383296, -72.28598878322480914 43.70538375752319382, -72.28609067087849382 43.7051226573099143, -72.28611539200711888 43.70505930727318855, -72.28613054563844287 43.70506241857891894, -72.28613260541801822 43.70505713933535219, -72.28613988259402845 43.70505863360670418, -72.28614606316946833 43.70504279586866403, -72.28621095726161627 43.70505612423247754, -72.28620271692824417 43.70507724121873849, -72.28620065715416843 43.70508252046352737, -72.2862605419241504 43.7050948183739365, -72.28627703865429055 43.70505294343143987, -72.28633511065559958 43.70506487040207588, -72.28632875225231658 43.70508114564584901, -72.28639852021065337 43.70509583088021799, -72.28640156132914285 43.70508801982867908, -72.2864669311024528 43.70510138597081351, -72.28651070695509873 43.70498920300327228, -72.28663818693460996 43.70501544156881835, -72.2865942813861011 43.70512753888174018, -72.28660532772501313 43.70512986684257584, -72.2865764863550595 43.70520377549089375, -72.28656557116927672 43.705201534122331, -72.28651252512867131 43.70533747328930474, -72.28652344157789855 43.70533971465604139, -72.28649460125927817 43.7054136241754847, -72.28648368478839359 43.70541138190610297, -72.28643638981743891 43.70553258368600069))");
polys.push("Polygon ((-72.28646940889215955 43.70345818664450377, -72.28646879686702675 43.70347669440468508, -72.28646722094286758 43.70347666694750899, -72.28646441199227013 43.70356167443969042, -72.28646650672841645 43.70356172248536097, -72.28646632491246748 43.70356719586786909, -72.28646423041722358 43.70356717122259482, -72.28646370082161354 43.70358320335603963, -72.286306726028144 43.70358094381171554, -72.28630618143080255 43.70359708943396271, -72.28625932676722243 43.70359627414963199, -72.28626824417243313 43.70332615943186738, -72.28635666815522143 43.70332769712018006, -72.28636665271326933 43.70331948119636678, -72.28644131407835971 43.70332078021113631, -72.28645076987528739 43.70332843799803868, -72.28645075429882638 43.70332933454750446, -72.28653917965051789 43.70333088378805542, -72.28653493503554728 43.70345932631826003, -72.28646940889215955 43.70345818664450377))");
polys.push("Polygon ((-72.28647401505490677 43.70163510801452134, -72.28645304814028805 43.70144660576959694, -72.2864464748800799 43.70144692313242274, -72.28644350402022667 43.70141456928313772, -72.28644945231755514 43.70141428231119107, -72.28644511815809892 43.70137531857188407, -72.28643992379436156 43.70137556995331352, -72.28643695294196903 43.70134321610341743, -72.28644152358486963 43.70134299510606013, -72.28643718944546492 43.70130403226592364, -72.2864333727251136 43.70130421677284005, -72.28643040188021018 43.7012718629223329, -72.28643359363137222 43.70127170790610194, -72.28642925950275355 43.70123274506512701, -72.28642682166311317 43.7012328626910076, -72.28642385082567046 43.70120050883987517, -72.28642566494742994 43.70120042159788198, -72.28642133082961152 43.70116145875606861, -72.2864176543779422 43.70112841027933825, -72.28642353878599636 43.70112806605096267, -72.2864225775013125 43.70111748649146222, -72.28643682637680001 43.7011168052880592, -72.28643649375378288 43.7011131789271019, -72.28648108898876501 43.70111102447474849, -72.2864814243180831 43.70111467242246306, -72.28653518215124052 43.70111210103687682, -72.28653484405940333 43.7011084261022944, -72.28657943927764506 43.70110627071160536, -72.28657977884456898 43.70110996813968285, -72.28663353666881619 43.70110739670784028, -72.28663319434853918 43.70110367319296074, -72.28667778955930601 43.70110151776395213, -72.28668019316478421 43.70112769303516842, -72.28670198087523602 43.7011264938705466, -72.28670179309749244 43.70112404311042553, -72.28670088657480619 43.70112407863009452, -72.28670092575298156 43.70112450954901817, -72.28670012224185371 43.70112454901022403, -72.28669861713072464 43.70110815347884881, -72.28681159190665539 43.70110269283888016, -72.28681352720886366 43.7011211021817374, -72.28682413812519769 43.70112073588923352, -72.2868241762365642 43.70111504546763115, -72.28683289621629626 43.70111453552254233, -72.28683238054577487 43.70110892011082626, -72.28716334897919182 43.70109292357356878, -72.28718340714672763 43.70131135511242348, -72.28713404163987377 43.70131447450179252, -72.28713545643186933 43.7013300397565132, -72.28714550040233178 43.70132955140262965, -72.28715269360755258 43.70140799087216266, -72.28719161067751031 43.70140571215489445, -72.28719201674454098 43.70140935791618375, -72.28717379931738662 43.70141042438417855, -72.28717369811334947 43.70140951316716382, -72.28715294515268397 43.70141072840617369, -72.2871530178111783 43.70141151826933168, -72.28713829808502567 43.70141250273984923, -72.28713973346280852 43.70142813898769418, -72.28715734034739171 43.7014272972555986, -72.28715725766831213 43.70142637783740014, -72.2871578900799534 43.70142634830246209, -72.28715807067152355 43.70142834096733964, -72.28716313608414623 43.70142809655375515, -72.28717875541468629 43.70159817275465031, -72.28701630972203418 43.70160602551516149, -72.28701787130161449 43.7016200670630397, -72.28688312779739533 43.70162795559670599, -72.28688141320385796 43.70161254677763907, -72.28687996363575508 43.70161261674764575, -72.28687984634676411 43.7016113482916424, -72.28647401505490677 43.70163510801452134))");
polys.push("Polygon ((-72.28652311170847611 43.70063761947954362, -72.28676453500939658 43.70062539490083964, -72.28676318176938764 43.70061133691567079, -72.28674031077819961 43.70061249516520263, -72.28673671902311071 43.70057515922327696, -72.28684377057332711 43.70056973878438811, -72.2868431062923662 43.70056282448365437, -72.28685676563888762 43.70056213292555469, -72.28688310496745828 43.70083592679827689, -72.2868466947612518 43.70083777057812569, -72.28684282506377201 43.7008435240923987, -72.28683042050323593 43.70084415303674774, -72.28682548646887085 43.70083884421774201, -72.28675000385291582 43.70084266678022544, -72.28674452791258886 43.70078574123171222, -72.28677978865060538 43.70078395592431519, -72.2867763734245159 43.70074846416168413, -72.28653477307514663 43.70075884459088655, -72.28653836347669426 43.70079618054537463, -72.28657362422764265 43.70079439530152143, -72.28657910123848751 43.70085131995236338, -72.28644600005185339 43.70085805958067482, -72.28642032693313979 43.7005911798999449, -72.28654103913076767 43.70058506732989656, -72.28654463076513537 43.70062240327862924, -72.28652175852452899 43.70062356149120575, -72.28652311170847611 43.70063761947954362))");
polys.push("Polygon ((-72.28652778568628889 43.70404624630588586, -72.28652659963063343 43.70417472263687131, -72.28643813726355916 43.70417427706804858, -72.28643812543647584 43.70417517629724813, -72.28642836239700387 43.70418262776979645, -72.28640189369436087 43.70418249766425589, -72.2863922578818574 43.70417496145926606, -72.28639224861929335 43.70417406234441415, -72.28638992459980273 43.70417403984227889, -72.2863899252986073 43.70417495070442016, -72.28638014972655412 43.70418239053995535, -72.28635367978337456 43.70418226042996679, -72.28634404397691071 43.70417472422085581, -72.28634403596495872 43.70417382599929823, -72.286255599651696 43.70417338014795661, -72.28625678628617379 43.70404490381631746, -72.28634658225254839 43.70404535579655914, -72.28635035330020742 43.70390763348138563, -72.28644156611133553 43.70390894806877213, -72.28643781984870031 43.70404580438974307, -72.28652778568628889 43.70404624630588586))");
polys.push("Polygon ((-72.28654134890389571 43.70909274408033696, -72.28644327006909975 43.70904623857311577, -72.28643193603015504 43.70905880642386876, -72.2863975335262694 43.7090424812756666, -72.28640883269976314 43.70902990101643582, -72.28631121503148904 43.70898357740800577, -72.28631291778137324 43.70898168974271414, -72.28623649324765665 43.70894541650355336, -72.28615155218530219 43.70903961590184394, -72.28603225794168452 43.70898301199125058, -72.28612778865290522 43.70887708145455264, -72.286120937111221 43.70887382975133306, -72.28618411746393235 43.70880481961383168, -72.28619028155125648 43.70880746299557984, -72.28628701189136052 43.70870024232883821, -72.28634224884069681 43.70872640927331787, -72.28634840175473641 43.70871953812606847, -72.28635895147849055 43.70872454289273179, -72.28635279974093919 43.70873140773371546, -72.28640601435026269 43.70875661714205052, -72.28633520981547633 43.70883526792339069, -72.28634449031872578 43.70883967742909704, -72.28633758981489166 43.70884733028463387, -72.28632831679223614 43.70884292433808582, -72.28629628182764577 43.7088785083391258, -72.28637314917476431 43.70891513376332682, -72.28637486418872982 43.70891323252964611, -72.28641754962799837 43.70893349285927343, -72.28644146281480687 43.70890697600925989, -72.2863919890012312 43.70888333314967156, -72.28641357993821259 43.70885939227960648, -72.28648825129957345 43.70889482704718176, -72.28651467053785495 43.70886599692751417, -72.28654434753518387 43.70888034052486404, -72.286561639767001 43.70887704791537232, -72.28657558216237078 43.70888365167788692, -72.28657930500229156 43.70889694433967065, -72.28660874300521755 43.70891060876768819, -72.28653702395216385 43.70899020789951095, -72.28660480905729457 43.70902237489854514, -72.28654134890389571 43.70909274408033696))");
polys.push("Polygon ((-72.28654134890389571 43.70909274408033696, -72.286577508808179 43.70905264631918641, -72.28663066405839288 43.7090769954817091, -72.28669010754515512 43.70900769481347226, -72.28669168696197289 43.70900840809758137, -72.28671084631287158 43.70898607167583805, -72.28680664329476713 43.70902931129962354, -72.28678748396602316 43.7090516477371267, -72.28678906213512789 43.70905236012659145, -72.28673010436193636 43.70912110737140921, -72.28674931664434666 43.70912977877396344, -72.28672909306560257 43.70915335676321689, -72.28670988076920878 43.70914468445731416, -72.2866509127323269 43.70921341641487601, -72.28664933331985765 43.70921270403027847, -72.2866301738747552 43.70923504044139207, -72.28653437668870652 43.7091918006724427, -72.28655338033436806 43.70916939401708134, -72.2865519579865321 43.70916875188439832, -72.28659699070755096 43.70911625171405746, -72.28654134890389571 43.70909274408033696))");
polys.push("Polygon ((-72.28661137707844375 43.7077376124364676, -72.2865977819820813 43.70773133351664796, -72.28651682234585962 43.70769394287112419, -72.28647326824760455 43.70767382769421516, -72.2865255991075486 43.70761216310910413, -72.28638992627797677 43.70754934522439328, -72.2864146953960045 43.7075209353975751, -72.28641752170638313 43.70752224946856046, -72.28645391725382296 43.70748077965993872, -72.28645120323605511 43.70747952618535948, -72.2864912856089461 43.70743354145037785, -72.28662851759698071 43.70749681159244915, -72.2866668904428451 43.70745302682573907, -72.28671050279317001 43.70747314521396731, -72.28679135688209101 43.7075104246884294, -72.28680518252187426 43.70751680404196549, -72.28675173833303802 43.70757779434689638, -72.28681875333143125 43.70760869991470798, -72.28679359531602699 43.70763716234209539, -72.28679054096433276 43.70763575411080382, -72.28675405349278549 43.70767744053961223, -72.28675723251684815 43.70767890659970334, -72.28673240459146143 43.70770725921480704, -72.28666536365773254 43.70767637173890563, -72.28661137707844375 43.7077376124364676))");
polys.push("Polygon ((-72.28667233529986902 43.70646445982842465, -72.28670741906812225 43.70643471139057823, -72.28669470468180691 43.70642682018750236, -72.28672072229032608 43.70640475887419285, -72.28673343667533402 43.70641265007441234, -72.28676909232304126 43.70638241698037518, -72.28683494318966041 43.70642328717818259, -72.28688983919711575 43.70637673948511548, -72.28695308267901964 43.70641597754455887, -72.28686332412402749 43.70649206014829247, -72.2868262085710569 43.70646902455801097, -72.28676544686901195 43.70651984154702774, -72.2867417412770692 43.70650512898222217, -72.28674010171540942 43.70650651857604885, -72.28667233529986902 43.70646445982842465))");
polys.push("Polygon ((-72.28670666666342015 43.71011328717198552, -72.28676228195627118 43.71005409426434341, -72.28676836504109815 43.71005717008452507, -72.28681949255096129 43.71000293924780777, -72.28681239887369259 43.70999968620029819, -72.28690068627899734 43.70990593080110642, -72.28697823259201982 43.70994410113718942, -72.28697449423466992 43.70994832742538705, -72.28703607638460937 43.70997890230970029, -72.2870323361539846 43.70998294679696272, -72.28708505027472597 43.71000918017217884, -72.28700998418510437 43.71008914607831741, -72.28695853815317207 43.7100636375393492, -72.28695205316550698 43.71007043941490622, -72.28687830542895654 43.7100338955679959, -72.28677255631234289 43.71014585047419843, -72.28670666666342015 43.71011328717198552))");
polys.push("Polygon ((-72.28670828074208998 43.7048407421662759, -72.28660878415270474 43.70483983634830594, -72.28660880078206219 43.70483892179204588, -72.2865555825723618 43.70483843726528761, -72.28655715311715824 43.70474764008704227, -72.28656093757180656 43.70474767446679465, -72.28656139131388159 43.70472139370676246, -72.28656387594867283 43.70472134872948544, -72.28656454257394159 43.70468418232806584, -72.28656203491398458 43.70468415992533551, -72.28656210474561306 43.70467672950954352, -72.28655275270642733 43.70467663441777972, -72.28655307178837575 43.7046601614966832, -72.28656244930294861 43.70466020064624502, -72.28656250367602354 43.7046570492235773, -72.28655871922710219 43.70465701484383914, -72.28656028562136271 43.70456641749968441, -72.28661350234976624 43.70456690203243255, -72.2866135177291369 43.70456598658283554, -72.28671301386555115 43.70456689239942705, -72.28671299847842135 43.7045678069490009, -72.28676455997683092 43.70456827608869332, -72.28676408348303539 43.70459583146575255, -72.28677433250308582 43.70459592437414642, -72.28677373961514263 43.70463024167133881, -72.28676364816612931 43.70463014970818705, -72.28676316157411463 43.70465829018201731, -72.28674360899312035 43.7046581118341777, -72.28674307765766116 43.70468371796732043, -72.28675961154516472 43.70468388568989582, -72.28676453461253004 43.70468424871004487, -72.2867692952832499 43.70468522645539622, -72.28677374932104271 43.7046867882061747, -72.28677776225686102 43.70468888788855111, -72.2867812118421682 43.70469146136112926, -72.28678399305786684 43.70469443088804695, -72.28678602059555658 43.70469770512553254, -72.28678723511620774 43.70470118448839258, -72.28678759708432722 43.70470476478350719, -72.286787096674189 43.70470833535625133, -72.28678574891894471 43.70471178991736139, -72.28678359489539673 43.70471502113622364, -72.28678070060414029 43.70471793234776214, -72.2867771532197736 43.70472043487258418, -72.2867730611374526 43.7047224525171174, -72.28676854778821337 43.70472392340727197, -72.28676375043548319 43.70472480359518386, -72.28675881644400647 43.70472506617945641, -72.28674245420516797 43.70472494162878974, -72.28674201882252248 43.70475010710928387, -72.28676157143341641 43.70475028545719454, -72.286761079681213 43.70477876798315009, -72.28677117115516637 43.7047788599463658, -72.2867705770241713 43.7048131772491999, -72.2867603279578077 43.70481308344069049, -72.28675985785163505 43.70484029585711028, -72.28670829612003956 43.7048398267167002, -72.28670828074208998 43.7048407421662759))");
polys.push("Polygon ((-72.28679928184278936 43.70299621655219369, -72.28696724945491781 43.70296006038148562, -72.28697324659563606 43.70297472320226007, -72.28697797981493522 43.70297425468326935, -72.28698275495969483 43.70297436287841464, -72.28698743925062331 43.70297504490805096, -72.28699190222246784 43.70297628167878656, -72.2869960194551453 43.70297803876333376, -72.28699967878584687 43.70298026726685947, -72.28700277537460295 43.70298290655396301, -72.28700522656329497 43.7029858814677965, -72.28700696203476639 43.70298911048407575, -72.28700793495923449 43.70299250385045298, -72.2870081170692913 43.70299596721352486, -72.28700750489062443 43.70299940428512286, -72.28700611356690331 43.7030027195761761, -72.28700398309993602 43.70300582196292538, -72.28700117214668808 43.70300862472072367, -72.2869977592970514 43.70301104911731471, -72.28699383815785495 43.70301302893989259, -72.2869895185842779 43.70301450958827871, -72.28701291922816097 43.7030717257503909, -72.28676396243110958 43.70312531552207957, -72.28671829183645059 43.70301365005897765, -72.28673523630106956 43.70301000288143456, -72.28673498099985295 43.70300593687121449, -72.28673565397961909 43.7030018973275034, -72.28673723899453307 43.70299799324635615, -72.28673969125601673 43.70299433287851798, -72.28674294356160601 43.70299101649573004, -72.28674690629486577 43.70298813639079327, -72.28675147107301768 43.70298576965713266, -72.28675651080259001 43.70298398358900016, -72.28676188826136695 43.70298282573417481, -72.28676745615409516 43.70298232929405202, -72.2867730607600123 43.70298250590335698, -72.28677854820995208 43.70298335279655788, -72.28678376689316565 43.70298484559439345, -72.28678857370675814 43.70298694277020957, -72.28679283656454402 43.70298958833655689, -72.28679643932234455 43.70299270821821125, -72.28679928184278936 43.70299621655219369))");
polys.push("Polygon ((-72.28688589163087386 43.70748815000255405, -72.28683847935222673 43.70745665208042396, -72.28679135688209101 43.7075104246884294, -72.28671050279317001 43.70747314521396731, -72.28676647318775395 43.7074092763165396, -72.28662362370621963 43.70731391620088147, -72.28660194626696978 43.7073310881997017, -72.28656679527108508 43.70730729571998552, -72.28656561626091559 43.70730822918078928, -72.2865244652609249 43.70728108408491153, -72.28662655634762757 43.70720011142047667, -72.28664647452704628 43.70721316953024171, -72.28665990983685674 43.70720251279481516, -72.28666384258205824 43.70720512235177324, -72.28669613234605151 43.70717919724987155, -72.28673120727353307 43.70720247346589105, -72.28673206918576 43.70722674713435651, -72.28687282249396162 43.70732013114717773, -72.28687992524739059 43.70731490913465223, -72.28694386532281158 43.70735735214290685, -72.28693726825386534 43.70736288283756465, -72.28699519291819797 43.70740131896989311, -72.28696556659792805 43.70742503534354739, -72.28698448962272494 43.70743759025788222, -72.28693467148728757 43.70747719703648215, -72.28691567083306779 43.70746457413032005, -72.28688589163087386 43.70748815000255405))");
polys.push("Polygon ((-72.28693304963512389 43.70404482278883052, -72.2872103524479428 43.70404599984451721, -72.28720924630366085 43.70418316407670289, -72.28693194285850154 43.70418198702213175, -72.28693304963512389 43.70404482278883052))");
polys.push("Polygon ((-72.28693608670387505 43.70619958529005089, -72.2869543618765249 43.70621155778567868, -72.28699361791728961 43.70617988657993891, -72.28709031847181166 43.70624245987806233, -72.28698055344061402 43.70633102795958536, -72.2868830866213159 43.70626754336152686, -72.28692133975803813 43.70623642756239491, -72.28690433138848448 43.70622517994010536, -72.28693608670387505 43.70619958529005089))");
polys.push("Polygon ((-72.28695321364317294 43.7017472497939039, -72.2871797776459033 43.70173878174208681, -72.28718756012069946 43.70184836207125301, -72.28713973765371748 43.70185017159146668, -72.28714209596219575 43.70188348011438961, -72.28714809610181646 43.70196796819260499, -72.28715075364692666 43.70200538928953904, -72.28697201891577606 43.70201207031863078, -72.28695321364317294 43.7017472497939039))");
polys.push("Polygon ((-72.28695710615906478 43.68169865297267762, -72.28699969152945926 43.68160971920519131, -72.28709336634139504 43.68163334433739209, -72.2870507810934555 43.68172227813868602, -72.28695710615906478 43.68169865297267762))");
polys.push("Polygon ((-72.28695710615906478 43.68169865297267762, -72.2870507810934555 43.68172227813868602, -72.28700540815124498 43.68181703159432772, -72.28691170515642739 43.68179346414823527, -72.28695710615906478 43.68169865297267762))");
polys.push("Polygon ((-72.28698090567772283 43.70898096921604292, -72.28685177446087096 43.70892490018006526, -72.28681681325204522 43.70896726958808642, -72.28673893601259692 43.70893345454201295, -72.28677389725714875 43.70889108515735444, -72.28671548941390768 43.70886572408002735, -72.28676777847472579 43.70880197597400496, -72.28682628170309954 43.70882744631523309, -72.28687806689731588 43.70876370179228587, -72.2868195662364883 43.70873859688948926, -72.28685840618020109 43.7086908339486726, -72.28691918424159724 43.70871684093903298, -72.28697246844777169 43.70865180744611678, -72.28692055452866327 43.70862977567097829, -72.28696860306568794 43.70857044009609638, -72.2870239500465317 43.70859594996750275, -72.28702161613651356 43.70859847381433383, -72.28708121699922629 43.70862715759921713, -72.28708427574076723 43.70862381345843062, -72.28710312145270223 43.7086324426888595, -72.28723001329393583 43.7086884506967408, -72.2871804430740923 43.7087468801756458, -72.28709027505094298 43.70870695044830256, -72.28707433780922997 43.70872624072878665, -72.28709054858727256 43.70873346846175167, -72.28697547038578364 43.70886961664479742, -72.28695571593920022 43.70886094552187018, -72.28694027856228388 43.70887986674429015, -72.28703145355667914 43.70891960841031221, -72.28698090567772283 43.70898096921604292))");
polys.push("Polygon ((-72.28705798526974036 43.70253485049457254, -72.28705067620636271 43.70253625196429681, -72.28705121944467749 43.70253792043726548, -72.2869443594626091 43.70255840802555269, -72.28694375555956242 43.70255675158216491, -72.28693638581401615 43.70255816417465411, -72.28691935993468576 43.70251142346319284, -72.28683977245212589 43.70252668208899394, -72.2868432669911698 43.70253627582686562, -72.28678043101746198 43.70254832299355741, -72.28677693524711856 43.70253872926043215, -72.2866973476912591 43.70255398778740386, -72.28671437341093053 43.70260072853254485, -72.28670700366372159 43.70260214201031346, -72.28670760756072866 43.70260379845498022, -72.28660074734123953 43.70262428572321056, -72.28660008648249402 43.70262263948762893, -72.28659285045232252 43.70262402703096427, -72.28656577290075802 43.70254969257417343, -72.28651763673489938 43.70255892097438277, -72.28651660127964362 43.70255607788259056, -72.28651437872402141 43.70255650486545562, -72.28651308410665877 43.70255295212736968, -72.28649527386899365 43.70255636634979624, -72.28648940681254942 43.70254046610755694, -72.28650725189120863 43.70253694188913585, -72.28648086391339689 43.70246449830924007, -72.28648309142820949 43.70246407130013466, -72.28648205227308665 43.70246123002820582, -72.2865314516614319 43.70245167166888933, -72.28652950459434123 43.70244632503857929, -72.28669026806974784 43.70241550342502279, -72.28667332798974599 43.70236899982748469, -72.28671224934653594 43.70236153777349131, -72.28671028060161063 43.70235613545972342, -72.28677338384234474 43.70234403737775608, -72.28677535135194887 43.70234943969715147, -72.28681427268305981 43.70234197760851202, -72.28681736885835107 43.70235047812921181, -72.28683801818736754 43.70234651921395397, -72.28684589715805942 43.70236815003993058, -72.28682524906274409 43.70237210894988067, -72.28683121287318158 43.70238848208477833, -72.28688856099338977 43.70237748624231244, -72.28688593592896439 43.70237027836140697, -72.28690902795926831 43.70236582644400158, -72.28691166195149265 43.70237305767765434, -72.28699197603496884 43.70235766004839206, -72.28699392314011618 43.70236300667066587, -72.28704338235077387 43.70235361067719992, -72.28707302898023102 43.70242847021792443, -72.28708759985734389 43.70242578003976774, -72.28709339648665377 43.70244169413479796, -72.28707886133508964 43.70244448042679153, -72.28708015474279591 43.70244803316505511, -72.28707793218597999 43.70244845925881094, -72.2870789676657779 43.70245130234540909, -72.28703090842662959 43.70246051614326888, -72.28705798526974036 43.70253485049457254))");
polys.push("Polygon ((-72.28706557744993688 43.70053348294021589, -72.28706309930691987 43.70037918102391927, -72.28709767052673385 43.70037888806965753, -72.28709570013843688 43.70025614689956228, -72.28706111781512789 43.70025643901340828, -72.28705962909953087 43.70016391943405409, -72.28705445897021775 43.70016350286307016, -72.28706596284570196 43.70008829393317029, -72.2871696446201355 43.70009664178396491, -72.28716620445436547 43.70011913600152553, -72.28725166297283522 43.70012601658825702, -72.28725477891912021 43.70010564918373319, -72.28725589389318884 43.70010573853713254, -72.28725600569595144 43.70010503137847735, -72.28740541618412863 43.7001241196314254, -72.28740115724245641 43.70015418245507277, -72.28744255675565 43.70015751558204897, -72.28743744304847496 43.70019094389459724, -72.28743806883031198 43.70019099449995537, -72.2874348056286351 43.70021235458133191, -72.28739596877915119 43.70020922625084836, -72.28739603729952989 43.70020877314566832, -72.28739282769038255 43.70020851425550035, -72.28734214846390671 43.70053985163617938, -72.28734042632281387 43.70053971337681276, -72.28734030425613355 43.70054050789758548, -72.28727093422509142 43.70053492342772472, -72.2872714212177101 43.70053174175153288, -72.28706557744993688 43.70053348294021589))");
polys.push("Polygon ((-72.28713704237229365 43.70570896733141808, -72.2869994980861037 43.70589515155634075, -72.28681061926126006 43.70582171770958979, -72.286780871499559 43.70586150805890213, -72.28675612682766882 43.70586693198350048, -72.28663446895026823 43.70581963285978588, -72.28662725172071646 43.70580133318360794, -72.28666008315784097 43.70575689081320547, -72.28647755280900356 43.7056860015642954, -72.28655445851875072 43.70558141729768664, -72.28654789192775354 43.70557917484554622, -72.28660485951425585 43.70550206244413971, -72.28671096294043252 43.70554331383829805, -72.28668416781819417 43.70557958329449377, -72.28700414462255708 43.70570398586036021, -72.28703093960557169 43.70566771633073699, -72.28713704237229365 43.70570896733141808))");
polys.push("Polygon ((-72.28718393277165433 43.70396966923739512, -72.28696652943744994 43.7039674767171249, -72.28696966636972832 43.70380244624347199, -72.28694698943854746 43.70380220748011624, -72.28694868033690568 43.70371351487990097, -72.28697135723466261 43.70371375364314304, -72.28697450397099544 43.70354871320819967, -72.28719192664975424 43.70355088310763136, -72.28718878051920171 43.7037159244449569, -72.28721902864209881 43.70371622826380076, -72.28721732832894986 43.70380493171967373, -72.2871870789208657 43.70380462790736686, -72.28718393277165433 43.70396966923739512))");
polys.push("Polygon ((-72.28722566086125312 43.70332987705738503, -72.28722707576098117 43.7034670402205947, -72.28696238164228305 43.70346847697398118, -72.28696096734597631 43.7033313138039361, -72.28722566086125312 43.70332987705738503))");
polys.push("Polygon ((-72.28723147006992633 43.70463232171598378, -72.28723213496195399 43.70457746814100375, -72.2870733106089034 43.70457645458222373, -72.28707377814714619 43.70453805976874406, -72.28705835774604793 43.70453698328269354, -72.28704342987516895 43.70453397978218391, -72.28702944710343559 43.70452914221807816, -72.28701683525351029 43.7045226167903138, -72.28700597725503485 43.70451460123560139, -72.28699720192339839 43.70450533948767458, -72.28699077643244664 43.7044951136175186, -72.28698689751891493 43.7044842330802723, -72.2869856815020313 43.70447302936897671, -72.28698716539432212 43.70446184340750051, -72.28699130429066599 43.70445101296383683, -72.28699797257212367 43.70444086904337411, -72.28700696746075494 43.70443171966833518, -72.28701801638003133 43.70442384173751549, -72.28703078187092501 43.70441747649913822, -72.28704487881194041 43.70441281505657827, -72.28705987567826696 43.70441000016167976, -72.28707531927031482 43.70440911798005601, -72.28707578049275639 43.70437071239896198, -72.28723459675676111 43.70437171609786731, -72.28723525533128225 43.70431685175393, -72.28740226542774394 43.7043179061404885, -72.28740145895167757 43.70438511478126742, -72.28747779435163068 43.7043855966684518, -72.2874778878434654 43.7043778249985948, -72.2874854502805988 43.70437787213059266, -72.28748541259477634 43.70438107296677543, -72.28752062665409994 43.70438129482952405, -72.28752066434735468 43.70437809489336445, -72.28752822678453072 43.70437814202253435, -72.28752818910098199 43.70438134285871001, -72.28753354547117738 43.70438137676853785, -72.28753348050751981 43.7043868630181791, -72.28752812289623364 43.70438682911508721, -72.28752781063671762 43.70441283279176048, -72.28753316825033437 43.70441286669485237, -72.28753310204604077 43.70441835295122246, -72.287531526282649 43.70441834350917532, -72.28752998112439343 43.70454716021615837, -72.28747711364215434 43.7045474554697293, -72.28747719547112638 43.70454059742949937, -72.28745442867112558 43.70454045376193619, -72.28745404554665299 43.70457245765635435, -72.28744963337926777 43.70457242941554199, -72.28744958924417574 43.70457608751968337, -72.28744643894046362 43.70457606772657044, -72.28744641041616603 43.70457835314668671, -72.28744136398442777 43.70457877928289037, -72.28744133025314511 43.70458152196433588, -72.28739910574357452 43.70458125534274529, -72.28739848611623131 43.70463338687598309, -72.28723147006992633 43.70463232171598378))");
polys.push("Polygon ((-72.28732213600025602 43.681900906992297, -72.28735254525646781 43.68183405758853155, -72.28747321381240454 43.68186296864161022, -72.28744351169304139 43.68192826341850576, -72.28732213600025602 43.681900906992297))");
polys.push("Polygon ((-72.28733386339077072 43.70245885617989501, -72.28732881202886063 43.70239769806278218, -72.28725898165082242 43.70240073331453345, -72.28725038745790243 43.7022966730088811, -72.28720697962917541 43.70229856029606452, -72.28720279595665943 43.70224789942447075, -72.28728520801936952 43.70224431705901225, -72.28728607557914643 43.70225481431196357, -72.28730431841242421 43.70225402130800063, -72.28729383994787838 43.70212714107403684, -72.28730453438456038 43.70212667617629876, -72.28730502485349518 43.70213260944478861, -72.28740241318739379 43.70212837683425988, -72.28745931542161429 43.70212590314612555, -72.28747628959071392 43.70213682505642794, -72.28747757415000308 43.70215238291139315, -72.28746251957116442 43.7021646974660456, -72.28747198045213906 43.70227925411410297, -72.28749525678726684 43.70227824292741303, -72.2875018535610252 43.70236771680296073, -72.28750650514774634 43.70240875342171449, -72.28746624334051774 43.70241050401080685, -72.28746974820120386 43.70245294916077228, -72.28743127559019399 43.70248441918004545, -72.28737724008647092 43.70248676747869609, -72.28733386339077072 43.70245885617989501))");
polys.push("Polygon ((-72.28735254525646781 43.68183405758853155, -72.28732213600025602 43.681900906992297, -72.28720960634744586 43.68187554376952164, -72.28724067181981638 43.68180725342310211, -72.28735254525646781 43.68183405758853155))");
polys.push("Polygon ((-72.28737580951111852 43.70838626436486862, -72.28721152941075445 43.70856588936632647, -72.28719521420467231 43.70855803757247315, -72.28716937633596729 43.70858628865346418, -72.28713408293796761 43.70856935291787693, -72.28711918802501657 43.70858563943222919, -72.2871323446911731 43.70859197197256663, -72.2871311962933305 43.70859322839598349, -72.28713695557009089 43.70859583882167243, -72.28712019571561598 43.7086141642049526, -72.28711472476190636 43.70861123809083892, -72.28711349047065937 43.70861258768694313, -72.28710033380193067 43.70860625514447406, -72.28708121699922629 43.70862715759921713, -72.28702161613651356 43.70859847381433383, -72.28703876952528162 43.70857992579375662, -72.2870166647126382 43.7085692872957452, -72.28703971015805507 43.70854409002276242, -72.28706195114183686 43.70855457836658076, -72.28707451401334083 43.70854063478441986, -72.28707243709673946 43.70853968478873952, -72.2870983767285793 43.70851143317707965, -72.28708206155192784 43.7085035813668128, -72.28722735648767639 43.7083447152046034, -72.28719946336865121 43.70833129096523351, -72.28721255708430249 43.708316974558997, -72.28724045019954758 43.7083303987952192, -72.28724634310438546 43.70832395564146111, -72.28737580951111852 43.70838626436486862))");
polys.push("Polygon ((-72.28740241318739379 43.70212837683425988, -72.28743801009741787 43.70206339050206878, -72.28722092505130092 43.70206745308771445, -72.28721734095104523 43.701966669713606, -72.28714803900813024 43.70196796580233212, -72.2871425125583329 43.70188345535130736, -72.28721433486937542 43.70188211138038525, -72.28721118064680695 43.70179341354877778, -72.2872767016761486 43.70179218745420258, -72.28726463461320861 43.7014528400604334, -72.28733708527323643 43.70145148360030163, -72.2873379798239597 43.70147662297419089, -72.28737136965659715 43.70147599792725401, -72.28737196767771422 43.70149283670637175, -72.28738333940569305 43.7015006712280254, -72.2873946355598207 43.70149204215988448, -72.28739315546795297 43.70145043476665592, -72.28740071559629143 43.70145029380332602, -72.28740227619682912 43.70149417252467572, -72.28738882223710505 43.70150444963080361, -72.28739012252185603 43.70154101493288579, -72.28740428940893992 43.70155077571445901, -72.28740585001551722 43.70159465443497737, -72.28743036908167596 43.70161154781674639, -72.28745107193920205 43.70159573193640767, -72.28751779066637084 43.70164170133549675, -72.28763068926727442 43.70163958854338659, -72.2877336321180195 43.70156094855957463, -72.28773731192501373 43.70156348385115308, -72.28773302217433638 43.70156675999663065, -72.28774325791431465 43.70157390850435775, -72.28766752451144839 43.70163140214301478, -72.28766779041578161 43.70163889374385491, -72.28767511240825172 43.70163875675635268, -72.28767733074202795 43.70167374105169245, -72.28767805050547679 43.70172135510735245, -72.28761954885165153 43.70172268460937204, -72.28756375608777773 43.70172395256317799, -72.28756234202616326 43.70168418724934156, -72.28751969507490571 43.70168498504310861, -72.28738283482636007 43.70178953559807411, -72.2873883050059618 43.70194335228674731, -72.28746229373805932 43.70199432890215263, -72.28759687303511328 43.70199245571538427, -72.2875994672335338 43.70202142823116986, -72.28755454483518861 43.70202175596401162, -72.28754464380892841 43.70203983265672321, -72.28754483087695348 43.70204509612347721, -72.28753160083012119 43.70204534259976015, -72.28753156782262579 43.70204442831252578, -72.28752967746417823 43.70204446378237151, -72.28751904704746778 43.70206387383136359, -72.28751917658635762 43.70206753009372136, -72.28751575556646003 43.70206759277876785, -72.28751572380903667 43.7020666793848136, -72.28751383344986436 43.70206671485439642, -72.28751386644782428 43.70206762824160762, -72.28751040079545476 43.70206769386911105, -72.28751036902883698 43.70206677957513364, -72.28750847866965046 43.7020668150446312, -72.28748797514562341 43.70210424582350583, -72.28746756321025657 43.70210462760690717, -72.28745582460551589 43.70212605531492756, -72.28740241318739379 43.70212837683425988))");
polys.push("Polygon ((-72.28746323593645684 43.70721977842262618, -72.28742674735019591 43.70720285826499207, -72.28742591341959667 43.70720380516169001, -72.28740511803854929 43.70720687390985404, -72.2873867917135442 43.70719827880895281, -72.28738233857066575 43.70718359773547235, -72.28738317251098522 43.70718265173911021, -72.28734668396958796 43.70716573155556262, -72.28750154802555983 43.70698998723793949, -72.2874855566051906 43.70698257385614482, -72.28750093529049536 43.70696512177855908, -72.28751693038361736 43.70697253063793397, -72.28753839796375757 43.70694816718767584, -72.28755834768502098 43.70695741859410788, -72.28758486053526156 43.7069273312192621, -72.28766151152181862 43.7069628759879194, -72.28766056560830577 43.70696391170108086, -72.28768782490085698 43.70697620429352526, -72.28765383651349907 43.7070156524758886, -72.28764621550102731 43.70701212692345905, -72.28758126577126575 43.70708583413727411, -72.28762694877654837 43.7071070174060452, -72.28757429086265063 43.70716677613953749, -72.28752860782077505 43.70714559195008775, -72.28749847460269962 43.70717978886886357, -72.28752681952940407 43.70719291536285311, -72.28750668246253497 43.70721576757511428, -72.28747833876076356 43.70720264016944867, -72.28746323593645684 43.70721977842262618))");
polys.push("Polygon ((-72.28746749341640054 43.68135404058627813, -72.28750700771178117 43.68128862319805705, -72.28761961327714403 43.68132444721726415, -72.28758009909078908 43.68138986554344427, -72.28747888985371617 43.6813576662724401, -72.28746749341640054 43.68135404058627813))");
polys.push("Polygon ((-72.28750700771178117 43.68128862319805705, -72.28746749341640054 43.68135404058627813, -72.28735488911516427 43.68131821551043714, -72.28739440351026246 43.68125279816013773, -72.28750700771178117 43.68128862319805705))");
polys.push("Polygon ((-72.28752000578724335 43.70656823546075742, -72.28741688500252849 43.70664851787294936, -72.28738645106309946 43.70662794565836862, -72.2873245779566389 43.70667611468768854, -72.28735477700260503 43.70669652798257943, -72.28730539634433683 43.70673564291656987, -72.28732799129051045 43.70675091583451177, -72.2872265881965177 43.70682986025008177, -72.28724062171106368 43.706838720801656, -72.28713943375348094 43.70691749745883214, -72.28711038290526858 43.70689786003151056, -72.28698949999410672 43.70699331095145368, -72.2868788692749149 43.706918528181113, -72.28686942369749602 43.70692588075841911, -72.286818240334199 43.70689128186210581, -72.28687023032573222 43.70685080738436312, -72.28681097814661882 43.7068107537703483, -72.28675898691784596 43.70685122912819764, -72.2866443635503515 43.70677374689336148, -72.28666498772969362 43.7067576903779127, -72.2866126259329036 43.70672104473280939, -72.28666805368470705 43.70667789380892287, -72.28663208748943703 43.70665358103052966, -72.2866587267959062 43.7066328412553986, -72.28671913192545162 43.70667367445183515, -72.28672815529466789 43.70666665000047146, -72.286760664332391 43.7066886242344026, -72.28675035227334433 43.70669665295116602, -72.28677386914827707 43.70671254922257987, -72.28678418121613447 43.70670452140371509, -72.28687017873755849 43.70676265352499001, -72.28686158493727021 43.70676934353272713, -72.28692803637221687 43.70681426250663293, -72.28698366337179948 43.7067709555380759, -72.28704337790053103 43.70681131977593026, -72.28711040739266025 43.70675913742368124, -72.28710141515729504 43.7067530585937547, -72.28723504298172031 43.70664902734523594, -72.28724533462720103 43.70665598387350315, -72.28730183638509743 43.70661199605113723, -72.28732684358537597 43.70662874367855721, -72.2873550950569097 43.70660675019749419, -72.28722321664956496 43.70651760469237956, -72.28716134352390554 43.70656577363436668, -72.287061743398624 43.70649844669500794, -72.28712361529538555 43.70645027781305458, -72.28711254904443706 43.70644279714020541, -72.28721566988889435 43.70636251499936975, -72.28752000578724335 43.70656823546075742))");
polys.push("Polygon ((-72.28755099333005774 43.70500430162061889, -72.28754393147376334 43.70503665411383309, -72.28756080010980156 43.70503859213010145, -72.28754066067982365 43.70513086548169213, -72.28752380196208094 43.70512892920876169, -72.28751659797360674 43.7051619386190211, -72.2874081801780477 43.70514948551691958, -72.2874117946670367 43.70513292629345869, -72.28716883895981482 43.70510501946005633, -72.28716523388486337 43.70512153542174616, -72.28705605148854829 43.70510915634122284, -72.28706364045443422 43.70507639868836947, -72.28704684014093118 43.70507446832849041, -72.28706700637070526 43.70498207520849832, -72.28708386503329564 43.70498401154918611, -72.28709096143872159 43.70495149688473902, -72.28719955395617092 43.70496397004135503, -72.28719601527173211 43.70498018502225079, -72.2874389804295987 43.70500809354751226, -72.28744252737214993 43.70499184341183252, -72.28755099333005774 43.70500430162061889))");
polys.push("Polygon ((-72.28755450302099916 43.70294813409763179, -72.28755290131968536 43.70322245029943531, -72.28748483202606678 43.70322226829040346, -72.28748477193838085 43.70323255546284003, -72.28743183267002337 43.70323239475172983, -72.28743189276679004 43.70322210757925774, -72.28736383164648771 43.70322187595017027, -72.28736543421000249 43.70294755974586565, -72.2874334750220271 43.70294777708340206, -72.28743353511876535 43.70293748991043969, -72.28748647412756156 43.70293765062230307, -72.28748641403987563 43.70294793779525833, -72.28755450302099916 43.70294813409763179))");
polys.push("Polygon ((-72.28757468820886345 43.70833233690036934, -72.2876453203118956 43.70825438383226924, -72.287670963977817 43.70822706706425009, -72.28774582126884241 43.70826308954620742, -72.28775627452728259 43.70825165953083058, -72.28778831261864468 43.70826707815491119, -72.28777785936367195 43.70827850817317994, -72.28785268818130305 43.70831452443899678, -72.28782988733978243 43.70833945682850441, -72.28783199345710386 43.70834047055633675, -72.28783575573054065 43.70835395377768862, -72.28782542024718794 43.70836525445085385, -72.28780683324158929 43.70836798184685534, -72.28780472588302075 43.7083669681253042, -72.28778192376117318 43.70839190051199807, -72.2877632243424415 43.70838290157175265, -72.28772464639526163 43.7084251874063483, -72.28773409961044649 43.70842973717120117, -72.28771946499507806 43.7084457388294112, -72.2877100117784579 43.70844118906337883, -72.28766258190543681 43.70849294664716922, -72.28756776799905026 43.7084473172256267, -72.28764534703606159 43.70836249043225763, -72.28760004752895441 43.70834068944854067, -72.28759760230158804 43.7083433642227206, -72.28757468820886345 43.70833233690036934))");
polys.push("Polygon ((-72.28764693512702877 43.70825335888641661, -72.28758979047596256 43.7083158421848097, -72.2874801518472907 43.70826307740401262, -72.28739093905774382 43.70836062397238919, -72.28734472063639771 43.70833838054562648, -72.28732381391921535 43.70836123960090447, -72.28729860297777066 43.70834910681503516, -72.28731950970042419 43.70832624776429753, -72.28728327069435977 43.70830880597195289, -72.28736481781798773 43.70821964201212495, -72.28733895102786278 43.70820719327345216, -72.287368742994488 43.70817461747167698, -72.28740892106807792 43.70819395498268278, -72.28746980543537859 43.70812738407039433, -72.28749275818783815 43.70812401467234309, -72.28756285067460396 43.70815774818890276, -72.28756749424809414 43.70817439845954766, -72.28754162972008146 43.70820267857324382, -72.28764693512702877 43.70825335888641661))");
polys.push("Polygon ((-72.2876764677570236 43.7067058577566101, -72.28764934170297352 43.70673602409068081, -72.28767400122856657 43.70674768366455254, -72.28765391016825959 43.70677004511914276, -72.28762925062801514 43.70675838464101304, -72.28760212869467239 43.70678859414435635, -72.28758209359475018 43.70677911999302268, -72.28757807242622846 43.70678357105549594, -72.28755649502562619 43.70677336812478586, -72.28756051619508582 43.70676891706303735, -72.28747883111853412 43.70673029344398941, -72.28752654587849236 43.70667716447525208, -72.28754966429318074 43.70668809529403376, -72.28757628599329621 43.70665846726164006, -72.28763485530026855 43.70668618160188146, -72.2876388737538349 43.70668170895051929, -72.2876604484308416 43.70669189027911727, -72.28765642996893348 43.70669636203120945, -72.2876764677570236 43.7067058577566101))");
polys.push("Polygon ((-72.28769278953448918 43.68192190857367052, -72.28772354743473727 43.68185366927165347, -72.28784219938256683 43.68188183663428958, -72.28781144160313943 43.68195007596715129, -72.28769278953448918 43.68192190857367052))");
polys.push("Polygon ((-72.28772354743473727 43.68185366927165347, -72.28769278953448918 43.68192190857367052, -72.28755795279366225 43.68188989837111791, -72.28758871083122983 43.68182165910418746, -72.28772354743473727 43.68185366927165347))");
polys.push("Polygon ((-72.2877503248319897 43.70216555695657945, -72.2877444251654282 43.70209413011730248, -72.2876615242298044 43.7020629486414407, -72.28766160560269327 43.70206386086572081, -72.28765814715693239 43.7020640236656277, -72.28765806578408615 43.70206311144134048, -72.28765617845436964 43.70206320000067279, -72.28765625983648135 43.70206411312498318, -72.28765284603238683 43.70206427388205839, -72.28765255997790007 43.70206108020376234, -72.28763928877089029 43.70204207451588019, -72.28763762267585946 43.70204208176718197, -72.28763770404835043 43.70204299399149761, -72.28763204456069502 43.70204326145496054, -72.28763196317900963 43.70204234833062173, -72.28763007585919809 43.70204243778955799, -72.28763015723157537 43.70204335001386653, -72.28762449773455501 43.70204361657693681, -72.28762412898521461 43.70203950258084546, -72.28761050520451192 43.70201999206806676, -72.28760756137172905 43.7020201304692435, -72.28760764275303075 43.70202104359360362, -72.2875994672335338 43.70202142823116986, -72.28759687303511328 43.70199245571538427, -72.28763378249426808 43.70199071699215665, -72.2876355703166098 43.70192533732402751, -72.28760910621885216 43.70192495635420471, -72.2876095313836089 43.70190941441394727, -72.28766373264099343 43.70191019463268134, -72.28766060533871496 43.70186960156836875, -72.28764952952731448 43.7018297483374738, -72.28761942457305167 43.70174514101896079, -72.28761783349240488 43.70173690956283963, -72.28761785936444539 43.70172859821734335, -72.28761903907573583 43.70172269637939166, -72.28767805050547679 43.70172135510735245, -72.28767733074202795 43.70167374105169245, -72.28788772105089322 43.70166414077938555, -72.28791371529665355 43.70166120209667326, -72.28793862315616536 43.70165505877919543, -72.28796169967054652 43.70164589489007056, -72.28798225663662436 43.70163398419092005, -72.287999678660114 43.70161968285398046, -72.28801344413361107 43.70160341854705166, -72.28802314246487981 43.70158567683865414, -72.288028485111397 43.70156698853688226, -72.28802931035629342 43.70154791166205399, -72.28802559432381258 43.70152901698554615, -72.288017448302611 43.70151086914315641, -72.28800511484668334 43.70149400955494912, -72.28802403795229736 43.70148114735957279, -72.28801625583885482 43.70139420732840563, -72.28768844512883618 43.70140965454015713, -72.287685381152329 43.70137543539331659, -72.28768318012454586 43.70137553915844109, -72.28767427549439617 43.70127607358776345, -72.28767301812737855 43.70127613352293139, -72.28767269138081986 43.70127248283201027, -72.28767394875704611 43.70127242379685129, -72.2876726726210137 43.70125816559067999, -72.28767204393304269 43.70125819510825949, -72.28767032761700762 43.70123903213594474, -72.28767095630477968 43.70123900261837235, -72.28766968017023942 43.70122474441208027, -72.28766842279499372 43.70122480344718241, -72.28766809605831156 43.70122115365622051, -72.287669353433472 43.70122109462113968, -72.28766508485442444 43.70117341523571497, -72.28766382748025876 43.70117347427076027, -72.28766350074415925 43.70116982447976284, -72.28766475811823966 43.70116976544471044, -72.28766048954693701 43.70112208605864623, -72.28765923217382294 43.70112214509363469, -72.2876589054383345 43.70111849530258752, -72.28766016280208362 43.70111843536759011, -72.28766006046285497 43.70111729464040451, -72.2881012970158281 43.70109650285221647, -72.28809881758334654 43.70106881141273192, -72.28813142856907348 43.70106727321135764, -72.28812800522297266 43.70101702225943541, -72.28812591306078161 43.70101709483896713, -72.28812382970208716 43.70101693875391646, -72.28812180231540196 43.70101655644804595, -72.28811987690309593 43.70101595757194701, -72.28811809825482726 43.70101515448306628, -72.28810303356678446 43.70100747332145374, -72.28810446161823222 43.70100580223618181, -72.28811928170689782 43.70101178270339659, -72.288121166450793 43.70101240790248909, -72.28812316425954521 43.70101280927057275, -72.28812522293740983 43.70101297809074481, -72.28812729405673565 43.70101291012596789, -72.28812932303365812 43.70101260567301438, -72.28813126157999136 43.70101207399511622, -72.28813306019490881 43.70101132706224689, -72.28814134861431739 43.70100783384607013, -72.28815027720376918 43.70100530291897201, -72.28815963444455406 43.70100379483525188, -72.28816919986475398 43.70100334409595888, -72.28817874654795617 43.70100396183565294, -72.28818805102980605 43.70100563306824171, -72.28819689332574683 43.7010083193870642, -72.28819880976655554 43.70100889040859471, -72.28820082684789838 43.70100923586646502, -72.2882028936145673 43.70100934703703643, -72.28820495916714606 43.701009220596859, -72.28820697019946806 43.70100886043606181, -72.28820887964535302 43.70100827401108035, -72.28821063680987891 43.70100747779876826, -72.28822426620591557 43.70100015635673429, -72.28822598157356083 43.70100167894052845, -72.2882124120220908 43.70101071018201111, -72.28821057685358653 43.70101176153707456, -72.28820851954287718 43.7010125656819497, -72.28820629938489617 43.70101309799241562, -72.28820398695116012 43.70101334458372833, -72.28821121486937784 43.70106967638999862, -72.28823203845122691 43.70130694915457781, -72.28839614931287372 43.70129921521824912, -72.28843207984509434 43.70170049670906565, -72.28863521273895287 43.7016909228376349, -72.2886439587139904 43.70178856205576778, -72.28867592900336092 43.70178705598748081, -72.28867999159315616 43.70182156939252849, -72.28864645439526271 43.70182343771411126, -72.28864814587808496 43.70184100678881123, -72.28834638503435883 43.70185635013555014, -72.28836082751752201 43.70201893681601746, -72.28838276111142136 43.70201790034945333, -72.28838833751892423 43.70207562181789029, -72.28838761378528943 43.70207593897726639, -72.28831924671438003 43.70210588517481654, -72.28830860445081896 43.70210995734608161, -72.2882971792071487 43.70211269537725229, -72.28828528657474806 43.70211402464649808, -72.28827325618193811 43.70211390825852504, -72.28826516472209107 43.70212855312350797, -72.28818432886463086 43.70210527237217946, -72.2881913583648128 43.70209254952669653, -72.28812347996540666 43.7020730118517946, -72.28811792695027805 43.70207193676281321, -72.28811220016687855 43.7020715745701267, -72.28810647343337337 43.70207193782964339, -72.28810092030762746 43.70207301389687871, -72.28806116628886969 43.70208318474730191, -72.2880524358899379 43.70208401976637447, -72.28804396896268258 43.70208441862085635, -72.28804331918598791 43.70208444915517987, -72.28803934560274058 43.70208422503868917, -72.28803719557933505 43.70208410441706093, -72.2880359070186671 43.70208402861593555, -72.28804158697565185 43.7021527681390225, -72.28804222692657788 43.70215286726755011, -72.28804524163386702 43.70218937913459456, -72.28775271188712281 43.70220209654359422, -72.28774969611600909 43.70216558467458867, -72.2877503248319897 43.70216555695657945))");
polys.push("Polygon ((-72.28776810635427807 43.69968045741747176, -72.28776899543457546 43.69967500898820134, -72.28780550718624909 43.69967814532706996, -72.28780595173400059 43.69967542201231225, -72.28787010090584886 43.6996809310253056, -72.28786965637027606 43.69968365524030673, -72.28790589371813269 43.69968676783654615, -72.28790500465937896 43.69969221716682029, -72.28776810635427807 43.69968045741747176))");
polys.push("Polygon ((-72.28776810635427807 43.69968045741747176, -72.28790500465937896 43.69969221716682029, -72.2878757039684956 43.69987179283260303, -72.28787194910019309 43.69987147031436336, -72.28787037394208426 43.69988112037979988, -72.28778588690724405 43.69987386234896576, -72.28778746084752527 43.69986421319137548, -72.28773129305423595 43.69985938891883137, -72.28774086876967431 43.6998007039016656, -72.28774837972737544 43.69980134803995497, -72.2877523432477318 43.6997770571288342, -72.2876845905952905 43.69977123730389224, -72.28760110929026439 43.69977786888809135, -72.28758650835165156 43.69968117312747324, -72.28768518414750588 43.69967333481928762, -72.28776810635427807 43.69968045741747176))");
polys.push("Polygon ((-72.28778604027570509 43.68152472725172686, -72.28782443323449058 43.68145919433971613, -72.28793674696922267 43.68149385044180377, -72.28789835535161501 43.68155938338382072, -72.28778604027570509 43.68152472725172686))");
polys.push("Polygon ((-72.28782443323449058 43.68145919433971613, -72.28778604027570509 43.68152472725172686, -72.28767372656824364 43.68149007100155501, -72.28771211962803989 43.68142453812629356, -72.28782443323449058 43.68145919433971613))");
polys.push("Polygon ((-72.28786415430539591 43.70720194091462218, -72.2880340141853992 43.70701507238451455, -72.28804193817666146 43.70701885908288631, -72.28805029008258032 43.70700966092141471, -72.28818817515887929 43.70707555293345337, -72.28817982325581681 43.70708475020478545, -72.28818774726538265 43.70708853689288276, -72.28803140258011695 43.70726070702803412, -72.28825196636366002 43.70736610784106801, -72.28823363577697592 43.70738629336594983, -72.28824525872229856 43.70739226419331658, -72.28819516523539335 43.70744608503886042, -72.28819832240537835 43.70744759528091805, -72.28816711535473871 43.70748195302431327, -72.28816395695233155 43.7074804436881692, -72.28811614569148958 43.70753444650295449, -72.28810425897061975 43.70752876601743964, -72.28809849183568303 43.70753511672587166, -72.28766106260181346 43.70732608062144209, -72.28766628385272952 43.70732033234367719, -72.28765444709409849 43.70731467584142393, -72.28768931611776338 43.70727698610280498, -72.28767703420660951 43.70727111510586127, -72.28773789429162377 43.70720411304171904, -72.2877505142750465 43.70721016220812061, -72.28778408213922546 43.70717191966991777, -72.28779591888164191 43.70717757615898336, -72.28780113886618608 43.70717182788180821, -72.28786415430539591 43.70720194091462218))");
polys.push("Polygon ((-72.28796244768594192 43.69989178976293687, -72.28799260092628742 43.69970565696215203, -72.28814776925260333 43.69971932155350913, -72.28814732472933713 43.69972204576949792, -72.28820974685180545 43.6997274118708745, -72.28819732943485121 43.69980351155201959, -72.28829682463506856 43.69981205125813517, -72.28828026080601887 43.69991356255304282, -72.28811836663091128 43.69989964938943672, -72.28811743170788873 43.69990510077064272, -72.28796244768594192 43.69989178976293687))");
polys.push("Polygon ((-72.28798240617510373 43.70901082838553009, -72.28791148939852462 43.70910174592613373, -72.28790692946259355 43.70909957635315379, -72.28787607531846504 43.70913924876982293, -72.28778720145322723 43.70910278771049917, -72.28781805941147809 43.70906348072294634, -72.28773779674042999 43.70903062978964471, -72.28776915087478017 43.70899058926650582, -72.2877486432084595 43.70898228689989651, -72.28778422226744738 43.70893637029638512, -72.28781840397331848 43.70895026785350979, -72.28782586909682095 43.70894071630483069, -72.28785954271043579 43.7089544329976647, -72.28786650789395196 43.70894525138963616, -72.28796373640383877 43.70898514212453279, -72.28795303679383721 43.70899891726415376, -72.28798240617510373 43.70901082838553009))");
polys.push("Polygon ((-72.28803282187558921 43.68193325296541474, -72.28807479802856051 43.68186714065291909, -72.28819074126532485 43.68189468153025956, -72.28815974824809132 43.68196340287222768, -72.28803282187558921 43.68193325296541474))");
polys.push("Polygon ((-72.28807479802856051 43.68186714065291909, -72.28803282187558921 43.68193325296541474, -72.28792717412150637 43.68190815816241468, -72.28795816737721225 43.68183943688146087, -72.28807479802856051 43.68186714065291909))");
polys.push("Polygon ((-72.28807801122904664 43.70082305720148241, -72.28805778682053074 43.70065453084814777, -72.28823859217324355 43.70064309351570131, -72.28824426859902985 43.70063835440381439, -72.28824143761838172 43.70063656066668756, -72.2882462116955935 43.70062613624641301, -72.28825613927921268 43.70061787726076119, -72.28826966845046798 43.70061299193563542, -72.28827252822350147 43.70061481071735443, -72.28827820341273025 43.70061007251054264, -72.2882969474103021 43.7004882933927874, -72.28813660949741404 43.70047530426160876, -72.2881588507720636 43.70033080559088035, -72.28854967100069473 43.70036246749791076, -72.28853638333880838 43.70044880298895862, -72.28857145717837795 43.70045164448339392, -72.28852991417534213 43.70072155718680307, -72.28844222918857554 43.7007144529512388, -72.28843665883425729 43.70071913119150508, -72.28843952086590718 43.70072092745507319, -72.28843480890684248 43.70073135784576834, -72.28842490539254584 43.70073966441933067, -72.28841140375793373 43.70074457481477026, -72.2884085417259854 43.70074277855052713, -72.28840293559549934 43.70074747678514626, -72.28840952336442172 43.70080211363954703, -72.28820105510094152 43.70081529028234257, -72.28820142427389328 43.70081824139030857, -72.28815746236048767 43.70082102851669958, -72.28815712423102013 43.70081807993997103, -72.28807801122904664 43.70082305720148241))");
polys.push("Polygon ((-72.28809761664140865 43.70458019063869415, -72.28809746077860154 43.70456510279534967, -72.28804365529758513 43.70456539531008389, -72.288043174167953 43.70451881685809781, -72.28802804859904541 43.70451889908396481, -72.28802625874972421 43.70434561748257352, -72.2880193274578744 43.70434565516180214, -72.28801895802610034 43.70430988858285559, -72.28804101483018485 43.70430976867840656, -72.28804085060686191 43.70429386992105236, -72.28809568058855461 43.70429357183780894, -72.28809530038294895 43.70425676664225989, -72.28829185251531442 43.70425569787100528, -72.28829223284117234 43.7042925030652043, -72.2883473791744251 43.7042922031407528, -72.2883478894809457 43.7043415824370598, -72.28836301500433592 43.70434150016912866, -72.28836482944910813 43.7045170677963597, -72.28834970388156478 43.70451715006478821, -72.28835018524850398 43.70456372851407423, -72.28829637853068846 43.70456402115451056, -72.28829651082024554 43.7045768229604974, -72.28829548607195932 43.7045768285335825, -72.2882955096950468 43.7045791145703717, -72.28827845495472104 43.70457920732115298, -72.28827852227873052 43.70458572252600504, -72.28827739131392605 43.70459598041760074, -72.2882738230516253 43.70460594104152818, -72.28826792476210983 43.70461529959217017, -72.28825987467288883 43.7046237742796535, -72.28824991947824685 43.70463110544333318, -72.28823836085074106 43.70463707092625327, -72.28822554927525346 43.70464148970911111, -72.2882118754296954 43.70464422825756401, -72.28819775282561011 43.70464520151681853, -72.28818361293849648 43.7046443819387207, -72.28816988280212286 43.7046417924031374, -72.28815698136091328 43.70463751343827141, -72.2881453007675816 43.70463167432171048, -72.28813519520799957 43.70462445224099923, -72.28812697215194305 43.70461606604081339, -72.28812087990954183 43.70460677269014838, -72.2881171062327752 43.70459685198883193, -72.28811576343737499 43.70458660754847102, -72.28811569613098698 43.7045800923434129, -72.28809761664140865 43.70458019063869415))");
polys.push("Polygon ((-72.28831858004667765 43.68132220693826184, -72.28836668552841616 43.68138421565841156, -72.28826067710576808 43.6814275319427594, -72.28821257169757075 43.68136552317803734, -72.28831858004667765 43.68132220693826184))");
polys.push("Polygon ((-72.28831858004667765 43.68132220693826184, -72.28842458699303108 43.6812788897074924, -72.28847269379775753 43.68134089927630725, -72.28836668552841616 43.68138421565841156, -72.28831858004667765 43.68132220693826184))");
polys.push("Polygon ((-72.28837433966366177 43.68195752315191527, -72.28839986883106405 43.68188755787399202, -72.28853310865655146 43.68191921214322804, -72.28850213286038695 43.68198788307999791, -72.28837762935172861 43.68195830452017248, -72.28837433966366177 43.68195752315191527))");
polys.push("Polygon ((-72.28839986883106405 43.68188755787399202, -72.28837433966366177 43.68195752315191527, -72.28827047452465138 43.68193284740346627, -72.28830145055816558 43.68186417652741227, -72.28839986883106405 43.68188755787399202))");
polys.push("Polygon ((-72.28841768714858063 43.7055164662717246, -72.2890038062124205 43.70550666555776331, -72.28900563813714086 43.70559798966961296, -72.28900980137957788 43.70573464635512551, -72.28900569977797375 43.70573478389556499, -72.28900637488079894 43.70575446643872652, -72.28892639928443486 43.70575487755375832, -72.28886030131133111 43.70579981848644024, -72.28886284015698038 43.7058940135550813, -72.28886317204965906 43.70591290590975575, -72.28886120834485496 43.7059129391007275, -72.2882185046744894 43.7058248407193517, -72.28822086158082527 43.70581579215166812, -72.28822878109752992 43.70581687866769727, -72.28827272722153907 43.7056474823900416, -72.28837216618482842 43.70566116799354006, -72.28837282833821121 43.70568273894738809, -72.28839352614923541 43.70568613121914581, -72.28838906749338378 43.7055416437512676, -72.28841943239551426 43.70554115275939466, -72.28841804487531419 43.7055347509446861, -72.28838276387890005 43.7055353208799815, -72.2883810319256952 43.70547890703105054, -72.28841647531906744 43.70547832721227621, -72.28841768714858063 43.7055164662717246))");
polys.push("Polygon ((-72.28843195378657072 43.70768625935235008, -72.28834277089997329 43.70764613353276928, -72.28834310562392318 43.70764574648459444, -72.28827561459038975 43.70761496050840833, -72.28828567738815991 43.70760334715358653, -72.28826138583713146 43.70759228245539418, -72.28827011835726069 43.70758221094634877, -72.2882055496309448 43.70755276903359032, -72.28824679514181639 43.70750516264348562, -72.28831137493764913 43.70753459817254338, -72.288321425382847 43.70752299208213287, -72.2883457058156722 43.70753406312864087, -72.28835577968742143 43.70752244340682324, -72.28840860776502097 43.70754653160994962, -72.28840685015194367 43.70754898304573288, -72.28845462184101223 43.70757075316319629, -72.28844656004014269 43.70758005058242901, -72.28846203437507256 43.70758710661593938, -72.28847511583990126 43.70757200977408274, -72.28850233087825927 43.70758441941987371, -72.28849528682404468 43.707592548422177, -72.28850809338896966 43.70759838767441607, -72.28843195378657072 43.70768625935235008))");
polys.push("Polygon ((-72.28844465544692355 43.70655632468547935, -72.28845182013425585 43.70652278800074697, -72.28845053489352779 43.70652232245829083, -72.28847429210829034 43.70641884328323101, -72.28847013433775714 43.70641667244387207, -72.28845648761199527 43.70637394140104703, -72.28848848945949612 43.70633672514315293, -72.2885478305906588 43.7063267554061099, -72.288599249743271 43.70634979001582821, -72.28860176955554095 43.70635602095454431, -72.28860212309513145 43.70635637455646361, -72.28867616397734253 43.70636485170122398, -72.28875055480314415 43.70637153306435607, -72.28887491654367636 43.70637865252062682, -72.28899222393449975 43.70638077078725559, -72.28905474046771928 43.70637923690666327, -72.28905453983036011 43.70637375570462524, -72.2893121063905113 43.70636705154518609, -72.28937006897675133 43.70636571151138838, -72.28935746208472324 43.70643056055348552, -72.28934501143574209 43.7064308011938607, -72.28932160469045698 43.70655169219236313, -72.28927846581810002 43.70655252392550949, -72.28927841565113965 43.70655115340017005, -72.28904041624129206 43.70655574289749268, -72.2890402538966157 43.70655132446355395, -72.28888099104311493 43.70654980727097438, -72.28888190604367026 43.70653870899199234, -72.28882969928621094 43.70653647749377058, -72.28876149602959345 43.70653234299191325, -72.28876307061918283 43.706521436438031, -72.28873250014362384 43.706519133039059, -72.28870028251014901 43.70651640026427742, -72.28869190760988772 43.70655287416132495, -72.28860189719723905 43.70654200514316301, -72.28859552617331019 43.70657405511207827, -72.28844465544692355 43.70655632468547935))");
polys.push("Polygon ((-72.28846396547956488 43.6999477262305831, -72.28831579690520925 43.69993499967186068, -72.28833531948004065 43.69981535845588638, -72.28844577888487777 43.69982484467318784, -72.28844201986903784 43.69984788970456435, -72.28847972502158825 43.69985112824404183, -72.28846396547956488 43.6999477262305831))");
polys.push("Polygon ((-72.28861756836452912 43.69996193783843097, -72.28862463147896733 43.69991865664537301, -72.28868428730697815 43.69992378012073431, -72.28867722548476138 43.69996706221046878, -72.28861756836452912 43.69996193783843097))");
polys.push("Polygon ((-72.28867173421626546 43.70859554912173195, -72.28873863121992827 43.708626597309582, -72.28868360192427645 43.70868898953204251, -72.28861670488821289 43.70865794221256806, -72.28867173421626546 43.70859554912173195))");
polys.push("Polygon ((-72.28867937913280173 43.68128700372371753, -72.28870989692754279 43.68121787078781892, -72.28883677695881715 43.68124737034975169, -72.28880625929561177 43.68131650331836369, -72.28867937913280173 43.68128700372371753))");
polys.push("Polygon ((-72.28870989692754279 43.68121787078781892, -72.28867937913280173 43.68128700372371753, -72.28855250033305424 43.68125750398056795, -72.28858301825000865 43.68118837017739509, -72.28870989692754279 43.68121787078781892))");
polys.push("Polygon ((-72.28875758974909616 43.70731868866845105, -72.28867461175950382 43.70741314750024742, -72.28856669218755826 43.70736325550515744, -72.28859111152762296 43.70733532324364745, -72.28849231240299389 43.70728958845403866, -72.28853517470287215 43.70724107129742464, -72.28853618715488949 43.70724143211536727, -72.28858627744764931 43.70718482813618522, -72.28861389128574899 43.70719766311712817, -72.28865301281724953 43.7071530068460774, -72.28873610498939684 43.70719151125653212, -72.2886954893819933 43.70723782190471951, -72.28873450469868089 43.70725608160287834, -72.28870185630113099 43.70729283790918629, -72.28875758974909616 43.70731868866845105))");
polys.push("Polygon ((-72.28878966571680564 43.69992176831293307, -72.28876183443776426 43.69991937800323001, -72.28876038890192035 43.6999282326171965, -72.28861846975823369 43.69991604397976914, -72.28863002680202499 43.69984521162097479, -72.28864600610674529 43.69984658367702224, -72.28864615194176224 43.69984569001820773, -72.28867337847334795 43.69984802784293265, -72.28867323264805123 43.69984892240181296, -72.28868731092606481 43.69985013108431104, -72.2886874567604707 43.6998492374254468, -72.28871468329516858 43.69985157524030939, -72.28871453747046871 43.69985246979924653, -72.28872861575010234 43.69985367847663582, -72.28872876158388294 43.69985278481770763, -72.2887559881216788 43.6998551226227363, -72.28875584229758999 43.69985601718170898, -72.28877194702116071 43.6998574002384359, -72.28877050147887928 43.69986625395259949, -72.28879833273363431 43.69986864426035567, -72.28880194471767595 43.69984650998421216, -72.28897129764200713 43.69986105392088405, -72.2889502200073224 43.6999902318061757, -72.28878086795498348 43.69997568693398193, -72.28878966571680564 43.69992176831293307))");
polys.push("Polygon ((-72.28879416541428782 43.70794138379110194, -72.28869700053442671 43.70789445760403424, -72.28872138637588307 43.70786747056725119, -72.28871640966906398 43.70786506657725567, -72.2888050955178727 43.70776843450098426, -72.28881131046297526 43.70777143569071654, -72.2888867575561278 43.70768922803747358, -72.28890439857796935 43.70769774832201193, -72.28890252138928929 43.70769979358711765, -72.28896862631172837 43.70773171992028239, -72.28897050473980812 43.70772967464735359, -72.28898781781953176 43.70773803559283976, -72.28892232605299739 43.70780939644164675, -72.2889503295313034 43.70782292046809658, -72.28893618925546605 43.70783832734974084, -72.28893336982643802 43.70783696560027209, -72.28889188511223551 43.70788216766487722, -72.28889503249946813 43.7078836878415089, -72.28887961987882704 43.7079004814413139, -72.28885134363927989 43.7078867392667334, -72.28882368505384193 43.70791687546967808, -72.28881869658115988 43.70791465426130884, -72.28879416541428782 43.70794138379110194))");
polys.push("Polygon ((-72.28880319994962633 43.6821086271675938, -72.28884442482227257 43.68201669209605598, -72.28893868094247921 43.68203895164565154, -72.28889745620858776 43.68213088765006091, -72.28880319994962633 43.6821086271675938))");
polys.push("Polygon ((-72.28880319994962633 43.6821086271675938, -72.28889745620858776 43.68213088765006091, -72.28885623258106818 43.68222282273210766, -72.28876197619261745 43.68220056221677794, -72.28880319994962633 43.6821086271675938))");
polys.push("Polygon ((-72.28883622117868413 43.70237925652219246, -72.28881959105471822 43.70230997900125658, -72.28882102902107931 43.70227399555967907, -72.28849314769273349 43.70228917544431368, -72.28847951992769083 43.70215012016753775, -72.2885096560456617 43.7021486655267708, -72.2885067263643748 43.70211536554287335, -72.28847213542002237 43.70211696682616775, -72.28846747659598293 43.70206400801737345, -72.28846291696945059 43.70206421913508876, -72.2884644627165045 43.70208089613965541, -72.28838836020531744 43.70208441983427861, -72.28838761378528943 43.70207593897726639, -72.28838833751892423 43.70207562181789029, -72.28838276111142136 43.70201790034945333, -72.28836082751752201 43.70201893681601746, -72.28834638503435883 43.70185635013555014, -72.28864814587808496 43.70184100678881123, -72.28864645439526271 43.70182343771411126, -72.28867999159315616 43.70182156939252849, -72.28873283397520311 43.70181847901694994, -72.28873274266199189 43.70181756684750241, -72.28892273831245063 43.70180757702561891, -72.28892068834282725 43.70185443299384787, -72.28892353082923705 43.70185433291331378, -72.28891714208228336 43.70196005518135252, -72.28891661948591718 43.70197010275692406, -72.28893046722842541 43.70197056470935593, -72.28893002831097192 43.7019779071326866, -72.28899012425151227 43.70197512457466615, -72.28899474711140272 43.70202768122930337, -72.28914677557342827 43.70203164894444114, -72.28918241616563023 43.70203257902485916, -72.28916903049353948 43.7023025455457983, -72.28894900337698459 43.7023132267163561, -72.2889456902073988 43.7023739730668197, -72.28883622117868413 43.70237925652219246))");
polys.push("Polygon ((-72.28886030131133111 43.70579981848644024, -72.28892639928443486 43.70575487755375832, -72.28900637488079894 43.70575446643872652, -72.28900569977797375 43.70573478389556499, -72.28933461991437071 43.70572922217436229, -72.2893387972840884 43.70585866024732269, -72.28931382235387559 43.7058590771190012, -72.28931419641627087 43.70586572836071326, -72.28931321208430916 43.70586568511927794, -72.28931436290743306 43.70592484371298525, -72.28934079578530714 43.70593114688348635, -72.28933696765446371 43.70593984526286846, -72.28919690627434136 43.70590486300219624, -72.28886317204965906 43.70591290590975575, -72.28886284015698038 43.7058940135550813, -72.28886030131133111 43.70579981848644024))");
polys.push("Polygon ((-72.28888016184293974 43.70841272949861178, -72.28893876290382536 43.7084388516742024, -72.28895608703545861 43.70841839969986609, -72.28899904811738963 43.7084375495868116, -72.28898172399500766 43.70845800156753569, -72.28904186956467015 43.70848481103067229, -72.2890379090237758 43.7084894859291353, -72.28906422296471135 43.70850121539631772, -72.28900185581935034 43.70857484093055945, -72.28897554063595976 43.70856311325609056, -72.28896968502246523 43.70857002702933869, -72.28896807327654983 43.70856930855227773, -72.28895602983877211 43.70858352673414515, -72.28893466206264407 43.70857400247466984, -72.28893076063424417 43.70857467806126806, -72.2889090550533524 43.70856500262506472, -72.28890812249626663 43.70856217249881581, -72.2888867547259224 43.70855264733022238, -72.28889879942406083 43.70853843004878314, -72.2888775887269901 43.70852897512843782, -72.28882466733792 43.70859144955178976, -72.28875666622343488 43.70856113827563405, -72.2888095876571839 43.7084986638831694, -72.2888079771557841 43.70849794539707744, -72.28888016184293974 43.70841272949861178))");
polys.push("Polygon ((-72.28892353082923705 43.70185433291331378, -72.28892006834749395 43.7018542239536032, -72.28892273725806206 43.70180759503267609, -72.28892421346075992 43.70178479103758207, -72.28910994738978957 43.70179062655495272, -72.28911011547418752 43.70178780663453466, -72.28911650671140876 43.70178800044689638, -72.28911633870181674 43.70179082756746425, -72.28914760772346426 43.70179181026690429, -72.28914785077195404 43.70178784235464065, -72.28919562425529932 43.7017893427018862, -72.28919406620588006 43.70181549718992642, -72.28919494858733685 43.70181552568659811, -72.28919341539551624 43.70184048565222668, -72.28919251061842033 43.70184045097703063, -72.28919094828417258 43.70186667119292423, -72.28915668506439829 43.70186563820697501, -72.28914677557342827 43.70203164894444114, -72.28899474711140272 43.70202768122930337, -72.28899012425151227 43.70197512457466615, -72.28893002831097192 43.7019779071326866, -72.28893046722842541 43.70197056470935593, -72.28891661948591718 43.70197010275692406, -72.28891714208228336 43.70196005518135252, -72.28892353082923705 43.70185433291331378))");
polys.push("Polygon ((-72.28899376411176547 43.681429462815899, -72.28902389196953493 43.68136114828330108, -72.28915182390814209 43.68139086408417882, -72.28912169618143935 43.68145917864935512, -72.28899376411176547 43.681429462815899))");
polys.push("Polygon ((-72.2890038062124205 43.70550666555776331, -72.28841768714858063 43.7055164662717246, -72.28841323492315496 43.70537632607921807, -72.28826785105414388 43.70537875672462746, -72.2882617993247294 43.7051882494852677, -72.28823515870384142 43.70518869498094006, -72.28823182647434464 43.70508377812624445, -72.28825846704880576 43.70508333263165213, -72.28825241539874469 43.70489282628163608, -72.28841606660169816 43.70489009017678939, -72.28842233775418435 43.70508749882235833, -72.28863546606584123 43.70508393521626544, -72.28863543566278338 43.70508255468202208, -72.28866980071556725 43.70508198065252259, -72.28866861630001495 43.70504470730631397, -72.2887282412256269 43.70504371047771741, -72.28872942566874826 43.70508098292309285, -72.2887643228826704 43.70508039966854597, -72.28876437065744653 43.70508178010819478, -72.28897749768070469 43.70507821587131758, -72.28897122469867043 43.70488080636675932, -72.28913487583385233 43.70487807013315518, -72.28914093027613319 43.70506857642021714, -72.2891675720753426 43.70506813070706187, -72.28917090593542127 43.70517304752497267, -72.28914426533042104 43.70517349323245782, -72.28915031985211215 43.70536400040884928, -72.28899935262273857 43.70536652539601619, -72.2890038062124205 43.70550666555776331))");
polys.push("Polygon ((-72.2890038062124205 43.70550666555776331, -72.28899935262273857 43.70536652539601619, -72.28912924274237639 43.70536435280951792, -72.28912933648850014 43.70537173373148931, -72.2892423727992508 43.70537110730245445, -72.28924228078821557 43.70534051909685758, -72.28938196962249663 43.70533975815700245, -72.28938326202559495 43.70546460362196228, -72.28938984868825912 43.70546458123850897, -72.28939082305295472 43.70555570660192046, -72.2893842071067354 43.70555589745710279, -72.28938520418165581 43.70565221336956796, -72.28924529006654609 43.70565297554078654, -72.28924436969134604 43.70556404874204759, -72.28920088293494928 43.70556428559748952, -72.28920134851651369 43.70558086045706148, -72.28916170771884708 43.70558107635081058, -72.28916153765969455 43.7055646429919733, -72.28900477963276217 43.70556549660065571, -72.2890038062124205 43.70550666555776331))");
polys.push("Polygon ((-72.28902389196953493 43.68136114828330108, -72.28899376411176547 43.681429462815899, -72.28886583339777872 43.6813997459315857, -72.28889596138661489 43.68133143143157326, -72.28902389196953493 43.68136114828330108))");
polys.push("Polygon ((-72.28907702444016081 43.69967219349031495, -72.28908584338417143 43.69966508265177652, -72.28907856083718286 43.69970822375958619, -72.28907236855914675 43.6996997788582604, -72.28907702444016081 43.69967219349031495))");
polys.push("Polygon ((-72.28907856083718286 43.69970822375958619, -72.28908584338417143 43.69966508265177652, -72.28909599218766857 43.6996049632944974, -72.28910349841444827 43.69960563077121662, -72.28910441841341594 43.69960018486339237, -72.28914101201890219 43.69960343643839451, -72.28914193077393691 43.69959799053702909, -72.28918509185773189 43.69960182557748141, -72.28918417310657674 43.69960727147915946, -72.28922076672039054 43.69961052302857496, -72.28921984673182521 43.69961596893728029, -72.28925984764505586 43.69961952323961185, -72.28926076638953191 43.69961407733739378, -72.2893139357962724 43.69961880198345483, -72.28931301705655699 43.69962424788609923, -72.28935308379281821 43.69962780809770919, -72.2893540025289667 43.69962236219476637, -72.28947035091884743 43.69963270010534018, -72.28946943219311549 43.69963814600914276, -72.28948069092044193 43.69963914674055161, -72.28947149746151979 43.69969360581252005, -72.28946023873345439 43.6996926059802675, -72.28945610199126293 43.69971711391021074, -72.28946360822645545 43.69971778046318178, -72.2894493592426528 43.6998021915660928, -72.28944186665205507 43.69980152583793398, -72.28944093302578722 43.69980697092246658, -72.2894109080237115 43.69980430290199536, -72.28940309381636098 43.69985059265586358, -72.28910659498936297 43.69982424709572655, -72.28911440942187028 43.6997779573605527, -72.28907499947416682 43.69977445559358387, -72.2890759194781225 43.69976900968608646, -72.28906841199069788 43.6997683422144334, -72.28907856083718286 43.69970822375958619))");
polys.push("Polygon ((-72.28908229841852062 43.70488004677120841, -72.28902705444380672 43.70488067430576962, -72.28902355442716043 43.70478233605806651, -72.28901221020291246 43.7047823978252481, -72.28900879453325956 43.70467158241457639, -72.28917036534041074 43.70466869094512674, -72.28917034074332548 43.70466631400731217, -72.28932082419288463 43.70466384813441607, -72.28932088476425122 43.70466970002733831, -72.28937129586662991 43.70466869365072426, -72.28937495647502942 43.70477877596299265, -72.2893686541290208 43.70477881029759715, -72.28937159333813156 43.70486786381889033, -72.28921884217572824 43.70487052482329915, -72.28921614303398258 43.70478019009799198, -72.2890790226493607 43.70478276578062093, -72.28908229841852062 43.70488004677120841))");
polys.push("Polygon ((-72.28910659498936297 43.69982424709572655, -72.28940309381636098 43.69985059265586358, -72.28943687258748696 43.69985359395208491, -72.28942415600964466 43.69992892943803042, -72.28943166228029327 43.69992959689291467, -72.28942017066164283 43.69999767117326428, -72.28932634038520177 43.69998933380319528, -72.289327260369447 43.69998388789400678, -72.28929407383589023 43.69998093914353632, -72.28929406690903647 43.69999897109890696, -72.28921088017781926 43.69999895526844114, -72.2892108829529576 43.69999346845239074, -72.28912013356770672 43.69999345054216633, -72.28912013078429766 43.69999893735826646, -72.28903694405174463 43.69999892140120323, -72.28903888522101795 43.69986312690778618, -72.28909431603661062 43.6998631373987223, -72.28910096499096483 43.69982374671520375, -72.28910659498936297 43.69982424709572655))");
polys.push("Polygon ((-72.2891100923633303 43.68190549406543965, -72.28915046340873118 43.68181272376607183, -72.28924224111977992 43.6818337598688089, -72.28920186896228017 43.68192653020625471, -72.2891100923633303 43.68190549406543965))");
polys.push("Polygon ((-72.2891100923633303 43.68190549406543965, -72.28920186896228017 43.68192653020625471, -72.28916149667253421 43.68201929962866359, -72.28906971995482422 43.68199826435654387, -72.2891100923633303 43.68190549406543965))");
polys.push("Polygon ((-72.28913554437062317 43.68163646896634589, -72.2891777673910525 43.68154423220934035, -72.28926972883600399 43.68156640407730862, -72.28922750594169599 43.68165864086716965, -72.28913554437062317 43.68163646896634589))");
polys.push("Polygon ((-72.28913554437062317 43.68163646896634589, -72.28922750594169599 43.68165864086716965, -72.28918528291011114 43.68175087674072188, -72.28909332245306985 43.68172870480027825, -72.28913554437062317 43.68163646896634589))");
polys.push("Polygon ((-72.28923961577676494 43.70741354569690174, -72.28907422193901766 43.70760813044074666, -72.2889896248188677 43.70757054983884871, -72.28902698650787784 43.70752645206371056, -72.28903610367986232 43.70753042570986935, -72.28905952176057781 43.70750322965346868, -72.28903672631930988 43.70749311194182241, -72.28914134057548324 43.70736982116007852, -72.28923961577676494 43.70741354569690174))");
polys.push("Polygon ((-72.28930634999140636 43.70636410818838158, -72.28927233119316043 43.70636488123790286, -72.28927258676003476 43.70637075276846417, -72.28909494024046012 43.70637483630491005, -72.28909490726719866 43.70637416773635664, -72.28905525277851041 43.70637574906623968, -72.28904799562120331 43.70620965192360785, -72.28900831073931954 43.70621056375449598, -72.28900813046385565 43.70620645053983111, -72.28898688448565224 43.70620693884347929, -72.28895036974641641 43.7061820753396546, -72.28894878441715832 43.70614576545542462, -72.28898305567494731 43.70611927717606449, -72.28900431029744311 43.70611878792598759, -72.28900066823945281 43.70603550765665801, -72.2890743727688232 43.70603381384277242, -72.28907329235256896 43.70600913634807938, -72.28926227770857338 43.70600479216962952, -72.2892633582301869 43.70602947236213964, -72.28935596054165558 43.70602734420556601, -72.2893608506997225 43.70613933603194567, -72.28937313302759549 43.70613902160149422, -72.28937585699266322 43.70620140105385332, -72.28929928975563257 43.70620247881077347, -72.28930634999140636 43.70636410818838158))");
polys.push("Polygon ((-72.28934813899894607 43.708135450762434, -72.28930185382205309 43.70811400324715379, -72.28929385316668288 43.70812308887701647, -72.2892458250780976 43.70810083357449827, -72.28925820254211487 43.7080867764532357, -72.28922883589862636 43.70807319242283739, -72.28925506121312594 43.70804340955441347, -72.28924033726167409 43.70803658715881568, -72.28925841598984903 43.70801605722193273, -72.28927313994759629 43.70802288051525863, -72.28928828523369532 43.70800567968974093, -72.2892014725656793 43.70796545162544078, -72.28924837637477196 43.70791218505623732, -72.2893676664502749 43.70796746164779734, -72.28934924195371536 43.70798838501380601, -72.28935255701821916 43.707989920465522, -72.28934270339186696 43.70800111064365723, -72.28933938831769979 43.70799957429164806, -72.28932873143888571 43.70801167700950884, -72.28942115457689965 43.70805450439745243, -72.28935374883047871 43.70813105128836185, -72.28935251580784893 43.70813048016417923, -72.28934813899894607 43.708135450762434))");
polys.push("Polygon ((-72.28942138020852326 43.70700961008355989, -72.28962800072332584 43.70706695865477087, -72.28957935129986367 43.70715919779890868, -72.28948899167038178 43.70713411756323552, -72.28947953187741859 43.70715205249339164, -72.28942302012470122 43.7071363680559557, -72.28943247992282295 43.707118432230331, -72.28937273050330248 43.7071018482422744, -72.28942138020852326 43.70700961008355989))");
polys.push("Polygon ((-72.28981685742344609 43.70669693327707961, -72.28993165176564162 43.70672922814847539, -72.28987599937848074 43.70683286622621466, -72.28976170857544048 43.70680056855466233, -72.28978075052634722 43.70676480058506286, -72.28976658947799194 43.70676067088075456, -72.28978217117899874 43.70673150574718591, -72.28979658218271709 43.70673545137377403, -72.28981685742344609 43.70669693327707961))");
polys.push("Polygon ((-72.28993520441545684 43.70298948008494477, -72.28993670842353936 43.70304890859548408, -72.28996632493898744 43.70304851398064017, -72.28996697790152837 43.703074295490282, -72.29012136876423256 43.70307251380847191, -72.29012155971724951 43.70308004541325886, -72.29011966922567467 43.70308007102595127, -72.29011978010181849 43.70308442493701762, -72.29021429869698068 43.70308316499787082, -72.29021503989820019 43.7031124220766003, -72.29023394362957333 43.70311217043922625, -72.29023484670433675 43.70314782699870193, -72.29021594297110198 43.70314807953631231, -72.2902166829337034 43.70317733662145798, -72.29012216419067727 43.70317859656343984, -72.29012229197812189 43.7031836245310501, -72.29012418248225913 43.7031835998183098, -72.29012435527538116 43.70319045647305956, -72.28994035534897478 43.70319290905425191, -72.28994073744397042 43.70320799476474605, -72.28994199653696739 43.70320797799833912, -72.28994217055931415 43.70321483554671005, -72.28994091022559587 43.70321485231986713, -72.28994094551694616 43.70321622292684083, -72.28993905502096595 43.70321624853657738, -72.28993907814121656 43.70321716287680403, -72.28992962564252878 43.70321728912499992, -72.2899296025224487 43.70321637478475907, -72.28991258925249497 43.70321660076272252, -72.28991261237231924 43.70321751510298469, -72.28988992761379961 43.70321781790528348, -72.2898899044943164 43.70321690356503552, -72.28978782367609313 43.70321826386629027, -72.28978784679401315 43.70321917820655955, -72.28976516202463642 43.70321948008410828, -72.28976513890704325 43.7032185657438319, -72.2897506450720897 43.70321875906200404, -72.2897506681894555 43.70321967340228753, -72.28973995659647755 43.70321981639907705, -72.28973993347928229 43.70321890205880067, -72.2897380429737666 43.70321892676519582, -72.28973800767772673 43.7032175552581279, -72.28973674858444554 43.70321757202229662, -72.28973657459481217 43.70321071537347279, -72.28973783492853045 43.70321069860256813, -72.28973564731431622 43.70312429886107708, -72.28970540182932325 43.70312470134486915, -72.28970424354575641 43.7030789870423817, -72.28973449024834963 43.7030785845522658, -72.28973230263657967 43.70299218390864127, -72.28973104230742308 43.70299220067947488, -72.28973086831007322 43.70298534313037209, -72.28973212863907349 43.70298532635953137, -72.28973209459324778 43.70298395574567962, -72.2897339850820515 43.70298393013940341, -72.2897339619650694 43.70298301579907729, -72.28974467351589794 43.70298287280306937, -72.28974469663303637 43.7029837871434097, -72.28975919041143072 43.70298359382631048, -72.28975916730338724 43.70298268038601464, -72.28978185197419748 43.70298237761017646, -72.28978187509190434 43.70298329195049547, -72.28988379797641528 43.70298193431592892, -72.28988393239242782 43.70298101731658136, -72.28990661707103982 43.70298071541598262, -72.28990664019063672 43.70298162975628031, -72.28992365338486081 43.70298140287955846, -72.2899236302649939 43.70298048853928208, -72.28993308148591268 43.7029803622985682, -72.28993310460590749 43.70298127663884458, -72.28993499634441378 43.70298125192250893, -72.28993503040418034 43.70298262343630569, -72.2899362907330385 43.70298260666322676, -72.28993646474447132 43.70298946331186585, -72.28993520441545684 43.70298948008494477))");
polys.push("Polygon ((-72.28993939179400741 43.70724702105106019, -72.28986909999474619 43.70722676854143884, -72.28986374944210525 43.7072365418137494, -72.28982860355056062 43.70722641509098594, -72.28983395410806168 43.707216641820267, -72.28976307623399578 43.70719621962813051, -72.28980774753023297 43.70711463275795694, -72.28987819101483581 43.70713493038203978, -72.28988436960010233 43.70712364588587207, -72.28991951544060157 43.70713377259196619, -72.28991333810157016 43.70714505708322406, -72.28998406289657908 43.70716543501390561, -72.28993939179400741 43.70724702105106019))");
polys.push("Polygon ((-72.28998940015365804 43.70391664866168213, -72.2899894318753411 43.70391755485429996, -72.28999069207455364 43.70391752368027483, -72.28999352638295761 43.7039782896232083, -72.29019730215664197 43.70397328540058624, -72.29020250499614519 43.7040847903893237, -72.29003049197056896 43.70408901475837382, -72.29003189861369094 43.70411915926857915, -72.29000013547263848 43.70411993913405979, -72.29000156441261993 43.70415056055743008, -72.29000030419921075 43.70415059083155995, -72.29000034856039747 43.70415151945685039, -72.28999908820708242 43.70415153623078908, -72.28999912992851762 43.7041524495693352, -72.2898026344512914 43.70415727513920245, -72.28980259148292475 43.70415636090730516, -72.28980132391883728 43.70415640021999337, -72.28980128955082307 43.70415547784060095, -72.28980002934649463 43.70415550901256552, -72.28979613229473955 43.70407189800683057, -72.28978919248234547 43.70407206814940082, -72.28978612248461388 43.70400625592183985, -72.28979304660977334 43.70400600935946755, -72.28978915778782266 43.70392247211179182, -72.28979041798727678 43.70392244093998357, -72.28979039627732561 43.70392154279330299, -72.28979163522802764 43.70392149643621593, -72.28979159226004469 43.7039205822042689, -72.28998808697474487 43.70391575755780877, -72.28998812994572631 43.70391667178968476, -72.28998940015365804 43.70391664866168213))");
polys.push("Polygon ((-72.28999223814587083 43.70298406300532434, -72.28999003850346128 43.70295173655453169, -72.28993786737348159 43.7029536051626053, -72.28984812374149271 43.70290631091869216, -72.28979977750320529 43.7028591842562335, -72.28978049893589741 43.70279868435592618, -72.28972926029176449 43.70279977552929296, -72.28972696868814296 43.70276610217577939, -72.28971048688893575 43.70276576268573621, -72.28969430972736632 43.70276345218989178, -72.2896788795496974 43.70275923578218169, -72.289664621855664 43.70275322905232684, -72.28965192667114081 43.70274559638709633, -72.28964114230775806 43.70273654740390157, -72.28963256661366188 43.7027263306981979, -72.28962643450248038 43.7027152276106392, -72.28962291287925268 43.70270354145409186, -72.28962209936283045 43.70269159392010749, -72.28962401720251307 43.70267971340589952, -72.28962861270395024 43.70266822602765444, -72.28963576009846292 43.70265744659329954, -72.28964526270927138 43.70264767139575923, -72.28965686029255266 43.70263916827223483, -72.28967023395318847 43.70263217207712358, -72.28968501595758767 43.70262687382792421, -72.28970080212066307 43.70262341883761792, -72.2897171567214798 43.70262190218760168, -72.28971465143177966 43.70258508426914545, -72.28974889291265526 43.70258385804191192, -72.2897711195402195 43.70256605779429293, -72.28982622957659032 43.70256408413340665, -72.28984964807946767 43.70258026384065175, -72.29016167082703248 43.70256908905598436, -72.29016555904529184 43.70262535523364278, -72.29017617990363931 43.70262496697411336, -72.29017686464844417 43.70263501336857814, -72.29016621000378962 43.70263609216259937, -72.29016990545652277 43.70269039724848881, -72.29018336708166714 43.70288820587835232, -72.29024223269817639 43.70288609812187275, -72.29024827574282597 43.70297489259862544, -72.28999223814587083 43.70298406300532434))");
polys.push("Polygon ((-72.29006349563017864 43.70689026967884416, -72.29002866683677553 43.70688055441713971, -72.28997990779475913 43.70686695392603838, -72.2900200825995114 43.70679115730337116, -72.29015939636748556 43.70683001650506583, -72.29011922047278915 43.70690581318206114, -72.29008789445342131 43.70689707520423184, -72.29006349563017864 43.70689026967884416))");
polys.push("Polygon ((-72.29010609060378556 43.70346571144094838, -72.29010688069494961 43.70347706415449096, -72.29010554992184723 43.70347710831562438, -72.29011438850064053 43.7036181417279721, -72.2901156399067446 43.70361810069982056, -72.29011635186317619 43.70362945563928037, -72.29010069877610078 43.70362997214787981, -72.2901006422130763 43.70362906339055087, -72.28996540501499624 43.70363352360141818, -72.28996824413007971 43.70367883180224311, -72.28996949677815564 43.70367879076891171, -72.28997020746729163 43.70369014571610222, -72.28995455560354344 43.70369066219801368, -72.28995449904265058 43.70368975344060658, -72.28979202595478171 43.70369511171469412, -72.28979208251321609 43.70369602047220781, -72.28977643064614256 43.70369653692974055, -72.28977571874358432 43.70368518108787725, -72.28977697139194447 43.70368514005667748, -72.28977392585828454 43.70363653873771881, -72.28977267322025568 43.70363658066890622, -72.289772132224698 43.70362795019271118, -72.28976086339038432 43.70362832214561166, -72.28975747913230521 43.7035743267813217, -72.28975497509007653 43.7035744097365324, -72.28975309332282961 43.70354437491776167, -72.28975559736382195 43.7035442919625865, -72.28975221128817452 43.70349023990311821, -72.28976348010601782 43.70348986885124987, -72.28976294035392414 43.70348123836800625, -72.28976419175745605 43.70348119734372005, -72.28976114624630611 43.7034325960225658, -72.28975989484376896 43.70343263704682357, -72.28975912639970147 43.70342037334675211, -72.2897747782044604 43.70341985779199945, -72.28977483599361165 43.70342076564278955, -72.28993729665552337 43.70341523734869327, -72.28993725055102004 43.70341449954661783, -72.28995290234310289 43.7034139830674917, -72.28995361427530497 43.7034253389085805, -72.28995236163250127 43.70342537994171295, -72.28995588483996926 43.70347157547872285, -72.29009049535316933 43.70346713579848341, -72.29009043879979401 43.7034662279411279, -72.29010609060378556 43.70346571144094838))");
polys.push("Polygon ((-72.29011922047278915 43.70690581318206114, -72.29012036673340447 43.7069055567118312, -72.29013228847057349 43.70690886332666736, -72.29013397741265123 43.70690566068470417, -72.29016135223771755 43.70691325281917017, -72.29015966453754061 43.7069164554547811, -72.29020381766159176 43.70692870119620466, -72.29015521617341733 43.70702092052422216, -72.29016183964904485 43.70702275742896603, -72.29016960369081346 43.70703563820554649, -72.29016275855903473 43.70704868597960768, -72.29014518179675974 43.70705438385925845, -72.29013854960548713 43.70705254430090037, -72.29009004162215035 43.70714458667661262, -72.29004749952191844 43.7071331250624695, -72.29004450250155855 43.70713881001486811, -72.29001359497955548 43.70713023804677277, -72.29001657980093398 43.70712457296313858, -72.28997463016236225 43.70711257075217304, -72.28997489787705888 43.70711206435601071, -72.28997404550186445 43.70711182598672906, -72.29001622965846252 43.70703223993965025, -72.2899848836810861 43.70702349664227171, -72.29001434586625408 43.70696791269037362, -72.29004569181877571 43.70697665597991488, -72.29008789445342131 43.70689707520423184, -72.29011922047278915 43.70690581318206114))");
polys.push("Polygon ((-72.290163091472877 43.70546749715384038, -72.29016367928137754 43.70548159436427227, -72.29016610803149945 43.70548154151293829, -72.29017495651052627 43.70569362593875695, -72.29017058162935427 43.70569373170931016, -72.28997103191665019 43.70569907916701879, -72.289948066528396 43.70569956982498638, -72.2899417978166241 43.70569974621810161, -72.2899382917861999 43.70561570647682004, -72.28991823776443937 43.70561625865901334, -72.28991737169079101 43.7055798494562282, -72.28993676981481542 43.70557922074491586, -72.28993302265993748 43.70548939039888126, -72.28998003836416331 43.70548835816481414, -72.28997932690613482 43.7054713040144307, -72.28978507319222047 43.70547556919090937, -72.28978040870343591 43.70536375345272262, -72.28997278034574947 43.70535953004983298, -72.28997203400697913 43.70534162372775455, -72.29011559013191857 43.70533847183132536, -72.2901163444795003 43.705356548221026, -72.29030432870371214 43.70535242019609967, -72.29030899724348558 43.7054642934946429, -72.290163091472877 43.70546749715384038))");
polys.push("Polygon ((-72.29017531786682582 43.70454226716817203, -72.29017830531458344 43.70459516299577984, -72.29025760272647005 43.70459291227230381, -72.2902610741282956 43.70465502482308295, -72.29024694701394083 43.70465544031980443, -72.29024875562596719 43.70468832422943706, -72.29020444930563372 43.70468962801434287, -72.29007941617362576 43.70478800038332423, -72.29008178935048079 43.70483047500861318, -72.29003463242349881 43.70483183747835909, -72.29003500719036879 43.70483962729726102, -72.29002259911096928 43.70483999288820343, -72.2900218274253632 43.70484059383977637, -72.29002196623019927 43.70484321317201903, -72.28996656519049679 43.70484484288951421, -72.28996641026931513 43.70484222454517464, -72.28996558442804599 43.70484167010818055, -72.28995316517281822 43.70484203485247576, -72.28995273236849073 43.70483427055160774, -72.2899508433793585 43.70483432675555235, -72.28994713668163286 43.7047685144127982, -72.28987382485246371 43.70477071698478255, -72.2898744735591805 43.7047831550465844, -72.28975364776302115 43.70478674617400117, -72.28975214636079727 43.70476025824446253, -72.28973202230764628 43.7047608494784825, -72.28972801414437299 43.70468914604519028, -72.28974815763193362 43.70468851690321799, -72.28974683262738665 43.70466480471222326, -72.28986770693617814 43.70466124933016516, -72.28986897422478819 43.70468393666035212, -72.28994672425180568 43.70468164958599999, -72.29004751476725232 43.70460234964657076, -72.29004498487368835 43.70455708027153463, -72.29009094194812235 43.704555727942072, -72.2900903283555607 43.70454476669626587, -72.29017531786682582 43.70454226716817203))");
polys.push("Polygon ((-72.29021185762789514 43.7003911670394416, -72.28971729472672791 43.70034881203228849, -72.28967555873751394 43.70034523764570622, -72.28968275978606073 43.700179128169097, -72.28974681443152406 43.70013866488535115, -72.29012689399691283 43.7001712440120258, -72.2901304533779836 43.70014982553450977, -72.29024828091766608 43.70015960824363788, -72.29027629001954836 43.70016238154907739, -72.29026975206419081 43.70021253017835505, -72.29034921624452181 43.70021794884296895, -72.29034287329767494 43.70026260961122944, -72.29023309779734063 43.70025613491776539, -72.29022391839566808 43.70031656140307774, -72.29024841277278313 43.70031835931656161, -72.29023881717694167 43.70038974007242416, -72.29021239888832895 43.70038773033608948, -72.29021185762789514 43.7003911670394416))");
polys.push("Polygon ((-72.29030748698407649 43.70588000569782139, -72.29011735063158994 43.70588398255540596, -72.29011626787880118 43.70585672639712271, -72.28996664631762314 43.70586003647951401, -72.28996535317939731 43.70583007137164344, -72.28981262682457043 43.70583356379508899, -72.28980873982726507 43.70574411133839732, -72.2899733882797193 43.70574125145775923, -72.28997159286021201 43.70569993116973251, -72.28997216469180387 43.70569991815073507, -72.28997207413956971 43.70569788449790849, -72.29017058162935427 43.70569373170931016, -72.29017069052791555 43.70569645741178277, -72.29016818484022622 43.70569650978282539, -72.29016852865308351 43.70570514132962359, -72.290200519329332 43.70570444748214811, -72.29023370733479226 43.70570495498080277, -72.29026636057892574 43.70570929066303734, -72.2902976453958388 43.705717342969443, -72.29032998074806926 43.70572404483831974, -72.29036336872277957 43.70572696518220113, -72.29042630242427947 43.70572564789108583, -72.29042646534195171 43.70572975309794828, -72.29054295010342912 43.70572731903473596, -72.29054683819093441 43.70581677146016375, -72.290518670815203 43.70581741573518286, -72.29051861918732413 43.70581650515133987, -72.29042560320371535 43.70581842859228061, -72.29042686720596578 43.70585022818606546, -72.29038550218075443 43.70585109385980616, -72.29038488857511879 43.70585712944273382, -72.29038287127146134 43.70586300167295235, -72.29037950556580938 43.70586853923639836, -72.29037489277003203 43.70587358136855727, -72.29036916412080416 43.70587798154263481, -72.29036248826092503 43.70588161102909908, -72.29035505888867874 43.7058843643632926, -72.29034709229553357 43.70588616115920644, -72.2903388211905451 43.70588694884330039, -72.29033048605339218 43.70588670630191075, -72.29032232887499276 43.7058854385151534, -72.29031458701956581 43.70588318289073015, -72.29030748698407649 43.70588000569782139))");
polys.push("Polygon ((-72.29031081294473893 43.70859944012327247, -72.2903518895623165 43.70854892039562145, -72.29033188477447425 43.70854043393502764, -72.29034408544325174 43.70852573591605505, -72.29036257527047837 43.70853386521491046, -72.29040489337225495 43.70848150886237704, -72.29047377701854771 43.70851094487918687, -72.29047253733352818 43.70851296328886093, -72.2905437004219209 43.70854348400161626, -72.29051705904136327 43.70857581841623585, -72.29044918778491535 43.70854674322713862, -72.29043848503410175 43.70856015319113652, -72.29051775246071543 43.70859410484060703, -72.2904938479638588 43.70862294916302204, -72.29053284764869147 43.70863956210961021, -72.29052164496661703 43.70865334023599758, -72.29053455923737204 43.70865875654178723, -72.29051713157886638 43.70868006798076522, -72.29050396040310034 43.70867428674895905, -72.29049325698795769 43.70868751400836061, -72.29036865859438876 43.70863424050686774, -72.2903748873801959 43.7086270735078557, -72.29031081294473893 43.70859944012327247))");
polys.push("Polygon ((-72.29047393196260884 43.70733969457219104, -72.29048166900885519 43.70732519730874088, -72.29060862559050804 43.70736085706438701, -72.29064913262732262 43.70728495850658391, -72.29067264496758582 43.70729156533136006, -72.29074022403985111 43.70716476789810656, -72.29076026187276227 43.70717037930258897, -72.29069262826585884 43.70729717884540122, -72.29079724845625776 43.7073265608753232, -72.29078689351908338 43.70734596070553835, -72.29091855279710899 43.70738294093501963, -72.2909110421963419 43.70739701126058918, -72.29091692060211471 43.7073986622769155, -72.2909096375868927 43.70741230562885704, -72.29090376042999821 43.70741065550541293, -72.29089624982236728 43.7074247258299593, -72.29086803743811629 43.70741680092207559, -72.29085165188342899 43.70744750069961526, -72.29087986551137135 43.70745542470462652, -72.29084436321906537 43.70752193894060866, -72.290747970417641 43.70749486480281831, -72.29079985714503209 43.70739765083466466, -72.2907645917066759 43.70738774556874517, -72.29073989949669965 43.70743400779911525, -72.29059178344115821 43.70739240535817771, -72.29060088856112998 43.70737535343617708, -72.29047393196260884 43.70733969457219104))");
polys.push("Polygon ((-72.29048166900885519 43.70732519730874088, -72.29047393196260884 43.70733969457219104, -72.29041925637338295 43.70744213138650736, -72.29029083013669776 43.70740605910927457, -72.29032451218611754 43.70734295541945613, -72.29017522071325175 43.70730102222697155, -72.29022494664172882 43.70720785889322002, -72.29037423791655215 43.70724979202261551, -72.29040791979255687 43.70718668830755149, -72.29053634438739095 43.70722276046375754, -72.29048166900885519 43.70732519730874088))");
polys.push("Polygon ((-72.29052182355901834 43.70352009504730972, -72.29045280690978359 43.70352167060355697, -72.29044506875598586 43.70334206071461836, -72.29050177713645553 43.70334077465574296, -72.29050154313662802 43.70333531793725967, -72.29051649245604949 43.70332377221519238, -72.29056311911159582 43.70332271486322639, -72.29057903511645122 43.70333356107990852, -72.29057927035452735 43.70333901689140532, -72.29074935330686458 43.70333516046111555, -72.29075343020252831 43.70342976655923906, -72.29064001452530874 43.7034323388926822, -72.29064367653056422 43.70351734266224497, -72.29057472799981099 43.70351890621942204, -72.2905788635421942 43.70361488550024376, -72.29052595912912693 43.7036160851307045, -72.2905240680043164 43.703586381600104, -72.29051512863624396 43.70358658430181009, -72.29051353416174663 43.70354959492409819, -72.2905224747649271 43.70354939221578405, -72.29052182355901834 43.70352009504730972))");
polys.push("Polygon ((-72.29052595912912693 43.7036160851307045, -72.2905788635421942 43.70361488550024376, -72.29065040927311259 43.7036125211052493, -72.29065805887952934 43.70376463266391909, -72.2906746643935918 43.70376419368540155, -72.29067665714829616 43.70380512227045244, -72.29066011613410581 43.70380556089713764, -72.29066778777546176 43.70395811696191402, -72.29047393878610706 43.70396324786091213, -72.29046572049647068 43.70381810950313195, -72.29044189800856657 43.70381866974239671, -72.29043912664826621 43.70376353877365005, -72.29046386375183886 43.70376288443704738, -72.29045656014532995 43.70361765107519147, -72.29052595912912693 43.7036160851307045))");
polys.push("Polygon ((-72.29067158755795219 43.70405364443214324, -72.29067677365169686 43.70413869117471251, -72.29079013034123591 43.70413496884327031, -72.2907958966942914 43.70422952879900436, -72.29062589356783519 43.70423498517929062, -72.29062622556337203 43.70424043866151464, -72.29061148344594301 43.70425212457536901, -72.29056487922618146 43.70425362015652127, -72.2905487709931549 43.70424292439975034, -72.2905484377640164 43.70423747092403488, -72.29049175639589464 43.70423928969743343, -72.29048080929402431 43.7040597675518967, -72.29054979128646607 43.70405754232067608, -72.29054738289683257 43.70402809003409317, -72.29053844681247654 43.7040283764257893, -72.29053619245750895 43.70399140505396218, -72.29054512853636538 43.70399111866249342, -72.29054365164665796 43.70396140297248877, -72.29059682122448294 43.70395990216464099, -72.29060267107527693 43.70405584507749808, -72.29067158755795219 43.70405364443214324))");
polys.push("Polygon ((-72.290837224775089 43.7056151259860286, -72.29083311864876293 43.70561410883350817, -72.29083141155352621 43.7055485943318871, -72.29093795524619281 43.70554662188025219, -72.2909380296188715 43.70554936487182829, -72.2910160798806487 43.7055687282910128, -72.29101755602206936 43.70556559160230847, -72.29131115260815932 43.70563833286691846, -72.29129673957324087 43.70566894543223668, -72.29129973116545216 43.70566968603841218, -72.29130675213673385 43.70568006232065983, -72.29130160992713172 43.70569098570711475, -72.29128732635774668 43.70569607172401305, -72.29128431983934888 43.7056953275988036, -72.29126990316761692 43.70572595098109048, -72.29097630620134396 43.70565320961392786, -72.29097783457334003 43.70564996463271967, -72.290837224775089 43.7056151259860286))");
polys.push("Polygon ((-72.29088828863201854 43.70482482772747801, -72.29051788422870573 43.70483331513881353, -72.29050487290744798 43.70453444215508654, -72.29066739616506254 43.7045307180115401, -72.29067303167273906 43.70466016160177247, -72.29072139331275082 43.70465905331014511, -72.29072363627578568 43.70471057968760675, -72.29088315451767244 43.70470692384744638, -72.29088828863201854 43.70482482772747801))");
polys.push("Polygon ((-72.29089830441508013 43.70720903932655688, -72.29059578820761089 43.70712431635045903, -72.29064538765896941 43.70703111751914349, -72.29073285780701497 43.70705463030330407, -72.29079006586599121 43.70694714904302458, -72.29091854009588758 43.70698312959386556, -72.29086088207840533 43.70709147023642061, -72.29094790347392063 43.70711584126775762, -72.29089830441508013 43.70720903932655688))");
polys.push("Polygon ((-72.29092860670063203 43.70554675754414831, -72.29083141155352621 43.7055485943318871, -72.29083311864876293 43.70561410883350817, -72.290837224775089 43.7056151259860286, -72.29082659663933441 43.70563770184612196, -72.29078074508068141 43.70562634227917442, -72.29079267459079006 43.705601002418625, -72.29078870930101175 43.70544997247974806, -72.2909258769866625 43.70544751149558493, -72.29092860670063203 43.70554675754414831))");
polys.push("Polygon ((-72.29094439102944136 43.70544717906270904, -72.2909258769866625 43.70544751149558493, -72.29078870930101175 43.70544997247974806, -72.29071977129929394 43.7054512093440195, -72.29072476630378219 43.70559770453689197, -72.29057418004200031 43.70560040593711904, -72.29056918541320442 43.70545391163557269, -72.29056351520814871 43.70545401279070319, -72.29056208147615337 43.70541195518284638, -72.2905428566525643 43.70541230043397007, -72.29054165663305298 43.70537710454492952, -72.29056088145475201 43.70537676019407769, -72.29055941728312007 43.70533380088672715, -72.29068432763484964 43.70533156010720433, -72.2906841869389325 43.70532744577846529, -72.29072292804958977 43.70532675093393493, -72.29072249981392417 43.70531417486464676, -72.29077605583580635 43.70531321370233968, -72.29077648408265588 43.70532578977135785, -72.29081522161834528 43.7053251093161208, -72.29081538201452872 43.70532920823600165, -72.2909402726433683 43.7053269816854808, -72.29094175678736178 43.70536992647773644, -72.29096106346668194 43.7053695798123627, -72.29096226372200817 43.70540477479556074, -72.2909429570314046 43.70540512146119738, -72.29094439102944136 43.70544717906270904))");
polys.push("Polygon ((-72.29098955949672245 43.70787330611528176, -72.29116418856635562 43.70798592858333365, -72.29112968967721997 43.70801428278540612, -72.29116090823977459 43.70803423046596947, -72.29111040899364582 43.70807565731073652, -72.29113833193960659 43.70809379407060646, -72.29108457941535448 43.70813761664779662, -72.29102112532304147 43.70809681232663735, -72.29106987243768856 43.7080566749846966, -72.29102723056271884 43.70802910762832028, -72.2910167267339574 43.70803739519395492, -72.29095403341366932 43.70799695300539156, -72.29096803158130058 43.70798535392381723, -72.29093655555998055 43.70796485945720633, -72.29091555672201252 43.70798216537521341, -72.29084321843626526 43.70793555725470014, -72.29087221776850924 43.70791180549998955, -72.2908894773072177 43.70792286754297606, -72.2909242300226822 43.70789469563980134, -72.2909460590095847 43.70790884154092737, -72.29098855840720717 43.70787404243571217, -72.29098955949672245 43.70787330611528176))");
polys.push("Polygon ((-72.29099174783922876 43.7035850791457392, -72.29099093386737707 43.70350664740972491, -72.29096107776392444 43.70350681048184072, -72.29096009820943891 43.70341241879234673, -72.29103175348924992 43.70341202740338815, -72.29103162570453378 43.70339971520916578, -72.29103351140201994 43.70339970490866932, -72.29103314224548171 43.70336413634740325, -72.29110196892229112 43.70336376036547676, -72.29110233811951503 43.70339932892628099, -72.29110422381697276 43.70339931862462635, -72.29110435161656767 43.7034116308186853, -72.29117632076292921 43.70341123762441526, -72.29117730065662784 43.7035056293100368, -72.29111884517293163 43.70350594867812077, -72.29111902740442019 43.70352350435446454, -72.29112845591114933 43.70352345284437945, -72.29112908782779812 43.70358432890203915, -72.29099174783922876 43.7035850791457392))");
polys.push("Polygon ((-72.2909983194056025 43.70358230705296876, -72.291156505091692 43.70358144291249403, -72.29115838460499788 43.70376249785599043, -72.29113632677405121 43.7037626183675556, -72.29113691054232049 43.70381885484982121, -72.29102473060937939 43.70381946767254533, -72.29102414694594358 43.70376323118909312, -72.29100019844285896 43.70376336200189371, -72.2909995910690526 43.70370483858167177, -72.29095736611743916 43.70370506921261722, -72.29095715497808783 43.70368472349238687, -72.29092501360756273 43.70368489903670906, -72.29092476215144814 43.70366066705507535, -72.29095690588140144 43.70366072011449177, -72.29095669237017319 43.70364014579050149, -72.29099891727621241 43.70363991516007474, -72.2909983194056025 43.70358230705296876))");
polys.push("Polygon ((-72.29104725288962641 43.7021127578481412, -72.29104556440289286 43.70208705850278363, -72.29119464438453235 43.70208184543150054, -72.29119635154322054 43.7021075446726428, -72.29129522768454308 43.70210408727317741, -72.29130246154346651 43.70221817333641923, -72.29105473869957166 43.70222665983755661, -72.29104725288962641 43.7021127578481412))");
polys.push("Polygon ((-72.29123167008070538 43.7003528610939469, -72.2906867121440655 43.70031011418731737, -72.29071309077396279 43.70013128372559663, -72.2912585488532784 43.7001738441622507, -72.29123167008070538 43.7003528610939469))");
polys.push("Polygon ((-72.29138364977312392 43.70480171782479317, -72.29132758849335971 43.70480308269114289, -72.29132799006718813 43.7048117652237238, -72.29133302971359853 43.70481164227493309, -72.29133328268575553 43.70481712588851764, -72.29128793079766524 43.70481822969269103, -72.2912876765983583 43.7048127469857306, -72.29129271624495345 43.70481262403872336, -72.29129231467621253 43.70480394150598613, -72.29123625339180137 43.70480530632752192, -72.29123608391942923 43.70480165028945407, -72.29103298428486823 43.70480751043348988, -72.29103130710917924 43.70478147441386341, -72.29098924978924856 43.70478226938211463, -72.29098665033160387 43.70472606281960992, -72.29102915808016405 43.70472479915822106, -72.29102795349994892 43.70469875245610325, -72.29122981466896647 43.70469338062307685, -72.29122233123760566 43.70453161592249813, -72.29127837630082354 43.70452990827170225, -72.29127765636491176 43.70451434198061946, -72.29131545044360507 43.70451342169389619, -72.2913161703892797 43.70452898798470187, -72.29137224738111911 43.70452796596295997, -72.29137657853986809 43.70464886332862875, -72.29150885686281924 43.70464564261114049, -72.29151037850931516 43.70467854427040066, -72.29137810011415866 43.70468176499004187, -72.29138364977312392 43.70480171782479317))");
polys.push("Polygon ((-72.29144572999821605 43.70759978342556451, -72.29145358109380481 43.70758434040588725, -72.29145625007245712 43.70757909734175684, -72.29150638120307804 43.70748187284980446, -72.29163552597832165 43.70751656003243113, -72.29160314177630653 43.70758002063616487, -72.29175327921538496 43.70762033711864802, -72.29170546907614892 43.7077140279719174, -72.29155533266514055 43.70767371052173189, -72.2915229495362297 43.70773717109525336, -72.29139461300520964 43.70770221475044082, -72.29144572999821605 43.70759978342556451))");
polys.push("Polygon ((-72.29145358109380481 43.70758434040588725, -72.29144572999821605 43.70759978342556451, -72.29131788792420821 43.70756545343597566, -72.29130957290269066 43.70758174684253561, -72.29116180110368362 43.70754206489834814, -72.2911855326420465 43.70749555850890289, -72.29114889405883559 43.70748569956717233, -72.29109900493008922 43.70758346351929191, -72.29100324888068485 43.70755774881636313, -72.29103694576822647 43.70749171602741256, -72.29106531881137698 43.70749933489393868, -72.29108151118421688 43.70746760466741421, -72.29105313815404088 43.70745998580478897, -72.29106013991844293 43.70744626387448761, -72.29105363027019848 43.70744452270706404, -72.2910604539959678 43.70743050292780651, -72.29106654329001458 43.70743238860135449, -72.29107376394087225 43.70741823884378618, -72.29120670690849693 43.7074540650458232, -72.29121650300884028 43.70743486714582104, -72.29132075310073446 43.70746237498320141, -72.29138408204113375 43.70733850130867637, -72.29140626186129737 43.70734474353866261, -72.29134025989252166 43.70746761296074823, -72.291365085713295 43.70747427996925438, -72.29132635617146718 43.70755017536428966, -72.29145358109380481 43.70758434040588725))");
polys.push("Polygon ((-72.29151531714369128 43.70317085326251316, -72.29121843880194831 43.70317904988404223, -72.29121875307558298 43.70318506240288059, -72.29118806800417474 43.70318590691280747, -72.29118865003138694 43.70319703663987809, -72.29117688125896279 43.70320624830459622, -72.29108391414820289 43.70320878405734533, -72.29107065825033374 43.70319986932035761, -72.29107007773772864 43.70318876388617468, -72.29064771334851969 43.70320034015151833, -72.29064746109641248 43.70319551717879136, -72.29060517993355006 43.70319663365052776, -72.29060543390826865 43.70320150341733267, -72.29055376794761401 43.70320293391743149, -72.29055461776580671 43.70321920065865129, -72.29054942948557994 43.70322531611876826, -72.29050837048309575 43.70322644568532411, -72.29050224167814065 43.70322058730804571, -72.29050139367463146 43.70320437456044971, -72.29043520721327809 43.70320629828576386, -72.2904330317936541 43.7031648450508925, -72.290419906929273 43.70316520739599042, -72.29041522696260813 43.70307604186667305, -72.29042954620993555 43.70307564600222605, -72.29042743285324946 43.70303539131456461, -72.29044533160168839 43.70303489760860316, -72.2904416286803837 43.70296434369697636, -72.29057714751731112 43.70296063114001583, -72.29057743847769757 43.70296619645566949, -72.29077006226789592 43.70296071294567497, -72.29076811776702982 43.70292097037889079, -72.29075567407083724 43.70291260201011596, -72.29075480115059804 43.70289590696460635, -72.29076617857006681 43.70288700080169519, -72.29076268803905236 43.70282021251252758, -72.29087392633267939 43.70281714971203968, -72.29088542802814743 43.70280814745155595, -72.29093145412248589 43.70280688171386174, -72.29094377412570793 43.70281516613306394, -72.29123486264931842 43.70280716657421038, -72.29123659000831026 43.70283970709751742, -72.29124042624040669 43.70283960152935521, -72.29124078095441064 43.70284640228472028, -72.29123695092479807 43.70284650781900382, -72.29123713356305814 43.70284975965706309, -72.2912494536168424 43.70285804404296215, -72.29125145218877435 43.70289627239652219, -72.29123995053181773 43.70290527469347097, -72.29124255571413471 43.70295472984687279, -72.2913483010011646 43.70295182260890954, -72.29134804572703388 43.70294695285067377, -72.29150338671914255 43.70294267812915479, -72.29151531714369128 43.70317085326251316))");
polys.push("Polygon ((-72.29154047578411735 43.70738251914663408, -72.29123815375128004 43.70729742958639719, -72.29128796762441311 43.70720429141228891, -72.29137493337587728 43.70722876772945398, -72.29143284071523112 43.70712049747294259, -72.29156123170433546 43.70715663346602753, -72.2915033245627825 43.70726490378574169, -72.29159028925658959 43.70728938084452153, -72.29154047578411735 43.70738251914663408))");
polys.push("Polygon ((-72.29172046552100994 43.7054392852982474, -72.29164153637724155 43.70543970609144679, -72.2913017010970691 43.70544156372876188, -72.29130136283002628 43.70540898772807736, -72.29125960936544004 43.70540921589467587, -72.29125901357255657 43.70535183551184844, -72.2913007669973382 43.70535160734569757, -72.29130042635806319 43.70531880274096892, -72.29172174790684835 43.70531672994782468, -72.29172253408204085 43.70539250931417996, -72.29171998831577639 43.70539252413571063, -72.29172046552100994 43.7054392852982474))");
polys.push("Polygon ((-72.29174153794366475 43.70550235911844084, -72.29169996517711638 43.70549013225986101, -72.29169808083625526 43.7054935034062666, -72.29169059762180893 43.70549130316467767, -72.29169248926656621 43.70548791847748049, -72.29165090903859436 43.70547568804156668, -72.2916490161606049 43.70547907363490481, -72.29164161259336652 43.70547689635627364, -72.29164155127392632 43.70547111377460681, -72.29164659196592879 43.70547108621313015, -72.29164631989016243 43.70544513792972907, -72.29164159308035664 43.7054451637749608, -72.29164153685412941 43.70543975199216646, -72.29168772638001883 43.70543945532574526, -72.29172046552100994 43.7054392852982474, -72.29171998831577639 43.70539252413571063, -72.29172253408204085 43.70539250931417996, -72.29172174790684835 43.70531672994782468, -72.29181873288325733 43.70531619774663312, -72.29188495022829386 43.70537062431478859, -72.29187208262075615 43.70544329483382739, -72.29218577623582576 43.70553557144095436, -72.29218294072997253 43.70554065432361313, -72.29222966098150494 43.7055544000461822, -72.29220663144121772 43.70559560324345227, -72.29231293156200877 43.70562687113866929, -72.29225846194840699 43.70572432857458978, -72.29210543390583155 43.70567931581746279, -72.29212230753891788 43.7056491271176526, -72.29173185458682838 43.70553427166973393, -72.29174665522913301 43.70550779182736534, -72.29173965360475052 43.70550573026550722, -72.29174153794366475 43.70550235911844084))");
polys.push("Polygon ((-72.29189255870112163 43.70470720871884396, -72.29151087452542868 43.70471650270102515, -72.29150584289557457 43.70460774564807593, -72.29188752767909421 43.7045984570799888, -72.29189255870112163 43.70470720871884396))");
polys.push("Polygon ((-72.29191204417898575 43.70132689168496398, -72.29180168240334581 43.70132819377336375, -72.29180195012516208 43.70134010917691114, -72.29164268294744033 43.70134198909467216, -72.29164204139753735 43.70133779469683333, -72.29160868278295027 43.70133818860379193, -72.29160653353652322 43.70124235507458366, -72.29172685607984761 43.70124093480012561, -72.29172647872339041 43.7012240777357448, -72.29172025531836709 43.70122415137105065, -72.29171911815028295 43.70117344699571049, -72.29181781308275845 43.70117228170233403, -72.29181895034334104 43.70122298697619101, -72.29180382784575443 43.70122316509151972, -72.29180420522386896 43.70124002215550973, -72.29186595802187298 43.70123929467425938, -72.29186642963941267 43.70126032392644078, -72.29191053931073441 43.70125980273049038, -72.29191204417898575 43.70132689168496398))");
polys.push("Polygon ((-72.29191890574402635 43.70669030800863908, -72.29193428397294952 43.70669395015330849, -72.29193548055172869 43.70669137392289372, -72.29198953419593465 43.70670414985706742, -72.29199162005502899 43.70669951391325725, -72.29202727208269152 43.70670795678181975, -72.29202518995739979 43.70671259360592131, -72.29207926132667694 43.70672540000284556, -72.29207819050128592 43.70672777933259567, -72.2921776492681829 43.70675134692328356, -72.29217617825682396 43.70675461590773381, -72.29219055895340773 43.70675801775915659, -72.29218450040040977 43.70677149338109047, -72.29217011715408603 43.70676808524240897, -72.29215319741707901 43.70680567992808108, -72.29215011280200542 43.7068049488541206, -72.29213013639738961 43.70684808215970918, -72.29203425874540301 43.70682539860004567, -72.29202121232518152 43.70685438635708664, -72.29201767124489209 43.70685354796901123, -72.29200476703014999 43.70688225232571256, -72.29194133376844889 43.70686725504661752, -72.29195425018311028 43.70683852812863535, -72.29195058347977465 43.70683765982353464, -72.29195482558989738 43.70682823544144924, -72.29188166284144756 43.70681087558045164, -72.29191804810444921 43.70673002715492572, -72.29190266987659186 43.70672638590814074, -72.29191890574402635 43.70669030800863908))");
polys.push("Polygon ((-72.29202615659625053 43.70478699318009319, -72.29202011234926317 43.70466613221703511, -72.29188954324811789 43.70466931177457326, -72.29188802139458403 43.70463641012158007, -72.29202029965601639 43.70463318881251524, -72.29201344931252038 43.70451235835799508, -72.29207328717366465 43.70451089598613237, -72.29207260930358814 43.70449784425166229, -72.29210291896802687 43.70449710596579251, -72.29210352241722148 43.7045101590073557, -72.29216336410758004 43.70450870736816285, -72.29217607331521833 43.70478334216286953, -72.29211879403067087 43.70478473748442383, -72.29211910924591677 43.70479250152039441, -72.29212414888868921 43.70479237853673027, -72.29212440317346022 43.7047978621413904, -72.29207905008674118 43.70479896716605595, -72.2920787958060771 43.70479348356128213, -72.29208383544904848 43.70479336057941566, -72.29208348301976628 43.70478559674698005, -72.29202615659625053 43.70478699318009319))");
polys.push("Polygon ((-72.29232798686025774 43.70102310901485509, -72.292332778287971 43.70110496355349738, -72.29232648295852925 43.70110515822428709, -72.29232803076024538 43.70113159547860704, -72.29235825359643286 43.70113066408666924, -72.29236923917746083 43.70131829912104138, -72.2921924655879593 43.7013237462882671, -72.292186635203592 43.70122416164074508, -72.29222945127305877 43.7012228427423679, -72.29222702407740542 43.70118138730568091, -72.29223709836207945 43.70118107655144257, -72.2922326045987802 43.70110433275317519, -72.2922338646534115 43.70110429345463388, -72.29222928935996606 43.70102615049943751, -72.29232798686025774 43.70102310901485509))");
polys.push("Polygon ((-72.29235635121403902 43.70266598543959446, -72.29238523754638379 43.70253469229258059, -72.29243319253070865 43.70254009927620586, -72.2924377655160697 43.702519224226684, -72.29258819583797901 43.70253650717879168, -72.29258314587148959 43.70255994553209433, -72.29262428435507104 43.70256447529597921, -72.29259638428030144 43.70269356784228165, -72.29235635121403902 43.70266598543959446))");
polys.push("Polygon ((-72.29237115188368534 43.70810769682141483, -72.29223840435936665 43.7080198858847524, -72.29226476572976878 43.7079989159132225, -72.29209154724290443 43.70788433246971749, -72.29211432270018634 43.70786621375646774, -72.29205026250460264 43.70782383820859707, -72.2921225967953518 43.70776629552103998, -72.29212768536874023 43.70776966091953852, -72.2921525699736236 43.70774986463751333, -72.29216910224253922 43.70776315722692118, -72.29244766924286125 43.70795037778421488, -72.29251982053692416 43.70798235176370383, -72.29248734457598857 43.70800818771904517, -72.29249220082148497 43.70801140046216204, -72.29237115188368534 43.70810769682141483))");
polys.push("Polygon ((-72.2926591375008627 43.70762064227636046, -72.29267181069661774 43.70762876795617302, -72.29268433577180986 43.70761848902581903, -72.29270130831729091 43.70762937145447324, -72.29274891979034123 43.70759029718978894, -72.29275321039592939 43.70759304858702876, -72.29276976375795982 43.7075926248906157, -72.29279028247339056 43.70760578214588321, -72.29279173590741436 43.70761775134315741, -72.29283037762992592 43.70764252995506638, -72.2928531079961374 43.70762380469751918, -72.29288133913063064 43.70764183853719942, -72.29270627175920083 43.70778605630604119, -72.29267773185623014 43.7077678026987968, -72.29267648685390668 43.70776882479027137, -72.2926378438717876 43.70774404613380426, -72.29262129046693985 43.70774446981135242, -72.29260077174048149 43.70773131252613553, -72.29259931958208085 43.70771934331964559, -72.2925950289744037 43.7077165919166859, -72.29259885503381611 43.70771345224099491, -72.2925692105241211 43.70769444410085924, -72.2926591375008627 43.70762064227636046))");
polys.push("Polygon ((-72.29265914226374434 43.70269212697603223, -72.29268690264945008 43.70257382606286711, -72.29269447469812349 43.70257469905765646, -72.29269928420288238 43.70255235919621128, -72.29285124341018332 43.70257109693443454, -72.29284713996983669 43.70258867698891692, -72.29286051807854108 43.70259024991835872, -72.29283205076585261 43.70271330979088731, -72.29265914226374434 43.70269212697603223))");
polys.push("Polygon ((-72.29268167306864257 43.70710752703988078, -72.2926895209202911 43.70708906693529627, -72.29267145342605261 43.70708502469135937, -72.29269263056838213 43.70703521703782712, -72.29271069928965687 43.70703925927173117, -72.29276369045751949 43.70691463138820154, -72.29280921975259844 43.70692481913748395, -72.29281223899255338 43.70691771908915513, -72.29287686797148638 43.7069321800957411, -72.29287384873849476 43.70693928014570417, -72.2929193793110727 43.70694946784402646, -72.292908232517334 43.70697568209498485, -72.29293714198327336 43.70698215087616489, -72.29289009634268837 43.70709279796321312, -72.29290756193744016 43.70709670576041361, -72.29289678692643406 43.70712204671010426, -72.29287932132497474 43.70711813891132635, -72.29286775666604115 43.70714533651736389, -72.2928385461658678 43.70713880006303498, -72.29283706017298528 43.7071422959540925, -72.29268167306864257 43.70710752703988078))");
polys.push("Polygon ((-72.29277127046380258 43.70622318805575901, -72.29274325286307601 43.70626851667399393, -72.29270733335262378 43.70625700807234892, -72.29269518767604552 43.70627701012929833, -72.29257705661430577 43.70623924860831266, -72.2926169643730816 43.70617355485594402, -72.29277127046380258 43.70622318805575901))");
polys.push("Polygon ((-72.29297515005116281 43.70761113637754391, -72.29298222985831046 43.70759458319942325, -72.29293915438793761 43.7075848879119917, -72.29296676777408948 43.70752071411872208, -72.2930096927155148 43.7075303751182318, -72.2930171492253919 43.70751294321057401, -72.29299246878584029 43.70750738824425952, -72.29301565464540147 43.70745317901257465, -72.29303506376390942 43.70740779850424218, -72.29306692827256597 43.70741492160646402, -72.29309456657311728 43.7073503012119815, -72.29310064681931181 43.70735167018964518, -72.29316445518051637 43.70736603292230171, -72.29322465197888903 43.70737958195682893, -72.29322016915207882 43.70739006168020069, -72.29324485081387763 43.70739561749084601, -72.29321926204646331 43.70745544284319095, -72.29322648523204009 43.7074570692679103, -72.29320145848180346 43.70751558464114339, -72.29319423404915312 43.70751395822168917, -72.2931753700757298 43.70755806397689014, -72.29313022141772649 43.70754790219070429, -72.29310818268911021 43.7075994301658568, -72.29310095825820781 43.70759780464059929, -72.29308470929184693 43.70763579631110218, -72.29297515005116281 43.70761113637754391))");
polys.push("Polygon ((-72.2931854418105786 43.70624231765321355, -72.29317006992712891 43.706267275199572, -72.29308180428104436 43.70624050770236835, -72.29307214734964759 43.70625738643629887, -72.29301751502976003 43.70624049458763238, -72.29302916326700768 43.70622122697498924, -72.29294618653922555 43.70619406406341767, -72.29295858396697838 43.70617406060014076, -72.29282173006319567 43.70612981884413273, -72.29285941088450329 43.70606834320820866, -72.29292897423198383 43.70609064102127661, -72.29293640392297959 43.7060777977918633, -72.29299431957429078 43.70609522072801667, -72.2929884212830558 43.70610988450140155, -72.29299676961802845 43.70611258215333095, -72.29300817550793568 43.70609423033617702, -72.29323205983757816 43.70616744134716924, -72.29322090013548063 43.70618524279738892, -72.2932866822555269 43.70620756111927108, -72.29324995966528888 43.7062642765994056, -72.2931854418105786 43.70624231765321355))");
polys.push("Polygon ((-72.29334027135161023 43.70709228923824696, -72.29339965473540985 43.70710531430308521, -72.29335536982544852 43.70721053795305977, -72.29331847717459425 43.70720251003073997, -72.29330026898500705 43.70724559064019132, -72.29325730651615345 43.70723576614322781, -72.29326468484067902 43.70721798542213321, -72.2931959461171374 43.70720245088428157, -72.29321242824850913 43.70716303851521189, -72.2932280943661425 43.70716642688922349, -72.29323695201058797 43.70714534562417697, -72.29319753333302856 43.70713696608345344, -72.29318374233631062 43.70712003225535369, -72.29319483554787951 43.70709582991636921, -72.29321718727157986 43.707087477204972, -72.29322944953557339 43.70705448922380043, -72.29322736694939522 43.70705371398337036, -72.29322340200572228 43.70705173217389472, -72.29321997065480332 43.70704928120587596, -72.29321717913131806 43.70704643520237909, -72.29321511145977297 43.7070432801090476, -72.29321382945451546 43.7070399136941603, -72.29321337385734125 43.70703643564157659, -72.29321375695901963 43.70703295389169085, -72.29321496868097086 43.70702957290725266, -72.29321697039983974 43.70702639640738596, -72.29321970231673333 43.70702352012666125, -72.29322308220700677 43.70702103092197888, -72.29322700541108304 43.7070190058724819, -72.29323135345327955 43.70701750593192259, -72.29323599529203648 43.70701657682177199, -72.29324078852290825 43.70701624542451214, -72.29324558935083189 43.70701652422925321, -72.29324695740380946 43.70701671654417453, -72.29325236410907962 43.70700333624654377, -72.29331654903114668 43.70701743311213505, -72.29330989773200145 43.70703246645433637, -72.29336217874254089 43.70704391126026422, -72.29336618859794328 43.70704591622035196, -72.29336965870588472 43.70704839487348181, -72.29337248284089412 43.70705127399683931, -72.29337457446865756 43.70705446495855284, -72.29337587054313019 43.70705787089731587, -72.29337633151575915 43.70706138762254511, -72.2933759438826371 43.70706490990070137, -72.29337471891560085 43.70706832876216197, -72.29337269401553101 43.7070715422945284, -72.29336651212705078 43.70707696847644286, -72.29336254450382171 43.70707901717593558, -72.29335345069354446 43.7070814747084242, -72.29334495104831149 43.70708165541928025, -72.29334027135161023 43.70709228923824696))");
polys.push("Polygon ((-72.29343962210000996 43.70547527049447467, -72.29343923797938487 43.70545936215388139, -72.2933547734090638 43.70546043642848133, -72.29335550167704127 43.70548782501014529, -72.29332724509873742 43.70548822564871472, -72.29332649477738926 43.70546038625524687, -72.29304970628521687 43.70546431829173883, -72.29304986290968316 43.70548055100366014, -72.29304197061236437 43.70548065275815475, -72.29304191752871134 43.7054778187447468, -72.2929738431797233 43.70547870841097904, -72.29297391501020797 43.70548155582267924, -72.29294406163354836 43.7054819552153333, -72.29294217801080435 43.70540339977187472, -72.29296157381976684 43.70540315308749513, -72.29296033566980384 43.7053519182769179, -72.2934359587880806 43.7053452861094911, -72.29343564218778795 43.70532907047616789, -72.29344358660820546 43.70532897200892819, -72.29344368767905848 43.70533271842489143, -72.29351143832033699 43.70533185635601114, -72.29351134864539574 43.70532813237923619, -72.29354180504572014 43.70532774483231009, -72.29354399495456107 43.70540537602019526, -72.29352480505043843 43.70540585569105474, -72.29352502739135389 43.70541504773445496, -72.29371593229346615 43.70541343086307506, -72.2937169130110675 43.70543752742045029, -72.29374396988964691 43.70543713506744155, -72.29374464526458155 43.70546169413285043, -72.29371758960621719 43.70546208557924928, -72.29371764982946047 43.70546429220794948, -72.29357334519909273 43.70546551489437803, -72.29357357079516078 43.70547358993922415, -72.29358464982522037 43.70547342746642983, -72.29358677323851623 43.70556121984846953, -72.29343352329527761 43.7055631961721005, -72.29343139981482125 43.70547537588547016, -72.29343962210000996 43.70547527049447467))");
polys.push("Polygon ((-72.29347758274910518 43.70287346201048706, -72.29347924924738322 43.70264629889057062, -72.29358563926548698 43.70264662988256532, -72.29358372323535775 43.70287397708568022, -72.29347758274910518 43.70287346201048706))");
polys.push("Polygon ((-72.29393634568478433 43.70296440359524581, -72.29393450545555311 43.70305384867878473, -72.29358656780098613 43.70305027076963711, -72.29358840978814271 43.70296082568170704, -72.29393634568478433 43.70296440359524581))");
polys.push("Polygon ((-72.29397716455171974 43.70555024112861986, -72.29397813053327582 43.70558040960153789, -72.29387652767853467 43.7055809833762865, -72.29387756240251406 43.70561858240814956, -72.29383282307576053 43.70561923022826534, -72.29383286094846994 43.7056206017192963, -72.29382359754976051 43.70562759564699462, -72.29380343291110478 43.70562788809902344, -72.29379379203952283 43.7056211680070632, -72.29379375416768028 43.70561979651602513, -72.2937490148387667 43.70562044430334936, -72.29374464526458155 43.70546169413285043, -72.29374396988964691 43.70543713506744155, -72.29374146574858173 43.70534616664613736, -72.29378620611429085 43.70534551885616281, -72.29378616824288883 43.70534414736503948, -72.29379543160270316 43.70533715344026149, -72.29381559490335007 43.7053368609970363, -72.29382523573141839 43.70534358108773887, -72.29382527360371569 43.70534495257882668, -72.2938700127266145 43.70534430476287469, -72.2938736617273463 43.70547687239817947, -72.2938837446414766 43.70547672616316959, -72.29388399629668527 43.70548586854130946, -72.29387391338100599 43.70548601477634776, -72.29387574705228303 43.70555264191713718, -72.29397716455171974 43.70555024112861986))");
polys.push("Polygon ((-72.29405290136624274 43.70268247369330084, -72.2940507855251866 43.7029147606567534, -72.29394338577009194 43.70291425202604785, -72.29394525086300405 43.70268215005372525, -72.29405290136624274 43.70268247369330084))");
polys.push("Polygon ((-72.29406249316639332 43.70648800393307454, -72.29403426144750711 43.70655471417761362, -72.29403546651441559 43.70655498298314257, -72.29400587129410383 43.70662491663498628, -72.29406363726526763 43.7066377819210885, -72.29404513979338276 43.70668149068595199, -72.2939970142988102 43.70667077223839669, -72.2939672797189985 43.70674103426730284, -72.29395723295320408 43.70676477370675883, -72.29383006430929015 43.70673645165801702, -72.29390572935564307 43.70655765624257327, -72.2939336335628866 43.70656387016995836, -72.29394433902190542 43.70653857360520789, -72.29393831371918111 43.70653723227269438, -72.29396804823488765 43.7064669702492381, -72.29406249316639332 43.70648800393307454))");
polys.push("Polygon ((-72.29426568961036992 43.70547202395518838, -72.29426674743575632 43.7055053925523751, -72.29433820699772184 43.70550420000621727, -72.29433807722651295 43.70550008652232066, -72.29443195863782989 43.70549852327088303, -72.29443335698938711 43.70554263767061798, -72.29443704767783174 43.70554259849918566, -72.29443803327035312 43.70557272185717324, -72.29443431800217468 43.70557278366524656, -72.29443573239832688 43.7056173651099229, -72.29428072566396679 43.70561995166143987, -72.29428495563101364 43.70575436301979266, -72.29414031633488946 43.7057567529439055, -72.29413605592834813 43.70562236604891382, -72.29398269032741098 43.70562492428569357, -72.29398127765753657 43.70558035722686441, -72.29397813053327582 43.70558040960153789, -72.29397716455171974 43.70555024112861986, -72.29398032159947718 43.70555018869951169, -72.29397892362679556 43.70550607879234661, -72.29407280750389475 43.70550451222213439, -72.2940729372569848 43.70550862570643602, -72.2941450865449724 43.70550742229456631, -72.29414402754639468 43.70547405370265892, -72.29414276845461984 43.70547407501566539, -72.29414243421777542 43.70546356139257682, -72.29426661693415213 43.7054614899045859, -72.29426694994266711 43.70547200263398224, -72.29426568961036992 43.70547202395518838))");
polys.push("Polygon ((-72.29431030036553807 43.70060767605895791, -72.29430079845541002 43.70057555448813247, -72.29423219414067603 43.70058623602547954, -72.29423140970317263 43.70058358333859871, -72.29420534974390478 43.70058764080054914, -72.29418770786504922 43.70052800119943726, -72.29421385821765966 43.7005239297442003, -72.29421303777023411 43.70052115484593713, -72.29428138562839479 43.70051051343100568, -72.2942902888362795 43.70050046751545381, -72.29431222176627614 43.70049705194127654, -72.29432602986273082 43.70050349349413921, -72.29432972332982388 43.70050291787194396, -72.29433843892458356 43.70049308359823215, -72.29435862172242366 43.70048994044485369, -72.29437154967932599 43.70049597189525059, -72.2943723816928383 43.70049878453164638, -72.29440419856945255 43.70049383135223309, -72.29443146610911697 43.7005860130320869, -72.29439985206155939 43.7005907913924645, -72.29440064550018974 43.70059347373089764, -72.29439212737327125 43.70060309090897732, -72.29437020183382856 43.70060650465773477, -72.29435706584867205 43.70060039424384968, -72.29431030036553807 43.70060767605895791))");
polys.push("Polygon ((-72.29465552814319551 43.70560639562791749, -72.29460947328638554 43.70560664865076461, -72.29460948512436858 43.70560778266744961, -72.29459800627303423 43.70561623703331833, -72.29457924910749966 43.70561634007695773, -72.29456759383768372 43.70560801279975038, -72.29456758200048228 43.70560687878306538, -72.29452475279391876 43.70560711405200749, -72.29452437818164867 43.70557122332352407, -72.29443803327035312 43.70557272185717324, -72.29443704767783174 43.70554259849918566, -72.29449528867763775 43.70554246312442359, -72.29452404556388956 43.70554232766822622, -72.29452251057914225 43.70539229168532813, -72.29450927723078735 43.70539252728683977, -72.29450916747524047 43.70538201153159008, -72.29452244470299149 43.70538193860080867, -72.29452191696300645 43.70533541804559263, -72.29456474597614601 43.70533518277886031, -72.2945647341391151 43.70533404876211847, -72.29457621418238489 43.7053255943926402, -72.29459497125729683 43.7053254913500453, -72.29460662523504766 43.70533381863199196, -72.29460663707286017 43.7053349526487338, -72.29465269172170849 43.70533469962828121, -72.29465489928442423 43.7055461586422922, -72.29467695674878769 43.70554605995499031, -72.29467723335390872 43.70556958343041032, -72.29465514511873891 43.70556970658859086, -72.29465552814319551 43.70560639562791749))");
polys.push("Polygon ((-72.29471529366841764 43.70439482825486266, -72.29471467898369497 43.70434379524423463, -72.29499919896510107 43.70434198943382853, -72.29499920725621109 43.70434266443703564, -72.29512830171468352 43.70434199431625899, -72.29512833992679077 43.70434565197049892, -72.29521594180816635 43.70434517027786114, -72.29521609020918049 43.70435747335090326, -72.29523812882386835 43.70435739356053517, -72.29523893142946633 43.70443420519715971, -72.29526161971963916 43.70443408042652322, -72.29526256089724257 43.70452415015762426, -72.29525940974112075 43.70452416748720736, -72.2952606566824727 43.70464349844861118, -72.29521954401343464 43.70464373173810202, -72.29521985823872399 43.70471999431686783, -72.2951558460274839 43.70476569878128004, -72.2950281107910655 43.70476640106429045, -72.29502807258450048 43.70476274341024236, -72.29500491025342512 43.70476287074047406, -72.29500500352742165 43.70477120662954462, -72.29476067841045506 43.70477275648674009, -72.29476062988356944 43.70476787120070128, -72.29471866474591479 43.70476810179390981, -72.29471812534460184 43.70471643742735779, -72.29467590095357821 43.70471666942937361, -72.29467592357865158 43.70471895547013474, -72.29450197917371668 43.70471991104358267, -72.29450134452338261 43.70465910253830089, -72.294490630566969 43.70465916138731188, -72.29449004841819715 43.70460338215622897, -72.29445475541776034 43.70460357600429546, -72.29445482698930903 43.70461043410656288, -72.29444600373815888 43.70461048256688485, -72.29444604190912571 43.70461414022143032, -72.29433953265467494 43.70461472515316359, -72.29433937999672821 43.70460009453469041, -72.29433496837182815 43.70460011876048156, -72.29433406674455398 43.70451370666923196, -72.29433847836313021 43.70451368244351187, -72.2943383257059935 43.7044990518247829, -72.29444483475568006 43.70449846689539442, -72.29444487769777083 43.70450258175684866, -72.2944537009331043 43.70450253329669721, -72.29445376773287535 43.7045089341922548, -72.29448906067779035 43.70450874034482069, -72.2944884928485294 43.70445433273270197, -72.29449983699905147 43.70445427042239572, -72.29449921189086581 43.70439437542790984, -72.29467252512468178 43.70439342332696242, -72.29467254421692246 43.70439525215421384, -72.29471529366841764 43.70439482825486266))");
polys.push("Polygon ((-72.29478149476192073 43.70526266535358673, -72.29478162421088427 43.70524511967705905, -72.29466270522839011 43.70524602422243987, -72.2946623974091267 43.70521653888720692, -72.29466397868822014 43.70521766878144376, -72.29478063398107679 43.70513174934175993, -72.29478062230921864 43.70513063152525746, -72.2947812080083736 43.70511257930476035, -72.29501063188361343 43.70511085120108419, -72.29510913388786264 43.70503716499202085, -72.29510380489818999 43.70486981101294788, -72.29500500352742165 43.70477120662954462, -72.29500491025342512 43.70476287074047406, -72.29502807258450048 43.70476274341024236, -72.2950281107910655 43.70476640106429045, -72.29503181651611499 43.70476638069237652, -72.29513522299301087 43.70486958066582872, -72.29525323716462992 43.70478251468554021, -72.29529231166816317 43.70478229979373452, -72.29529321289334121 43.70486854086249195, -72.29531621646448514 43.70486841434698277, -72.29531719596249673 43.70496214172397487, -72.29529419235549881 43.70496226823989616, -72.29529483110583499 43.70502339173732764, -72.2953178395142686 43.70502372242783906, -72.29531918603973395 43.70515256921683545, -72.29529618235991961 43.70515269573359518, -72.29529708159893175 43.7052387450938653, -72.29508320929546983 43.70524022536132946, -72.29508326578019251 43.70524468217217873, -72.29502897906704106 43.70524504452606607, -72.29491058956652694 43.70524568269956234, -72.29491079035813073 43.70526181975964874, -72.29478149476192073 43.70526266535358673))");
polys.push("Polygon ((-72.29488378601070053 43.70566260505775347, -72.29480973435126145 43.70566367087980808, -72.29480780300465881 43.70559420548809015, -72.29471517221513466 43.70559554346080233, -72.29471506483336896 43.70559167557209435, -72.29471192508739819 43.70559172162597861, -72.29471248983233522 43.70561206358880213, -72.29469987749686766 43.70561224809668488, -72.29470010589503204 43.70562045813335317, -72.29468750348283379 43.70562064258538726, -72.29468727365782854 43.70561241455524026, -72.29467468117235285 43.7056125989512978, -72.2946744426646859 43.70560437096881401, -72.29467035763865113 43.70560443031580178, -72.2946704674974967 43.70560877342518324, -72.29465606032049152 43.70560900199204468, -72.29465594540546647 43.70560488752692407, -72.29466436709040522 43.70560474674979901, -72.29466341133282015 43.70557000499730549, -72.29465514949723115 43.70557012599473978, -72.29465484876270409 43.70554131927112707, -72.29468545228473886 43.7055408721068801, -72.2946852251202472 43.70553266116323243, -72.29469780781423083 43.70553249122084338, -72.29469805592087539 43.70554068764836586, -72.29471364193705085 43.70554047690065147, -72.29471290339547807 43.70551394614648189, -72.29497155459216629 43.70551017548734052, -72.29497180819775792 43.70551889482175767, -72.2949734030480613 43.70556622316602358, -72.29497385356586392 43.70559177533083073, -72.29494958286913686 43.70559213105862995, -72.2949498113012794 43.70560034109461611, -72.2949372088943818 43.7056005255741411, -72.29493698046395878 43.70559231553811941, -72.29488184304632625 43.70559310462865454, -72.29488378601070053 43.70566260505775347))");
polys.push("Polygon ((-72.29508326578019251 43.70524468217217873, -72.29508320929546983 43.70524022536132946, -72.2953167656458362 43.70523854232789063, -72.29531733275382521 43.70528319142844964, -72.29545746742870449 43.70528225499911912, -72.29545921239743222 43.70541963490381221, -72.29533170190494218 43.70542048660127676, -72.29533228024783398 43.70545564355445123, -72.29526796464357119 43.70550301306474239, -72.29522677687396026 43.70550323956962302, -72.29522785480007485 43.70559547408832657, -72.29502599731766566 43.70559658395541902, -72.29502567672803082 43.70556589350640309, -72.2949734030480613 43.70556622316602358, -72.29497180819775792 43.70551889482175767, -72.29502518272015266 43.70551860141418388, -72.29502461886107767 43.70546462222359452, -72.29496303388320655 43.70546496076268994, -72.29496237487317956 43.70540186623721013, -72.29502395978646234 43.70540152769884656, -72.29502381650966925 43.70538781149771523, -72.29499836211965658 43.70538886589291394, -72.29499803796468882 43.70535783253758666, -72.29502351144510897 43.70535860696935515, -72.2950233678677705 43.70534486196770274, -72.29496178301251064 43.70534520050539129, -72.29496112400654795 43.70528210597855434, -72.29503045031799502 43.70528172488344154, -72.29502897906704106 43.70524504452606607, -72.29508326578019251 43.70524468217217873))");
polys.push("Polygon ((-72.29515417746965511 43.70434545050140684, -72.29515002205015151 43.70434553275421052, -72.29512833992679077 43.70434565197049892, -72.29512830171468352 43.70434199431625899, -72.29471467898369497 43.70434379524423463, -72.29471529366841764 43.70439482825486266, -72.29467254421692246 43.70439525215421384, -72.29467252512468178 43.70439342332696242, -72.29466866678070858 43.70439332121682696, -72.29466692763915603 43.70433844300558945, -72.2946397948822721 43.70433853087171627, -72.29463978004567082 43.70433235560694385, -72.29464324125977726 43.70433232849038774, -72.2946428051984924 43.7043026791430691, -72.29463933553888921 43.70430213476470271, -72.29463924141533937 43.70429620835341211, -72.29466584022188158 43.70429607841781916, -72.29466506138396653 43.70421172769935936, -72.29465163337091838 43.70421183117712616, -72.2946457820577848 43.70423105811229192, -72.29456935822339858 43.70421888065244076, -72.2945695273433131 43.70421832348319668, -72.29457191704322838 43.70421821944906071, -72.29457183319784974 43.70421256390078923, -72.29451197911777172 43.70421291338916348, -72.29450735734228317 43.70421288927235537, -72.29450737851746567 43.70421444266834499, -72.29449807042652765 43.70421439208845271, -72.29449787382982606 43.70420161764472766, -72.29449765054961574 43.704185929836882, -72.29449890979111615 43.70417213572336834, -72.29450337233107859 43.70415678400340909, -72.29450989796212923 43.70414379532265059, -72.29452010082262348 43.70412996198312783, -72.29453137389174344 43.70411881575868307, -72.29454650105373048 43.70410760425876617, -72.29456162142919595 43.70409919019638068, -72.29458046760292689 43.70409149461790577, -72.29459822890851228 43.7040864835898617, -72.2946190156708326 43.70408296534698422, -72.29463827149862709 43.70408171107435891, -72.29465989713800411 43.70408153825751896, -72.29467373574296118 43.70408143072271656, -72.29471069207657763 43.70408087034196853, -72.29480949739546247 43.70408020139278449, -72.29480913054744917 43.70405421762959719, -72.29491512428784006 43.70405342987936592, -72.29491549118164073 43.70407941364193505, -72.29512256041658702 43.70407780998358049, -72.29512252460691002 43.7040753323012936, -72.29515607787325848 43.70406943870028016, -72.29515626233113323 43.70406999392627512, -72.29515404498212661 43.70407079997578137, -72.29515404719181504 43.70407101147891638, -72.2951543945513464 43.7040710086689117, -72.29515449305209529 43.70407770551159388, -72.29516858720072037 43.70407771352022763, -72.29516857328535195 43.70407661911760044, -72.29521293289337791 43.70407631308775365, -72.2952129450134322 43.70407723558780333, -72.29523264302329721 43.70407709936452534, -72.29523347074962203 43.70413328137530584, -72.29526193515226851 43.70413300333179052, -72.29526192276888708 43.70413217443994114, -72.29527249371584219 43.70413209290348533, -72.29527471469066313 43.70428515205425413, -72.29515330299192044 43.70428609331964509, -72.29515417746965511 43.70434545050140684))");
polys.push("Polygon ((-72.29519286869120265 43.70374156589564052, -72.29545751839994239 43.70361103558256133, -72.29540214738754855 43.70355166945337544, -72.29554611796748986 43.70348119438375534, -72.29565753559550956 43.70360056000484406, -72.2955670462557265 43.70364492529795797, -72.29571536771831575 43.70380307052496249, -72.29573354758886694 43.70380571387082114, -72.29573719506132079 43.70379289127035349, -72.29583400592674991 43.70374498889389514, -72.29589570473127935 43.70381085715028746, -72.29573618952071001 43.70388964750405592, -72.29570661460334691 43.70385798666620758, -72.29569626005172722 43.70385621471793769, -72.29564910762702823 43.70387951856632469, -72.29549715905326934 43.70371739692081547, -72.29550201922383224 43.70369999532504579, -72.29547600958699149 43.70369593151060883, -72.29529543045643436 43.70378544529575748, -72.29529006911445776 43.70380321506522847, -72.29531835166710607 43.70380763274755509, -72.295379537394723 43.70387277145102445, -72.29529175317210843 43.70391605146755865, -72.29518467420307104 43.70380178300975871, -72.29521803444981742 43.70378550550029928, -72.29522168011280314 43.70377249931283359, -72.29519286869120265 43.70374156589564052))");
polys.push("Polygon ((-72.2953808298789653 43.7029833532290084, -72.29541338492286684 43.70289008130642827, -72.29559272324449637 43.70292329534939313, -72.29556163417544212 43.70301198692507683, -72.29557805228206746 43.70301500631601499, -72.29556263301918761 43.7030593509631089, -72.29554646674877461 43.70305633108446131, -72.29553397573720019 43.70309133224029097, -72.29551073839559194 43.70308707046725516, -72.2954989952333591 43.70312133665176901, -72.29538911966884029 43.70310109106892327, -72.29541702249349555 43.70302101269140138, -72.29544935377310821 43.70302705339010885, -72.29545938636601932 43.70299791799155287, -72.29538158854268204 43.70298353176924877, -72.2953808298789653 43.7029833532290084))");
polys.push("Polygon ((-72.29569809682433856 43.7035496748257728, -72.29578788088588226 43.70350492088176964, -72.29585059563640925 43.703571514426514, -72.2958449941205572 43.70359038362414594, -72.29587201423953502 43.70359462360537606, -72.29608945897227557 43.70348680019515797, -72.29611648363912479 43.70351554796808102, -72.29613365359789157 43.70351819681196304, -72.29617403096605699 43.70349803980085568, -72.29634381393890408 43.70367780348934872, -72.29636376174894963 43.70368080242204911, -72.29636960729133932 43.70366120010205435, -72.2964613967322407 43.70361533740268811, -72.29652436294080076 43.70368192919045924, -72.29636410295189819 43.70376163899198474, -72.29633682554273832 43.7037327099580466, -72.29632546430255502 43.70373112632564983, -72.29628132272068797 43.70375295034329355, -72.29612861983794403 43.70359119911592671, -72.29613372592092446 43.7035732479991168, -72.29610999108649594 43.70356972084109515, -72.29588727993579766 43.70368031757885063, -72.29585694444972432 43.70364829463908762, -72.29584532948608455 43.70364652964234864, -72.29580771126160244 43.70366539235745762, -72.29569809682433856 43.7035496748257728))");
polys.push("Polygon ((-72.2957866672046805 43.70515994555552197, -72.29578662188173155 43.70515857770632095, -72.29576946740682786 43.70515887643867359, -72.2957676914629559 43.70510544215872528, -72.29572595461503681 43.70510616960132921, -72.29572224513239576 43.70499418863695951, -72.29570370854517591 43.70499234921102527, -72.29570174462666898 43.70500469810920663, -72.29566674343737986 43.70500375124352388, -72.29563236031042095 43.70499890728520143, -72.29563438133986608 43.70498656077410971, -72.29549973141287467 43.70498015691824634, -72.29536479287779116 43.70498008734809048, -72.2953640842722649 43.70495870300240426, -72.29531938058194385 43.704959388110872, -72.29531929359586684 43.7049567630998439, -72.29531714033772971 43.70495681904582597, -72.29531621646448514 43.70486841434698277, -72.29531618966579742 43.70486311941220237, -72.29536094814369562 43.70486234129697323, -72.29536009853087819 43.70483838624080875, -72.29546464900660396 43.70483779043200201, -72.29556912167306848 43.70484078891509938, -72.29567328075609112 43.70484737578718182, -72.29567524714002502 43.70483241488706483, -72.29575903324901276 43.70484010836472777, -72.29575536425760163 43.70485443779079304, -72.29583056082488213 43.70486317216217032, -72.29591329238267861 43.70486173027168775, -72.29591863946683361 43.70502312658263833, -72.29592714536276787 43.7050229789484348, -72.29592896383064726 43.70507785579655291, -72.29592045793637567 43.70507800433093593, -72.29592127773413779 43.70510276420399975, -72.29587952848433474 43.70510349177094156, -72.29588130577751315 43.70515692694175414, -72.29586415130370369 43.70515722568830341, -72.29586419666607355 43.70515859713752604, -72.29586446426664281 43.70515867847041847, -72.2958645994500273 43.70516270641681444, -72.29583939556167138 43.70516314577610473, -72.29583928495910072 43.70515921400134118, -72.29583954875501206 43.70515940606322403, -72.29583947958010981 43.70515765581772882, -72.29581129484685675 43.70515814758146433, -72.29581125827964172 43.70515951498132523, -72.29581160566422682 43.70515951396929921, -72.29581174173831926 43.70516362741701499, -72.29578653785846143 43.70516406766467554, -72.29578640177668092 43.70515995331689396, -72.2957866672046805 43.70515994555552197))");
polys.push("Polygon ((-72.29618796533564762 43.70506862246310931, -72.29616829370137054 43.70502945827107055, -72.29616653425425454 43.70502991889354405, -72.29615874005942544 43.70501437269415845, -72.29616047828369574 43.70501389958779015, -72.29615081668818277 43.70499466260513799, -72.29614905472305963 43.70499511964093386, -72.29614125930611124 43.70497957434707104, -72.29614300002961613 43.70497910302732691, -72.29613333590764057 43.70495986065662208, -72.29613157646228672 43.70496032127854136, -72.29612377857324645 43.70494477599697802, -72.29612552302714334 43.70494430555702081, -72.29611585262861695 43.70492505511869297, -72.29611409698134139 43.70492552291994315, -72.29610629787021026 43.70490997854389548, -72.2961080549460462 43.70490952873620216, -72.29610146056766951 43.70489635749721913, -72.29610614024483084 43.70489325440505013, -72.29608900543080097 43.70487965427409449, -72.29608574887595296 43.70488181346137679, -72.29607046943695536 43.70486968731778887, -72.29606910545966514 43.70487059219330916, -72.29605367611672762 43.70485836786576073, -72.29605505111830155 43.70485744942875073, -72.29603602970013299 43.70484235206929924, -72.29603466202932793 43.70484325966494055, -72.29601923263450658 43.70483102903249772, -72.29602060764540283 43.7048301114959159, -72.29600155122473382 43.70481498732143422, -72.29600021986152569 43.70481592621902678, -72.29598478796181382 43.70480369199542281, -72.29598616296321723 43.70480277355922283, -72.29597208183071189 43.70479157327198294, -72.29598873308616191 43.70478054040488303, -72.29598745571932739 43.7047795249640032, -72.2959988580285966 43.70477197094395194, -72.29600012906995232 43.70477297471869349, -72.29601782772849106 43.70476113772280513, -72.2960020879358467 43.70474864597793641, -72.29600276793105706 43.70474794378353067, -72.29600009839535346 43.70474596843811099, -72.29600273015975631 43.70474409621374434, -72.29600219725747934 43.70474356000893579, -72.29600242316989522 43.7047434516573432, -72.29603052735200208 43.70472342077954409, -72.29603130835651825 43.7047238350094176, -72.29603391548558022 43.70472198002119768, -72.29603651249117036 43.70472390086123227, -72.29603746239862971 43.70472338259379086, -72.29605376063877031 43.7047344644572533, -72.29607085425003277 43.70472266858741506, -72.29606952568119027 43.7047217398356409, -72.29608021078664137 43.70471358671315443, -72.29608156784256323 43.70471451080761227, -72.29609708627211262 43.70470264440201902, -72.29611221793015829 43.70471310083561889, -72.29611353618632563 43.70471209540406932, -72.29613006729461233 43.70472349549734048, -72.29612874903847342 43.7047245009290819, -72.29614922171738556 43.70473861821086103, -72.29615053872345243 43.70473761188569739, -72.29616706868991116 43.70474902008043472, -72.29616578033110841 43.70475003704880379, -72.29618622428597519 43.70476413468063015, -72.29618754253259283 43.70476312834821186, -72.29620406998472504 43.70477453205106855, -72.29620277916360749 43.70477555083352428, -72.29622511821480657 43.70479076760226889, -72.29625501035708623 43.70483856111754051, -72.29625999376399648 43.7048526250851026, -72.29627802051273022 43.70488138367161923, -72.29628122785682365 43.7048803318298198, -72.29628809110643317 43.70489133152081251, -72.29628981219953232 43.70489076309996079, -72.29629925395349233 43.70490582588089268, -72.29629751183544784 43.70490640071815136, -72.29630924288890981 43.70492504034658054, -72.2963109454393873 43.70492447832798888, -72.29632038720400544 43.70493954110703072, -72.29631852762187805 43.70494015439442848, -72.2963355034964934 43.70496701062269551, -72.29631956127002468 43.70497229091937186, -72.2963203161810668 43.70497353065054114, -72.2963018711758707 43.70497961228862493, -72.29630109383973036 43.70497836368021183, -72.29629231543796664 43.70498127964291513, -72.29631446569513287 43.70501661748502187, -72.29630301367996026 43.70501989740171211, -72.29625718892887676 43.7050320162767747, -72.29626525872505738 43.70504816849511798, -72.29622604238767281 43.70505855703461862, -72.29622663270943406 43.70505983727577615, -72.2962170526528638 43.70506238322109027, -72.29621638279010654 43.70506108991700955, -72.29618796533564762 43.70506862246310931))");
polys.push("Polygon ((-72.29623048910386274 43.70673717948092474, -72.29616848365645865 43.7068149535483812, -72.29606127289326878 43.7067699727765131, -72.29612327843425135 43.70669219876604217, -72.29623048910386274 43.70673717948092474))");
polys.push("Polygon ((-72.29629231543796664 43.70498127964291513, -72.29630109383973036 43.70497836368021183, -72.2963018711758707 43.70497961228862493, -72.2963203161810668 43.70497353065054114, -72.29631956127002468 43.70497229091937186, -72.2963355034964934 43.70496701062269551, -72.29631852762187805 43.70494015439442848, -72.29632038720400544 43.70493954110703072, -72.2963109454393873 43.70492447832798888, -72.29630924288890981 43.70492504034658054, -72.29629751183544784 43.70490640071815136, -72.29629925395349233 43.70490582588089268, -72.29628981219953232 43.70489076309996079, -72.29628809110643317 43.70489133152081251, -72.29628122785682365 43.7048803318298198, -72.29627802051273022 43.70488138367161923, -72.29625999376399648 43.7048526250851026, -72.29625501035708623 43.70483856111754051, -72.29622745225242397 43.70479458992348043, -72.29622530116563439 43.70479105911569917, -72.29622435317588725 43.70478950812479724, -72.29624929098564223 43.70478001999303785, -72.2962500081579833 43.7047796695177766, -72.2962488536451815 43.7047778271434737, -72.29624988270627739 43.70477728503661297, -72.29623940510164459 43.7047648390451684, -72.29624516104428267 43.70476214944946491, -72.29624761320187076 43.7047610171620633, -72.2962572897025666 43.70475595500127497, -72.29625938101628435 43.70475472299388287, -72.29627678083838305 43.70474338173958273, -72.29627876661784569 43.70474190549547444, -72.29628678026615773 43.70473538988613171, -72.29629286633753793 43.70472986596502807, -72.2963118329276142 43.70474161894262721, -72.29631350397860956 43.70474030014286626, -72.29633036126000434 43.70472394760709278, -72.29633237111978872 43.70472489060404087, -72.29639218162830616 43.70475363500232646, -72.29641073528620154 43.70475948041182335, -72.29644683895659796 43.70477698397083799, -72.29644500409894192 43.70477901022606204, -72.29645888046516689 43.70478569415721637, -72.29645801322331522 43.70478664220372167, -72.2964768552098036 43.7047959692651915, -72.29647790030571741 43.70479482582451425, -72.29650144059283434 43.70480614853966728, -72.2965003955065697 43.70480729288058086, -72.29651940432658819 43.7048164372025596, -72.296520438378991 43.70481530552320493, -72.29654397869150273 43.70482662912948513, -72.2965429446393415 43.70482776080905296, -72.29656195346281322 43.70483690422384626, -72.29656298752418309 43.70483577344410975, -72.29658040875176539 43.70484413354760278, -72.29658731315181797 43.70483654665261497, -72.29658887565804548 43.70483730309677384, -72.29659451204389597 43.70483113539133058, -72.29659296706662985 43.70483039415175597, -72.29660326849025864 43.70481913607081736, -72.29663379401814893 43.70483355068740394, -72.29664085384222005 43.70482493055806117, -72.29664543152080114 43.70482689987198199, -72.29630948220460596 43.70503277410075071, -72.29630301367996026 43.70501989740171211, -72.29631446569513287 43.70501661748502187, -72.29629231543796664 43.70498127964291513))");
polys.push("Polygon ((-72.29631431601990244 43.70692737033013486, -72.29623128933886278 43.70700390022862791, -72.29617779926098819 43.70697336042269399, -72.29626082597823711 43.70689683146250104, -72.29631431601990244 43.70692737033013486))");
polys.push("Polygon ((-72.29632382993746376 43.70429755618771139, -72.29631434459678019 43.70430996903270682, -72.29628551894496979 43.70429849897919183, -72.29632083238779217 43.70425203300937511, -72.29630234882604611 43.70424445277319592, -72.2963249876802081 43.70421543147534038, -72.29658727605570334 43.70432116154042745, -72.29663762254457993 43.70428997493451106, -72.29663604444276359 43.70423548109349809, -72.29676338768628341 43.70428653831524457, -72.29676626410828533 43.70439260052297925, -72.29667511839703309 43.7043556098281698, -72.296638549500301 43.70437849032148847, -72.29664515514711809 43.70459993831136103, -72.29660053781387319 43.70460054963953667, -72.29660012893513965 43.70458555501004128, -72.29653206964930234 43.70458647821443776, -72.29653127872735752 43.70455904859177565, -72.29654337842653433 43.70455898191514166, -72.29653826748719325 43.70438379802403261, -72.29632382993746376 43.70429755618771139))");
polys.push("Polygon ((-72.29643593277533853 43.70681526961639207, -72.29636576903330081 43.706879943295462, -72.29630930705820901 43.70684770709989664, -72.2963794708335854 43.70678303435499146, -72.29643593277533853 43.70681526961639207))");
polys.push("Polygon ((-72.29647569166762366 43.70677862133195646, -72.29646677583377823 43.70677353108943208, -72.29646209876050023 43.70677784296788815, -72.2964531841779916 43.70677275361745018, -72.29644426959698933 43.70676766426630877, -72.29644894667076471 43.70676335238856325, -72.29644003084143833 43.70675826214388593, -72.29648446800226225 43.70671730197186378, -72.29652012881886947 43.70673766114627767, -72.29647569166762366 43.70677862133195646))");
polys.push("Polygon ((-72.29649395983103943 43.70668082945341837, -72.29668749122306792 43.70650243934238688, -72.29673404742784726 43.70652901904710319, -72.29670461867438291 43.70655614630255315, -72.29672839170423515 43.70656971874599606, -72.29667109354910792 43.7066225353484441, -72.29667245532418463 43.70662331269900847, -72.29656565216963315 43.70672175995787256, -72.29649395983103943 43.70668082945341837))");
polys.push("Polygon ((-72.29658040875176539 43.70484413354760278, -72.29656298752418309 43.70483577344410975, -72.29656195346281322 43.70483690422384626, -72.2965429446393415 43.70482776080905296, -72.29654397869150273 43.70482662912948513, -72.296520438378991 43.70481530552320493, -72.29651940432658819 43.7048164372025596, -72.2965003955065697 43.70480729288058086, -72.29650144059283434 43.70480614853966728, -72.29647790030571741 43.70479482582451425, -72.2964768552098036 43.7047959692651915, -72.29645801322331522 43.70478664220372167, -72.29645888046516689 43.70478569415721637, -72.29644500409894192 43.70477901022606204, -72.29644683895659796 43.70477698397083799, -72.29641073528620154 43.70475948041182335, -72.29639218162830616 43.70475363500232646, -72.29633237111978872 43.70472489060404087, -72.29630405559714745 43.70469496821401378, -72.29630249402740105 43.70469572296987337, -72.29628960705643692 43.70468209586873343, -72.29629113233727367 43.70468131161079839, -72.29627515286324524 43.70466441540556701, -72.29627361251625928 43.7046651826450514, -72.29626072807732839 43.70465155912689426, -72.29626226966473723 43.70465079188075919, -72.29624627384350788 43.70463387325982296, -72.29624472978450456 43.70463464141942467, -72.29623185036824395 43.70462102237058133, -72.29623336811984302 43.70462023005428875, -72.29621739491911114 43.70460333740651748, -72.29621584873720508 43.70460413977989589, -72.29620297143853236 43.70459048471345653, -72.2962044866802529 43.7045896897111632, -72.29618853610941187 43.70457282393656584, -72.29618696737082928 43.70457360483225528, -72.29617409378828086 43.70455994794188115, -72.29617560779843188 43.70455915384680878, -72.29615965600319782 43.70454228807483332, -72.29615808602441973 43.70454306897695318, -72.296145214926824 43.70452941116948864, -72.29614675404080515 43.70452864483858235, -72.29613322698891409 43.70451431019304778, -72.29615183557227454 43.70450466522359534, -72.29615104520918578 43.70450383071572986, -72.29616377843156272 43.70449743673356835, -72.29616443206114695 43.70449812798398881, -72.29618358598976613 43.70448819378527361, -72.29617120491413118 43.70447464939019966, -72.29617203894991917 43.70447408495639507, -72.29616983692845622 43.7044718505215215, -72.29617283921183457 43.7044702930754454, -72.29617247933680346 43.70446969291393202, -72.29620452343213799 43.7044530704414953, -72.29620513875755705 43.70445353958660917, -72.29620841006061482 43.70445184384802673, -72.2962106359180865 43.70445410335268832, -72.29621136743054421 43.70445381940349705, -72.29622502062976253 43.70446669253959726, -72.29624419838033589 43.70445666549276353, -72.29624354277771658 43.70445602285716546, -72.29625597109236423 43.70444930382053883, -72.29625686361015369 43.70445017826794043, -72.29627550546182135 43.70444051509371519, -72.29629972923089554 43.70446428828601171, -72.29630127635668657 43.70446345800426968, -72.29631480529209853 43.70447678454682716, -72.29631331116389958 43.70447758123439286, -72.29635036712242879 43.70451389633808503, -72.296351910536373 43.70451306697619032, -72.29636544442838897 43.70452639078510515, -72.29636393668118899 43.70452719024856236, -72.29638075408172426 43.70454365789482409, -72.29638229133060179 43.7045428321667444, -72.29639582893908312 43.70455615415139761, -72.29639434121094155 43.70455696970612536, -72.29641112493375488 43.70457341863199474, -72.29641264643187526 43.7045726289928993, -72.29642621224874688 43.70458591841611451, -72.29642469702891105 43.70458671522133898, -72.29644150575965966 43.70460318110611553, -72.29644305300949725 43.70460236252262121, -72.29645659681972347 43.70461568176557421, -72.29645509539706438 43.70461649289619999, -72.29647249836774847 43.70463354504471454, -72.29647216078618044 43.70462784589314964, -72.29649608828495388 43.70462709930494327, -72.29649663058880549 43.70463623557661492, -72.29650720217077264 43.70463596940906825, -72.29653707717436362 43.70464881612318209, -72.29652631562706233 43.70466198487175546, -72.29653994269176565 43.70466784840764518, -72.29653894513836576 43.70466902938965603, -72.29656323926215578 43.70467947847546952, -72.29656420714412945 43.70467830755750072, -72.2965838635419118 43.7046867381490145, -72.29658286464480454 43.70468790923810332, -72.29660719242176015 43.70469837163005167, -72.29660815640225735 43.70469718363196421, -72.29662777444745814 43.70470562342791254, -72.29662677926332037 43.70470679359684141, -72.29668251884193353 43.70473076563350645, -72.29668347554741104 43.70472959387606693, -72.29670314079478999 43.70473803699911031, -72.29670213688015679 43.70473920271648893, -72.29672010246601133 43.70474694235374358, -72.29670471346422289 43.70476582503682295, -72.29670634859149914 43.7047665261751348, -72.29670110129416116 43.70477288255525394, -72.29669947619539982 43.70477219126231461, -72.29667818877769037 43.70479828447186321, -72.29666667542868197 43.70479333276902878, -72.29664082268537584 43.70482491722881235, -72.29663379401814893 43.70483355068740394, -72.29663354226329375 43.70483344226702371, -72.29663337409874657 43.70483361510626708, -72.29660326849025864 43.70481913607081736, -72.29659296706662985 43.70483039415175597, -72.29659451204389597 43.70483113539133058, -72.29658887565804548 43.70483730309677384, -72.29658731315181797 43.70483654665261497, -72.29658040875176539 43.70484413354760278))");
polys.push("Polygon ((-72.2967268218180692 43.70627781841434967, -72.29661777757138452 43.70622428415070715, -72.29665309025936892 43.70618643081699872, -72.29661842003093852 43.70616940906297287, -72.29677679479162578 43.70599964254682845, -72.29695780571235275 43.70608850880893925, -72.29693630141878202 43.70611193546479711, -72.29693781920512663 43.70611268314993225, -72.29680044619529156 43.7062599386962134, -72.29676136272698272 43.70624079286105257, -72.2967268218180692 43.70627781841434967))");
polys.push("Polygon ((-72.29705687385157376 43.70614220397732907, -72.29693570866892571 43.70627217815900423, -72.29689440130668743 43.70625192135138093, -72.2970155677888755 43.70612194810589557, -72.29705687385157376 43.70614220397732907))");
polys.push("Polygon ((-72.29707726765091991 43.70428718556814829, -72.29702937794093032 43.70428818053823505, -72.29702868712884367 43.70427044406609696, -72.29695987651730604 43.70427173799506448, -72.29695858047924162 43.70424431115931441, -72.29697471072829273 43.70424385588489713, -72.29696765034009331 43.70407526763021622, -72.29690967228081888 43.70405181120867866, -72.29684393995026426 43.70408235101016459, -72.29684183358581606 43.70397756444577908, -72.29696275925388704 43.70392129796606184, -72.2969639355069944 43.70398548682220508, -72.29702161377230141 43.70400437253922377, -72.29721509453868578 43.70391917447710739, -72.29720590329769436 43.70390825158685288, -72.29724656047537223 43.70389065243984561, -72.29728383502532552 43.70393525563802939, -72.29730265549612511 43.70392692160633175, -72.2973266512938153 43.70395532127524518, -72.29706817213289582 43.70406886014910697, -72.29707726765091991 43.70428718556814829))");
polys.push("Polygon ((-72.29754561053360362 43.70586699576205092, -72.29732720206514784 43.70569116099851925, -72.29739581290553474 43.70564652172863873, -72.29735614853568393 43.70561455157631059, -72.29743477286244513 43.70556327305563116, -72.29747469608626886 43.70559579079191792, -72.29753754251619569 43.70555447568603569, -72.29757110582507096 43.70558154169598453, -72.2975936391669336 43.70556660315040887, -72.29777899707028155 43.70571610129170637, -72.297695864042268 43.70577033104993347, -72.29770679873591632 43.70577923172685786, -72.29761615825138676 43.70583880695568979, -72.29760395279460283 43.70582881520569174, -72.29754561053360362 43.70586699576205092))");
polys.push("Polygon ((-72.29868381191164417 43.70423146257886771, -72.29867445933349757 43.70427866599909095, -72.29862451941713175 43.70427345892480275, -72.29863387203374714 43.70422625550838092, -72.29868381191164417 43.70423146257886771))");
polys.push("Polygon ((-72.30072732593856699 43.7047247546720925, -72.30073167673194234 43.70464480296981691, -72.30096651228261351 43.70465147910064729, -72.30096555917299384 43.70466898615266871, -72.30104802629585947 43.70467133038628305, -72.30104462900946771 43.70473377504539059, -72.30072732593856699 43.7047247546720925))");
polys.push("Polygon ((-72.3010148085362232 43.70493008989407002, -72.30082429397785404 43.70493643943107287, -72.30081894462189496 43.70485222123398472, -72.30100946043015142 43.70484589780088669, -72.3010148085362232 43.70493008989407002))");
polys.push("Polygon ((-72.30121689477117286 43.70447830296651404, -72.3012305622281275 43.70431764919635498, -72.30140357656163985 43.70432097195722321, -72.30139527788961118 43.70439965851920761, -72.30143108589615508 43.70439972518712324, -72.30143100447011761 43.7044224612807497, -72.30139288005246101 43.70442239037485876, -72.30138615236168675 43.70448617213576625, -72.3014070390027257 43.7044873234412492, -72.30139158966385082 43.70463380119887375, -72.30123590938846689 43.70459943705501615, -72.30121689477117286 43.70447830296651404))");
polys.push("Polygon ((-72.3015149973302016 43.7049879295315975, -72.30164391912812505 43.70502684416381811, -72.30146756509135741 43.70533212395373113, -72.30137239051740039 43.70530339138156251, -72.30138308554016646 43.7052162786203624, -72.3015149973302016 43.7049879295315975))");

buildingNames.push("Outdoor Programs - Town Office");
buildingNames.push("Outdoor Programs - Gate Camp");
buildingNames.push("Dartmouth Outing Club - Peaks Cabin");
buildingNames.push("Outdoor Programs - Management Center");
buildingNames.push("Outdoor Programs - Sam's Cabin");
buildingNames.push("Dartmouth Outing Club - Alder Brook Cabin");
buildingNames.push("Outdoor Programs - Johnson Brook Cabin");
buildingNames.push("Dartmouth Outing Club - Billings Lodge");
buildingNames.push("Dartmouth Outing Club - Ritchie Smith Cabin");
buildingNames.push("Dartmouth Outing Club - John Rand Cabin");
buildingNames.push("Moosilauke Ravine Lodge");
buildingNames.push("Dartmouth Outing Club - Great Bear Cabin");
buildingNames.push("Dartmouth Outing Club - Armington Cabin");
buildingNames.push("Dartmouth Outing Club - Hinman Cabin");
buildingNames.push("McLane Family Lodge");
buildingNames.push("Dartmouth Outing Club - Nunnemacher Cabin");
buildingNames.push("Dartmouth Sailing Club");
buildingNames.push("Dartmouth Outing Club - Baum Cabin");
buildingNames.push("Dartmouth Outing Club - Class of 1966 Lodge");
buildingNames.push("Dartmouth-Hitchcock Lyme Road Clinic");
buildingNames.push("Morton Farm Shop and Garages");
buildingNames.push("Morton Farm Big Barn and Indoor Arena");
buildingNames.push("Morton Farm Hay Barn");
buildingNames.push("Morton Farm Little Barn");
buildingNames.push("Morton Farm Middle Barn");
buildingNames.push("Morton Farm Riding Center - Farmhouse");
buildingNames.push("DHMC Warehouse");
buildingNames.push("DHMC Old Warehouse");
buildingNames.push("DHMC Administrative Building");
buildingNames.push("Remote Storage Center");
buildingNames.push("Dartmouth-Hitchcock Heater Road");
buildingNames.push("Dartmouth Organic Farm - Daycare Annex");
buildingNames.push("Dartmouth Organic Farm - Farmhouse");
buildingNames.push("Dartmouth Organic Farm - Milk House");
buildingNames.push("Dartmouth Organic Farm - Big White Barn");
buildingNames.push("Dartmouth Organic Farm - Glass Greenhouse");
buildingNames.push("Dartmouth Organic Farm - Plastic Greenhouse");
buildingNames.push("Dartmouth Organic Farm - New Barn");
buildingNames.push("Dartmouth Organic Farm - Outhouse");
buildingNames.push("Dartmouth Organic Farm - Greenhouse");
buildingNames.push("Dartmouth Organic Farm - Garage");
buildingNames.push("1 Court Street");
buildingNames.push("DHMC 44 Lafayette");
buildingNames.push("Hillcrest Building");
buildingNames.push("Centerra Marketplace Inc");
buildingNames.push("18 Centerra Parkway");
buildingNames.push("Dartmouth Outing Club - Oak HIll Storage");
buildingNames.push("419 Mount Support Road");
buildingNames.push("The Dartmouth Institute for Health Policy & Clinical Practice");
buildingNames.push("DHMC New Colburn Hill");
buildingNames.push("DHMC Colburn Hill South");
buildingNames.push("DHMC Colburn Hill North");
buildingNames.push("41 Centerra");
buildingNames.push("DHMC Clinical Records Center");
buildingNames.push("DHMC Maintenance Garage");
buildingNames.push("Dartmouth College Child Care Center");
buildingNames.push("Trumbull Nelson - 5");
buildingNames.push("Trumbull Nelson - 4");
buildingNames.push("DHMC Outpatient Surgery Center");
buildingNames.push("Remote Storage Center");
buildingNames.push("Trumbull Nelson - 2");
buildingNames.push("DHMC UPNE");
buildingNames.push("Trumbull Nelson - 1");
buildingNames.push("Trumbull Nelson - 3");
buildingNames.push("DHMC Child Care Center");
buildingNames.push("Corey Ford Rugby Clubhouse Out-Buiilding");
buildingNames.push("Corey Ford Rugby Clubhouse");
buildingNames.push("DHMC Family Medicine");
buildingNames.push("D-H Advanced Response Team Hangar");
buildingNames.push("DHMC Parking Garage");
buildingNames.push("DHMC Engineering Power Plant");
buildingNames.push("DHMC Rubin Building");
buildingNames.push("25 Fletcher Circle");
buildingNames.push("DHMC Faulkner Building");
buildingNames.push("27 Fletcher Circle");
buildingNames.push("DHMC Inpatient Care Towers");
buildingNames.push("23 Fletcher Circle");
buildingNames.push("DHMC Media Services Garage");
buildingNames.push("29 Fletcher Circle");
buildingNames.push("DHMC Media Services");
buildingNames.push("1 Fletcher Circle");
buildingNames.push("8 Fletcher Circle");
buildingNames.push("DHMC Borwell Building");
buildingNames.push("19 Fletcher Circle");
buildingNames.push("10 Fletcher Circle");
buildingNames.push("6 Fletcher Circle");
buildingNames.push("DHMC Clinic Building");
buildingNames.push("Williamson Translational Research Building");
buildingNames.push("3 Fletcher Circle");
buildingNames.push("DHMC Inpatient Care Towers");
buildingNames.push("4 Fletcher Circle");
buildingNames.push("2 Fletcher Circle");
buildingNames.push("DHMC Diagnostic & Treatment East");
buildingNames.push("DHMC Diagnostic & Treatment West");
buildingNames.push("5 Fletcher Circle");
buildingNames.push("17 Fletcher Circle");
buildingNames.push("DHMC Main Entrance/ Admin Building");
buildingNames.push("12 Cedar Drive");
buildingNames.push("15 Fletcher Circle");
buildingNames.push("Composting Facility");
buildingNames.push("20 Cedar Drive");
buildingNames.push("13 Fletcher Circle");
buildingNames.push("Hanover Nursery School");
buildingNames.push("24 Cedar Drive");
buildingNames.push("11 Fletcher Circle");
buildingNames.push("9 Fletcher Circle");
buildingNames.push("30 Cedar Drive");
buildingNames.push("7 Fletcher Circle");
buildingNames.push("43 Cedar Drive");
buildingNames.push("Composting Facility");
buildingNames.push("15 Cedar Drive");
buildingNames.push("19 Cedar Drive");
buildingNames.push("23 Cedar Drive");
buildingNames.push("39 Cedar Drive");
buildingNames.push("29 Cedar Drive");
buildingNames.push("33 Cedar Drive");
buildingNames.push("37 Cedar Drive");
buildingNames.push("Hanover Country Club Old Maintenance Building 1");
buildingNames.push("Hanover Country Club Old Maintenance Building 2");
buildingNames.push("35 Cedar Drive");
buildingNames.push("21.5 Lyme Road");
buildingNames.push("44 East Wheelock Street");
buildingNames.push("19 Lyme Road");
buildingNames.push("13 Lyme Road");
buildingNames.push("10 Summer Court");
buildingNames.push("Dartmouth Softball Park");
buildingNames.push("Hanover Country Club Maintenance Buidling 2");
buildingNames.push("Sports Pavilion");
buildingNames.push("Hanover Country Club Maintenance Building 1");
buildingNames.push("Gordon Pavilion");
buildingNames.push("Alexis Boss Tennis Center");
buildingNames.push("Burnham Field Out-Building");
buildingNames.push("Burnham Field");
buildingNames.push("16 Valley Road");
buildingNames.push("19 Valley Road");
buildingNames.push("17 Valley Road");
buildingNames.push("Thompson Arena");
buildingNames.push("14 Valley Road");
buildingNames.push("9 South Balch Street");
buildingNames.push("10 Valley Road");
buildingNames.push("5 South Balch Street");
buildingNames.push("7 Teagan Avenue");
buildingNames.push("11 South Balch Street");
buildingNames.push("1 South Balch Street");
buildingNames.push("13 Teagan Avenue");
buildingNames.push("7 South Balch Street");
buildingNames.push("3 South Balch Street");
buildingNames.push("5 Teagan Avenue");
buildingNames.push("8 Valley Road");
buildingNames.push("8 South Balch Street");
buildingNames.push("6 S Balch Street");
buildingNames.push("4 Austin Avenue");
buildingNames.push("5 Teagan Avenue Out-Bulding");
buildingNames.push("4 South Balch Street");
buildingNames.push("2 South Balch Street");
buildingNames.push("28 East Wheelock Street");
buildingNames.push("5 Valley Road");
buildingNames.push("Amarna");
buildingNames.push("26 East Wheelock Street");
buildingNames.push("27 South Park Street");
buildingNames.push("3 Valley Road");
buildingNames.push("1 Austin Avenue");
buildingNames.push("Fire & Skoal");
buildingNames.push("25 South Park Street");
buildingNames.push("23 South Park Street");
buildingNames.push("Kappa Kappa Gamma");
buildingNames.push("Cobra");
buildingNames.push("5 South Park Street");
buildingNames.push("1 North Park Street");
buildingNames.push("1 South Park Street");
buildingNames.push("22 East Wheelock Street");
buildingNames.push("3 South Park Street");
buildingNames.push("Leverone Fieldhouse");
buildingNames.push("North Park House");
buildingNames.push("19 Haddock Lane");
buildingNames.push("134 Gould Road");
buildingNames.push("23 Haddock Lane");
buildingNames.push("21 Haddock Lane");
buildingNames.push("136 Gould Road");
buildingNames.push("132 Gould Road");
buildingNames.push("130 Gould Road");
buildingNames.push("128 Gould Road");
buildingNames.push("Sachem Village Laundry");
buildingNames.push("126 Gould Road");
buildingNames.push("124 Gould Road");
buildingNames.push("122 Gould Road");
buildingNames.push("15 Haddock Lane");
buildingNames.push("17 Haddock Lane");
buildingNames.push("120 Gould Road");
buildingNames.push("118 Gould Road");
buildingNames.push("11 Haddock Lane");
buildingNames.push("Berry Sports Center");
buildingNames.push("116 Gould Road");
buildingNames.push("13 Haddock Lane");
buildingNames.push("38 Ralston Lane");
buildingNames.push("40 Ralston Lane");
buildingNames.push("36 Ralston Lane");
buildingNames.push("114 Gould Road");
buildingNames.push("7 Haddock Lane");
buildingNames.push("9 Haddock Lane");
buildingNames.push("34 Ralston Lane");
buildingNames.push("Alpha Phi");
buildingNames.push("3 Haddock Lane");
buildingNames.push("30 Ralston Lane");
buildingNames.push("108 Gould Road");
buildingNames.push("110 Gould Road");
buildingNames.push("5 Haddock Lane");
buildingNames.push("Ledyard Apartments");
buildingNames.push("28 Ralston Lane");
buildingNames.push("1 Haddock Lane");
buildingNames.push("104 Gould Road");
buildingNames.push("102 Gould Road");
buildingNames.push("32 Ralston Lane");
buildingNames.push("100 Gould Road");
buildingNames.push("6 Haddock Lane");
buildingNames.push("26 Ralston Lane");
buildingNames.push("106 Gould Road");
buildingNames.push("8 Haddock Lane");
buildingNames.push("Red Rolfe Field at Biondi Park");
buildingNames.push("Triangle House");
buildingNames.push("Grounds Labor Building");
buildingNames.push("22 Ralston Lane");
buildingNames.push("24 Ralston Lane");
buildingNames.push("96 Gould Road 1-6");
buildingNames.push("Alpha Xi Delta");
buildingNames.push("20 Ralston Lane");
buildingNames.push("Sachem Village Maintenance Shop");
buildingNames.push("East Wheelock Cluster - McCulloch Hall");
buildingNames.push("18 North Park Street");
buildingNames.push("2 Haddock Lane");
buildingNames.push("8 North Park Street");
buildingNames.push("10 North Park Street");
buildingNames.push("16 North Park Street");
buildingNames.push("4 Haddock Lane");
buildingNames.push("12 North Park Street");
buildingNames.push("18 Ralston Lane");
buildingNames.push("14 Ralston Lane");
buildingNames.push("16 Ralston Lane");
buildingNames.push("22 North Park Street");
buildingNames.push("9 Ivy Lane");
buildingNames.push("Alumni Gymnasium");
buildingNames.push("12 Ralston Lane");
buildingNames.push("92 Gould Road");
buildingNames.push("94 Gould Road");
buildingNames.push("14 North Park Street");
buildingNames.push("20 North Park Street");
buildingNames.push("Floren Varsity House");
buildingNames.push("90 Gould Road");
buildingNames.push("86 Gould Road");
buildingNames.push("10 Ralston Lane");
buildingNames.push("East Wheelock Cluster - Morton Hall");
buildingNames.push("88 Gould Road");
buildingNames.push("24 North Park Street");
buildingNames.push("7 Ivy Lane");
buildingNames.push("8 Ralston Lane");
buildingNames.push("82 Gould Road");
buildingNames.push("84 Gould Road");
buildingNames.push("4 Ralston Lane");
buildingNames.push("78 Gould Road");
buildingNames.push("6 Ralston Lane");
buildingNames.push("80 Gould Road");
buildingNames.push("2 Ralston Lane");
buildingNames.push("73 Drake Lane");
buildingNames.push("74 Gould Road");
buildingNames.push("76 Gould Road");
buildingNames.push("75 Drake Lane");
buildingNames.push("Small Chiller Plant");
buildingNames.push("72 Gould Road");
buildingNames.push("68 Gould Road");
buildingNames.push("70 Gould Road");
buildingNames.push("79 Gould Road");
buildingNames.push("81 Gould Road");
buildingNames.push("66 Gould Road");
buildingNames.push("Memorial Football Stadium");
buildingNames.push("East Wheelock Cluster - Brace Commons");
buildingNames.push("77 Gould Road");
buildingNames.push("69 Drake Lane");
buildingNames.push("64 Gould Road");
buildingNames.push("71 Drake Lane");
buildingNames.push("East Wheelock Cluster - Zimmerman Hall");
buildingNames.push("67 Drake Lane");
buildingNames.push("East Wheelock House");
buildingNames.push("Sachem Village - Heating Plant");
buildingNames.push("Sachem Village - Storage");
buildingNames.push("38 Drake Lane");
buildingNames.push("40 Drake Lane");
buildingNames.push("65 Drake Lane");
buildingNames.push("36 Drake Lane");
buildingNames.push("Sachem Village - Compactor");
buildingNames.push("Sachem Village - Mechanical");
buildingNames.push("34 Drake Lane");
buildingNames.push("East Wheelock Cluster - Andres Hall");
buildingNames.push("61 Drake Lane");
buildingNames.push("63 Drake Lane");
buildingNames.push("59 Drake Lane");
buildingNames.push("Class of 1978 Life Sciences Center");
buildingNames.push("Hanover Country Club");
buildingNames.push("Davis Varsity House");
buildingNames.push("12 Sachem Circle 1-8");
buildingNames.push("57 Drake Lane");
buildingNames.push("Chi Heorot");
buildingNames.push("32 Drake Lane");
buildingNames.push("28 Drake Lane");
buildingNames.push("13 Sachem Circle 1-8");
buildingNames.push("11 Sachem Circle 1-6");
buildingNames.push("30 Drake Lane");
buildingNames.push("Vail");
buildingNames.push("26 Drake Lane");
buildingNames.push("9 Sachem Circle");
buildingNames.push("53 Drake Lane");
buildingNames.push("14 Sachem Circle 1-8");
buildingNames.push("10 Sachem Circle");
buildingNames.push("55 Drake Lane");
buildingNames.push("Vail");
buildingNames.push("Sachem Village");
buildingNames.push("15 Sachem Circle 1-8");
buildingNames.push("51 Drake Lane");
buildingNames.push("Bartlett Tower");
buildingNames.push("22 Drake Lane");
buildingNames.push("Memorial Football Stadium");
buildingNames.push("49 Drake Lane");
buildingNames.push("24 Drake Lane");
buildingNames.push("22 Sachem Circle");
buildingNames.push("20 Drake Lane");
buildingNames.push("23 Sachem Circle");
buildingNames.push("25 Sachem Circle");
buildingNames.push("24 Sachem Circle");
buildingNames.push("26 Sachem Circle");
buildingNames.push("18 Drake Lane");
buildingNames.push("27 Sachem Circle");
buildingNames.push("29 Sachem Circle");
buildingNames.push("28 Sachem Circle");
buildingNames.push("Remsen Medical Sciences Building");
buildingNames.push("30 Sachem Circle");
buildingNames.push("45 Drake Lane");
buildingNames.push("31 Sachem Circle");
buildingNames.push("33 Sachem Circle");
buildingNames.push("32 Sachem Circle");
buildingNames.push("47 Drake Lane");
buildingNames.push("8 Drake Lane");
buildingNames.push("Dana Biomedical Library");
buildingNames.push("8 Sachem Circle 1-6");
buildingNames.push("7 Sachem Circle");
buildingNames.push("6 Drake Lane");
buildingNames.push("Woodward Hall");
buildingNames.push("Shattuck Observatory Out-Buillding 2");
buildingNames.push("Smith Hall");
buildingNames.push("34 Sachem Circle");
buildingNames.push("6 Sachem Circle");
buildingNames.push("35 Sachem Circle");
buildingNames.push("4 Drake Lane");
buildingNames.push("37 Sachem Circle");
buildingNames.push("36 Sachem Circle");
buildingNames.push("Shattuck Observatory Out-Building 1");
buildingNames.push("5 Sachem Circle");
buildingNames.push("3 Sachem Circle");
buildingNames.push("4 Sachem Circle");
buildingNames.push("2 Sachem Circle");
buildingNames.push("1 Sachem Circle");
buildingNames.push("21 Drake Lane");
buildingNames.push("23 Drake Lane");
buildingNames.push("41 Drake Lane");
buildingNames.push("McKenzie Hall and Shops");
buildingNames.push("FO&M Warehouse");
buildingNames.push("McKenzie Substation");
buildingNames.push("Shattuck Observatory");
buildingNames.push("43 Drake Lane");
buildingNames.push("Ripley Hall");
buildingNames.push("Gilman Life Sciences Laboratory");
buildingNames.push("64 Sachem Circle");
buildingNames.push("65 Sachem Circle");
buildingNames.push("37 Drake Lane");
buildingNames.push("27 Drake Lane");
buildingNames.push("62 Sachem Circle");
buildingNames.push("63 Sachem Circle");
buildingNames.push("39 Drake Lane");
buildingNames.push("17 Drake Lane");
buildingNames.push("25 Drake Lane");
buildingNames.push("McKenzie Emergency Diesel Generator");
buildingNames.push("3 Drake Lane");
buildingNames.push("19 Drake Lane");
buildingNames.push("60 Sachem Circle");
buildingNames.push("61 Sachem Circle");
buildingNames.push("31 Drake Lane");
buildingNames.push("McLaughlin Cluster - Rauner Hall");
buildingNames.push("Dartmouth Outing Club House");
buildingNames.push("59 Sachem Circle");
buildingNames.push("7 Drake Lane");
buildingNames.push("58 Sachem Circle");
buildingNames.push("29 Drake Lane");
buildingNames.push("33 Drake Lane");
buildingNames.push("35 Drake Lane");
buildingNames.push("5 Drake Lane");
buildingNames.push("27 Lebanon Street");
buildingNames.push("56 Sachem Circle");
buildingNames.push("57 Sachem Circle");
buildingNames.push("1 Drake Lane");
buildingNames.push("1 Sanborn Road");
buildingNames.push("54 Sachem Circle");
buildingNames.push("55 Sachem Circle");
buildingNames.push("38 Sachem Circle");
buildingNames.push("3 Sanborn Road");
buildingNames.push("13 Drake Lane");
buildingNames.push("15 Drake Lane");
buildingNames.push("52 Sachem Circle");
buildingNames.push("53 Sachem Circle");
buildingNames.push("9 Drake Lane");
buildingNames.push("11 Drake Lane");
buildingNames.push("39 Sachem Circle");
buildingNames.push("Burke Laboratory");
buildingNames.push("Fairchild Physical Sciences Center");
buildingNames.push("50 Sachem Circle");
buildingNames.push("41 Sachem Circle");
buildingNames.push("51 Sachem Circle");
buildingNames.push("Kellogg Medical Auditorium");
buildingNames.push("Central Chiller Plant");
buildingNames.push("McLaughlin Cluster - Thomas Hall");
buildingNames.push("Hallgarten Hall");
buildingNames.push("40 Sachem Circle");
buildingNames.push("South House");
buildingNames.push("48 Sachem Circle");
buildingNames.push("49 Sachem Circle");
buildingNames.push("47 Sachem Circle");
buildingNames.push("McLaughlin Cluster - Bildner Hall");
buildingNames.push("46 Sachem Circle");
buildingNames.push("44 Sachem Circle");
buildingNames.push("45 Sachem Circle");
buildingNames.push("Fayerweather Hall");
buildingNames.push("42 Sachem Circle");
buildingNames.push("25 Lebanon Street");
buildingNames.push("43 Sachem Circle");
buildingNames.push("McKenzie Fuel Oil Facility");
buildingNames.push("McLaughlin Cluster - Berry Hall");
buildingNames.push("Topliff Hall");
buildingNames.push("Wilder Hall");
buildingNames.push("Fayerweather Hall South");
buildingNames.push("Black Family Visual Arts Center");
buildingNames.push("The Lodge");
buildingNames.push("Fayerweather Hall North");
buildingNames.push("37 Dewey Field Road");
buildingNames.push("11 Rope Ferry Road");
buildingNames.push("McLaughlin Cluster - Goldstein Hall");
buildingNames.push("44 North College Street");
buildingNames.push("Montgomery House");
buildingNames.push("Richardson Hall");
buildingNames.push("Bartlett Hall");
buildingNames.push("McLaughlin Cluster - Byrne II Hall");
buildingNames.push("Wentworth Hall");
buildingNames.push("La Casa");
buildingNames.push("Hood Annex");
buildingNames.push("19 Field Road");
buildingNames.push("17 Field Road");
buildingNames.push("Dick's House");
buildingNames.push("New Hampshire Hall");
buildingNames.push("4 Currier Place");
buildingNames.push("Steele Hall");
buildingNames.push("Dartmouth Hall");
buildingNames.push("Thornton Hall");
buildingNames.push("Rollins Chapel");
buildingNames.push("13 Field Road");
buildingNames.push("Wilson Hall");
buildingNames.push("15 Field Road");
buildingNames.push("5 Rope Ferry Road");
buildingNames.push("Hood Museum of Art");
buildingNames.push("Winifred-Raven House");
buildingNames.push("34 Field Road");
buildingNames.push("36 Field Road");
buildingNames.push("Sudikoff Hall");
buildingNames.push("Wheeler Hall");
buildingNames.push("Reed Hall");
buildingNames.push("1 Rope Ferry Road");
buildingNames.push("3 Rope Ferry Road");
buildingNames.push("Parker House");
buildingNames.push("9 Field Road");
buildingNames.push("11 Field Road");
buildingNames.push("Hopkins Center for the Arts");
buildingNames.push("South Block Garage");
buildingNames.push("9 South Street");
buildingNames.push("30 Field Road");
buildingNames.push("32 Field Road");
buildingNames.push("Moore Psychology Building");
buildingNames.push("7 South Street");
buildingNames.push("6 Rope Ferry Road");
buildingNames.push("5 Field Road");
buildingNames.push("7 Field Road");
buildingNames.push("7 Lebanon Street");
buildingNames.push("Webster Hall - Rauner Library");
buildingNames.push("28 Field Road");
buildingNames.push("26 Field Road");
buildingNames.push("1 Field Road");
buildingNames.push("3 Field Road");
buildingNames.push("Berry Library");
buildingNames.push("Sherman House");
buildingNames.push("Kemeny Hall");
buildingNames.push("5 South Street");
buildingNames.push("South Block Garage");
buildingNames.push("3 Clement Road Out-Building");
buildingNames.push("18 Field Road");
buildingNames.push("20 Field Road");
buildingNames.push("Native American House");
buildingNames.push("3 South Street");
buildingNames.push("LALACS House");
buildingNames.push("4 Field Road");
buildingNames.push("2 Field Road");
buildingNames.push("Hanover Inn Dartmouth");
buildingNames.push("Carson Hall");
buildingNames.push("3 Clement Road");
buildingNames.push("Lang");
buildingNames.push("14 Field Road");
buildingNames.push("Baker Library");
buildingNames.push("Carpenter Hall");
buildingNames.push("16 Field Road");
buildingNames.push("South Block Garage");
buildingNames.push("72 S Main Street");
buildingNames.push("Sanborn House");
buildingNames.push("68 S Main Street");
buildingNames.push("8 Field Road");
buildingNames.push("6 Field Road");
buildingNames.push("12 Field Road");
buildingNames.push("10 Field Road");
buildingNames.push("Chinese Language House");
buildingNames.push("Haldeman Center");
buildingNames.push("2 Clement Road");
buildingNames.push("Choate House");
buildingNames.push("Webster Cottage");
buildingNames.push("Robinson Hall");
buildingNames.push("North Hall");
buildingNames.push("Parkhurst Hall");
buildingNames.push("Collis Center");
buildingNames.push("Cutter Apartment");
buildingNames.push("McNutt Hall");
buildingNames.push("Cutter Shabazz Hall");
buildingNames.push("Silsby Hall");
buildingNames.push("Blunt Alumni Center");
buildingNames.push("63 S Main Street");
buildingNames.push("Rockefeller Center");
buildingNames.push("8 Clement Road");
buildingNames.push("Brown/Little Lounge");
buildingNames.push("Choate Cluster - Brown Hall");
buildingNames.push("Mass Row Cluster - South Massachusetts Hall");
buildingNames.push("Mass Row Cluster - Middle Massachusetts Hall");
buildingNames.push("Mass Row Cluster - North Massachusetts Hall");
buildingNames.push("Russell Sage Cluster - Butterfield Hall");
buildingNames.push("Mass Row Cluster - Hitchcock Hall");
buildingNames.push("Choate Cluster - Little Hall");
buildingNames.push("Russell Sage Cluster - Hyphen Lounge");
buildingNames.push("Russell Sage Cluster - Russell Sage Hall");
buildingNames.push("Dean of the College House");
buildingNames.push("South Fairbanks");
buildingNames.push("North Fairbanks");
buildingNames.push("Sigma Delta");
buildingNames.push("Parking Deck");
buildingNames.push("Gold Coast Cluster - Gile Hall");
buildingNames.push("Choate Cluster - Cohen Hall");
buildingNames.push("Bissell/Cohen Lounge");
buildingNames.push("Class of 1953 Commons");
buildingNames.push("Choate Cluster - Bissell Hall");
buildingNames.push("Russell Sage Cluster - Fahey Hall");
buildingNames.push("Russell Sage Cluster - McLane Hall");
buildingNames.push("Gold Coast Cluster - Streeter Hall");
buildingNames.push("School House");
buildingNames.push("Kappa Delta Epsilon");
buildingNames.push("Gold Coast Cluster - Lord Hall");
buildingNames.push("Allen House");
buildingNames.push("17 West Wheelock Street");
buildingNames.push("Roth Center For Jewish Life");
buildingNames.push("Delta Delta Delta");
buildingNames.push("19 West Wheelock Street");
buildingNames.push("Alpha Chi Alpha");
buildingNames.push("President's House Garage");
buildingNames.push("Kappa Delta");
buildingNames.push("President's House");
buildingNames.push("Epsilon Kappa Theta");
buildingNames.push("Buchanan");
buildingNames.push("25 West Wheelock Street");
buildingNames.push("25.5 West Wheelock Street");
buildingNames.push("Woodbury Hall");
buildingNames.push("27 West Wheelock Street");
buildingNames.push("West House");
buildingNames.push("Tuck Hall");
buildingNames.push("Foley House");
buildingNames.push("Chase Hall");
buildingNames.push("Cummings Hall");
buildingNames.push("Murdough Center - Feldberg Library");
buildingNames.push("Stell Hall");
buildingNames.push("Byrne Hall");
buildingNames.push("MacLean Engineering Sciences Center");
buildingNames.push("River Cluster - Maxwell Hall");
buildingNames.push("37 West Wheelock Street");
buildingNames.push("River Cluster - Channing Cox Hall");
buildingNames.push("Whittemore Hall");
buildingNames.push("Pineau-Valencienne");
buildingNames.push("Tom Dent Cabin");
buildingNames.push("Raether");
buildingNames.push("Ledyard Canoe Club Shed 3");
buildingNames.push("River Cluster - Judge Hall");
buildingNames.push("Ledyard Canoe Club Shed 2");
buildingNames.push("Ledyard Canoe Club Shed 1");
buildingNames.push("Ledyard Canoe Club");
buildingNames.push("Achtmeyer");
buildingNames.push("Fuller Boathouse");
buildingNames.push("Fuller Boat Shed");
buildingNames.push("River Cluster - French Hall");
buildingNames.push("Friends of Dartmouth Rowing Boathouse");
buildingNames.push("Swimming Dock");
buildingNames.push("Davidson Pottery Studio");
buildingNames.push("Lewiston Office");
buildingNames.push("Lewiston Warehouse 1");
buildingNames.push("Lewiston Warehouse 2");
$('#center-location').autocomplete({
    source:buildingNames
});


/*
$(".rss-items li").each(function(index){
var rssInfo=this.innerHTML;
var rssArray=rssInfo.split("Location:");
var rssLocation=rssArray[1];

var maxScore=0;
var maxIndex=0;
for(var i=0; i<buildingNames.length; i++){
var score=lcs(rssLocation,buildingNames[i])
 if(score>maxScore){
maxScore=score;
maxIndex=i;
}
}

alert(rssLocation);

});
*/
var shadows=new Array();
var floors=new Array();
var testCoords=new Array();
for (i = 0; i < polys.length; i++) {
        tmp = parsePolyStrings(polys[i],0.00005,0);
        if (tmp.length) {
buildings.push(tmp);
        }
    }
tmp=[];
for (i = 0; i < polys.length; i++) {
        tmp = coordPolyStrings(polys[i]);
        if (tmp.length) {
testCoords.push(tmp[0]);
        }
    }
tmp=[];
for (i = 0; i < polys.length; i++) {
        tmp = parsePolyStrings(polys[i],0.000075,-0.000025);
        if (tmp.length) {
shadows.push(tmp);
        }
    }
tmp=[];
for (i = 0; i < polys.length; i++) {
        tmp = parsePolyStrings(polys[i],0,0);
        if (tmp.length) {
floors.push(tmp);
        }
    }
var curr_sel_building;
for(var i=0; i<buildings.length; i++){

 var test=drawExcrudedShape(map, testCoords[i], 0.00005, defaultStrokeColor, defaultStrokeOpac, 0.3, "#EBEFF9", 1.0);
var shadow = new google.maps.Polygon({
    paths: shadows[i],
    strokeColor: '#000000',
    strokeOpacity: '0',
    strokeWeight: '0',
        fillColor: '#000000',
    fillOpacity: '0.25',
zIndex: 1
  });
  shadow.setMap(map);
var floor = new google.maps.Polygon({
    paths: floors[i],
    strokeColor: '#000000',
    strokeOpacity: '0',
    strokeWeight: '0',
        fillColor: '#FFFFFF',
    fillOpacity: '1',
zIndex: 25
  });
  floor.setMap(map);
 var building = new google.maps.Polygon({
    paths: buildings[i],
    strokeColor: defaultStrokeColor,
    strokeOpacity: defaultStrokeOpac,
    strokeWeight: defaultStrokeWeight,
        fillColor: defaultColor,
    fillOpacity: defaultOpac,
buildingName: buildingNames[i],
buildingFullName: buildingFullNames[i],
zIndex: 100
  });
  building.setMap(map);
building.addListener('mouseover', function(){
this.setOptions({fillOpacity: hoverOpac,strokeWeight: hoverStrokeWeight,strokeColor: hoverStrokeColor,
    strokeOpacity: hoverStrokeOpac, fillColor:hoverColor});
});
building.addListener('mouseout', function(){
if(curr_sel_building!=this){
this.setOptions({fillOpacity: defaultOpac,strokeWeight: defaultStrokeWeight,strokeColor: defaultStrokeColor,
    strokeOpacity: defaultStrokeOpac, fillColor: defaultColor});
}
});
building.addListener('dblclick', function(event) {
this.setOptions({fillOpacity: hoverOpac,strokeWeight: hoverStrokeWeight,strokeColor: hoverStrokeColor,
    strokeOpacity: hoverStrokeOpac, fillColor:hoverColor});
if(typeof curr_sel_building != 'undefined' && curr_sel_building!=this){
curr_sel_building.setOptions({fillOpacity: defaultOpac,strokeWeight: defaultStrokeWeight,strokeColor: defaultStrokeColor,
    strokeOpacity: defaultStrokeOpac, fillColor: defaultColor});
}
curr_sel_building=this;
$("#ag_room").val(this.buildingName);
location.value=this.buildingName;    
				var lat = event.latLng.lat();
				var long = event.latLng.lng();					
				//$("#ag_location_latlng").val();
				$("#ag_location_latlng").val( lat+","+long );
				//alert($("#ag_location_latlng").val());
				map.panTo(event.latLng);
				placeMarker(event.latLng, map);
				geocoder.geocode({'location': {lat: lat, lng: long}}, function(results, status) {
					if (status === google.maps.GeocoderStatus.OK)
					{
						if (results[1])
						{
							$("#ag_location").val( results[1].formatted_address );
                               
							//alert($("#ag_location").val());
						}
						else
						{
							$("#ag_location").val('No results found');	
						}
					}
					else
					{
						$("#ag_location").val('Geocoder failed due to: ' + status);
					}
				});//geocode
			});
}
var cur_user_id=Parse.User.current();
			$("#available-groups-table tr").each(function(index){
				var group_id = $(this).attr('id');

				var latlng = $(this).find('.latlng').text().split(',');
				var myLatLng = {lat: parseFloat( latlng[0] ), lng: parseFloat( latlng[1] )};
                var zIndex=200-myLatLng['lat'];
				var address = $(this).find('.location').text();
				var class_id = $(this).find('.class_id').text();
				var class_number = $(this).find('.class_number').text();
var date= $(this).find('.on_date').text();
var group_leader= $(this).find('.user_id').text();
var endTime= $(this).find('.end_time').text();			
var iconIndex = $("#user-classes li."+class_id + "_" + class_number).index() + 1;
var topicName= $(this).find('.topicname').text();
today=new Date();
group_date=new Date(date+" "+endTime);

		                
if(iconIndex!=0){
if(cur_user_id==group_leader){
var imgTag='-leader.png';
}
else{
var imgTag='.png';
}
				var marker = new google.maps.Marker({
					position: myLatLng,
					map: map,
					title: zIndex.toString(),
optimized: false,
zIndex: zIndex,
					icon: {
	url: 'images/class-'+class_id+'-marker'+imgTag,
	scaledSize: new google.maps.Size(50,80),
	origin: new google.maps.Point(0,0),
	anchor: new google.maps.Point(25,80)
},
					my_group_id: group_id,
tag: imgTag
     			});
     			        
				markers.push( marker );
				marker.addListener('mouseout', function() {
					if(curr_sel_marker!=marker){
						marker.setIcon({
	url: 'images/class-'+class_id+'-marker'+marker.tag,
	scaledSize: new google.maps.Size(50,80),
	origin: new google.maps.Point(0,0),
	anchor: new google.maps.Point(25,80)
});
marker.setZIndex(parseInt(marker.title));
					}
				});
    //SELECTS WERE AT 54 and 27
				marker.addListener('mouseover', function() {
					marker.setIcon({
	url: 'images/class-'+class_id+'-marker-select.png',
	scaledSize: new google.maps.Size(50,80),
	origin: new google.maps.Point(0,0),
	anchor: new google.maps.Point(25,80)
});
marker.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);				});
				marker.addListener('dblclick', function() {
                   
                    //marker.setAnimation(google.maps.Animation.BOUNCE);

					deleteOverlays();
                    
                    marker.setIcon({
	url: 'images/class-'+class_id+'-marker-select.png',
	scaledSize: new google.maps.Size(50,80),
	origin: new google.maps.Point(0,0),
	anchor: new google.maps.Point(25,80)
});
marker.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
					if(typeof curr_sel_marker != 'undefined' && curr_sel_marker!=marker){
                            //curr_sel_marker.setAnimation(null);
						curr_sel_marker.setIcon({
	url: 'images/class-'+curr_sel_ind+'-marker'+curr_sel_marker.tag,
	scaledSize: new google.maps.Size(50,80),
	origin: new google.maps.Point(0,0),
	anchor: new google.maps.Point(25,80)
});
curr_sel_marker.setZIndex(parseInt(curr_sel_marker.title));
					}
					curr_sel_marker=marker;
					curr_sel_ind=class_id;
					var group_id = marker.my_group_id;
					var row = $("#available-groups-table #"+group_id).eq(0);

					//var g_name = row.find('.groupname').text();
					var location = row.find('.location').text();
					var gid = row.find('.group_id').text();
					var class_name = row.find('.class_name').text();
					var t_name = row.find('.topicname').text();
					var on_date = row.find('.on_date').text();
					var time = row.find('.start_time').text() + ' - ' + row.find('.end_time').text();
					
					
					//$("#selected-group-info .gname").text( g_name );
					$("#selected-group-info .location").text( location );
					$("#hiddengroupId").val( gid );
					$("#selected-group-info .class").text( class_name );
					$("#selected-group-info .tname").text( t_name );
					$("#selected-group-info .on_date").text( on_date );
					$("#selected-group-info .start_end_time").text( time );
					
					$(".joingroupbtn a").attr('href', 'join-group.php?group_id='+ group_id.replace('g_', '') );
					$(".joingroupbtn").fadeIn();
					
					$(".moredetailsbtn").show();
					$(".more-details").hide();
					
					//map.setZoom(12);
					map.panTo(marker.getPosition());
					$("#group-details-div").addClass('open');
				});//marker click
				}
				
			});//
			
			
            var bounds = new google.maps.LatLngBounds();
			for(i=0;i<markers.length;i++) {
				 bounds.extend(markers[i].getPosition());
			}//for			
			//map.fitBounds( strictBounds );

			google.maps.event.addListener(map, 'dblclick', function(event) {
                $("#group-details-div").removeClass('open');
                if(typeof curr_sel_marker != 'undefined'){
                curr_sel_marker.setIcon({
	url: 'images/class-'+curr_sel_ind+'-marker'+curr_sel_marker.tag,
	scaledSize: new google.maps.Size(50,80),
	origin: new google.maps.Point(0,0),
	anchor: new google.maps.Point(25,80)
});
                
curr_sel_marker.setZIndex(parseInt(curr_sel_marker.title));
curr_sel_marker=undefined;
                }
				var lat = event.latLng.lat();
				var long = event.latLng.lng();					
				//$("#ag_location_latlng").val();
				$("#ag_location_latlng").val( lat+","+long );
				//alert($("#ag_location_latlng").val());
				map.panTo(event.latLng);
				placeMarker(event.latLng, map);
				geocoder.geocode({'location': {lat: lat, lng: long}}, function(results, status) {
					if (status === google.maps.GeocoderStatus.OK)
					{
						if (results[1])
						{
							$("#ag_location").val( results[1].formatted_address );
location.innerHTML="Dartmouth College";
							//alert($("#ag_location").val());
						}
						else
						{
							$("#ag_location").val('No results found');	
						}
					}
					else
					{
						$("#ag_location").val('Geocoder failed due to: ' + status);
					}
				});//geocode
			});

			
			$("#user-classes input[type=checkbox]").on('change', function(e){
				var cur_classes = [];
				$("#user-classes input:checked").each(function(index){
					var class_id = $(this).parent().attr('class');
					cur_classes.push( class_id );
				});//each
				
				for( var i = 0; i < markers.length; i++ )
				{
					markers[i].setMap( null );
				}//for
				
				$("#available-groups-table tr").each(function(index){
					
					var row_class_id = $(this).find(".class_id").text();
					var row_class_number = $(this).find('.class_number').text();
					
					if( cur_classes.indexOf( row_class_id + "_" + row_class_number) == -1 )
						return;
					
					var group_id = $(this).attr('id');
					var latlng = $(this).find('.latlng').text().split(',');
					var myLatLng = {lat: parseFloat( latlng[0] ), lng: parseFloat( latlng[1] )};
	var zIndex=100-myLatLng['lat'];
					var address = $(this).find('.location').text();
					var class_id = $(this).find('.class_id').text();
					var class_number = $(this).find('.class_number').text();
					var iconIndex = $("#user-classes li."+class_id + "_" + class_number).index() + 1;
var cur_user_id=$("#user-id-table tr td").text();
var date= $(this).find('.on_date').text();
var group_leader= $(this).find('.user_id').text();
var endTime= $(this).find('.end_time').text();						
today=new Date();
group_date=new Date(date+" "+endTime);

		                
if(iconIndex!=0 && today<group_date){
if(cur_user_id==group_leader){
var imgTag='-leader.png';
}
else{
var imgTag='.png';
}
					var marker = new google.maps.Marker({
						position: myLatLng,
						map: map,
						title: address,
optimized: false,
zIndex: zIndex,						
icon: {
	url: 'images/class-'+class_id+'-marker'+imgTag,
	scaledSize: new google.maps.Size(50,80),
	origin: new google.maps.Point(0,0),
	anchor: new google.maps.Point(25,80)
},
						my_group_id: group_id,
tag: imgTag
					});
					markers.push( marker );
					
					marker.addListener('mouseout', function() {
					if(curr_sel_marker!=marker){
						marker.setIcon({
	url: 'images/class-'+class_id+'-marker'+marker.tag,
	scaledSize: new google.maps.Size(50,80),
	origin: new google.maps.Point(0,0),
	anchor: new google.maps.Point(25,80)
});
marker.setZIndex(parseInt(curr_sel_marker.title));
					}
				});
				marker.addListener('mouseover', function() {
					marker.setIcon({
	url: 'images/class-'+class_id+'-marker-select.png',
	scaledSize: new google.maps.Size(50,80),
	origin: new google.maps.Point(0,0),
	anchor: new google.maps.Point(25,80)
});
marker.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
				});
				marker.addListener('dblclick', function() {
					marker.setIcon({
	url: 'images/class-'+class_id+'-marker-select.png',
	scaledSize: new google.maps.Size(50,80),
	origin: new google.maps.Point(0,0),
	anchor: new google.maps.Point(25,80)
});
marker.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
					if(typeof curr_sel_marker != 'undefined' && curr_sel_marker!=marker){
						curr_sel_marker.setIcon({
	url: 'images/class-'+curr_sel_ind+'-marker'+curr_sel_marker.tag,
	scaledSize: new google.maps.Size(50,80),
	origin: new google.maps.Point(0,0),
	anchor: new google.maps.Point(25,80)
});
curr_sel_marker.setZIndex(parseInt(curr_sel_marker.title));

					}
					curr_sel_marker=marker;
					curr_sel_ind=class_id;
					var group_id = marker.my_group_id;
					var row = $("#available-groups-table #"+group_id).eq(0);

					//var g_name = row.find('.groupname').text();
					var location = row.find('.location').text();
					var gid = row.find('.group_id').text();
					var class_name = row.find('.class_name').text();
					var t_name = row.find('.topicname').text();
					var on_date = row.find('.on_date').text();
					var time = row.find('.start_time').text() + ' - ' + row.find('.end_time').text();
					
					
					//$("#selected-group-info .gname").text( g_name );
					$("#selected-group-info .location").text( location );
					$("#hiddengroupId").val( gid );
					$("#selected-group-info .class").text( class_name );
					$("#selected-group-info .tname").text( t_name );
					$("#selected-group-info .on_date").text( on_date );
					$("#selected-group-info .start_end_time").text( time );
					
					$(".joingroupbtn a").attr('href', 'join-group.php?group_id='+ group_id.replace('g_', '') );
					$(".joingroupbtn").fadeIn();
					
					$(".moredetailsbtn").show();
					$(".more-details").hide();
					
					//map.setZoom(12);
					map.panTo(marker.getPosition());
					$("#group-details-div").addClass('open');
				});//marker click
	}
				});//
				
				var bounds = new google.maps.LatLngBounds();
				for(i=0;i<markers.length;i++) {
					 bounds.extend(markers[i].getPosition());
				}//for			
				//map.fitBounds( bounds );
				
				
			});//checkbox change
        }//init
		
		//google.maps.event.addDomListener(window, 'load', init);
		//MAP SCRIPT ENDS HERE
		
		$("#group-details-div .close").on('click', function(){
			$("#group-details-div").removeClass('open');
			curr_sel_marker.setIcon({
	url: 'images/class-'+curr_sel_ind+'-marker'+curr_sel_marker.tag,
	scaledSize: new google.maps.Size(50,80),
	origin: new google.maps.Point(0,0),
	anchor: new google.maps.Point(25,80)
});
curr_sel_marker.setZIndex(parseInt(curr_sel_marker.title));
curr_sel_marker=undefined;
		});
		
		$("#create-group-div .close").on('click', function(){
			$("#create-group-div").removeClass('open');
		});
		
		$("#create-group").on('click', function(e){
			e.preventDefault();
			if($("#ag_location_latlng").val() == ""){
				alert("Whoops! No location chosen yet!");
			}else{
				$("#create-group-div").addClass('open');
				setTimeout( init3, 1000 );
			}
			
		});
		
		
		var geocoder = new google.maps.Geocoder;
	
   /*
        function init2(){
            var mapOptions = {
                zoom: 15,
                center: new google.maps.LatLng(43.7044406, -72.2886934), // New York
                styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
            };

            // Get the HTML DOM element that will contain your map 
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('map2');

            // Create the Google Map using our element and options defined above
            var map2 = new google.maps.Map(mapElement, mapOptions);
		        
			google.maps.event.addListener(map2, 'dblclick', function(event) {
				var lat = event.latLng.lat();
				var long = event.latLng.lng();					
				$("#ag_location_latlng").val( lat+","+long );

				placeMarker(event.latLng, map2);
				geocoder.geocode({'location': {lat: lat, lng: long}}, function(results, status) {
					if (status === google.maps.GeocoderStatus.OK)
					{
						if (results[1])
						{
							$("#ag_location").val( results[1].formatted_address );
						}
						else
						{
							$("#ag_location").val('No results found');	
						}
					}
					else
					{
						$("#ag_location").val('Geocoder failed due to: ' + status);
					}
				});//geocode
			});

        }//init*/
		
		//MAP SCRIPT ENDS HERE
		
		
		$("#group-details-div .moredetailsbtn a").on('click', function(){
			$(".moredetailsbtn").fadeOut();
			$(".more-details").html("Loading. Please wait...");
			$(".more-details").slideDown();
			$.ajax({
				url: "addgroupajax.php",
				method: "POST",
				data: {'action': 'viewMember', 'groupId' : $("#hiddengroupId").val()}, 
				success: function(result){
					result = $.trim(result);
					$(".more-details").html(result);
		    	}
			});
		});

		


}//search_group_body_check	
		
});//document ready

 var markersArray = [];
var pointer = {
	url: 'images/smallpointer.png',
	scaledSize: new google.maps.Size(50,50),
	origin: new google.maps.Point(0,0),
	anchor: new google.maps.Point(25,50)
}

function placeMarker(location, mapObj) {
    // first remove all markers if there are any
    deleteOverlays();

    var marker = new google.maps.Marker({
        position: location,
 	icon: pointer,
 	animation: google.maps.Animation.BOUNCE,
 	optimized: false,
zIndex: google.maps.Marker.MAX_ZINDEX + 1,
        map: mapObj
    });
    // add marker in markers array
    markersArray.push(marker);

    //map.setCenter(location);
}

// Deletes all markers in the array by removing references to them
function deleteOverlays() {
    if (markersArray) {
        for (i in markersArray) {
            markersArray[i].setMap(null);
        }
    	markersArray.length = 0;
    }
}
function parsePolyStrings(ps,y,x) {
    var i, j, lat, lng, tmp, tmpArr,
        arr = [],
        //match '(' and ')' plus contents between them which contain anything other than '(' or ')'
        m = ps.match(/\([^\(\)]+\)/g);
    if (m !== null) {
        for (i = 0; i < m.length; i++) {
            //match all numeric strings
            tmp = m[i].match(/-?\d+\.?\d*/g);
            if (tmp !== null) {
                //convert all the coordinate sets in tmp from strings to Numbers and convert to LatLng objects
                for (j = 0, tmpArr = []; j < tmp.length; j+=2) {
                    lng = Number(tmp[j])+x;
                    lat = Number(tmp[j + 1])+y;
                    tmpArr.push(new google.maps.LatLng(lat, lng));
                }
                arr.push(tmpArr);
            }
        }
    }
    //array of arrays of LatLng objects, or empty array
    return arr;
}
function coordPolyStrings(ps) {
    var i, j, lat, lng, tmp, tmpArr,
        arr = [],
        //match '(' and ')' plus contents between them which contain anything other than '(' or ')'
        m = ps.match(/\([^\(\)]+\)/g);
    if (m !== null) {
        for (i = 0; i < m.length; i++) {
            //match all numeric strings
            tmp = m[i].match(/-?\d+\.?\d*/g);
            if (tmp !== null) {
                //convert all the coordinate sets in tmp from strings to Numbers and convert to LatLng objects
                for (j = 0, tmpArr = []; j < tmp.length; j+=2) {
                    lng = Number(tmp[j]);
                    lat = Number(tmp[j + 1]);

tmpArr.push([lat,lng]);
                }
                arr.push(tmpArr);
            }
        }
    }
    //array of arrays of LatLng objects, or empty array
    return arr;
}
function lcs(lcstest, lcstarget) {
 matchfound = 0
 lsclen = lcstest.length
  for(lcsi=0; lcsi<lcstest.length; lcsi++){
   lscos=0
    for(lcsj=0; lcsj<lcsi+1; lcsj++){
     re = new RegExp("(?:.{" + lscos + "})(.{" + lsclen + "})", "i");
     temp = re.test(lcstest);
     re = new RegExp("(" + RegExp.$1 + ")", "i");
      if(re.test(lcstarget)){
       matchfound=1;
       result = RegExp.$1;
       break;
       }
     lscos = lscos + 1;
     }
     if(matchfound==1){return result.length; break;}
    lsclen = lsclen - 1;
   }
  result = "";
  return result.length;
 }
function drawExcrudedShape(map, coordinates, height, strokeColor, strokeOpacity, strokeWeight, fillColor, fillOpacity) {
 
    var pairs = [],
        polygons = [];
    // build line pairs for each wall
    for (var i=0; i<coordinates.length; i++) {
 
        var point = coordinates[i];
            if(i==coordinates.length-1){
var otherIndex=0;
}
else{
var otherIndex=i+1;
}
//var otherIndex = (i == coordinates.length-1) ? 0 : i+1;
            var otherPoint = coordinates[otherIndex];
 
        pairs.push([point, otherPoint]);
    }
    // draw excrusions
    for (var i=0; i<pairs.length; i++) {
var test=pairs[i][0];
        var first = pairs[i][0],
            second = pairs[i][1],
            wallCoordinates =  [
                new google.maps.LatLng(first[0],first[1]),
                new google.maps.LatLng(first[0]+height,first[1]),
                new google.maps.LatLng(second[0]+height,second[1]),
                new google.maps.LatLng(second[0],second[1]),
new google.maps.LatLng(first[0],first[1])                                 
            ],
            polygon = new google.maps.Polygon({
                paths: wallCoordinates,
                strokeColor: strokeColor,
                strokeOpacity: strokeOpacity, 
                strokeWeight: strokeWeight,
                fillColor: fillColor,
                fillOpacity: fillOpacity,
zIndex:50
            });
        polygon.setMap(map);
 polygon.addListener('dblclick', showArrays);
        polygons.push(polygon);
    }       
 
    return polygons;
}
function showArrays(event) {
  // Since this polygon has only one path, we can call getPath() to return the
  // MVCArray of LatLngs.
  var vertices = this.getPath();

  var contentString = '<b>Wall Polygon</b><br>' +
      'Clicked location: <br>' + event.latLng.lat() + ',' + event.latLng.lng() +
      '<br>';

  // Iterate over the vertices.
  for (var i =0; i < vertices.getLength(); i++) {
    var xy = vertices.getAt(i);
    contentString += '<br>' + 'Coordinate ' + i + ':<br>' + xy.lat() + ',' +
        xy.lng();
  }

  // Replace the info window's content and position.
  //alert(contentString);

}
function addGroupValidation()
{
	
	if( $.trim($("#ag_topicname").val()) == "" )
	{
		alert("Please enter a topic name.");
		$("#ag_topicname").focus();
		return false;
	}

	if( $.trim($("#ag_class").val()) == "" )
	{
		alert("Please select a class.");
		$("#ag_class").focus();
		return false;
	}

	if( $.trim($("#ag_date").val()) == "" )
	{
		alert("Please enter a date.");
		$("#ag_date").focus();
		return false;
	}	

	if( $.trim($("#ag_room").val()) == "" )
	{
		alert("Please enter a room.");
		$("#ag_room").focus();
		return false;
	}	

	if( $.trim($("#ag_location").val()) == "" )
	{
		alert("Please select a location on the map.");
		$("#ag_location").focus();
		return false;
	}
	
	$("#ag_start_time").val( $(".slider-time").text() );
	$("#ag_end_time").val( $(".slider-time2").text() );

	$("#ag_submit").text("Processing New Study Group...");
	//$('#ag_submit').attr('disabled','disabled');
	/*$.ajax({
		url: "addgroupajax.php",
		method: "POST",
		data: $("#addgroupform").serialize(), 
		success: function(result){
			result = $.trim(result);
                        $("#ag_submit").text("Success!");
			window.location.href = "search-group.php";
			//console.log(result);
			//var obj = result;
			//var obj = JSON.parse(result);
			//if(obj.status == "success"){
			//	$("#ag_submit").text("Success!");
			//	window.location.href = "search-group.php";
			//}else{
			//	//$('#ag_submit').removeAttr('disabled');
			//	window.alert(obj.message);
			//	$("#ag_submit").text("Add Group");
			//}
        	
    	}
	});
    */

	return false;
}//addGroupValidation()
function joinGroup(){
	$("#joingroupbtnId").html("Processing. Please wait...");
	$.ajax({
		url: "addgroupajax.php",
		method: "POST",
		data: {'action': 'joinGroup', 'groupId' : $("#hiddengroupId").val()}, 
		success: function(result){
			$.ajax({
				url: "addgroupajax.php",
				method: "POST",
				data: {'action': 'viewMember', 'groupId' : $("#hiddengroupId").val()}, 
				success: function(result){
					result = $.trim(result);
					$(".more-details").html(result);
		    	}
			});
    	}
	});
}

function leftGroup(){
	$("#joingroupbtnId").html("Processing. Please wait...");
	$.ajax({
		url: "addgroupajax.php",
		method: "POST",
		data: {'action': 'leftGroup', 'groupId' : $("#hiddengroupId").val()}, 
		success: function(result){
			$.ajax({
				url: "addgroupajax.php",
				method: "POST",
				data: {'action': 'viewMember', 'groupId' : $("#hiddengroupId").val()}, 
				success: function(result){
					result = $.trim(result);
					$(".more-details").html(result);
		    	}
			});
    	}
	});
}

function deleteGroup(){
	$("#joingroupbtnId").html("Processing. Please wait...");
	$.ajax({
		url: "addgroupajax.php",
		method: "POST",
		data: {'action': 'deleteGroup', 'groupId' : $("#hiddengroupId").val()}, 
		success: function(result){
			$("#joingroupbtnId").html("Success!");
			window.location.href = "search-group.php";
    	}
	});
}

function validateResetForm()
{
	
	if( $.trim($("#rp_password").val()) == "" )
	{
		alert("Please enter a password.");
		$("#rp_password").focus();
		return false;
	}

	if( !strongPassword($.trim($("#rp_password").val())))
	{
		alert("Passwords must contain at least one uppercase, one lowercase, one digit, one special character and can't contain spaces.");
		$("#rp_password").focus();
		return false;
	}

	if( $.trim($("#rp_cpassword").val()) == "" )
	{
		alert("Please confirm your password.");
		$("#rp_cpassword").focus();
		return false;
	}

	if( $.trim($("#rp_cpassword").val()) != $.trim($("#rp_password").val()) )
	{
		alert("Passwords aren't matching. Try re-entering your password.");
		$("#rp_cpassword").focus();
		return false;
	}



	return true;
}//validateResetForm



function validateChangePassword()
{
	
	if( $.trim($("#old_password").val()) == "" )
	{
		alert("Please enter the old password.");
		$("#old_password").focus();
		return false;
	}
	
	if( $.trim($("#new_password").val()) == "" )
	{
		alert("Please enter a new password.");
		$("#new_password").focus();
		return false;
	}

	if( !strongPassword($.trim($("#new_password").val())))
	{
		alert("Passwords must contain at least one uppercase, one lowercase, one digit, one special character and can't contain spaces..");
		$("#new_password").focus();
		return false;
	}

	if( $.trim($("#con_new_password").val()) == "" )
	{
		alert("Please enter confirm your password.");
		$("#con_new_password").focus();
		return false;
	}

	if( $.trim($("#new_password").val()) != $.trim($("#con_new_password").val()) )
	{
		alert("Passwords aren't matching. Try re-entering your password.");
		$("#new_password").focus();
		return false;
	}

	return true;
}//validateChangePassword

function validateContactForm()
{
	
	if( $.trim($("#name").val()) == "" )
	{
		alert("Please enter your name.");
		$("#name").focus();
		return false;
	}
	
	if( $.trim($("#email").val()) == "" )
	{
		alert("Please enter your email address.");
		$(email).focus();
		return false;
	}

	return true;
}//validateContactForm

function validateForgotPassword()
{
	
	if( $.trim($("#fp_email").val()) == "" )
	{
		alert("Please enter your email address.");
		$("#fp_email").focus();
		return false;
	}

	if( $.trim($("#fp_email").val()).indexOf('@dartmouth.edu') == -1 ){
		alert("Please enter a valid Dartmouth email address.");
		$("#fp_email").focus();
		return false;
	}


	return true;
}//validateForgotPassword

function validateLogin()
{
	
	if( $.trim($("#si_email").val()) == "" )
	{
		alert("Please enter email address.");
		$("#si_email").focus();
		return false;
	}

	if( $.trim($("#si_email").val()).indexOf('@dartmouth.edu') == -1 ){
		alert("Please enter a valid dartmouth email id.");
		$("#si_email").focus();
		return false;
	}

	if( $.trim($("#si_password").val()) == "" )
	{
		alert("Please enter password.");
		$("#si_password").focus();
		return false;
	}


	return true;
}//validateLogin

function valideRegistrationform()
{
	
	if( $.trim($("#fname").val()) == "" )
	{
		alert("Please enter your first name.");
		$("#fname").focus();
		return false;
	}

	if( $.trim($("#lname").val()) == "" )
	{
		alert("Please enter your last name.");
		$("#lname").focus();
		return false;
	}

	if( $.trim($("#email").val()) == "" )
	{
		alert("Please enter your email address.");
		$("#email").focus();
		return false;
	}

	if( $.trim($("#email").val()).indexOf('@dartmouth.edu') == -1 ){
		alert("Please enter a valid Dartmouth email.");
		$("#email").focus();
		return false;
	}

	if( $.trim($("#password").val()) == "" )
	{
		alert("Please enter a password.");
		$("#password").focus();
		return false;
	}

	if( !strongPassword($.trim($("#password").val())))
	{
		alert("Passwords must contain at least one letter, one digit, and must not contain spaces.");
		$("#password").focus();
		return false;
	}

	if( $.trim($("#cpassword").val()) == "" )
	{
		alert("Please enter confirm your password.");
		$("#cpassword").focus();
		return false;
	}

	if( $.trim($("#cpassword").val()) != $.trim($("#password").val()) )
	{
		alert("Passwords aren't matching. Try re-entering your password.");
		$("#cpassword").focus();
		return false;
	}

	

	var status = true;

	$(".classesrow select").each(function(index){
		if( !$(this).val() || $(this).val() == '' )
		{
			status = false;
		}
	});//each
	if($('#class_name_custom').val() != ''){
		status = true;
	}
	if( !status)
	{
		alert("Please fill all fields related to courses.");
		return false;	
	}

	return true;
}//valideRegistrationform


function valideProfileform()
{	
	if( $.trim($("#fname").val()) == "" )
	{
		alert("Please enter your first name.");
		$("#fname").focus();
		return false;
	}

	if( $.trim($("#lname").val()) == "" )
	{
		alert("Please enter your last name.");
		$("#lname").focus();
		return false;
	}

	if( $.trim($("#email").val()) == "" )
	{
		alert("Please enter your email address.");
		$("#email").focus();
		return false;
	}

	if( $.trim($("#email").val()).indexOf('@dartmouth.edu') == -1 ){
		alert("Please enter a valid Dartmouth email.");
		$("#email").focus();
		return false;
	}
}//valideProfileform



function editGroupValidation()
{
	
	if( $.trim($("#ag_topicname").val()) == "" )
	{
		alert("Please enter a topic name.");
		$("#ag_topicname").focus();
		return false;
	}

	if( $.trim($("#ag_class").val()) == "" )
	{
		alert("Please select a class.");
		$("#ag_class").focus();
		return false;
	}

	if( $.trim($("#ag_date").val()) == "" )
	{
		alert("Please enter a date.");
		$("#ag_date").focus();
		return false;
	}	

	if( $.trim($("#ag_room").val()) == "" )
	{
		alert("Please enter a room.");
		$("#ag_room").focus();
		return false;
	}	

	if( $.trim($("#ag_location").val()) == "" )
	{
		alert("Please select a location on the map.");
		$("#ag_location").focus();
		return false;
	}
	
	$("#ag_start_time").val( $(".slider-time").text() );
	$("#ag_end_time").val( $(".slider-time2").text() );

	$("#ag_submit").text("We are processing. Please wait.. ");
	//$('#ag_submit').attr('disabled','disabled');
	

	$.ajax({
		url: "addgroupajax.php",
		method: "POST",
		data: $("#addgroupform").serialize(), 
		success: function(result){
			result = $.trim(result);
			
			var obj = $.parseJSON(result);
			if(obj.status == "success"){
				$("#ag_submit").text("Success!");

				window.location.href = "editgroup.php?id=" + $("#hdngroupid").val();
			}else{
				//$('#ag_submit').removeAttr('disabled');
				alert(obj.message);
				$("#ag_submit").text("Edit Group");
			}
        	
    	}
	});
	
	return false;
}//addGroupValidation()





function adjustAddRemoveCourseButtons()
{
	var rows = $("#registerform .classesrow").length;
	$("#add-course-row, #remove-course-row").show();
	if( rows >= 4 )
	{
		$("#add-course-row").hide();
	}
	if( rows <= 1 )
	{
		$("#remove-course-row").hide();
	}
}//adjustAddRemoveCourseButtons()
function getInitials(string) {
  var parts=string.split(" ")
  var firstWord=parts[0];
var lastWord=parts[parts.length-1];
var firstInitial=firstWord.charAt(0).toUpperCase();
var lastInitial=lastWord.charAt(0).toUpperCase();
  var initials=firstInitial+lastInitial;
return initials;
}
function strongPassword(valueData){
	var password = valueData;
	
	var  LOWER = /[a-z]/;

			var UPPER = /[A-Z]/;

			var DIGIT = /[0-9]/;
			var DIGITS = /[0-9].*[0-9]/;
			var SPACE = /\s/;
			
         var containsLetter = (LOWER.test(password) || UPPER.test(password))
	 var containsDigit = DIGIT.test( password );
	 var containsSpace = SPACE.test( password );
	 
	 if( containsLetter && containsDigit && !containsSpace )
	 {
		return true;
	 }
	 else
	 {
		return false;
	 }
 }
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

    var isPrivate;
    if ($("#publicRadio").is(":checked")){
    	isPrivate=false;
    }
    else{
    	isPrivate= true;
    }

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
    newGroup.set("isPrivate", isPrivate);

    newGroup.save(null, {
        success: function(newGroup) {
            // Execute any logic that should take place after the object is saved.
            alert('New group created with objectId: ' + newGroup.id);
            var classes = Parse.Object.extend("Class");
            var classQuery = new Parse.Query(classes);
            classQuery.get($("#ag_class").val(), {
                success: function(groups) {
                    alert('Added ' + newGroup.id);
                    var relation = groups.relation("classGroups");
                    relation.add(newGroup);
                    groups.save();
location.reload();


                },
                error: function(object, error) {
                    // The object was not retrieved successfully.
                    // error is a Parse.Error with an error code and message.
                    alert("Error: Courses could not be retrieved.");
                }
            });
           // return true;
        },
        error: function(newGroup, error) {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            alert('Failed to create new group, with error code: ' + error.message);
        }
    });

   // return false;

}



	