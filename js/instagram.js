//
// Fetch sunset images with geolocation from Instagram
//

var theUrl = "https://api.instagram.com/v1/tags/snow/media/recent?access_token=265415925.f59def8.35550cb46e644ba7a9117a9097f2d8df"

function httpGet(theUrl) {
    var xmlHttp = null;
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
};
