var finVignetteArticle1 = document.getElementById("fin-vigniette-article1");
var boutonBalancierArtcile1 = document.getElementById("bouton-balancier-article1");

var finVignetteArticle2 = document.getElementById("fin-vigniette-article2");
var boutonBalancierArtcile2 = document.getElementById("bouton-balancier-article2");

var finVignetteArticle3 = document.getElementById("fin-vigniette-article3");
var boutonBalancierArtcile3 = document.getElementById("bouton-balancier-article3");

boutonBalancierArtcile1.addEventListener('click', balancerTexteFinVignietteArticle1);
boutonBalancierArtcile2.addEventListener('click', balancerTexteFinVignietteArticle2);
boutonBalancierArtcile3.addEventListener('click', balancerTexteFinVignietteArticle3);

function balancerTexteFinVignietteArticle1(event){
    if(boutonBalancierArtcile1.ouvert){
        event.preventDefault();
        finVignetteArticle1.style.display="none";
        boutonBalancierArtcile1.innerHTML = 'Voir plus';
        boutonBalancierArtcile1.ouvert = false;
    }else{
        event.preventDefault();
        finVignetteArticle1.style.display= "block";
        boutonBalancierArtcile1.innerHTML = 'Voir moins';
        boutonBalancierArtcile1.ouvert = true;
    }
}

function balancerTexteFinVignietteArticle2(event){
    if(boutonBalancierArtcile2.ouvert){
        event.preventDefault();
        finVignetteArticle2.style.display="none";
        boutonBalancierArtcile2.innerHTML = 'Voir plus';
        boutonBalancierArtcile2.ouvert = false;
    }else{
        event.preventDefault();
        finVignetteArticle2.style.display= "block";
        boutonBalancierArtcile2.innerHTML = 'Voir moins';
        boutonBalancierArtcile2.ouvert = true;
    }
}

function balancerTexteFinVignietteArticle3(event){
    if(boutonBalancierArtcile3.ouvert){
        event.preventDefault();
        finVignetteArticle3.style.display="none";
        boutonBalancierArtcile3.innerHTML = 'Voir plus';
        boutonBalancierArtcile3.ouvert = false;
    }else{
        event.preventDefault();
        finVignetteArticle3.style.display= "block";
        boutonBalancierArtcile3.innerHTML = 'Voir moins';
        boutonBalancierArtcile3.ouvert = true;
    }
}