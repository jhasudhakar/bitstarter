var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {


  var fs = require('fs');
  var infile = "index.html"
  var inText = new Buffer(64);
  inText = fs.readFileSync(infile);

  response.send(inText.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
