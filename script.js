
let palavras  = ['ALURA','JAVASCRIPT','LOGICA','HTML','ORACLE','FORCA'];
let tabuleiro = document.getElementById('forca').getContext('2d');
let palavraSecreta = "";

let letrasCorretas = [];
let letrasErradas = []; 

let quantidadeErros = 0;


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
        
        letrasCorretas.push(letraDigitada);
        escreveLetraCorreta(letraDigitada);     

        // comparando  arrays usando stringify
            if(JSON.stringify(palavraSecretaArray)==JSON.stringify(letrasCorretas))
            acertouTudo();

    }else{
        if(quantidadeErros < 6 ){
            letrasErradas.push(letraDigitada); 
            quantidadeErros += 1; 
            escreveLetraErrada(letraDigitada);  
        }else{
            perdeu();
            
        }
              
    }   

}

function desistir(){

    document.location= "./index.html?recomecar=" +0;   
}

function novoJogo(){
    document.location= "./index.html?recomecar=" +1;    
}

function cadastrarPalavra(){
    document.getElementById('botoes').style.display = 'none';
    document.getElementById('aparece-forca').style.display = 'none';    
    document.querySelector('#palavraNova').style.display = 'block';
}

function salvaPalavra(){
    let novaPalavra =   document.querySelector("#palavra").value;
       
    palavras.push(novaPalavra);    
    alert('Palavra Adicionada com sucesso');
    console.log(palavras);

    document.querySelector('#palavraNova').style.display = 'none';
    document.getElementById('aparece-forca').style.display = 'block';
    iniciaJogo()
}


function iniciaJogo(){
    document.getElementById('botoes').style.display = 'none';
    document.querySelector('.botoes').style.display = 'block';
    escolherPalavrasSecreta();
    desenhaCanvas();
    desenhaLinhas();
    validaValorDigitado();      
    
}




