const express = require('express');
const app = express();
//PATH permite concatenar multiples directorios y hacerlos multipltaforma
const path = require('path');
//MORGAN MIDDLEWARE
const morgan = require('morgan');

// Settings
//Path
app.set('views', path.join(__dirname, 'views'));
//Ejs
app.set('view engine', 'ejs');


//Middlewares
//Modulo Morgan con su Metodo DEV
app.use(morgan('dev'));
//Convierte a Json los Forms
app.use(express.urlencoded({extended: false}));


//Routes
app.use(require('./routes/indexRoutes'));


//Static
app.use(express.static(path.join(__dirname, 'public')));


//404 Handler
app.use( function(req, res, next){
    res.status(404).send('404 Not Found!!');
})

module.exports = app;