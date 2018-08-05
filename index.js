var express = require('express');// Dependencia para express
var app = express(); //Dependendcia

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.listen(3000);