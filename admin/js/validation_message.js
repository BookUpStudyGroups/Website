$().ready(function() {
		
	$("#signinForm").validate({
		rules: {
			username: "required",
			password: "required"
		},
		messages: {
			username: "Please enter username.",
			password: "Please enter password."
		}
	});
	
	$("#signinForm").validate({
		rules: {
			firstName: "required",
			lastName: "required"
		},
		messages: {
			firstName: "Please enter first name.",
			lastName: "Please enter last name."
		}
	});
	
	$("#classForm").validate({
		rules: {
			name: "required"
		},
		messages: {
			name: "Please enter department name."
		}
	});
	
});

