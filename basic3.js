/*
Tutorial ExpressJs
https://www.tutorialspoint.com/expressjs/
Recomendable:
    Instalar nodemon e iniciar con nodemon index

    Capítulo 2 
    Rutas dinámicas

    Rutas dinámicas sirven para pasar parámetros y procesarlas en ellas
*/


var express = require('express');
var app = express();

app.get('/:id', function(req, res){     //La ruta dinámica tiene la variable "id" se define con los ":"
   res.send('The id you specified is ' + req.params.id); //Aquí obtenemos el valor del request para el parámetro id
});

app.listen(3000);