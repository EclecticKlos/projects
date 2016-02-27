var http = require("http");
var URI = process.argv[2];

var makeRequest = function(url) {
  http.get(url, function(resp){
    resp.setEncoding("utf8");
    resp.on("data", function(data){
      console.log(data);
    })
  })
}

makeRequest(URI);
