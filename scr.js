const choices = ['Rock','Paper','Scissors'];
// let playerChoice = window.prompt("You choice", "rock");
// playerChoice = playerChoice.toLowerCase();
// playerChoice = playerChoice.charAt(0).toUpperCase()+playerChoice.slice(1);
//let computerChoice = getComputerChoice();

function getComputerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerChoice, computerChoice){
        if (playerChoice == "Rock" && computerChoice =='Scissors' ||
            playerChoice == "Paper" && computerChoice =='Rock' || 
            playerChoice == "Scissors" && computerChoice =='Paper') {
                return 2;
            }  
        else if (playerChoice == "Rock" && computerChoice =='Paper' ||
            playerChoice == "Paper" && computerChoice =='Scissors' || 
            playerChoice == "Scissors" && computerChoice =='Rock') {
                return 1;
            }
        else {
            return 0;
        }
    }

function game() {
    let wins = 0;
    let loses = 0;
    let n = 5;
    for (let i = 0; i < n; i++){
        let playerChoice = window.prompt("Your choice", "rock");
        playerChoice = playerChoice.toLowerCase();
        playerChoice = playerChoice.charAt(0).toUpperCase()+playerChoice.slice(1);
        let computerChoice = getComputerChoice();
        let score = playRound(playerChoice, computerChoice);
        if (score == 0) {
            n = n + 1;
            console.log(`Try ${i+1}. Tie. ${playerChoice} = ${computerChoice}. Trying again.`);
        }
        else if (score == 2) {
            wins += 1;
            console.log(`Try ${i+1}. You Win. ${playerChoice} beats ${computerChoice}.`);
        }
        else if (score == 1) {
            loses += 1;
            console.log(`Try ${i+1}. You Lose. ${computerChoice} beats ${playerChoice}.`);
        }
    }

    if (wins > loses) {
        console.log(`You won ${wins} : ${loses}.`);
    } else if (wins < loses){
        console.log(`You lost ${wins} : ${loses}.`)
    } else {
        console.log(`Tie ${wins} : ${loses}.`)
    }
}

game();