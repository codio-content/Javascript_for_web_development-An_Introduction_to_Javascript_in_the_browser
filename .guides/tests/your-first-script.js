var grasp = require('grasp');
var cheerio = require('cheerio')
var fs = require('fs');
var _ = require('underscore')

var base_path = "/home/codio/workspace/"
var file_path = base_path + "script-tags/index.html"

var html_content = fs.readFileSync(file_path).toString('utf8');
var $ = cheerio.load(html_content);
var script_content = "";
var errors = [];

$("script").each(function() {
  script_content+=$(this).text();
});


var equerySearch = grasp.search('equery');
var squerySearch = grasp.search('squery');

if(script_content && script_content.length > 3) {
    
  // var results = equerySearch('setInterval( __ , __ )', script_content);
  var results = squerySearch(":root > *",script_content) //:root 

  if(!results) {
    errors.push("No script found")
  } else if (results.length != 1) {
    errors.push("There should be only one instruction in this program");
  } else {
    var alert_line = results[0];
    
    //console.log(alert_line);
    //console.log(alert_line.expression.arguments[0]);
    
    try {
      var name = alert_line.expression.callee.name;
      var text = alert_line.expression.arguments[0].value.toLowerCase().trim();
      
      if (name != "alert") {
        errors.push("Should be a call to 'alert'")
      }

      if (text.indexOf("hello world")==-1) {
        errors.push("hello world not found in the text of the alert")
      }
      
    } catch (e) {
      errors.push("Something is wrong or missing in your code");
      //console.log(e);
    }

   

  }
} else {
  errors.push("No script found")
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


/*
var ast = parse(script_content);
var program = nodes.build(ast);

console.log(ast)
console.log(ast["body"][2])

var function_calls = _.values(program.search('[name=setInterval] ~ arguments'));

console.log(function_calls);


var set_interval_call = _.find(function_calls, function(item) {return item.name === "setInterval"});

if (set_interval_call) {
  console.log(set_interval_call.arguments["0"])
  console.log(set_interval_call.arguments["1"])
  
} else {
  console.log("error no setInterval function call")
}

console.log(set_interval_call);
*/