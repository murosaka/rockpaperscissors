const choices = ['rock','paper','scissors'];
const playerChoice = "PAper";
let computerChoice = getComputerChoice();

function getComputerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerChoice, computerChoice){
    if (playerChoice.toLowerCase() == computerChoice) {
        return "tie";
    } else if (playerChoice.toLowerCase() == "rock" && computerChoice =='scissors' ||
                playerChoice.toLowerCase() == "paper" && computerChoice =='rock' || 
                playerChoice.toLowerCase() == "scissors" && computerChoice =='paper') {
        return "win";
    }  else if (playerChoice.toLowerCase() == "rock" && computerChoice =='paper' ||
                playerChoice.toLowerCase() == "paper" && computerChoice =='scissors' || 
                playerChoice.toLowerCase() == "scissors" && computerChoice =='rock') {
        return "lost";
    }
}

console.log(`You ${playRound(playerChoice, computerChoice)}. ` +
            `Your choice is ${playerChoice.toLowerCase()}. ` +
            `Computer's choice is ${computerChoice}`);
