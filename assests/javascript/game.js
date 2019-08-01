const computerSongs = [oblivion, home, magnets, human];

const letters = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z,];

const userGuessLower = userGuess.toLowerCase();

let guessedLetters = []

let winsCounter = 0

let lossCounter = 0

// Randomly chooses a choice from the options array. This is the Computer's guess.
const computerSongs = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    const userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
const computerSongs = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // This will check the user guess and its something they already pressed it will be undefined and it should do nothing. Option 1

    if (letters.indexOf(userGuessLower)) === -1 {

    };

    // This is final bit of code where if they press the right keys they won and the song plays, the image of the album artwork comes up as well option 2

    if (oblivion) {

        if ((userGuess === "o") || (userGuess === "b") || (userGuess === "l") || (userGuess === "i") || (userGuess === "v") || (userGuess === "n")) {

            const winsCounter = document.getElementById("winsCounter");
        }


    };

    if (home) {

        if ((userGuess === "h") || (userGuess === "o") || (userGuess === "m") || (userGuess === "e")) {

        }

    };

    if (magnets) {

        if ((userGuess === "m") || (userGuess === "a") || (userGuess === "n") || (userGuess === "g") || (userGuess === "e") || (userGuess === "t") || (userGuess === "s")) {

        }
    };

    if (human) {

        if ((userGuess === "h") || (userGuess === "u") || (userGuess === "m") || (userGuess === "a") || (userGuess === "n")) {

        }

    };



