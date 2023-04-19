function guessANumber() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    let computerGuess = Math.floor(Math.random() * 1);
    let guess;

    let recursiveAsyncReadLine = function () {

        readline.question('Guess the number (0-100):', number => {
            guess = Number(number);

            if (guess <= 100 && guess >= 0) {
                if (guess == computerGuess) {
                    console.log('Correct! You guess the number!')
                    readline.close();
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
}

guessANumber()
