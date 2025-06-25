// window.onload = function() {
//   //write your code here

let valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

let corazonDiamantes = ["♦", "♥", "♠", "♣"];



function generateCard() {

  let cardIcon = document.querySelectorAll(".icon");
  let cardValue = document.getElementById("card-valor");
  

  const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
  

 cardValue.textContent = getRandom(valores);
 const randomIcon = getRandom(corazonDiamantes);
 
 cardIcon.forEach(icon => {
  icon.textContent = randomIcon
   randomIcon === "♦" || randomIcon === "♥" ? icon.style.color = "red": icon.style.color = "black"
});
  

};
let buttonCard = document.getElementById("nueva-carta");
buttonCard.addEventListener("click", generateCard);


window.onload = () => {
  generateCard();
}
