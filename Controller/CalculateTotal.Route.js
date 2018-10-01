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
router.get('/tot/:route', function (req, res) {
    // if (req.headers.authorization === "admin123") {
        Controller.getTotAmount(req.params.route).then(function (data) {
            res.status(data.status).send({ data: data.data });
        }).catch(function (err) {
            res.status(err.status).send({ message: message });
        })
});

module.exports = router;