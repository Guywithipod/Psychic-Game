let wins = 0

let losses = 0

let guessesleft = 9

const userWins = document.getElementById("user-wins");

const userLost = document.getElementById("user-losses");

const userGuessesLeft = document.getElementById("user-guesses-left");

const userChoose = document.getElementById("user-choose");

let computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

document.onkeyup = function(event){

    
    const userGuess = event.key;
      
    const computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    userChoose.textContent = "you choose: " + userGuess;
    

    if (userGuess === computerGuess){

        wins++;
        userChoose.push(userGuess);
    }

    else {
        guessesleft--;
    }

    if (guessesleft === 0 ){
        losses++;
        
    }

    userWins.textContent = "wins: " + wins;
    userLost.textContent = "losses: " + losses;
    userChoose.textContent = "you choose: " + userGuess;
    userGuessesLeft.textContent = "guesses left: " + guessesleft;


};