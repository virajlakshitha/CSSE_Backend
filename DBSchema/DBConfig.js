var mongoose = require('mongoose');
// var moment = require('moment');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    First_Name: String,
    Last_Name: String,
    NIC_Passport_No: String,
    DateOfBirth: Date,
    citizenship: String,
    Deposit_Amount: Number,
    Username: String,
    Password: String,
    Security_Question: String,
    Security_Answer: String,
    Email_Address: String,
    Address: String,
    Mobile: String
});
//viraj's
const JourneyDetails = new Schema({
    Username: String,
    busRoute: String,
    start: String,
    startLat: Number,
    startLong: Number,
    end: String,
    endLat: Number,
    endLong: Number,
    fare: Number,
    // date: moment().format('MMMM Do YYYY, h:mm:ss a')
    date: Date
})
//Route details
const Routes=new Schema({
    route: String,
    start: String,
    haults: {
        busHault: String,
        latitude: Number,
        longtitude: Number
    },
    end: String
});
//Bus fare details
const BusFare=new Schema({
    normalFare: Number,
    longFare: Number
})
//journey
mongoose.model('JourneyDetails', JourneyDetails);
mongoose.model('Routes', Routes);
mongoose.model('BusFare',BusFare);

mongoose.model('Customer', CustomerSchema);

mongoose.connect('mongodb://127.0.0.1:27017/CSSE_DB', function (err) {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log('Connected to MongoDB....');
});
module.exports = mongoose;