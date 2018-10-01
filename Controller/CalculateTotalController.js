var mongoose=require('../DBSchema/DBConfig');
var Schema = mongoose.model('Routes');
var Schema1 = mongoose.model('BusFare');

var Controller=function () {
    this.getAll=function () {
        return new Promise(function (resolve,reject) {
            Schema.find().exec().then(function (data) {
                resolve({status:200,data: data});
            }).catch(function (err) {
                reject({status:404,message:"No data available"});
            })
        })
    }
    this.getTotAmount=function(route){
        return new Promise(function (resolve,reject) {
            Schema.find({route:route}).exec().then(function (data) {
                resolve({status:200,data: journeyTotal(data.haults,2)});
            }).catch(function (err) {
                reject({status:404,message:"No data available"});
            })
        })    
    }
    this.getNormalBusFare=function(busType){
        return new Promise(function (resolve,reject){
            Schema1.find({normalFare:busType}).exec().then(function(data){
                resolve({status:200,data: data});
            }).catch(function(err){
                reject({status:404,message:"No data available"});
            })
        })
    }
    this.getSpecialBusFare=function(busType){
        return new Promise(function (resolve,reject){
            Schema1.find({specialFare:busType}).exec().then(function(data){
                resolve({status:200,data: data});
            }).catch(function(err){
                reject({status:404,message:"No data available"});
            })
        })
    }
};
function journeyTotal(data,fare){
    var halts=0;
    var tot=0;
    var routes={};
    routes=data.split(",");
    halts=routes.length;
    tot=(halts-3)*fare;
    return tot;
}

module.exports = new Controller();