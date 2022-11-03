const choices = ["Rock", "Paper", "Scissors"];
let playerChoice = prompt("Choose your weapon brave traveler");


function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    console.log(choice);
    return choice;
}

// if playerChoice - computerChoice is equal to 1 or -2, player wins, numbers represent index in choices array
// inserting any other wonky stuff will result in player losing because we don't like cheaters
function playGame(playerSelection, computerSelection){
    console.log(`You chose ${playerSelection}\nComputer chose ${choices[computerSelection]}.`);
    if(choices.findIndex(element => element.toLowerCase() === playerSelection.toLowerCase()) - computerSelection === 1 || choices.findIndex(element => element.toLowerCase() === playerSelection.toLowerCase()) - computerSelection === -2){
        return(`You win! ${playerSelection} beats ${choices[computerSelection]}!`);
    }
    else if(choices.findIndex(element => element.toLowerCase() === playerSelection.toLowerCase()) - computerSelection === 0){
        return("It's a tie!");
    }
    else return(`You lose! ${playerSelection} is beat by ${choices[computerSelection]}!`);
}

console.log(playGame(playerChoice, getComputerChoice()));