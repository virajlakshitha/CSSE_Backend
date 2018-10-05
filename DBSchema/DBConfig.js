var mongoose = require('mongoose');
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
    date: Date
});

mongoose.model('JourneyDetails', JourneyDetails);
mongoose.model('Customer', CustomerSchema);
mongoose.connect('mongodb://127.0.0.1:27017/CSSE_DB', { useNewUrlParser: true }, function (err) {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log('Connected to MongoDB');
});
module.exports = mongoose;