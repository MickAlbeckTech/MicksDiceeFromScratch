


let firstDiceValue = Math.ceil(6 * Math.random()); //generates random number between from 1 to 6



let secondDiceValue = Math.ceil(6 * Math.random()); 

console.log(firstDiceValue);
console.log(secondDiceValue);

document.querySelector(".diceNum1 img").src="images/dice" + firstDiceValue + ".png";
document.querySelector(".diceNum2 img").src="images/dice" + secondDiceValue + ".png";




