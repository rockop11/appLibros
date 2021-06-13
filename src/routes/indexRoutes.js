const { Router } = require('express');
const router = Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const jsonLibro = fs.readFileSync('src/libros.json', 'utf-8')
let libros= JSON.parse(jsonLibro);

//Ruta del Index
router.get('/', function(req, res){
    res.render('index.ejs', {
        libros
    })
});

//Vista de New Entry
router.get('/new-entry', function(req, res){
    res.render('new-entry');
});

//Metodo Post para subir archivos en New Entry
router.post('/new-entry', function(req, res){
    //PARA VALIDAR LOS DATOS
    const {titulo, autor, imagen, descripcion} = req.body
    if (!titulo || !autor || !imagen || !descripcion){
        res.status(400).send('Debe completar todos los campos')
        return;
    };
    
    let nuevoLibro = {
        id: uuidv4(),
        titulo,
        autor,
        imagen,
        descripcion
    };

    libros.push(nuevoLibro);


    //ESCRIBE LOS DATOS DENTRO DE JSON
    const libroJson = JSON.stringify(libros)
    fs.writeFileSync('src/libros.json', libroJson, 'utf-8');

    res.redirect('/');
});

router.get('/borrar/:id', function(req, res){
    libros = libros.filter(libro => libro.id != req.params.id);
    const libroJson = JSON.stringify(libros)
    fs.writeFileSync('src/libros.json', libroJson, 'utf-8');

    res.redirect('/');
    
})

module.exports = router;
