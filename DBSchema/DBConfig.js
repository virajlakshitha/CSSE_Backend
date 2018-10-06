var mongoose = require('mongoose');
// var moment = require('moment');
const Schema = mongoose.Schema;

//Store tour details
const JourneyDetails=new Schema({
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

mongoose.connect('mongodb://127.0.0.1:27017/csse', function (err) {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log('Connected to MongoDB');
});
module.exports = mongoose;