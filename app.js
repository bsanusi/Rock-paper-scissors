function computerPlay() {
    const numRand = Math.floor(Math.random()*3);

    if(numRand === 0){
        return "Rock"
    } else if(numRand === 1) {
        return "Paper"
    } else if(numRand === 2) {
        return "Scissors"
    }

}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {

    const win = `You Win! ${playerSelection} beats ${computerSelection}`;
    const lose = `You Lose! ${computerSelection} beats ${playerSelection}`;

    if (playerSelection.toLowerCase() == "rock" & computerSelection.toLowerCase() == "paper") {
        computerScore += 1;
        return lose; 
    } else if (playerSelection.toLowerCase() == "paper" & computerSelection.toLowerCase() == "scissors") {
        computerScore += 1;
        return lose;
    } else if (playerSelection.toLowerCase() == "scissors" & computerSelection.toLowerCase() == "rock") {
        computerScore += 1;
        return lose;
    } else if (playerSelection.toLowerCase() == "rock" & computerSelection.toLowerCase() == "scissors") {
        playerScore += 1;
        return win;
    } else if (playerSelection.toLowerCase() == "paper" & computerSelection.toLowerCase() == "rock") {
        playerScore += 1;
        return win;
    } else if (playerSelection.toLowerCase() == "scissors" & computerSelection.toLowerCase() == "paper") {
        playerScore += 1;
        return win;
    } else {
        return "Draw!"
    }
}

function game() {
    
    const playerSelection = prompt("Enter Rock, Paper or Scissors:");
    const computerSelection = computerPlay();
    let result = console.log(playRound(playerSelection, computerSelection));

    console.log(`Player: ${playerScore} -- Computer: ${computerScore}`)
}


function checkScore() {
let i = 0;

while(i<5){
    game();
    i++;
}

if(playerScore > computerScore) {
    console.log("Congrats! You WON!") 
} else {
    console.log("You Lost! Try Again!")
};
}

checkScore();
