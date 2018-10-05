var express = require('express');
var router = express.Router();
var Controller = require('./FareAlgorithmController');

//To get all details
router.get('/', function (req, res) {
    
        Controller.getAll().then(function (data) {
            res.status(data.status).send({ data: data.data });
        }).catch(function (err) {
            res.status(err.status).send({ message: "Error" });
        })
});
//To get the total amount
router.get('/tot/:route/:busType', function (req, res) {
    
        Controller.getTotAmount(req.params.route,req.params.busType).then(function (data) {
            res.status(data.status).send({ data: data.data });
        }).catch(function (err) {
            res.status(err.status).send({ message: message });
        })
});
//To get the bus fare. There are two kinds of bus fares 
router.get('/route/:busType', function (req, res) {
    
        Controller.getBusFare(req.params.busType).then(function (data) {
            res.status(data.status).send({ data: data.data });
        }).catch(function (err) {
            res.status(err.status).send({ message: message });
        })
});

module.exports = router;