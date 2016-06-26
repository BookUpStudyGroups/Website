function loadMatchPage(){
   
    var selectedGroup;
    var selectedColor;
    //document.getElementById(groupId).style.backgroundColor = "#85cf85";
    //document.getElementById(idTag).getElementsByTag("a")[0].style.backgroundColor = "#FFFFFF";
    var scheduleTable=[];
        
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
                  $('#myClasses tbody').append("<tr id='" + classId + "'><td width='70%'><div class='col-sm-5 col-xs-5 col-md-4 col-lg-3'><a href='#'><img class='center-block' id='classimg' width=100% src='images/" + dep + ".png' alt='' ></a></div><div class='col-sm-7 col-xs-7 col-md-8 col-lg-9'>" + title + "<br><i><span id='classname'>"+dep +" "+classNum+  "</span></i><br><span id='classdetails'>" + prof + ", Period "+per + "</span><br></div></td><td width='30%'><div class='edit' id='1" + classId + "'><a href='#'><span>Find a<br>Study Buddy</span></a></div></td></tr>");
                   document.getElementById("1" + classId).addEventListener("click", function() {
                    
                                    findMatch(this.id);
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
function findMatch(idTag){
    var classId = idTag.slice(1);
    var classes = Parse.Object.extend("Class");
var classQuery = new Parse.Query(classes);

currentUser = Parse.User.current();
    var getClassDetails = new RSVP.Promise(function(fulfill) {
        var classDetails=[];
// execute the query
//classQuery.include("classGroups");
classQuery.get(classId,{
    success: function(result) {
        var classSbRequests=[];
        console.log('finding match for class:');
    console.log(result.get("title"));
        classSbRequests=result.relation("StudyBuddies");
        var sbRequestQuery=classSbRequests.query()
        sbRequestQuery.find({
        success:function(results){
              console.log(results.length);
},error:function(error){
    alert("Error: " + error.code + " " + error.message);
}
}
        });
        /*
        
        console.log(classSbRequests);
        //for(i=0;i<classSbRequests.length;i++){
        classDetails.push(classSbRequests[0]);
            fulfill(classDetails);
            */
    //    }
        //alreadyRequested();
},error: function(error) {
    						alert("Error: " + error.code + " " + error.message);
  						}
});
    });
    
    getClassDetails.then(function(classDetails){
       var sbId=classDetails[0];
            var sbId = Parse.Object.extend("Class");

    var userQuery = new Parse.Query(Parse.User);
     console.log('In promise, generating user query');
console.log(String(userId));
userQuery.get(String(userId),{
    sucess:function(result){
            console.log('User query successful');

    //    matchDetails.push(result);
        //console.log(result.get('fullName'));
       // return 5;
//fulfill(matchDetails);
        
    },error: function(error) {
                    console.log('User query unsuccessful');

    						alert("Error: " + error.code + " " + error.message);
  						}
});
    });
}

function getMatchAvailability(userId){
    //var sbRequestUser=new Parse.User();
    
       // console.log(userId);
    
//var getMatchDetails = new RSVP.Promise(function(fulfill) {

    var matchDetails=[];
    var userQuery = new Parse.Query(Parse.User);
     console.log('In promise, generating user query');
console.log(userId);
userQuery.get(String(userId),{
    sucess:function(result){
            console.log('User query successful');

        matchDetails.push(result);
        console.log(result.get('fullName'));
        return 5;
//fulfill(matchDetails);
        
    },error: function(error) {
                    console.log('User query unsuccessful');

    						alert("Error: " + error.code + " " + error.message);
  						}
});
//});
    /*
    getMatchDetails.then(function(matchDetails){
                console.log('In promise.then');

    var matchUser=matchDetails[0];
             var buddies = Parse.Object.extend("StudyBuddy");
var buddyQuery = new Parse.Query(buddies);
      buddyQuery.equalTo("userObject",matchUser);
    // execute the query
    //classQuery.include("classGroups");
    buddyQuery.find({
                         success:function(results){
                             console.log('buddyrequest available time:');
                             //console.log(results[0].get('timeArr'));
                             console.log(results.length);
      },error: function(error) {
    						alert("Error: " + error.code + " " + error.message);
  						}
});
});*/
    
    
}

function alreadyRequested(){
    
        var buddies = Parse.Object.extend("StudyBuddy");
var buddyQuery = new Parse.Query(buddies);
      buddyQuery.equalTo("userObject", Parse.User.current());
    // execute the query
    //classQuery.include("classGroups");
    buddyQuery.find({
        success: function(results) {
            console.log('finding buddy request length:');
            console.log(results.length);
        },error: function(error) {
    						alert("Error: " + error.code + " " + error.message);
  						}
});
    
   
}
//check to see if user is currently already a study buddy obj added to class
/*
function isSearchingMatch(classObj){
    var sbRequests=[];
    sbRequests=classObj.get('allSbRequests');
    if (sbRequests.indexOf(Parse.User.current());
    
}

function addToList(){
}

//check to see if current user is already matched in this class
function isMatched(classObj){
classObj.get("");
}
*/