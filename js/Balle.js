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

    get bas() {
        return this.haut+this.hauteur;
    }

    set bas(value) {
        this.haut = value - this.hauteur;
    }
    
    get droite() {
        return this.gauche+this.largeur;
    }

    set droite(value) {
        this.largeur = value - this.largeur;
    }

    majHTML(){ // la fonction "mise à jour html"
    this.$html.css("left",balle.gauche);
    this.$html.css("top",balle.haut);
    }

    bouge(){
        //la balle bouge
        this.gauche=this.gauche+this.vitesseX;
        this.haut=this.haut+this.vitesseY;

        //les limites de mouvements faisant rebondir la balle
        this.majHTML();

        if(this.bas>terrain.hauteur){
            this.bas=terrain.hauteur;
            this.vitesseY=this.vitesseY*-1;
        }
        // la balle rebondit lorsqu'elle touche le haut du terrain
        if(this.haut<0){
            this.haut=0;
            this.vitesseY=this.vitesseY*-1;
        }
        if (this.droite>terrain.largeur){
            this.vitesseX=this.vitesseX*-1;
        }
        if(this.gauche<0){
            this.gauche=0;
            this.vitesseX=this.vitesseX*-1;
        }

      


        //rebonds sur les raquettes
        if(this.droite<raquetteD.gauche){
            if(this.bas<raquetteD.bas){
                if (this.haut>raquetteD.haut){
                    this.vitesseX=this.vitesseX*-1;
                }
            }
            
        }
        if(this.gauche < raquetteG.droite){ //si la balle dépasse à gauche la raquette gauche
            if(this.bas > raquetteG.haut){ //et si la balle est plus basse que le haut de la raquette
              if(this.haut < raquetteG.bas){ // et si la balle est plus haute que le bas de la raquette
                this.vitesseX=this.vitesseX*-1;
              }
            }
        }

    }  
}

// déclaration de la variable js balle qui reprend les valeurs de la classe Balle qui reprend des valeurs css de l'id balle
let balle = new Balle($("#balle"));