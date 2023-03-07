//initialisation variables pour vérification formulaire
var mail = document.getElementById("mail");
var titre = document.getElementById("title");
var message = document.getElementById("message");
var formValide = document.getElementById("sender");

var zoneMessage1 = document.getElementById("message1");
var zoneMessage2 = document.getElementById("message2");
var zoneMessage3 = document.getElementById("message3");

var mailVerification = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//initialisation variables pour aide contextuelles
var etiquetteMail = document.getElementById("etiquette-mail");
var etiquetteTitre = document.getElementById("etiquette-titre");
var etiquetteMessage = document.getElementById("etiquette-message");

var aideMail = document.getElementById("aide-mail");
var aideTitre = document.getElementById("aide-titre");
var aideMessage = document.getElementById("aide-message");

formValide.addEventListener("click", validation);

function validation() {
  if (mail.value == "") {
    zoneMessage1.innerHTML = "E-mail manquant";
    zoneMessage2.innerHTML = " ";
    zoneMessage3.innerHTML = " ";
    zoneMessage1.style.color = "red";
    zoneMessage1.style.backgroundColor = "black";
    zoneMessage1.style.fontWeight = "bold";
    zoneMessage1.style.width = "30%";
    zoneMessage1.style.textAlign = "center";
    zoneMessage1.style.margin = "10px auto ";
    mail.style.borderColor = "red";
    titre.style.borderColor = "black";
    message.style.borderColor = "black";
    mail.focus();
    return false;
  }

  if (mailVerification.test(mail.value) == false) {
    zoneMessage1.innerHTML = "E-mail incorect";
    zoneMessage2.innerHTML = " ";
    zoneMessage3.innerHTML = " ";
    zoneMessage1.style.color = "red";
    zoneMessage1.style.backgroundColor = "black";
    zoneMessage1.style.fontWeight = "bold";
    zoneMessage1.style.width = "30%";
    zoneMessage1.style.textAlign = "center";
    zoneMessage1.style.margin = "10px auto ";
    mail.style.borderColor = "red";
    titre.style.borderColor = "black";
    message.style.borderColor = "black";
    mail.focus();
    return false;
  }

  if (titre.value == "") {
    zoneMessage1.innerHTML = " ";
    zoneMessage2.innerHTML = "Titre manquant";
    zoneMessage3.innerHTML = " ";
    zoneMessage2.style.color = "red";
    zoneMessage2.style.backgroundColor = "black";
    zoneMessage2.style.fontWeight = "bold";
    zoneMessage2.style.width = "30%";
    zoneMessage2.style.textAlign = "center";
    zoneMessage2.style.margin = "10px auto ";
    mail.style.borderColor = "black";
    titre.style.borderColor = "red";
    message.style.borderColor = "black";
    title.focus();
    return false;
  }

  if (message.value == "") {
    zoneMessage1.innerHTML = " ";
    zoneMessage2.innerHTML = " ";
    zoneMessage3.innerHTML = "Message manquant";
    zoneMessage3.style.color = "red";
    zoneMessage3.style.backgroundColor = "black";
    zoneMessage3.style.fontWeight = "bold";
    zoneMessage3.style.width = "30%";
    zoneMessage3.style.textAlign = "center";
    zoneMessage3.style.margin = "10px auto ";
    mail.style.borderColor = "black";
    titre.style.borderColor = "black";
    message.style.borderColor = "red";
    message.focus();
    return false;
  }

  return true;
}

function augmenterAideContextuelle(){
  var texteAideMail = etiquetteMail.title;
  var texteAideTitre = etiquetteTitre.title;
  var texteAideMessage = etiquetteMessage.title;

  etiquetteMail = "";
  etiquetteTitre = ""
  etiquetteMessage = "";

  etiquetteMail.addEventListener("mouseover", mouseOverMail);
  etiquetteMail.addEventListener("mouseout", mouseOutMail);

  etiquetteTitre.addEventListener("mouseover", mouseOverTitre);
  etiquetteTitre.addEventListener("mouseout", mouseOutTitre);

  etiquetteMessage.addEventListener("mouseover", mouseOverMessage);
  etiquetteMessage.addEventListener("mouseout", mouseOutMessage);

  function mouseOverMail(){
    aideMail.innerHTML = texteAideMail;
    aideMail.style.display = "block";
  }
  function mouseOutMail(){
    aideMail.innerHTML = "";
    aideMail.style.display = "none";
  }

  function mouseOverTitre(){
    aideTitre.innerHTML = texteAideTitre;
    aideTitre.style.display = "block";
  }
  function mouseOverTitre(){
    aideTitre.innerHTML = "";
    aideTitre.style.display = "none";
  }

  function mouseOverMessage(){
    aideMessage.innerHTML = texteAideMessage;
    aideMessage.style.display = "block";
  }
  function mouseOverMessage(){
    aideMessage.innerHTML = "";
    aideMessage.style.display = "none";
  }
}
augmenterAideContextuelle();