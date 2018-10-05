var express = require('express');
var router = express.Router();
var Controller = require('./journeyHandlerController');

//Insert tour details to the database
router.post('/', function (req, res) {
        Controller.insertJourney(req.body).then(function (data) {
            res.status(data.status).send({ message: data.message });
        }).catch(function (err) {
            res.status(err.status).send({ message: err.message });
        })
});
//Get all details
router.get('/', function (req, res) {
        Controller.getAll().then(function (data) {
            res.status(data.status).send({ data: data.data });
        }).catch(function (err) {
            res.status(err.status).send({ message: "Error" });
        })
});
//Get the bus route
router.get('/:route', function (req, res) {
        Controller.getRoute(req.params.route).then(function (data) {
            res.status(data.status).send({ data: data.data });
        }).catch(function (err) {
            res.status(err.status).send({ message: "Error" });
        })
});

module.exports = router;