
let palavras = ['ALURA','JAVASCRIPT','LOGICA','HTML','ORACLE','FORCA'];
let tabuleiro = document.getElementById('forca').getContext('2d');
let palavraSecreta = "";

function escolherPalavrasSecreta(){
    let palavra = palavras[Math.floor(Math.random() * palavras.length)]; 
    palavraSecreta = palavra;
    console.log(palavraSecreta);

    return palavraSecreta;
}

function validaValorDigitado(){
    document.addEventListener('keyup',function(event){
            var charCode = event.keyCode;
       
            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)){
                return true;
            }else{
                alert('Digitar Letra!');
                return false;
            }
    });    
}

function  comparaLetras(){


}


function iniciaJogo(){
    document.getElementById('botoes').style.display = 'none';
    escolherPalavrasSecreta();
    desenhaCanvas();
    desenhaLinhas();
    validaValorDigitado();
    escreveLetraCorreta();
    
}

