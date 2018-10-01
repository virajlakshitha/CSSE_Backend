const express=require('express');
var Routes=express.Router();
// var StartJourneyRoute=require('./Controller/StartJourney.Route');
var JourneyRoute=require('./Controller/JourneyDetails.Route');
var CalculateTotalRoute=require('./Controller/CalculateTotal.Route');

// Routes.use('/routes/',StartJourneyRoute);
Routes.use('/journey/',JourneyRoute);
Routes.use('/total/',CalculateTotalRoute);

module.exports = Routes;