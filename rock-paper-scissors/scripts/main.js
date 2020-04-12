let plays = ["Rock", "Paper", "Scissors"];
let outcomes = new Map();
var playerScore = 0;
var computerScore = 0;

outcomes.set("rock,paper", -1)
outcomes.set("rock,scissors", 1)
outcomes.set("rock,rock", 0)
outcomes.set("paper,rock", 1)
outcomes.set("paper,paper", 0)
outcomes.set("paper,scissors", -1)
outcomes.set("scissors,scissors", 0)
outcomes.set("scissors,paper", 1)
outcomes.set("scissors,rock", -1)

function computerPlay() {
    var index = Math.floor(Math.random() * plays.length)
    return plays[index]
}

function playRound(playerSelection, computerSelection) {
    var player = playerSelection.toLowerCase();
    var computer = computerSelection.toLowerCase();

    return outcomes.get(player.concat(",", computer));
}

function resultToString(result, playerSelection, computerSelection) {
    switch (result) {
        case 1:
            return `You Win! ${playerSelection} beats ${computerSelection}`
        case 0:
            return `Draw! ${playerSelection}`
        case -1:
            return `You Lose! ${computerSelection} beats ${playerSelection}` 
    }
}

// function game() {
//     let result = playRound()
//     for (let i = 0; i < 5; i++) {
//         playerMove = prompt("choose 0 [rock] / 1 [paper] / 2 [scissors]");
//         playerMove = plays[playerMove];
//         computerMove = computerPlay();
//         result = playRound(playerMove, computerMove)

//         console.log(resultToString(result, playerMove, computerMove));
//     }
// }

function showWinner() {
    var winner = playerScore > computerScore ? "player"
                : "computer"
    return `Game Over! Player ${playerScore} Computer ${computerScore}`
}

const score = document.getElementById("score")
score.textContent = `Start!`
const buttons = document.querySelectorAll('.move-btn');
console.log(buttons)
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let cpuMove = computerPlay();
        let result = playRound(e.target.id, cpuMove);
        if (result == 1) {
            playerScore++
        } else if (result == -1) {
            computerScore++
        }
        score.textContent = `Player ${playerScore} Computer ${computerScore}`;
        if (playerScore == 3 || computerScore == 3) {
            score.textContent = showWinner();
            playerScore = 0;
            computerScore = 0;
        }
    })

})