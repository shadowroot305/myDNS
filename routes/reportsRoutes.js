var express = require('express');
var reportsDAO = require('../models/reportsDAO');
var router = express.Router();

//////////////  GETS    \\\\\\\\\\\\\\\\
router.get('/warn_reps', function(req, res, next) {
    reportsDAO.getWarns(function(err, result) {
        if (err) {
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)
});

router.get('/room_reps', function(req, res, next) {
    reportsDAO.getRooms(function(err, result) {
        if (err) {
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)
});

router.get('/ship_reps', function(req, res, next) {
    reportsDAO.getShips(function(err, result) {
        if (err) {
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)
});

/////////////   POSTS   \\\\\\\\\\\\\\\\\
router.post('/warn_reps', function(req, res, next) {
    reportsDAO.warn_rep(
        req.body.warnrep_id,
        req.body.room,
        req.body.hazard,
        req.body.description,
        req.body.crew_member,
        req.body.alert_id,
        function(result) {
            res.send(result);
        });
});

router.post('/room_reps', function(req, res, next) {
    reportsDAO.room_rep(
        req.body.roomrep_id,
        req.body.room,
        req.body.hazard,
        req.body.description,
        req.body.crew_member,
        req.body.alert_id,
        function(err, result) {
            if (err) {
                res.statusMessage = result.status;
                res.status(result.code).json(err);
                return;
            }
            res.status(200).send(result.data);
        }, next)
});

router.post('/ship_reps', function(req, res, next) {
    reportsDAO.ship_rep(
        req.body.shiprep_id,
        req.body.room,
        req.body.hazard,
        req.body.description,
        req.body.crew_member,
        req.body.alert_id,
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