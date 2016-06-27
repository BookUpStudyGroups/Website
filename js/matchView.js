var scheduleTable=[];
 var lastChecked;
var currentUser;
function loadMatchPage(){
   
    var selectedGroup;
    var selectedColor;
    //document.getElementById(groupId).style.backgroundColor = "#85cf85";
    //document.getElementById(idTag).getElementsByTag("a")[0].style.backgroundColor = "#FFFFFF";
    
            //var lastChecked;
        var map;
        currentUser= Parse.User.current();;

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
$('.daybox a>div').bind("click", function() {
    var day;
    var daySelected=0;
    var timeString;
    if($(this).attr('data-sel')=='1'){
        $(this).css('border-bottom','3px solid #3E61C3');
        $(this).attr('data-sel','0');
        timeString=$(this).parent().parent().parent().siblings().first().text()+" "+$(this).text().toLowerCase();
        if($.inArray(timeString,scheduleTable) !== -1){
            scheduleTable.splice($.inArray(timeString,scheduleTable),1);
            console.log(scheduleTable);
        }
        
        $(this).parent().parent().siblings().each(function(){
        
            if($(this).children().first().children().first().attr('data-sel')=='1'){
                daySelected=1;
            }
        });
        
        if(daySelected!=1){
                    $(this).parent().parent().parent().siblings().first().css('background','#3E61C3');

        }

    }else{
    $(this).css('border-bottom','3px solid #6CC8E8');
        $(this).attr('data-sel','1')
        $(this).parent().parent().parent().siblings().first().css('background','#6CC8E8');
        timeString=$(this).parent().parent().parent().siblings().first().text()+" "+$(this).text().toLowerCase();
        scheduleTable.push(timeString);
        console.log(scheduleTable);
    }
    
});

var classes = Parse.Object.extend("Class");
var classQuery = new Parse.Query(classes);

currentUser = Parse.User.current();
classQuery.equalTo("students", Parse.User.current());
// execute the query
//classQuery.include("classGroups");
classQuery.find({
    success: function(results) {
        if (results.length > 0) {
                            /*
                                                            var table = document.getElementById("myGroups");
                                                            var rowCount = table.rows.length;

                                                            table.deleteRow(1);
                            */
                            $('#myClasses .no_record').remove();
                        }
        for (var i = 0; i < results.length; i++) {
            var getClassDetails = new RSVP.Promise(function(fulfill) {
                var classDetails = new Array();
                classDetails.push(results[i].get("prof"));
                classDetails.push(results[i].get("department"));
                classDetails.push(results[i].get("title"));
                classDetails.push(results[i].get("period"));
                classDetails.push(results[i].get("depId"));
               
                classDetails.push(results[i].relation("classGroups"));
                 classDetails.push(results[i].id);
                 classDetails.push(results[i].get("number"));
                                            $('#myGroups .no_record').remove();
var prof = classDetails[0];
                var dep = classDetails[1];
                var title = classDetails[2];
                var per = classDetails[3];
                var depId = classDetails[4];
                var groups = classDetails[5];
                var classId = classDetails[6];
                var classNum = classDetails[7];
                  $('#myClasses tbody').append("<tr id='" + classId + "'><td width='70%'><div class='col-sm-5 col-xs-5 col-md-4 col-lg-3'><a href='#'><img class='center-block' id='classimg' width=100% src='images/" + dep + ".png' alt='' ></a></div><div class='col-sm-7 col-xs-7 col-md-8 col-lg-9'>" + title + "<br><i><span id='classname'>"+dep +" "+classNum+  "</span></i><br><span id='classdetails'>" + prof + ", Period "+per + "</span><br></div></td><td width='30%'><div class='edit' data-match-status='0' id='1" + classId + "'><a href='#'><span>Find a<br>Study Buddy</span></a></div></td></tr>");
                
                
                   $("#1" + classId).click(function() {
                       var idTag=0;
                       idTag=$(this).attr('id');
                       if($(this).attr('data-match-status')=='1'){
                           alert('A match request has already been submitted.');
                       }else if($(this).attr('data-match-status')=='2'){
                           alert('You have already been matched for this course!');
                       }else{
                           if (scheduleTable.length>0){
                           //alert('Finding You a Study Partner...');
                           //alert(idTag.slice(1));
                           findMatch(Parse.User.current().id, idTag.slice(1));
                           }else{
                               alert('Please select available study times before matching!');
                           }
                       }
                     
                                    //findMatch(this.id);
                                });
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
                var classId = classDetails[6];
                currMatchState(Parse.User.current().id,classId);
//currMatchState('bynMGQkeKm',classId);
               /*
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
                           
                            if (!isPrivate) {
                                $('#myGroups tbody').append("<tr id='" + groupId + "'><td width='70%'><div class='col-sm-5 col-xs-5 col-md-4 col-lg-3'><a href='#'><img class='center-block' id='classimg' width=100% src='images/" + dep + ".png' alt='' ></a></div><div class='col-sm-7 col-xs-7 col-md-8 col-lg-9'>" + topicname + "<br><i><span id='classname'>" + title + "</span></i><br>" + slots + "</div></td><td width='30%'><div class='edit' id='1" + groupId + "'><a href='#'><span>View</span></a></div><div class='join' id='2" + groupId + "'><a href='#'>Leave</a></div></td></tr>");
                            } else {
                                $('#myGroups tbody').append("<tr id='" + groupId + "'><td width='70%'><div class='col-sm-5 col-xs-5 col-md-4 col-lg-3'><a href='#'><img class='center-block' id='classimg' width=100% src='images/" + dep + ".png' alt='' ></a></div><div class='col-sm-7 col-xs-7 col-md-8 col-lg-9'>" + topicname + " - <img src= 'images/lock.png' width='15px' alt=''> Private<br><i><span id='classname'>" + title + "</span></i><br>" + slots + "</div></td><td width='30%'><div class='edit' id='1" + groupId + "'><a href='#'><span>View</span></a></div><div class='join' id='2" + groupId + "'><a href='#'>Leave</a></div></td></tr>");
                            }


                          
                            $('#1' + groupId).bind("click", function() {
                                focusGroupView(this.id)
                            });


                        }
                    }
                });*/
                //var groups=results[i].get("classGroups");

            });
        }
        // results contains all of the User objects, and their associated Weapon objects, too
    }
});

   
}


function findMatch(userId,sbClass){
    var userQuery = new Parse.Query(Parse.User);
    
    var getUserDetails=new RSVP.Promise(function(fulfill) {
        var userDetails=[];
    userQuery.get(userId,{
        success:function(result){
            
            userDetails.push(result);
            fulfill(userDetails);
            //alert(fulfill(userDetails));
            
        },error:function(error){
                alert("Error: " + error.code + " " + error.message);

        }
    });
    });
    
    
    getUserDetails.then(function(userDetails){
        var getClassDetails=new RSVP.Promise(function(fulfill) {
            var classDetails=[];
            var classQuery = new Parse.Query(Parse.Object.extend("Class"));
            classQuery.get(sbClass,{
                success:function(result){
                    classDetails.push(userDetails[0]);
                    classDetails.push(result);
                    fulfill(classDetails);
              
                },error:function(error){
                    alert("Error: " + error.code + " " + error.message);

                }
            });
        
        });
        getClassDetails.then(function(classDetails){
            findSBs(classDetails[0],classDetails[1]);
        });
    });

}

  function findSBs(userObj,classObj){
        console.log('checking current user requests for study buddies');
        var sbRequest = Parse.Object.extend("SBRequest");
        var sbRequestQuery = new Parse.Query(sbRequest);
        //alert(userObj.get("fullName"));
        //alert(classObj.get("title"));
        sbRequestQuery.notEqualTo('user',userObj);
        sbRequestQuery.equalTo('class',classObj);
        sbRequestQuery.find({
            success:function(results){
                if(results.length==0){
                submitSbRequest(userObj,classObj);
                }else{
                    alert('Finding matches...');
                    var maxTimeMatch=[];
                    var maxTimeSb={};
                    var maxTimeSbRequest;
                    for(i=0; i<results.length; i++){
                        var sharedTimes=[];
                        var currArray=[];
                        var currSb={};
                        currSb=results[i].get('user')
                        currArray=results[i].get('timeArray');
                        for(j=0; j< currArray.length; j++){
                            if(scheduleTable.indexOf(currArray[j])!=-1){
                                sharedTimes.push(currArray[j]);
                            }
                        }
                        
                        if(sharedTimes.length>maxTimeMatch.length){
                            maxTimeMatch=sharedTimes;
                            maxTimeSb=currSb;
                            maxTimeSbRequest=i;
                        }
                        //$('#sb-table tbody').append("<tr id='"+"'></tr>");
                    }
                    if (maxTimeMatch.length!=0){
                    //alert(maxTimeMatch);
                    //alert(maxTimeSb.id);
                        
                        createMatchedSbRelation(userObj,  maxTimeSb, maxTimeMatch, classObj);
                        results[maxTimeSbRequest].destroy({success: function(myObject) {
    // The object was deleted from the Parse Cloud.
  },
  error: function(myObject, error) {
      alert("Error: " + error.code + " " + error.message);
    // The delete failed.
    // error is a Parse.Error with an error code and message.
  }
});
                    }else{
                        submitSbRequest(userObj,classObj);
                    }
                    
                    /*
                $("#1"+classObj.id+" a span").html('Searching for a Match...');
                    $("#1"+classObj.id+" a").css('background-color','#6CC8E8');
                    $("#1"+classObj.id).attr('data-match-status','1');
                    
                    */
                //alert(userObj.get("fullName")+" "+classObj.get("title")+", request present");
                }
                
            //return true;
            },error:function(error){
                alert("Error: " + error.code + " " + error.message);


            //return false;

            }
    
        });
        
    }

function submitSbRequest(userObj,classObj){
var SBRequest = Parse.Object.extend("SBRequest");
    var sbRequest = new SBRequest();
    
   // alert(scheduleTable);
sbRequest.set('timeArray',scheduleTable);
sbRequest.set('user',userObj);
sbRequest.set('class',classObj);
    sbRequest.save(null, {
                                success: function(newSbRequest) {
                                    
                                    
                                    var classQuery = new Parse.Query(Parse.Object.extend("Class"));
                                    classQuery.get(classObj.id,{
                                        success:function(newSbClass){
                                            var relation = newSbClass.relation("StudyBuddies");
                                    relation.add(newSbRequest);
                                    newSbClass.save();
                                            alert('Your study buddy request has been successfully submitted! Check in soon to see your matches!');
                                    window.location.reload();
              
                                        },error:function(error){
                                            alert("Error: " + error.code + " " + error.message);

                                        }
                                    });
                                    
                                    
                                    
                                    
                                    
                                    

                                    //updateMessages($('#wrapper').prop('title'));
                                    //location.reload();
                                },
                                error: function(mess, error) {
                                    alert("Error: " + error.code + " " + error.message + ".");
                                    // The save failed.
                                    // error is a Parse.Error with an error code and description.
                                }
                            });
}

function createMatchedSbRelation(user1Obj, user2Obj, maxTimeMatch, classObj){
var MatchedSbs= Parse.Object.extend("MatchedSBs");
    var matchedSb = new MatchedSbs();
    
   // alert(scheduleTable);
matchedSb.set('timeArray',maxTimeMatch);
matchedSb.set('user1',user1Obj);
    matchedSb.set('user2',user2Obj);
   matchedSb.set('matchingPrefArr',maxTimeMatch);
matchedSb.set('Class',classObj);
    matchedSb.save(null, {
                                success: function(newMatchedSb) {
                                    
                                    
                                    var classQuery = new Parse.Query(Parse.Object.extend("Class"));
                                    classQuery.get(classObj.id,{
                                        success:function(newMatchedSbClass){
                                            var relation = newMatchedSbClass.relation("MatchedStudyBuddies");
                                    relation.add(newMatchedSb);
                                   newMatchedSbClass.save();
                                            alert('You have been matched! Check the right pane see your matches!');
                                    window.location.reload();
              
                                        },error:function(error){
                                            alert("Error: " + error.code + " " + error.message);

                                        }
                                    });
                                    
                                    
                                    
                                    
                                    
                                    

                                    //updateMessages($('#wrapper').prop('title'));
                                    //location.reload();
                                },
                                error: function(mess, error) {
                                    alert("Error: " + error.code + " " + error.message + ".");
                                    // The save failed.
                                    // error is a Parse.Error with an error code and description.
                                }
                            });
}





function currMatchState(userId,sbClass){
    var userQuery = new Parse.Query(Parse.User);
    
    var getUserDetails=new RSVP.Promise(function(fulfill) {
        var userDetails=[];
    userQuery.get(userId,{
        success:function(result){
            
            userDetails.push(result);
            fulfill(userDetails);
            //alert(fulfill(userDetails));
            
        },error:function(error){
                alert("Error: " + error.code + " " + error.message);

        }
    });
    });
    
    
    getUserDetails.then(function(userDetails){
        var getClassDetails=new RSVP.Promise(function(fulfill) {
            var classDetails=[];
            var classQuery = new Parse.Query(Parse.Object.extend("Class"));
            classQuery.get(sbClass,{
                success:function(result){
                    classDetails.push(userDetails[0]);
                    classDetails.push(result);
                    fulfill(classDetails);
              
                },error:function(error){
                    alert("Error: " + error.code + " " + error.message);

                }
            });
        
        });
        getClassDetails.then(function(classDetails){
            sentRequest(classDetails[0],classDetails[1]);
            receivedMatch(classDetails[0],classDetails[1]);
        });
    });

}
    function sentRequest(userObj,classObj){
        console.log('checking current user requests for study buddies');
        var sbRequest = Parse.Object.extend("SBRequest");
        var sbRequestQuery = new Parse.Query(sbRequest);
        //alert(userObj.get("fullName"));
        //alert(classObj.get("title"));
        sbRequestQuery.equalTo('user',userObj);
        sbRequestQuery.equalTo('class',classObj);
        sbRequestQuery.find({
            success:function(results){
                if(results.length==0){
                //alert(userObj.get("fullName")+" "+classObj.get("title")+", no request");
                }else{
                $("#1"+classObj.id+" a span").html('Searching for a Match...');
                    $("#1"+classObj.id+" a").css('background-color','#6CC8E8');
                    $("#1"+classObj.id).attr('data-match-status','1');
                //alert(userObj.get("fullName")+" "+classObj.get("title")+", request present");
                }
                
            //return true;
            },error:function(error){
                alert("Error: " + error.code + " " + error.message);


            //return false;

            }
    
        });
        
    }

function receivedMatch(userObj,classObj){
    console.log
        var matchedSB = Parse.Object.extend("MatchedSBs");
        var matchedSBQuery1 = new Parse.Query(matchedSB);
        matchedSBQuery1.equalTo('user1',userObj);
        matchedSBQuery1.equalTo('Class',classObj);
    
    var matchedSBQuery2 = new Parse.Query(matchedSB);
        matchedSBQuery2.equalTo('user2',userObj);
        matchedSBQuery2.equalTo('Class',classObj);
    
        var matchedSBQuery = Parse.Query.or(matchedSBQuery1, matchedSBQuery2);
        //matchedSBquery.include("user1");
        //matchedSBquery.include("user2");
        matchedSBQuery.find({
            success:function(results){
                if(results.length==0){
                    //alert(userObj.get("fullName")+" "+classObj.get("title")+", not yet matched");

                }else{
                    var otherUserId;
                    $('#myMatches .no_record').hide();
                    $("#1"+classObj.id+" a span").html('Match<br>Found!');
                    $("#1"+classObj.id+" a").css('background-color','#6CC8E8');
                    $("#1"+classObj.id).attr('data-match-status','2');
                    
                    if(results[0].get('user1').id==Parse.User.current().id){
                        otherUserId=results[0].get('user2').id;
                    }else{
                         otherUserId=results[0].get('user1').id;
                    }
                    user2=results[0].get('user2');
                    
                    var userQuery = new Parse.Query(Parse.User);
                    userQuery.get(otherUserId,{
                    success:function(result){
                        
                         $('#myMatches tbody').append("<tr data-class-name='"+classObj.get('title')+"' data-class-period='"+classObj.get('period')+"' data-class-prof='"+classObj.get('prof')+"' data-sb-avail='"+results[0].get('matchingPrefArr')+"'id='" + results[0].id+ "'><td width='70%'><div class='col-sm-5 col-xs-5 col-md-4 col-lg-3'><a href='#'><img class='center-block' id='classimg' width=100% src='images/" + classObj.get('department') + ".png' alt='' ></a></div><div class='col-sm-7 col-xs-7 col-md-8 col-lg-9'>" + result.get('fullName') + "<br><i>" + classObj.get('title') + "</i><br>"+classObj.get('prof')+", Period "+classObj.get('period')+"</div></td><td width='30%'><div class='edit' id='1" + results[0].id + "'><a href='#'>View</a></div><div class='join' id='2" + results[0].id + "'><a href='#'>Unmatch</a></div></td></tr>");
                         $("#1" + results[0].id).click(function() {
                             focusMatchView($(this).attr('id'));
                         });
                        $("#2" + results[0].id).click(function() {
                             leaveSbMatch($(this).attr('id'));
                         });
                        
                        
                    },error:function(error){
                                        alert("Error: " + error.code + " " + error.message);

                    }
                    });
                    
                   
                    //alert(userObj.get("fullName")+" "+classObj.get("title")+", already matched");

                }
                
            //return true;
            },error:function(error){
                alert("Error: " + error.code + " " + error.message);


            //return false;

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
function leaveSbMatch(idTag) {
    $('#details').hide();
    var groupId = idTag.slice(1);
    var group = Parse.Object.extend("MatchedSBs");
    var groupQuery = new Parse.Query(group);
    groupQuery.get(groupId, {
        success: function(result) {
            result.destroy({
  success: function(myObject) {
      alert("Study Buddy Match Deleted Successfully");
                                          window.location.reload();

    // The object was deleted from the Parse Cloud.
  },
  error: function(myObject, error) {
      alert("Error: Study Buddy Deletion Failed");

    // The delete failed.
    // error is a Parse.Error with an error code and message.
  }
});

        },
        error: function(object, error) {
            alert("Error: Group exit failed.");
        }
    });
}
function leaveMatchView(idTag, origColor) {
    var groupId = idTag;
    $('#myClasses').show("slow", "swing");
    $('#details').hide();
    $('#' + groupId).css("background-color", origColor);
    $('#1' + groupId + ' span').text('View');
    $('#1' + groupId).unbind();
    $('#1' + groupId).bind("click", function() {
        focusMatchView(this.id)
    });
}


        function focusMatchView(idTag) {
            if (typeof selectedGroup != undefined) {
                leaveMatchView(selectedGroup, selectedColor);
            }
            selectedGroup = idTag.slice(1);
            selectedColor = $('#' + idTag.slice(1)).css("background-color");

            $('#myClasses').hide("slow", "swing");
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
            //google.maps.event.trigger(document.getElementById('map2'), "resize");
            var groupId = idTag.slice(1);
            $('#details').prop('title', groupId);
            var origColor = $('#' + groupId).css("background-color");
            $('#' + groupId).css("background-color", "#e5f8ff");
            $('#1' + groupId + ' a span').text('Hide');
            $('#1' + groupId).unbind();
            $('#1' + groupId).bind("click", function() {
                leaveMatchView(groupId, origColor);
            });

            //init groupnames and object id
            var studyGroup = Parse.Object.extend("MatchedSBs");
            var groupQuery1 = new Parse.Query(studyGroup);

            var groupQuery = new Parse.Query(studyGroup);
            groupQuery.get(groupId, {
                success: function(results) {

                    //var groupName4View = results.get("groupName");
                    //var isPrivate = results.get("isPrivate");
                    //var membersRelation = results.get("members");

                    //query all memebers in this group
                    /*
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

                                //append member to member card 
                                $('#membersDisplay').append(
                                    "<tr class= 'memberBox'> <td><p class= 'memberNameText'><a href= '" + emailLink + "'> <img class= 'mailImg' src= 'images/email.png'></a>&nbsp&nbsp" + memName + "</p>  </td> </tr>"
                                );

                                console.log("appened html");

                            }

                            //append invite only if group not full
                            
                            



                        },

                        error: function(error) {
                            alert("Error: COuld not retirve group Members Data");
                        }
                    });

*/
                    
                    $('#ag_classname').val($("#"+groupId).attr('data-class-name'));
                    $('#ag_topicname').val("Section "+$("#"+groupId).attr('data-class-period')+" with Professor "+$("#"+groupId).attr('data-class-prof'));
                    $('#ag_time').val($("#"+groupId).attr('data-sb-avail'));
                    //$('#ag_topicname').val(groupName4View);
                    //$('#topic-title').empty();
                    //$('#topic-title').append(groupName4View);
                    //$('#ag_room').val(results.get("location"));
                    //$('#ag_location_latlng').val(results.get("location_latlng"));

                    //update group type data
                    //if (!isPrivate) {
                        //$('#ag_public').val("Public");
                    //} else {
                    //    $('#ag_public').val("Private");
                    //}
/*
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


*/
                },
                error: function(results, error) {
                    alert("Error: Could not retrieve group data.");
                }
            });
            joinChatroom(idTag);
        }

function joinChatroom(idTag) {
            var groupId = idTag.slice(1);
            $('#wrapper').prop('title', groupId);
            $('#chatbox').empty();
            var studyGroup = Parse.Object.extend("MatchedSBs");
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
                                var groupTo = Parse.Object.extend("MatchedSBs");
                                var groupToQuery = new Parse.Query(groupTo);
                                groupToQuery.get($('#wrapper').prop('title'), {
                                    success: function(sendGroup) {
                                        //alert(groupToQuery.id);
                                        var newMessage = userMsg.value;
                                        document.getElementById("usermsg").value = "";
                                        var Message = Parse.Object.extend("Message");
                                        var mess = new Message();
                                        mess.set("from", Parse.User.current());
                                        mess.set("message", newMessage);
                                        mess.set("studyBuddy", sendGroup);
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
                                    },
                                    error: function(sendGroup, error) {
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
                                var groupTo = Parse.Object.extend("MatchedSBs");
                                var groupToQuery = new Parse.Query(groupTo);
                                groupToQuery.get($('#wrapper').prop('title'), {
                                    success: function(sendGroup) {
                                        //alert(groupToQuery.id);

                                        var Message = Parse.Object.extend("Message");
                                        var mess = new Message();
                                        mess.set("from", Parse.User.current());
                                        mess.set("message", newMessage);
                                        mess.set("studyBuddy", sendGroup);
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
                                    },
                                    error: function(sendGroup, error) {
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
            var studyGroup = Parse.Object.extend("MatchedSBs");
            var groupQuery = new Parse.Query(studyGroup);
            groupQuery.get(groupId, {
                success: function(result) {
                    console.log('successful matchsb query');
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
                                console.log('successful message query');
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
                                console.log('unsuccessful message query');
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