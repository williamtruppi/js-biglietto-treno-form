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
  
  console.log(userName);
  console.log(userKilometers);
  console.log(userAge);

});
