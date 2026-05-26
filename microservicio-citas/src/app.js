var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

require('./config/db');
var CitaController = require('./routes/CitaController');
app.use('/api/citas', CitaController);

module.exports = app;
