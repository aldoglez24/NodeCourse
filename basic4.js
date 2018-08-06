/*
Tutorial ExpressJs
https://www.tutorialspoint.com/expressjs/
Recomendable:
    Instalar nodemon e iniciar con nodemon index

    Capítulo 4
    Middleware

    Middleware son funciones que se utilizan para accesar a los objetos de req y res
        se utilizan para agregar contenido, encabezados, etc.. a una respuesta
    
        Existen Third Party Middlewares muy útilies en: http://expressjs.com/en/resources/middleware.html 
*/


var express = require('express');
var app = express();

//Simple request time logger
app.use(function(req, res, next){
    console.log("A new request received at " + Date.now());
    //This function call is very important. It tells that more processing is
    //required for the current request and is in the next middleware function/route handler.
    next();
});

//Middleware function to log request protocol
app.use('/things', function(req, res, next){
    console.log("A request for things received at " + Date.now());
    next();
});
 
// Route handler that sends the response
app.get('/things', function(req, res){
    res.send('Things');
});

//First middleware before response is sent
app.use(function(req, res, next){
    console.log("Start");
    next();
 });
 
 //Route handler
 app.get('/', function(req, res, next){
    res.send("Middle");
    next();
 });
 
 app.use('/', function(req, res){
    console.log('End');
 });

app.listen(3000);






/* 
Código para un formato de fecha más legible:

    
    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10) {
        dd='0'+dd;
    } 
    if(mm<10) {
        mm='0'+mm;
    } 

    today = dd+'/'+mm+'/'+yyyy;
    console.log(today);

*/