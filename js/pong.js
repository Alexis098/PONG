
 //''let'' permet la déclaration des variables gauche et haut

//parseInt convertit une chaine de caractère en un entier




// Jquerry perme de faire le lien entre html/css et le fichier js 


setInterval(function(){ //cette fonction permet de déplacer la balle 
    balle.gauche=balle.gauche+balle.vitesseX; //la valeur gauche de la variable balle est appelée ici pour prendre la valeur balle.gauche+balle.vitesseX pour déplacer la balle
    balle.haut=balle.haut+balle.vitesseY;
    //on fait appel à la valeur "left" de l'id balle css et on lui donne le nom "gauche" dans la variable "balle" dans le fichier js
    //on applique la variable haut à la div possédant l'id #balle
    
    //-balle.largeur pour que la balle ne dépasse pas le bord du terrain car le point de "collision" de la balle se situe en haut à gauche
    // la balle rebondit lorsqu'elle touche la droite du terrain
    if(balle.gauche>terrain.largeur-balle.largeur){ 
        balle.gauche=terrain.largeur-balle.largeur; 
        balle.vitesseX=balle.vitesseX*-1;
    }
    // la valeur gauche de la classe balle
    // la balle rebondit lorsqu'elle touche la gauche du terrain
    if(balle.gauche<0){  
        balle.gauche=0;
        balle.vitesseX=balle.vitesseX*-1;
    }

    // la balle rebondit lorsqu'elle touche le bas du terrain
    if(balle.haut>terrain.hauteur-balle.hauteur){
        balle.haut=terrain.hauteur-balle.hauteur;
        balle.vitesseY=balle.vitesseY*-1;
    }

    // la balle rebondit lorsqu'elle touche le haut du terrain
    if(balle.haut<0){
        balle.haut=0;
        balle.vitesseY=balle.vitesseY*-1;
    }

    // on applique gauche la vitesse de déplacement pour les deux raquettes
    raquetteG.haut=raquetteG.haut+raquetteG.vitesse;
    raquetteD.haut=raquetteD.haut+raquetteD.vitesse;

    // la raquette rebondit lorsqu'elle touche le bas du terrain
    if(raquetteG.bas>terrain.hauteur){
        raquetteG.bas=terrain.hauteur;
        raquetteG.vitesse=raquetteG.vitesse*-1;
    }

    // la raquette gauche rebondit lorsqu'elle touche le haut du terrain
    if(raquetteG.haut<0){
        raquetteG.haut=0;
        raquetteG.vitesse=raquetteG.vitesse*-1;
    }

    // la raquette droite rebondit lorsqu'elle touche le bas du terrain
    if(raquetteD.bas>terrain.hauteur){
        raquetteD.bas=terrain.hauteur;
        raquetteD.vitesse=raquetteD.vitesse*-1;
    }

    // la raquette droite rebondit lorsqu'elle touche le haut du terrain
    if(raquetteD.haut<0){
        raquetteD.haut=0;
        raquetteD.vitesse=raquetteD.vitesse*-1;
    }
    
    balle.majHTML();
    raquetteG.majHTML();
    raquetteD.majHTML();

}, 10);

// on fait des classes et on déclare les variables dedans pour ensuite les utiliser dans les bouces if

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) { return}
    console.log("La touche '"+event.key+ "' a été enfoncée")
    event.preventDefault();
  }, true);

  window.addEventListener("keyup", function (event) {
    if (event.defaultPrevented) { return}
    console.log("La touche '"+event.key+ "' a été relachée")
    event.preventDefault();
  }, true);