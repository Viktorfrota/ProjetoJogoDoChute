//let titulo = document.querySelector("h1");
//titulo.innerHTML = "adivinhe numero!";
//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "escolha seu numero entre 1 e 10!";
const LIMITE_NUMERO = 100;
let numerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

/**
 * Atualiza o texto de um elemento HTML e usa síntese de voz para lê-lo.
 * @param {string} seletor - Seletor do elemento HTML.
 * @param {string} mensagem - Texto a ser exibido.
 */
function exibirTextoNaTela(seletor, mensagem) {
    const elemento = document.querySelector(seletor);
    elemento.innerHTML = mensagem;
    responsiveVoice.speak(mensagem, 'Japanese Male', { rate: 1.2 });
}

/**
 * Verifica se o chute do usuário está correto e exibe a mensagem apropriada.
 */
function verificarChute() {
    const chute = Number(document.querySelector("input").value);
    
    if (chute === numeroSecreto) {
        exibirMensagemAcerto();
    } else {
        exibirMensagemErro(chute);
    }
}

/**
 * Exibe a mensagem de acerto e habilita o botão de reiniciar.
 */
function exibirMensagemAcerto() {
    exibirTextoNaTela("h1", "Parabéns, você acertou o número secreto!");
    exibirTextoNaTela("p", `Acertou com ${tentativas} ${tentativas > 1 ? "tentativas" : "tentativa"}`);
    habilitarBotaoReiniciar();
}

/**
 * Exibe uma mensagem indicando se o chute foi maior ou menor que o número secreto.
 * @param {number} chute - Número informado pelo usuário.
 */
function exibirMensagemErro(chute) {
    const mensagem = chute > numeroSecreto 
        ? "Seu chute foi maior que o número secreto." 
        : "Seu chute foi menor que o número secreto.";
    
    exibirTextoNaTela("p", mensagem);
    tentativas++;
    limparCampo();
}

/**
 * Exibe a tela inicial do jogo com as instruções.
 */
function exibirTelaInicial() {
    exibirTextoNaTela("h1", "Adivinhe o número!");
    exibirTextoNaTela("p", `Escolha um número entre 1 e ${LIMITE_NUMERO}!`);
}

/**
 * Gera um número aleatório único entre 1 e o limite definido.
 * Caso todos os números já tenham sido sorteados, a lista é resetada.
 * @returns {number} Número aleatório gerado.
 */
function gerarNumeroAleatorio() {
    if (numerosSorteados.length === LIMITE_NUMERO) {
        numerosSorteados = [];
    }

    let numero;
    do {
        numero = Math.floor(Math.random() * LIMITE_NUMERO) + 1;
    } while (numerosSorteados.includes(numero));
    
    numerosSorteados.push(numero);
    return numero;
}

/**
 * Limpa o campo de entrada do usuário.
 */
function limparCampo() {
    document.querySelector("input").value = "";
}

/**
 * Habilita o botão de reiniciar após o usuário acertar o número.
 */
function habilitarBotaoReiniciar() {
    document.getElementById("reiniciar").removeAttribute("disabled");
}

/**
 * Reinicia o jogo, sorteando um novo número e resetando as tentativas.
 */
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo();
    exibirTelaInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

// Exibe a tela inicial ao carregar o jogo.
exibirTelaInicial();
