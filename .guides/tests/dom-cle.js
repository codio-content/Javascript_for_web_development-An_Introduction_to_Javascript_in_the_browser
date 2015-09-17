var grasp = require('grasp');
var cheerio = require('cheerio')
var fs = require('fs');
var _ = require('underscore')

var base_path = "/home/codio/workspace/"
var file_path = base_path + "document-ready/example1.html"

var html_content = fs.readFileSync(file_path).toString('utf8');
var $ = cheerio.load(html_content);
var script_content = "";
var errors = [];

$("script").each(function() {
  script_content+=$(this).text();
});


var equerySearch = grasp.search('equery');
var squerySearch = grasp.search('squery');

try {

  var results = equerySearch('document.addEventListener( __ , __ )', script_content);
  

  if (results.length <= 0) {
    errors.push("We didn't find any call to document.addEventListener")

  } else if (results.length == 1) {

    var thecall = results[0];

    //console.log(thecall)

    var arg0 = thecall.arguments[0];
    var arg1 = thecall.arguments[1];

    if (arg0.type != "Literal") {
      errors.push("The first argument of the setInterval call doesn't seem to be correct.")
    } else {
      if (arg0.value != "DOMContentLoaded" ) {
        errors.push("The first argument of the setInterval call should be 'DOMContentLoaded'.")
      } 
    }
    
    /* arg2 Should be a function with our set_time in it 
    
    if (arg2.type != "Identifier") {
      errors.push("The first argument of the setInterval call doesn't seem to be correct.")
    } else {
      if (arg2.name != "set_time") {
        errors.push("The first argument of the setInterval call should be 'set_time'.")
      } 
    }
    */

  } else {
    errors.push("We found multiple calls to setInterval, there should be only one.")
  }
  
  
} catch (e) {
  errors.push("Something is wrong or missing in your code");
  //console.log(e);
}

if( errors.length <= 0 ) {
  process.stdout.write('Well done!\n');
  process.exit(0);
}
else {
  process.stdout.write(errors.join("\n"));
  process.stdout.write('\n');
  process.exit(1);
}