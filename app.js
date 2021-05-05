const express = require('express');
const app = express();

//Setting template engine
app.set('view engine', 'ejs');

// Setear la carpeta public para archivos estaticos
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen('3000', () => console.log('Servidor ejecutando en puerto 3000'));

// Routes

const usersRoutes = require('./routes/users');

app.use('/users', usersRoutes);