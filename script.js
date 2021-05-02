function computerPlay() {
  let num = Math.random();
  if (num < 0.33) {
    return 'rock';
  } else if (0.33 <= num && num < 0.66) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === "rock") {
    if (computerSelection === "scissors") {
      return "You win! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() === computerSelection) {
      return "Tie. You both chose Rock";
    } else {
      return "You Lose! Paper beats Rock";
    }
  }
  if (playerSelection.toLowerCase() === "paper") {
    if (computerSelection === "rock") {
      return "You win! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === computerSelection) {
      return "Tie. You both chose Paper";
    } else {
      return "You Lose! Scissors beats Paper";
    }
  }
  if (playerSelection.toLowerCase() === "scissors") {
    if (computerSelection === "paper") {
      return "You Win! Scissors beats Paper"
    } else if (playerSelection.toLowerCase() === computerSelection) {
      return "Tie. You both chose Scissors";
    } else {
      return "You Lose! Rock beats Scissors";
    }
  }
  return "";
}

function game() {
  let playerSelection = prompt("Rock, Paper, Scissors?");
  let computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
}

//const computerSelection = computerPlay();

game();
game();
game();
game();
game();
