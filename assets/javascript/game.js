/* Let's start with some variables up here */

let wins = 0, losses = 0;

let answer;

let triesLeft;

/* function for new game. Google OP */

function newGame() {
    answer = String.fromCharCode(Math.floor(26 * Math.random()) + 97);

    guesses = [];
    triesLeft = 10;

    $('#wins').text(wins);
    $('#loses').text(loses);
    $('#triesLeft').text(triesLeft);

}

$(document).ready(function() {
    newGame();