const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let computerGuess;
let guess;
let selectedLevel;
let selectedDifficulty;
let guessCounter = 0

function selectDifficulty() {
    readline.question(`Please choose a difficulty - easy, medium and hard.
For more information about the difficulties please enter "info": `, difficulty => {
        selectedDifficulty = difficulty
        if (difficulty == 'easy') {
            selectLevel()
        }
        else if (difficulty == 'medium') {
            selectLevel()
        }
        else if (difficulty == 'hard') {
            selectLevel()
        }
        else if (difficulty == "info") {
            console.log(`easy - infinite guesses.
medium - 10 guesses.
hard - 5 guesses.`)
            selectDifficulty()
        }
        else {
            console.log(`Invalid input.`)
            selectDifficulty()
        }
    })
}

function selectLevel() {
    readline.question(`Please choose a level - 1, 2, 3.
For more information about the levels please enter "info": `, level => {
        selectedLevel = Number(level)
        if (level === 1) {
            computerGuess = Math.floor(Math.random() * 100);
            guessANumber()
        }
        else if (level === 2) {
            computerGuess = Math.floor(Math.random() * 200);
            guessANumber()
        }
        else if (level === 3) {
            computerGuess = Math.floor(Math.random() * 300);
            guessANumber()
        }
        else if (level == "info") {
            console.log(`Level 1 - numbers from 0 to 100.
Level 2 - numbers from 0 to 200.
Level 3 - numbers from 0 to 300.`)
            selectLevel()
        }
        else {
            console.log(`Invalid input.`)
            selectLevel()
        }
    })
}

function guessANumber() {
    switch (selectedDifficulty) {
        case "easy":
            switch (selectedLevel) {
                case 1: readline.question('Guess the number (0-100):', number => {
                    guess = Number(number);
                    if (guess <= 100 && guess >= 0) {
                        if (guess == computerGuess) {
                            console.log('Correct! You guess the number!')
                            tryAgain()
                        }
                        else if (guess < computerGuess) {
                            console.log("Incorrect! The number is too low!");
                            guessANumber();
                        }
                        else if (guess > computerGuess) {
                            console.log("Incorrect! The number is too high!");
                            guessANumber();
                        }
                    } else {
                        console.log("Invalid input! Try again...");
                        guessANumber();
                    }
                })
                    break;
                case 2: readline.question('Guess the number (0-200):', number => {
                    guess = Number(number);
                    if (guess <= 200 && guess >= 0) {
                        if (guess == computerGuess) {
                            console.log('Correct! You guess the number!')
                            tryAgain()
                        }
                        else if (guess < computerGuess) {
                            console.log("Incorrect! The number is too low!");
                            guessANumber();
                        }
                        else if (guess > computerGuess) {
                            console.log("Incorrect! The number is too high!");
                            guessANumber();
                        }
                    } else {
                        console.log("Invalid input! Try again...");
                        guessANumber();
                    }
                })
                    break;
                case 3: readline.question('Guess the number (0-300):', number => {
                    guess = Number(number);
                    if (guess <= 300 && guess >= 0) {
                        if (guess == computerGuess) {
                            console.log('Correct! You guess the number!')
                            tryAgain()
                        }
                        else if (guess < computerGuess) {
                            console.log("Incorrect! The number is too low!");
                            guessANumber();
                        }
                        else if (guess > computerGuess) {
                            console.log("Incorrect! The number is too high!");
                            guessANumber();
                        }
                    } else {
                        console.log("Invalid input! Try again...");
                        guessANumber();
                    }
                })
                    break;
            }
        case "medium": {
            switch (selectedLevel) {
                case 1: readline.question('Guess the number (0-100):', number => {
                    guess = Number(number);
                    if (guessCounter === 9) {
                        console.log(`You did not guess the number.
The number was ${computerGuess}`)
                        tryAgain()
                        return;
                    }
                    if (guess <= 100 && guess >= 0) {
                        if (guess == computerGuess) {
                            console.log('Correct! You guess the number!')
                            tryAgain()
                        }
                        else if (guess < computerGuess) {
                            console.log("Incorrect! The number is too low!");
                            guessCounter++
                            guessANumber();
                        }
                        else if (guess > computerGuess) {
                            console.log("Incorrect! The number is too high!");
                            guessCounter++
                            guessANumber();
                        }
                    } else {
                        console.log("Invalid input! Try again...");
                        guessANumber();
                    }
                })
                    break;
                case 2: readline.question('Guess the number (0-200):', number => {
                    guess = Number(number);
                    if (guessCounter === 9) {
                        console.log(`You did not guess the number.
The number was ${computerGuess}`)
                        tryAgain()
                        return;
                    }
                    if (guess <= 200 && guess >= 0) {
                        if (guess == computerGuess) {
                            console.log('Correct! You guess the number!')
                            tryAgain()
                        }
                        else if (guess < computerGuess) {
                            console.log("Incorrect! The number is too low!");
                            guessCounter++
                            guessANumber();
                        }
                        else if (guess > computerGuess) {
                            console.log("Incorrect! The number is too high!");
                            guessANumber();
                            guessCounter++
                        }
                    } else {
                        console.log("Invalid input! Try again...");
                        guessANumber();
                    }
                })
                    break;
                case 3: readline.question('Guess the number (0-300):', number => {
                    guess = Number(number);
                    if (guessCounter === 9) {
                        console.log(`You did not guess the number.
The number was ${computerGuess}`);
                        tryAgain()
                        return;
                    }
                    if (guess <= 300 && guess >= 0) {
                        if (guess == computerGuess) {
                            console.log('Correct! You guess the number!')
                            tryAgain()
                        }
                        else if (guess < computerGuess) {
                            console.log("Incorrect! The number is too low!");
                            guessCounter++
                            guessANumber();
                        }
                        else if (guess > computerGuess) {
                            console.log("Incorrect! The number is too high!");
                            guessCounter++
                            guessANumber();
                        }
                    } else {
                        console.log("Invalid input! Try again...");
                        guessANumber();
                    }
                })
                    break;
            }
        }
        case "hard": {
            switch (selectedLevel) {
                case 1: readline.question('Guess the number (0-100):', number => {
                    guess = Number(number);
                    if (guessCounter === 4) {
                        console.log(`You did not guess the number.
The number was ${computerGuess}`)
                        tryAgain()
                        return;
                    }
                    if (guess <= 100 && guess >= 0) {
                        if (guess == computerGuess) {
                            console.log('Correct! You guess the number!')
                            tryAgain()
                        }
                        else if (guess < computerGuess) {
                            console.log("Incorrect! The number is too low!");
                            guessCounter++
                            guessANumber();
                        }
                        else if (guess > computerGuess) {
                            console.log("Incorrect! The number is too high!");
                            guessCounter++
                            guessANumber();
                        }
                    } else {
                        console.log("Invalid input! Try again...");
                        guessANumber();
                    }
                })
                    break;
                case 2: readline.question('Guess the number (0-200):', number => {
                    guess = Number(number);
                    if (guessCounter === 4) {
                        console.log(`You did not guess the number.
The number was ${computerGuess}`)
                        tryAgain()
                        return;
                    }
                    if (guess <= 200 && guess >= 0) {
                        if (guess == computerGuess) {
                            console.log('Correct! You guess the number!')
                            tryAgain()
                        }
                        else if (guess < computerGuess) {
                            console.log("Incorrect! The number is too low!");
                            guessCounter++
                            guessANumber();
                        }
                        else if (guess > computerGuess) {
                            console.log("Incorrect! The number is too high!");
                            guessANumber();
                            guessCounter++
                        }
                    } else {
                        console.log("Invalid input! Try again...");
                        guessANumber();
                    }
                })
                    break;
                case 3: readline.question('Guess the number (0-300):', number => {
                    guess = Number(number);
                    if (guessCounter === 4) {
                        console.log(`You did not guess the number.
The number was ${computerGuess}`);
                        tryAgain()
                        return;
                    }
                    if (guess <= 300 && guess >= 0) {
                        if (guess == computerGuess) {
                            console.log('Correct! You guess the number!')
                            tryAgain()
                        }
                        else if (guess < computerGuess) {
                            console.log("Incorrect! The number is too low!");
                            guessCounter++
                            guessANumber();
                        }
                        else if (guess > computerGuess) {
                            console.log("Incorrect! The number is too high!");
                            guessCounter++
                            guessANumber();
                        }
                    } else {
                        console.log("Invalid input! Try again...");
                        guessANumber();
                    }
                })
                    break;
            }
        }
    }
}

function tryAgain() {
    guessCounter = 0
    readline.question('Do you want to play again?', input => {
        if (input == "yes" || input == "y") {
            computerGuess = Math.floor(Math.random() * 100);
            guessANumber();
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

selectDifficulty()