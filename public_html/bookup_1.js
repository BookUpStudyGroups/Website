//mike.js

$(document).ready(function(){

	if($("#profilebody").length>0){
Date.weeksBetween = function( date1, date2 ) {
  //Get 1 day in milliseconds
  var one_day=1000*60*60*24;

  // Convert both dates to milliseconds
  var date1_ms = date1.getTime();
  var date2_ms = date2.getTime();

  // Calculate the difference in milliseconds
  var difference_ms = date2_ms - date1_ms;
    
  // Convert back to days
  var difference_days = Math.round(difference_ms/one_day); 
  var difference_weeks = Math.round(difference_days/7);
  // Convert to weeks and return
  return Math.abs(difference_weeks);
}
var today, spring_start,spring_end,summer_start,summer_end,fall_start,fall_end,winter_start,winter_end, text,text1,text2;
today = new Date();

//Get the day of the week
var weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

text1 = weekday[today.getDay()];

//Set the term calender dates
spring_start = new Date();
spring_start.setFullYear(2016, 2, 28);
spring_end = new Date();
spring_end.setFullYear(2016, 5, 6);

summer_start = new Date();
summer_start.setFullYear(2016, 5, 23);
summer_end = new Date();
summer_end.setFullYear(2016, 7, 30);

fall_start = new Date();
fall_start.setFullYear(2016, 8, 12);
fall_end = new Date();
fall_end.setFullYear(2016, 10, 23);

winter_start = new Date();
winter_start.setFullYear(2017, 0, 4);
winter_end = new Date();
winter_end.setFullYear(2017, 2, 15);

//Update date according to date
if (today>=spring_start && today<=spring_end) {
    text = "Spring 2016";
    temp=new Date();
    temp.setFullYear(2016, 2, 27);
    text2 = Date.weeksBetween(today,temp);
} else if (today>spring_end && today<summer_start){
    text = "Summer Break 2016";
    temp=new Date();
    temp.setFullYear(2016, 5, 5);
    text2 = Date.weeksBetween(today,temp);
}
else if (today>=summer_start && today<=summer_end){
    text = "Summer 2016";
    temp=new Date();
    temp.setFullYear(2016, 5, 19);
    text2 = Date.weeksBetween(today,temp);
}
else if (today>summer_end && today<fall_start){
    text = "Fall Break 2016";
    temp=new Date();
    temp.setFullYear(2016, 7, 28);
    text2 = Date.weeksBetween(today,temp);
}
else if (today>=fall_start && today<=fall_end){
    text = "Fall 2016";
    temp=new Date();
    temp.setFullYear(2016, 8, 11);
    text2 = Date.weeksBetween(today,temp);
}
else if (today>fall_end && today<winter_start){
    text = "Winter Break 2016";
    temp=new Date();
    temp.setFullYear(2016, 10, 20);
    text2 = Date.weeksBetween(today,temp);
}
else if (today>=winter_start && today<=winter_end){
    text = "Winter 2017";
    temp=new Date();
    temp.setFullYear(2016, 1, 1);
    text2 = Date.weeksBetween(today,temp);
}
else if (today>winter_end){
    text = "Spring Break 2017";
    temp=new Date();
    temp.setFullYear(2017, 2, 12);
    text2 = Date.weeksBetween(today,temp);
}
document.getElementById("date").innerHTML = "Term: "+text+"</br>"+text1+", Week "+text2;
}
	if($("#search_group_body").length > 0){
		$(".datepicker").datepicker({
			minDate: 0,
			beforeShow:function(textbox, instance){
				    $('#ui-datepicker-div').css({
				        position: 'absolute',
				        left:'-300px',
				        right: '200'
				    });
				    $('#ui-datepicker-div').css('left', '50px');	
				    $('#dateDivId').append($('#ui-datepicker-div'));
				    //$('#ui-datepicker-div').hide();

				}

		}).datepicker('setDate', new Date());

	}else{
		if($(".datepicker").val() == ""){
			$(".datepicker").datepicker({minDate: 0}).datepicker('setDate', new Date());	
		}else{
			$(".datepicker").datepicker({minDate: 0});	
		}
		
	}
	
	var srartTimeSlider = 600;
	var endTimeSlider = 720;
	if($("#ag_start_time_1").length >0 && $("#ag_start_time_1").val() != ""){
		srartTimeSlider = $("#ag_start_time_1").val();
	}

	if($("#ag_end_time_1").length >0 && $("#ag_end_time_1").val() != ""){
		endTimeSlider = $("#ag_end_time_1").val();
	}
	$("#slider-range").slider({
		range: true,
		min: 360,
		max: 1440,
		step: 15,
		values: [srartTimeSlider, endTimeSlider],
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
	}).draggable();//Time slider
	

	if($(".profile_heading").length > 0){
		$(window).on('load resize', function(){
	      var winHeight = $(window).height();
	      var headerHeight = $("header#header").height() + 450;//20 for padding
	      //set slider sections min-height
	      $(".top_four_icons .container").css('height', (winHeight - headerHeight) + 'px');
	      
	      $(".top_four_icons #spacer").height( (winHeight-headerHeight ) * 0.5 );
	    });//window load or resize
	  	
	}	

	if($("#createGroupInnerId").length > 0){
		$(window).on('load resize', function(){
	      var winHeight = $(window).height();
	      var headerHeight = 50;//20 for padding
	      //set slider section's min-height
	      var finalHeight = ((winHeight * 65)/100) - 50;
	      $("#createGroupInnerId").css('height', finalHeight + 'px');
	      $("#profileimgId").css('height', finalHeight + 'px');
	    });//window load or resize
	  	
	}	
  
    


	if( $("#registerform").length )
	{
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
	if($("#add_group_body #map2").length){
		var geocoder = new google.maps.Geocoder;
		
        var curr_sel_marker={};
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
            var map = new google.maps.Map(mapElement, mapOptions2);
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
	
	markers = [];
	
	if($("#search_group_body #map").length){

		$(window).on('load resize', function(){
	      var winHeight = $(window).height();
	      var winWidth = $(window).width();
	       $( "#map-container" ).css( "maxWidth", winWidth);
	       $( "#map-container" ).css( "maxHeight", winHeight );

	       $( "#map" ).css( "maxWidth", winWidth);
	       $( "#map" ).css( "maxHeight", winHeight );

	       $( "#map-container" ).css( "minWidth", winWidth);
	       $( "#map-container" ).css( "minHeight", winHeight );

	       $( "#map" ).css( "minWidth", winWidth);
	       $( "#map" ).css( "minHeight", winHeight );

	    });//window load or resize



		var geocoder = new google.maps.Geocoder;
	
        
        function init(){
            var strictBounds = new google.maps.LatLngBounds(
	  	new google.maps.LatLng(43.700097, -72.297528),
  		new google.maps.LatLng(43.709869, -72.279739) 
		);
	    
            var mapOptions = {

                disableDoubleClickZoom: true,
                zoom: 18,
                
                center: new google.maps.LatLng(43.704472, -72.288951), // New York
//mapTypeId: google.maps.MapTypeId.SATELLITE,
				mapTypeControl: false,
				zoomControl: false,
				streetViewControl: false,
				bounds: strictBounds,
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
							//{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#DBEAF9"},{"lightness":21}]},
							{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#ffffff"},{"lightness":16}]},
							{"elementType":"labels.text.fill","stylers":[{ visibility: "off" },{"saturation":36},{"color":"#333333"},{"lightness":40}]},
							{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},
							{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#DBEAF9"},{"lightness":19}]},
							{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},
							{
								"featureType":"administrative",
								"elementType":"geometry.stroke",
								"stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]
							} 
						]
                //styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
            };

            // Get the HTML DOM element that will contain your map 
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('map');

            // Create the Google Map using our element and options defined above
            var map = new google.maps.Map(mapElement, mapOptions);
var location=document.getElementById("center-location");
var russelCoords = [
new google.maps.LatLng(43.705319,-72.290962),
new google.maps.LatLng(43.705471,-72.290971),
new google.maps.LatLng(43.705472,-72.290954),
new google.maps.LatLng(43.705540,-72.290958),
new google.maps.LatLng(43.705638,-72.290873),
new google.maps.LatLng(43.705671,-72.290846),
new google.maps.LatLng(43.705659,-72.290787),
new google.maps.LatLng(43.705610,-72.290782),
new google.maps.LatLng(43.705611,-72.290589),
new google.maps.LatLng(43.705323,-72.290576),
new google.maps.LatLng(43.705319,-72.290962)
];
var defaultColor='#006633';
var hoverColor='#00FF7F';
var dblClickColor='#006633';
var defaultOpac=1.0;
var hoverOpac=1.0;
var dblClickOpac=0.3;
var curr_sel_building;
 var russel = new google.maps.Polygon({
    paths: russelCoords,
    strokeColor: '#3E61C3',
    strokeOpacity: 0,
    strokeWeight: 2,
    fillColor: defaultColor,
    fillOpacity: defaultOpac
  });
russel.setMap(map);
russel.addListener('mouseover', function(){
russel.setOptions({fillOpacity: hoverOpac, fillColor: hoverColor});
});
russel.addListener('dblclick', function(event) {
				var lat = event.latLng.lat();
				var long = event.latLng.lng();					
				//$("#ag_location_latlng").val();
				$("#ag_location_latlng").val( lat+","+long );
				//alert($("#ag_location_latlng").val());
				map.panTo(event.latLng);
				placeMarker(event.latLng, map);
				geocoder.geocode({'location': {lat: lat, lng: long}}, function(results, status) {
					if (status === google.maps.GeocoderStatus.OK)
					{
						if (results[1])
						{
							$("#ag_location").val( results[1].formatted_address );
$("#ag_room").val("Russel Sage");
location.innerHTML="Russel Sage Hall";                                   
							//alert($("#ag_location").val());
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
russel.addListener('mouseout', function(){
russel.setOptions({fillOpacity: defaultOpac, fillColor: defaultColor});
});

var butterfieldCoords = [
new google.maps.LatLng(43.705537,-72.290956),
new google.maps.LatLng(43.705639,-72.290873),
new google.maps.LatLng(43.705744,-72.291290),
new google.maps.LatLng(43.705637,-72.291352),
new google.maps.LatLng(43.705537,-72.290956)
];

 var butterfield = new google.maps.Polygon({
    paths: butterfieldCoords,
    strokeColor: '#3E61C3',
    strokeOpacity: 0,
    strokeWeight: 2,
        fillColor: defaultColor,
    fillOpacity: defaultOpac
  });
butterfield.setMap(map);
butterfield.addListener('mouseover', function(){
butterfield.setOptions({fillOpacity: hoverOpac, fillColor: hoverColor});
});
butterfield.addListener('dblclick', function(event) {
				var lat = event.latLng.lat();
				var long = event.latLng.lng();					
				//$("#ag_location_latlng").val();
				$("#ag_location_latlng").val( lat+","+long );
				//alert($("#ag_location_latlng").val());
				map.panTo(event.latLng);
				placeMarker(event.latLng, map);
				geocoder.geocode({'location': {lat: lat, lng: long}}, function(results, status) {
					if (status === google.maps.GeocoderStatus.OK)
					{
						if (results[1])
						{
							$("#ag_location").val( results[1].formatted_address );
$("#ag_room").val("Butterfield");
location.innerHTML="Butterfield Hall";                                   
							//alert($("#ag_location").val());
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
butterfield.addListener('mouseout', function(){
butterfield.setOptions({fillOpacity: defaultOpac, fillColor: defaultColor});
});

var faheyCoords = [
new google.maps.LatLng(43.705345,-72.291289),
new google.maps.LatLng(43.705345,-72.291328),
new google.maps.LatLng(43.705318,-72.291328),
new google.maps.LatLng(43.705324,-72.291857),
new google.maps.LatLng(43.705360,-72.291906),
new google.maps.LatLng(43.705440,-72.291907),
new google.maps.LatLng(43.705507,-72.291778),
new google.maps.LatLng(43.705470,-72.291667),
new google.maps.LatLng(43.705443,-72.291683),
new google.maps.LatLng(43.705439,-72.291333),
new google.maps.LatLng(43.705405,-72.291333),
new google.maps.LatLng(43.705405,-72.291289),
new google.maps.LatLng(43.705345,-72.291289)
];

 var fahey = new google.maps.Polygon({
    paths: faheyCoords,
    strokeColor: '#3E61C3',
    strokeOpacity: 0,
    strokeWeight: 2,
        fillColor: defaultColor,
    fillOpacity: defaultOpac
  });
fahey.setMap(map);
fahey.addListener('mouseover', function(){
fahey.setOptions({fillOpacity: hoverOpac, fillColor: hoverColor});
});
fahey.addListener('dblclick', function(event) {
				var lat = event.latLng.lat();
				var long = event.latLng.lng();					
				//$("#ag_location_latlng").val();
				$("#ag_location_latlng").val( lat+","+long );
				//alert($("#ag_location_latlng").val());
				map.panTo(event.latLng);
				placeMarker(event.latLng, map);
				geocoder.geocode({'location': {lat: lat, lng: long}}, function(results, status) {
					if (status === google.maps.GeocoderStatus.OK)
					{
						if (results[1])
						{
							$("#ag_location").val( results[1].formatted_address );
$("#ag_room").val("Fahey");
location.innerHTML="Fahey Hall";                                   
							//alert($("#ag_location").val());
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
fahey.addListener('mouseout', function(){
fahey.setOptions({fillOpacity: defaultOpac, fillColor: defaultColor});
});

var mclaneCoords = [
new google.maps.LatLng(43.705440,-72.291907),
new google.maps.LatLng(43.705506,-72.291777),
new google.maps.LatLng(43.705528,-72.291765),
new google.maps.LatLng(43.705657,-72.292165),
new google.maps.LatLng(43.705682,-72.292151),
new google.maps.LatLng(43.705723,-72.292277),
new google.maps.LatLng(43.705626,-72.292332),
new google.maps.LatLng(43.705593,-72.292231),
new google.maps.LatLng(43.705553,-72.292255),
new google.maps.LatLng(43.705440,-72.291907)
];

 var mclane = new google.maps.Polygon({
    paths: mclaneCoords,
    strokeColor: '#3E61C3',
    strokeOpacity: 0,
    strokeWeight: 2,
        fillColor: defaultColor,
    fillOpacity: defaultOpac
  });
mclane.setMap(map);
mclane.addListener('mouseover', function(){
mclane.setOptions({fillOpacity: hoverOpac, fillColor: hoverColor});
});
mclane.addListener('dblclick', function(event) {
				var lat = event.latLng.lat();
				var long = event.latLng.lng();					
				//$("#ag_location_latlng").val();
				$("#ag_location_latlng").val( lat+","+long );
				//alert($("#ag_location_latlng").val());
				map.panTo(event.latLng);
				placeMarker(event.latLng, map);
				geocoder.geocode({'location': {lat: lat, lng: long}}, function(results, status) {
					if (status === google.maps.GeocoderStatus.OK)
					{
						if (results[1])
						{
							$("#ag_location").val( results[1].formatted_address );
$("#ag_room").val("McLane");
location.innerHTML="McLane Hall";                                   
							//alert($("#ag_location").val());
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
mclane.addListener('mouseout', function(){
mclane.setOptions({fillOpacity: defaultOpac, fillColor: defaultColor});
});

var kemenyCoords = [
new google.maps.LatLng(43.706031,-72.289351),
new google.maps.LatLng(43.706029,-72.289027),
new google.maps.LatLng(43.706120,-72.289026),
new google.maps.LatLng(43.706121,-72.289010),
new google.maps.LatLng(43.706139,-72.288983),
new google.maps.LatLng(43.706170,-72.288982),
new google.maps.LatLng(43.706190,-72.289009),
new google.maps.LatLng(43.706190,-72.289066),
new google.maps.LatLng(43.706372,-72.289065),
new google.maps.LatLng(43.706370,-72.288603),
new google.maps.LatLng(43.706344,-72.288569),
new google.maps.LatLng(43.706343,-72.288522),
new google.maps.LatLng(43.706367,-72.288490),
new google.maps.LatLng(43.706400,-72.288488),
new google.maps.LatLng(43.706424,-72.288522),
new google.maps.LatLng(43.706534,-72.288521),
new google.maps.LatLng(43.706539,-72.289340),
new google.maps.LatLng(43.706431,-72.289341),
new google.maps.LatLng(43.706431,-72.289362),
new google.maps.LatLng(43.706364,-72.289362),
new google.maps.LatLng(43.706363,-72.289256),
new google.maps.LatLng(43.706197,-72.289257),
new google.maps.LatLng(43.706197,-72.289350)
];

 var kemeny = new google.maps.Polygon({
    paths: kemenyCoords,
    strokeColor: '#3E61C3',
    strokeOpacity: 0,
    strokeWeight: 2,
        fillColor: defaultColor,
    fillOpacity: defaultOpac
  });
kemeny.setMap(map);
kemeny.addListener('mouseover', function(){
kemeny.setOptions({fillOpacity: hoverOpac, fillColor: hoverColor});
});
kemeny.addListener('dblclick', function(event) {
				var lat = event.latLng.lat();
				var long = event.latLng.lng();					
				//$("#ag_location_latlng").val();
				$("#ag_location_latlng").val( lat+","+long );
				//alert($("#ag_location_latlng").val());
				map.panTo(event.latLng);
				placeMarker(event.latLng, map);
				geocoder.geocode({'location': {lat: lat, lng: long}}, function(results, status) {
					if (status === google.maps.GeocoderStatus.OK)
					{
						if (results[1])
						{
							$("#ag_location").val( results[1].formatted_address );
$("#ag_room").val("Kemeny/Haldeman");
location.innerHTML="Kemeny Hall/Haldeman Center";                                   
							//alert($("#ag_location").val());
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
kemeny.addListener('mouseout', function(){
kemeny.setOptions({fillOpacity: defaultOpac, fillColor: defaultColor});
});
var mooreCoords = [
new google.maps.LatLng(43.707369,-72.288268),
new google.maps.LatLng(43.707261,-72.288037),
new google.maps.LatLng(43.707087,-72.288194),
new google.maps.LatLng(43.707008,-72.288028),
new google.maps.LatLng(43.707199,-72.287856),
new google.maps.LatLng(43.707180,-72.287816),
new google.maps.LatLng(43.707337,-72.287672),
new google.maps.LatLng(43.707545,-72.288109)
];
var moore = new google.maps.Polygon({
    paths: mooreCoords,
    strokeColor: '#3E61C3',
    strokeOpacity: 0,
    strokeWeight: 2,
        fillColor: defaultColor,
    fillOpacity: defaultOpac
  });
moore.setMap(map);
moore.addListener('mouseover', function(){
moore.setOptions({fillOpacity: hoverOpac, fillColor: hoverColor});
});
moore.addListener('dblclick', function(event) {
				var lat = event.latLng.lat();
				var long = event.latLng.lng();					
				//$("#ag_location_latlng").val();
				$("#ag_location_latlng").val( lat+","+long );
				//alert($("#ag_location_latlng").val());
				map.panTo(event.latLng);
				placeMarker(event.latLng, map);
				geocoder.geocode({'location': {lat: lat, lng: long}}, function(results, status) {
					if (status === google.maps.GeocoderStatus.OK)
					{
						if (results[1])
						{
							$("#ag_location").val( results[1].formatted_address );
$("#ag_room").val("Moore");
location.innerHTML="Moore Psychology Building";                                   
							//alert($("#ag_location").val());
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
moore.addListener('mouseout', function(){
moore.setOptions({fillOpacity: defaultOpac, fillColor: defaultColor});
});

var sudiCoords = [
new google.maps.LatLng(43.706574,-72.287551),
new google.maps.LatLng(43.706368,-72.287244),
new google.maps.LatLng(43.706511,-72.287062),
new google.maps.LatLng(43.706590,-72.287181),
new google.maps.LatLng(43.706542,-72.287244),
new google.maps.LatLng(43.706597,-72.287326),
new google.maps.LatLng(43.706801,-72.287066),
new google.maps.LatLng(43.706766,-72.287013),
new google.maps.LatLng(43.706815,-72.286948),
new google.maps.LatLng(43.706782,-72.286897),
new google.maps.LatLng(43.706775,-72.286904),
new google.maps.LatLng(43.706689,-72.286773),
new google.maps.LatLng(43.706708,-72.286749),
new google.maps.LatLng(43.706674,-72.286698),
new google.maps.LatLng(43.706736,-72.286620),
new google.maps.LatLng(43.706766,-72.286665),
new google.maps.LatLng(43.706774,-72.286655),
new google.maps.LatLng(43.706859,-72.286780),
new google.maps.LatLng(43.706824,-72.286824),
new google.maps.LatLng(43.706853,-72.286867),
new google.maps.LatLng(43.706883,-72.286828),
new google.maps.LatLng(43.707004,-72.287009),
new google.maps.LatLng(43.706871,-72.287178),
new google.maps.LatLng(43.706852,-72.287146),
new google.maps.LatLng(43.706817,-72.287191),
new google.maps.LatLng(43.706842,-72.287228),
new google.maps.LatLng(43.706748,-72.287348),
new google.maps.LatLng(43.706739,-72.287338)
];

var sudi = new google.maps.Polygon({
    paths: sudiCoords,
    strokeColor: '#3E61C3',
    strokeOpacity: 0,
    strokeWeight: 2,
        fillColor: defaultColor,
    fillOpacity: defaultOpac
  });
sudi.setMap(map);
sudi.addListener('mouseover', function(){
sudi.setOptions({fillOpacity: hoverOpac, fillColor: hoverColor});
});
sudi.addListener('dblclick', function(event) {
				var lat = event.latLng.lat();
				var long = event.latLng.lng();					
				//$("#ag_location_latlng").val();
				$("#ag_location_latlng").val( lat+","+long );
				//alert($("#ag_location_latlng").val());
				map.panTo(event.latLng);
				placeMarker(event.latLng, map);
				geocoder.geocode({'location': {lat: lat, lng: long}}, function(results, status) {
					if (status === google.maps.GeocoderStatus.OK)
					{
						if (results[1])
						{
							$("#ag_location").val( results[1].formatted_address );
$("#ag_room").val("Sudikoff");
location.innerHTML="Sudikoff Hall";                                   
							//alert($("#ag_location").val());
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
sudi.addListener('mouseout', function(){
sudi.setOptions({fillOpacity: defaultOpac, fillColor: defaultColor});
});

var bakerBerryCoords=[
{lng:-72.289426, lat:43.704876},
{lng:-72.289424, lat:43.704697},
{lng:-72.289033, lat:43.704698},
{lng:-72.289033, lat:43.704877},
{lng:-72.288978, lat:43.704878},
{lng:-72.288984, lat:43.705076},
{lng:-72.288782, lat:43.705078},
{lng:-72.288781, lat:43.705061},
{lng:-72.288658, lat:43.705062},
{lng:-72.288658, lat:43.705079},
{lng:-72.288442, lat:43.705082},
{lng:-72.288436, lat:43.704883},
{lng:-72.288268, lat:43.704886},
{lng:-72.288282, lat:43.705372},
{lng:-72.288434, lat:43.705372},
{lng:-72.288437, lat:43.705523},
{lng:-72.288422, lat:43.705525}, 
{lng:-72.288426, lat:43.705693},
{lng:-72.288276, lat:43.705682},
{lng:-72.288245, lat:43.705798},
{lng:-72.288853, lat:43.705888}, 
{lng:-72.289332, lat:43.705881}, 
{lng:-72.289328, lat:43.705742},
{lng:-72.289033, lat:43.705746},
{lng:-72.289029, lat:43.705577}, 
{lng:-72.289248, lat:43.705573}, 
{lng:-72.289250, lat:43.705662}, 
{lng:-72.289420, lat:43.705660}, 
{lng:-72.289414, lat:43.705356}, 
{lng:-72.289236, lat:43.705358}, 
{lng:-72.289237, lat:43.705393},
{lng:-72.289104, lat:43.705395}, 
{lng:-72.289103, lat:43.705367},
{lng:-72.289164, lat:43.705366},
{lng:-72.289158, lat:43.705177},
{lng:-72.289189, lat:43.705177},
{lng:-72.289186, lat:43.705068},
{lng:-72.289156, lat:43.705068},
{lng:-72.289151, lat:43.704876}, 
{lng:-72.289112, lat:43.704877}, 
{lng:-72.289111, lat:43.704797}, 
{lng:-72.289248, lat:43.704793}, 
{lng:-72.289248, lat:43.704879}
];

var buildings=[];
 var bakerBerry = new google.maps.Polygon({
    paths: bakerBerryCoords,
    strokeColor: '#3E61C3',
    strokeOpacity: 0,
    strokeWeight: 2,
        fillColor: defaultColor,
    fillOpacity: defaultOpac
  });
buildings.push(bakerBerry);
/*
bakerBerry.setMap(map);
bakerBerry.addListener('mouseover', function(){
bakerBerry.setOptions({fillColor: hoverColor,fillOpacity: hoverOpac});
});
bakerBerry.addListener('dblclick', function(event) {
				var lat = event.latLng.lat();
				var long = event.latLng.lng();					
				//$("#ag_location_latlng").val();
				$("#ag_location_latlng").val( lat+","+long );
				//alert($("#ag_location_latlng").val());
				map.panTo(event.latLng);
				placeMarker(event.latLng, map);
				geocoder.geocode({'location': {lat: lat, lng: long}}, function(results, status) {
					if (status === google.maps.GeocoderStatus.OK)
					{
						if (results[1])
						{
							$("#ag_location").val( results[1].formatted_address );
$("#ag_room").val("Baker-Berry");
location.innerHTML="Baker-Berry Library";
                                   
							//alert($("#ag_location").val());
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
bakerBerry.addListener('mouseout', function(){
bakerBerry.setOptions({fillColor: defaultColor,fillOpacity: defaultOpac});
});
*/
var collisCoords = [
new google.maps.LatLng(43.702980,-72.290274),
new google.maps.LatLng(43.702821,-72.290267),
new google.maps.LatLng(43.702821,-72.290240),
new google.maps.LatLng(43.702565,-72.290234),
new google.maps.LatLng(43.702567,-72.290028),
new google.maps.LatLng(43.702598,-72.290030),
new google.maps.LatLng(43.702600,-72.289929),
new google.maps.LatLng(43.702566,-72.289928),
new google.maps.LatLng(43.702569,-72.289743),
new google.maps.LatLng(43.702636,-72.289746),
new google.maps.LatLng(43.702640,-72.289718),
new google.maps.LatLng(43.702647,-72.289698),
new google.maps.LatLng(43.702657,-72.289685),
new google.maps.LatLng(43.702671,-72.289673),
new google.maps.LatLng(43.702687,-72.289665),
new google.maps.LatLng(43.702704,-72.289662),
new google.maps.LatLng(43.702720,-72.289666),
new google.maps.LatLng(43.702736,-72.289673),
new google.maps.LatLng(43.702751,-72.289690),
new google.maps.LatLng(43.702764,-72.289711),
new google.maps.LatLng(43.702770,-72.289734),
new google.maps.LatLng(43.702771,-72.289759),
new google.maps.LatLng(43.702805,-72.289763),
new google.maps.LatLng(43.702805,-72.289806),
new google.maps.LatLng(43.702850,-72.289824),
new google.maps.LatLng(43.702911,-72.289883),
new google.maps.LatLng(43.702986,-72.290034)
];

var collis = new google.maps.Polygon({paths: collisCoords,
    strokeColor: '#3E61C3',
    strokeOpacity: 0,
    strokeWeight: 2,
        fillColor: defaultColor,
    fillOpacity: defaultOpac});
buildings.push(collis);
for (i=0; i<buildings.length; i++){
buildings[i].setMap(map);
buildings[i].addListener('mouseover', function(){
buildings[i].setOptions({fillOpacity: hoverOpac, fillColor:hoverColor});
});
}
/*
collis.setMap(map);
collis.addListener('mouseover', function(){
collis.setOptions({fillOpacity: hoverOpac, fillColor:hoverColor});
});
collis.addListener('mouseout', function(){
collis.setOptions({fillOpacity: defaultOpac, fillColor: defaultColor});
});
collis.addListener('dblclick', function(event) {
				var lat = event.latLng.lat();
				var long = event.latLng.lng();					
				//$("#ag_location_latlng").val();
				$("#ag_location_latlng").val( lat+","+long );
				//alert($("#ag_location_latlng").val());
				map.panTo(event.latLng);
				placeMarker(event.latLng, map);
				geocoder.geocode({'location': {lat: lat, lng: long}}, function(results, status) {
					if (status === google.maps.GeocoderStatus.OK)
					{
						if (results[1])
						{
							$("#ag_location").val( results[1].formatted_address );
$("#ag_room").val('Collis');
location.innerHTML="Collis Student Center";                                   
							//alert($("#ag_location").val());
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
*/
var roboCoords = [
new google.maps.LatLng(43.703072,-72.290151),
new google.maps.LatLng(43.703099,-72.290150),
new google.maps.LatLng(43.703100,-72.290188),
new google.maps.LatLng(43.703174,-72.290189),
new google.maps.LatLng(43.703173,-72.290150),
new google.maps.LatLng(43.703188,-72.290150),
new google.maps.LatLng(43.703189,-72.289979),
new google.maps.LatLng(43.703203,-72.289979),
new google.maps.LatLng(43.703205,-72.289755),
new google.maps.LatLng(43.703012,-72.289753),
new google.maps.LatLng(43.703012,-72.289975),
new google.maps.LatLng(43.703073,-72.289975)
];
var robo = new google.maps.Polygon({
    paths: roboCoords,
    strokeColor: '#3E61C3',
    strokeOpacity: 0,
    strokeWeight: 2,
        fillColor: defaultColor,
    fillOpacity: defaultOpac
  });
robo.setMap(map);
robo.addListener('mouseover', function(){
robo.setOptions({fillOpacity: hoverOpac, fillColor: hoverColor});
});
robo.addListener('dblclick', function(event) {
				var lat = event.latLng.lat();
				var long = event.latLng.lng();					
				//$("#ag_location_latlng").val();
				$("#ag_location_latlng").val( lat+","+long );
				//alert($("#ag_location_latlng").val());
				map.panTo(event.latLng);
				placeMarker(event.latLng, map);
				geocoder.geocode({'location': {lat: lat, lng: long}}, function(results, status) {
					if (status === google.maps.GeocoderStatus.OK)
					{
						if (results[1])
						{
							$("#ag_location").val( results[1].formatted_address );
$("#ag_room").val("Robinson");
location.innerHTML="Robinson Hall";                                   
							//alert($("#ag_location").val());
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
robo.addListener('mouseout', function(){
robo.setOptions({fillOpacity: defaultOpac, fillColor: defaultColor});
});

var mcnuttCoords = [
new google.maps.LatLng(43.703693,-72.290008),
new google.maps.LatLng(43.703692,-72.289763),
new google.maps.LatLng(43.703410,-72.289764),
new google.maps.LatLng(43.703410,-72.290006),
new google.maps.LatLng(43.703463,-72.290007),
new google.maps.LatLng(43.703461,-72.290146),
new google.maps.LatLng(43.703642,-72.290144),
new google.maps.LatLng(43.703644,-72.290007),
new google.maps.LatLng(43.703693,-72.290008)
];
var mcnutt = new google.maps.Polygon({
    paths: mcnuttCoords,
    strokeColor: '#3E61C3',
    strokeOpacity: 0,
    strokeWeight: 2,
        fillColor: defaultColor,
    fillOpacity: defaultOpac
  });
mcnutt.setMap(map);
mcnutt.addListener('mouseover', function(){
mcnutt.setOptions({fillOpacity: hoverOpac, fillColor: hoverColor});
});
mcnutt.addListener('dblclick', function(event) {
				var lat = event.latLng.lat();
				var long = event.latLng.lng();					
				//$("#ag_location_latlng").val();
				$("#ag_location_latlng").val( lat+","+long );
				//alert($("#ag_location_latlng").val());
				map.panTo(event.latLng);
				placeMarker(event.latLng, map);
				geocoder.geocode({'location': {lat: lat, lng: long}}, function(results, status) {
					if (status === google.maps.GeocoderStatus.OK)
					{
						if (results[1])
						{
							$("#ag_location").val( results[1].formatted_address );
$("#ag_room").val("McNutt");
location.innerHTML="McNutt Hall";                                   
							//alert($("#ag_location").val());
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
mcnutt.addListener('mouseout', function(){
mcnutt.setOptions({fillOpacity: defaultOpac, fillColor: defaultColor});
});

var parkhurstCoords = [
new google.maps.LatLng(43.704086,-72.290211),
new google.maps.LatLng(43.704090,-72.290040),
new google.maps.LatLng(43.704161,-72.290042),
new google.maps.LatLng(43.704162,-72.289800),
new google.maps.LatLng(43.703907,-72.289798),
new google.maps.LatLng(43.703908,-72.290041),
new google.maps.LatLng(43.703972,-72.290040),
new google.maps.LatLng(43.703973,-72.290209),
new google.maps.LatLng(43.704086,-72.290211)
];
var parkhurst = new google.maps.Polygon({
    paths: parkhurstCoords,
    strokeColor: '#3E61C3',
    strokeOpacity: 0,
    strokeWeight: 2,
        fillColor: defaultColor,
    fillOpacity: defaultOpac
  });
parkhurst.setMap(map);
parkhurst.addListener('mouseover', function(){
parkhurst.setOptions({fillOpacity: hoverOpac, fillColor: hoverColor});
});
parkhurst.addListener('dblclick', function(event) {
				var lat = event.latLng.lat();
				var long = event.latLng.lng();					
				//$("#ag_location_latlng").val();
				$("#ag_location_latlng").val( lat+","+long );
				//alert($("#ag_location_latlng").val());
				map.panTo(event.latLng);
				placeMarker(event.latLng, map);
				geocoder.geocode({'location': {lat: lat, lng: long}}, function(results, status) {
					if (status === google.maps.GeocoderStatus.OK)
					{
						if (results[1])
						{
							$("#ag_location").val( results[1].formatted_address );
$("#ag_room").val("Parkhurst");
location.innerHTML="Parkhurst Hall";                                   
							//alert($("#ag_location").val());
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
parkhurst.addListener('mouseout', function(){
parkhurst.setOptions({fillOpacity: defaultOpac, fillColor: defaultColor});
});
var websterCoords = [
new google.maps.LatLng(43.704338,-72.288384),
new google.maps.LatLng(43.704338,-72.288357),
new google.maps.LatLng(43.704294,-72.288356),
new google.maps.LatLng(43.704294,-72.288295),
new google.maps.LatLng(43.704275,-72.288294),
new google.maps.LatLng(43.704278,-72.288092),
new google.maps.LatLng(43.704294,-72.288091),
new google.maps.LatLng(43.704294,-72.288039),
new google.maps.LatLng(43.704334,-72.288040),
new google.maps.LatLng(43.704335,-72.288018),
new google.maps.LatLng(43.704536,-72.288019),
new google.maps.LatLng(43.704536,-72.288041),
new google.maps.LatLng(43.704580,-72.288042),
new google.maps.LatLng(43.704581,-72.288100),
new google.maps.LatLng(43.704595,-72.288100),
new google.maps.LatLng(43.704596,-72.288128),
new google.maps.LatLng(43.704608,-72.288132),
new google.maps.LatLng(43.704622,-72.288141),
new google.maps.LatLng(43.704640,-72.288164),
new google.maps.LatLng(43.704649,-72.288196),
new google.maps.LatLng(43.704650,-72.288218),
new google.maps.LatLng(43.704645,-72.288247),
new google.maps.LatLng(43.704629,-72.288277),
new google.maps.LatLng(43.704607,-72.288294),
new google.maps.LatLng(43.704595,-72.288296),
new google.maps.LatLng(43.704595,-72.288315),
new google.maps.LatLng(43.704580,-72.288316),
new google.maps.LatLng(43.704581,-72.288364),
new google.maps.LatLng(43.704525,-72.288365),
new google.maps.LatLng(43.704524,-72.288387),
new google.maps.LatLng(43.704338,-72.288384)
];
var webster = new google.maps.Polygon({
    paths: websterCoords,
    strokeColor: '#3E61C3',
    strokeOpacity: 0,
    strokeWeight: 2,
        fillColor: defaultColor,
    fillOpacity: defaultOpac
  });
webster.setMap(map);
webster.addListener('mouseover', function(){
webster.setOptions({fillOpacity: hoverOpac, fillColor: hoverColor});
});
webster.addListener('dblclick', function(event) {
				var lat = event.latLng.lat();
				var long = event.latLng.lng();					
				//$("#ag_location_latlng").val();
				$("#ag_location_latlng").val( lat+","+long );
				//alert($("#ag_location_latlng").val());
				map.panTo(event.latLng);
				placeMarker(event.latLng, map);
				geocoder.geocode({'location': {lat: lat, lng: long}}, function(results, status) {
					if (status === google.maps.GeocoderStatus.OK)
					{
						if (results[1])
						{
							$("#ag_location").val( results[1].formatted_address );
$("#ag_room").val("Webster");
location.innerHTML="Webster Hall";                                   
							//alert($("#ag_location").val());
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
webster.addListener('mouseout', function(){
webster.setOptions({fillOpacity: defaultOpac, fillColor: defaultColor});
});

var reedCoords = [
new google.maps.LatLng(43.702946,-72.287579),
new google.maps.LatLng(43.703235,-72.287576),
new google.maps.LatLng(43.703231,-72.287360),
new google.maps.LatLng(43.702945,-72.287361),
new google.maps.LatLng(43.702946,-72.287579)
];
var reed = new google.maps.Polygon({
    paths: reedCoords,
    strokeColor: '#3E61C3',
    strokeOpacity: 0,
    strokeWeight: 2,
        fillColor: defaultColor,
    fillOpacity: defaultOpac
  });
reed.setMap(map);
reed.addListener('mouseover', function(){
reed.setOptions({fillOpacity: hoverOpac, fillColor: hoverColor});
});
reed.addListener('dblclick', function(event) {
				var lat = event.latLng.lat();
				var long = event.latLng.lng();					
				//$("#ag_location_latlng").val();
				$("#ag_location_latlng").val( lat+","+long );
				//alert($("#ag_location_latlng").val());
				map.panTo(event.latLng);
				placeMarker(event.latLng, map);
				geocoder.geocode({'location': {lat: lat, lng: long}}, function(results, status) {
					if (status === google.maps.GeocoderStatus.OK)
					{
						if (results[1])
						{
							$("#ag_location").val( results[1].formatted_address );
$("#ag_room").val("Reed");
location.innerHTML="Reed Hall";                                   
							//alert($("#ag_location").val());
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
reed.addListener('mouseout', function(){
reed.setOptions({fillOpacity: defaultOpac, fillColor: defaultColor});
});

var thorntonCoords = [
new google.maps.LatLng(43.703301,-72.287250),
new google.maps.LatLng(43.703475,-72.287248),
new google.maps.LatLng(43.703473,-72.286965),
new google.maps.LatLng(43.703299,-72.286968),
new google.maps.LatLng(43.703301,-72.287250)
];
var thornton = new google.maps.Polygon({
    paths: thorntonCoords,
    strokeColor: '#3E61C3',
    strokeOpacity: 0,
    strokeWeight: 2,
        fillColor: defaultColor,
    fillOpacity: defaultOpac
  });
thornton.setMap(map);
thornton.addListener('mouseover', function(){
thornton.setOptions({fillOpacity: hoverOpac, fillColor: hoverColor});
});
thornton.addListener('dblclick', function(event) {
				var lat = event.latLng.lat();
				var long = event.latLng.lng();					
				//$("#ag_location_latlng").val();
				$("#ag_location_latlng").val( lat+","+long );
				//alert($("#ag_location_latlng").val());
				map.panTo(event.latLng);
				placeMarker(event.latLng, map);
				geocoder.geocode({'location': {lat: lat, lng: long}}, function(results, status) {
					if (status === google.maps.GeocoderStatus.OK)
					{
						if (results[1])
						{
							$("#ag_location").val( results[1].formatted_address );
$("#ag_room").val("Thornton");
location.innerHTML="Thornton Hall";                                   
							//alert($("#ag_location").val());
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
thornton.addListener('mouseout', function(){
thornton.setOptions({fillOpacity: defaultOpac, fillColor: defaultColor});
});

var dartmouthHallCoords = [
new google.maps.LatLng(43.703541,-72.287213),
new google.maps.LatLng(43.703659,-72.287212),
new google.maps.LatLng(43.703659,-72.287236),
new google.maps.LatLng(43.703837,-72.287236),
new google.maps.LatLng(43.703838,-72.287210),
new google.maps.LatLng(43.703976,-72.287209),
new google.maps.LatLng(43.703976,-72.286989),
new google.maps.LatLng(43.703828,-72.286989),
new google.maps.LatLng(43.703828,-72.286971),
new google.maps.LatLng(43.703657,-72.286971),
new google.maps.LatLng(43.703658,-72.286991),
new google.maps.LatLng(43.703542,-72.286992),
new google.maps.LatLng(43.703541,-72.287213)
];
var dartmouthHall = new google.maps.Polygon({
    paths: dartmouthHallCoords,
    strokeColor: '#3E61C3',
    strokeOpacity: 0,
    strokeWeight: 2,
        fillColor: defaultColor,
    fillOpacity: defaultOpac
  });
dartmouthHall.setMap(map);
dartmouthHall.addListener('mouseover', function(){
dartmouthHall.setOptions({fillOpacity: hoverOpac, fillColor: hoverColor});
});
dartmouthHall.addListener('dblclick', function(event) {
				var lat = event.latLng.lat();
				var long = event.latLng.lng();					
				//$("#ag_location_latlng").val();
				$("#ag_location_latlng").val( lat+","+long );
				//alert($("#ag_location_latlng").val());
				map.panTo(event.latLng);
				placeMarker(event.latLng, map);
				geocoder.geocode({'location': {lat: lat, lng: long}}, function(results, status) {
					if (status === google.maps.GeocoderStatus.OK)
					{
						if (results[1])
						{
							$("#ag_location").val( results[1].formatted_address );
$("#ag_room").val("Dartmouth Hall");
location.innerHTML="Dartmouth Hall";                                   
							//alert($("#ag_location").val());
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
dartmouthHall.addListener('mouseout', function(){
dartmouthHall.setOptions({fillOpacity: defaultOpac, fillColor: defaultColor});
});
var wentworthCoords = [
new google.maps.LatLng(43.704189,-72.287220),
new google.maps.LatLng(43.704022,-72.287225),
new google.maps.LatLng(43.704019,-72.286959),
new google.maps.LatLng(43.704184,-72.286954),
new google.maps.LatLng(43.704189,-72.287220)
];
var wentworth = new google.maps.Polygon({
    paths: wentworthCoords,
    strokeColor: '#3E61C3',
    strokeOpacity: 0,
    strokeWeight: 2,
        fillColor: defaultColor,
    fillOpacity: defaultOpac
  });
wentworth.setMap(map);
wentworth.addListener('mouseover', function(){
wentworth.setOptions({fillOpacity: hoverOpac, fillColor: hoverColor});
});
wentworth.addListener('dblclick', function(event) {
				var lat = event.latLng.lat();
				var long = event.latLng.lng();					
				//$("#ag_location_latlng").val();
				$("#ag_location_latlng").val( lat+","+long );
				//alert($("#ag_location_latlng").val());
				map.panTo(event.latLng);
				placeMarker(event.latLng, map);
				geocoder.geocode({'location': {lat: lat, lng: long}}, function(results, status) {
					if (status === google.maps.GeocoderStatus.OK)
					{
						if (results[1])
						{
							$("#ag_location").val( results[1].formatted_address );
$("#ag_room").val("Wentworth");
location.innerHTML="Wentworth Hall";                                   
							//alert($("#ag_location").val());
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
wentworth.addListener('mouseout', function(){
wentworth.setOptions({fillOpacity: defaultOpac, fillColor: defaultColor});
});

var southMassCoords = [
new google.maps.LatLng(43.703436,-72.290786),
new google.maps.LatLng(43.703325,-72.290783),
new google.maps.LatLng(43.703331,-72.290452),
new google.maps.LatLng(43.703530,-72.290457),
new google.maps.LatLng(43.703528,-72.290539),
new google.maps.LatLng(43.703535,-72.290539),
new google.maps.LatLng(43.703531,-72.290660),
new google.maps.LatLng(43.703439,-72.290657),
new google.maps.LatLng(43.703436,-72.290786)
];
var southMass = new google.maps.Polygon({
    paths: southMassCoords,
    strokeColor: '#3E61C3',
    strokeOpacity: 0,
    strokeWeight: 2,
        fillColor: defaultColor,
    fillOpacity: defaultOpac
  });
southMass.setMap(map);
southMass.addListener('mouseover', function(){
southMass.setOptions({fillOpacity: hoverOpac, fillColor: hoverColor});
});
southMass.addListener('dblclick', function(event) {
				var lat = event.latLng.lat();
				var long = event.latLng.lng();					
				//$("#ag_location_latlng").val();
				$("#ag_location_latlng").val( lat+","+long );
				//alert($("#ag_location_latlng").val());
				map.panTo(event.latLng);
				placeMarker(event.latLng, map);
				geocoder.geocode({'location': {lat: lat, lng: long}}, function(results, status) {
					if (status === google.maps.GeocoderStatus.OK)
					{
						if (results[1])
						{
							$("#ag_location").val( results[1].formatted_address );
$("#ag_room").val("South Mass");
location.innerHTML="South Massachusetts Hall";                                   
							//alert($("#ag_location").val());
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
southMass.addListener('mouseout', function(){
southMass.setOptions({fillOpacity: defaultOpac, fillColor: defaultColor});
});
var midMassCoords = [
new google.maps.LatLng(43.703627,-72.290700),
new google.maps.LatLng(43.703627,-72.290611),
new google.maps.LatLng(43.703624,-72.290610),
new google.maps.LatLng(43.703626,-72.290491),
new google.maps.LatLng(43.703957,-72.290500),
new google.maps.LatLng(43.703956,-72.290563),
new google.maps.LatLng(43.703959,-72.290563),
new google.maps.LatLng(43.703956,-72.290709),
new google.maps.LatLng(43.703627,-72.290700)
];
var midMass = new google.maps.Polygon({
    paths: midMassCoords,
    strokeColor: '#3E61C3',
    strokeOpacity: 0,
    strokeWeight: 2,
        fillColor: defaultColor,
    fillOpacity: defaultOpac
  });
midMass.setMap(map);
midMass.addListener('mouseover', function(){
midMass.setOptions({fillOpacity: hoverOpac, fillColor: hoverColor});
});
midMass.addListener('dblclick', function(event) {
				var lat = event.latLng.lat();
				var long = event.latLng.lng();					
				//$("#ag_location_latlng").val();
				$("#ag_location_latlng").val( lat+","+long );
				//alert($("#ag_location_latlng").val());
				map.panTo(event.latLng);
				placeMarker(event.latLng, map);
				geocoder.geocode({'location': {lat: lat, lng: long}}, function(results, status) {
					if (status === google.maps.GeocoderStatus.OK)
					{
						if (results[1])
						{
							$("#ag_location").val( results[1].formatted_address );
$("#ag_room").val("Mid Mass");
location.innerHTML="Massachusetts Hall";                                   
							//alert($("#ag_location").val());
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
midMass.addListener('mouseout', function(){
midMass.setOptions({fillOpacity: defaultOpac, fillColor: defaultColor});
});
var norMassCoords = [
new google.maps.LatLng(43.704040,-72.290708),
new google.maps.LatLng(43.704041,-72.290502),
new google.maps.LatLng(43.704234,-72.290506),
new google.maps.LatLng(43.704229,-72.290820),
new google.maps.LatLng(43.704127,-72.290817),
new google.maps.LatLng(43.704128,-72.290711),
new google.maps.LatLng(43.704040,-72.290708)
];
var norMass = new google.maps.Polygon({
    paths: norMassCoords,
    strokeColor: '#3E61C3',
    strokeOpacity: 0,
    strokeWeight: 2,
        fillColor: defaultColor,
    fillOpacity: defaultOpac
  });
norMass.setMap(map);
norMass.addListener('mouseover', function(){
norMass.setOptions({fillOpacity: hoverOpac, fillColor: hoverColor});
});
norMass.addListener('dblclick', function(event) {
				var lat = event.latLng.lat();
				var long = event.latLng.lng();					
				//$("#ag_location_latlng").val();
				$("#ag_location_latlng").val( lat+","+long );
				//alert($("#ag_location_latlng").val());
				map.panTo(event.latLng);
				placeMarker(event.latLng, map);
				geocoder.geocode({'location': {lat: lat, lng: long}}, function(results, status) {
					if (status === google.maps.GeocoderStatus.OK)
					{
						if (results[1])
						{
							$("#ag_location").val( results[1].formatted_address );
$("#ag_room").val("North Mass");
location.innerHTML="North Massachusetts Hall";                                   
							//alert($("#ag_location").val());
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
norMass.addListener('mouseout', function(){
norMass.setOptions({fillOpacity: defaultOpac, fillColor: defaultColor});
});
var bluntCoords = [
new google.maps.LatLng(43.704597,-72.290292),
new google.maps.LatLng(43.704599,-72.290218),
new google.maps.LatLng(43.704531,-72.290215),
new google.maps.LatLng(43.704532,-72.290116),
new google.maps.LatLng(43.704546,-72.290116),
new google.maps.LatLng(43.704546,-72.290093),
new google.maps.LatLng(43.704600,-72.290094),
new google.maps.LatLng(43.704676,-72.289993),
new google.maps.LatLng(43.704678,-72.289912),
new google.maps.LatLng(43.704658,-72.289912),
new google.maps.LatLng(43.704661,-72.289746),
new google.maps.LatLng(43.704682,-72.289747),
new google.maps.LatLng(43.704683,-72.289714),
new google.maps.LatLng(43.704775,-72.289718),
new google.maps.LatLng(43.704774,-72.289752),
new google.maps.LatLng(43.704794,-72.289753),
new google.maps.LatLng(43.704791,-72.289914),
new google.maps.LatLng(43.704770,-72.289913),
new google.maps.LatLng(43.704769,-72.289959),
new google.maps.LatLng(43.704834,-72.289963),
new google.maps.LatLng(43.704832,-72.290063),
new google.maps.LatLng(43.704818,-72.290063),
new google.maps.LatLng(43.704817,-72.290095),
new google.maps.LatLng(43.704744,-72.290091),
new google.maps.LatLng(43.704698,-72.290154),
new google.maps.LatLng(43.704693,-72.290269),
new google.maps.LatLng(43.704666,-72.290269),
new google.maps.LatLng(43.704666,-72.290294),
new google.maps.LatLng(43.704597,-72.290292)
];
var blunt = new google.maps.Polygon({
    paths: bluntCoords,
    strokeColor: '#3E61C3',
    strokeOpacity: 0,
    strokeWeight: 2,
        fillColor: defaultColor,
    fillOpacity: defaultOpac
  });
blunt.setMap(map);
blunt.addListener('mouseover', function(){
blunt.setOptions({fillOpacity: hoverOpac, fillColor: hoverColor});
});
blunt.addListener('dblclick', function(event) {
				var lat = event.latLng.lat();
				var long = event.latLng.lng();					
				//$("#ag_location_latlng").val();
				$("#ag_location_latlng").val( lat+","+long );
				//alert($("#ag_location_latlng").val());
				map.panTo(event.latLng);
				placeMarker(event.latLng, map);
				geocoder.geocode({'location': {lat: lat, lng: long}}, function(results, status) {
					if (status === google.maps.GeocoderStatus.OK)
					{
						if (results[1])
						{
							$("#ag_location").val( results[1].formatted_address );
$("#ag_room").val("Blunt");
location.innerHTML="Blunt Alumni Center";                                   
							//alert($("#ag_location").val());
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
blunt.addListener('mouseout', function(){
blunt.setOptions({fillOpacity: defaultOpac, fillColor: defaultColor});
});
var silsbyCoords = [
new google.maps.LatLng(43.705348,-72.290329),
new google.maps.LatLng(43.705350,-72.290141),
new google.maps.LatLng(43.705337,-72.290140),
new google.maps.LatLng(43.705338,-72.290015),
new google.maps.LatLng(43.705349,-72.290015),
new google.maps.LatLng(43.705351,-72.289836),
new google.maps.LatLng(43.705482,-72.289840),
new google.maps.LatLng(43.705481,-72.289988),
new google.maps.LatLng(43.705498,-72.289989),
new google.maps.LatLng(43.705498,-72.289948),
new google.maps.LatLng(43.705707,-72.289954),
new google.maps.LatLng(43.705707,-72.290006),
new google.maps.LatLng(43.705725,-72.290006),
new google.maps.LatLng(43.705728,-72.289822),
new google.maps.LatLng(43.705856,-72.289825),
new google.maps.LatLng(43.705845,-72.290576),
new google.maps.LatLng(43.705709,-72.290571),
new google.maps.LatLng(43.705715,-72.290192),
new google.maps.LatLng(43.705477,-72.290185),
new google.maps.LatLng(43.705475,-72.290333),
new google.maps.LatLng(43.705348,-72.290329)
];
var silsby = new google.maps.Polygon({
    paths: silsbyCoords,
    strokeColor: '#3E61C3',
    strokeOpacity: 0,
    strokeWeight: 2,
        fillColor: defaultColor,
    fillOpacity: defaultOpac
  });
silsby.setMap(map);
silsby.addListener('mouseover', function(){
silsby.setOptions({fillOpacity: hoverOpac, fillColor: hoverColor});
});
silsby.addListener('dblclick', function(event) {
				var lat = event.latLng.lat();
				var long = event.latLng.lng();					
				//$("#ag_location_latlng").val();
				$("#ag_location_latlng").val( lat+","+long );
				//alert($("#ag_location_latlng").val());
				map.panTo(event.latLng);
				placeMarker(event.latLng, map);
				geocoder.geocode({'location': {lat: lat, lng: long}}, function(results, status) {
					if (status === google.maps.GeocoderStatus.OK)
					{
						if (results[1])
						{
							$("#ag_location").val( results[1].formatted_address );
$("#ag_room").val("Silsby");
location.innerHTML="Silsby Hall";                                   
							//alert($("#ag_location").val());
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
silsby.addListener('mouseout', function(){
silsby.setOptions({fillOpacity: defaultOpac, fillColor: defaultColor});
});
var rollinsCoords = [
new google.maps.LatLng(43.704309,-72.287420),
new google.maps.LatLng(43.704376,-72.287420),
new google.maps.LatLng(43.704376,-72.287449),
new google.maps.LatLng(43.704370,-72.287449),
new google.maps.LatLng(43.704368,-72.287509),
new google.maps.LatLng(43.704416,-72.287510),
new google.maps.LatLng(43.704416,-72.287500),
new google.maps.LatLng(43.704540,-72.287501),
new google.maps.LatLng(43.704541,-72.287459),
new google.maps.LatLng(43.704572,-72.287459),
new google.maps.LatLng(43.704573,-72.287414),
new google.maps.LatLng(43.704630,-72.287415),
new google.maps.LatLng(43.704633,-72.287237),
new google.maps.LatLng(43.704573,-72.287235),
new google.maps.LatLng(43.704574,-72.287105),
new google.maps.LatLng(43.704530,-72.287102),
new google.maps.LatLng(43.704530,-72.287050),
new google.maps.LatLng(43.704530,-72.287038),
new google.maps.LatLng(43.704525,-72.287019),
new google.maps.LatLng(43.704513,-72.287000),
new google.maps.LatLng(43.704498,-72.286984),
new google.maps.LatLng(43.704483,-72.286976),
new google.maps.LatLng(43.704466,-72.286973),
new google.maps.LatLng(43.704450,-72.286979),
new google.maps.LatLng(43.704442,-72.286985),
new google.maps.LatLng(43.704432,-72.286997),
new google.maps.LatLng(43.704424,-72.287007),
new google.maps.LatLng(43.704416,-72.287029),
new google.maps.LatLng(43.704411,-72.287054),
new google.maps.LatLng(43.704411,-72.287104),
new google.maps.LatLng(43.704360,-72.287104),
new google.maps.LatLng(43.704360,-72.287247),
new google.maps.LatLng(43.704307,-72.287248),
new google.maps.LatLng(43.704309,-72.287420)
];
var rollins = new google.maps.Polygon({
    paths: rollinsCoords,
    strokeColor: '#3E61C3',
    strokeOpacity: 0,
    strokeWeight: 2,
        fillColor: defaultColor,
    fillOpacity: defaultOpac
  });
rollins.setMap(map);
rollins.addListener('mouseover', function(){
rollins.setOptions({fillOpacity: hoverOpac, fillColor: hoverColor});
});
rollins.addListener('dblclick', function(event) {
				var lat = event.latLng.lat();
				var long = event.latLng.lng();					
				//$("#ag_location_latlng").val();
				$("#ag_location_latlng").val( lat+","+long );
				//alert($("#ag_location_latlng").val());
				map.panTo(event.latLng);
				placeMarker(event.latLng, map);
				geocoder.geocode({'location': {lat: lat, lng: long}}, function(results, status) {
					if (status === google.maps.GeocoderStatus.OK)
					{
						if (results[1])
						{
							$("#ag_location").val( results[1].formatted_address );
$("#ag_room").val("Rollins");
location.innerHTML="Rollins Chapel";                                   
							//alert($("#ag_location").val());
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
rollins.addListener('mouseout', function(){
rollins.setOptions({fillOpacity: defaultOpac, fillColor: defaultColor});
});
var wheelerCoords = [
new google.maps.LatLng(43.705005,-72.287564),
new google.maps.LatLng(43.704989,-72.287567),
new google.maps.LatLng(43.704980,-72.287447),
new google.maps.LatLng(43.704998,-72.287445),
new google.maps.LatLng(43.704982,-72.287211),
new google.maps.LatLng(43.704968,-72.287212),
new google.maps.LatLng(43.704958,-72.287084),
new google.maps.LatLng(43.704993,-72.287079),
new google.maps.LatLng(43.704991,-72.287063),
new google.maps.LatLng(43.705085,-72.287052),
new google.maps.LatLng(43.705086,-72.287068),
new google.maps.LatLng(43.705123,-72.287063),
new google.maps.LatLng(43.705131,-72.287197),
new google.maps.LatLng(43.705118,-72.287199),
new google.maps.LatLng(43.705132,-72.287427),
new google.maps.LatLng(43.705147,-72.287426),
new google.maps.LatLng(43.705155,-72.287547),
new google.maps.LatLng(43.705136,-72.287550),
new google.maps.LatLng(43.705137,-72.287574),
new google.maps.LatLng(43.705007,-72.287590),
new google.maps.LatLng(43.705005,-72.287564)
];
var wheeler = new google.maps.Polygon({
    paths: wheelerCoords,
    strokeColor: '#3E61C3',
    strokeOpacity: 0,
    strokeWeight: 2,
        fillColor: defaultColor,
    fillOpacity: defaultOpac
  });
wheeler.setMap(map);
wheeler.addListener('mouseover', function(){
wheeler.setOptions({fillOpacity: hoverOpac, fillColor: hoverColor});
});
wheeler.addListener('dblclick', function(event) {
				var lat = event.latLng.lat();
				var long = event.latLng.lng();					
				//$("#ag_location_latlng").val();
				$("#ag_location_latlng").val( lat+","+long );
				//alert($("#ag_location_latlng").val());
				map.panTo(event.latLng);
				placeMarker(event.latLng, map);
				geocoder.geocode({'location': {lat: lat, lng: long}}, function(results, status) {
					if (status === google.maps.GeocoderStatus.OK)
					{
						if (results[1])
						{
							$("#ag_location").val( results[1].formatted_address );
$("#ag_room").val("Wheeler");
location.innerHTML="Wheeler Hall";                                   
							//alert($("#ag_location").val());
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
wheeler.addListener('mouseout', function(){
wheeler.setOptions({fillOpacity: defaultOpac, fillColor: defaultColor});
});
var hitchcockCoords = [
new google.maps.LatLng(43.704828,-72.290905),
new google.maps.LatLng(43.704691,-72.290899),
new google.maps.LatLng(43.704695,-72.290753),
new google.maps.LatLng(43.704653,-72.290750),
new google.maps.LatLng(43.704653,-72.290672),
new google.maps.LatLng(43.704556,-72.290667),
new google.maps.LatLng(43.704559,-72.290531),
new google.maps.LatLng(43.704836,-72.290544),
new google.maps.LatLng(43.704828,-72.290905)
];
var hitchcock = new google.maps.Polygon({
    paths: hitchcockCoords,
    strokeColor: '#3E61C3',
    strokeOpacity: 0,
    strokeWeight: 2,
        fillColor: defaultColor,
    fillOpacity: defaultOpac
  });
hitchcock.setMap(map);
hitchcock.addListener('mouseover', function(){
hitchcock.setOptions({fillOpacity: hoverOpac, fillColor: hoverColor});
});
hitchcock.addListener('dblclick', function(event) {
				var lat = event.latLng.lat();
				var long = event.latLng.lng();					
				//$("#ag_location_latlng").val();
				$("#ag_location_latlng").val( lat+","+long );
				//alert($("#ag_location_latlng").val());
				map.panTo(event.latLng);
				placeMarker(event.latLng, map);
				geocoder.geocode({'location': {lat: lat, lng: long}}, function(results, status) {
					if (status === google.maps.GeocoderStatus.OK)
					{
						if (results[1])
						{
							$("#ag_location").val( results[1].formatted_address );
$("#ag_room").val("Hitchcock");
location.innerHTML="Hitchcock Hall";                                   
							//alert($("#ag_location").val());
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
hitchcock.addListener('mouseout', function(){
hitchcock.setOptions({fillOpacity: defaultOpac, fillColor: defaultColor});
});

var gileCoords = [
new google.maps.LatLng(43.704807,-72.291410),
new google.maps.LatLng(43.704527,-72.291410),
new google.maps.LatLng(43.704529,-72.291251),
new google.maps.LatLng(43.704691,-72.291253),
new google.maps.LatLng(43.704693,-72.291064),
new google.maps.LatLng(43.704810,-72.291065)
];
var gile = new google.maps.Polygon({
    paths: gileCoords,
    strokeColor: '#3E61C3',
    strokeOpacity: 0,
    strokeWeight: 2,
        fillColor: defaultColor,
    fillOpacity: defaultOpac
  });
gile.setMap(map);
gile.addListener('mouseover', function(){
gile.setOptions({fillOpacity: hoverOpac, fillColor: hoverColor});
});
gile.addListener('dblclick', function(event) {
				var lat = event.latLng.lat();
				var long = event.latLng.lng();					
				//$("#ag_location_latlng").val();
				$("#ag_location_latlng").val( lat+","+long );
				//alert($("#ag_location_latlng").val());
				map.panTo(event.latLng);
				placeMarker(event.latLng, map);
				geocoder.geocode({'location': {lat: lat, lng: long}}, function(results, status) {
					if (status === google.maps.GeocoderStatus.OK)
					{
						if (results[1])
						{
							$("#ag_location").val( results[1].formatted_address );
$("#ag_room").val("Gile");
location.innerHTML="Gile Hall";                                   
							//alert($("#ag_location").val());
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
gile.addListener('mouseout', function(){
gile.setOptions({fillOpacity: defaultOpac, fillColor: defaultColor});
});
var streeterCoords = [
new google.maps.LatLng(43.704713,-72.291528),
new google.maps.LatLng(43.704581,-72.291523),
new google.maps.LatLng(43.704578,-72.291927),
new google.maps.LatLng(43.704710,-72.291928),
new google.maps.LatLng(43.704713,-72.291528)
];
var streeter = new google.maps.Polygon({
    paths: streeterCoords,
    strokeColor: '#3E61C3',
    strokeOpacity: 0,
    strokeWeight: 2,
        fillColor: defaultColor,
    fillOpacity: defaultOpac
  });
streeter.setMap(map);
streeter.addListener('mouseover', function(){
streeter.setOptions({fillOpacity: hoverOpac, fillColor: hoverColor});
});
streeter.addListener('dblclick', function(event) {
				var lat = event.latLng.lat();
				var long = event.latLng.lng();					
				//$("#ag_location_latlng").val();
				$("#ag_location_latlng").val( lat+","+long );
				//alert($("#ag_location_latlng").val());
				map.panTo(event.latLng);
				placeMarker(event.latLng, map);
				geocoder.geocode({'location': {lat: lat, lng: long}}, function(results, status) {
					if (status === google.maps.GeocoderStatus.OK)
					{
						if (results[1])
						{
							$("#ag_location").val( results[1].formatted_address );
$("#ag_room").val("Streeter");
location.innerHTML="Streeter Hall";                                   
							//alert($("#ag_location").val());
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
streeter.addListener('mouseout', function(){
streeter.setOptions({fillOpacity: defaultOpac, fillColor: defaultColor});
});
var lordCoords = [
new google.maps.LatLng(43.704520,-72.292023),
new google.maps.LatLng(43.704788,-72.292031),
new google.maps.LatLng(43.704786,-72.292200),
new google.maps.LatLng(43.704518,-72.292194),
new google.maps.LatLng(43.704520,-72.292023)
];
var lord = new google.maps.Polygon({
    paths: lordCoords,
    strokeColor: '#3E61C3',
    strokeOpacity: 0,
    strokeWeight: 2,
    fillColor: defaultColor,
    fillOpacity: defaultOpac
  });
lord.setMap(map);
lord.addListener('mouseover', function(){
lord.setOptions({fillOpacity: hoverOpac, fillColor: hoverColor});
});
lord.addListener('dblclick', function(event) {
				var lat = event.latLng.lat();
				var long = event.latLng.lng();					
				//$("#ag_location_latlng").val();
				$("#ag_location_latlng").val( lat+","+long );
				//alert($("#ag_location_latlng").val());
				map.panTo(event.latLng);
				placeMarker(event.latLng, map);
				geocoder.geocode({'location': {lat: lat, lng: long}}, function(results, status) {
					if (status === google.maps.GeocoderStatus.OK)
					{
						if (results[1])
						{
							$("#ag_location").val( results[1].formatted_address );
$("#ag_room").val("Lord");
location.innerHTML="Lord Hall";                                   
							//alert($("#ag_location").val());
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
lord.addListener('mouseout', function(){
lord.setOptions({fillOpacity: defaultOpac, fillColor: defaultColor});
});
var cur_user_id=$("#user-id-table tr td").text();

			$("#available-groups-table tr").each(function(index){
				var group_id = $(this).attr('id');
				var latlng = $(this).find('.latlng').text().split(',');
				var myLatLng = {lat: parseFloat( latlng[0] ), lng: parseFloat( latlng[1] )};
				var address = $(this).find('.location').text();
				var class_id = $(this).find('.class_id').text();
				var class_number = $(this).find('.class_number').text();
var date= $(this).find('.on_date').text();
var group_leader= $(this).find('.user_id').text();
var endTime= $(this).find('.end_time').text();			
var iconIndex = $("#user-classes li."+class_id + "_" + class_number).index() + 1;

today=new Date();
group_date=new Date(date+" "+endTime);

		                
if(iconIndex!=0 && today<group_date){
if(cur_user_id==group_leader){
var imgTag='-leader.png';
}
else{
var imgTag='.png';
}
				var marker = new google.maps.Marker({
					position: myLatLng,
					map: map,
					title: address,
optimized: false,
zIndex: 5,
					icon: {
	url: 'images/class-'+class_id+'-marker'+imgTag,
	scaledSize: new google.maps.Size(50,50),
	origin: new google.maps.Point(0,0),
	anchor: new google.maps.Point(25,25)
},
					my_group_id: group_id,
tag: imgTag
     			});
     			        
				markers.push( marker );
				marker.addListener('mouseout', function() {
					if(curr_sel_marker!=marker){
						marker.setIcon({
	url: 'images/class-'+class_id+'-marker'+marker.tag,
	scaledSize: new google.maps.Size(50,50),
	origin: new google.maps.Point(0,0),
	anchor: new google.maps.Point(25,25)
});
marker.setZIndex(5);
					}
				});
				marker.addListener('mouseover', function() {
					marker.setIcon({
	url: 'images/class-'+class_id+'-marker-select.png',
	scaledSize: new google.maps.Size(54,54),
	origin: new google.maps.Point(0,0),
	anchor: new google.maps.Point(27,27)
});
marker.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);				});
				marker.addListener('click', function() {
					marker.setIcon({
	url: 'images/class-'+class_id+'-marker-select.png',
	scaledSize: new google.maps.Size(54,54),
	origin: new google.maps.Point(0,0),
	anchor: new google.maps.Point(27,27)
});
marker.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
					if(typeof curr_sel_marker != 'undefined' && curr_sel_marker!=marker){
						curr_sel_marker.setIcon({
	url: 'images/class-'+curr_sel_ind+'-marker'+curr_sel_marker.tag,
	scaledSize: new google.maps.Size(50,50),
	origin: new google.maps.Point(0,0),
	anchor: new google.maps.Point(25,25)
});
curr_sel_marker.setZIndex(5);
					}
					curr_sel_marker=marker;
					curr_sel_ind=class_id;
					var group_id = marker.my_group_id;
					var row = $("#available-groups-table #"+group_id).eq(0);

					//var g_name = row.find('.groupname').text();
					var location = row.find('.location').text();
					var gid = row.find('.group_id').text();
					var class_name = row.find('.class_name').text();
					var t_name = row.find('.topicname').text();
					var on_date = row.find('.on_date').text();
					var time = row.find('.start_time').text() + ' - ' + row.find('.end_time').text();
					
					
					//$("#selected-group-info .gname").text( g_name );
					$("#selected-group-info .location").text( location );
					$("#hiddengroupId").val( gid );
					$("#selected-group-info .class").text( class_name );
					$("#selected-group-info .tname").text( t_name );
					$("#selected-group-info .on_date").text( on_date );
					$("#selected-group-info .start_end_time").text( time );
					
					$(".joingroupbtn a").attr('href', 'join-group.php?group_id='+ group_id.replace('g_', '') );
					$(".joingroupbtn").fadeIn();
					
					$(".moredetailsbtn").show();
					$(".more-details").hide();
					
					//map.setZoom(12);
					map.panTo(marker.getPosition());
					$("#group-details-div").addClass('open');
				});//marker click
				}
				
			});//
			
			var bounds = new google.maps.LatLngBounds();
			for(i=0;i<markers.length;i++) {
				 bounds.extend(markers[i].getPosition());
			}//for			
			//map.fitBounds( strictBounds );

			google.maps.event.addListener(map, 'dblclick', function(event) {
				var lat = event.latLng.lat();
				var long = event.latLng.lng();					
				//$("#ag_location_latlng").val();
				$("#ag_location_latlng").val( lat+","+long );
				//alert($("#ag_location_latlng").val());
				map.panTo(event.latLng);
				placeMarker(event.latLng, map);
				geocoder.geocode({'location': {lat: lat, lng: long}}, function(results, status) {
					if (status === google.maps.GeocoderStatus.OK)
					{
						if (results[1])
						{
							$("#ag_location").val( results[1].formatted_address );
location.innerHTML="Dartmouth College";
							//alert($("#ag_location").val());
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

			
			$("#user-classes input[type=checkbox]").on('change', function(e){
				var cur_classes = [];
				$("#user-classes input:checked").each(function(index){
					var class_id = $(this).parent().attr('class');
					cur_classes.push( class_id );
				});//each
				
				for( var i = 0; i < markers.length; i++ )
				{
					markers[i].setMap( null );
				}//for
				
				$("#available-groups-table tr").each(function(index){
					
					var row_class_id = $(this).find(".class_id").text();
					var row_class_number = $(this).find('.class_number').text();
					
					if( cur_classes.indexOf( row_class_id + "_" + row_class_number) == -1 )
						return;
					
					var group_id = $(this).attr('id');
					var latlng = $(this).find('.latlng').text().split(',');
					var myLatLng = {lat: parseFloat( latlng[0] ), lng: parseFloat( latlng[1] )};
	
					var address = $(this).find('.location').text();
					var class_id = $(this).find('.class_id').text();
					var class_number = $(this).find('.class_number').text();
					var iconIndex = $("#user-classes li."+class_id + "_" + class_number).index() + 1;
var cur_user_id=$("#user-id-table tr td").text();
var date= $(this).find('.on_date').text();
var group_leader= $(this).find('.user_id').text();
var endTime= $(this).find('.end_time').text();						
today=new Date();
group_date=new Date(date+" "+endTime);

		                
if(iconIndex!=0 && today<group_date){
if(cur_user_id==group_leader){
var imgTag='-leader.png';
}
else{
var imgTag='.png';
}
					var marker = new google.maps.Marker({
						position: myLatLng,
						map: map,
						title: address,
optimized: false,
zIndex: 5,						
icon: {
	url: 'images/class-'+class_id+'-marker'+imgTag,
	scaledSize: new google.maps.Size(50,50),
	origin: new google.maps.Point(0,0),
	anchor: new google.maps.Point(25,25)
},
						my_group_id: group_id,
tag: imgTag
					});
					markers.push( marker );
					
					marker.addListener('mouseout', function() {
					if(curr_sel_marker!=marker){
						marker.setIcon({
	url: 'images/class-'+class_id+'-marker'+marker.tag,
	scaledSize: new google.maps.Size(50,50),
	origin: new google.maps.Point(0,0),
	anchor: new google.maps.Point(25,25)
});
marker.setZIndex(5);
					}
				});
				marker.addListener('mouseover', function() {
					marker.setIcon({
	url: 'images/class-'+class_id+'-marker-select.png',
	scaledSize: new google.maps.Size(54,54),
	origin: new google.maps.Point(0,0),
	anchor: new google.maps.Point(27,27)
});
marker.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
				});
				marker.addListener('click', function() {
					marker.setIcon({
	url: 'images/class-'+class_id+'-marker-select.png',
	scaledSize: new google.maps.Size(54,54),
	origin: new google.maps.Point(0,0),
	anchor: new google.maps.Point(27,27)
});
marker.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
					if(typeof curr_sel_marker != 'undefined' && curr_sel_marker!=marker){
						curr_sel_marker.setIcon({
	url: 'images/class-'+curr_sel_ind+'-marker'+curr_sel_marker.tag,
	scaledSize: new google.maps.Size(50,50),
	origin: new google.maps.Point(0,0),
	anchor: new google.maps.Point(25,25)
});
curr_sel_marker.setZIndex(5);

					}
					curr_sel_marker=marker;
					curr_sel_ind=class_id;
					var group_id = marker.my_group_id;
					var row = $("#available-groups-table #"+group_id).eq(0);

					//var g_name = row.find('.groupname').text();
					var location = row.find('.location').text();
					var gid = row.find('.group_id').text();
					var class_name = row.find('.class_name').text();
					var t_name = row.find('.topicname').text();
					var on_date = row.find('.on_date').text();
					var time = row.find('.start_time').text() + ' - ' + row.find('.end_time').text();
					
					
					//$("#selected-group-info .gname").text( g_name );
					$("#selected-group-info .location").text( location );
					$("#hiddengroupId").val( gid );
					$("#selected-group-info .class").text( class_name );
					$("#selected-group-info .tname").text( t_name );
					$("#selected-group-info .on_date").text( on_date );
					$("#selected-group-info .start_end_time").text( time );
					
					$(".joingroupbtn a").attr('href', 'join-group.php?group_id='+ group_id.replace('g_', '') );
					$(".joingroupbtn").fadeIn();
					
					$(".moredetailsbtn").show();
					$(".more-details").hide();
					
					//map.setZoom(12);
					map.panTo(marker.getPosition());
					$("#group-details-div").addClass('open');
				});//marker click
	}
				});//
				
				var bounds = new google.maps.LatLngBounds();
				for(i=0;i<markers.length;i++) {
					 bounds.extend(markers[i].getPosition());
				}//for			
				//map.fitBounds( bounds );
				
				
			});//checkbox change
        }//init
		
		google.maps.event.addDomListener(window, 'load', init);
		//MAP SCRIPT ENDS HERE
		
		$("#group-details-div .close").on('click', function(){
			$("#group-details-div").removeClass('open');
			curr_sel_marker.setIcon({
	url: 'images/class-'+curr_sel_ind+'-marker'+curr_sel_marker.tag,
	scaledSize: new google.maps.Size(50,50),
	origin: new google.maps.Point(0,0),
	anchor: new google.maps.Point(25,25)
});
curr_sel_marker.setZIndex(5);
curr_sel_marker=undefined;
		});
		
		$("#create-group-div .close").on('click', function(){
			$("#create-group-div").removeClass('open');
		});
		
		$("#create-group").on('click', function(e){
			e.preventDefault();
			if($("#ag_location_latlng").val() == ""){
				alert("Whoops! No location chosen yet!");
			}else{
				$("#create-group-div").addClass('open');
				setTimeout( init2, 1000 );
			}
			
		});
		
		
		var geocoder = new google.maps.Geocoder;
	
   
        function init2(){
            var mapOptions = {
                zoom: 15,
                center: new google.maps.LatLng(43.7044406, -72.2886934), // New York
                styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
            };

            // Get the HTML DOM element that will contain your map 
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('map2');

            // Create the Google Map using our element and options defined above
            var map2 = new google.maps.Map(mapElement, mapOptions);
		        
			google.maps.event.addListener(map2, 'dblclick', function(event) {
				var lat = event.latLng.lat();
				var long = event.latLng.lng();					
				$("#ag_location_latlng").val( lat+","+long );

				placeMarker(event.latLng, map2);
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
		
		
		$("#group-details-div .moredetailsbtn a").on('click', function(){
			$(".moredetailsbtn").fadeOut();
			$(".more-details").html("Loading. Please wait...");
			$(".more-details").slideDown();
			$.ajax({
				url: "addgroupajax.php",
				method: "POST",
				data: {'action': 'viewMember', 'groupId' : $("#hiddengroupId").val()}, 
				success: function(result){
					result = $.trim(result);
					$(".more-details").html(result);
		    	}
			});
		});

		

	}//search_group_body_check	
		
});//document ready

 var markersArray = [];
var pointer = {
	url: 'images/smallpointer.png',
	scaledSize: new google.maps.Size(50,50),
	origin: new google.maps.Point(0,0),
	anchor: new google.maps.Point(25,50)
}
function placeMarker(location, mapObj) {
    // first remove all markers if there are any
    deleteOverlays();

    var marker = new google.maps.Marker({
        position: location,
 	icon: pointer,
 	animation: google.maps.Animation.BOUNCE,
 	optimized: false,
zIndex: google.maps.Marker.MAX_ZINDEX + 1,
        map: mapObj
    });
    // add marker in markers array
    markersArray.push(marker);

    //map.setCenter(location);
}

// Deletes all markers in the array by removing references to them
function deleteOverlays() {
    if (markersArray) {
        for (i in markersArray) {
            markersArray[i].setMap(null);
        }
    	markersArray.length = 0;
    }
}

function addGroupValidation()
{
	
	if( $.trim($("#ag_topicname").val()) == "" )
	{
		alert("Please enter a topic name.");
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

	if( $.trim($("#ag_room").val()) == "" )
	{
		alert("Please enter a room.");
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

	$("#ag_submit").text("Processing New Study Group...");
	//$('#ag_submit').attr('disabled','disabled');
	$.ajax({
		url: "addgroupajax.php",
		method: "POST",
		data: $("#addgroupform").serialize(), 
		success: function(result){
			result = $.trim(result);
                        $("#ag_submit").text("Success!");
			window.location.href = "search-group.php";
			//console.log(result);
			//var obj = result;
			//var obj = JSON.parse(result);
			//if(obj.status == "success"){
			//	$("#ag_submit").text("Success!");
			//	window.location.href = "search-group.php";
			//}else{
			//	//$('#ag_submit').removeAttr('disabled');
			//	window.alert(obj.message);
			//	$("#ag_submit").text("Add Group");
			//}
        	
    	}
	});

	return false;
}//addGroupValidation()
function joinGroup(){
	$("#joingroupbtnId").html("Processing. Please wait...");
	$.ajax({
		url: "addgroupajax.php",
		method: "POST",
		data: {'action': 'joinGroup', 'groupId' : $("#hiddengroupId").val()}, 
		success: function(result){
			$.ajax({
				url: "addgroupajax.php",
				method: "POST",
				data: {'action': 'viewMember', 'groupId' : $("#hiddengroupId").val()}, 
				success: function(result){
					result = $.trim(result);
					$(".more-details").html(result);
		    	}
			});
    	}
	});
}

function leftGroup(){
	$("#joingroupbtnId").html("Processing. Please wait...");
	$.ajax({
		url: "addgroupajax.php",
		method: "POST",
		data: {'action': 'leftGroup', 'groupId' : $("#hiddengroupId").val()}, 
		success: function(result){
			$.ajax({
				url: "addgroupajax.php",
				method: "POST",
				data: {'action': 'viewMember', 'groupId' : $("#hiddengroupId").val()}, 
				success: function(result){
					result = $.trim(result);
					$(".more-details").html(result);
		    	}
			});
    	}
	});
}

function deleteGroup(){
	$("#joingroupbtnId").html("Processing. Please wait...");
	$.ajax({
		url: "addgroupajax.php",
		method: "POST",
		data: {'action': 'deleteGroup', 'groupId' : $("#hiddengroupId").val()}, 
		success: function(result){
			$("#joingroupbtnId").html("Success!");
			window.location.href = "search-group.php";
    	}
	});
}

function validateResetForm()
{
	
	if( $.trim($("#rp_password").val()) == "" )
	{
		alert("Please enter a password.");
		$("#rp_password").focus();
		return false;
	}

	if( !strongPassword($.trim($("#rp_password").val())))
	{
		alert("Passwords must contain at least one uppercase, one lowercase, one digit, one special character and can't contain spaces.");
		$("#rp_password").focus();
		return false;
	}

	if( $.trim($("#rp_cpassword").val()) == "" )
	{
		alert("Please confirm your password.");
		$("#rp_cpassword").focus();
		return false;
	}

	if( $.trim($("#rp_cpassword").val()) != $.trim($("#rp_password").val()) )
	{
		alert("Passwords aren't matching. Try re-entering your password.");
		$("#rp_cpassword").focus();
		return false;
	}



	return true;
}//validateResetForm



function validateChangePassword()
{
	
	if( $.trim($("#old_password").val()) == "" )
	{
		alert("Please enter the old password.");
		$("#old_password").focus();
		return false;
	}
	
	if( $.trim($("#new_password").val()) == "" )
	{
		alert("Please enter a new password.");
		$("#new_password").focus();
		return false;
	}

	if( !strongPassword($.trim($("#new_password").val())))
	{
		alert("Passwords must contain at least one uppercase, one lowercase, one digit, one special character and can't contain spaces..");
		$("#new_password").focus();
		return false;
	}

	if( $.trim($("#con_new_password").val()) == "" )
	{
		alert("Please enter confirm your password.");
		$("#con_new_password").focus();
		return false;
	}

	if( $.trim($("#new_password").val()) != $.trim($("#con_new_password").val()) )
	{
		alert("Passwords aren't matching. Try re-entering your password.");
		$("#new_password").focus();
		return false;
	}

	return true;
}//validateChangePassword

function validateContactForm()
{
	
	if( $.trim($("#name").val()) == "" )
	{
		alert("Please enter your name.");
		$("#name").focus();
		return false;
	}
	
	if( $.trim($("#email").val()) == "" )
	{
		alert("Please enter your email address.");
		$(email).focus();
		return false;
	}

	return true;
}//validateContactForm

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

	if( $.trim($("#email").val()).indexOf('@dartmouth.edu') == -1 ){
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
		alert("Passwords must contain at least one uppercase, one lowercase, one digit, one special character and must not contain spaces..");
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
		if( $(this).val() == '' )
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
}//valideRegistrationform

function valideProfileform()
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

	if( $.trim($("#email").val()).indexOf('@dartmouth.edu') == -1 ){
		alert("Please enter a valid Dartmouth email.");
		$("#email").focus();
		return false;
	}
}//valideProfileform



function editGroupValidation()
{
	
	if( $.trim($("#ag_topicname").val()) == "" )
	{
		alert("Please enter a topic name.");
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

	if( $.trim($("#ag_room").val()) == "" )
	{
		alert("Please enter a room.");
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

	$("#ag_submit").text("We are processing. Please wait.. ");
	//$('#ag_submit').attr('disabled','disabled');
	

	$.ajax({
		url: "addgroupajax.php",
		method: "POST",
		data: $("#addgroupform").serialize(), 
		success: function(result){
			result = $.trim(result);
			
			var obj = $.parseJSON(result);
			if(obj.status == "success"){
				$("#ag_submit").text("Success!");

				window.location.href = "editgroup.php?id=" + $("#hdngroupid").val();
			}else{
				//$('#ag_submit').removeAttr('disabled');
				alert(obj.message);
				$("#ag_submit").text("Edit Group");
			}
        	
    	}
	});
	
	return false;
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
	