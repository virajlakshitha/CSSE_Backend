var mongoose=require('../DBSchema/DBConfig');
var PaymentSchema = mongoose.model('payment');

var Controller=function () {
    this.insertPayment=function (data) {
        return new Promise(function (resolve,reject) {
            var payment=new PaymentSchema({
                Username: data.Username,
                busRoute : data.busRoute,
                start:data.start,
                end:date.end,
                fare:date.fare,
                date:date.date
            });
            payment.save().then(function () {
                resolve({status:200,message:" successfully !"});
            }).catch(function (err) {
                reject({status:500,message:err});
            })
        });
    }
    this.getAll=function () {
        return new Promise(function (resolve,reject) {
            PaymentSchema.find().exec().then(function (data) {
                resolve({status:200,menudata:data});
            }).catch(function (err) {
                reject({status:404,message:"No data available"});
            })
        })
    }
    this.getpayment=function(Username){
        return new Promise(function (resolve,reject) {
            PaymentSchema.find({Username:Username}).exec().then(function (data) {
                resolve({status:200,menuSearch:data});
            }).catch(function (err) {
                reject({status:404,message:"No ID found !"});
            })
        })
    }
};
module.exports = new Controller();