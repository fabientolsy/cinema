var balise = document.createElement("h3");
var item = document.getElementsByClassName("test");
balise.style.color = "white";

document.getElementById("compteur").appendChild(balise).innerHTML = 
    "Nombre d'articles dans la liste: " + item.length;