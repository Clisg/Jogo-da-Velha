const player1 = "xis";
const player2 = "bolinha";
var jogando = player1;
var gameover = false;

atualizaJogadorDaVez();
iniciaEspacos();

function atualizaJogadorDaVez(){
    var player = document.querySelector("#jogadordavez img");
    player.src= jogando+".png";
}

function iniciaEspacos(){

    var espacos= document.querySelectorAll(".espaco");
    for (var i=0; i<espacos.length; i++){
        espacos[i].addEventListener("click", function (event) {
            if (gameover) {return;}

            if(this.getElementsByTagName("img").length==0){
                this.innerHTML= "<img src ='"+ jogando +".png'>";
                jogando = (jogando == player1 ? player2 : player1);

            }
            atualizaJogadorDaVez();
        });
        
    } 
    
}