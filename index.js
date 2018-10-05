var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
const Routes=require('./Routes');

app.use(bodyParser.json());
app.use(cors());
app.use('/',Routes);

 
app.listen(3001,'0.0.0.0',function(err) {
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log('Backend server running in port 3001');
});