var express = require('express');
var router = express.Router();
var Controller = require('./CalculateTotalController');

router.get('/', function (req, res) {
    // if (req.headers.authorization === "admin123") {
        Controller.getAll().then(function (data) {
            res.status(data.status).send({ data: data.data });
        }).catch(function (err) {
            res.status(err.status).send({ message: "Error" });
        })
});
router.get('/tot/:route/:busType', function (req, res) {
    // if (req.headers.authorization === "admin123") {
        Controller.getTotAmount(req.params.route,req.params.busType).then(function (data) {
            res.status(data.status).send({ data: data.data });
        }).catch(function (err) {
            res.status(err.status).send({ message: message });
        })
});
router.get('/route/:busType', function (req, res) {
    // if (req.headers.authorization === "admin123") {
        Controller.getBusFare(req.params.busType).then(function (data) {
            res.status(data.status).send({ data: data.data });
        }).catch(function (err) {
            res.status(err.status).send({ message: message });
        })
});

module.exports = router;