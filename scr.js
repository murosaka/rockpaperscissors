/* Rock - Paper - Scissors game */

const choices = ['Rock','Paper','Scissors'];
function getComputerChoice(){
    // function randomly select single value from choices
    return choices[Math.floor(Math.random()*choices.length)];
}
let computerChoice = getComputerChoice();

//const container = document.querySelector("#container");
const result = document.querySelector('#result');
result.setAttribute('style', 'white-space: pre;'); // necessary 
// to have multiple lines in result.textContent
const result2 = document.querySelector('#result2');
// result.classList.add('result');
// container.appendChild(result)

let playerWin = 0;
let computerWin = 0;

const buttons = document.querySelectorAll('button');

let showResult = function (e) {
    let resulted = playRound(e.target.id,getComputerChoice());
    result.textContent = `${resulted}\r\n`;
    result.textContent += `Player: ${playerWin}\r\n`;
    result.textContent += `Computer: ${computerWin}`;
    if (playerWin >= 5) {
        result2.textContent = "PLAYER WON";
        buttons.forEach(button => {
            button.removeEventListener('click',showResult);
            }
        )
    } else if (computerWin >= 5) {
        result2.textContent = "COMPUTER WON";
        buttons.forEach(button => {
            button.removeEventListener('click',showResult);
            }
        )
    }
}

buttons.forEach(button => {
    button.addEventListener('click',showResult);
    }
)

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