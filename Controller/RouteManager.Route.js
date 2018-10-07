var express = require('express');
var Router = express.Router();
var RMController = require('./RouteManagerController'); 

Router.post('/', function (req, res) {
    RMController.addRM(req.body).then(function (data) {
        res.status(data.status).send({ message: data.message });
    }).catch(function (err) {
        res.status(err.status).send({ message: err.message });
    })
});

Router.get('/', function (req, res) {
    RMController.getAllRM().then(function (data) {
        res.status(data.status).send({ data: data.rmData });
    }).catch(function (err) {
        res.status(err.status).send({ message: "Error" });
    })
});

Router.get('/:id', function (req, res) {
        RMController.searchRM(req.params.id).then(function (data) {
            res.status(data.status).send({ data: data.rmSearch });
        }).catch(function (err) {
            res.status(err.status).send({ message: err.message });
        })
});

Router.put('/:id', function (req, res) {
        RMController.updateRM(req.params.id, req.body).then(function (data) {
            res.status(data.status).send({ data: data.rmUpdated });
        }).catch(function (err) {
            res.status(err.status).send({ message: err.message });
        })
});

module.exports = Router;