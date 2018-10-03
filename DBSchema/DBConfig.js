var mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const StartJourney = new Schema({
//     name: String,
//     latitude: Number,
//     longtitude: Number
// });
// const EndJourney = new Schema({
//     name: String,
//     latitude: Number,
//     longtitude: Number
// });
const JourneyDetails=new Schema({
    Username: String,
    busRoute: String,
    start: String,
    startLat: Number,
    startLong: Number,
    end: String,
    endLat: Number,
    endLong: Number,
    amount: Number,
    date: Date
})
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
const BusFare=new Schema({
    normalFare: Number,
    longFare: Number
})
//journey
// mongoose.model('StartJourney', StartJourney);
// mongoose.model('EndJourney', EndJourney);
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