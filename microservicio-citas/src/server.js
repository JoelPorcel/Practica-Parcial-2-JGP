var app = require('./app');
var port = process.env.PORT || 3003;
var logger = require('./config/log');

var server = app.listen(port, function() {
  console.log('Express server for Citas escuchando on port ' + port);
  logger.info("Express server for Citas listening on port " + port);
});