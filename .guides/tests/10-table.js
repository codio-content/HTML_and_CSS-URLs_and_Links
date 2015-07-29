var fs = require('fs');
var cheerio = require('cheerio');


var errors = [];
var path = '/home/codio/workspace/tables/challenge1.html'

if (!fs.existsSync(path)) {
    errors.push("challenge1.html doesnt exist")
} else {
    var $ = cheerio.load(fs.readFileSync(path));

    if ($("tr:nth-of-type(2) > td").length != 3) {
        errors.push("The number of td in the second tr is wrong!");
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
