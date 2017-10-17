
// * letter.js should control whether or not a letter appears as a "_" or as itself on-screen.


var RandomWord = require("./game.js");
var inquirer = require("inquirer");


var Letter = function(let){
    this.let = let;
    this.visible = false;
    this.placeholder = "_";
    this.guessedLetter = function(){
        return (this.visible) ? this.let : this.placeholder;
    };
}

module.exports = Letter;


var testing = new Letter();


