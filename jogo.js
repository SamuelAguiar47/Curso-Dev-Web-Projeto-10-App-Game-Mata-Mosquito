
var altura = 0;
var largura = 0;

var vidas = 3;

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(largura, altura);
}

ajustaTamanhoPalcoJogo();

function posicaoRandomica() {
    
    //remover o mosquito anterior caso exista
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();

        if(vidas < 1) {
            alert('interromper jogo')
        } else {
        document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png';

        vidas--;
        }
        console.log('v' + vidas);
    }

    var posicaoX = Math.floor(Math.random() * largura);
    var posicaoY = Math.floor(Math.random() * altura);

    while (((posicaoX + 90) > largura) || ((posicaoY + 90) > altura)) {
        var posicaoX = Math.floor(Math.random() * largura);
        var posicaoY = Math.floor(Math.random() * altura);
    }
    
    console.log(posicaoX, posicaoY);
    
    //criar o elemento html
    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosca.png';
    mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function() {
        this.remove();
    }
    
    document.body.appendChild(mosquito);
}

function tamanhoAleatorio() {
    var classe =  Math.floor(Math.random() * 3);

    switch (classe) {
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    }
}

function ladoAleatorio() {
    var classe =  Math.floor(Math.random() * 2);

    switch (classe) {
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
    }
}