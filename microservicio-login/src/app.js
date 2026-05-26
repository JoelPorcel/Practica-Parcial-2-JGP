var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

var LoginController = require('./routes/loginController');
app.use('/api/login', LoginController);

module.exports = app;
