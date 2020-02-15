/* Let's start with some variables up here */

let wins = 0 

let losses = 0;

let answer;

let triesLeft, guesses, guesses_space;

/* function for new game. Google OP */

function newGame() {
    answer = String.fromCharCode(Math.floor(26 * Math.random()) + 97);

    guesses = [];
    triesLeft = 10;
    guesses_space = "";

    $('#wins').text(wins);
    $('#losses').text(losses);
    $('#triesLeft').text(triesLeft);
    $('#guesses').text(guesses_space);

}

$(document).ready(function() {
    newGame();
/* Game tyme */
    $(document).on("keypress", event => {
        
        const userInput = String.fromCharCode(event.which).toLowerCase();

        if ("a" <= userInput && userInput <= "z") {
            
            if (!guesses.includes(userInput)) {
                triesLeft--;

                $("#triesLeft").text(triesLeft);
                
                
                guesses.push(userInput);
                guesses_space += userInput;

                $("#guesses").text(guesses_space);

              
                if (userInput === answer) {
                    wins++;

                    newGame();

             
                } else if (triesLeft === 0) {
                    losses++;

                    newGame();

                }
            }
        }
    });
});