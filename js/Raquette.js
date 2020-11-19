class Raquette{ //dans les classes, on ne fait que déclarer des variables, pour faire des actions, il faut utiliser une fonction
    constructor($html){
        this.$html=$html;
        /*this.haut=parseInt($("#raquetteG").css("top"));
        this.hauteur=parseInt($("#raquetteG").css("height"));
        this.hauteur=parseInt($("#raquetteD").css("height"));
        this.haut=parseInt($("#raquetteD").css("top"));*/
        this.haut = parseInt($html.css("top"));
        this.gauche = parseInt($html.css("left"));
        this.largeur = $html.width();
        this.hauteur = $html.height();
        this.vitesse=1.5;
        this.direction=0;
        //this.bas=this.haut+this.hauteur; -> il faut le faire dans une fonction get car il s'agit d'un calcul
    }
    

    get bas(){ //le résultat d'un calcul; get = obtenir et set = définir
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
    
    monte(){
        this.direction=-1;
    }

    descend(){
        this.direction=1;
    }

    stop(){
        this.direction=0;
    }
    

    majHTML(){
        /*this.$html.css("top",raquetteG.haut);
        this.$html.css("top",raquetteD.haut);*/
        this.$html.css("top",this.haut);
    }  

    bouge(){
        this.haut=this.haut+this.vitesse*this.direction;
        this.majHTML(); //importer la valeur dans cette fonction 
        if (this.haut<0){
            this.haut=0;
            this.stop();
        }
        if (this.bas>terrain.hauteur){
            this.bas=terrain.hauteur;
            this.stop();
        }
    }


}

let raquetteG = new Raquette($("#raquetteG"));
let raquetteD = new Raquette($("#raquetteD"));