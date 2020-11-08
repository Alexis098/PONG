let largeur=$("#balle").width();
let gauche=parseInt($("#balle").css("left")); //''let'' permet la déclaration des variables gauche et haut
let haut=parseInt($("#balle").css("top"));
alert(gauche) //alert affiche du texte ou la valeur de ce qu'il y a dans les paranthèses
//parseInt convertit une chaine de caractère en un entier


setInterval(function(){ //cette fonction permet de déplacer la balle 
    gauche=gauche+1; 
    haut=haut+0.5;
    $("#balle").css("left",gauche); //on applique la variable gauche à la div possédant l'id #balle
    $("#balle").css("top",haut); //on applique la variable haut à la div possédant l'id #balle
}, 10);
