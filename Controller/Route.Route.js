var express = require('express');
var Router = express.Router();
var RouteController = require('./RouteController'); 

Router.post('/', function (req, res) {
    RouteController.addRoute(req.body).then(function (data) {
        res.status(data.status).send({ message: data.message });
    }).catch(function (err) {
        res.status(err.status).send({ message: err.message });
    })
});

Router.get('/', function (req, res) {
    RouteController.getAllRoutes().then(function (data) {
        res.status(data.status).send({ data: data.routeData });
    }).catch(function (err) {
        res.status(err.status).send({ message: "Error" });
    })
});

Router.get('/:id', function (req, res) {
    RouteController.searchRoute(req.params.id).then(function (data) {
            res.status(data.status).send({ data: data.routeSearch });
        }).catch(function (err) {
            res.status(err.status).send({ message: err.message });
        })
});

Router.put('/:id', function (req, res) {
    RouteController.updateRoute(req.params.id, req.body).then(function (data) {
            res.status(data.status).send({ data: data.routeUpdated });
        }).catch(function (err) {
            res.status(err.status).send({ message: err.message });
        })
});

module.exports = Router;