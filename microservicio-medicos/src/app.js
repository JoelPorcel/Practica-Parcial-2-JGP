var express = require('express');
var app = express();
var MedicoController = require('./routes/medicoController');

app.use('/api/medicos', MedicoController);

module.exports = app;