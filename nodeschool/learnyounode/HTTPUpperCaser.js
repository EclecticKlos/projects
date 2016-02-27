var http = require('http');
var map = require('through2-map');

var server = http.createServer(function(req, res){
  var body = '';
  req.on('data', function(chunk) {
    body += chunk.toString().toUpperCase();
  })
  req.on('end', function(){
    res.write(body);
    res.end()
  })
});
server.listen(process.argv[2])




/*
  | LearnYouNode's solution:

      var http = require('http')
    var map = require('through2-map')

    var server = http.createServer(function (req, res) {
      if (req.method != 'POST')
        return res.end('send me a POST\n')

      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })

    server.listen(Number(process.argv[2]))

*/
