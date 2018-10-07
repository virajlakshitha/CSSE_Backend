var mongoose=require('../DBSchema/DBConfig');
var fareAlgorithm=require('./FareAlgorithm');
var Schema = mongoose.model('Routes');
var Schema1 = mongoose.model('BusFare');
var busTot;

var FareAlgorithmController=function () {
    //To get all tour details
    this.getAll=function () {
        return new Promise(function (resolve,reject) {
            Schema.find().exec().then(function (data) {
                resolve({status:200,data: data});
            }).catch(function (err) {
                reject({status:404,message:"No data available"});
            })
        })
    }
    //To get details and calculate the total amount
    this.getTotAmount=function(route,fare,number,lat,long){
        return new Promise(function (resolve,reject) {
            Schema.find({route:route}).exec().then(function (data) {
                resolve({status:200,data: fareAlgorithm.journeyTotal(data[0],fare,number,lat,long)});
                console.log(data);
            }).catch(function (err) {
                reject({status:404,message:"No data available"});
            })
        })    
    }
    //To get bus fare
    this.getBusFare=function(){
        return new Promise(function (resolve,reject){
            Schema1.find().exec().then(function(data){
                resolve({status:200,data: data[0]});
            }).catch(function(err){
                reject({status:404,message:"No data available"});
            })
        })
    }   
};


module.exports = new FareAlgorithmController();