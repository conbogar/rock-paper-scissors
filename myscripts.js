// Human inputs choice
// Computer randomly chooses rock, paper or scissors
// Determine if both choose the same or whether computer or human with.. paper beats rock, etc
// console.log if player wins, loses, or ties


//randomly generate rock, paper or scissors 
function getComputerChoice() {
    let randomNumber = Math.random()
    if (randomNumber <= 1/3) {
        return("ROCK")
    }
    else if (randomNumber > 1/3 && randomNumber < 2/3) {
        return("PAPER")
    }
    else if (randomNumber >= 2/3) {
        return("SCISSORS")
    }
}

// console.log("Computer Chooses:", getComputerChoice())

//Get the players input (rock, paper, scissors) made to caps

function getHumanChoice() {
    let userChoice = prompt("Choose rock, paper, or scissors.")
    return userChoice.toUpperCase()
}


// console.log(getHumanChoice())


    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log('Player choice:', humanSelection)
    console.log('Computer choice:', computerSelection)

    function playGame() {

        let humanScore = 0;
        let computerScore = 0;  
        let r = playRound();
        // let roundNumber = 0;


        // for (let i = 0; i < roundNumber; i++); 

        function playRound(humanChoice, computerChoice) {
            if (humanSelection === computerSelection){
                return 'Tie';
            }
            else if (humanSelection === "ROCK" && computerSelection === "PAPER") {
                let c = computerScore++;
                return c;
            }
            else if (humanSelection === "ROCK" && computerSelection === "SCISSORS") {
                let h = humanScore++;
                return h;
            }
            else if (humanSelection === "SCISSORS" && computerSelection === "PAPER") {
                let h = humanScore++;
                return h;
            }
            else if (humanSelection === "SCISSORS" && computerSelection === "ROCK") {
                let c = computerScore++;
                return c;
                }
            else if (humanSelection === "PAPER" && computerSelection === "ROCK") {
                let h = humanScore++;
                return h;
                }
            else if (humanSelection === "PAPER" && computerSelection === "SCISSORS") {
                let c = computerScore++;
                return c;
                }
                console.log('Human:', humanScore)
                console.log('Computer:', computerScore)
        }

    }


 






