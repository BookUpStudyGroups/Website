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
	
		
	if( $("#redirect-in-10").length )
	{
		window.location = $("#redirect-in-10").val();	
	}//if to be redirected
	
	
	
		
	//MAP SCRIPT START HERE	
	if($("#add_group_body #map").length){
		var geocoder = new google.maps.Geocoder;
	
        
        function init(){
            var mapOptions = {
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
		
		google.maps.event.addDomListener(window, 'load', init);
		//MAP SCRIPT ENDS HERE
	}//add_group_body_check	
	
	
	
	if($("#search_group_body #map").length){
		var geocoder = new google.maps.Geocoder;
	
        
        function init(){
            var mapOptions = {
                zoom: 11,
                center: new google.maps.LatLng(40.6700, -73.9400), // New York
                styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
            };

            // Get the HTML DOM element that will contain your map 
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('map');

            // Create the Google Map using our element and options defined above
            var map = new google.maps.Map(mapElement, mapOptions);
			
			markers = [];
			
			$("#available-groups-table tr").each(function(index){
				var latlng = $(this).find('.latlng').text().split(',');
				var myLatLng = {lat: parseFloat( latlng[0] ), lng: parseFloat( latlng[1] )};
				var address = $(this).find('.location').text();
				var class_id = $(this).find('.class_id').text();
				var iconIndex = $("#user-classes li."+class_id).eq();
				console.log('iconIndex: '+iconIndex);
				
				var marker = new google.maps.Marker({
					position: myLatLng,
					map: map,
					title: address
     			});
				
				markers.push( marker );
			});//
			
			var bounds = new google.maps.LatLngBounds();
			for(i=0;i<markers.length;i++) {
				console.log( i );
				 console.log( markers[i].getPosition() );
				 bounds.extend(markers[i].getPosition());
			}//for			
			map.fitBounds( bounds );
        }//init
		
		google.maps.event.addDomListener(window, 'load', init);
		//MAP SCRIPT ENDS HERE
	}//search_group_body_check	
		
});//document ready


function validateResetForm()
{
	
	if( $.trim($("#rp_password").val()) == "" )
	{
		alert("Please enter password.");
		$("#rp_password").focus();
		return false;
	}

	if( !strongPassword($.trim($("#rp_password").val())))
	{
		alert("Password must contain at least one uppercase, one lowercase, one digit, one special character and must not contain spaces..");
		$("#rp_password").focus();
		return false;
	}

	if( $.trim($("#rp_cpassword").val()) == "" )
	{
		alert("Please enter confirm password.");
		$("#rp_cpassword").focus();
		return false;
	}

	if( $.trim($("#rp_cpassword").val()) != $.trim($("#rp_password").val()) )
	{
		alert("Confirm password should be same as password.");
		$("#rp_cpassword").focus();
		return false;
	}



	return true;
}//validateResetForm

function validateForgotPassword()
{
	
	if( $.trim($("#fp_email").val()) == "" )
	{
		alert("Please enter email address.");
		$("#fp_email").focus();
		return false;
	}

	if( $.trim($("#fp_email").val()).indexOf('@dartmouth.edu') == -1 ){
		alert("Please enter a valid dartmouth email id.");
		$("#fp_email").focus();
		return false;
	}


	return true;
}//validateForgotPassword

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

function valideRegistrationform()
{
	
	if( $.trim($("#fname").val()) == "" )
	{
		alert("Please enter first name.");
		$("#fname").focus();
		return false;
	}

	if( $.trim($("#lname").val()) == "" )
	{
		alert("Please enter last name.");
		$("#lname").focus();
		return false;
	}

	if( $.trim($("#email").val()) == "" )
	{
		alert("Please enter email address.");
		$("#email").focus();
		return false;
	}

	if( $.trim($("#email").val()).indexOf('@dartmouth.edu') == -1 ){
		alert("Please enter a valid dartmouth email id.");
		$("#email").focus();
		return false;
	}

	if( $.trim($("#password").val()) == "" )
	{
		alert("Please enter password.");
		$("#password").focus();
		return false;
	}

	if( !strongPassword($.trim($("#password").val())))
	{
		alert("Password must contain at least one uppercase, one lowercase, one digit, one special character and must not contain spaces..");
		$("#password").focus();
		return false;
	}

	if( $.trim($("#cpassword").val()) == "" )
	{
		alert("Please enter confirm password.");
		$("#cpassword").focus();
		return false;
	}

	if( $.trim($("#cpassword").val()) != $.trim($("#password").val()) )
	{
		alert("Confirm password should be same as password.");
		$("#cpassword").focus();
		return false;
	}

	if( $.trim($("#class_year").val()) == "" )
	{
		alert("Please enter class year.");
		$("#class_year").focus();
		return false;
	}

	var status = true;

	$(".classesrow select").each(function(index){
		if( $(this).val() == '' )
		{
			status = false;
		}
	});//each

	if( !status)
	{
		alert("Please fill all fields related to courses.");
		return false;	
	}

	return true;
}//valideRegistrationform

function valideProfileform()
{	
	if( $.trim($("#fname").val()) == "" )
	{
		alert("Please enter first name.");
		$("#fname").focus();
		return false;
	}

	if( $.trim($("#lname").val()) == "" )
	{
		alert("Please enter last name.");
		$("#lname").focus();
		return false;
	}

	if( $.trim($("#email").val()) == "" )
	{
		alert("Please enter email address.");
		$("#email").focus();
		return false;
	}

	if( $.trim($("#email").val()).indexOf('@dartmouth.edu') == -1 ){
		alert("Please enter a valid dartmouth email id.");
		$("#email").focus();
		return false;
	}
}//valideProfileform


function addGroupValidation()
{
	
	if( $.trim($("#ag_groupname").val()) == "" )
	{
		alert("Please enter group name.");
		$("#ag_groupname").focus();
		return false;
	}

	if( $.trim($("#ag_topicname").val()) == "" )
	{
		alert("Please enter topic name.");
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

	if( $.trim($("#ag_building").val()) == "" )
	{
		alert("Please enter building.");
		$("#ag_building").focus();
		return false;
	}	

	if( $.trim($("#ag_room").val()) == "" )
	{
		alert("Please enter room.");
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
}//addGroupValidation()




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

function strongPassword(valueData){
	var password = valueData;
	
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
 }
	
