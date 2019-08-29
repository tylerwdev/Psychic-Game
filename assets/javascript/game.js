

//create an array of the alphabet
var randomLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = []

var playerWins = document.getElementById("playerWins");
var playerLosses = document.getElementById("playerLosses");
var guessesRem = document.getElementById("guessesRem");
var guessesUsed = document.getElementById("guessesUsed");

var computerChoice = randomLetter[Math.floor(Math.random() * randomLetter.length)];

var reset =function(){
    guessesLeft = 10;
    guessesSoFar = [];
    computerChoice = randomLetter[Math.floor(Math.random() * randomLetter.length)];

}
var hasGameStarted = false;


document.getElementById('hide').style.display='none';

document.onkeyup = function(event) {
        
    if(hasGameStarted){

            var playerChoice = event.key;
            var computerChoice = randomLetter[Math.floor(Math.random() * randomLetter.length)];
        
            guessesSoFar.push(playerChoice);

            if (playerChoice === computerChoice) {
            wins++;
        }
        else {
            guessesLeft--;
        }
        if (guessesLeft===0){
            losses++;
            reset();
        }
        
        playerWins.textContent = " " + wins;
        playerLosses.textContent = " " + losses;
        guessesRem.textContent = ' ' + guessesLeft;
        guessesUsed.textContent = " " + guessesSoFar
        
    }
    else {
        document.getElementById('hide').style.display='block';
        hasGameStarted = true;
    }
}

//TODO: computer choice set to random choice from array (randomLetter)
//TODO: user key stroke needs to check with computer random choice
//TODO: if user key stroke matches random choice, log in Wins
//TODO: update Wins html
//TODO: if user key stroke doesn't match random choice, log in Losses
//TODO: update Losses html
//TODO: generate set number of guesses available before win or loss record
//TODO: generate data displaying how many guesses have been used