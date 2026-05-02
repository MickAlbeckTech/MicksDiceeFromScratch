


let firstDiceValue = Math.ceil(6 * Math.random()); //generates random number between from 1 to 6



let secondDiceValue = Math.ceil(6 * Math.random()); 

console.log(firstDiceValue);
console.log(secondDiceValue);

document.querySelector(".diceNum1 img").src="images/dice" + firstDiceValue + ".png";
document.querySelector(".diceNum2 img").src="images/dice" + secondDiceValue + ".png";


// if (firstDiceValue == 1){
//     document.querySelector(".diceNum1 img").src="images/dice1.png";
// }
// if (firstDiceValue == 2){
//     document.querySelector(".diceNum1 img").src="images/dice2.png";
// }
// if (firstDiceValue == 3){
//     document.querySelector(".diceNum1 img").src="images/dice3.png";
// }
// if (firstDiceValue == 4){
//     document.querySelector(".diceNum1 img").src="images/dice4.png";
// }
// if (firstDiceValue == 5){
//     document.querySelector(".diceNum1 img").src="images/dice5.png";
// }
// if (firstDiceValue == 6){
//     document.querySelector(".diceNum1 img").src="images/dice6.png";
// }

// if (secondDiceValue == 1){
//     document.querySelector(".diceNum2 img").src="images/dice1.png";
// }
// if (secondDiceValue == 2){
//     document.querySelector(".diceNum2 img").src="images/dice2.png";
// }
// if (secondDiceValue == 3){
//     document.querySelector(".diceNum2 img").src="images/dice3.png";
// }
// if (secondDiceValue == 4){
//     document.querySelector(".diceNum2 img").src="images/dice4.png";
// }
// if (secondDiceValue == 5){
//     document.querySelector(".diceNum2 img").src="images/dice5.png";
// }
// if (secondDiceValue == 6){
//     document.querySelector(".diceNum2 img").src="images/dice" + secondDiceValue + ".png";
// }

