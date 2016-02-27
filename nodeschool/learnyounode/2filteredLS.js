var filterModule = require('./filteredModule.js');

var logFilteredDirectory = function(err, data){
  if (err) {
    console.log(err)
  }
  else {
    data.forEach(function(entry){
      console.log(entry);
    })
  }
}

filterModule(process.argv[2], process.argv[3], logFilteredDirectory)

// filterDirectory(logFilteredDirectory);
