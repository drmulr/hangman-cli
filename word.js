
// * word.js should contain all of the methods which will check the letters guessed versus the random word selected.
var Letter = require("./letter.js");

var inquirer = require("inquirer");

//-------------------------------------------------------
var wordArray = ["debugger", "firebase", "javascript", "chrome", "node", "handlebars", "bootstrap"];



var Word = function(){
    this.wordRandom = [];
    this.getWord = function(){
        var tempWord = wordArray[Math.floor(Math.random() * (wordArray.length))];
        for (var i = 0; i < tempWord.length; i++) {
            this.wordRandom.push(new Letter(tempWord[i])); 
        } 
    }

    this.checkLetters=function(let){
        var letterGeussedsal = false;
        for (var i = 0; i < this.wordRandom.length; i++){
            if ( this.wordRandom[i].let == let ){
                this.wordRandom[i].visible = true;
                letterGeussedsal = true;
            } 
        }
        return letterGeussedsal;
    }

    this.genBlanks = function(){
        var temp = [];
        for (var i = 0; i < this.wordRandom.length; i++){
            temp.push(this.wordRandom[i].guessedLetter());
        }
        console.log(temp.join(' '));
    }
}




// console.log("Chosen Word: " + chosenWord);
// console.log("Num Blanks: " + numBlanks);

module.exports = Word;