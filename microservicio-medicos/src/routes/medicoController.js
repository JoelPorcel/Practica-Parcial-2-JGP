var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var VerifyToken = require('./verifyToken');
var db = require('../config/db');
var logger = require('../config/log');

router.get('/', VerifyToken, function(req, res) {
    logger.info("GET /api/medicos");
    db.query('SELECT * FROM medicos', function(err, results) {
        if (err) return res.status(500).send("Error al buscar médicos.");
        res.status(200).send(results);
    });
});

router.get('/:id', VerifyToken, function(req, res) {
    logger.info("Begin GET /api/medicos/" + req.params.id);
    
    db.query('SELECT * FROM medicos WHERE id = ?', [req.params.id], function(err, results) {
        if (err) {
            logger.error("Error en GET id: " + err);
            return res.status(500).send("Error al buscar el médico.");
        }
            
        if (results.length === 0) {
            return res.status(404).send("Médico no encontrado.");
        }
        res.status(200).send(results[0]);
        logger.info("End GET /api/medicos/" + req.params.id);
    });
});

router.post('/', VerifyToken, function(req, res) {
    logger.info("POST /api/medicos");
    const { nombre_completo, especialidad_id, telefono, email, estado } = req.body;
    
    db.query(
        'INSERT INTO medicos (nombre_completo, especialidad_id, telefono, email, estado) VALUES (?, ?, ?, ?, ?)',
        [nombre_completo, especialidad_id, telefono, email, estado || 'activo'],
        function(err, result) {
            if (err) return res.status(500).send("Error guardando médico.");
            res.status(200).send({ message: "Médico creado correctamente", id: result.insertId });
        }
    );
});

router.put('/:id', VerifyToken, function(req, res) {
    logger.info("PUT /api/medicos/" + req.params.id);
    const { nombre_completo, especialidad_id, telefono, email, estado } = req.body;
    
    db.query(
        'UPDATE medicos SET nombre_completo = ?, especialidad_id = ?, telefono = ?, email = ?, estado = ? WHERE id = ?',
        [nombre_completo, especialidad_id, telefono, email, estado, req.params.id],
        function(err, result) {
            if (err) return res.status(500).send("Error actualizando médico.");
            res.status(200).send("Médico actualizado correctamente.");
        }
    );
});

router.delete('/:id', VerifyToken, function(req, res) {
    logger.info("DELETE /api/medicos/" + req.params.id);
    db.query('DELETE FROM medicos WHERE id = ?', [req.params.id], function(err, result) {
        if (err) return res.status(500).send("Error eliminando médico.");
        res.status(200).send("Médico eliminado.");
    });
});

module.exports = router;