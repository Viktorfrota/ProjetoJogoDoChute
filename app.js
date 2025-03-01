//let titulo = document.querySelector("h1");
//titulo.innerHTML = "adivinhe numero!";
//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "escolha seu numero entre 1 e 10!";
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto){
    //crio a funçao e crio uma variavel para otimizar o texto
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function verificarChute(){
    let chute = document.querySelector("input").value;
    var tentativasPlural = tentativas > 1 ? "tentativas" : "tentativa";
    var mensagemTentativas = (`acertou com ${tentativas} ${tentativasPlural}`);
    if (chute == numeroSecreto){
        exibirTextoNaTela("h1", "Parabens, voce acertou o numero secreto");
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if (chute > numeroSecreto){
            exibirTextoNaTela("p", "seu chute foi maior que o numero secreto");
        }else{
            exibirTextoNaTela("p", "seu chute foi menor que o numero secreto");
        }
        tentativas++;
        limparCampo();
    }
    console.log(numeroSecreto);
}

exibirTelaInicial();

    function exibirTelaInicial(tag, texto){
     exibirTextoNaTela("h1", "adivinhe o numero!");
     exibirTextoNaTela("p", "escolha seu numero entre 1 e 100!");
}
     function gerarNumeroAleatorio() {
        return parseInt(Math.random() * 100 + 1);

     }
     function limparCampo (){
        chute = document.querySelector("input");
        chute.value = "";
     }

         function reiniciarJogo(){
           numeroSecreto = gerarNumeroAleatorio();
            limparCampo()
             tentativas = 1;
             exibirTelaInicial();
             document.getElementById("reiniciar").setAttribute("disabled", true);
    }
