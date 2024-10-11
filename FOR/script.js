// Inicializa o contador de cliques e o tempo
let count = 0;
let timeLeft = 15; // 20 segundos
let timerStarted = false;
let timerInterval;

// Seleciona os elementos HTML
const countDisplay = document.getElementById("count");
const timerDisplay = document.getElementById("timer");
const clickButton = document.getElementById("click-btn");
const messageDisplay = document.getElementById("message");

// Função para iniciar o temporizador
function startTimer() {
    timerInterval = setInterval(function() {
        timeLeft--;
        timerDisplay.textContent = `Tempo restante: ${timeLeft}s`;

        // Verifica se o tempo acabou
        if (timeLeft <= 0) {
            clearInterval(timerInterval); // Para o temporizador
            clickButton.disabled = true;  // Desativa o botão
            messageDisplay.textContent = "Tempo esgotado! Você perdeu!";
        }
    }, 1000); // Atualiza a cada segundo
}

// Adiciona evento de clique ao botão
clickButton.addEventListener("click", function() {
    if (!timerStarted) {
        // Inicia o temporizador no primeiro clique
        timerStarted = true;
        startTimer();
    }

    // Incrementa o contador de cliques
    count++;
    countDisplay.textContent = `Cliques: ${count}`;

    // Verifica se o jogador atingiu 100 cliques antes do tempo acabar
    if (count >= 100) {
        clearInterval(timerInterval); // Para o temporizador
        clickButton.disabled = true;  // Desativa o botão
        messageDisplay.textContent = "Parabéns! Você ganhou!";
    }
});
