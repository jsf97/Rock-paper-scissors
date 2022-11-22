let playerChoice = '';
let computerChoice = '';
let resultado = '';

let getComputerChoice = () => {
  let numbers = [1, 2, 3]
  computerChoice = numbers[(Math.floor(Math.random() * numbers.length))]
  return computerChoice;
}

let getPlayerChoice = () => {
  playerChoice = prompt("Que jugas?").toLowerCase()
  return playerChoice
}

let playRound = (playerChoice, computerChoice) => {
  if (playerChoice == "piedra") {
    if (computerChoice == 1) {
      resultado = "Empate, el rival saco piedra"
      return resultado
    } 
    else if (computerChoice == 2) {
      resultado = "Perdiste, el rival saco papel"
      return resultado
    } 
    else if (computerChoice == 3) {
      resultado = "Ganaste, el rival saco tijera"
      return resultado
    } 
  }
  else if (playerChoice == "papel") {
    if (computerChoice == 1) {
      resultado = "Ganaste, el rival saco piedra"
      return resultado
    } 
    else if (computerChoice == 2) {
      resultado = "Empate, el rival saco papel"
      return resultado
    } 
    else if (computerChoice == 3) {
      resultado = "Perdiste, el rival saco tijera"
      return resultado
    } 
  }
  else if (playerChoice == "tijera") {
    if (computerChoice == 1) {
      resultado = "Perdiste, el rival saco piedra"
      return resultado
    } 
    else if (computerChoice == 2) {
      resultado = "Ganaste, el rival saco papel"
      return resultado
    } 
    else if (computerChoice == 3) {
      resultado = "Empate, el rival saco tijera"
      return resultado
    } 
  }
}

let game = ( ) => {
  for (i = 0; i < 3; i++) {
    playRound(getPlayerChoice(), getComputerChoice());
    document.write(resultado + "<br><br>")
  }
}

game();

