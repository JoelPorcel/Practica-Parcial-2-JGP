var express = require('express');
var app = express();
var LoginController = require('./routes/loginController');

app.use('/api/login', LoginController);

module.exports = app;