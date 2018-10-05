function journeyTotal(data,fare){
    var halts=0;
    var tot=0;
    halts=data.length;
    tot=(halts-3)*fare;
    return tot;
}

function getRoutes(data,startLoc){
    var routes=data.split(",");
    for(var i=0;i<routes.length;i++){
        if(startLoc==routes[i]){
            return 1;
        }
    }
}