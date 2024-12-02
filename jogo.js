
var altura = 0;
var largura = 0;

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(largura, altura);
}

ajustaTamanhoPalcoJogo();

function posicaoRandomica() {
    
    var posicaoX = Math.floor(Math.random() * largura);
    var posicaoY = Math.floor(Math.random() * altura);

    while (((posicaoX + 50) > largura) || ((posicaoY + 50) > altura)) {
        var posicaoX = Math.floor(Math.random() * largura);
        var posicaoY = Math.floor(Math.random() * altura);
    }
    
    console.log(posicaoX, posicaoY);
    
    //criar o elemento html
    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosca.png';
    mosquito.className = 'mosquito1';
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    
    document.body.appendChild(mosquito);
}