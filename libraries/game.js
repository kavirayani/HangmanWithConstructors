import { getUnpackedSettings } from "http2";

//number of guesses = length of the word prompted
var word = require("word.js");
var wordList = require("WordList.js");
var inquirer = require("inquirer");

function game()
{
    this.Play = function() {
        inquirer
          .prompt([
            {
              type: "confirm",
              name: "choice",
              message: "Play ?"
            }
          ])
          .then(function(val) {
            // If the user says yes to another game, play again, otherwise quit the game
            if (val.choice) {
              this.play();
            }
            else {
              this.quit();
            }//end of else
        }) //end of .then
    } 

function display()
{
    //display the word with dashes = number of letters in the word
    //intake the key for geuss
    //if it matches, display the letter wherever it belongs in the word
    //if there are no empty dashes left to be populated, then prompt a message "You guessed it right!"
    // exit function
   guesses --;
    if guesses == 0
    {
        //message the user that he is out of guesses
    }

    else
    {
        //contibue guessing
    }
};//end of display

//prompt "do you wanty to play more?"
//if Yes, function display()
//else
// display "hope to see you soon"
//quit game 


};//end of game