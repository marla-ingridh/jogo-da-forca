function desenhaCanvas(){

    tabuleiro.lineWidth = 8;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#F3F5FC";
    tabuleiro.strokeStyle = "#0A3871";

    
    //manipulação 
    tabuleiro.fillRect(0,0,1200,800);
    tabuleiro.beginPath();
    tabuleiro.moveTo(700,500);
    tabuleiro.lineTo(450,500);
    tabuleiro.stroke(); 
    tabuleiro.closePath();
}


function desenhaLinhas(){

    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#F3F5FC";
    tabuleiro.strokeStyle = "#0A3871";

    let largura = 600/palavraSecreta.length;

    for(let i = 0; i < palavraSecreta.length; i++){
        tabuleiro.moveTo(300+(largura*i), 640);
        tabuleiro.lineTo(350+(largura*i), 640);
    }

    tabuleiro.stroke(); 
    tabuleiro.closePath();

}

function escreveLetraCorreta(letra){
    tabuleiro.font = '70px arial';
    tabuleiro.lineWidth = 2;
    
    let largura = 600/palavraSecreta.length;

    for(let i = 0; i < palavraSecreta.length; i++){
        tabuleiro.strokeText(letra,300+(largura*i),620);
    }

     

}

