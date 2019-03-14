//Global Variable Declarations

var remainingGuesses;
var winCount;

// Function Declarations

function start() {
    remainingGuesses = 12;
    winCount = 0;
    document.getElementById("guess-count").innerHTML = remainingGuesses;
    document.getElementById("win-count").innerHTML = winCount;

}

start();

function chooseAWord() {

    var wordList = ["orbit", "eclipse", "singularity", "interstellar", "gravity", "planet",
        "meteorite", "constellation", "solar", "antares", "galaxy", "supernova"
    ];

    var word = wordList[Math.floor(Math.random() * wordList.length)];

    return word;
}

chooseAWord();

//-----------------------------------------------------------------------------------------------//
var chosenWord = chooseAWord();
console.log(chosenWord);
var split = Array.from(chosenWord);
var sl = split.length;
console.log(split);

function setup() {

    var blankSpaces = [];
    var blanks;

    for (var a = 0; a < sl; a++) {
        blankSpaces.push("_ ");
    }

    var blanks = blankSpaces.join('');

    document.getElementById("word-holder").innerHTML = blanks;

    return blanks;
}

setup();

var setupArray = setup();
console.log(setupArray);
var ct = setupArray.split(" ");
var checkThis = ct.slice(0, [ct.length - 1]);
console.log(checkThis);

//------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------//

function guessChecker(letter) {

    for (var b = 0; b < sl; b++) {
        if (chosenWord.charAt(b) == letter) {
            checkThis[b] = chosenWord.charAt(b);
            document.getElementById("word-holder").innerHTML = checkThis;
        }
    }

}

//------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------//

document.onkeypress = function (event) {

    var hit = event.key;

    var userChoice = hit.toLowerCase();

    var keyDiv = document.getElementById("taken");

    keyDiv.insertAdjacentHTML("beforeend", userChoice + " ");

    remainingGuesses--;
    document.getElementById("guess-count").innerHTML = remainingGuesses;

    guessChecker(userChoice);

};
