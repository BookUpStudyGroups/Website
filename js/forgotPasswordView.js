
//Password validation
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


//Form checker for forgot password
    function submitPasswordRequest() {
    returnVal = validateForgotPassword();
    if (returnVal == true) {
        var username = document.getElementById("fp_email").value;

        var User = Parse.Object.extend("_User");
        var query = new Parse.Query(User);
        query.equalTo("username", username.toLowerCase());
        query.find({
            success: function(results) {
                if (results.length == 0) {
                    alert('This email is not registered. Please enter a valid BookUp email.');
                } else {

                    Parse.User.requestPasswordReset(username, {
                        success: function() {
                            window.alert("Password reset link has been sent to " + username);
                            window.location = 'login.php';
                            return true;
                        },
                        error: function(error) {
                            window.alert(error.message);
                            return false;
                        }
                    });
                }


            },
            error: function(object, error) {
                // The object was not retrieved successfully.
                // error is a Parse.Error with an error code and message.
                alert("Error: Database is Down");
                return false;
            }

        });
        return false;
    } else {
        return false;
    }




}//submitPasswordRequest