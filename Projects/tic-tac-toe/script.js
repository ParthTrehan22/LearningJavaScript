//List of elements
let turnMusic = new Audio("./ting.mp3");
let gameOverMusic = new Audio("./gameover.mp3");
let turn = "X";
let isGameOver = false;

//Function to toggle the turn symbol
const toggleTurn = () => {
    if (turn === "X") {
        turn = "O";
    } else {
        turn = "X";
    }
}

//Function to play the winning gif
const playWinningGif = (value) => {
    document.getElementById("winningGif").style.opacity = value;
}

//Function for playing the winning Music

const playWinningMusic = () => {
    gameOverMusic.play();
}

//Function to check Win
const checkWin = () => {
    let squareValue = document.getElementsByClassName('squareValue');
    let wins = [
        [0, 1, 2, 15, -10, 90],
        [3, 4, 5, 15, 0, 90],
        [6, 7, 8, 15, 10, 90],
        [0, 3, 6, 5, 0, 0],
        [1, 4, 7, 15 , 0, 0],
        [2, 5, 8, 25, 0, 0],
        [0, 4, 8, 12, -8, -45],
        [2, 4, 6, 5, 15, 45]
    ];
    wins.forEach(e => {
        if (squareValue[e[0]].innerText === squareValue[e[1]].innerText && squareValue[e[0]].innerText === squareValue[e[2]].innerText && squareValue[e[0]].innerText !== "") {
            document.getElementsByClassName("info")[0].innerText = "Hurray!! " + (squareValue[e[0]].innerText).toString() + " won."
            isGameOver = true;
            playWinningGif(1);
            playWinningMusic();
            document.getElementsByClassName("strikeThrough")[0].style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.getElementsByClassName("strikeThrough")[0].style.transition = `ease-in-out 1s`
        }
    })
}

//Function to set square value to empty
const setSqaureEmpty = () => {
    let squares = document.getElementsByClassName("square");
    Array.from(squares).forEach((element) => {
        let sqaureValue = element.querySelector('.squareValue');
        sqaureValue.innerText = "";
        turn = "X";
        document.getElementsByClassName("info")[0].innerText = "Turn of " + turn;
    })
}

//Logic to reset the game
let resetButton = document.getElementById("Reset");
resetButton.addEventListener("click", () => {
    setSqaureEmpty();
    playWinningGif(0);
})

//Game Logic
let squares = document.getElementsByClassName("square");
Array.from(squares).forEach((element) => {
    let sqaureValue = element.querySelector('.squareValue');
    element.addEventListener('click', () => {
        if (!isGameOver) {
            if (sqaureValue.innerText === "") {
                sqaureValue.innerText = turn;
                document.getElementsByClassName("info")[0].innerText = "Turn of " + (turn === "X" ? "O" : "X").toString();
                checkWin();
                toggleTurn();
                turnMusic.play();
            }
        }
    })
})
