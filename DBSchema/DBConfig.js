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
// const BusTypeFare=new Schema({
//     fareType: String,
//     fareBasic: Number,
//     fareAdditional:Number
// })
//Route details
const Routes = new Schema({
    route: String,
    start: String,
    startLat: Number,
    startLong: Number,
    haults: {
        busHault: String,
        latitude: Number,
        longtitude: Number
    },
    end: String,
    endLat: Number,
    endLong: Number
});
//Bus fare details
const BusFare = new Schema({
    normalFare: Number,
    longFare: Number
})

//RouteManagement
const RouteManagerSchema = new Schema({
    NIC: String,
    First_Name: String,
    Last_Name: String,
    Username: String,
    Password: String,
    Email_Address: String,
    Address: String,
    Mobile: Number
});

const paymentSchema = new Schema({
    Username: {
        type: String,
        require: true
    },
    busRoute: {
        type: String,
        require: true
    },
    start: {
        type: String,
        require: true
    },
    end: {
        type: String,
        require: true
    },
    amount: {
        type: Number,
        require: true
    }

});

mongoose.model('payment', paymentSchema);
mongoose.model('RouteManagerSchema',RouteManagerSchema);
mongoose.model('JourneyDetails', JourneyDetails);
mongoose.model('Routes', Routes);
mongoose.model('BusFare', BusFare);
// mongoose.model('BusTypeFare',BusTypeFare);

mongoose.model('Customer', CustomerSchema);

mongoose.connect('mongodb://127.0.0.1:27017/CSSE_DB', { useNewUrlParser: true }, function (err) {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log('Connected to MongoDB....');
});
module.exports = mongoose;