// Code your solution in this file!
function distanceFromHqInBlocks(x){
const HQ_BLOCK = 42; return Math.abs(HQ_BLOCK - x)

};

function distanceFromHqInFeet(z){

return   distanceFromHqInBlocks(z) * 264

}


function distanceTravelledInFeet(start, end){
return Math.abs(start-end) * 264;

}

function calculatesFarePrice(startt, destinationn){
  let d = distanceTravelledInFeet(startt, destinationn)

let fareprice = 0;

if(d >= 400 && d < 2000){
  fareprice = (d-400) * 0.02
}

else if (d>= 2000 && d <2500){
  fareprice = 25
}

else if (d>=2500){

  fareprice = 'cannot travel that far'
}

return fareprice


}
