var fs = require('fs');
var cheerio = require('cheerio');


var errors = [];
var path = '/home/codio/workspace/11-table-headers/challenge1.html'

if (!fs.existsSync(path)) {
    errors.push("challenge1.html doesnt exist")
} else {
    var $ = cheerio.load(fs.readFileSync(path));

    if ($("tr:nth-of-type(1) > th").length != 3) {
        errors.push("3 th should be present in the begining of the table!");
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
