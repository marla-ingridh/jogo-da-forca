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


    tabuleiro.beginPath();
    tabuleiro.moveTo(480,150);
    tabuleiro.lineTo(480,500);
    tabuleiro.stroke(); 
    tabuleiro.closePath();


    tabuleiro.beginPath();
    tabuleiro.moveTo(480,150);
    tabuleiro.lineTo(650,150);
    tabuleiro.stroke(); 
    tabuleiro.closePath();


    tabuleiro.beginPath();
    tabuleiro.moveTo(650,150);
    tabuleiro.lineTo(650,220);
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
        if(palavraSecreta[i] == letra){        
            tabuleiro.strokeText(letra,300+(largura*i),620);
            letrasCorretas.push(letra);
            console.log(letrasCorretas);
        }
    }  

    
    
}


function escreveLetraErrada(letra){

    tabuleiro.font = '30px arial';
    tabuleiro.lineWidth = 2;

    let espacamento = (letrasErradas.length * 30);
    
    tabuleiro.strokeText(letra,300+espacamento,720);   
    desenhaForca();   
    
}

function desenhaForca(){

    for(let i = 0; i < quantidadeErros ;i++){

        if(quantidadeErros == 1) {

            //cabeça
            tabuleiro.beginPath();
            tabuleiro.arc(650, 265, 40, 0, Math.PI * 2, true); // Círculo exterior
            tabuleiro.stroke();

        }else if(quantidadeErros == 2){

            //desenha tronco
            tabuleiro.beginPath();
            tabuleiro.moveTo(650,310);
            tabuleiro.lineTo(650,400);
            tabuleiro.stroke(); 
            tabuleiro.closePath();

        }else if(quantidadeErros == 3){

            //desenha Braço Esquerda
            tabuleiro.beginPath();
            tabuleiro.moveTo(650,310);
            tabuleiro.lineTo(700,330);
            tabuleiro.stroke(); 

            tabuleiro.closePath();
        }else if(quantidadeErros == 4){

            //desenha Braço Direita
            tabuleiro.beginPath();
            tabuleiro.moveTo(650,310);
            tabuleiro.lineTo(600,330);
            tabuleiro.stroke(); 
            tabuleiro.closePath();

        }else if(quantidadeErros == 5){

            //desenha Perna Esquerda
            tabuleiro.beginPath();
            tabuleiro.moveTo(650,400);
            tabuleiro.lineTo(700,430);
            tabuleiro.stroke(); 
            tabuleiro.closePath();

        }else if(quantidadeErros == 6){

            //desenha Perna Direita
            tabuleiro.beginPath();
            tabuleiro.moveTo(650,400);
            tabuleiro.lineTo(600,430);
            tabuleiro.stroke(); 
            tabuleiro.closePath();

        }

    }

}


function perdeu(){
    tabuleiro.font = '30px arial';
    tabuleiro.lineWidth = 2;    
    tabuleiro.fillStyle = "#FF0000";  
    tabuleiro.fillText('Você Perdeu !',800,320);  


    tabuleiro.font = '30px arial';
    tabuleiro.lineWidth = 2;    
    tabuleiro.fillStyle = "#FF0000";  
    tabuleiro.fillText('x',630,260); 
    tabuleiro.fillText('x',660,260);   

    setTimeout("document.location= './index.html'",3000);
}


function acertouTudo(){

    tabuleiro.font = '30px arial';
    tabuleiro.lineWidth = 2;    
    tabuleiro.fillStyle = "#77DD77";  
    tabuleiro.fillText('Você Venceu! Parabéns !!',800,320);  
    setTimeout("document.location= './index.html'",3000);

}


const utlParams = new URLSearchParams(window.location.search);
const nomeParam = utlParams.get("recomecar");

if(nomeParam==1){
    iniciaJogo();
}