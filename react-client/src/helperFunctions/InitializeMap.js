var mapboxgl = require('mapbox-gl/dist/mapbox-gl');

mapboxgl.accessToken = 'pk.eyJ1IjoiYmVnb25hZ3VlcmVjYSIsImEiOiJjamV5a2pzZXgwNHdmMnduc29wZDcwdzl3In0.XNTYELHwKXANH8ahtQ93tQ';

const generateMap = () => {
  var map = new mapboxgl.Map({
    container: 'mapContainer',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-73.99, 40.73],
    zoom: 13
  });
  return map;
}

module.exports.generateMap = generateMap;
