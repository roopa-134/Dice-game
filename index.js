var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var imgsrc1 = "images/" + randomDiceImage1;
var diceImage1 = document.querySelectorAll("img")[0];
diceImage1.setAttribute("src", imgsrc1);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "dice" + randomNumber2 + ".png";
var imgsrc2 = "images/" + randomImage2;
var diceImage2 = document.querySelectorAll("img")[1];
diceImage2.setAttribute("src", imgsrc2);
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
