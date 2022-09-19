
let palavras = ['ALURA','JAVASCRIPT','LOGICA','HTML','ORACLE','FORCA'];
let tabuleiro = document.getElementById('forca').getContext('2d');
let palavraSecreta = "";

let letrasCorretas = [];
let letrasErradas = []; 

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
                comparaLetras(event.key);
            }else{
                alert('Digitar Letra!');
                return false;
            }
    });    
}


function  comparaLetras(letra){
    
    let letraDigitada =  letra.toUpperCase();
    let palavraSecretaArray = palavraSecreta.toUpperCase().split('');   
    

    if(palavraSecretaArray.indexOf(letraDigitada) > -1){
        escreveLetraCorreta(letraDigitada);
        letrasCorretas.push(letraDigitada);
    }else{
        alert('Letra Incorreta, tente novamente');
        letrasErradas.push(letraDigitada);
    };
    

}


function iniciaJogo(){
    document.getElementById('botoes').style.display = 'none';
    escolherPalavrasSecreta();
    desenhaCanvas();
    desenhaLinhas();
    validaValorDigitado();
    
}

