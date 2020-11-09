
 //''let'' permet la déclaration des variables gauche et haut

//parseInt convertit une chaine de caractère en un entier




// Jquerrie perme de faire le lien entre html/css et le fichier js 

class Terrain{ //différent de la class css
    constructor($html){ //constructor permet d'attribuer des valeurs à ce qu'il y a dans les paranthèses
        this.$html=$html; //$ désigne un élément JQuerie 
        // $element 
        this.largeur=$("#terrain").width(); // fait appel à l'élement css width de l'id terrain du css grâce au $
        this.hauteur=$("#terrain").height(); // on récupère/importe la valeur de la hauteur du terrain depuis le css
    }
}
let terrain=new Terrain($("#terrain")); //déclare la variable terrain prenant la valeur de la class Terrain ci-dessus à laquelle on associe les valeurs de la l'id terrain de la fiche css
console.log(terrain);

class Balle{ //Une classe sert seulement pour y répertorier des variables
    constructor($html){
        this.$html=$html;
        this.haut=parseInt($("#balle").css("top")); //déclaration de variables uniquement pour cette classe
        this.gauche=parseInt($("#balle").css("left")); // this permet de déclarer une variable dans une classe et let permet de déclarer des variables en dehors des classes
        this.vitesseX=2;
        this.vitesseY=0.5;
    }
    majHTML(){ // la fonction "mise à jour html"
        this.$html.css("left",balle.gauche);
        this.$html.css("top",balle.haut);
    }
}


let balle = new Balle($("#balle"));

setInterval(function(){ //cette fonction permet de déplacer la balle 
    balle.gauche=balle.gauche+balle.vitesseX; //la valeur gauche de la variable balle est appelée ici pour prendre la valeur balle.gauche+balle.vitesseX pour déplacer la balle
    balle.haut=balle.haut+balle.vitesseY;
    //on fait appel à la valeur "left" de l'id balle css et on lui donne le nom "gauche" dans le fichier js
    //on applique la variable haut à la div possédant l'id #balle
    if(balle.gauche>terrain.largeur){
        balle.gauche=terrain.largeur; 
        balle.vitesseX=balle.vitesseX*-1;
    }
    // si la valeur gauche de la classe balle
    if(balle.gauche<0){  
        balle.gauche=0;
        balle.vitesseX=balle.vitesseX*-1;
    }
    if(balle.haut>terrain.hauteur){
        balle.haut=terrain.hauteur;
        balle.vitesseY=balle.vitesseY*-1;
    }
    if(balle.haut<0){
        balle.haut=0;
        balle.vitesseY=balle.vitesseY*-1;
    }
    
    balle.majHTML();
}, 10);

// on fait des classes et on déclare les variables dedans pour ensuite les utiliser dans les bouces if,