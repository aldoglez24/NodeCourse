/*
Tutorial ExpressJs
https://www.tutorialspoint.com/expressjs/
Recomendable:
    Instalar nodemon e iniciar con nodemon index
*/

var express = require('express');// Dependencia para express
var app = express(); //Nombre de la variable que contiene la dependencia

/*Función cuando el servidor escucha algo en la dirección "/" parametros de entrada "req" y respuesta "res"
    object(req) contiene la información de entrada como html
*/

app.get('/', function(req, res){ 
   res.send("Hello world!"); //Es el método que regresará la respuesta con el objeto res, en este caso "Hello world!"
});

//Método para escuchar las peticiones app.listen(port, [host], [backlog], [callback]])
app.listen(9090);//http://localhost:9090
