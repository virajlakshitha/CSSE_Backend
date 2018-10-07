var express = require('express');
var router = express.Router();
var Controller = require('./PaymentController');

router.post('/', function (req, res) {
   
        Controller.insertPayment(req.body).then(function (data) {
            res.status(data.status).send({ message: data.message });
        }).catch(function (err) {
            res.status(err.status).send({ message: err.message });
        })
   
});
router.get('/', function (req, res) {
    
        Controller.getAll().then(function (data) {
            res.status(data.status).send({ data: data.menudata });
        }).catch(function (err) {
            res.status(err.status).send({ message: "Error" });
        })
    
});
router.get('/:Username', function (req, res) {
    
        Controller.getCust(req.params.Username).then(function (data) {
            res.status(data.status).send({ data: data.menuSearch });
        }).catch(function (err) {
            res.status(err.status).send({ message: err.message });
        })
 
});
module.exports = router;