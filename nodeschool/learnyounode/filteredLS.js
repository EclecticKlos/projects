var fs = require("fs");
var path = require("path");
var filtered = [];
var dirPath = process.argv[2];
var filterByExt = "." + process.argv[3];

var filterDirectory = function(callback){
  fs.readdir(dirPath, function doneReading(err, list) {
    var correctExtension = function(file){
      if (path.extname(dirPath + file) === filterByExt) {
        return file;
      }
    }

    filtered = list.filter(correctExtension);
    callback();
  })
}

var logFilteredDirectory = function(){
  filtered.forEach(function(entry){
    console.log(entry);
  })
}

filterDirectory(logFilteredDirectory);
