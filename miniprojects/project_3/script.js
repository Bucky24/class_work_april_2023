var wins = 0;
var ties = 0;
var losses = 0;

while (true) {
    var input = prompt("Choose R, P, or S:");

    var chomperChoices = 'RPS';
    // generates 0, 1, or 2
    var temp = Math.random();
    var chomperChoiceIndex = Math.floor(Math.random() * chomperChoices.length);
    // find the actual letter the computer chose by using the index
    chomperChoice = chomperChoices[chomperChoiceIndex];

    alert("User chose: " + input + " chomper chose " + chomperChoice);

    var userWon = false;
    var chomperWon = false;

    if (input === "R") {
        if (chomperChoice === "R") {
            // this is a tie
        } else if (chomperChoice === "S") {
            // user wins
            userWon = true;
        } else if (chomperChoice === "P") {
            // chomper won
            chomperWon = true;
        }
    } else if (input === "S") {
        if (chomperChoice === "R") {
            // chomper won
            chomperWon = true;
        } else if (chomperChoice === "S") {
            // tie
        } else if (chomperChoice === "P") {
            // user won
            userWon = true;
        }
    } else if (input === "P") {
        if (chomperChoice === "R") {
            // user won
            userWon = true;
        } else if (chomperChoice === "S") {
            // chomper won
            chomperWon = true;
        } else if (chomperChoice === "P") {
            // tie
        }
    }

    // at this point I know who won or if it is a tie

    if (userWon) {
        alert("You win!");
        wins ++;
    } else if (chomperWon) {
        alert("You lose!");
        losses ++;
    } else {
        alert("It's a tie!");
        ties ++;
    }

    alert("You won " + wins + " times, tied " + ties + " times, and lost " + losses + " times");

    var doesUserPlayAgain = confirm("Want to play again?");

    if (!doesUserPlayAgain) {
        break;
    }
}