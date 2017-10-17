
// * main.js will contain the app logic. Running it in Terminal/Bash will start the game.

var inquirer = require('inquirer');
var letter = require("./letter.js");
var Word = require("./word.js");


//variables:
var wrongGuessesArr = [];
var totalBlankArr = [];
var numGuesses = 5;
var theWord = "";


//Basic Function to Start Game
function startGame() {
    //Generate new word --- CONSTRUCTOR:
    var newWord = new Word();
    theWord = newWord.getWord();
    wrongGuessesArr = [];
    totalBlankArr = [];
    
    console.log("\n\nLet's Play Hangman!\n\n")
    console.log("Random word you're supposed to guess: " + theWord);
    //Working with the word, need split and count.
    numLetters = theWord.split("");
    numBlanks = numLetters.length;
    console.log("NumBlanks: " + numBlanks);
    //Need blanks depending how long random word is:    
    for (var i = 0; i < numBlanks; i++){
        totalBlankArr.push("_");
    }
    console.log(totalBlankArr.join(" "));
}


function checkGuess(let) {
    var letInWord = false;
    //Is the user's guess anywhere in theWord?
    for (var i = 0; i < numBlanks; i++) {
        if (theWord[i] === letter) {
            letInWord = true;
        }
    }
    //If the letter is indeed in the word:
    if (letInWord) {
        // Loop through the word.
        for (var j = 0; j < numBlanks; j++) {
            //Put guess
            if (theWord[j] === let) {
                // Here we set the specific space in blanks and letter equal to the letter when there is a match.
                totalBlankArr[j] = letter;
            }
        }
        // Logging for testing.
        console.log(totalBlankArr);
    }
    // If the letter doesn't exist at all...
    else {
        // ..then we add the letter to the list of wrong letters, and we subtract one of the guesses.
        wrongGuessesArr.push(let);
        numGuesses--;
    }
}


function playGame(){
    if (numGuesses > 0) {
        // -----------
        // Utilizing Inquirer to prompt user to guess a letter:
        // -----------  
        inquirer.prompt([{
            name: "letterGuess",
            message: "Guess a letter: "
        }]).then(function (answers) {

            checkGuess(answers.letterGuess);

            // if (answers.letterGuess == theLetter) {
            //     console.log("\nYOU WIN!\n");
            // } else {
            //     numGuesses--;
            //     guessesArr.push(answers.letterGuess);
            //     console.log("\nGuesses remaining: " + numGuesses);
            //     console.log("Your guesses: " + guessesArr + "\n");
    
            // }
            // var newLetter = new Letter(answers.letterGuess);
            console.log("Guesses remainin: " + numGuesses);
            playGame();
        })

    } else {
        //NEED PUT END OF GAME FUNCTION HERE
        console.log("Out of guesses. Game over.\n\n");
    }
}

function printStats(){
    //NEED THIS LIKELY AFTER GAME COMPLETION OR AFTER EACH GUESS
}


startGame();
playGame();
