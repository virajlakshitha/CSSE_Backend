var express = require('express');
var Router = express.Router();
var Controller = require('./UserController');


Router.post('/', function (req, res) {
    // if (req.headers.authorization === "abc") {
    Controller.addUser(req.body).then(function (data) {
        res.status(data.status).send({ message: data.message });
    }).catch(function (err) {
        res.status(err.status).send({ message: err.message });
    })
    //  } else {
    //  res.status("401").send({ message: "UnAuthorized Access.....!" });
    //  }
});
Router.get('/', function (req, res) {
    //  if (req.headers.authorization === "abc") {
    Controller.getAll().then(function (data) {
        res.status(data.status).send({ data: data.userdata });
    }).catch(function (err) {
        res.status(err.status).send({ message: "Error" });
    })
    // } else {
    //  res.status("401").send({ message: "UnAuthorized Access.....!" });
    // }
});
Router.get('/:id', function (req, res) {
    //if (req.headers.authorization === "abc") {
        Controller.searchUser(req.params.id).then(function (data) {
            res.status(data.status).send({ data: data.userSearch });
        }).catch(function (err) {
            res.status(err.status).send({ message: err.message });
        })
    // } else {
    //     res.status("401").send({ message: "UnAuthorized Access.....!" });
    // }
});
Router.put('/:id', function (req, res) {
    //if (req.headers.authorization === "abc") {
        Controller.updateUser(req.params.id, req.body).then(function (data) {
            res.status(data.status).send({ data: data.userUpdated });
        }).catch(function (err) {
            res.status(err.status).send({ message: err.message });
        })
    // } else {
    //     res.status("401").send({ message: "UnAuthorized Access.....!" });
    // }
});

module.exports = Router;