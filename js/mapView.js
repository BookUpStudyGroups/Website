
function loadMap() {
$('#center-location').focus();

    $('#navigation ul li a').each(function(i, obj){
if (i==1){
$(this).css("background-color","#FFFFFF");
    $(this).css("color","#6CC8E8");
    $(this).css("border-bottom","3px solid #6CC8E8");
   
}
});
if (!Parse.User.current()) {
window.location = "index.php";
}
if (!Parse.User.current()) {
window.location = "index.php";
}
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
        var mapBuildings = Parse.Object.extend("MapBuildings");
        var buildingQuery = new Parse.Query(mapBuildings);
        buildingQuery.limit(1000);
        buildingQuery.find({
        success: function(buildings) {
            for(i=0; i<buildings.length; i++){
                allBuildings.push(buildings[i].get('name'));
                allClusters.push(buildings[i].get('HCommunity'));
                allCoords.push(buildings[i].get('coordinates'));
                allColors.push(buildings[i].get('color'));
            }
            renderMap();
        },
        error: function(object, error) {
            // The object was not retrieved successfully.
            // error is a Parse.Error with an error code and message.
            alert("Error: Courses could not be retrieved.");
            reject("Error: Courses could not be retrieved.");
        }
                           
        });
}


function renderMap(){
    
    
               var location = document.getElementById("center-location");

  markers = [];
       var initGroups = new RSVP.Promise(function(fulfill) {
           var classes = Parse.Object.extend("Class");
           var classQuery = new Parse.Query(classes);

           currentUser = Parse.User.current();
           classQuery.equalTo("students", Parse.User.current());
           classQuery.ascending("department", "number");
           // execute the query
           //classQuery.include("classGroups");
           classQuery.find({
               success: function(results) {
                   if (results.length == 0) {
                       var groupDetails = [];
                       fulfill(groupDetails);
                   }
                   for (var i = 0; i < results.length; i++) {
                       var totClasses = results.length;
                       var checkedClasses = 0;
                       var getClassDetails = new RSVP.Promise(function(fulfill) {
                           var prof = results[i].get("prof");
                           var dep = results[i].get("department");
                           var title = results[i].get("title");
                           var depId = results[i].get("depId");
                           var num = results[i].get("number");
                           var per = results[i].get("period");
                           var groupRelation = results[i].relation("classGroups");
                           var id = results[i].id;
                           $("#ag_class.form-control").append("<option value=" + id + ">" + title + " [" + dep + num + "] </option>");
                           var classDetails = new Array();
                           classDetails.push(prof);
                           classDetails.push(dep);
                           classDetails.push(title);
                           classDetails.push(per);
                           classDetails.push(depId);
                           classDetails.push(groupRelation);

                           classDetails.push(num);
                           classDetails.push(i);
                           classDetails.push(results.length - 1);
                           /*
                           echo '<li class="'.$row['class_id'].'_' . $row['course_num'] . '" data-name="'.$row['class_name'].'">'.'<img margin="0px 10px 0px 0px" width=25 px src="images/class-'.$row['class_id'].'-marker.png">'.
                               			'<span> &nbsp &nbsp'.$row['class_name']. " " . $row['course_num'] . '</span>'.
                               			'<input type="checkbox" checked="checked" />'.
                               			'</li>';*/
                           $("#user-classes ul").append("<li class='" + depId + "_" + num + "' data-name='" + title + "'><input type='checkbox' checked='checked' />&nbsp &nbsp<img class='iconclasses'margin='0px 10px 0px 0px' width=25 px src='images/class-" + depId + "-icon.png'><span>&nbsp &nbsp" + title + "&nbsp &nbsp</span></li>");
                           fulfill(classDetails);
                       });
                       getClassDetails.then(function(classDetails) {
                           
                           var prof = classDetails[0];
                           var dep = classDetails[1];
                           var title = classDetails[2];
                           var per = classDetails[3];
                           var depId = classDetails[4];
                           var groups = classDetails[5];
                           var number = classDetails[6];
                           var currClassIndex = classDetails[7];
                           var classLength = classDetails[8];
                           var groupQuery = groups.query();

                           groupQuery.find({
                               success: function(results) {

                                   // Messages for this group
                                   if (results.length == 0) {
                                       checkedClasses += 1;
                                   }
                                   for (var j = 0; j < results.length; j++) {
                                       var groupId = results[j].id;
                                       var groupName = results[j].get('groupName');
                                       var creator = results[j].get("creator").id;
                                       var location = results[j].get("location");
                                       var latlng = results[j].get("location_latlng");
                                       var startDate = results[j].get("startDate");
                                       var hours = startDate.getHours();
// Minutes part from the timestamp
var minutes = "0" + startDate.getMinutes();
                                       var startTime = hours + ':' + minutes.substr(-2);
                                       var endDate = results[j].get("endDate")
                                                                              var hours = endDate.getHours();
// Minutes part from the timestamp
var minutes = "0" + endDate.getMinutes();
                                       var endTime = hours + ':' + minutes.substr(-2);
                                       var groupLength = results.length - 1;
                                       var numStudents = results[j].get("numStudents");
                                       var groupSize = results[j].get("groupSize");
                                       
                                       var membersList = results[j].get('members');
                                       //alert(typeof(membersList));
                                       //alert(membersList.length);
                                       // Group checker to make sure there is space
                                       if (numStudents<groupSize){
                                       $("#available-groups-table>tbody").append("<tr id='" + groupId + "'><td class='topicname'>" + groupName + "</td><td class='class_id'>" + depId + "</td><td class='group_id'>" + groupId + "</td><td class='class_name'>" + title + "</td><td class='class_number'>" + number + "</td><td class='user_id'>" + creator + "</td><td class='location'>" + location + "</td><td class='latlng'>" + latlng + "</td><td class='on_date'>" + startDate + "</td><td class='room'>" + location + "</td><td class='start_time'>" + startTime + "</td><td class='end_time'>" + endTime + "</td><td class='size'>" + groupSize+ "</td><td class='nummembers'>" + numStudents + "</td></tr>");
                                       }
                                       if (j == groupLength) {
                                           checkedClasses += 1;
                                           if (checkedClasses == totClasses) {
                                               var groupDetails = "All Groups Loaded";
                                               fulfill(groupDetails);
                                               return;
                                           }
                                       }
                                   }
                                   if (checkedClasses == totClasses) {
                                               var groupDetails = "All Groups Loaded";
                                               fulfill(groupDetails);
                                       return;
                                           }

                               }, //success
                               error: function(results, error) {
                                   alert("Didn't make it");
                               }
                           }); //groupQuery
                       }); //getClassDetails promise
                       //for



                   }
               },
               error: function(results, error) {
                   alert("this isn't working");
               }
           });
       });
       initGroups.then(function(groupDetails) {
           init();

       });
       $(window).on('load resize', function() {
           var winHeight = $(window).height();
           var winWidth = $(window).width();
           $("#map-container").css("maxWidth", winWidth);
           $("#map-container").css("maxHeight", winHeight);

           $("#map").css("maxWidth", winWidth);
           $("#map").css("maxHeight", winHeight);

           $("#map-container").css("minWidth", winWidth);
           $("#map-container").css("minHeight", winHeight);

           $("#map").css("minWidth", winWidth);
           $("#map").css("minHeight", winHeight);

       }); //window load or resize



       var geocoder = new google.maps.Geocoder;


       function init() {
           var strictBounds = new google.maps.LatLngBounds(
               new google.maps.LatLng(43.700097, -72.297528),
               new google.maps.LatLng(43.709869, -72.279739)
           );

           var mapOptions = {

               disableDoubleClickZoom: true,
               zoom: 18,
               maxZoom: 19,
               minZoom: 16,
               center: new google.maps.LatLng(43.704472, -72.288951), // New York
               mapTypeId: google.maps.MapTypeId.TERRAIN,
               mapTypeControl: false,
               zoomControl: false,
               streetViewControl: false,
               bounds: strictBounds,
               styles: [

                   {
                       "featureType": "landscape.man_made",
                       "elementType": "geometry",
                       "stylers": [{
                           "color": "#cfdae6"
                       }, {
                           "weight": 0.85
                       }, {
                           "hue": "#dadfe3"
                       }, {
                           "gamma": 1.1
                       }]
                   }, {
                       "elementType": "labels.text.stroke",
                       "stylers": [{
                           "visibility": "off"
                       }, {
                           "color": "#1F2121"
                       }, {
                           "lightness": 16
                       }]
                   }, {
                       "elementType": "labels.text.fill",
                       "stylers": [{
                           visibility: "off"
                       }, {
                           "saturation": 36
                       }, {
                           "color": "#9E9CA9"
                       }, {
                           "lightness": 40
                       }]
                   }, {
                       "featureType": "road",
                       "elementType": "labels.text.stroke",
                       "stylers": [{
                           "visibility": "off"
                       }, {
                           "color": "#1F2121"
                       }, {
                           "lightness": 16
                       }]
                   }, {
                       "featureType": "road",
                       "elementType": "labels.text.fill",
                       "stylers": [{
                           visibility: "on"
                       }, {
                           "color": "#000000"
                       }]
                   }, {
                       "featureType": "poi.medical",
                       "elementType": "geometry.fill",
                       "stylers": [{
                           "color": "#cfdae6"
                       }]
                   }, {
                       "featureType": "poi.park",
                       "elementType": "geometry",
                       "stylers": [{
                           "color": "#cfdae6"
                       }]
                   }, {
                       "featureType": "poi.business",
                       "elementType": "geometry",
                       "stylers": [{
                           "color": "#cfdae6"
                       }]
                   }, {
                       "featureType": "poi.place_of_worship",
                       "elementType": "geometry",
                       "stylers": [{
                           "color": "#cfdae6"
                       }]
                   }, {
                       "featureType": "poi.school",
                       "elementType": "geometry",
                       "stylers": [{
                           "color": "#cfdae6"
                       }]
                   }, {
                       "featureType": "transit.line",
                       "elementType": "geometry.fill",
                       "stylers": [{
                           "color": "#ff9d4c"
                       }]
                   }, {
                       "featureType": "poi.attraction",
                       "elementType": "geometry",
                       "stylers": [{
                           "color": "#cfdae6"
                       }]
                   }, {
                       "featureType": "road.highway.controlled_access",
                       "elementType": "geometry",
                       "stylers": [{
                           "color": "#778bbd"
                       }]
                   }, {
                       "featureType": "road.highway",
                       "elementType": "geometry.fill",
                       "stylers": [{
                           "color": "#4a90e6"
                       }]
                   }, {
                       "featureType": "road.highway",
                       "elementType": "geometry",
                       "stylers": [{
                           "color": "#4b98db"
                       }, {
                           "weight": 1.34
                       }]
                   }, {
                       "featureType": "water",
                       "elementType": "geometry",
                       "stylers": [{
                           "color": "#0061a1"
                       }]
                   }, {
                       "featureType": "poi.sports_complex",
                       "elementType": "geometry",
                       "stylers": [{
                           "color": "#cfdae6"
                       }]
                   }, {
                       "featureType": "poi",
                       "elementType": "all",
                       "stylers": [{
                           "color": "#cfdae6"
                       }]
                   }, {
                       "featureType": "administrative.province",
                       "elementType": "all",
                       "stylers": [{
                           "color": "#cfdae6"
                       }]
                   }, {
                       "featureType": "transit.station.bus",
                       "elementType": "all",
                       "stylers": [{
                           "visibility": "on"
                       }]
                   }, {
                       "featureType": "transit.station.rail",
                       "elementType": "labels.text",
                       "stylers": [{
                           "color": "#005082"
                       }, {
                           "weight": 0.48
                       }]
                   }, {
                       "featureType": "transit.station.rail",
                       "elementType": "labels.icon",
                       "stylers": [{
                           "hue": "#005082"
                       }, {
                           "saturation": 14
                       }]
                   }, {
                       "featureType": "road.local",
                       "elementType": "geometry.stroke",
                       "stylers": [{
                           "color": "#4a90e6"
                       }]
                   }
                  
                   , {
                       "featureType": "poi",
                       "elementType": "geometry",
                       "stylers": [{
                           "color": "#0c4152"
                       }, {
                           "lightness": 5
                       }]
                   }, {
                       "featureType": "road.highway",
                       "elementType": "geometry.fill",
                       "stylers": [{
                           "color": "#000000"
                       }]
                   }, {
                       "featureType": "road.highway",
                       "elementType": "geometry.stroke",
                       "stylers": [{
                           "color": "#0b434f"
                       }, {
                           "lightness": 25
                       }]
                   }, {
                       "featureType": "road.arterial",
                       "elementType": "geometry.fill",
                       "stylers": [{
                           "color": "#000000"
                       }]
                   }, {
                       "featureType": "road.arterial",
                       "elementType": "geometry.stroke",
                       "stylers": [{
                           "color": "#0b3d51"
                       }, {
                           "lightness": 16
                       }]
                   }, {
                       "featureType": "road.local",
                       "elementType": "geometry",
                       "stylers": [{
                           "color": "#000000"
                       }]
                   }, {
                       "featureType": "transit",
                       "elementType": "all",
                       "stylers": [{
                           "color": "#146474"
                       }]
                   }, {
                       "featureType": "water",
                       "elementType": "all",
                       "stylers": [{
                           "color": "#021019"
                       }]
                   }, {
                       "elementType": "labels.icon",
                       "stylers": [{
                           "visibility": "off"
                       }]
                   }, {
                       "elementType": "labels.text.stroke",
                       "stylers": [{
                           "visibility": "off"
                       }, {
                           "color": "#1F2121"
                       }, {
                           "lightness": 16
                       }]
                   }, {
                       "elementType": "labels.text.fill",
                       "stylers": [{
                           visibility: "off"
                       }, {
                           "saturation": 36
                       }, {
                           "color": "#9E9CA9"
                       }, {
                           "lightness": 40
                       }]
                   }, {
                       "featureType": "road",
                       "elementType": "labels.text.stroke",
                       "stylers": [{
                           "visibility": "on"
                       }, {
                           "color": "#1F2121"
                       }, {
                           "lightness": 16
                       }]
                   }, {
                       "featureType": "road",
                       "elementType": "labels.text.fill",
                       "stylers": [{
                           visibility: "on"
                       }, {
                           "saturation": 36
                       }, {
                           "color": "#FFFFFF"
                       }, {
                           "lightness": 40
                       }]
                   }


               ]
           };


           // Get the HTML DOM element that will contain your map 
           // We are using a div with id="map" seen below in the <body>
           var mapElement = document.getElementById('map');

           // Create the Google Map using our element and options defined above
           var map = new google.maps.Map(mapElement, mapOptions);
           var location = document.getElementById("center-location");
       
           var defaultColor = '#009859';
           var hoverColor = '#006633';
           var defaultOpac = 1.0;
           var hoverOpac = 0.5;
           var defaultStrokeOpac = 0.9;
           var defaultStrokeWeight = 1.0;
           var defaultStrokeColor = '#00351F';
           var hoverStrokeOpac = 0.9;
           var hoverStrokeWeight = 3.0;
           var hoverStrokeColor = '#00FF7F';
           var myCoordinates = [
               new google.maps.LatLng(44.040219, -73.114014),
               new google.maps.LatLng(42.382894, -73.278809),
               new google.maps.LatLng(42.625876, -70.993652),
               new google.maps.LatLng(44.527843, -71.235352),
               new google.maps.LatLng(44.040219, -73.114014)
           ];
           var polyOptions = {
               path: myCoordinates,
               strokeColor: "#FF0000",
               strokeOpacity: 1,
               strokeWeight: 0,
               fillColor: "#D3D3D3",
               fillOpacity: 0.2
           }
           var it = new google.maps.Polygon(polyOptions);
           //it.setMap(map);

           var buildings = [];
           var buildingFullNames = []
           var buildingNames = allBuildings;
           for (var i=0; i < buildingNames.length; i++){
                if (allClusters[i]){
                    clusterName = toTitleCase(allClusters[i]);
                    buildingFullNames.push(buildingNames[i]+' - '+clusterName+' Cluster');
                }else{
                    buildingFullNames.push(buildingNames[i]);
                }
                console.log(buildingFullNames[i]);
           }
           var polys = allCoords;
           var i, tmp;
            
            
           $('#center-location').autocomplete({
               source: buildingFullNames,
               select: function( event, ui ) {
                map.panTo(buildingLocationDict[ui.item.value]);
                placeMarker(buildingLocationDict[ui.item.value], map);
               }
           });

           /*
           $(".rss-items li").each(function(index){
           var rssInfo=this.innerHTML;
           var rssArray=rssInfo.split("Location:");
           var rssLocation=rssArray[1];

           var maxScore=0;
           var maxIndex=0;
           for(var i=0; i<buildingNames.length; i++){
           var score=lcs(rssLocation,buildingNames[i])
            if(score>maxScore){
           maxScore=score;
           maxIndex=i;
           }
           }

           alert(rssLocation);

           });
           */
           var shadows = new Array();
           var floors = new Array();
           var testCoords = new Array();
           var buildingLocationDict = {};
           buildings = parsePolyStrings(polys, 0.00005, 0);
           for (var i = 0; i < buildings.length; i++){
            buildingLocationDict[buildingFullNames[i]]=buildings[i][0];
           }
           
           testCoords = coordPolyStrings(polys);
           shadows = parsePolyStrings(polys, 0.000075, -0.000025);
           
           floors = parsePolyStrings(polys, 0, 0);
          
           var curr_sel_building;
           var colorsBuildings = [];
           for (var i = 0; i < allColors.length; i++) {
               if(!allColors[i]){
                   colorsBuildings.push(defaultColor);
               }else{
                   colorsBuildings.push(allColors[i]);
               }
           }
           for (var i = 0; i < buildings.length; i++) {
               
               var test = drawExcrudedShape(map, testCoords[i], -0.00005, defaultStrokeColor, defaultStrokeOpac, 0.3, "#EBEFF9", 1.0);
               
               

               var shadow = new google.maps.Polygon({
                   paths: shadows[i],
                   strokeColor: '#000000',
                   strokeOpacity: '0',
                   strokeWeight: '0',
                   fillColor: '#000000',
                   fillOpacity: '0.25',
                   zIndex: 1
               });
               shadow.setMap(map);
               var floor = new google.maps.Polygon({
                   paths: floors[i],
                   strokeColor: '#000000',
                   strokeOpacity: '0',
                   strokeWeight: '0',
                   fillColor: '#FFFFFF',
                   fillOpacity: '1',
                   zIndex: 25
               });
               floor.setMap(map);
        
               var building = new google.maps.Polygon({
                   paths: buildings[i],
                   strokeColor: defaultStrokeColor,
                   strokeOpacity: defaultStrokeOpac,
                   strokeWeight: defaultStrokeWeight,
                   fillColor: colorsBuildings[i],
                   fillOpacity: defaultOpac,
                   buildingName: buildingFullNames[i],
                   buildingFullName: buildingFullNames[i],
                   zIndex: 100
               });
               building.setMap(map);
               building.addListener('mouseover', function() {
                   this.setOptions({
                       fillOpacity: hoverOpac,
                       strokeWeight: hoverStrokeWeight,
                       strokeColor: hoverStrokeColor,
                       strokeOpacity: hoverStrokeOpac
                   });
               });
               building.addListener('mouseout', function() {
                   if (curr_sel_building != this) {
                       this.setOptions({
                           fillOpacity: defaultOpac,
                           strokeWeight: defaultStrokeWeight,
                           strokeColor: defaultStrokeColor,
                           strokeOpacity: defaultStrokeOpac
                       });
                   }
               });
               building.addListener('click', function(event) {
                    $("#group-details-div").removeClass('open');
               if (typeof curr_sel_marker != 'undefined') {
                   curr_sel_marker.setIcon({
                       url: 'images/class-' + curr_sel_ind + '-marker' + curr_sel_marker.tag,
                       scaledSize: new google.maps.Size(50, 80),
                       origin: new google.maps.Point(0, 0),
                       anchor: new google.maps.Point(25, 80)
                   });

                   curr_sel_marker.setZIndex(parseInt(curr_sel_marker.title));
                   curr_sel_marker = undefined;
               }
                   this.setOptions({
                       fillOpacity: hoverOpac,
                       strokeWeight: hoverStrokeWeight,
                       strokeColor: hoverStrokeColor,
                       strokeOpacity: hoverStrokeOpac
                   });
                   if (typeof curr_sel_building != 'undefined' && curr_sel_building != this) {
                       curr_sel_building.setOptions({
                           fillOpacity: defaultOpac,
                           strokeWeight: defaultStrokeWeight,
                           strokeColor: defaultStrokeColor,
                           strokeOpacity: defaultStrokeOpac
                       });
                   }
                   curr_sel_building = this;
                   $("#ag_room").val(this.buildingName);
                   location.value = this.buildingName;
                   var lat = event.latLng.lat();
                   var long = event.latLng.lng();
                   //$("#ag_location_latlng").val();
                   $("#ag_location_latlng").val(lat + "," + long);
                   //alert($("#ag_location_latlng").val());
                   map.panTo(event.latLng);
                   placeMarker(event.latLng, map);
                   geocoder.geocode({
                       'location': {
                           lat: lat,
                           lng: long
                       }
                   }, function(results, status) {
                       if (status === google.maps.GeocoderStatus.OK) {
                           if (results[1]) {
                               $("#ag_location").val(results[1].formatted_address);

                               //alert($("#ag_location").val());
                           } else {
                               $("#ag_location").val('No results found');
                           }
                       } else {
                           $("#ag_location").val('Geocoder failed due to: ' + status);
                       }
                   }); //geocode
               });
           }
           var cur_user_id = Parse.User.current();
           $("#available-groups-table tr").each(function(index) {
               var group_id = $(this).attr('id');

               var latlng = $(this).find('.latlng').text().split(',');
               var myLatLng = {
                   lat: parseFloat(latlng[0]),
                   lng: parseFloat(latlng[1])
               };
               var zIndex = 200 - (myLatLng['lat'] - 43.7) * 10000;
               var address = $(this).find('.location').text();
               var class_id = $(this).find('.class_id').text();
               var class_number = $(this).find('.class_number').text();
               var date = $(this).find('.on_date').text();
               var group_leader = $(this).find('.user_id').text();
               var endTime = $(this).find('.end_time').text();
               var iconIndex = $("#user-classes li." + class_id + "_" + class_number).index() + 1;
               var topicName = $(this).find('.topicname').text();
               today = new Date();
               group_date = new Date(date + " " + endTime);


               if (iconIndex != 0) {
                   if (cur_user_id == group_leader) {
                       var imgTag = '-leader.png';
                   } else {
                       var imgTag = '.png';
                   }
                   var marker = new google.maps.Marker({
                       position: myLatLng,
                       map: map,
                       title: zIndex.toString(),
                       optimized: false,
                       zIndex: zIndex,
                       icon: {
                           url: 'images/class-' + class_id + '-marker' + imgTag,
                           scaledSize: new google.maps.Size(50, 80),
                           origin: new google.maps.Point(0, 0),
                           anchor: new google.maps.Point(25, 80)
                       },
                       my_group_id: group_id,
                       tag: imgTag
                   });

                   markers.push(marker);
                   marker.addListener('mouseout', function() {
                       if (curr_sel_marker != marker) {
                           marker.setIcon({
                               url: 'images/class-' + class_id + '-marker' + marker.tag,
                               scaledSize: new google.maps.Size(50, 80),
                               origin: new google.maps.Point(0, 0),
                               anchor: new google.maps.Point(25, 80)
                           });
                           marker.setZIndex(parseInt(marker.title));
                       }
                   });
                   //SELECTS WERE AT 54 and 27
                   marker.addListener('mouseover', function() {
                       marker.setIcon({
                           url: 'images/class-' + class_id + '-marker-select.png',
                           scaledSize: new google.maps.Size(50, 80),
                           origin: new google.maps.Point(0, 0),
                           anchor: new google.maps.Point(25, 80)
                       });
                       marker.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
                   });
                   marker.addListener('click', function() {

                       //marker.setAnimation(google.maps.Animation.BOUNCE);
if (typeof curr_sel_building != 'undefined') {
                       curr_sel_building.setOptions({
                           fillOpacity: defaultOpac,
                           strokeWeight: defaultStrokeWeight,
                           strokeColor: defaultStrokeColor,
                           strokeOpacity: defaultStrokeOpac
                       });
                   
                   delete curr_sel_building;
    
}
                       deleteOverlays();

                       marker.setIcon({
                           url: 'images/class-' + class_id + '-marker-select.png',
                           scaledSize: new google.maps.Size(50, 80),
                           origin: new google.maps.Point(0, 0),
                           anchor: new google.maps.Point(25, 80)
                       });
                       marker.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
                       if (typeof curr_sel_marker != 'undefined' && curr_sel_marker != marker) {
                           //curr_sel_marker.setAnimation(null);
                           curr_sel_marker.setIcon({
                               url: 'images/class-' + curr_sel_ind + '-marker' + curr_sel_marker.tag,
                               scaledSize: new google.maps.Size(50, 80),
                               origin: new google.maps.Point(0, 0),
                               anchor: new google.maps.Point(25, 80)
                           });
                           curr_sel_marker.setZIndex(parseInt(curr_sel_marker.title));
                       }
                       curr_sel_marker = marker;
                       curr_sel_ind = class_id;
                       var group_id = marker.my_group_id;
                       var row = $("#available-groups-table #" + group_id).eq(0);

                       //var g_name = row.find('.groupname').text();
                       var location = row.find('.location').text();
                       var gid = row.find('.group_id').text();
                       var class_name = row.find('.class_name').text();
                       var t_name = row.find('.topicname').text();
                       var on_date = row.find('.on_date').text();
                       var time = row.find('.start_time').text() + ' - ' + row.find('.end_time').text();
                       var size = row.find('.size').text();
                       var numMem = row.find('.nummembers').text();

                       var capacity = numMem+"/"+size+' Available Spots Filled';
                       //$("#selected-group-info .gname").text( g_name );
                       $("#selected-group-info .location").text(location);
                       $("#hiddengroupId").val(gid);
                       $("#selected-group-info .class").text(class_name);
                       $("#selected-group-info .tname").text(t_name);
                       $("#selected-group-info .on_date").text(on_date);
                       $("#selected-group-info .start_end_time").text(time);
$("#selected-group-info .slots").text(capacity);
                       $(".moredetailsbtn a").attr('data-group-id', '1'+group_id);
                       $(".joingroupbtn").fadeIn();

                       $(".moredetailsbtn").show();
                       $(".more-details").hide();

                       //map.setZoom(12);
                       map.panTo(marker.getPosition());
                       $("#group-details-div").addClass('open');
                   }); //marker click
               }

           }); //


           var bounds = new google.maps.LatLngBounds();
           for (i = 0; i < markers.length; i++) {
               bounds.extend(markers[i].getPosition());
           } //for			
           //map.fitBounds( strictBounds );

           google.maps.event.addListener(map, 'click', function(event) {
               if (typeof curr_sel_building != 'undefined') {
                       curr_sel_building.setOptions({
                           fillOpacity: defaultOpac,
                           strokeWeight: defaultStrokeWeight,
                           strokeColor: defaultStrokeColor,
                           strokeOpacity: defaultStrokeOpac
                       });
                   
                   delete curr_sel_building;
                   $("#ag_location").val('');
                           location.value = "";
location.focus();
}
               $("#group-details-div").removeClass('open');
               if (typeof curr_sel_marker != 'undefined') {
                   curr_sel_marker.setIcon({
                       url: 'images/class-' + curr_sel_ind + '-marker' + curr_sel_marker.tag,
                       scaledSize: new google.maps.Size(50, 80),
                       origin: new google.maps.Point(0, 0),
                       anchor: new google.maps.Point(25, 80)
                   });

                   curr_sel_marker.setZIndex(parseInt(curr_sel_marker.title));
                   curr_sel_marker = undefined;
               }
               var lat = event.latLng.lat();
               var long = event.latLng.lng();
               //$("#ag_location_latlng").val();
               $("#ag_location_latlng").val(lat + "," + long);
               //alert($("#ag_location_latlng").val());
               map.panTo(event.latLng);
               placeMarker(event.latLng, map);
               geocoder.geocode({
                   'location': {
                       lat: lat,
                       lng: long
                   }
               }, function(results, status) {
                   if (status === google.maps.GeocoderStatus.OK) {
                       if (results[1]) {
                           $("#ag_location").val(results[1].formatted_address);
                           location.value = "";
location.focus();
                           //alert($("#ag_location").val());
                       } else {
                           $("#ag_location").val('No results found');
                       }
                   } else {
                       $("#ag_location").val('Geocoder failed due to: ' + status);
                   }
               }); //geocode
           });


           $("#user-classes input[type=checkbox]").on('change', function(e) {
               var cur_classes = [];
               $("#user-classes input:checked").each(function(index) {
                   var class_id = $(this).parent().attr('class');
                   cur_classes.push(class_id);
               }); //each

               for (var i = 0; i < markers.length; i++) {
                   markers[i].setMap(null);
               } //for

               $("#available-groups-table tr").each(function(index) {

                   var row_class_id = $(this).find(".class_id").text();
                   var row_class_number = $(this).find('.class_number').text();

                   if (cur_classes.indexOf(row_class_id + "_" + row_class_number) == -1)
                       return;

                   var group_id = $(this).attr('id');
                   var latlng = $(this).find('.latlng').text().split(',');
                   var myLatLng = {
                       lat: parseFloat(latlng[0]),
                       lng: parseFloat(latlng[1])
                   };
                   var zIndex = 100 - myLatLng['lat'];
                   var address = $(this).find('.location').text();
                   var class_id = $(this).find('.class_id').text();
                   var class_number = $(this).find('.class_number').text();
                   var iconIndex = $("#user-classes li." + class_id + "_" + class_number).index() + 1;
                   var cur_user_id = $("#user-id-table tr td").text();
                   var date = $(this).find('.on_date').text();
                   var group_leader = $(this).find('.user_id').text();
                   var endTime = $(this).find('.end_time').text();
                   today = new Date();
                   group_date = new Date(date + " " + endTime);


                   if (iconIndex != 0 && today < group_date) {
                       if (cur_user_id == group_leader) {
                           var imgTag = '-leader.png';
                       } else {
                           var imgTag = '.png';
                       }
                       var marker = new google.maps.Marker({
                           position: myLatLng,
                           map: map,
                           title: address,
                           optimized: false,
                           zIndex: zIndex,
                           icon: {
                               url: 'images/class-' + class_id + '-marker' + imgTag,
                               scaledSize: new google.maps.Size(50, 80),
                               origin: new google.maps.Point(0, 0),
                               anchor: new google.maps.Point(25, 80)
                           },
                           my_group_id: group_id,
                           tag: imgTag
                       });
                       markers.push(marker);

                       marker.addListener('mouseout', function() {
                           if (curr_sel_marker != marker) {
                               marker.setIcon({
                                   url: 'images/class-' + class_id + '-marker' + marker.tag,
                                   scaledSize: new google.maps.Size(50, 80),
                                   origin: new google.maps.Point(0, 0),
                                   anchor: new google.maps.Point(25, 80)
                               });
                               marker.setZIndex(parseInt(curr_sel_marker.title));
                           }
                       });
                       marker.addListener('mouseover', function() {
                           marker.setIcon({
                               url: 'images/class-' + class_id + '-marker-select.png',
                               scaledSize: new google.maps.Size(50, 80),
                               origin: new google.maps.Point(0, 0),
                               anchor: new google.maps.Point(25, 80)
                           });
                           marker.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
                       });
                       marker.addListener('click', function() {
                           if (typeof curr_sel_building != 'undefined') {
                       curr_sel_building.setOptions({
                           fillOpacity: defaultOpac,
                           strokeWeight: defaultStrokeWeight,
                           strokeColor: defaultStrokeColor,
                           strokeOpacity: defaultStrokeOpac
                       });
                   
                   delete curr_sel_building;
                               $("#ag_location").val('');
                                                      location.value = "";
location.focus();
}
                           marker.setIcon({
                               url: 'images/class-' + class_id + '-marker-select.png',
                               scaledSize: new google.maps.Size(50, 80),
                               origin: new google.maps.Point(0, 0),
                               anchor: new google.maps.Point(25, 80)
                           });
                           marker.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
                           if (typeof curr_sel_marker != 'undefined' && curr_sel_marker != marker) {
                               curr_sel_marker.setIcon({
                                   url: 'images/class-' + curr_sel_ind + '-marker' + curr_sel_marker.tag,
                                   scaledSize: new google.maps.Size(50, 80),
                                   origin: new google.maps.Point(0, 0),
                                   anchor: new google.maps.Point(25, 80)
                               });
                               curr_sel_marker.setZIndex(parseInt(curr_sel_marker.title));

                           }
                           curr_sel_marker = marker;
                           curr_sel_ind = class_id;
                           var group_id = marker.my_group_id;
                           var row = $("#available-groups-table #" + group_id).eq(0);

                           //var g_name = row.find('.groupname').text();
                           var location = row.find('.location').text();
                           var gid = row.find('.group_id').text();
                           var class_name = row.find('.class_name').text();
                           var t_name = row.find('.topicname').text();
                           var on_date = row.find('.on_date').text();
                           var time = row.find('.start_time').text() + ' - ' + row.find('.end_time').text();
var size = row.find('.size').text();
                       var numMem = row.find('.nummembers').text();

                       var capacity = numMem+"/"+size+' Available Spots Filled';

                           //$("#selected-group-info .gname").text( g_name );
                           $("#selected-group-info .location").text(location);
                           $("#hiddengroupId").val(gid);
                           $("#selected-group-info .class").text(class_name);
                           $("#selected-group-info .tname").text(t_name);
                           $("#selected-group-info .on_date").text(on_date);
                           $("#selected-group-info .start_end_time").text(time);
$("#selected-group-info .slots").text(capacity);
                           $(".joingroupbtn a").attr('href', 'join-group.php?group_id=' + group_id.replace('g_', ''));
                           $(".joingroupbtn").fadeIn();

                           $(".moredetailsbtn").show();
                           $(".more-details").hide();

                           //map.setZoom(12);
                           map.panTo(marker.getPosition());
                           $("#group-details-div").addClass('open');
                       }); //marker click
                   }
               }); //

               var bounds = new google.maps.LatLngBounds();
               for (i = 0; i < markers.length; i++) {
                   bounds.extend(markers[i].getPosition());
               } //for			
               //map.fitBounds( bounds );


           }); //checkbox change
       } //init

       //google.maps.event.addDomListener(window, 'load', init);
       //MAP SCRIPT ENDS HERE

       $("#group-details-div .close").on('click', function() {
           $("#group-details-div").removeClass('open');
           curr_sel_marker.setIcon({
               url: 'images/class-' + curr_sel_ind + '-marker' + curr_sel_marker.tag,
               scaledSize: new google.maps.Size(50, 80),
               origin: new google.maps.Point(0, 0),
               anchor: new google.maps.Point(25, 80)
           });
           curr_sel_marker.setZIndex(parseInt(curr_sel_marker.title));
           curr_sel_marker = undefined;
       });

       $("#create-group-div .close").on('click', function() {
           $("#create-group-div").removeClass('open');
       });

       $("#create-group").on('click', function(e) {
           e.preventDefault();
           if ($("#ag_location_latlng").val() == "") {
               alert("Whoops! No location chosen yet!");
           } else {
               $("#create-group-div").addClass('open');
               //setTimeout(init3, 1000);
           }

       });


       var geocoder = new google.maps.Geocoder;



       //MAP SCRIPT ENDS HERE


       $("#group-details-div .moredetailsbtn a").on('click', function() {
           joinGroup($(this).attr('data-group-id'));
           /*
           $(".moredetailsbtn").fadeOut();
           $(".more-details").html("Loading. Please wait...");
           $(".more-details").slideDown();
           */
       });




       }



function joinGroup(idTag) {
    var groupId = idTag.slice(1);
    var group = Parse.Object.extend("studyGroup");
    var groupQuery = new Parse.Query(group);
    groupQuery.get(groupId, {
        success: function(results) {
            var numStudents = results.get("numStudents");
            var groupSize = results.get("groupSize");
            if (numStudents < groupSize) {
                var fullName = Parse.User.current().get("fullName");
                var initials = getInitials(fullName);
                var initialArray = results.get("initialArray");

                var members = results.relation("members");


                members.add(Parse.User.current());
                results.increment("numStudents");
                initialArray.push(initials);
                results.set("initialArray", initialArray);
                results.save();
                $('.row successmsg').append("Group joined successfully.");
                location.reload();
            }
        },
        error: function(object, error) {
            $('.row errormsg').append("Error: Group join failed.");
        }
    });
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
function parsePolyStrings(ps,y,x) {
    var arr = [];
    for (i = 0; i < ps.length; i++){
        
        tmpArr = [];
        for (j = 0; j < ps[i].length; j++){
            lng = Number(ps[i][j].split(' ')[0]);
            lat = Number(ps[i][j].split(' ')[1]);
            tmpArr.push(new google.maps.LatLng(lat, lng));
        }
        arr.push(tmpArr);
    }
    
    //array of arrays of LatLng objects, or empty array
    return arr;
}
function coordPolyStrings(ps) {
    var arr = [];
    for (i = 0; i < ps.length; i++){
        
        tmpArr = [];
        for (j = 0; j < ps[i].length; j++){
            lng = Number(ps[i][j].split(' ')[0]);
            lat = Number(ps[i][j].split(' ')[1]);
            tmpArr.push([lat, lng]);
        }
        arr.push(tmpArr);
    }
    
    //array of arrays of LatLng objects, or empty array
    return arr;
}
function lcs(lcstest, lcstarget) {
 matchfound = 0
 lsclen = lcstest.length
  for(lcsi=0; lcsi<lcstest.length; lcsi++){
   lscos=0
    for(lcsj=0; lcsj<lcsi+1; lcsj++){
     re = new RegExp("(?:.{" + lscos + "})(.{" + lsclen + "})", "i");
     temp = re.test(lcstest);
     re = new RegExp("(" + RegExp.$1 + ")", "i");
      if(re.test(lcstarget)){
       matchfound=1;
       result = RegExp.$1;
       break;
       }
     lscos = lscos + 1;
     }
     if(matchfound==1){return result.length; break;}
    lsclen = lsclen - 1;
   }
  result = "";
  return result.length;
 }
function drawExcrudedShape(map, coordinates, height, strokeColor, strokeOpacity, strokeWeight, fillColor, fillOpacity) {
 
    var pairs = [],
        polygons = [];
    // build line pairs for each wall
    for (var i=0; i<coordinates.length; i++) {
 
        var point = coordinates[i];
            if(i==coordinates.length-1){
var otherIndex=0;
}
else{
var otherIndex=i+1;
}
//var otherIndex = (i == coordinates.length-1) ? 0 : i+1;
            var otherPoint = coordinates[otherIndex];
 
        pairs.push([point, otherPoint]);
    }
    // draw excrusions
    for (var i=0; i<pairs.length; i++) {
var test=pairs[i][0];
        var first = pairs[i][0],
            second = pairs[i][1],
            wallCoordinates =  [
                new google.maps.LatLng(first[0],first[1]),
                new google.maps.LatLng(first[0]+height,first[1]),
                new google.maps.LatLng(second[0]+height,second[1]),
                new google.maps.LatLng(second[0],second[1]),
new google.maps.LatLng(first[0],first[1])                                 
            ],
            polygon = new google.maps.Polygon({
                paths: wallCoordinates,
                strokeColor: strokeColor,
                strokeOpacity: strokeOpacity, 
                strokeWeight: strokeWeight,
                fillColor: fillColor,
                fillOpacity: fillOpacity,
zIndex:50
            });
        polygon.setMap(map);
 polygon.addListener('click', function(){
 showArrays;
     
 });
        polygons.push(polygon);
    }       
 
    return polygons;
}
function showArrays(event) {
  // Since this polygon has only one path, we can call getPath() to return the
  // MVCArray of LatLngs.
  var vertices = this.getPath();

  var contentString = '<b>Wall Polygon</b><br>' +
      'Clicked location: <br>' + event.latLng.lat() + ',' + event.latLng.lng() +
      '<br>';

  // Iterate over the vertices.
  for (var i =0; i < vertices.getLength(); i++) {
    var xy = vertices.getAt(i);
    contentString += '<br>' + 'Coordinate ' + i + ':<br>' + xy.lat() + ',' +
        xy.lng();
  }

  // Replace the info window's content and position.
  //alert(contentString);

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
	/*$.ajax({
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
    */

	return false;
}
function submitNewGroup() {

    var returnValue = addGroupValidation();
    var time = $.trim($(".slider-time").text());
    var time2 = $.trim($(".slider-time2").text());
    var date = $.trim($("#ag_date").val());
    var regDate = new Date(date + " " + time);
    var regDate2 = new Date(date + " " + time2);

    var initialArray = new Array();
    initialArray.push(getInitials(Parse.User.current().get("fullName")));

    var Group = Parse.Object.extend("studyGroup");
    var newGroup = new Group();

    var isPrivate;
    if ($("#publicRadio").is(":checked")){
    	isPrivate=false;
    }
    else{
    	isPrivate= true;
    }

    newGroup.set("location_latlng", $("#ag_location_latlng").val());
    newGroup.set("groupName", $("#ag_topicname").val());
    newGroup.set("groupSize", parseInt($("#ag_size").val()));
    newGroup.set("location", $("#ag_room").val());
    newGroup.set("endDate", regDate2);
    newGroup.set("startDate", regDate);
    newGroup.set("initialArray", initialArray);
    newGroup.set("creator", Parse.User.current());
    var relation = newGroup.relation("members");
    relation.add(Parse.User.current());
    newGroup.set("numStudents", 1);
    newGroup.set("isPrivate", isPrivate);

    newGroup.save(null, {
        success: function(newGroup) {
            // Execute any logic that should take place after the object is saved.
            alert('New group created with objectId: ' + newGroup.id);
            var classes = Parse.Object.extend("Class");
            var classQuery = new Parse.Query(classes);
            classQuery.get($("#ag_class").val(), {
                success: function(groups) {
                    alert('Added ' + newGroup.id);
                    var relation = groups.relation("classGroups");
                    relation.add(newGroup);
                    groups.save();
location.reload();


                },
                error: function(object, error) {
                    // The object was not retrieved successfully.
                    // error is a Parse.Error with an error code and message.
                    alert("Error: Courses could not be retrieved.");
                }
            });
           // return true;
        },
        error: function(newGroup, error) {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            alert('Failed to create new group, with error code: ' + error.message);
        }
    });

   // return false;

}

function getMapBuildings(){
    var mapBuildings = Parse.Object.extend("MapBuildings");
    var buildingQuery = new Parse.Query(mapBuildings);
    buildingQuery.find({
        success: function(buildings) {
            var messages = "";
            return buildings;
        },
        error: function(object, error) {
            // The object was not retrieved successfully.
            // error is a Parse.Error with an error code and message.
            alert("Error: Courses could not be retrieved.");
            return undefined;
        }
    });
    
}

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

