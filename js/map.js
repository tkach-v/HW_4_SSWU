function myMap() {
    let mapProp = {
        center: new google.maps.LatLng(50.449548496934405, 30.52536319347063),
        zoom: 10,
    };
    let map = new google.maps.Map(document.querySelector(".map__container"), mapProp);

    let marker = new google.maps.Marker({
        position: mapProp.center,
        animation: google.maps.Animation.DROP
    });

    marker.setMap(map);

    google.maps.event.addListener(marker,'click',function() {
        map.setZoom(19);
        map.setCenter(marker.getPosition());
    });
}
