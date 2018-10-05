var express = require('express');
var Router = express.Router();
var Controller = require('./ViewJourneyController');


// Router.get('/', function (req, res) {
//     console.log('executed 01');
// });
// Router.get('/last/', function (req, res) {
//     console.log('executed 02');
// });
// Router.get('/last/view', function (req, res) {
//     console.log('executed 03');
// });

Router.get('/', function (req, res) {
    //  if (req.headers.authorization === "abc") {
    Controller.getAllJourneys().then(function (data) {
        res.status(data.status).send({ data: data.data });
    }).catch(function (err) {
        res.status(err.status).send({ message: "Error" });
    })
    // } else {
    //  res.status("401").send({ message: "UnAuthorized Access.....!" });
    // }
});

Router.get('/:id', function (req, res) {
    //if (req.headers.authorization === "abc") {
        Controller.getUserJourneys(req.params.id).then(function (data) {
            res.status(data.status).send({ data: data.data });
        }).catch(function (err) {
            res.status(err.status).send({ message: err.message });
        })
    // } else {
    //     res.status("401").send({ message: "UnAuthorized Access.....!" });
    // }
});

Router.get('/last/:id', function (req, res) {
    //if (req.headers.authorization === "abc") {
        Controller.getLastJourney(req.params.id).then(function (data) {
            res.status(data.status).send({ data: data.data });
        }).catch(function (err) {
            res.status(err.status).send({ message: err.message });
        })
    // } else {
    //     res.status("401").send({ message: "UnAuthorized Access.....!" });
    // }
});

module.exports = Router;