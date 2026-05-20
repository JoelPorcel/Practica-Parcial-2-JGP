var express = require('express');
var app = express();
var CitaController = require('./routes/CitaController');

require('./config/db');

app.use('/api/citas', CitaController);

module.exports = app;