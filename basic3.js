/*
Tutorial ExpressJs
https://www.tutorialspoint.com/expressjs/
Recomendable:
    Instalar nodemon e iniciar con nodemon index

    Capítulo 2 
    Rutas dinámicas, expresiones regulares

    Rutas dinámicas sirven para pasar parámetros y procesarlas en ellas
    Las expresiones regulares (regex) son una secuencia de caracteres que forma un patrón de búsqueda, 
        principalmente utilizada para la búsqueda de patrones de cadenas de caracteres u operaciones de sustituciones.
        Ejemplo: Se pueden buscar que lo ingresado corresponda a una tarjeta de crédito/débito
*/


var express = require('express');
var app = express();

//Para probar la ruta dinámica hay que proner algo como http://localhost:3000/14567823
app.get('/:id', function(req, res){     //La ruta dinámica tiene la variable "id" se define con los ":"
   res.send('The id you specified is ' + req.params.id); //Aquí obtenemos el valor del request para el parámetro id
});

//Ruta dinámica un poco más compleja como http://localhost:3000/Aldo/1
app.get('/things/:name/:id', function(req, res) {
    res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
});

/*Ruta dinámica que solo acepta un valor numérico de 5 dígitos mediante una expresión regular
    Ejemplo: http://localhost:3000/145678 */
app.get('/things/:id([0-9]{5})', function(req, res){
    res.send('id: ' + req.params.id);
});

/*En caso de no ingresar una url válida regresamos lo siguiente, es importante que esta sea la última ruta que indicamos
    Ejemplo: http://localhost:3000/a01332737 */ 
app.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
});
app.listen(3000);