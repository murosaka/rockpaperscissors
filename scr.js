/* Rock - Paper - Scissors game */

const choices = ['Rock','Paper','Scissors'];
function getComputerChoice(){
    // function randomly select single value from choices
    return choices[Math.floor(Math.random()*choices.length)];
}
let computerChoice = getComputerChoice();

//const container = document.querySelector("#container");
const result = document.querySelector('#result');
// result.classList.add('result');
// container.appendChild(result)

let playerWin = 0;
let computerWin = 0;

const buttons = document.querySelectorAll('button');
result.setAttribute('style', 'white-space: pre;'); // necessary 
// to have multiple lines in result.textContent

function showResult (e) {
    let resulted = playRound(e.target.id,getComputerChoice());
    result.textContent = `${resulted}\r\n`;
    result.textContent += `Player: ${playerWin}\r\n`;
    result.textContent += `Computer: ${computerWin}`;    
}

buttons.forEach(button => {
    button.addEventListener('click',showResult)
})


function playRound(playerChoice, computerChoice){
    // function plays one round of game
    if (playerChoice == "Rock" && computerChoice =='Scissors' ||
        playerChoice == "Paper" && computerChoice =='Rock' || 
        playerChoice == "Scissors" && computerChoice =='Paper') {
            playerWin += 1;
            return 'Player Wins';
        }  
    else if (playerChoice == "Rock" && computerChoice =='Paper' ||
        playerChoice == "Paper" && computerChoice =='Scissors' || 
        playerChoice == "Scissors" && computerChoice =='Rock') {
            computerWin += 1;
            return 'Computer Wins';
        }
    else {
        return 'Tie';
    }
}

// function playRound(playerChoice, computerChoice){
//     // function plays one round of game
//     if (playerChoice == "Rock" && computerChoice =='Scissors' ||
//         playerChoice == "Paper" && computerChoice =='Rock' || 
//         playerChoice == "Scissors" && computerChoice =='Paper') {
//             playerWin += 1;
//             return `You Win. ${playerChoice} beats ${computerChoice}.`;
//         }  
//     else if (playerChoice == "Rock" && computerChoice =='Paper' ||
//         playerChoice == "Paper" && computerChoice =='Scissors' || 
//         playerChoice == "Scissors" && computerChoice =='Rock') {
//             computerWin += 1;
//             return `You Lose. ${computerChoice} beats ${playerChoice}.`;
//         }
//     else {
//         return `Tie. ${playerChoice} = ${computerChoice}. Try again.`;
//     }
// }

// function game() {
//     // five rounds of game shall be played. If tie then another try added
//     // Only resulative rounds are considered
//     let wins = 0;
//     let loses = 0;
//     let n = 5;
//     for (let i = 0; i < n; i++){
//         let playerChoice = window.prompt("Your choice", "rock");
//         playerChoice = playerChoice.toLowerCase();
//         playerChoice = playerChoice.charAt(0).toUpperCase()+playerChoice.slice(1);
//         let computerChoice = getComputerChoice();
//         let score = playRound(playerChoice, computerChoice);
//         if (score == 0) {
//             n = n + 1;
//             console.log(`Try ${i+1}. Tie. ${playerChoice} = ${computerChoice}. Trying again.`);
//         }
//         else if (score == 2) {
//             wins += 1;
//             console.log(`Try ${i+1}. You Win. ${playerChoice} beats ${computerChoice}.`);
//         }
//         else if (score == 1) {
//             loses += 1;
//             console.log(`Try ${i+1}. You Lose. ${computerChoice} beats ${playerChoice}.`);
//         }
//     }

//     if (wins > loses) {
//         console.log(`You won ${wins} : ${loses}.`);
//     } else if (wins < loses){
//         console.log(`You lost ${wins} : ${loses}.`)
//     } else {
//         console.log(`Tie ${wins} : ${loses}.`)
//     }
// }

// game();