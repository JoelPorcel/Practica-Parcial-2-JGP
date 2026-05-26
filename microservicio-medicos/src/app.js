var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

var MedicoController = require('./routes/medicoController');
app.use('/api/medicos', MedicoController);

module.exports = app;
