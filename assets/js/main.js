//assegnazione dei due pulsanti
var btnGenera = document.getElementById('btn_genera');
var btnAnnulla = document.getElementById('btn_annulla');

btnGenera.addEventListener("click", function (){
  var userNameInput = document.getElementById("username");
  var userKilometersInput = document.getElementById("distance");
  var userAgeInput = document.getElementById("user_age");
  
  var userName = userNameInput.value;
  var userKilometers = userKilometersInput.value;
  var userAge = userAgeInput.value;
  
  console.log(userName, userKilometers, userAge);

  var ticketPrice = 0.21;
  var finalPrice;

  if (userAge == "minorenne"){
    finalPrice = (ticketPrice * userKilometers) - ((ticketPrice * userKilometers) * 0.20);
    console.log(finalPrice);
  } else if (userAge == "over65") {
    finalPrice = (ticketPrice * userKilometers) - ((ticketPrice * userKilometers) * 0.40);
    console.log(finalPrice);
  } else {
    finalPrice = ticketPrice * userKilometers;
    console.log(finalPrice);
  }
});
