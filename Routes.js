const express=require('express');
var Routes=express.Router();
var User = require('./Controller/UserRoute');
var View = require('./Controller/ViewJourneysRoutes');

Routes.use('/user/',User);
Routes.use('/journeyhistory/',View);

module.exports = Routes;