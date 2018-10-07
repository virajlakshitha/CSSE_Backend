const express=require('express');
var Routes=express.Router();
var Gateway=require('./PaymentGateway');

Routes.use('/mobilePayment/',Gateway);
module.exports = Routes;