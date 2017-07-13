
var mykey = config.MY_KEY;
//Leaflet javascript
var mymap = L.map('mapid').setView([48.428, -123.365], 10);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicGJhenphcmQiLCJhIjoiY2o0enN4ajJlMjh5dzMzcjRrYmppOXNkOSJ9.O1nJBzqngnX-duWOEG4WGA', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.streets',
}).addTo(mymap);

  L.marker([48.428, -123.365]) // lat and long coordinates of marker
  .addTo(mymap).bindPopup("<b>Hello!</b>")

//ArcGIS javascript
require([
  "esri/Map",
  "esri/views/MapView",
  "dojo/domReady!"
], function(Map, MapView){
  var map = new Map({
    basemap: "streets"
  });
  var view = new MapView({
    container: "viewDiv",
    map: map,  // Reference to the map object created before the scene
    zoom: 10,  // Sets zoom level based on level of detail (LOD)
    center: [-123.365, 48.428]  // Sets center point of view using longitude,latitude
  });
});

//Google Maps javascript
 function initMap() {
        var victoria = {lat: 48.428, lng: -123.365};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: victoria
        });
        var marker = new google.maps.Marker({
          position: victoria,
          map: map
        });
      }
