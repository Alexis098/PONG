class Raquette{ //dans les classes, on ne fait que déclarer des variables, pour faire des actions, il faut utiliser une fonction
    constructor($html){
        this.$html=$html;
        this.haut=parseInt($("#raquetteG").css("top"));
        this.hauteur=parseInt($("#raquetteG").css("height"));
        this.hauteur=parseInt($("#raquetteD").css("height"));
        this.haut=parseInt($("#raquetteD").css("top"));
        this.vitesse=1.5;
        this.direction=1;
        //this.bas=this.haut+this.hauteur; -> il faut le faire dans une fonction get car il s'agit d'un calcul
    }

    monte(){
        this.direction=-1;
    }

    descend(){
        this.direction=1;
    }

    bouge(){
        this.bas=this.bas+this.vitesse*this.direction;
        this.majHTML(); //importer la valeur dans cette fonction 
    }


    get bas(){ //le résultat d'un calcul; get = obtenir et set = définir
        return this.haut+this.hauteur;
    }

    majHTML(){
        this.$html.css("top",raquetteG.haut);
        this.$html.css("top",raquetteD.haut);
    }
}

let raquetteG = new Raquette($("#raquetteG"));
let raquetteD = new Raquette($("#raquetteD"));