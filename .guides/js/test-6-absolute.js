$(document).ready(function(){
    
    $("#test6absolute").click(function(){
        
        var errors = [];
        
        if ($("#q1").val() != "http://mysite.com/page5/content/index.html") {
            errors.push("Answer to the first question is wrong ...")
        }
        
        if ($("#q2").val() != "http://mysite.com/index.html") {
            errors.push("Answer to the second question is wrong ...")
        }
        
        if ($("#q3").val() != "http://mysite.com/images/2.jpg") {
            errors.push("Answer to the third question is wrong ...")
        }
        
        if ($("#q4").val() != "http://mysite.com/page5/content/images/2.jpg") {
            errors.push("Answer to the fourth question is wrong ...")
        }
        
        
        if(errors.length > 0) {
            alert(errors.join("\n"));
            
        } else {
            alert("All good !");
        }
        
    })
    
})