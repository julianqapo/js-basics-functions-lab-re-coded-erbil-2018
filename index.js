// Code your solution in this file!
function distanceFromHqInBlocks(){


};

function distanceTravelledInFeet(){



}


function calculatesFarePrice(distance){
   if (distance<=400) {console.log('free of charge');}
     else if ((distance > 400) && (distance <2000)) {return distance * 2- (400*2);}
     else {console.log("cannot travel that far")}



     function calculatesFarePrice(start, destination){
     let n =Math.abs(start-destination)*528-800;
     if (n<1){return 0}
     else {return n}
     }
