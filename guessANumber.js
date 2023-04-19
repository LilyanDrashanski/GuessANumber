function guessANumber() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    let computerGuess = Math.floor(Math.random() * 100);
    let guess;

    function recursiveAsyncReadLine() {
        readline.question('Guess the number (0-100):', number => {
            guess = Number(number);

            if (guess <= 100 && guess >= 0) {
                if (guess == computerGuess) {
                    console.log('Correct! You guess the number!')
                    tryAgain()
                }
                else if (guess < computerGuess) {
                    console.log("Incorrect! The number is too low!");
                    recursiveAsyncReadLine();
                }
                else if (guess > computerGuess) {
                    console.log("Incorrect! The number is too high!");
                    recursiveAsyncReadLine();
                }
            } else {
                console.log("Invalid input! Try again...");
                recursiveAsyncReadLine();
            }

        })
    }
    recursiveAsyncReadLine();

    function tryAgain() {
        readline.question('Do you want to play again?', input => {
            if (input == "yes" || input == "y") {
                computerGuess = Math.floor(Math.random() * 100);
                recursiveAsyncReadLine();
            }
            else if (input == "no" || input == "n") {
                return readline.close();
            }
            else {
                console.log("Please answer with yes or no.");
                tryAgain();
            }
        })
    }
}

guessANumber()

