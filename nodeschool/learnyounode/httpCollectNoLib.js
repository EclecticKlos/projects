var http = require("http");
var URI = process.argv[2];
var dataArr = [];

var makeRequest = function(url){
  http.get(url, function(response) {
    var datStr = "";
    response.setEncoding("utf8");
    response.on("data", function(data) {
      datStr += data;
    });
    response.on("end", function(){
      console.log(datStr.length);
      console.log(datStr);
    });
  })
}

makeRequest(URI);
