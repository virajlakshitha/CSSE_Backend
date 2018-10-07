var express = require('express');
var router = express.Router();
var rn = require('random-number');

router.get('/:id', function (req, res) {
    console.log("Payment added to bill of "+req.params.id);
    res.status(200).send({data:genpin() });
    
});
function genpin(){
    var options = {
    min:  0
  , max:  1000
  , integer: true
  }
  var pin=rn(options)
  console.log(pin)
  return pin;
}

module.exports = router;