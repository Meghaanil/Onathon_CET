const answer = document.querySelector(".answer");
const submitButton = document.querySelector(".submit");
const newWordButton = document.querySelector(".new-word");
const scrambledWord = document.querySelector(".scrambled-word");
const gameContainer = document.querySelector(".game-container");
const flag = document.querySelector(".flag");

const words = [
    "grapes",
    "apple",
    "orange",
    "melon",
    "guava",
    "friend",
    "gentle",
    "highly",
    "fish",
    "joking",
    "kingdom",
    "land",
    "monkey",
    "needle",
    "octopus",
    "pearl",
    "ready",
    "symbol",
    "gather",
    "violent",
    "windy",
    "grain",
    "battle",
    "clean",
    "drain",
    "enter",
    "forget",
    "green",
    "head",
    "pants",
    "hiccup",
    "pink",
    "jump",
    "link",
    "lemon",
    "mercy",
    "brat",
    "hurt",
    "spin"
]

function playerTurn(){
    const player = document.querySelector("#player");
    const player2 = document.querySelector("#player2");
    player.classList.toggle("hidden");
    player2.classList.toggle("hidden");
}

let word = words[Math.floor(Math.random() * words.length + 1)];

function newWord() {
    word = words[Math.floor(Math.random() * words.length + 1)];
    answer.value = "";
    scrambledWord.innerHTML = scrambleWord();
}

function scrambleWord() {
    let letters = word.split("");
    let i = letters.length, temporaryValue, randomIndex;

    while (0 !== i){
        randomIndex = Math.floor(Math.random() * i);
        i -= 1;
        temporaryValue = letters[i];
        letters[i] = letters[randomIndex];
        letters[randomIndex] = temporaryValue;
        }
        return letters.join("");
    }

let translateBy = 0;
function checkAnswer() {
    if (answer.value == word){
        translateBy = translateBy - 200;
        document.getElementById("flag").style.transform = `translate(${translateBy}px)`;
        endGame();
        newWord();
        playerTurn();
        alert("Answer correct, you give a mighty heave!")

        //SANITY CHECK
        // console.log("correct");
        // console.log(translateBy);
    } else {
        translateBy = translateBy + 350;
        document.getElementById("flag").style.transform = `translate(${translateBy}px)`;
        endGame();
        newWord();
        playerTurn();
        alert("Answer incorrect, your grip slipped!");

        //SANITY CHECK
        // console.log(translateBy);
        // console.log("incorrect");
    };
}
function endGame() {
    if (translateBy >= 1000){
        window.location.href="./endPage2.html";
    } else if (translateBy <= -1000){
        window.location.href="./endPage1.html";
    }    
}



newWord();
console.log(word)



scrambledWord.innerHTML = scrambleWord()
submitButton.addEventListener("click", checkAnswer);
newWordButton.addEventListener("click", newWord)