$( document ).ready(function(){
    
    //var hname = window.location.hostname;
    //$("a.current_hostname").attr("href",hname).text(hname);
    //$("span.current_hostname").text(hname);
    
    //var math = MathJax.Hub.getAllJax("MathDiv")[0];
    //MathJax.Hub.Queue(["Text",math,"x+1"]);
    
})

function autoResize(id){
    var newheight = 0;
    var newwidth = 0;

    if(document.getElementById){
        newheight=document.getElementById(id).contentWindow.document.body.offsetHeight;
    }

    document.getElementById(id).height = (newheight + 20) + "px";

}