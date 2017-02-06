var express = require('express');
var app = express();
var port = 4000;

app.use(express.static(__dirname + '/app'));

app.get('/',function(req,res){
  res.sendFile('index.html');
  //It will find and locate index.html from View or Scripts
});

app.get('/portfolio',function(req,res){
  res.sendFile('/portfolio.html');
});

app.get('/contact',function(req,res){
  res.sendFile('/contact.html');
});

app.listen(port);

console.log("Running at Port 4000")
