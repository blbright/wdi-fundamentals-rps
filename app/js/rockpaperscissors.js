////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return (move || getinput());
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return (move || randomPlay());
}

function getWinner(playerMove,computerMove) {
    var winner;
    
    if (playerMove == "rock") {
        if (computerMove == "rock") {
        winner = "tie";
        }
    else if (computerMove == "paper") {
        winner = "computer";
        }
    else if (computerMove == "scissors") {
        winner = "player";
        }
    }
    
        else if (playerMove == "paper") {
            if (computerMove == "rock") {
            winner = "player";
            }
            else if (computerMove = "paper") {
                winner = "tie";
            }
            else if (computerMove = "scissors") {
                winner = "computer";
            }
        }
            else {
                if (computerMove == "rock") {
                winner = "computer";
            }
                else if (computerMove == "paper") {
                winner = "player";
            }
                else {
                winner = "tie";
                }
            }
                return winner;
  }


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    if ((playerWins < 5) && (computerWins < 5)) {
        if (getWinner(getPlayerMove(),getComputerMove()) === "computer") { 
            computerWins++; 
        }
        else if (getWinner(getPlayerMove(),getComputerMove()) === "player") {
            playerWins++; 
        }
    
    return [playerWins, computerWins];
    }
}

