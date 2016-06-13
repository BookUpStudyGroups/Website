

<head>

<script language="javascript">
</script>
    <style>

      #map {
        width: 500px;
        height: 400px;
      }
    </style>
</head>
<body>
<div id="pixelColor">Google Maps Javascript and Static Maps API Based Water Locator</div>

<img id="my-image-id" width="200" height="200" src="http://www.netanimations.net/water_waves_ocean_ripple_high_quality_animated_gif.gif"/>
<canvas id="myCanvas">
Your browser does not support canvas
</canvas>
<br></br>
<div id="map"></div>
<script>
var lat;
var long;
var mapZoom=18;
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");
    var img = new Image;
      function initMap() {

        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
          center: {lat: 44.540, lng: -78.546},
          zoom: mapZoom,
disableDoubleClickZoom: true,


        });

			google.maps.event.addListener(map, 'dblclick', function(event) {
				lat = event.latLng.lat();
				long = event.latLng.lng();
map.setCenter(event.latLng);					
				placeMarker(event.latLng, map);
var url="https://maps.googleapis.com/maps/api/staticmap?center="+lat+","+long+ "&zoom="+mapZoom+"&size=1x1&maptype=roadmap&style=feature:water|saturation:-100|invert_lightness:true&key=AIzaSyAgHVAllyhnnvIHX0xqO9nSSJrFOR9EF70";
//var url="http://cors.io/?u=http://ichef-1.bbci.co.uk/news/660/cpsprodpb/025B/production/_85730600_monkey2.jpg";
				
ctx.clearRect(0, 0, canvas.width, canvas.height);
    var img = new Image;

img.crossOrigin='anonymous';
img.src=url;
    img.onload = function(){
    ctx.drawImage(img,0,0);
pixelData=ctx.getImageData(0,0,1,1).data;
                                
if(pixelData[0]==36 && pixelData[1]==36 && pixelData[2]==36 && pixelData[3]==255){
document.getElementById("pixelColor").innerHTML="Ahoy! This Be Water.";
document.getElementById("my-image-id").src="http://www.clipartbest.com/cliparts/Kcn/o7r/Kcno7rLBi.gif";
}else{
document.getElementById("pixelColor").innerHTML="Avast! This Be Land.";
document.getElementById("my-image-id").src="http://atlasn.ru/assets/templates/atlas/img/icon_land.png";

}
};

			});
}
    
    
      
var markersArray=[];
function placeMarker(location, mapObj) {
    // first remove all markers if there are any
    deleteOverlays();

    var marker = new google.maps.Marker({
        position: location,
 	animation: google.maps.Animation.BOUNCE,
        map: mapObj
    });
    // add marker in markers array
    markersArray.push(marker);

    //map.setCenter(location);
}
function deleteOverlays() {
    if (markersArray) {
        for (i in markersArray) {
            markersArray[i].setMap(null);
        }
    	markersArray.length = 0;
    }
}
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAgHVAllyhnnvIHX0xqO9nSSJrFOR9EF70&callback=initMap"
        async defer></script>
</body>