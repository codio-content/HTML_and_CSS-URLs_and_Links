var fs = require('fs');
var cheerio = require('cheerio');


var errors = [];
var basepath = '/home/codio/workspace/5-addressing/'

if (!fs.existsSync(basepath + "folder1/")) {
    errors.push("You didn't create folder1")    
}

if (!fs.existsSync(basepath + "folder1/folder2")) {
    errors.push("You didn't create folder2")    
}

if (!fs.existsSync(basepath + "folder1/folder2/index.html")) {
    errors.push("You didn't create index.html")    
} else {
    
    
    var $ = cheerio.load(fs.readFileSync(basepath + "folder1/folder2/index.html"));

    if ($("h1").text().trim().toLowerCase() != "this is my page") {
        errors.push("You didnt create the h1");
    }
    
    if ($("p:nth-of-type(1)").text().trim().toLowerCase() != "it is located in folder1/folder2") {
        errors.push("You didnt create the first p");
    }
    
    if ($("p:nth-of-type(2)").text().trim().toLowerCase() != "on my codio box") {
        errors.push("You didnt create the second p");
    }
    
    if ($("p:nth-of-type(3)").text().trim().toLowerCase() != "thanks for visiting!") {
        errors.push("You didnt create the third p");
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
