var mongoose=require('../DBSchema/DBConfig');
var Schema = mongoose.model('JourneyDetails');
var Schema1 = mongoose.model('Routes');

var Controller=function () {
    this.insertJourney=function (data) {
        return new Promise(function (resolve,reject) {
            var JourneyDetails=new Schema({
                Username: data.Username,
                busRoute: data.busRoute,
                start: data.start,
                startLat: data.startLat,
                startLong: data.startLong,
                end: data.end,
                endLat: data.endLat,
                endLong: data.endLong,
                date: data.date,
                fare: data.fare                
            });
            JourneyDetails.save().then(function () {
                resolve({status:200,message:"Journey Details Added Successfully !"});
            }).catch(function (err) {
                reject({status:500,message:"Error: "+err});
            })
        });
    }
    this.getAll=function () {
        return new Promise(function (resolve,reject) {
            Schema.find().exec().then(function (data) {
                resolve({status:200,data:data});
            }).catch(function (err) {
                reject({status:404,message:"No data available"});
            })
        })
    }
    this.getRoute=function (route) {
        return new Promise(function (resolve,reject) {
            Schema1.find({route:route}).exec().then(function (data) {
                resolve({status:200,data:data});
            }).catch(function (err) {
                reject({status:404,message:"No data available"});
            })
        })
    }
};
module.exports = new Controller();