
//populate the registration page
function loadRegForm() {
    //Load in available classes to dropdown menus
var classes = Parse.Object.extend("Class");
var classQuery = new Parse.Query(classes);
classQuery.ascending("department","number");
classQuery.find({
    success: function(groups) {
	for (var i = 0; i < groups.length; i++) {
	    var prof=groups[i].get("prof");
	    var dep=groups[i].get("department");
		var title=groups[i].get("title");
		var id=groups[i].id;
		var num=groups[i].get("number");
		var per=groups[i].get("period");
		$(".form-control").append("<option value="+id+">"+"["+dep+num+"] "+title+" with Professor "+prof+"</option>");                 
    }
            
    },
    error: function(object, error) {
        // The object was not retrieved successfully.
        // error is a Parse.Error with an error code and message.
        alert("Error: Courses could not be retrieved.");
    }
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

//check registration form and submit
function checkRegForm() {

    var returnValue = valideRegistrationform();
    if (returnValue == false) {
        return returnValue;
    } else {
        //form is validated
        var user = new Parse.User();
        var fullName = $.trim($("#fname").val()) + " " + $.trim($("#lname").val());
        var username = $.trim($("#email").val());
        var password = $.trim($("#password").val());
        // other fields can be set just like with Parse.Object

        //Check to see if username is already taken
        var query = new Parse.Query(Parse.User);
        query.equalTo("username", username.toLowerCase());
        query.find({

            //If username can be found, then don't allow creation

            success: function(existing_user) {
                if (existing_user.length >= 1) {
                    alert(username);
                    alert(existing_user[9].get('username'));
                    alert("Your email is already associated with a BookUp account.");
                    $("#email").focus();
                    return false;
                } else {

                    //Username isn't taken, so sign up!
                    var user = new Parse.User();
                    user.set("fullName", fullName);
                    user.set("username", username.toLowerCase());
                    user.set("password", password);
                    user.signUp(null, {
                        success: function(user) {
                            //now sign up for the different classes


                            $(".classesrow select").each(function(index) {
                                if ($(this).val() && $(this).val() != '') {

                                    var courseId = $(this).val();
                                    var classObj = Parse.Object.extend("Class");
                                    var classQuery = new Parse.Query(classObj);
                                    classQuery.get(courseId, {
                                        success: function(result) {
                                            // The object was retrieved successfully.

                                            //save relational data
                                            var relation1 = result.relation("students");
                                            relation1.add(user);
                                            result.save();

                                            var relation2 = user.relation("classes");
                                            relation2.add(result);
                                            user.save();
                                        },
                                        error: function(user, error) {
                                            // Show the error message somewhere and let the user try again.
                                            alert("Error: " + error.code + " " + error.message);
                                        }
                                    });

                                    //loop through all invites for that user and set to userExists to true
                                    var invites = Parse.Object.extend("PrivateInvite");
                                    var invitesQuery = new Parse.Query(invites);
                                    invitesQuery.equalTo("Email", username)
                                    
                                    invitesQuery.find({
                                        success: function(results) {
                                        	console.log(results);
                                            console.log(results.length);
                                            //chnage user exists to true for each invite
                                            for(i=0; i<results.length; i++){
                                            	results[i].set("userExists", true);
                                            	results[i].save();

                                            }
                                            
                                        },
                                        error: function(user, error) {
                                            // Show the error message somewhere and let the user try again.
                                            alert("Error: " + error.code + " " + error.message);
                                        }
                                    });

                                }
                            }); //each
                            alert("Your BookUp account was registered successfully.");
                            window.location = "login.php";
                            return true;



                        },
                        error: function(user, error) {
                            alert("Error: There was a problem with your registration.");


                            return false;


                        }
                    });



                }
            },
            error: function(existing_user) {

                alert("Error: Userbase could not be queried");
                return false;

            }
        });

    }
    return false;
}

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

	if( $.trim($("#email").val()).indexOf('@dartmouth.edu') == -1 && $.trim($("#email").val()).indexOf('@Dartmouth.edu') == -1){
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
}

