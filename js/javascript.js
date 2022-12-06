let computerChoice;
let playerChoice;

let getComputerChoice = () => {
  let options = ["piedra", "papel", "tijera"];
  computerChoice = options[Math.floor(Math.random() * options.length)]
}

let piedra = document.querySelector(".piedra");
let papel = document.querySelector(".papel");
let tijera = document.querySelector(".tijera");
let score = document.querySelector(".score");
let resultado = document.querySelector(".resultado");
let computerScore = 0;
let playerScore = 0;

let playRound = () => {
  getComputerChoice();
  if (playerChoice === "piedra") {
    switch (computerChoice) {
      case "piedra":
        resultado.textContent = `Empate, la maquina sacó ${computerChoice}`
        break;
      case "papel":
        resultado.textContent = `Perdiste, la maquina sacó ${computerChoice}`
        computerScore +=1
        break;
      case "tijera":
        resultado.textContent = `Ganaste, la maquina sacó ${computerChoice}`
        playerScore +=1;
        break;
    }
  } 
  else if (playerChoice === "papel") {
    switch (computerChoice) {
      case "piedra":
        resultado.textContent = `Ganaste, la maquina sacó ${computerChoice}`
        playerScore +=1;
        break;
      case "papel":
        resultado.textContent = `Empate, la maquina sacó ${computerChoice}`
        break;
      case "tijera":
        resultado.textContent = `Perdiste, la maquina sacó ${computerChoice}`
        computerScore +=1
        break;
    }
  } 
  else if (playerChoice === "tijera") {
    switch (computerChoice) {
      case "piedra":
        resultado.textContent = `Perdiste, la maquina sacó ${computerChoice}`
        computerScore +=1
        break;
      case "papel":
        resultado.textContent = `Ganaste, la maquina sacó ${computerChoice}`
        playerScore +=1;
        break;
      case "tijera":
        resultado.textContent = `Empate, la maquina sacó ${computerChoice}`
        break;
    }
  } 
}

let checkScore = () => {
  if (playerScore == 5) {
    alert("Ganaste")
  }
  else if (computerScore == 5) {
    alert("Perdiste")
  }
}

piedra.addEventListener('click', () => {
  playerChoice = "piedra";
  playRound();
  score.textContent = `Player score = ${playerScore}.   Computer score = ${computerScore}`;
  checkScore();
});

papel.addEventListener('click', () => {
  playerChoice = "papel";
  playRound();
  score.textContent = `Player score = ${playerScore}.   Computer score = ${computerScore}`;
  checkScore();
});

tijera.addEventListener('click', () => {
  playerChoice = "tijera";
  playRound();
  score.textContent = `Player score = ${playerScore}.   Computer score = ${computerScore}`;
  checkScore();
});
