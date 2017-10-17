
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
        //If guess is anywhere in the word, change letInWord to true.
        if (theWord[i] === let) {
            letInWord = true;
        }
    }
    //If the letter is indeed in the word as indicated above:
    if (letInWord) {
        //Loop through the word.
        for (var j = 0; j < numBlanks; j++) {
            //Push to total blank array at index of theWord where = user choice:
            if (theWord[j] === let) {
                totalBlankArr[j] = let;
            }
        }
        
        numGuesses--;
        console.log(totalBlankArr.join(" "));
        console.log("-------------------------------------");
    }
    //If the letter is not in the random word::
    else {
        //..then we add the letter to the list of wrong letters, and we subtract one of the remaining guesses.
        wrongGuessesArr.push(let);
        numGuesses--;
        console.log("-------------------------------------\n")
        console.log("Sorry, bad guess.");
        console.log("Incorrect guesses: " + wrongGuessesArr + "\n");
        console.log("-------------------------------------")
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
