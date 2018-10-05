const express=require('express');
var Routes=express.Router();
// var StartJourneyRoute=require('./Controller/StartJourney.Route');
var JourneyRoute=require('./Controller/journeyHandler.Route');
var CalculateTotalRoute=require('./Controller/FareAlgorithm.Route');

// Routes.use('/routes/',StartJourneyRoute);
Routes.use('/journey/',JourneyRoute);
Routes.use('/total/',CalculateTotalRoute);
var User = require('./Controller/UserRoute');
var View = require('./Controller/ViewJourneysRoutes');

Routes.use('/user/',User);
Routes.use('/journeyhistory/',View);

module.exports = Routes;