/* CORALES, Dion Mark N. / BSIT-2C */
const map = L.map('map', {
  center: [16.479332, 121.144366],
  zoom: 20
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);


const marker = L.marker([16.479332, 121.144366],
  {alt: 'NVSU '}).addTo(map).bindPopup('NVSU Bayombong Campus');

  var popup = L.popup();

  function onMapClick(e) {
      popup
          .setLatLng(e.latlng)
          .setContent("You clicked the map at " + e.latlng.toString())
          .openOn(map);
  }
  
  map.on('click', onMapClick);

  var circle = L.circle([16.479332, 121.144366], {
    color: '#a367b1',
    fillColor: '#392467',
    fillOpacity: 0.5,
    radius: 125
}).addTo(map);

