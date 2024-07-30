// Human inputs choice
// Computer randomly chooses rock, paper or scissors
// Determine if both choose the same or whether computer or human with.. paper beats rock, etc
// console.log if player wins, loses, or ties

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        //Computer randomly generates rock, paper or scissors
        function getComputerChoice() {
            let randomNumber = Math.random()
            if (randomNumber <= 1 / 3) {
                return ("ROCK")
            }
            else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
                return ("PAPER")
            }
            else if (randomNumber >= 2 / 3) {
                return ("SCISSORS")
            }
        }
        //Get the players input (rock, paper, scissors) made to caps
        function getHumanChoice() {
            let userChoice = prompt("Choose rock, paper, or scissors.")
            return userChoice.toUpperCase()
        }
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);

        console.log('Human Choice:', humanSelection, 'Computer Choice:', computerSelection, 'Human Score:', humanScore, 'Computer Score:', computerScore);

        //Determine the winner of the round and add it to the score
    function playRound(p, u) {
        if (p === u) {
            return 'Tie';
        }
        else if (p === "ROCK" && u === "PAPER") {
            let c = computerScore++;
            return c;
        }
        else if (p === "ROCK" && u === "SCISSORS") {
            let h = humanScore++;
            return h;
        }
        else if (p === "SCISSORS" && u === "PAPER") {
            let h = humanScore++;
            return h;
        }
        else if (p === "SCISSORS" && u === "ROCK") {
            let c = computerScore++;
            return c;
        }
        else if (p === "PAPER" && u === "ROCK") {
            let h = humanScore++;
            return h;
        }
        else if (p === "PAPER" && u === "SCISSORS") {
            let c = computerScore++;
            return c;
        }
    }
        
}
}

    playGame();

