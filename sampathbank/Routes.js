const express=require('express');
var Routes=express.Router();
var Gateway=require('./PaymentGateway');
 ///console.log("work");
Routes.use('/cardPayment/',Gateway);
 ///console.log("work");
module.exports = Routes;