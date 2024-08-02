let humanScore = 0;
let computerScore = 0;

document.getElementById('rock').addEventListener('click', function() { playGame('ROCK'); });
document.getElementById('paper').addEventListener('click', function() { playGame('PAPER'); });
document.getElementById('scissors').addEventListener('click', function() { playGame('SCISSORS'); });

function playGame(humanSelection) {
    function getComputerChoice() {
        let randomNumber = Math.random();
        if (randomNumber <= 1 / 3) {
            return "ROCK";
        } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
            return "PAPER";
        } else {
            return "SCISSORS";
        }
    }

    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    function playRound(p, u) {
        if (p === u) {
            document.getElementById('result').innerText = `Tie! Human: ${humanSelection}, Computer: ${computerSelection} - Human Score: ${humanScore}, Computer Score: ${computerScore}`;
        } else if ((p === "ROCK" && u === "PAPER") || (p === "SCISSORS" && u === "ROCK") || (p === "PAPER" && u === "SCISSORS")) {
            computerScore++;
            document.getElementById('result').innerText = `Computer Wins! Human: ${humanSelection}, Computer: ${computerSelection} - Human Score: ${humanScore}, Computer Score: ${computerScore}`;
        } else {
            humanScore++;
            document.getElementById('result').innerText = `Human Wins! Human: ${humanSelection}, Computer: ${computerSelection} - Human Score: ${humanScore}, Computer Score: ${computerScore}`;
        }
    }
}