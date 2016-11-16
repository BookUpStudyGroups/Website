    function checkLoginForm(){
if (validateLogin()==false){
return false;
}else{
 var username=document.getElementById("si_email").value.toLowerCase();
var password=document.getElementById("si_password").value;

if(1==1){
                Parse.User.logIn(username, password, {
  success: function(user) {
    // Do stuff after successful login.
window.location = "profile.php";
return true;
  },
  error: function(user, error) {
    // The login failed. Check error to see why.
alert("Error: User login failed. Please check your username and password.");
return false;
  }
});
}else{
alert("Sorry! Site is currently undergoing development. We'll be back up soon!");
}            

}
return false;
}

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