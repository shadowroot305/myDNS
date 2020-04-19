var express = require('express');
var dnsDAO = require('../models/dnsDAO');
var router = express.Router();


router.get('/', function(req, res, next) {
    dnsDAO.getAll(function(err,result){
        if (err) {
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    },next)
});

router.get('/1', function(req, res, next) {
    dnsDAO.getDns1(function(err,result){
        if (err) {
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    },next)
});

router.get('/2', function(req, res, next) {
    dnsDAO.getDns2(function(err,result){
        if (err) {
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    },next)
});

router.get('/3', function(req, res, next) {
    dnsDAO.getDns3(function(err,result){
        if (err) {
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    },next)
});

router.get('/4', function(req, res, next) {
    dnsDAO.getDns4(function(err,result){
        if (err) {
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    },next)
});

router.get('/5', function(req, res, next) {
    dnsDAO.getDns5(function(err,result){
        if (err) {
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    },next)
});

router.get('/6', function(req, res, next) {
    dnsDAO.getDns6(function(err,result){
        if (err) {
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    },next)
});

router.get('/7', function(req, res, next) {
    dnsDAO.getDns7(function(err,result){
        if (err) {
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    },next)
});

router.get('/8', function(req, res, next) {
    dnsDAO.getDns8(function(err,result){
        if (err) {
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    },next)
});

router.get('/9', function(req, res, next) {
    dnsDAO.getDns9(function(err,result){
        if (err) {
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    },next)
});
module.exports = router;
