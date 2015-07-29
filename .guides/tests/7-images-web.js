var fs = require('fs');
var cheerio = require('cheerio');


var errors = [];
var path = '/home/codio/workspace/7-images-from-web/photos.html'

if (!fs.existsSync(path)) {
    errors.push("photos.html doesnt exist")
} else {
    var $ = cheerio.load(fs.readFileSync(path));

    if ($("h1").text().trim() != "My photo gallery") {
        errors.push("There is no h1 with text 'My photo gallery'");
    }
    
    if ($("a:nth-of-type(1)").attr("href").indexOf("flickr.com") == -1) {
         errors.push("First picture link seems wrong");
    }
    
    if ($("a:nth-of-type(1) img").attr("src").indexOf("flickr.com") == -1) {
         errors.push("First picture seems wrong");
    }
    
    if ($("a:nth-of-type(2)").attr("href").indexOf("flickr.com") == -1) {
         errors.push("Second picture link seems wrong");
    }
    
    if ($("a:nth-of-type(2) img").attr("src").indexOf("flickr.com") == -1) {
         errors.push("Second picture seems wrong");
    }
    
    if ($("a:nth-of-type(3)").attr("href").indexOf("flickr.com") == -1) {
         errors.push("Third picture link seems wrong");
    }
    
    if ($("a:nth-of-type(3) img").attr("src").indexOf("flickr.com") == -1) {
         errors.push("Third picture seems wrong");
    }
    
    if ($("p").length != 3){
        errors.push("There should be 3 paragraphs of text");
    }
}




if( errors.length <= 0 ) {
    process.stdout.write('Well done!!!')
    process.exit(0);
}
else {
    process.stdout.write(errors.join("\n"))
    process.exit(1);
}
