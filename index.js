const app = require('./src/app');

let port = process.env.PORT || 3000;
//Servidor
app.listen(port, function(){
    console.log(`El servidor está corriendo en el puerto ${port}`)
});


