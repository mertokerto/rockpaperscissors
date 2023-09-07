const playerText = document.querySelector("#playerText")
const computerText = document.querySelector("#computerText")
const resultText = document.querySelector("#resultText")
const choiceBtns = document.querySelectorAll(".choiceBtn")
const score = document.querySelector("#score")
const winner = document.querySelector("#winner")
let player
let computer
let result
let playerScore = 0
let computerScore = 0

choiceBtns.forEach((button) =>
     button.addEventListener("click", () => {
          player = button.textContent
          computerTurn()
          playerText.textContent = `Player: ${player}`
          computerText.textContent = `Computer: ${computer}`
          resultText.textContent = checkWinner()
          score.textContent = getScore()
     })
)

function computerTurn() {
     const randNum = Math.floor(Math.random() * 3) + 1

     switch (randNum) {
          case 1:
               computer = "ROCK"
               break
          case 2:
               computer = "PAPER"
               break
          case 3:
               computer = "SCISSORS"
               break
     }
}
function checkWinner() {
     if (player == computer) {
          return "Draw!"
     } else if (computer == "ROCK") {
          return player == "PAPER" ? "You Win!" : "You Lose!"
     } else if (computer == "PAPER") {
          return player == "SCISSORS" ? "You Win!" : "You Lose!"
     } else if (computer == "SCISSORS") {
          return player == "ROCK" ? "You Win!" : "You Lose!"
     }
}

function getScore() {
     if (resultText.textContent == "You Win!") {
          playerScore++
     } else if (resultText.textContent == "You Lose!") {
          computerScore++
     } else if (computerScore == 5) {
          winner.textContent = "Winner is Computer"
     } else if (playerScore == 5) {
          winner.textContent = "The winner is the player"
     }
     return `Player: ${playerScore} Computer: ${computerScore}`
}
