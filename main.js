const palavras = [
    'abelha', 'urso', 'professor', 'macaco' , 'russo'
];


function criarPalavraSecreta() {
    const ip = parseInt(Math.random() * palavras.length)
    
    let PalavraSorteada;
    PalavraSorteada = palavras[ip];
    console.log(PalavraSorteada)
}

criarPalavraSecreta();