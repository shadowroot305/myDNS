var express = require('express');
var hazardsDAO = require('../models/hazardsDAO');
var router = express.Router();

//////////GETS\\\\\\\\\\\\\\
router.get('/', function(req, res, next) {
    hazardsDAO.getParameters(function(err, result) {
        res.status(result.code).send(result.data);
    }, next)
});

router.get('/temp', function(req, res, next) {
    hazardsDAO.getTemp(function(err, result) {
        res.status(result.code).send(result.data);
    }, next)
});

router.get('/hum', function(req, res, next) {
    hazardsDAO.getHum(function(err, result) {
        res.status(result.code).send(result.data);
    }, next)
});

router.get('/air', function(req, res, next) {
    hazardsDAO.getAir(function(err, result) {
        res.status(result.code).send(result.data);
    }, next)
});

router.get('/rad', function(req, res, next) {
    hazardsDAO.getRad(function(err, result) {
        res.status(result.code).send(result.data);
    }, next)
});

//////////UPDATES\\\\\\\\\\\\\\
router.put('/temp', function(req, res, next) {
    hazardsDAO.updateTemp(
        req.body.lowhaz,
        req.body.medhaz,
        req.body.highhaz,
        function(err, result) {
            if (err) {
                res.statusMessage = result.status;
                res.status(result.code).json(err);
                return;
            }
            res.status(200).send(result.data);
        }, next)
});

router.put('/hum', function(req, res, next) {
    hazardsDAO.updateHum(
        req.body.lowhaz,
        req.body.medhaz,
        req.body.highhaz,
        function(err, result) {
            if (err) {
                res.statusMessage = result.status;
                res.status(result.code).json(err);
                return;
            }
            res.status(200).send(result.data);
        }, next)
});

router.put('/air', function(req, res, next) {
    hazardsDAO.updateAir(
        req.body.lowhaz,
        req.body.medhaz,
        req.body.highhaz,
        function(err, result) {
            if (err) {
                res.statusMessage = result.status;
                res.status(result.code).json(err);
                return;
            }
            res.status(200).send(result.data);
        }, next)
});

router.put('/rad', function(req, res, next) {
    hazardsDAO.updateRad(
        req.body.lowhaz,
        req.body.medhaz,
        req.body.highhaz,
        function(err, result) {
            if (err) {
                res.statusMessage = result.status;
                res.status(result.code).json(err);
                return;
            }
            res.status(200).send(result.data);
        }, next)
});


module.exports = router;