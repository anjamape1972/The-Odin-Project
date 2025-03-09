let humanScore = 0;
let computerScore = 0;
const scoreToWin = 5;  // Puntuación necesaria para ganar

function getComputerChoice() {
    let choices = ["piedra", "papel", "tijera"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Ha habido un empate.";
    } else if (
        (humanChoice === "piedra" && computerChoice === "tijera") ||
        (humanChoice === "papel" && computerChoice === "piedra") ||
        (humanChoice === "tijera" && computerChoice === "papel")
    ) {
        humanScore++;
        return "¡Has ganado esta ronda!";
    } else {
        computerScore++;
        return "Has perdido esta ronda.";
    }
}

// Actualiza el marcador en la página
function updateScoreboard() {
    document.getElementById("humanScore").textContent = humanScore;
    document.getElementById("computerScore").textContent = computerScore;
}

// Finaliza el juego si alguno de los jugadores llega a la puntuación de 5
function checkGameOver() {
    if (humanScore === scoreToWin) {
        document.getElementById("result").textContent = "¡Felicidades! Has ganado el juego.";
        endGame();
    } else if (computerScore === scoreToWin) {
        document.getElementById("result").textContent = "El ordenador ha ganado el juego. Mejor suerte la próxima vez.";
        endGame();
    }
}

// Deshabilita los botones cuando el juego termina
function endGame() {
    document.querySelectorAll("button").forEach(button => button.disabled = true);
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("button").forEach(boton => {
        boton.addEventListener("click", () => {
            if (humanScore < scoreToWin && computerScore < scoreToWin) {
                let humanChoice = boton.name;
                let computerChoice = getComputerChoice();
                let resultado = playRound(humanChoice, computerChoice);

                // Mostrar el resultado en la página
                document.getElementById("result").textContent = `Elegiste: ${humanChoice} - Ordenador eligió: ${computerChoice}.\n${resultado}`;
                updateScoreboard();
                checkGameOver();  // Verifica si el juego ha terminado
            }
        });
    });
});