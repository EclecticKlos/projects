var fs = require("fs");
var newLines = 0;
var testPath = "/var/folders/_6/lxjtk1jd29170pmptjvhmv4m0000gp/T/_learnyounode_1815.txt";

// console.log(testPath);
// var stuff = fs.readFileSync(testPath);
// console.log(stuff);

var getNewLineCount = function(callLater){
  fs.readFile(process.argv[2], 'utf8', function doneReading(err, fileContents) {
    var fileContentsArr = fileContents.split('\n');
    newLines = fileContentsArr.length - 1
    callLater();
  })
}

var logNewLines = function(){
  console.log(newLines);
}

getNewLineCount(logNewLines);
