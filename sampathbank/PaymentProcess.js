var Process=function () {
    this.processPayment=function (data) {
         ///console.log("dfhhhhhhhhhhdsg");
        console.log('Payment accepted for Rs.'+data.amount);
    }
}
module.exports=new Process();