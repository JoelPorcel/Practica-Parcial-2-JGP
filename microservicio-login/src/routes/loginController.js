var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config/config');
var logger = require('../config/log');
var db = require('../config/db');

router.post('/', function(req, res) {
    logger.info("Begin Login User");
    
    db.query('SELECT * FROM users WHERE email = ?', [req.body.email], function(err, results) {
        if (err) return res.status(500).send('Error en base de datos.');
        if (results.length === 0) return res.status(404).send('No user found.');

        var user = results[0];
        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
        
        var token = jwt.sign({ id: user.id, email: user.email }, config.secret, {
            expiresIn: 86400
        });
        
        res.status(200).send({ auth: true, token: token });
        logger.info("End Login User");
    });
});

module.exports = router;