var Controller = require('./FareAlgorithmController');

class FareAlgorithm{

    constructor(){
        
    }

    //Calculation of tour amount
    journeyTotal(dd,fare,number,lat,long){
        var halts=0;
        var tot=0;
        var routes={};
        var TotAmount=0;
        var blength=dd.haults['busHault'].length;
        var i;
        var count=0;
        for(i=0;i<blength;i++){
            if(lat==dd.haults['latitude'][i] && long==dd.haults['longtitude'][i]){
                var j;
                for(j=i;j<blength-1;j++){
                    count++;
                }
                break;
            }
        }
        if(number-count>3){
            TotAmount=12+((number-count-3)*fare);
        }
        else{
            TotAmount=12;
        }
        return TotAmount;
    }
}

module.exports = new FareAlgorithm();