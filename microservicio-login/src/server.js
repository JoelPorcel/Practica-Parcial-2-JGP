var app = require('./app');
var port = process.env.PORT || 3001;
var logger = require('./config/log');

var server = app.listen(port, function() {
  console.log('Express server for Login escuchando on port ' + port);
  logger.info("Express server for Login listening on port " + port);
});