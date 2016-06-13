//mike.js

$(document).ready(function(){
	
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
	      //set slider section's min-height
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
	if($("#add_group_body #map").length){
		var geocoder = new google.maps.Geocoder;
		
        var curr_sel_marker={};
        var curr_sel_ind={};
        function init(){
        	
        	
            var mapOptions = {
                zoom: 18,
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

            // Get the HTML DOM element that will contain your map 
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('map');

            // Create the Google Map using our element and options defined above
            var map = new google.maps.Map(mapElement, mapOptions);
			if($("#ag_location_latlng").length > 0 && $("#ag_location_latlng").val() != ""){
        		var latlangdata = $("#ag_location_latlng").val();
        		var dataArray = latlangdata.split(",");
        		latLngmarker ={lat: parseFloat(dataArray[0]), lng: parseFloat(dataArray[1])};
        		placeMarker(latLngmarker, map);
        	}
			google.maps.event.addListener(map, 'click', function(event) {
				var lat = event.latLng.lat();
				var long = event.latLng.lng();					
				placeMarker(event.latLng, map);
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
							//{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},
							//{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},
							//{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},
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
			
			$("#available-groups-table tr").each(function(index){
				var group_id = $(this).attr('id');
				var latlng = $(this).find('.latlng').text().split(',');
				var myLatLng = {lat: parseFloat( latlng[0] ), lng: parseFloat( latlng[1] )};
				var address = $(this).find('.location').text();
				var class_id = $(this).find('.class_id').text();
				var class_number = $(this).find('.class_number').text();
				var iconIndex = $("#user-classes li."+class_id + "_" + class_number).index() + 1;

				var marker = new google.maps.Marker({
					position: myLatLng,
					map: map,
					title: address,
					icon: 'images/class-'+iconIndex+'-marker.png',
					my_group_id: group_id
     			});
     				
				markers.push( marker );
				marker.addListener('mouseout', function() {
					if(curr_sel_marker!=marker){
						marker.setIcon('images/class-'+iconIndex+'-marker.png')
					}
				});
				marker.addListener('mouseover', function() {
					marker.setIcon('images/class-'+iconIndex+'-marker-select.png')
				});
				marker.addListener('click', function() {
					marker.setIcon('images/class-'+iconIndex+'-marker-select.png');
					if(typeof curr_sel_marker != 'undefined' && curr_sel_marker!=marker){
						curr_sel_marker.setIcon('images/class-'+curr_sel_ind+'-marker.png');
					}
					curr_sel_marker=marker;
					curr_sel_ind=iconIndex;
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
					
					var marker = new google.maps.Marker({
						position: myLatLng,
						map: map,
						title: address,
						icon: 'images/class-'+iconIndex+'-marker.png',
						my_group_id: group_id
					});
					markers.push( marker );
					
					marker.addListener('click', function() {
						var group_id = marker.my_group_id;
						var row = $("#available-groups-table #"+group_id).eq(0);
	
						var g_name = row.find('.groupname').text();
						var location = row.find('.location').text();
						var gid = row.find('.group_id').text();
						var class_name = row.find('.class_name').text();
						var t_name = row.find('.topicname').text();
						var on_date = row.find('.on_date').text();
						var time = row.find('.start_time').text() + ' - ' + row.find('.end_time').text();
						
						
						//$("#selected-group-info .gname").text( g_name );
						$("#selected-group-info .location").text( location );
						$("#selected-group-info .class").text( class_name );
						$("#hiddengroupId").val( gid );
						$("#selected-group-info .tname").text( t_name );
						$("#selected-group-info .on_date").text( on_date );
						$("#selected-group-info .start_end_time").text( time );
						
						$(".joingroupbtn a").attr('href', 'join-group.php?group_id='+ group_id.replace('g_', '') );
						$(".joingroupbtn").fadeIn();
					
						$(".moredetailsbtn").show();
						$(".more-details").hide();
						
						
						//map.setZoom(12);
						map.setCenter(marker.getPosition());
						$("#group-details-div").addClass('open');
					});//marker click
	
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
			curr_sel_marker.setIcon('images/class-'+curr_sel_ind+'-marker.png');
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
		
			google.maps.event.addListener(map2, 'click', function(event) {
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
	