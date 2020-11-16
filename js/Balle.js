class Balle{ //Une classe sert seulement pour y répertorier des variables
    constructor($html){
        this.$html=$html;
        this.haut=parseInt($("#balle").css("top")); //déclaration de variables uniquement pour cette classe
        this.gauche=parseInt($("#balle").css("left")); // this permet de déclarer une variable dans une classe et let permet de déclarer des variables en dehors des classes
        this.vitesseX=Math.random()*2-1;//la balle peut aller dans toutes les directions de façon aléatoire
        this.vitesseY=Math.random()*2-1;// multiplier par 2 puis soustraire 1 permet d'avoir un intervalle Math.random() compris entre -1 et 1 pour pouvoir aller soit à droite, soit à gauche. Il en va de même pour le haut et le bas
        this.largeur=$('#balle').width(); //on fait appel à la valeur width de l'id balle du css pour l'intégrer dans le fichier js
        this.hauteur=$("#balle").height();
    }
    majHTML(){ // la fonction "mise à jour html"
        this.$html.css("left",balle.gauche);
        this.$html.css("top",balle.haut);
    }
}

// déclaration de la variable js balle qui reprend les valeurs de la classe Balle qui reprend des valeurs css de l'id balle
let balle = new Balle($("#balle"));