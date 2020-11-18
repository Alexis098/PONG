 //''let'' permet la déclaration des variables gauche et haut

//parseInt convertit une chaine de caractère en un entier




// Jquerry perme de faire le lien entre html/css et le fichier js 



setInterval(function(){ //cette fonction permet de déplacer la balle  
  balle.bouge();
  raquetteG.bouge();
  raquetteD.bouge(); 
  
}, 10);

// on fait des classes et on déclare les variables dedans pour ensuite les utiliser dans les bouces if



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
  