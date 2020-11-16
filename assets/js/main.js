//assegnazione dei due pulsanti
var btnGenera = document.getElementById('btn_genera');
var btnAnnulla = document.getElementById('btn_annulla');

document.getElementById("travel_ticket").style.display = "none";

btnGenera.addEventListener("click", function (){
  var userNameInput = document.getElementById("username");
  var userKilometersInput = document.getElementById("distance");
  var userAgeInput = document.getElementById("user_age");
  
  var userName = userNameInput.value;
  var userKilometers = userKilometersInput.value;
  var userAge = userAgeInput.value;
  
  console.log(userName, userKilometers, userAge);

  var price = 0.21;
  var finalPrice;

  if (userAge == "minorenne"){
    finalPrice = (price * userKilometers) - ((price * userKilometers) * 0.20);
    console.log(finalPrice);
  } else if (userAge == "over65") {
    finalPrice = (price * userKilometers) - ((price * userKilometers) * 0.40);
    console.log(finalPrice);
  } else {
    finalPrice = price * userKilometers;
    console.log(finalPrice);
  }

  var ticketName = document.getElementById("ticket_name");
  var ticketDiscount = document.getElementById("ticket_discount");
  var ticketWagon = document.getElementById("ticket_wagon");
  var ticketCpCode = document.getElementById("cp_code");
  var ticketPrice = document.getElementById("ticket_price");

  var wagonNumber = Math.floor(Math.random() * 9) + 1;
  var cpCode = Math.floor(Math.random() * (100000 - 90000)) + 90000;

  ticketName.innerHTML = userName;
  ticketDiscount.innerHTML = userAge;
  ticketWagon.innerHTML = wagonNumber;
  ticketCpCode.innerHTML = cpCode;
  ticketPrice.innerHTML = finalPrice;

  document.getElementById("travel_ticket").style.display = "block";


});
