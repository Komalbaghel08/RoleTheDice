function rollDice() {
  let randomNum = Math.floor(Math.random() * 6) + 1;
  let diceImg = document.getElementById("dice");

  
  if (randomNum === 1) {
    diceImg.src = "dice1.jpg";
  } 
  else if (randomNum === 2) {
    diceImg.src = "dice2.jpg";
  } 
  else if (randomNum === 3) {
    diceImg.src = "dice3.jpg";
  } 
  else if (randomNum === 4) {
    diceImg.src = "dice4.jpg";
  } 
  else if (randomNum === 5) {
    diceImg.src = "dice5.jpg";
  } 
  else {
    diceImg.src = "dice6.jpg";
  }

  console.log("Dice Rolled: " + randomNum);
}

