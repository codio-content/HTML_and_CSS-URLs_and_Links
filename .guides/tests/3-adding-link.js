var fs = require('fs');
var cheerio = require('cheerio');


var errors = [];
var path = '/home/codio/workspace/01-adding-html-page/page2.html'

if (!fs.existsSync(path)) {
    errors.push("page2.html doesnt exist")
} else {
    var $ = cheerio.load(fs.readFileSync(path));

    if ($("a").length <= 0) {
        errors.push("There is no link in the page");
    }
    
    if (!$("a").attr("href")) {
         errors.push("There is no href on the link");
    } else {
        if ($("a").attr("href").trim() != "index.html") {
            errors.push("The link in page2.html is not pointing to index.html");
        }
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
