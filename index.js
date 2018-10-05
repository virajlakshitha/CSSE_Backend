var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override')

var app = express();
var cors = require('cors');
const Routes=require('./Routes');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());
app.use('/',Routes);

 
app.listen(3001,'localhost',function(err) {
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log('Backend server running in port 3001');
});