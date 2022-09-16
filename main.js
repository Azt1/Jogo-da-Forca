let chances = 6;
let palavraSorteada
const palavras = [
    'abelha', 'urso', 'professor', 'macaco' , 'russo'
];


criarPalavraSecreta();
function criarPalavraSecreta() {
    const ip = parseInt(Math.random() * palavras.length)
    
    let palavraSorteada;
    palavraSorteada = palavras[ip];
    console.log(palavraSorteada);
}

mostrarPalavraTela();
function mostrarPalavraTela() {
    const palavraTela = document.getElementsByClassName("palavra");
    palavraTela.innerHTML = palavraSorteada;
}
