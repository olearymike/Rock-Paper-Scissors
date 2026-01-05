function getComputerChoice() {
    let ranNum = Math.floor(Math.random() * 3);

    switch (ranNum) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    while(true){
        let choice = prompt("rock, paper, or scissors: ");
        if (choice === "rock" | choice === "paper" | choice === "scissors"){
            return choice;
        }
    }
    
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        console.log("Tie!");
    }
    if (humanChoice === "rock" & computerChoice === "paper"){
        console.log("You lose! Paper beats Rock");
        computerScore++;
    }
    if (humanChoice == "paper" & computerChoice === "scissors"){
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    }
    if (humanChoice == "scissors" & computerChoice === "rock"){
        console.log("You lose! Rock beats Scissors");
        computerScore++;    
    }
    if (humanChoice === "paper" & computerChoice === "rock"){
        console.log("You win! Paper beats Rock");
        humanScore++;
    }
    if (humanChoice == "scissors" & computerChoice === "paper"){
        console.log("You win! Scissors beats Paper");
        humanScore++;     
    }
    if (humanChoice == "rock" & computerChoice === "scissors"){
        console.log("You win! Rock beats Scissors");
        humanScore++;    
    }
}

function playGame(){
    for (let index = 0; index < 5; index++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    }

}

let humanScore = 0;
let computerScore = 0;

playGame();

