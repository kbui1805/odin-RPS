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

console.log(`Computer: ${getComputerChoice()}`);
