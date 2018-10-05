var mongoose = require('../DBSchema/DBConfig');
var UserSchema = mongoose.model('JourneyDetails');

var Controller = function () {

    this.getAllJourneys = function () {
        return new Promise(function (resolve, reject) {
            UserSchema.find().exec().then(function (data) {
                resolve({ status: 200, data: data });
            }).catch(function (err) {
                reject({ status: 404, message: "Data Not Available....!" });
            })
        })
    };

    this.getUserJourneys = function (Username) {
        return new Promise(function (resolve, reject) {
            UserSchema.find({ Username: Username }).sort({'date':1}).exec().then(function (data) {
                resolve({ status: 200, data: data });
            }).catch(function (err) {
                reject({ status: 404, message: "Data Not Available....!" });
            })
        })
    };
    this.getLastJourney = function (Username) {
        return new Promise(function (resolve, reject) {
            UserSchema.findOne({ Username: Username }).sort({'date':-1}).exec().then(function (data) {
                resolve({ status: 200, data: data });
            }).catch(function (err) {
                reject({ status: 404, message: "Data Not Available....!" });
            })
        })
    };

};

module.exports = new Controller();