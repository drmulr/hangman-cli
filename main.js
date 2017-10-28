
// * main.js will contain the app logic. Running it in Terminal/Bash will start the game.
var inquirer = require('inquirer');
var Word = require("./word.js");

//variables:
var wrongGuessesArr = [];
var totalBlankArr = [];
var numGuesses = 9;
var newWord = "";



// NEXT STEPS: 
//     LETTER VALIDATION
//     WINNER ANNOUNCEMENT IF ALL LETTERS GUESSED (DONE)
//     ABILITY TO VISUALIZE BLANKS IN WORD



//Basic Function to Start Game
function startGame() {
    //Generate new word --- CONSTRUCTOR:
    newWord = new Word();
    newWord.getWord();


    console.log("\n\nLet's Play Hangman!\n");
    console.log("Here's a hint, all the words have to to with web dev technologies\n\nGuess a letter:\n")
    // console.log("FOR TESTING----Random word you're supposed to guess: " + theWord);
    //Working with the word, need split and count.
    //Need blanks depending how long random word is:    
    playGame();
}

//LETTER VALIDATION (coming soon):
// function alphanumeric(let)  
// {  
//  var letterNumber = /^[0-9a-zA-Z]+$/;  
//  if((let.value.match(letterNumber))   
//   {  
//    return true;  
//   }  
// else  
//   {   
//    alert("message");   
//    return false;   
//   }  
//   } 

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
        console.log(totalBlankArr.join(" "));
        console.log("-------------------------------------");
    }
    //If the letter is not in the random word::
    else {
        console.log("-------------------------------------\n")
        console.log("\nGuess letter:\n")
        console.log(totalBlankArr.join(" ") + "\n");
        //..then we add the letter to the list of wrong letters, and we subtract one of the remaining guesses.
        wrongGuessesArr.push(let);
        numGuesses--;

        console.log("Sorry, nope.");
        console.log("Incorrect guesses: " + wrongGuessesArr);
        console.log("-------------------------------------");
    }
}

function playGame() {
   
        // -----------
        // Utilizing Inquirer to prompt user to guess a letter:
        // -----------  
        inquirer.prompt([{
            name: "letterGuess",
            message: "Guess a letter: "
        }]).then(function (answers) {

            if (newWord.checkLetters(answers.letterGuess)){
                console.log("Yeah!")
                newWord.genBlanks();
                if (checkWin()){
                    console.log("You win!");
                    return;

                } else {
                    playGame();
                }
            }else {
                numGuesses--;
                if ( numGuesses > 0 ){
                    newWord.genBlanks();
                    console.log("Guesses remainin: " + numGuesses);
                    playGame();
                } else {
                    if (checkWin()){
                         console.log("Winna");
                    } else {
                        console.log("Lose");
                    }     
                    return;
                }   
            }

            
        })
}


function checkWin(){
    var win = true;
    for (var i = 0; i < newWord.wordRandom.length; i++) {
        if(!newWord.wordRandom[i].visible){
            win =false;
        }
        
    }
    return win;

}



function endGame() {
    //NEED THIS LIKELY AFTER GAME COMPLETION OR AFTER EACH GUESS

}

startGame();
// playGame();
