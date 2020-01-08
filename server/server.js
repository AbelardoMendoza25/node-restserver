require('./config/config');
const mongoose = require('mongoose');
const path = require('path');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

// Habilitar la carpeta public
app.use(express.static(path.resolve(__dirname,'../public')));
// console.log(path.resolve(__dirname,'../public'));

//Configuración global de rutas
app.use(require('./routes/index'));

mongoose.connect('mongodb://localhost:27017/cafe', 
	{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true},
	(err, res) =>{
	if(err) throw err;
	console.log('Base de datos ONLINE');
});

app.listen(port, () => console.log(`Estamos escuchando en el puerto ${port}`));