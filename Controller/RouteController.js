var mongoose = require('../DBSchema/DBConfig');
var RouteSchema = mongoose.model('Routes');

var ControllerRoute=function () {
    this.addRoute=function (data) {
        return new Promise(function (resolve,reject) {
            var routes=new RouteSchema({
                route: data.route,
                start: data.start,
                startLat: data.startLat,                
                startLong: data.startLong,
                end: data.end,
                endLat: data.endLat,                
                sendLong: data.endLong

            });
            rm.save().then(function () {
                resolve({status:200,message:"Route added successfully!"});
            }).catch(function (err) {
                reject({status:500,message:"Error : "+err});
            })
        });
    }
    this.getAllRoutes=function () {
        return new Promise (function (resolve,reject) {
            RouteSchema.find().exec().then(function (data) {
                resolve({status:200,routeData:data});
            }).catch(function (err) {
                reject({status:404,message:"Data not available : "+err});
            })
        })
    }
    this.searchRoute = function (route) {
        return new Promise(function (resolve, reject) {
            RouteSchema.findOne({ route: route }).exec().then(function (data) {
                resolve({ status: 200, routeSearch: data });
            }).catch(function (err) {
                reject({ status: 404, message: "Route Manager not found!" });
            })
        })
    }
    this.updateRoute = function (route, body) {
        return new Promise(function (resolve, reject) {
            RouteSchema.updateOne({ NIC: NIC}, body).then(function (data) {
                resolve({ status: 200, routeUpdated: data });
            }).catch(function (err) {
                reject({ status: 404, message: "Route Manager not found!" });
            })
        })
    }
}

module.exports = new ControllerRoute;