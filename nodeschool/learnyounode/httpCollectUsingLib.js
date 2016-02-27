var http = require("http");
var bl = require("bl");
var URI = process.argv[2];

var makeRequest = function(url){
  http.get(url, function(response){
    response.pipe(bl(function(err, data) {
        if (err) {
        return console.error(err);
      }
      console.log(data.toString().length);
      console.log(data.toString());
    }))
  })
}

makeRequest(URI);
