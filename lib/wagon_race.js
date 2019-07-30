// TODO: write your code here
const tdRed = document.querySelectorAll("#player1_race td");
const tdBlue = document.querySelectorAll("#player2_race td");
const blueScore = document.querySelector("#score-blue");
const redScore = document.querySelector("#score-red");
const button = document.querySelector("#rematch");


let scoreBlue = 0;
let scoreRed = 0;
let position = 0;
let positionBlue = 0;
document.addEventListener('keyup', (element) => {
  if (element.key === "q") {
    if (position < 22) {
      tdRed[position].classList.remove("active");
      position += 1;
      tdRed[position].classList.add("active");
    } else {
      scoreRed += 1;
      tdRed[position].classList.remove("active");
      tdRed[0].classList.add("active");
      alert("YOU WON RED");
      tdBlue[positionBlue].classList.remove("active");
      tdBlue[0].classList.add("active");
      positionBlue = 0;
      position = 0;
      redScore.innerText = `${scoreRed}`;
    }
  }
  if (element.key === "p") {
    if (positionBlue < 22) {
      tdBlue[positionBlue].classList.remove("active");
      positionBlue += 1;
      tdBlue[positionBlue].classList.add("active");
    } else {
      scoreBlue += 1;
      tdBlue[positionBlue].classList.remove("active");
      tdBlue[0].classList.add("active");
      alert("YOU WON BLUE");
      tdRed[position].classList.remove("active");
      tdRed[0].classList.add("active");
      position = 0;
      positionBlue = 0;
      blueScore.innerText = `${scoreBlue}`;
    }
  }
});

button.addEventListener("click", (event) => {
  scoreBlue = 0;
  scoreRed = 0;
  blueScore.innerText = `${scoreBlue}`;
  redScore.innerText = `${scoreRed}`;
});
