var express = require('express');
var path = require('path');
var app = express();
var port = 4000;

app.use('/', express.static(path.join(__dirname, 'app')));

app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname, 'app/index.html'));
});

app.get('/portfolio', function(req,res) {
  res.sendFile(path.join(__dirname, 'app/index.html'));
});

app.get('/contact', function(req,res){
  res.sendFile(path.join(__dirname, 'app/index.html'));
});

app.listen(port);

console.log("Running at Port 4000")
