var fs = require("fs");

var bufferFile = fs.readFileSync(process.argv[2]);
var stringFile = bufferFile.toString();
var arrFile = stringFile.split('\n');
var length = arrFile.length -1;

console.log(length);
