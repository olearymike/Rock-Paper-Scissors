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

// function getHumanChoice() {
//     while(true){
//         let choice = prompt("rock, paper, or scissors: ");
//         if (choice === "rock" | choice === "paper" | choice === "scissors"){
//             return choice;
//         }
//     }
    
// }

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        return "Tie!";
    }
    if (humanChoice === "rock" & computerChoice === "paper"){
        computerScore++;
        return "You lose! Paper beats Rock";
    }
    if (humanChoice == "paper" & computerChoice === "scissors"){
        computerScore++;
        return "You lose! Scissors beats Paper";
    }
    if (humanChoice == "scissors" & computerChoice === "rock"){
        computerScore++;
        return "You lose! Rock beats Scissors";
    }
    if (humanChoice === "paper" & computerChoice === "rock"){
        humanScore++;
        return "You win! Paper beats Rock";
    }
    if (humanChoice == "scissors" & computerChoice === "paper"){
        humanScore++;   
        return "You win! Scissors beats Paper";  
    }
    if (humanChoice == "rock" & computerChoice === "scissors"){
        humanScore++; 
        return "You win! Rock beats Scissors";
    }
}

function checkWin(){
    if (humanScore === 5){
        alert("You win!");
    }
    if (computerScore === 5){
        alert("You lose!");
    }
}

function updateScore(resultText){
    outcome.textContent = resultText;
    score.textContent = "You = " + humanScore + "\nComputer = " + computerScore;

    results.appendChild(outcome);
    results.appendChild(score);
}

const results = document.querySelector("#results");
const outcome = document.createElement("h2");
const score = document.createElement("p");

const rBtn = document.querySelector("#rBtn");
const pBtn = document.querySelector("#pBtn");
const sBtn = document.querySelector("#sBtn");

rBtn.addEventListener("click", () => {
    updateScore(playRound("rock", getComputerChoice()));
    checkWin();
})

pBtn.addEventListener("click", () => {
    updateScore(playRound("paper", getComputerChoice()));
    checkWin();
})

sBtn.addEventListener("click", () => {
    updateScore(playRound("scissors", getComputerChoice()));
    checkWin();
})


let humanScore = 0;
let computerScore = 0;

