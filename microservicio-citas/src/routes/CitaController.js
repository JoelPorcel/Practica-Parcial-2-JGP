var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var VerifyToken = require('./verifyToken');
var Cita = require('../cita/Cita'); 
var logger = require('../config/log');

router.post('/', VerifyToken, function(req, res) {
    logger.info("Begin POST /api/citas");
    
    Cita.create({
        medico_id: req.body.medico_id,
        paciente_id: req.body.paciente_id,
        fecha_cita: req.body.fecha_cita,
        hora_cita: req.body.hora_cita,
        estado: req.body.estado || 'programada',
        observaciones: req.body.observaciones,
        costo: req.body.costo
    })
    .then(cita => {
        res.status(200).send(cita);
        logger.info("End POST /api/citas");
    })
    .catch(err => {
        logger.error("Error al crear cita: " + err);
        res.status(500).send("There was a problem adding the information to the database.");
    });
});

router.get('/', VerifyToken, function(req, res) {
    logger.info("Begin GET /api/citas");
    
    Cita.find({})
    .then(citas => {
        res.status(200).send(citas);
        logger.info("End GET /api/citas");
    })
    .catch(err => {
        logger.error("Error al buscar citas: " + err);
        res.status(500).send("There was a problem finding the citas.");
    });
});

router.get('/:id', VerifyToken, function(req, res) {
    logger.info("Begin GET /api/citas/" + req.params.id);
    
    Cita.findById(req.params.id)
    .then(cita => {
        if (!cita) return res.status(404).send("No cita found.");
        res.status(200).send(cita);
        logger.info("End GET /api/citas/" + req.params.id);
    })
    .catch(err => {
        logger.error("Error al buscar cita por id: " + err);
        res.status(500).send("There was a problem finding the cita.");
    });
});

router.put('/:id', VerifyToken, function(req, res) {
    logger.info("Begin PUT /api/citas/" + req.params.id);
    
    Cita.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(cita => {
        if (!cita) return res.status(404).send("No cita found.");
        res.status(200).send(cita);
        logger.info("End PUT /api/citas/" + req.params.id);
    })
    .catch(err => {
        logger.error("Error al actualizar cita: " + err);
        res.status(500).send("There was a problem updating the cita.");
    });
});

router.delete('/:id', VerifyToken, function(req, res) {
    logger.info("Begin DELETE /api/citas/" + req.params.id);
    
    Cita.findByIdAndDelete(req.params.id)
    .then(cita => {
        if (!cita) return res.status(404).send("No cita found.");
        res.status(200).send("Cita: " + cita._id + " was deleted.");
        logger.info("End DELETE /api/citas/" + req.params.id);
    })
    .catch(err => {
        logger.error("Error al eliminar cita: " + err);
        res.status(500).send("There was a problem deleting the cita.");
    });
});

module.exports = router;