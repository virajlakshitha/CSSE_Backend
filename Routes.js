const express=require('express');
var Routes=express.Router();
// var StartJourneyRoute=require('./Controller/StartJourney.Route');
var JourneyRoute=require('./Controller/journeyHandler.Route');
var FareAlgorithmRoute=require('./Controller/FareAlgorithm.Route');

// Routes.use('/routes/',StartJourneyRoute);
Routes.use('/journey/',JourneyRoute);
Routes.use('/total/',FareAlgorithmRoute);

module.exports = Routes;