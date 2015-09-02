var fs = require('fs');
var cheerio = require('cheerio');


var errors = [];
var path = '/home/codio/workspace/8-lists/challenge2.html'

if (!fs.existsSync(path)) {
    errors.push("challenge2.html doesnt exist")
} else {
    var $ = cheerio.load(fs.readFileSync(path));

    if ($("body > ol").length != 1) {
        errors.push("There should be one ol in the body");
    }
    
    if ($("body > ol > li:nth-of-type(1) > ol ").length != 1) {
        errors.push("There should be one ol inside the first list item");
    }
    
    if ($("body > ol > li:nth-of-type(1) > ol > li ").length != 3) {
        errors.push("There should be 3 li in the nested list");
    }
    
    if ($("body > ol > li").length != 3) {
        errors.push("There are not 3 list items (li) in the first order list");
    }
}


if( errors.length <= 0 ) {
    process.stdout.write('Well done!')
    process.exit(0);
}
else {
    process.stdout.write(errors.join("\n"))
    process.exit(1);
}
