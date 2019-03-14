//Global Variable Declarations

var wordList = ["orbit","eclipse","singularity","interstellar","gravity","planet",
    "meteorite","constellation","solar","antares","galaxy","supernova"];

var chosenWord = wordList[Math.floor(Math.random()*wordList.length)];

var maxGuesses = 12;




// Function Declarations

function resetGuess () {

    document.getElementById("guess-count").innerHTML = maxGuesses;
}

function chooseAWord(word) {

    var separate = Array.from(word);

    for (var a = 0; a < separate.length; a++) {
        separate[a] = "_ ";
    }

    var inGoes = separate.join(" ");

    document.getElementById("word-holder").innerHTML = inGoes;
}


function keyLogger() {

    document.onkeypress = function(event) {

        var hit = event.key;

        var res = hit.toUpperCase();

        var keyDiv = document.getElementById("taken");

        keyDiv.insertAdjacentHTML("beforeend", res + " ");

        for (var i = 0; i < str.length; i++) {
            alert(str.charAt(i));
          }
        
        
        /*if (hit == chosenWord) {
            //replace chosenWord with hit
        } else
        {
            //decrement guess counter
        } */
    }
}



//Game

resetGuess();

chooseAWord(chosenWord);

keyLogger();
