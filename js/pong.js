 //''let'' permet la déclaration des variables gauche et haut

//parseInt convertit une chaine de caractère en un entier




// Jquerry perme de faire le lien entre html/css et le fichier js 

let demarrer = false;

//cette fonction permet de déplacer la balle et les raquettes en récupérant les fonctions bouge dans les fichiers js correspondant
setInterval(function(){  
  if(demarrer){
    balle.bouge();
    raquetteG.bouge();
    raquetteD.bouge(); 
  }
 
  
}, 10);

$("#btn-jouer").on("mouseup", function (event) {
  event.preventDefault();
  demarrer=true;
  $("#ecran-debut").addClass("invisible");
});

//fonction permettant "d'écouter" les touches "a, q, p et m" du clavier lorsqu'elles sont pressées
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) { return}
    if(event.key === "a"){
      raquetteG.monte();
    }
    if(event.key === "q"){
      raquetteG.descend();
    }
    if(event.key === "p"){
      raquetteD.monte();
    }
    if(event.key === "m"){
      raquetteD.descend();
    }
    event.preventDefault();
  }, true);

//fonction permettant "d'écouter" les touches "a, q, p et m" du clavier lorsqu'elles sont relachées
window.addEventListener("keyup", function (event) {
  if (event.defaultPrevented) { return}
  if(event.key === "a"){
    raquetteG.stop();
  }
  if(event.key === "q"){
    raquetteG.stop();
  }
  if(event.key === "p"){
    raquetteD.stop();
  }
  if(event.key === "m"){
    raquetteD.stop();
  }
  event.preventDefault();
}, true);
  