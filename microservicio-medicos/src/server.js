var app = require('./app');
var port = process.env.PORT || 3002; 
var logger = require('./config/log');

var server = app.listen(port, function() {
  console.log('Express server for Medicos escuchando on port ' + port);
  logger.info("Express server for Medicos listening on port " + port);
});