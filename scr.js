const choices = ['rock','paper','scissors'];
const playerChoice = "PAper";
let computerChoice = getComputerChoice();

function getComputerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerChoice, computerChoice){
    switch (playerChoice.toLowerCase()) {
        case 'rock':
            if (computerChoice == 'scissors') {
                return 'win';
                break;
            } else if (computerChoice == 'rock') {
                return 'tie';
                break;
            } 
            return 'lost';
            break;
        case 'paper':
            if (computerChoice == 'scissors') {
                return 'lost';
                break;
            } else if (computerChoice == 'rock') {
                return 'win';
                break;
            } 
            return 'tie';
            break;
        case 'scissors':
            if (computerChoice == 'scissors') {
                return 'tie';
                break;
            } else if (computerChoice == 'rock') {
                return 'lost';
                break;
            } 
            return 'win';
            break;
    }
}

console.log(`You ${playRound(playerChoice, computerChoice)}. ` +
            `Your choice is ${playerChoice.toLowerCase()}. ` +
            `Computer's choice is ${computerChoice}`);
