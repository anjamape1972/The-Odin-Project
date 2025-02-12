let humanScore = 0
let computerScore = 0

function getComputerChoice () {
    let choice = ["piedra", "papel", "tijera"]
    return choice [Math.floor(Math.random() * 3)]
}

function getHumanChoice () {
    let choice = prompt("Escoja su jugada: PIEDRA, PAPEL o TIJERA.").toLowerCase()
    while (!["piedra", "papel", "tijera"].includes(choice)) {
        choice = prompt("Entrada inválida. Elige: PIEDRA, PAPEL o TIJERA").toLowerCase()
    }
    return choice
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log ("Ha habido un empate.")
    } else if (humanChoice === "PIEDRA" && computerChoice === "PAPEL" ||
        humanChoice === "PAPEL" && computerChoice === "TIJERA" ||
        humanChoice === "TIJERA" && computerChoice === "PIEDRA") {
        console.log ("Has perdido esta ronda.")
        computerScore++
    } else {
        console.log ("Has ganado esta ronda.")
        humanScore++
    }
}

function playGame () {
    humanScore = 0
    computerScore = 0
    for (let i = 1; i <=5; i++) {
        console.log (`Ronda ${i}`)
        let humanChoice = getHumanChoice ()
        let computerChoice = getComputerChoice ()
        console.log (`Jugador elige: ${humanChoice} - Ordenador elige: ${computerChoice}`)
        playRound (humanChoice, computerChoice)
        console.log (`Puntuación: Jugador ${humanScore} - Ordenador ${computerScore}`)
    }
    if (humanScore > computerScore) {
        console.log ("Ha ganado usted.")
    } else {
        console.log ("Ha ganado el ordenador.")
    }
}

playGame ()