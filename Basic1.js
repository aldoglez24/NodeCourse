/*
Tutorial ExpressJs
https://www.tutorialspoint.com/expressjs/
Recomendable:
    Instalar nodemon e iniciar con nodemon index

    Capítulo 1 
    Conceptos básicos de ExpressJs
*/

var express = require('express');// Dependencia para express
var app = express(); //Nombre de la variable que contiene la dependencia

/*Función cuando el servidor escucha algo en la dirección "/" parametros de entrada "req" y respuesta "res"
    object(req) contiene la información de entrada como html
*/

app.get('/', function(req, res){ 
   res.send("Hello world!"); //Es el método "Callback" que regresará la respuesta con el objeto res, en este caso "Hello world!"
});

//Método para contestar la dirección "/hello"
app.get('/hello', function(req, res){
    res.send("Hello World2!");
 });

//Método post de /hello 
app.post('/hello', function(req, res){
   res.send("You just called the post method at '/hello'!\n");
});

//Método para escuchar las peticiones app.listen(port, [host], [backlog], [callback]])
app.listen(3000);//http://localhost:3000




/*
    Anexos:

     GET: GET lleva los datos de forma "visible" al cliente (navegador web). El medio de envío es la URL. Los datos los puede ver cualquiera.
         Los datos son visibles por la URL, por ejemplo:
            www.aprenderaprogramar.com/action.php?nombre=pedro&apellidos1= gomez
    POST: POST consiste en datos "ocultos" (porque el cliente no los ve) enviados por un formulario cuyo método de envío es post. Es adecuado para formularios. Los datos no son visibles.
         La ventaja de usar POST es que estos datos no son visibles al usuario de la web. En el caso de usar get, el propio usuario podría modificar la URL escribiendo diferentes parámetros a los reales en su navegador, dando lugar a que la información tratada no sea la prevista.


*/