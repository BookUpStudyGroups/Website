//mike.js

$(document).ready(function(){
	$(".datepicker").datepicker().datepicker('setDate', new Date());
	
	$("#slider-range").slider({
		range: true,
		min: 360,
		max: 1440,
		step: 30,
		values: [600, 720],
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
	});//Time slider
	
	
	 $.validator.addMethod('strongpassword', function(value, elem, username){
		var password = value;
		var username = $(username).val() || '';
		var  LOWER = /[a-z]/,
				UPPER = /[A-Z]/,
				DIGIT = /[0-9]/,
				DIGITS = /[0-9].*[0-9]/,
				SPECIAL = /[^a-zA-Z0-9]/,
				SPACE = /\s/;
				
		 var containsLower = LOWER.test( password);
		 var containsUpper = UPPER.test( password );
		 var containsDigit = DIGIT.test( password );
		 var containsSpecial = SPECIAL.test( password );
		 var containsSpace = SPACE.test( password );
		 
		 if( containsLower && containsUpper && containsDigit && containsSpecial && !containsSpace )
		 {
			return true;
		 }
		 else
		 {
			return false;
		 }
	 }, "Password must contain at least one uppercase, one lowercase, one digit, one special character and must not contain spaces. e.g. Mike@123");
	
	
	invalidCalled = false;
	var reg_validator = $("#registerform").validate({
		rules:
		{
			fname:
			{
				required: true	
			},
			lname:
			{
				required: true	
			},
			email:
			{
				required: true,
				email: true,
				remote: {
					url: "ajax-functions.php?action=check_unique_email",
					type: "post",
					data: {
						email: function() {
							return $( "#email" ).val();
						}
        			}
      			}
			},
			password:
			{
				required: true,
				minlength: 4,
				strongpassword: '#username'
			},
			cpassword:
			{
				equalTo: '#password'	
			}
		},
		invalidHandler: function(e, validator){
			invalidCalled = true;
		},
		showErrors: function( errorMap, errorList )
		{
			if( invalidCalled )
			{
				invalidCalled = false;
				var errorString = '';
				for( var i = 0; i < errorList.length; i++ )
				{
					var errorObj = errorList[i];
					var elem = $(errorObj.element );
					var elemName = elem.attr('name');
					var method = errorObj.method;
					
					switch( elemName )
					{
						case 'fname':
							errorString += 'First name is required.\n';
							break;
							
						case 'lname':
							errorString += 'Last name is required.\n';
							break;
							
						case 'email':
							if( method == 'required' )
							{
								errorString += 'Email is required.\n';
							}
							else if( method == 'email' )
							{
								errorString += 'Enter a valid email id.\n';
							}
							else if( method == 'remote' )
							{
								errorString += 'This email id is already registered';
							}
							break;
							
						case 'password':
							if( method == 'required' )
							{
								errorString += 'Please enter password.\n';
							}
							else if( method == 'minlength' )
							{
								errorString += 'Password must be at least 4 characters long.\n';
							}
							if( method == 'strongpassword' )
							{
								errorString += 'Password must contain at least one uppercase, one lowercase, one digit, one special character and must not contain spaces. e.g. Mike@123.\n';
							}
							break;
							
						case 'cpassword':
							errorString += 'Passwords do not match';
							break;
						
						default:
							console.log( errorObj );
							break;
					}//switch					
				}//for
				alert( errorString );
			}
		},
		submitHandler: function(form){
			var email = $("#email").val();
			var stillErrors = false;
			
			if( email.indexOf('@dartmouth.edu') == -1 )
			{
				alert("Please enter a valid dartmouth email id.");
				$("#email").focus();
				stillErrors = true;
			}
			
			if( !stillErrors )
			{
				$(".classesrow select").each(function(index){
					if( $(this).val() == '' )
					{
						alert("Please fill all fields related to courses.");
						stillErrors = true;
						return false;	
					}
				});//each
			}
			
			if( !stillErrors )
			{			
				form.submit();	
			}
		}
	});//reg_validator
	
	if( $("#registerform").length )
	{
		var classesRow = $(".classesrow").html();
		$("#classesrow1").after('<div class="row classesrow" id="classesrow2">'+classesRow+'</div>');		
		adjustAddRemoveCourseButtons();
		
		$("#add-course-row").on("click", function(e){
			e.preventDefault();			
			rows = $("#registerform .classesrow").length;			
			if( rows < 4 )
			{
				var rowHTML = $("#classesrow1").html();
				$("#classesrow"+rows).after('<div class="row classesrow" id="classesrow'+(rows+1)+'">'+rowHTML+'</div>');		
				adjustAddRemoveCourseButtons();
			}
		});//#add-course-row click
		
		$("#remove-course-row").on("click", function(e){
			e.preventDefault();			
			rows = $("#registerform .classesrow").length;			
			if( rows > 2 )
			{
				$("#classesrow"+rows).remove();
				adjustAddRemoveCourseButtons();
			}
		});//#add-course-row click
	}//#registerform check
	
	
	var si_validator = $("#signinform").validate({
		rules:
		{
			si_email:
			{
				required: true,
				email: true	
			},
			si_password:
			{
				required: true	
			}
		},
		invalidHandler: function(e, validator){
			invalidCalled = true;
		},
		showErrors: function( errorMap, errorList ){
			if( invalidCalled )
			{
				invalidCalled = false;
				var errorString = '';
				for( var i = 0; i < errorList.length; i++ )
				{
					var errorObj = errorList[i];
					var elem = $(errorObj.element );
					var elemName = elem.attr('name');
					var method = errorObj.method;
					
					switch( elemName )
					{
						case 'si_email':
							if( method == 'required' )
							{
								errorString += 'Please enter email id.\n';
							}
							else if( method == 'email' )
							{
								errorString += 'Please enter a valid email id.\n';
							}
							break;
							
						case 'si_password':
							errorString += 'Please enter password.\n';
							break;
							
						default:
							break;
					}//switch
				}//for
				alert( errorString );
			}
		}
	});//si_validator	
		
	if( $("#redirect-in-10").length )
	{
		window.location = $("#redirect-in-10").val();	
	}//if to be redirected
	
	
	var fp_validator = $("#forgotpasswordform").validate({
		rules:
		{
			fp_email:
			{
				required: true,
				email: true
			}	
		},
		invalidHandler: function(e, validator){
			invalidCalled = true;
		},
		showErrors: function( errorMap, errorList ){
			if( invalidCalled )
			{
				invalidCalled = false;
				var errorString = '';
				for( var i = 0; i < errorList.length; i++ )
				{
					var errorObj = errorList[i];
					var elem = $(errorObj.element );
					var elemName = elem.attr('name');
					var method = errorObj.method;
					
					switch( elemName )
					{
						case 'fp_email':
							if( method == 'required' )
							{
								errorString += 'Please enter email id.\n';
							}
							else if( method == 'email' )
							{
								errorString += 'Please enter a valid email id.\n';
							}
							break;
							
						default:
							break;
					}//switch
				}//for
				alert( errorString );
			}
		}//showErrors
	});//fp_validator
	
	
	
	var ag_validator = $("#addgroupform").validate({
		rules:
		{
			ag_groupname:
			{
				required: true
			},
			ag_topicname:
			{
				required: true	
			},
			ag_building:
			{
				required: true	
			},
			ag_room:
			{
				required: true	
			}
		},
		invalidHandler: function(e, validator){
			invalidCalled = true;
		},
		showErrors: function( errorMap, errorList ){
			if( invalidCalled )
			{
				invalidCalled = false;
				var errorString = '';
				for( var i = 0; i < errorList.length; i++ )
				{
					var errorObj = errorList[i];
					var elem = $(errorObj.element );
					var elemName = elem.attr('name');
					var method = errorObj.method;
					
					switch( elemName )
					{
						case 'ag_groupname':
							errorString += 'Please enter Group Name.\n';
							break;
							
						case 'ag_topicname':
							errorString += 'Please enter Topic Name.\n';
							break;
						case 'ag_building':
							errorString += 'Please enter Building.\n';
							break;
						case 'ag_room':
							errorString += 'Please enter Room number.\n';
							break;
							
						default:
							break;
					}//switch
				}//for
				alert( errorString );
			}
		},//showErrors
		submitHandler: function(form)
		{
			$("#ag_start_time").val( $(".slider-time").text() );
			$("#ag_end_time").val( $(".slider-time2").text() );
			
			form.submit();
		}
	});//ag_validator
	
	
	
	//MAP SCRIPT START HERE	
	var geocoder = new google.maps.Geocoder;
	
	google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                var mapOptions = {
                    disableDoubleClickZoom: true,
                    zoom: 11,
                    center: new google.maps.LatLng(40.6700, -73.9400), // New York
                    styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);
			
				google.maps.event.addListener(map, 'click', function(event) {
					var lat = event.latLng.G;
					var long = event.latLng.K;					
					$("#ag_location_latlng").val( lat+","+long );
					
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
            }//init
		//MAP SCRIPT ENDS HERE
});//document ready


function adjustAddRemoveCourseButtons()
{
	var rows = $("#registerform .classesrow").length;
	$("#add-course-row, #remove-course-row").show();
	if( rows >= 4 )
	{
		$("#add-course-row").hide();
	}
	if( rows <= 2 )
	{
		$("#remove-course-row").hide();
	}
}//adjustAddRemoveCourseButtons()