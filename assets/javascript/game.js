//create an array of the alphabet
var randomLetter = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];

var playerWins = document.getElementById("playerWins");
var playerLosses = document.getElementById("playerLosses");
var guessesRem = document.getElementById("guessesRem");
var guessesUsed = document.getElementById("guessesUsed");

var computerChoice =
  randomLetter[Math.floor(Math.random() * randomLetter.length)];

var reset = function () {
  guessesLeft = 10;
  guessesSoFar = [];
  computerChoice =
    randomLetter[Math.floor(Math.random() * randomLetter.length)];
};
var hasGameStarted = false;

document.getElementById("hide").style.display = "none";

document.onkeyup = function (event) {
  if (hasGameStarted) {
    var playerChoice = event.key;
    var computerChoice =
      randomLetter[Math.floor(Math.random() * randomLetter.length)];

    guessesSoFar.push(playerChoice);

    if (playerChoice === computerChoice) {
      wins++;
      alert("You won! You're psychic skills are improving.");
      reset();
    } else {
      guessesLeft--;
    }
    if (guessesLeft === 0) {
      losses++;
      alert("You lost. Clear your mind and focus.");
      reset();
    }

    playerWins.textContent = " " + wins;
    playerLosses.textContent = " " + losses;
    guessesRem.textContent = " " + guessesLeft;
    guessesUsed.textContent = " " + guessesSoFar;
  } else {
    document.getElementById("hide").style.display = "block";
    document.getElementById("hide-test").style.display = "none";
    hasGameStarted = true;
  }
};

//: computer choice set to random choice from array (randomLetter)
//: user key stroke needs to check with computer random choice
//: if user key stroke matches random choice, log in Wins
//: update Wins html
//: if user key stroke doesn't match random choice, log in Losses
//: update Losses html
//: generate set number of guesses available before win or loss record
//: generate data displaying how many guesses have been used
