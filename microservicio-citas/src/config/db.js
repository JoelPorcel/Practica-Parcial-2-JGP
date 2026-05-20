var mongoose = require('mongoose');
var logger = require('./log');

mongoose.connect('mongodb://mongo:27017/hospital_citas')
    .then(() => {
        console.log('Conectado a MongoDB (BD Citas)');
        logger.info('Conectado a MongoDB');
    })
    .catch(err => {
        console.error('Error al conectar a MongoDB:', err);
        logger.error('Error al conectar a MongoDB: ' + err);
    });