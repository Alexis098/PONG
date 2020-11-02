let largeur=$("#balle").width();
let gauche=parseInt($("#balle").css("left"));
let haut=parseInt($("#balle").css("top"));
alert(gauche)


setInterval(function(){
    gauche=gauche+1;
    haut=haut+0.5;
    // affiche le résultat de i dans le titre de page toutes les 1000 millisecondes.
    $("#balle").css("left",gauche); 
    $("#balle").css("top",haut);
}, 10);
