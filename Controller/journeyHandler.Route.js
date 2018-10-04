var express = require('express');
var router = express.Router();
var Controller = require('./journeyHandlerController');

router.post('/', function (req, res) {
    //if (req.headers.authorization === "admin123") {
        Controller.insertJourney(req.body).then(function (data) {
            res.status(data.status).send({ message: data.message });
        }).catch(function (err) {
            res.status(err.status).send({ message: err.message });
        })
});
router.get('/', function (req, res) {
    // if (req.headers.authorization === "admin123") {
        Controller.getAll().then(function (data) {
            res.status(data.status).send({ data: data.data });
        }).catch(function (err) {
            res.status(err.status).send({ message: "Error" });
        })
});
router.get('/:route', function (req, res) {
    // if (req.headers.authorization === "admin123") {
        Controller.getRoute(req.params.route).then(function (data) {
            res.status(data.status).send({ data: data.data });
        }).catch(function (err) {
            res.status(err.status).send({ message: "Error" });
        })
});

module.exports = router;