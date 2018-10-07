var mongoose = require('../DBSchema/DBConfig');
var RMSchema = mongoose.model('RouteManagerSchema');

var ControllerRM=function () {
    this.addRM=function (data) {
        return new Promise(function (resolve,reject) {
            var rm=new RMSchema({
                NIC: data.NIC,
                First_Name: data.First_Name,
                Last_Name: data.Last_Name,                
                Username: data.Username,
                Password: data.Password,
                Email_Address: data.Email_Address,
                Address: data.Address,
                Mobile: data.Mobile
            });
            rm.save().then(function () {
                resolve({status:200,message:"Route Manager added successfully!"});
            }).catch(function (err) {
                reject({status:500,message:"Error : "+err});
            })
        });
    }
    this.getAllRM=function () {
        return new Promise (function (resolve,reject) {
            RMSchema.find().exec().then(function (data) {
                resolve({status:200,rmData:data});
            }).catch(function (err) {
                reject({status:404,message:"Data not available : "+err});
            })
        })
    }
    this.searchRM = function (NIC) {
        return new Promise(function (resolve, reject) {
            RMSchema.findOne({ NIC: NIC }).exec().then(function (data) {
                resolve({ status: 200, rmSearch: data });
            }).catch(function (err) {
                reject({ status: 404, message: "Route Manager not found!" });
            })
        })
    }
    this.updateRM = function (NIC, body) {
        return new Promise(function (resolve, reject) {
            RMSchema.updateOne({ NIC: NIC}, body).then(function (data) {
                resolve({ status: 200, userUpdated: data });
            }).catch(function (err) {
                reject({ status: 404, message: "Route Manager not found!" });
            })
        })
    }
}

module.exports = new ControllerRM;