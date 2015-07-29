$(document).ready(function(){
    var hname = window.location.protocol + "//" + window.location.hostname;
    $("a.current_hostname").attr("href",hname).text(hname);
})