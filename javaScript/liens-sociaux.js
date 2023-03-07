var lienFacebook;
var lienInsta;
var lienNetflix;
var lienOCS;
var lienPrime;

lienFacebook = document.getElementById("lien-facebook");
lienInsta = document.getElementById("lien-insta");
lienNetflix = document.getElementById("lien-netflix");
lienPrime = document.getElementById("lien-prime");
lienOCS = document.getElementById("lien-ocs");

remplacerTextParImageSurLienFacebook();
remplacerTextParImageSurLienInsta();
remplacerTextParImageSurLienNetflix();
remplacerTextParImageSurLienPrime()
remplacerTextParImageSurLienOCS();

function remplacerTextParImageSurLienFacebook() {
    var texteLien = lienFacebook.innerHTML;
    lienFacebook.innerHTML = "";
    lienFacebook.title = texteLien;
    var imageLogo = new Image();
    imageLogo.src = "decoration/facebook.jpg";

    {
        lienFacebook.appendChild(imageLogo);
        imageLogo.style.width = "40px";
    }
}

function remplacerTextParImageSurLienInsta() {
    var texteLien = lienInsta.innerHTML;
    lienInsta.innerHTML = "";
    lienInsta.title = texteLien;
    var imageLogo = new Image();
    imageLogo.src = "decoration/insta.png";

    {
        lienInsta.appendChild(imageLogo);
        imageLogo.style.width = "50px";
    }
}

function remplacerTextParImageSurLienNetflix() {
    var texteLien = lienNetflix.innerHTML;
    lienNetflix.innerHTML = "";
    lienNetflix.title = texteLien;
    var imageLogo = new Image();
    imageLogo.src = "decoration/netflix.png";

    {
        lienNetflix.appendChild(imageLogo);
        imageLogo.style.width = "50px";
    }
}

function remplacerTextParImageSurLienOCS() {
    var texteLien = lienOCS.innerHTML;
    lienOCS.innerHTML = "";
    lienOCS.title = texteLien;
    var imageLogo = new Image();
    imageLogo.src = "decoration/ocs.png";

    {
        lienOCS.appendChild(imageLogo);
        imageLogo.style.width = "80px";
    }
}

function remplacerTextParImageSurLienPrime() {
    var texteLien = lienPrime.innerHTML;
    lienPrime.innerHTML = "";
    lienPrime.title = texteLien;
    var imageLogo = new Image();
    imageLogo.src = "decoration/prime.png";

    {
        lienPrime.appendChild(imageLogo);
        imageLogo.style.width = "2.5em";
    }
}

