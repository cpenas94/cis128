var map = L.map('map', {
    minZoom: 9,
    maxZoom: 16,
    zoom: 16,
    center: [40.423494,-3.682068],
    doubleClickZoom: false,
}).locate({setView: true});

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);


 function onLocationFound(e) {
        var coord = e.latlng;
        var lat = coord.lat;
        var lng = coord.lng;
        L.marker(e.latlng).addTo(map)
            .bindPopup("You are located at " + lat + " and " + lng ).openPopup();

        L.circle(e.latlng, radius).addTo(map);
    }

    function onLocationError(e) {
        alert(e.message);
    }

    map.on('locationfound', onLocationFound);