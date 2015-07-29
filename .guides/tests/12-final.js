var fs = require('fs');
var cheerio = require('cheerio');


var errors = [];
var basepath = '/home/codio/workspace/'

if (!fs.existsSync(basepath + "nav/index.html")) {
    errors.push("nav/index.html doesn't exist")    
} else {
    
    var $ = cheerio.load(fs.readFileSync(basepath + "nav/index.html"));

    if ($("ul li:nth-of-type(2) a").attr("href").trim().toLowerCase() != "sections/contact.html") {
        errors.push("in nav/index.html the link to contact.html is wrong.");
    }
    
     if ($("ul li:nth-of-type(3) a").attr("href").trim().toLowerCase() != "sections/about.html") {
        errors.push("in nav/index.html the link to about.html is wrong.");
    }
}

if (!fs.existsSync(basepath + "nav/sections/about.html")) {
    errors.push("nav/sections/about.html doesn't exist")    
} else {
    
    var $ = cheerio.load(fs.readFileSync(basepath + "nav/sections/about.html"));

    if ($("ul li:nth-of-type(1) a").attr("href").trim().toLowerCase() != "../index.html") {
        errors.push("in nav/sections/about.html the link to index.html is wrong.");
    }
    
     if ($("ul li:nth-of-type(3) a").attr("href").trim().toLowerCase() != "contact.html") {
        errors.push("in nav/sections/about.html the link to contact.html is wrong.");
    }
    
    if ($("ul li:nth-of-type(1) a img").attr("src").trim().toLowerCase() != "../img/home.png") {
        errors.push("in nav/sections/about.html the src of the home image is wrong.");
    }
    
    if ($("ul li:nth-of-type(2) img").attr("src").trim().toLowerCase() != "../img/contact.png") {
        errors.push("in nav/sections/about.html the src of the contact image is wrong.");
    }
    
    if ($("ul li:nth-of-type(3) a img").attr("src").trim().toLowerCase() != "../img/about.png") {
        errors.push("in nav/sections/about.html the src of the about image is wrong.");
    }
    
}

if (!fs.existsSync(basepath + "nav/sections/contact.html")) {
    errors.push("nav/sections/contact.html doesn't exist")    
} else {
    
    var $ = cheerio.load(fs.readFileSync(basepath + "nav/sections/contact.html"));

    if ($("ul li:nth-of-type(1) a").attr("href").trim().toLowerCase() != "../index.html") {
        errors.push("in nav/sections/contact.html the link to index.html is wrong.");
    }
    
     if ($("ul li:nth-of-type(2) a").attr("href").trim().toLowerCase() != "contact.html") {
        errors.push("in nav/sections/contact.html the link to contact.html is wrong.");
    }
    
    if ($("ul li:nth-of-type(1) a img").attr("src").trim().toLowerCase() != "../img/home.png") {
        errors.push("in nav/sections/contact.html the src of the home image is wrong.");
    }
    
    if ($("ul li:nth-of-type(2) img").attr("src").trim().toLowerCase() != "../img/contact.png") {
        errors.push("in nav/sections/contact.html the src of the contact image is wrong.");
    }
    
    if ($("ul li:nth-of-type(3) a img").attr("src").trim().toLowerCase() != "../img/about.png") {
        errors.push("in nav/sections/contact.html the src of the about image is wrong.");
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
