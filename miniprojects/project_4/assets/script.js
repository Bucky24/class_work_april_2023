var gameContainer = document.getElementById("game_container");
var startButton = document.getElementById("game_start_button");
var timerHolder = document.getElementById("timer_holder");
var scoreHolder = document.getElementById("score_holder");

var words = ["javascript", "array"];
var word;
var guess;
var gameStarted = false;
var timer = 5;
var wins = 0;
var losses = 0;

startButton.addEventListener("click", function() {
    var randomIndex = Math.floor(Math.random() * words.length);
    word = words[randomIndex];
    guess = [];

    for (let i=0;i<word.length;i++) {
        guess.push("-");
    }

    gameContainer.style.display = "block";
    startButton.style.display = "none";
    gameStarted = true;

    renderGuessToBrowser();
    renderTimerToBrowser();

    var interval = setInterval(function() {
        if (!gameStarted) {
            return;
        }
        timer --;

        if (timer <= 0) {
            clearInterval(interval);

            gameContainer.textContent = "You lose! Try agian next time";
            gameStarted = false;
            losses ++;
            localStorage.setItem("losses", losses);
            renderScoreToBrowser();
        }
    
        renderTimerToBrowser();
    }, 1000);
});

function renderGuessToBrowser() {
    gameContainer.textContent = "Your guess: " + guess.join("");
}

function renderTimerToBrowser() {
    timerHolder.textContent = "Time left: " + timer;
}

function renderScoreToBrowser() {
    scoreHolder.textContent = "You have won " + wins + " times and lost " + losses + " times";
}

// check where the guess shows up in the word
// start with the first character. Does it match?
// continue to the next character. Does it match?
// repeat this for every character in the string.
// fill in those blanks

document.addEventListener("keyup", function(event) {
    if (!gameStarted) {
        return;
    }
    // get guess from user. this will be the key they typed
    var userGuess = event.key.toLowerCase();

    for (let index = 0; index < word.length; index++) {
        const character = word[index];
        
        if (userGuess == character) {
            //console.log("your guess matched");
            guess[index] = userGuess;
            //console.log(guess, index, userGuess);
        }
    }

    renderGuessToBrowser();

    for (let index = 0; index < guess.length; index++) {
        const element = guess[index];

        if (element === "-") {
            return;
        }
    }

    // if we get here, game is over
    gameContainer.textContent = "You win! Yaaaay! YOu are smart!";
    gameStarted = false;
    wins ++;
    localStorage.setItem("wins", wins);
    renderScoreToBrowser();
});

var tempWins = localStorage.getItem("wins");
if (tempWins !== null) {
    wins = tempWins;
}
var tempLosses = localStorage.getItem("losses");
if (tempLosses !== null) {
    losses = tempLosses;
}
renderScoreToBrowser();