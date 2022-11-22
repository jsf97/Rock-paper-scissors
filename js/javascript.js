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
      return resultado = "Empate, el rival saco piedra"
    } 
    else if (computerChoice == 2) {
      return resultado = "Perdiste, el rival saco papel"
    } 
    else if (computerChoice == 3) {
      return resultado = "Ganaste, el rival saco tijera"

    } 
  }
  else if (playerChoice == "papel") {
    if (computerChoice == 1) {
      return resultado = "Ganaste, el rival saco piedra"
    } 
    else if (computerChoice == 2) {
      return resultado = "Empate, el rival saco papel"
    } 
    else if (computerChoice == 3) {
      return resultado = "Perdiste, el rival saco tijera"
    } 


  }
  else if (playerChoice == "tijera") {
    if (computerChoice == 1) {
      return resultado = "Perdiste, el rival saco piedra"
    } 
    else if (computerChoice == 2) {
      return resultado = "Ganaste, el rival saco papel"
    } 
    else if (computerChoice == 3) {
      return resultado = "Empate, el rival saco tijera"
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

