var net = require("net");
var date = new Date();

var addZeroFill = function(dateSegment){
  if (dateSegment.toString().length < 2) {
    return dateSegment = "0" + dateSegment.toString();
  }
  else {
    return dateSegment;
  }
}

var server = net.createServer(function(socket) {
    socket.write(
      addZeroFill(date.getFullYear()) + "-" +
      addZeroFill((parseInt(date.getMonth()) +1).toString()) + "-" +
      addZeroFill(date.getDate()) + " " +
      addZeroFill(date.getHours()) + ":" +
      addZeroFill(date.getMinutes()) + "\n"
    );
    socket.end();
  })
  // console.log("HERE IS THE PORT" + process.argv[2]);
  server.listen(process.argv[2]);

// server();
