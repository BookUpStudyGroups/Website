function loadEditProfile(){
    var getMyClasses = new RSVP.Promise(function(fulfill) {
        var classIds = new Array();
        //load in my classes
        var classes = Parse.Object.extend("Class");
        var classQuery = new Parse.Query(classes);


        classQuery.equalTo("students", Parse.User.current());
        // execute the query
        classQuery.find({
            success: function(results) {
                for (var i = 0; i < results.length; i++) {
                    classIds.push(results[i].id);
                    $('#userClasses').append('<li class="userClass" id="' + results[i].id + '"></li>');
                }
                fulfill(classIds);
                // results contains all of the User objects, and their associated Weapon objects, too
            }
        });

    });
    getMyClasses.then(function(classIds) {
        if (classIds.length > 1) {
            var classRowNum = 3;
            var classesRow = $(".classesrow").html();
if(classIds.length<4){
var totRows=classIds.length;
}else{
var totRows=classIds.length-1;
}
            for (var j = 1; j < totRows; j++) {
                $("#classesrow" + (classRowNum - 1)).after('<div class="classesrow" id="classesrow' + classRowNum + '">' + classesRow + '</div>');
                $("#classesrow" + classRowNum + " select").val('');
                classRowNum++;
            }
adjustAddRemoveCourseButtons()
        }
        //Load in available classes to dropdown menus
        var classes = Parse.Object.extend("Class");
        var classQuery = new Parse.Query(classes);
        classQuery.ascending("department", "number");
        classQuery.find({
            success: function(groups) {
                var selectMyClass = new RSVP.Promise(function(fulfill) {
                    for (var i = 0; i < groups.length; i++) {
                        var prof = groups[i].get("prof");
                        var dep = groups[i].get("department");
                        var title = groups[i].get("title");
                        var id = groups[i].id;
                        var num = groups[i].get("number");
                        var per = groups[i].get("period");
                        $(".form-control").append("<option value=" + id + ">" + "[" + dep + num + "] " + title + " with Professor " + prof + "</option>");

                    }
                    fulfill(classIds);
                });
                selectMyClass.then(function(classIds) {
                    for (var j = 0; j < classIds.length; j++) {
                        $("#classesrow" + (j + 1) + " select").val(classIds[j]);
                    }


                });
            },
            error: function(object, error) {
                // The object was not retrieved successfully.
                // error is a Parse.Error with an error code and message.
                alert("Error: Courses could not be retrieved.");
            }
        });


    });
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
}
//update profile settings
function updateProfile() {
    var updatedCourses = new Array();
    var updateCurrClasses = new RSVP.Promise(function(fulfill) {
        $(".classesrow select").each(function(index) {
            if ($(this).val() && $(this).val() != '') {

                var courseId = $(this).val();
                updatedCourses.push(courseId);
                var classObj = Parse.Object.extend("Class");
                var classQuery = new Parse.Query(classObj);
                classQuery.get(courseId, {
                    success: function(result) {
                        // The object was retrieved successfully.
                        var relation = result.relation("students");
                        relation.add(Parse.User.current());
                        result.save();
                    },
                    error: function(user, error) {
                        // Show the error message somewhere and let the user try again.
                        alert("Error: " + error.code + " " + error.message);
                    }
                });
            }
        });
        fulfill(updatedCourses);
    });

updateCurrClasses.then(function(updatedCourses) {

        $('.userClass').each(function(index) {
                var courseId = $(this).attr("id");
//alert($.inArray(courseId, updatedCourses));
            if ($.inArray(courseId, updatedCourses)==-1) {
                var classObj = Parse.Object.extend("Class");
                var classQuery = new Parse.Query(classObj);
                classQuery.get(courseId, {
                    success: function(result) {
                        // The object was retrieved successfully.
                        var relation = result.relation("students");
                        relation.remove(Parse.User.current());
                        result.save();
                    },
                    error: function(user, error) {
                        // Show the error message somewhere and let the user try again.
                        alert("Error: " + error.code + " " + error.message);
                    }
                });

            }
        });
    alert('Your Courses Were Updated Successfully!');
return false;
});
}