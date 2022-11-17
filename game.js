const choices = ["Rock", "Paper", "Scissors"];

let playerScore = 0;
let computerScore = 0;
let gameWon = 0;

const rock = document.getElementById('rock');
//console.log(rock);
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const result = document.getElementById('result');

rock.addEventListener('click', () => (playGame('Rock', getComputerChoice())));
paper.addEventListener('click', () => (playGame('Paper', getComputerChoice())));
scissors.addEventListener('click', () => playGame('Scissors', getComputerChoice()));

//let playerChoice = prompt("Choose your weapon brave traveler");

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    return choice;
}

// if playerChoice - computerChoice is equal to 1 or -2, player wins, numbers represent index in choices array
// inserting any other wonky stuff will result in player losing because we don't like cheaters
function playGame(playerSelection, computerSelection){
    if(gameWon){
        playerScore = 0;
        computerScore = 0;
        gameWon = 0;
    }
    while(result.firstChild){
        result.removeChild(result.lastChild); // this is where I left off
    }
    let scoreHeader = document.createElement('div');
    scoreHeader.textContent = 'Current score is:';  
    let score = document.createElement('div');
    score.textContent = `Player: ${playerScore}   -   Computer: ${computerScore}`;
    result.appendChild(scoreHeader);
    result.appendChild(score);
    let playerChoice = document.createElement('div');
    playerChoice.textContent = `You chose ${playerSelection}.`;
    let computerChoice = document.createElement('div');
    computerChoice.textContent = `Computer chose ${choices[computerSelection]}.`;
    result.appendChild(playerChoice);
    result.appendChild(computerChoice);
    //result.appendChild(document.createTextNode(`You chose ${playerSelection}\xA0Computer chose ${choices[computerSelection]}.`));
    if(choices.findIndex(element => element.toLowerCase() === playerSelection.toLowerCase()) - computerSelection === 1 || choices.findIndex(element => element.toLowerCase() === playerSelection.toLowerCase()) - computerSelection === -2){
        result.appendChild(document.createTextNode(`You win this round! ${playerSelection} beats ${choices[computerSelection]}!`));
        //return(`You win! ${playerSelection} beats ${choices[computerSelection]}!`);
        playerScore++;
    }
    else if(choices.findIndex(element => element.toLowerCase() === playerSelection.toLowerCase()) - computerSelection === 0){
        result.appendChild(document.createTextNode('This round is a tie!'));
    }
    else {
        result.appendChild(document.createTextNode(`You lose this round! ${playerSelection} is beat by ${choices[computerSelection]}!`));
        computerScore++;
    }
    if(playerScore === 3 || computerScore === 3){
        gameWon = 1;
        let finalScore = document.createElement('div');
        if(playerScore - computerScore > 0){
            finalScore.textContent = "You won!!!!";
        }
        else if(playerScore - computerScore < 0) finalScore.textContent = "The computer won, n00b";
        else finalScore.textContent =  "This is lame, nobody wins";
        result.appendChild(finalScore);
    };
}
//console.log(playGame(playerChoice, getComputerChoice()));

//function game(){

 //   for(let i = 0; i < 5; i++){
   
        
        //let game = playGame(playerSelection, computerSelection);
        //console.log(game); //lets you know if you won or lost the round
        // if(game === 1){
        //     playerScore++;
        // }
        // else if(game === 0){
        //     computerScore++;
        // }
         //score of 3 is enough to win in 5 rounds
    
        
   // }
    
//}


//console.log(game());