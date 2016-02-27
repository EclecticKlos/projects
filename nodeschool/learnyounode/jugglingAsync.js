var bl = require("bl");
var http = require("http");
var dataArr = [];
var count = 0;

var logData = function(){
  for (i=0; i < 3; i++){
    console.log(dataArr[i]);
  }
}

var makeRequest = function(index, callback){
  http.get(process.argv[2 + index], function(response){
    response.pipe(bl(function(err, data){
      if (err) {
        return console.error(err);
      }
      dataArr[count] = data.toString();
      count++;

      if (count === 3){
        callback();
      }
    }))
  })
}

for (i=0; i < 3; i++){
  makeRequest(i, logData);
}

/*
  |
  First pass without realizing that I could make each call independently, I thought they all had to be concurrently running
  |
*/

// var bl = require("bl");
// var http = require("http");
// var URI1 = process.argv[2];
// var URI2 = process.argv[3];
// var URI3 = process.argv[4];
// var URI1Complete = false;
// var URI2Complete = false;
// var URI3Complete = false;
// var dataString1 = "";
// var dataString2 = "";
// var dataString3 = "";

// var makeRequest = function(url, callback){
//   http.get(url, function(response){
//     response.pipe(bl(function(err, data) {
//       if(err) {
//         return console.error(err);
//       }
//       var dataString = data.toString();
//       callback(url, dataString)
//     }))
//   })
// }

// var logData = function(url, data){
//   if (url === URI1) {
//     URI1Complete = true;
//     dataString1 = data;
//   } else if (url === URI2) {
//     URI2Complete = true;
//     dataString2 = data;
//   } else if (url === URI3) {
//     URI3Complete = true;
//     dataString3 = data;
//   }

//   if (URI1Complete && URI2Complete && URI3Complete) {
//     console.log(dataString1)
//     console.log(dataString2)
//     console.log(dataString3)
//   }
// }

// makeRequest(URI1, logData);
// makeRequest(URI2, logData);
// makeRequest(URI3, logData);
