var express = require('express');
var customDAO = require('../models/customDAO');
var router = express.Router();

//////////////  GETS    \\\\\\\\\\\\\\\\
router.get('/', function(req, res, next) {
    customDAO.getAll(function(err, result) {
        if (err) {
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)
});


router.get('/conquistador', function(req, res, next) {
    customDAO.getConquistador(function(err, result) {
        if (err) {
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)
});

router.get('/povoador', function(req, res, next) {
    customDAO.getPovoador(function(err, result) {
        if (err) {
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)
});

router.get('/gordo', function(req, res, next) {
    customDAO.getGordo(function(err, result) {
        if (err) {
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)
});

router.get('/lavrador', function(req, res, next) {
    customDAO.getLavrador(function(err, result) {
        if (err) {
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)
});

router.get('/bravo', function(req, res, next) {
    customDAO.getBravo(function(err, result) {
        if (err) {
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)
});

router.get('/justiceiro', function(req, res, next) {
    customDAO.getJusticeiro(function(err, result) {
        if (err) {
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)
});

router.get('/formoso', function(req, res, next) {
    customDAO.getFormoso(function(err, result) {
        if (err) {
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)
});

router.get('/venturoso', function(req, res, next) {
    customDAO.getVenturoso(function(err, result) {
        if (err) {
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)
});

router.get('/desejado', function(req, res, next) {
    customDAO.getDesejado(function(err, result) {
        if (err) {
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)
});


/////////////   POSTS   \\\\\\\\\\\\\\\\\
router.post('/conquistador', function(req, res, next) {
    customDAO.postConquistador(
        req.body.cc_service,
        req.body.cc_custom,
        req.body.cc_original,
        req.body.cc_set1,
        req.body.cc_set2,
        req.body.cc_set3,
        req.body.cc_set4,
        function(result) {
        res.send(result);
        });
});

router.post('/povoador', function(req, res, next) {
    customDAO.postPovoador(
        req.body.cc_service,
        req.body.cc_custom,
        req.body.cc_original,
        req.body.cc_set1,
        req.body.cc_set2,
        req.body.cc_set3,
        req.body.cc_set4,
        function(result) {
        res.send(result);
        });
});

router.post('/gordo', function(req, res, next) {
    customDAO.postGordo(
        req.body.cc_service,
        req.body.cc_custom,
        req.body.cc_original,
        req.body.cc_set1,
        req.body.cc_set2,
        req.body.cc_set3,
        req.body.cc_set4,
        function(result) {
        res.send(result);
        });
});

router.post('/lavrador', function(req, res, next) {
    customDAO.postLavrador(
        req.body.cc_service,
        req.body.cc_custom,
        req.body.cc_original,
        req.body.cc_set1,
        req.body.cc_set2,
        req.body.cc_set3,
        req.body.cc_set4,
        function(result) {
        res.send(result);
        });
});

router.post('/bravo', function(req, res, next) {
    customDAO.postBravo(
        req.body.cc_service,
        req.body.cc_custom,
        req.body.cc_original,
        req.body.cc_set1,
        req.body.cc_set2,
        req.body.cc_set3,
        req.body.cc_set4,
        function(result) {
        res.send(result);
        });
});

router.post('/justiceiro', function(req, res, next) {
    customDAO.postJusticeiro(
        req.body.cc_service,
        req.body.cc_custom,
        req.body.cc_original,
        req.body.cc_set1,
        req.body.cc_set2,
        req.body.cc_set3,
        req.body.cc_set4,
        function(result) {
        res.send(result);
        });
});

router.post('/formoso', function(req, res, next) {
    customDAO.postFormoso(
        req.body.cc_service,
        req.body.cc_custom,
        req.body.cc_original,
        req.body.cc_set1,
        req.body.cc_set2,
        req.body.cc_set3,
        req.body.cc_set4,
        function(result) {
        res.send(result);
        });
});

router.post('/venturoso', function(req, res, next) {
    customDAO.postVenturoso(
        req.body.cc_service,
        req.body.cc_custom,
        req.body.cc_original,
        req.body.cc_set1,
        req.body.cc_set2,
        req.body.cc_set3,
        req.body.cc_set4,
        function(result) {
        res.send(result);
        });
});

router.post('/desejado', function(req, res, next) {
    customDAO.postDesejado(
        req.body.cc_service,
        req.body.cc_custom,
        req.body.cc_original,
        req.body.cc_set1,
        req.body.cc_set2,
        req.body.cc_set3,
        req.body.cc_set4,
        function(result) {
        res.send(result);
        });
});

module.exports = router;