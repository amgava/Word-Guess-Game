window.onload = function () {

    // Variable Declarations

    var remainingGuesses = 6;

    var winCount = 0;

    var update = "";

    var wordList;

    var word;

    var split;

    var sl;

    var blankSpaces = []

    var blanks;

    var ct;

    var checkThis;

    var hit;

    var playerChoice;

    var keyDiv = document.getElementById("taken");

    var alreadyP = []

    //------------------------------------------------------------------------------------------------//

    // Function Declarations


    function overview() {

        // Ensure variables are at starting position
        remainingGuesses = 6;
        update = "";
        wordList = undefined;
        word = undefined;
        split = undefined;
        sl = undefined;
        blankSpaces = []
        blanks = undefined;
        ct = undefined;
        checkThis = undefined;
        alreadyP = []

        //Set data to be shown on load or page refresh
        document.getElementById("guess-count").innerHTML = remainingGuesses;
        document.getElementById("win-count").innerHTML = winCount;
        document.getElementById("word-holder").innerHTML = blanks;

        // Choose word for player to guess and store result
        wordList = ["orbit", "eclipse", "singularity", "interstellar", "gravity", "planet",
            "meteorite", "constellation", "solar", "antares", "galaxy", "supernova"
        ]

        word = wordList[Math.floor(Math.random() * wordList.length)];

        console.log(word);

        split = Array.from(word);

        sl = split.length;


        //Create placeholders for where player input will be displayed

        for (var a = 0; a < sl; a++) {
            blankSpaces.push("_ ");
        }

        blanks = blankSpaces.join("");

        document.getElementById("word-holder").innerHTML = blanks;

        ct = blanks.split(" ");

        checkThis = ct.slice(0, [ct.length - 1]);

    }


    // Check if player input matches expected answer
    // Display player input in matching space if correct, decrement player's remaining guesses if incorrect
    function guessChecker(letter) {

        var present = false;

        for (var b = 0; b < sl; b++) {
            if (word.charAt(b) == letter) {
                present = true;
            }
        }

        if (present) {
            for (var b = 0; b < sl; b++) {
                if (word.charAt(b) == letter) {
                    checkThis[b] = word.charAt(b);
                    update = checkThis.join(" ");
                    document.getElementById("word-holder").innerHTML = update;

                }
            }
        } else {
            remainingGuesses--;
            document.getElementById("guess-count").innerHTML = remainingGuesses;
        }

        // console.log(update);
        // console.log(winCount);

    }

    // Check if player has won or lost, increment accordingly and choose new word
    function nextRound() {

        let str = update.split(" ").join("");
        // console.log(keyDiv);

        if (str == word) {
            winCount++;
            document.getElementById("win-count").innerHTML = winCount;
            remainingGuesses = 6;
            blanks = undefined;
            keyDiv.innerText = "";
            overview();
        } else {
            if (remainingGuesses == 0) {
            remainingGuesses = 6;
            blanks = undefined;
            keyDiv.innerText = "";
            overview();
            } else {
                return;
            }
        }
    }




    // Called to start game
    overview();


    // Event handler for player input
    document.onkeypress = function (event) {

        hit = event.key;

        playerChoice = hit.toLowerCase();

        if (alreadyP.indexOf(playerChoice) == -1) {
            alreadyP.push(playerChoice);
            keyDiv.insertAdjacentText("beforeend", playerChoice + " ");
        }

        guessChecker(playerChoice);

        nextRound();

    }

};
