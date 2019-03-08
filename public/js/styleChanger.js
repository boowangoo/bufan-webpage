var URL = {
    DEFAULT: '../css/general_default.css',
    VAPOURWAVE: '../css/general_vapourwave.css'
}
var RES = {
    TITLE: {
        DEFAULT: '../res/img/bufanwang1.png',
        VAPOURWAVE: '../res/img/bufanwang3.gif'
    }
}

/* ============================================================ */

var currStyle = Cookies.get('currStyle') || URL.DEFAULT;

var setStyle = function() {
    Cookies.set('currStyle', currStyle);
    $('#stylesheet').attr('href', URL[currStyle]);
    $('#title>img').attr('src', RES.TITLE[currStyle])
}

setStyle();

$(document).ready(function() {
    $("#default_style").click(function() {
        currStyle = 'DEFAULT';
        setStyle();
        return false;
    });
    $("#vapourwave_style").click(function() {
        currStyle = 'VAPOURWAVE';
        setStyle();
        return false;
    });
});