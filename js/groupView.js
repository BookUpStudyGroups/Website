function loadGroupsPage(){
 
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

                    //append invite only if group not full
                    var groupFull = results.get("numStudents")==results.get("groupSize");

    				if(!groupFull){
    					//pretend invite button
    					$('#membersDisplay').append(
    					"<tr> <td> <div> <p class = 'membersTextHeaders'> Add Classmate </p> </div></td>  </tr> "+
    					"<tr><td><img id='submitButt' class= 'mailImg' src= 'images/add.png'>&nbsp&nbsp<input id='emailPlaceholder' type='text'placeholder=' Enter Email'></td> </tr>"
    					);
        
        //for invite button click
        $('#submitButt').bind("click", function(){

         sendInvite(groupId, memName, results);

        });
    				}

    			
    				
  				},

  				error: function(error) {
    				alert("Error: COuld not retirve group Members Data");
  					}
			});


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
                               
/*
                                var table = document.getElementById("availGroups");
                                var rowCount = table.rows.length;

                                table.deleteRow(1);
*/
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
                               
/*
                                document.getElementById("1" + groupId).addEventListener("click", function() {
                                    selectGroup(this.id)
                                });
*/

}
                            }
                        }
                    });
                    var myGroupQuery = groups.query();
                    myGroupQuery.equalTo("members", Parse.User.current());
                    myGroupQuery.find({
                        success: function(results) {
                            if (results.length > 0) {
/*
                                var table = document.getElementById("myGroups");
                                var rowCount = table.rows.length;

                                table.deleteRow(1);
*/
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

       function toggleGroupViewDetails() {
           if ($("#card .messages").is(":visible")) {
               $("#card .messages").hide();
           } else {
               $("#card .members").hide();
           }
           $("#card .details").show("slow", "swing");
           console.log("deatils show, other 2 hidden")
       }

       function toggleGroupViewMessages() {

           if ($("#card .details").is(":visible")) {
               $("#card .details").hide();
           } else {
               $("#card .members").hide();
           }
           $("#card .messages").show("slow", "swing");
           console.log("messages show, other 2 hidden")
       }

       function toggleGroupViewMembers() {
           if ($("#card .messages").is(":visible")) {
               $("#card .messages").hide();
           } else {
               $("#card .details").hide();
           }
           $("#card .members").show("slow", "swing");


       }

       function leaveGroupView(idTag, origColor) {
           var groupId = idTag;
           $('#availGroups').show("slow", "swing");
           $('#details').hide();
           $('#' + groupId).css("background-color", origColor);
           $('#1' + groupId + ' span').text('View');
           $('#1' + groupId).unbind();
           $('#1' + groupId).bind("click", function() {
               focusGroupView(this.id)
           });
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

function sendInvite(groupId, memName, group) {

    var email = $('#emailPlaceholder').val();

    //query existing invites
    var invites = Parse.Object.extend("PrivateInvite");
    var allInvites= new Parse.Query(invites);
    allInvites.equalTo("Email", email);
    allInvites.equalTo("group", group);
    console.log(group);
    allInvites.find({
        success: function(invites1) {
            if(!invites1.length==1){

                //it doesn't send invite
                inviteExists=true;
                console.log(inviteExists);

                    executeInvite(email, memName, group)
            }
            else{

                //invite has already been created, alert user
                alert("This Student has already been invited to this group");

            }

        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });
}

function executeInvite(email, memName, group){

    //check if dartmouth email
    var eSplit = email.split("@");

    //nothing in email box
    if (email == "") {
        alert("Please input classmate's email in textfield");
    }

    //not a dartmouth email
    else if (eSplit[1] != "dartmouth.edu") {

        alert("Please invite a Classmate with their valid Dartmouth Email");

    }

    //is  valid dartmouth email and text no blank
    else {

        //clear input field
        $('#emailPlaceholder').val("");

        //get current user
        var inviteSender = Parse.User.current();

        //query all users
        var users = Parse.Object.extend("User");
        var userQuery = new Parse.Query(users);

        //create parse invite object
        var userExists;
        console.log(" before private invite");
        var PrivateInvite = Parse.Object.extend("PrivateInvite");
        var invite = new PrivateInvite();

        //set data for parse object
        invite.set("Email", email);
        invite.set("User", Parse.User.current());
        invite.set("group", group);

        //find if email in input is already a user
        userQuery.equalTo("username", email);
        userQuery.find({

            success: function(user) {
                
                //if the user was found make inviteObject
                if (user.length == 1) {

                    userExists = true;
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

                    alert("Invite sent to " + email);

                }

                //the user wasn't found send email invite
                else {

                    //get varibles for email and parse object
                    var Class = $('#ag_classname').val();
                    userExists = false;
                    invite.set("userExists", userExists);


                    invite.save(null, {
                        success: function(PrivateInvite) {

                            var groupName4View = group.get("groupName");

                            //vars for email bosy+ subject      
                            var subject = "You've been Invited to Study!";
                            var body = memName + " invites you to join Study Group titled " + groupName4View + " for your class " + Class + ".%0D%0A%0D%0A Sign up with your Dartmouth Email and go to www.BookUp.org to Join!";

                            window.location.replace('mailto:' + email + '?subject=' + subject + '&body=' + body);

                        },

                        error: function(PrivateInvite, error) {
                            // Execute any logic that should take place if the save fails.
                            // error is a Parse.Error with an error code and message.
                            alert('Failed to create new object, with error code:' + error.message);
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