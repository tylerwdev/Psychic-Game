//create an array of the alphabet
let randomLetter = [
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

let wins = 0;
let losses = 0;
let guessesLeft = 10;
let guessesSoFar = [];

let playerWins = document.getElementById("playerWins");
let playerLosses = document.getElementById("playerLosses");
let guessesRem = document.getElementById("guessesRem");
let guessesUsed = document.getElementById("guessesUsed");

let computerChoice =
  randomLetter[Math.floor(Math.random() * randomLetter.length)];

let reset = function () {
  guessesLeft = 10;
  guessesSoFar = [];
  computerChoice =
    randomLetter[Math.floor(Math.random() * randomLetter.length)];
};
let hasGameStarted = false;

document.getElementById("hide").style.display = "none";

onclick = "startGame()";

document.onclick = function (event) {
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
    document.getElementById("hidden1").style.display = "none";
    document.getElementById("hidden2").style.display = "none";
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
