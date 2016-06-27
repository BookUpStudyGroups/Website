//mike.js
var selectedGroup;
    var selectedColor;
var currentUser;
var lastChecked;
var curr_sel_marker;
//Redirect user to profile page if logged in
function redirectAuthUser(){
    if (Parse.User.current()) {
        window.location = "profile.php";
    }
}

//Redirect user to login page if not logged in
function redirectUnAuthUser(){
    if (!Parse.User.current()) {
        window.location = "login.php";
    }
}

//Load in propper navbar elements based on authorization
function loadNavbar(){


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
}

//load in proper navbar element
function loadNavbarBtn(index){
    $('#navigation ul li a').each(function(i, obj){
        if (i==index){

            $(this).css("background-color","#FFFFFF");
            $(this).css("color","#6CC8E8");
        $(this).css("border-bottom","3px solid #6CC8E8");
        }
    });
}

$(document).ready(function(){

Parse.initialize("rLEJCpuVNM98AqXD2s49TvVJAO1eCYULyhpE824l",
    "Lxb9dOrCNS9h7E9246FlgrJDk0A1FcTaV7o83F9x",
    "SaelZZHqIg1ra22K978NdaQ32nTiNihb4DNd6CML");

loadNavbar();

    
    //Code for not logged in users
 if($('#termsandcondition').length>0){
 loadNavbarBtn(5);
}
if($("#homebody").length>0){
    redirectAuthUser();
    loadNavbarBtn(0);
}
if($("#loginbody").length>0){
    redirectAuthUser();
    loadNavbarBtn(6);
} 
if($("#forgotbody").length>0){
    redirectAuthUser();
    loadNavbarBtn(6);
}
if($("#registerbody").length>0){
    redirectAuthUser();
    loadNavbarBtn(5);
    loadRegForm();
} 
if($("#contactbody").length>0){
    loadNavbarBtn(7);
} 
    
    
    //Code for logged in users
if($("#profilebody").length>0){
    redirectUnAuthUser();
    loadNavbarBtn(0);
    loadProfile();
}
if($("#editprofilebody").length>0){
    redirectUnAuthUser();
    loadNavbarBtn(0);
    loadEditProfile();
}  
    
   if($("#search_group_body").length > 0){
redirectUnAuthUser();
    loadNavbarBtn(1);
       loadMap();
	} 
    
    
    
    
if($("#groupbody").length>0){
redirectUnAuthUser();
    loadNavbarBtn(2);
    loadGroupsPage();
}

    if($("#matchbody").length>0){
redirectUnAuthUser();
    loadNavbarBtn(3);
    loadMatchPage();
}


    
    if($("#search_group_body").length==0){
if($(".datepicker").val() == ""){
			$(".datepicker").datepicker({minDate: 0}).datepicker('setDate', new Date());	
		}else{
			$(".datepicker").datepicker({minDate: 0});	
		}
		
	}
	

    


    


	
		

	
	//MAP SCRIPT START HERE	
//FIND THIS, edited so gray window appears #search-grou-bo
	if($("#map2").length){
if($("#groupbody").length){
    var selectedGroup;
    var selectedColor;


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
        
        var groupsWhoInvited = new Array();

        //create rsvp promise to get all grops the user was invited too
        var getInvites = new RSVP.Promise(function(fulfill) {
            
            //add each invite to array
            for(i=0; i<invites.length; i++){
                var invite= invites[i].get("group").id;
                groupsWhoInvited.push(invite);
            }
            fulfill(groupsWhoInvited);
        });

        //return all groups in user's classes
        getInvites.then(function(groupsWhoInvited){

            //boolean for diabling non invites dialogoue
            var areInvites= false;

            classesQuery = new Parse.Query(classes);
            classesQuery.equalTo("students", user);
            classesQuery.find({
                success: function(results) {

                    for (var i = 0; i < results.length; i++) {

                        var getClassDetails = new RSVP.Promise(function(fulfill) {

                            var validGroups= new Array();
                            var classDetails = new Array();
                            classDetails.push(results[i].get("prof"));
                            classDetails.push(results[i].get("department"));
                            classDetails.push(results[i].get("title"));
                            classDetails.push(results[i].get("period"));
                            classDetails.push(results[i].get("depId"));
                            var gQuery= results[i].relation("classGroups");

                            //query the groups for a class
                            var classGroupsQuery= gQuery.query()
                            classGroupsQuery.find({
                                success: function(classGroupss) {
                                    
                                    for(v=0; v<classGroupss.length; v++){

                                        //if the group was one that wasn't invited remove from array
                                        if(groupsWhoInvited.indexOf(classGroupss[v].id)!=-1){
                                            
                                            //push classes that were invite only
                                            validGroups.push(classGroupss[v]);
                                            areInvites= true;
                                            
                                          }
                                    }

                                    classDetails.push(validGroups);
                                    
                                    fulfill(classDetails);
                                },
                                error: function(error) {
                                    alert("Error: " + error.code + " " + error.message);

                                }
                            });
                        });

                        getClassDetails.then(function(classDetails) {

                            console.log(classDetails[5].length);
                            var prof = classDetails[0];
                            var dep = classDetails[1];
                            var title = classDetails[2];
                            var per = classDetails[3];
                            var depId = classDetails[4];

                            for (j = 0; j < classDetails[5].length; j++) {
                                var groupId = classDetails[5][j].id;
                                var topicname = classDetails[5][j].get("groupName");
                                var members = classDetails[5][j].get("numStudents");
                                var maxSize = classDetails[5][j].get("groupSize");
                                var isPrivate = classDetails[5][j].get("isPrivate");
                                var openSlots = maxSize - members;
                                console.log("wanted data______");
                                console.log(maxSize);
                                console.log(classDetails[5][j].get("numStudents"));
                                console.log("wanted data______");
                                

                                if(openSlots>0){

                                    var slots = "";
                                    for (var k = 0; k < members; k++) {
                                        slots = slots.concat("<div class='member-slot-full'></div>");
                                    }
                                    for (var k = 0; k < openSlots; k++) {
                                        slots = slots.concat("<div class='member-slot-empty'></div>");
                                    }

                                    if(isPrivate){
                                        $('#inviteGroups tbody').append("<tr id='" + groupId + "'><td width='70%'><div class='col-sm-5 col-xs-5 col-md-4 col-lg-3'><a href='#'><img class='center-block' id='classimg' width=100% src='images/" + dep + ".png' alt='' ></a></div><div class='col-sm-7 col-xs-7 col-md-8 col-lg-9'>" + topicname + "- <img src= 'images/lock.png' width='15px' alt=''> Private<br><i>" + title + "</i><br>" + slots + "</div></td><td width='30%'><div class='edit' id='1" + groupId + "'><a href='#'>Accept</a></div><div class='join' id='2" + groupId + "'><a href='#'>Decline</a></div></td></tr>");

                                    }
                                    else{
                                        $('#inviteGroups tbody').append("<tr id='" + groupId + "'><td width='70%'><div class='col-sm-5 col-xs-5 col-md-4 col-lg-3'><a href='#'><img class='center-block' id='classimg' width=100% src='images/" + dep + ".png' alt='' ></a></div><div class='col-sm-7 col-xs-7 col-md-8 col-lg-9'>" + topicname + "<br><i>" + title + "</i><br>" + slots + "</div></td><td width='30%'><div class='edit' id='1" + groupId + "'><a href='#'>Accept</a></div><div class='join' id='2" + groupId + "'><a href='#'>Decline</a></div></td></tr>");
                                    }

                                    //loop through all invites
                                    for(n=0; n<invites.length; n++){
                                        console.log(invite[n]);
                                        //if the correct invite for the group was found
                                        if(groupId==invites[n].get("group").id){

                                            console.log("about to add click listenr");
                                            /*add event listener FOR INVITE BUTTON*/
                                            document.getElementById("1" + groupId).addEventListener("click", function() {

                                                //destroy invite and join group
                                                console.log(invites[n]);
                                                invites[n].destroy({
                                                    success: function(myObject) {
                                                        console.log("group joining");

                                                        joinGroup(this.id)
            
                                                    },

                                                    error: function(myObject, error) {
                                                    }
                                                });

                                            })

                                            /*add event listener*/
                                            document.getElementById("2" + groupId).addEventListener("click", function() {

                                                //destroy invite
                                                console.log(invites[n]);
                                                invites[n].destroy({
                                                    success: function(myObject) {
                                                        console.log("droup declining");
                                                        location.reload();
                                                    },
                                                    
                                                     error: function(myObject, error) {
                                                    }
                                                });
                                            });

                                        }
                                    }
                                    console.log("listners added")               
                                }
                            }
                        }).then(function(){
                            //remove the no invite thing if there are invites
                            console.log(areInvites);
                            if (areInvites) {
                                $('#inviteGroups .no_record').remove();
                            }
                        });
                    }
                },

                error: function(error) {
                    alert("Error: " + error.code + " " + error.message);

                }
                    
            });
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

                             

                                // document.getElementById("2" + groupId).addEventListener("click", function() {
                                //     leaveGroup(this.id)
                                // });
                                // $('#1'+groupId).bind("click", function() {
                                //     focusGroupView(this.id)
                                // });


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
        
        
        
        
        
        
        
		}//add_group_body_check	
	
	
	
		
});//document ready



//addGroupValidation()
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



 function getCurrentWeekTerm(){
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




//GROUPS PAGE FUNCTIONS



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

 function focusGroupView(idTag) {
    if (typeof selectedGroup != undefined) {
        leaveGroupView(selectedGroup, selectedColor);
    }
    selectedGroup = idTag.slice(1);
    selectedColor = $('#' + idTag.slice(1)).css("background-color");

    $('#availGroups').hide("slow", "swing");
    $('#myGroups tr').each(function(index) {
        if (index > 1) {
            //leaveGroupView(.css( "background-color" )
        }
    });
    //$("#card").flip({trigger: 'manual',autoSize: 'true'});
    $("#card .messages").hide();
    $("#card .members").hide();
    $("#card .details").show("slow", "swing");
    console.log("deatils show, other 2 hidden")


    $('#details').fadeIn('fast', 'linear');
    google.maps.event.trigger(document.getElementById('map2'), "resize");
    var groupId = idTag.slice(1);
    $('#details').prop('title', groupId);
    var origColor = $('#' + groupId).css("background-color");
    $('#' + groupId).css("background-color", "#e5f8ff");
    $('#1' + groupId + ' span').text('Hide');
    $('#1' + groupId).unbind();
    $('#1' + groupId).bind("click", function() {
        leaveGroupView(groupId, origColor);
    });

    //init groupnames and object id
    var studyGroup = Parse.Object.extend("studyGroup");
    var groupQuery1 = new Parse.Query(studyGroup);

    var groupQuery = new Parse.Query(studyGroup);
    groupQuery.get(groupId, {
        success: function(results) {

            var groupName4View = results.get("groupName");
            var isPrivate = results.get("isPrivate");
            var membersRelation = results.get("members");

            //query all memebers in this group
            var membersQuery = membersRelation.query();
            membersQuery.find({
                success: function(members) {
                    $('#membersDisplay tr').remove();
                    //get member's full name and email
                    for (i = 0; i < members.length; i++) {

                        var memName = members[i].get("fullName");
                        var memEmail = members[i].get("username");

                        console.log(memEmail);

                        //Find person's class year
                        var memClassYear = memEmail.split(".");
                        var arrayIndex = memClassYear.length - 2;
                        memClassYear = memClassYear[arrayIndex].split("@");
                        memClassYear = " '" + memClassYear[0];

                        memName = memName + memClassYear;

                        //get mailto email link
                        var emailLink = "mailto:" + memEmail;
                        var groupFull = results.get("numStudents")==results.get("groupSize");

                        if(groupFull){

                             $('#membersDisplay').append(
                            "<tr class= 'memberBox'> <td><p class= 'membersTextHeaders'> Full Group </p>  </td> </tr>"
                        );

                        }
                        else{

                        }

                        //append member to member card 
                        $('#membersDisplay').append(
                            "<tr class= 'memberBox'> <td><p class= 'memberNameText'><a href= '" + emailLink + "'> <img class= 'mailImg' src= 'images/email.png'></a>&nbsp&nbsp" + memName + "</p>  </td> </tr>"
                        );

                        console.log("appened html");

                    }


                    if (groupFull) {
                    

                    } else {
                        //pretend invite button
                        $('#membersDisplay').append(
                            "<tr> <td> <div> <p class = 'membersTextHeaders'> Add Classmate </p> </div></td>  </tr> " +
                            "<tr><td><img id='submitButt' class= 'mailImg' src= 'images/add.png'>&nbsp&nbsp<input id='emailPlaceholder' type='text'placeholder=' Enter Email'></td> </tr>"
                        );

                        //for invite button click
                        $('#submitButt').click(function() {
                            sendInvite(memName)
                        });

                        document.getElementById('#emailPlaceholder').onkeydown = function(event) {
                            var e = event || window.event;
                            if (e.keyCode == 13) {
                                sendInvite(memName);
                            } else {
                                console.log("not 13");
                            }
                        }
                    }
                },

                error: function(error) {
                    alert("Error: COuld not retirve group Members Data");
                }
            });

            $('#ag_classname').val($('#' + groupId + ' #classname').text());
            $('#ag_topicname').val(groupName4View);
            $('#topic-title').empty();
            $('#topic-title').append(groupName4View);
            $('#ag_room').val(results.get("location"));
            $('#ag_location_latlng').val(results.get("location_latlng"));

            //update group type data
            if (!isPrivate) {
                $('#ag_public').val("Public");
            } else {
                $('#ag_public').val("Private");
            }

            if ($("#ag_location_latlng").length > 0 && $("#ag_location_latlng").val() != "") {
                var latlangdata = $("#ag_location_latlng").val();

                var dataArray = latlangdata.split(",");
                latLngmarker = {
                    lat: parseFloat(dataArray[0]),
                    lng: parseFloat(dataArray[1])
                };
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

            var month = time.getMonth();
            var day = time.getDate();
            var year = time.getFullYear();
            var regDate = month + "/" + day + "/" + year;
            $('#ag_date').val(regDate);
            $('#ag_time').val(regTime);



        },
        error: function(results, error) {
            alert("Error: Could not retrieve group data.");
        }
    });
    joinChatroom(idTag);
}
    
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
var markersArray = [];
function deleteOverlays() {
    if (markersArray) {
        for (i in markersArray) {
            markersArray[i].setMap(null);
        }
    	markersArray.length = 0;
    }
}