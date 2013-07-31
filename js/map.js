// Enable the visual refresh
google.maps.visualRefresh = true;

var map;
/*
function initialize() {
*/
    var myLatLng = new google.maps.LatLng(39,-97);
    console.log("myLatLng object inside the initialize function:")
    console.log(myLatLng);

    var mapOptions = {
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false,
        zoom: 5,
        center: new google.maps.LatLng(39.50,-97.5),
        mapTypeId: google.maps.MapTypeId.SATELLITE 
    };
                                             
    map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
    console.log("map object inside initalize function before marker");
    console.log(map);
    
    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h2 id="firstHeading" class="firstHeading">Uluru</h2>'+
        '<div id="bodyContent">'+
        '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
        'sandstone rock formation in the southern part of the '+
        'Northern Territory, central Australia. It lies 335 km (208 mi) '+
        'south west of the nearest large town, Alice Springs; 450 km '+
        '(280 mi) by road. Kata Tjuta and Uluru are the two major '+
        'features of the Uluru - Kata Tjuta National Park. Uluru is '+
        'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
        'Aboriginal people of the area. It has many springs, waterholes, '+
        'rock caves and ancient paintings. Uluru is listed as a World '+
        'Heritage Site.</p>'+
        '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
        'http://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p>'+
        '</div>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
        });
   
    console.log("infowindow object inside of the intialize function")
    console.log(infowindow);

    var marker = new google.maps.Marker({
        position: myLatLng,
        animation: google.maps.Animation.DROP,
        map: map,
        title:"Sunset Line"
    });

    console.log("marker object inside the initialized function")
    console.log(marker);

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });
    
    /*  This defines a get request  */
    function httpGet(theUrl) {
        var xmlHttp = null;
    
        xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, true );
        xmlHttp.send( null );
        return xmlHttp.responseText;
    }

   console.log(httpGet('https://api.twitter.com/1.1/search/tweets.json?q=sunset&result_type=recent&count=1'))

/*
};

google.maps.event.addDomListener(window, 'load', initialize);
*/
