const choices = ["Rock", "Paper", "Scissors"];
//let playerChoice = prompt("Choose your weapon brave traveler");


function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
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

//console.log(playGame(playerChoice, getComputerChoice()));

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        console.log(`Current score is:\nPlayer score: ${playerScore}\nComputer score: ${computerScore}`);
        let game = playGame(prompt("Choose your weapon brave traveler"), getComputerChoice());
        console.log(game);
        if(game.includes("You win!")){
            playerScore++;
        }
        else if(game.includes("You lose!")){
            computerScore++;
        }
        if(playerScore === 3 || computerScore === 3) break;
    }
    if(playerScore - computerScore > 0){
        return("You won!!!!");
}
    else if(playerScore - computerScore < 0) return("The computer won, n00b");
    else return "This is lame, nobody wins";
}


console.log(game());