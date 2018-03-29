var mapboxgl = require('mapbox-gl/dist/mapbox-gl');
var initialize = require('./InitializeMap.js');

mapboxgl.accessToken = 'pk.eyJ1IjoiYmVnb25hZ3VlcmVjYSIsImEiOiJjamV5a2pzZXgwNHdmMnduc29wZDcwdzl3In0.XNTYELHwKXANH8ahtQ93tQ';

const StarbucksMap = (locations) => {
  let map = initialize.generateMap();

  //Add markers to map
  locations.forEach(marker=> {

    //Ensure values are between -90 and 90
    if(Math.abs(marker.geometry.coordinates[0]) < 90 && Math.abs(marker.geometry.coordinates[1]) < 90) {

      //Create a DOM element for the marker
      var el = document.createElement('div');
      el.className = 'marker';

      //Add Pop up alert with Starbucks address and phone number
      el.addEventListener('click', function() {
        window.alert(marker.properties.message);
      })

      //Add marker to map
      new mapboxgl.Marker(el)
      .setLngLat([marker.geometry.coordinates[0], marker.geometry.coordinates[1]])
      .addTo(map)
    }
  });
}

module.exports.StarbucksMap = StarbucksMap;
