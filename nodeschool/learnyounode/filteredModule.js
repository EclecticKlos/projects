var fs = require("fs");
var path = require("path");

var filterDirectory = function(directory, extension, callback){
  fs.readdir(directory, function doneReading(err, list) {
    if (err) {
      return callback(err) // Early return
    }
    var correctExtension = function(file){
      if (path.extname(directory + file) === (("." + extension))) {
        return file;
      }
    }

    var filteredList = list.filter(correctExtension);
    callback(null, filteredList);
  })
}

module.exports = filterDirectory;

