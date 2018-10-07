const express=require('express');
var Routes=express.Router();
// var StartJourneyRoute=require('./Controller/StartJourney.Route');
var JourneyRoute=require('./Controller/journeyHandler.Route');
var FareAlgorithmRoute=require('./Controller/FareAlgorithm.Route');
var PaymentRoute=require('./Controller/Payment.Route');
// Routes.use('/routes/',StartJourneyRoute);
// Routes.use('/total/',CalculateTotalRoute);
var User = require('./Controller/UserRoute');
var View = require('./Controller/ViewJourneysRoutes');
var RouteRoute=require('./Controller/Route.Route');
var RMRoute=require('./Controller/RouteManager.Route');

var CustRoute=require('./Controller/Cust.Route');

Routes.use('/Payment/',PaymentRoute);
Routes.use('/customer/',CustRoute);
Routes.use('/user/',User);
Routes.use('/journeyhistory/',View);
Routes.use('/journey/',JourneyRoute);
Routes.use('/total/',FareAlgorithmRoute);
Routes.use('/route/',RouteRoute);
Routes.use('/rm/',RMRoute);

module.exports = Routes;