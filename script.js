function getComputerChoice() {
  let i = parseInt(Math.random() * (4 - 1) + 1)
  return i
}

let userScore = 0
let computerScore = 0

function gameRound(computerChoice, userChoice) {
  if (userChoice.toLowerCase() === "rock") {
    switch (computerChoice) {
      case 1:
        return "It's a draw!"
        break
      case 2:
        computerScore++
        return "You lose. Paper beats rock."
        break
      case 3:
        userScore++
        return "You win! Rock beats scissors."
        break
    }
  } else if (userChoice.toLowerCase() === "paper") {
    switch (computerChoice) {
      case 1:
        userScore++
        return "You win! Paper beats rock."
        break
      case 2:
        return "It's a draw."
        break
      case 3:
        computerScore++
        return "You lose. Scissors beat paper."
        break
    }
  } else if (userChoice.toLowerCase() === "scissors") {
    switch (computerChoice) {
      case 1:
        computerScore++
        return "You lose. Rock beats scissors."
        break
      case 2:
        userScore++
        return "You win! Scissors beat paper."
        break
      case 3:
        return "It's a draw."
        break
    }
  }
}

function game() {
  for (let i = 1; i <= 5; i++) {
    let userChoice = prompt("Please enter your choice")
    let computerChoice = getComputerChoice()
    if (userChoice.toLowerCase() !== "rock" && userChoice.toLowerCase() !== "paper" && userChoice.toLowerCase() !== "scissors") {
      alert("Wrong input")
    }
    let result = gameRound(computerChoice, userChoice)
    console.log(result)
    console.log("Your score: " + userScore + "  Computer's score " + computerScore)
  }
}

game()
