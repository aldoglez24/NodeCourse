/*
Tutorial ExpressJs
https://www.tutorialspoint.com/expressjs/
Recomendable:
    Instalar nodemon e iniciar con nodemon index

    Capítulo 2 
    Archivo que contiene la ruta "/basic2things"
*/

var express = require('express');
var router = express.Router();

//Es importante notar que en lugar de express.get se utiliza la función router
router.get('/', function(req, res){
   res.send('Método GET para la dirección /basic2things');
});
router.post('/', function(req, res){
   res.send('POST route on things.');
});

//export this router to use in our index.js
module.exports = router;