let chances = 6;
let palavraSorteada;
let lista = [];
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
    palavraTela.innerHTML = "";

    for(i = 0; i < palavraSorteada.length; i++){
        if(lista[i] == undefined){
            lista[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<span class='letras'>" + lista[i] +"</span>"
        }
        else {
            palavraTela.innerHTML = palavraTela.innerHTML + "<span class='letras'>" + lista[i] +"</span>"
        }
    }
}

function verificadorLetra(letras){
    if(chances > 0)
    {
        mudarCorDaLetra("teclas-" + letras);
    }
}

function mudarCorDaLetra(teclas){
    document.getElementsByClassName(teclas).style.background = "#7CFC00";
    document.getElementsByClassName(teclas).style.color = "#ffffff";
}
