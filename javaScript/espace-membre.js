//configuration validation formulaire
var formValide = document.getElementById("sender");
var pseudo = document.getElementById("pseudo");
var password = document.getElementById("password");

var zoneMessage1 = document.getElementById("message1");
var zoneMessage2 = document.getElementById("message2");

//configuration aide contextuelle
var etiquettePseudo = document.getElementById("etiquette-pseudo");
var aidePseudo = document.getElementById("aide-pseudo");

var etiquettePassword = document.getElementById("etiquette-password");
var aidePassword = document.getElementById("aide-password");

// gestionnaire d'évènement à click sur le bouton de validation
formValide.addEventListener("click", validation);


//validation du formulaire
function validation() {
  if (pseudo.value == "") {
    zoneMessage1.innerHTML = "Pseudo manquant";
    zoneMessage2.innerHTML = "";
    zoneMessage1.style.color = "red";
    zoneMessage1.style.backgroundColor = "black";
    zoneMessage1.style.fontWeight = "bold";
    zoneMessage1.style.width = "30%";
    zoneMessage1.style.textAlign = "center";
    zoneMessage1.style.margin = "10px auto ";
    pseudo.style.borderColor = "red";
    password.style.borderColor = "black";
    pseudo.focus();
    return false;
  }

  if (password.value == "") {
    zoneMessage1.innerHTML = "";
    zoneMessage2.innerHTML = "Mot de passe manquant";
    zoneMessage2.style.color = "red";
    zoneMessage2.style.backgroundColor = "black";
    zoneMessage2.style.fontWeight = "bold";
    zoneMessage2.style.width = "30%";
    zoneMessage2.style.textAlign = "center";
    zoneMessage2.style.margin = "10px auto ";
    pseudo.style.borderColor = "black";
    password.style.borderColor = "red";
    password.focus();
    return false;
  }

  return true;
}

//fonction de l'aide contextuelle
function augmenterAideContextuelle(){
  var texteAidePseudo = etiquettePseudo.title;
  var texteAidePassword = etiquettePassword.title;

  etiquettePseudo.title = "";
  etiquettePassword.title = "";

  etiquettePseudo.addEventListener("mouseover", mouseOverPseudo);
  etiquettePseudo.addEventListener("mouseout", mouseOutPseudo);

  etiquettePassword.addEventListener("mouseover", mouseOverPassword);
  etiquettePassword.addEventListener("mouseout", mouseOutPassword);

  function mouseOverPseudo(){ 
    aidePseudo.innerHTML = texteAidePseudo;
    aidePseudo.style.display = "block";
  }

  function mouseOutPseudo(){
    aidePseudo.innerHTML = "";
    aidePseudo.style.display = "none";
  }

  function mouseOverPassword(){
    aidePassword.innerHTML = texteAidePassword;
    aidePassword.style.display = "block";
  }
  function mouseOutPassword(){
    aidePassword.innerHTML = "";
    aidePassword.style.display = "none";
  }

}
augmenterAideContextuelle();