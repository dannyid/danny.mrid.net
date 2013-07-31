var time = function() {
    var now = new Date();
    var currentTime;
    var span;
    var h = now.getUTCHours();
    var m = now.getUTCMinutes();
    var s = now.getUTCSeconds();
    var ms = now.getUTCMilliseconds();
    /* Add leading zeros */ 
    h = (h < 10 ? "0" : "" ) + h;
    m = (m < 10 ? "0" : "" ) + m;
    s = (s < 10 ? "0" : "" ) + s;
    ms = (function () {
        if (ms < 10) {
            return "00" + ms;
        } else if (ms < 100) {
            return "0" + ms;
        } else {
            return ms;
        };
    })();

    currentTime = Date();
    currentTime = h + ":" + m + ":" + s + "." + ms + " UTC";
    span = document.getElementById("time");
    span.innerHTML = currentTime;
    setTimeout(time,10);
};

time();
