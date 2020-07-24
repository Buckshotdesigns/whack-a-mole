const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
let score = document.querySelector("#score");
let results = 0;

function randomSquare() {
    square.forEach(className => {
        className.classList.remove("mole")
    })
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add("mole");

    hitPosition = randomPosition.id;
}