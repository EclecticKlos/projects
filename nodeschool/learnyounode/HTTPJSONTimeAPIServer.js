var http = require('http');

var server =  http.createServer(function(req, res){
  if (req.url.includes('/api/parsetime')) {

  }
})
server.listen(process.argv[2])
