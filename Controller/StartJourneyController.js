// var mongoose=require('../DBSchema/DBConfig');
// var Schema = mongoose.model('StartJourney');
// var Schema1 = mongoose.model('Routes');

// var Controller=function () {
//     this.insertStartLocation=function (data) {
//         return new Promise(function (resolve,reject) {
//             var StartJourney=new Schema({
//                 name:data.name,
//                 latitude:data.latitude,
//                 longtitude:data.longtitude
//             });
//             StartJourney.save().then(function () {
//                 resolve({status:200,message:"Start Location Added Successfully !"});
//             }).catch(function (err) {
//                 reject({status:500,message:"Error: "+err});
//             })
//         });
//     }
//     this.getRoute=function(route){
//         return new Promise(function (resolve,reject) {
//             Schema1.find({route:route}).exec().then(function (data) {
//                 resolve({status:200,data:getRoutes(data,route)});
//             }).catch(function (err) {
//                 reject({status:404,message:"No data available"});
//             })
//         })
//     }
//     this.getAll=function () {
//         return new Promise(function (resolve,reject) {
//             Schema.find().exec().then(function (data) {
//                 resolve({status:200,data:data});
//             }).catch(function (err) {
//                 reject({status:404,message:"No data available"});
//             })
//         })
//     }
//     this.getStartLocation=function(nic){
//         return new Promise(function (resolve,reject) {
//             Schema.find({nic:nic}).exec().then(function (data) {
//                 resolve({status:200,data:data});
//             }).catch(function (err) {
//                 reject({status:404,message:"No ID found !"});
//             })
//         })
//     }
    
// };
// module.exports = new Controller();