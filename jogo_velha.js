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
                this.setAttribute("jogada", jogando);
                verificaGanhador();
                jogando = (jogando == player1 ? player2 : player1);

            }
            
            atualizaJogadorDaVez();
            
            
        });
        
    } 
    
}

function verificaGanhador(){
    var movimentos = [];
    var elementos = document.querySelectorAll(".espaco");
    var temp = [];
    var ganhador = "";

    for (var i=0; i<elementos.length; i++){        
        
        temp.push(elementos[i].getAttribute("jogada"));

        if ([2,5,8].includes(i)){
            movimentos.push(temp);
            temp = [];

        }
    }

    console.log(movimentos);
    var tabuleiro=  document.querySelector(".tabuleiro");
    if (
        (movimentos[1][1]!="") &&
        ((movimentos [0][0] == jogando && movimentos[1][1] == jogando && movimentos[2][2] == jogando) ||
        (movimentos [0][2] == jogando && movimentos[1][1] == jogando && movimentos[2][0] == jogando))){
            gameover= true;
            ganhador= jogando;
            alert ("VENCEDOR: "+ganhador)
            tabuleiro.innerHTML += '<img src="velhinharock.jpg">';
            return;
    }

    for (var i=0; i<movimentos.length; i++){
        if ((movimentos[i][0] != "") && (movimentos[i][0] == jogando) && (movimentos[i][1] == jogando) && (movimentos[i][2] == jogando)){
            gameover= true;
            ganhador= jogando;
            alert ("VENCEDOR: "+ganhador)
            tabuleiro.innerHTML += '<img src="velhinharock.jpg">';
            return;
        }
    }
    for (var i=0; i<movimentos.length; i++){
        if ((movimentos[0][i] != "") && (movimentos[0][i] == jogando) && (movimentos[1][i] == jogando) && (movimentos[2][i] == jogando)){
            gameover= true;
            ganhador= jogando;
            alert ("VENCEDOR: "+ganhador)
            tabuleiro.innerHTML += '<img src="velhinharock.jpg">';
            return;
        }
    }    

}
