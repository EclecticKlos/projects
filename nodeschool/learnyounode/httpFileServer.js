var fs = require('fs');
var http = require('http');

// var server = http.createServer(function(request, response) {
//   var readableStream = fs.createReadStream(process.argv[3]);
//   readableStream.on('open', function(){
//     readableStream.pipe(response)
//   })
// });
// server.listen(process.argv[2]);

var server = http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  })
  fs.createReadStream(process.argv[3]).pipe(res);
});
server.listen(process.argv[2]);
