// console.log('hello');


// randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!
function getComputerChoice() {
    let choice = getRamdom().toUpperCase();
    return choice;
}

//get random number and return 1, 2 or 3
function getRamdom() {
    let random_number = Math.floor((Math.random() * 100));
    if (random_number < 33) {
        return 'rock';
    } else if (random_number < 66) {
        return 'paper';
    } else {
        return 'scissor';
    }
}


// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

function playRound(playerSelection, computerSelection) {
    let result = getResult(playerSelection, computerSelection);
    switch(result) {
        case 'win':
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        case 'loose':
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        case 'draw':
            return `It's a draw!`;
        default:
            return 'Invalid result! Try again';
    }
    

};

function getResult(playerSelection, computerSelection) {
    let compare_str = `${playerSelection} - ${computerSelection}`.toLowerCase();
    switch(compare_str) {
        case 'rock - rock':
            return 'draw';
            break;
        case 'rock - paper':
            return 'loose';
            break;
        case 'rock - scissor':
            return 'win';
            break;
        case 'paper - rock':
            return 'win';
            break;
        case 'paper - paper':
            return 'draw';
            break;
        case 'paper - scissor':
            return 'loose';
            break;
        case 'scissor - rock':
            return 'loose';
            break;
        case 'scissor - paper':
            return 'win';
            break;
        case 'scissor - scissor':
            return 'draw';
            break;
    }
}

console.log(`Computer: ${getComputerChoice()}`);
