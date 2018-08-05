/*
Tutorial ExpressJs
https://www.tutorialspoint.com/expressjs/
Recomendable:
    Instalar nodemon e iniciar con nodemon index

    Capítulo 2 
    Routers, 

    Routers sirven para mantener las rutas en diferentes archivos 
*/


var express = require('Express');
var app = express();
var things = require('./basic2things.js'); //Importamos la ruta "/basic2things.js" que está en el mismo directorio

//both index.js and things.js should be in same directory
app.use('/basic2things', things);

app.listen(3000);



/*
    Anexo

    http://www.tutorialspoint.com/http/http_methods.htm
    
    1 	GET
            The GET method requests a representation of the specified resource. Requests using GET should only retrieve data and should have no other effect.
    2 	POST
            The POST method requests that the server accept the data enclosed in the request as a new object/entity of the resource identified by the URI.
    3 	PUT
            The PUT method requests that the server accept the data enclosed in the request as a modification to existing object identified by the URI. If it does not exist then the PUT method should create one.
    4   DELETE
            The DELETE method requests that the server delete the specified resource.
*/