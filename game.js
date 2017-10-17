
 //* game.js file will randomly select a word.
//Generates Random Word From Array:


var RandomWord = function(){
    var wordArray = ["sample", "computer", "homework", "downtown", "browser"];
    this.getWord = function bringWord(){
        var wordRandom = wordArray[Math.floor(Math.random() * (wordArray.length))];
        return wordRandom;
    }
}

//Exporting constructor:
module.exports = RandomWord;