var mongoose=require('../DBSchema/DBConfig');
var Schema = mongoose.model('Routes');
var Schema1 = mongoose.model('BusFare');
var busTot;

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
    this.getTotAmount=function(route,busType){
        return new Promise(function (resolve,reject) {
            Schema.find({route:route}).exec().then(function (data) {
                resolve({status:200,data: journeyTotal(data[0],busType)});
            }).catch(function (err) {
                reject({status:404,message:"No data available"});
            })
        })    
    }
    // this.getNormalBusFare=function(busType){
    //     return new Promise(function (resolve,reject){
    //         Schema1.find({normalFare:busType}).exec().then(function(data){
    //             resolve({status:200,data: data});
    //         }).catch(function(err){
    //             reject({status:404,message:"No data available"});
    //         })
    //     })
    // }
    // this.getSpecialBusFare=function(busType){
    //     return new Promise(function (resolve,reject){
    //         Schema1.find({specialFare:busType}).exec().then(function(data){
    //             resolve({status:200,data: data});
    //         }).catch(function(err){
    //             reject({status:404,message:"No data available"});
    //         })
    //     })
    // }
    this.getBusFare=function(){
        return new Promise(function (resolve,reject){
            Schema1.find().exec().then(function(data){
                resolve({status:200,data: data});
                busTot=data;
            }).catch(function(err){
                reject({status:404,message:"No data available"});
            })
        })
    }
    function journeyTotal(dd,busType){
        var halts=0;
        var tot=0;
        var routes={};
        // routes=data.split(",");
        // this.getBusFare=function(busType){
        //     return new Promise(function (resolve,reject){
        //         Schema1.find({normalFare:busType}).exec().then(function(data){
        //             resolve({status:200,busTot: data});
        //         }).catch(function(err){
        //             reject({status:404,message:"No data available"});
        //         })
        //     })
        // }
        // this.getBusFare(busType);
        // halts=routes.length;
        // tot=(halts-3)*busTot;
        // return tot;
        var key, count = 0;
        for(key in dd.haults) {
            if(dd.haults.hasOwnProperty(key)) {
                count++;
            }
        }
        // this.getBusFare();
        if(busType=='normalFare'){
            busTot=12;
            tot=(count-2)*busTot;
        }
        else{
            busTot=15;
            tot=(count-2)*busTot;
        }
        return tot;
    }
};


module.exports = new Controller();