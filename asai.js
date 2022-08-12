function radianToDegree(radian){
  let degree = radian * 57.2957795;
  degree = degree.toFixed(2);
  return degree;
  
}




function isJavaScriptFile(){

}




function oilPrice (dieselQuantity, petrolQuantity, octaneQuantity){
  const dieselPrice = 114;
  const petrolPrice = 130;
  const octanePrice = 135;

  let totalDiesel = dieselQuantity * dieselPrice;
  let totalPetrol = petrolQuantity * petrolPrice;
  let totalOctane = octaneQuantity * octanePrice;
  
  let totalPrice = totalDiesel+totalPetrol+totalOctane;

  return totalPrice;

}




function publicBusFare(busFair){
  const picnicBus = 100;
  const microBus = 11;
  const publicBus = 6;

  if(busFair <= picnicBus){
    let picnicBusTraveler = 117 % 100;
    return picnicBusTraveler;
  }
  else if(busFair <= microBus){
    let microBusTraveler = 117 % 11;
    return microBusTraveler;
  }
  else if(busFair <= publicBus){
    let publicBusTraveler = 117 % 6;
    return publicBusTraveler;
  }
  else {
    let totalTraveler = picnicBusTraveler + microBusTraveler + publicBusTraveler;
    return totalTraveler;
  }

}




function isBestFriend(){

}