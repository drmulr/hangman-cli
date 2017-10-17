
// * word.js should contain all of the methods which will check the letters guessed versus the random word selected.
var Letter = require("./letter.js");
var Random = require("./game.js");
var inquirer = require("inquirer");

//-------------------------------------------------------
var wordArray = ["sample", "computer", "homework", "downtown", "browser"];



var Word = function(){
    var wordRandom = "";
    this.getWord = function bringWord(){
        wordRandom = wordArray[Math.floor(Math.random() * (wordArray.length))];
        return wordRandom
    }

    this.genBlanks = function(x){
        var lettersIn = x.split("");
        var numBlanks = lettersIn.length;
        for (var i = 0; i < numBlanks.length; i++){
            console.log("_ " + x);
        }
    }
}




// console.log("Chosen Word: " + chosenWord);
// console.log("Num Blanks: " + numBlanks);

module.exports = Word;