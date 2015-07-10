/**
* Created with more-basic-html.
* User: mathvdh
* Date: 2015-07-09
* Time: 10:25 AM
* To change this template use Tools | Templates.
*/

$(document).ready(function(){

    $('a[href=#next_section]').click(function(event){
        event.preventDefault();
        alert("next section");
    });
    
    
    $('a[href=#prev_section]').click(function(){
        event.preventDefault();
        alert("prev section");
    });
    
    var hname = window.location.hostname;
    $("a.current_hostname").attr("href",hname).text(hname);
    $("span.current_hostname").text(hname);
    
    //var math = MathJax.Hub.getAllJax("MathDiv")[0];
    //MathJax.Hub.Queue(["Text",math,"x+1"]);
    
})