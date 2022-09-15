const palavras = [
    'abelha', 'urso', 'professor', 'macaco' , 'russo'
];

var palavraSorteada;
var chances = 6;

function criarPalavraSecreta() {
    const ip = parseInt(Math.random() * palavras.length)
    
    let palavraSorteada;
    palavraSorteada = palavras[ip];
    console.log(palavraSorteada)    
}

criarPalavraSecreta();

function mostrarPalavraNaTela() {
    const palavraTela = document.getElementsByClassName(".palavra")
    palavraTela.innerHTML = palavraSorteada;
}
console.log(palavraTela)