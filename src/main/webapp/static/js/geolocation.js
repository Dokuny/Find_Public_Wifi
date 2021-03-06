function getLocation() {
    if (navigator.geolocation) { // GPS를 지원하면
        let lat = document.getElementById('lat');
        let lng = document.getElementById('lng');

        navigator.geolocation.getCurrentPosition(function(position) {
            lat.value=position.coords.latitude;
            lng.value =position.coords.longitude;
        }, function(error) {
            console.error(error);
        }, {
            enableHighAccuracy: false,
            maximumAge: 0,
            timeout: Infinity
        });
    } else {
        alert('GPS를 지원하지 않습니다');
    }
}
getLocation();