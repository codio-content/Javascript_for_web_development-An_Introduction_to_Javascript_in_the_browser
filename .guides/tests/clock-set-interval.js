var grasp = require('grasp');
var cheerio = require('cheerio')
var fs = require('fs');
var _ = require('underscore')

var base_path = "/home/codio/workspace/"
var file_path = base_path + "clock/index.html"

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

  // var results = equerySearch('setInterval( __ , __ )', script_content);
  var results = squerySearch(":root > ExpressionStatement > CallExpression[callee.name=setInterval]",script_content) //:root > call


  if (results.length <= 0) {


    var r2 = equerySearch('setInterval( __ , __ )', script_content);

    if (r2.length <= 0) {
      errors.push("We didn't find any call to setInterval.")
    } else {
      errors.push("The call to setInterval is not at the correct position.")
    }

  } else if (results.length == 1) {

    var thecall = results[0];

    //console.log(thecall)

    var arg0 = thecall.arguments[0];
    var arg1 = thecall.arguments[1];

    if (arg0.type != "Identifier") {
      errors.push("The first argument of the setInterval call doesn't seem to be correct.")
    } else {
      if (arg0.name != "set_time") {
        errors.push("The first argument of the setInterval call should be 'set_time'.")
      } 
    }

    if (arg1.type != "Literal") {
      errors.push("The second argument of the setInterval call doesn't seem to be correct.")
    } else {
      if (arg1.value != 1000 ) {
        errors.push("The second argument of the setInterval call should be 1000.")
      } 
    }


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