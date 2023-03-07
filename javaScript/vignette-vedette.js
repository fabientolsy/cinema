var vignetteNetflix = document.getElementById("netflix");
var vignettePrime = document.getElementById("prime");
var vignetteYouTube = document.getElementById("Youtube");

vignetteNetflix.addEventListener("mousedown", function () {
    afficherDetailService('netflix');
});

vignettePrime.addEventListener("mousedown", function () {
    afficherDetailService('prime');
});


vignetteYouTube.addEventListener("mousedown", function () {
    afficherDetailService('Youtube');
}); 

function afficherDetailService(service){
    //console.log('detail');
    //console.log(pokemon);
    detail = document.getElementById('detail-' + service);
    //if(detail) console.log(detail.innerHTML);
    zoneAffichage = document.getElementById('zone-affichage');
    zoneAffichage.innerHTML = detail.innerHTML;
}