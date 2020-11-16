//assegnazione dei due pulsanti
var btnGenera = document.getElementById('btn_genera');
var btnAnnulla = document.getElementById('btn_annulla');

//struttura dei biglietto di viaggio nascosta temporaneamente
// document.getElementById("travel_ticket").style.display = "none";

//istruzioni da eseguire alla pressione del tasto GENERA
btnGenera.addEventListener("click", function (){

  // assegnazione alle variabili del contenuto degli input
  var userNameInput = document.getElementById("username");
  var userKilometersInput = document.getElementById("distance");
  var userAgeInput = document.getElementById("user_age");
  
  var userName = userNameInput.value;
  var userKilometers = userKilometersInput.value;
  var userAge = userAgeInput.value;
  
  console.log(userName, userKilometers, userAge);

  // inizializzazione variabili prezzo biglietto
  var price = 0.21;
  var finalPrice;

  // calcolo del costo del biglietto
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

  // assegnazione del contenuto della tabella alle rispettive variabili
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
  ticketPrice.innerHTML = finalPrice.toFixed(2) + " €";

  // la struttura del biglietto viene resa nuovamente visibile
  document.getElementById("travel_ticket").style.display = "block";

});

btnAnnulla.addEventListener("click", function (){
  
  // la struttura del biglietto viene resa nuovamente NON VISIBILE
  document.getElementById("travel_ticket").style.display = "none";
  document.getElementById("username").value = "";
  document.getElementById("distance").value = "";
  document.getElementById("user_age").value = "";
});
