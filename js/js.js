document.addEventListener("DOMContentLoaded", function() {

    getLocation();

});

function getLocation() {
    if (navigator.geolocation) {

        var mapBin = document.querySelector("#bin");

        makeMap(mapBin);

    } else {

        alert("This browser doesn't support Geolocation");

    }
};

var makeMap = function(bin) {
    var params = {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 60000
    };
    navigator.geolocation.getCurrentPosition(finishMap, gpsError, params);

    function finishMap(position) {            
        var canvas = document.createElement("canvas");            
        canvas.id = "geoLoc";            
        canvas.width = "400";            
        canvas.height = "400";            
        bin.appendChild(canvas);            
        var ctx = canvas.getContext("2d");

                    
        var mapImg = document.createElement("img");            
        mapImg.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + position.coords.latitude + "," + position.coords.longitude + "&zoom=14&size=400x400&maptype=roadmap&markers=color:red%7Clabel:A%7C" + position.coords.latitude + "," + position.coords.longitude + "&key=AIzaSyCdv1_sQCStPB9LVQXyg858w3Wd32qzsvw";
        console.log(position);

                    
        mapImg.onload = function() {                
            ctx.drawImage(mapImg, 0, 0);            
        };        
    };
};

function gpsError(error) {

    var errors = {
        1: 'Location Permission Denied',
        2: 'Position Unavailable',
        3: 'Request Timeout'
    };

    alert("Error: " + errors[error.code]);

}
