let getComputerChoice = function () {randomNumber = Math.floor(Math.random() * 3)
if (randomNumber === 0) {return "Rock"}
else if (randomNumber === 1) {return "Paper"}
else {return "Scissors"}};
let getHumanChoice = function () {userInput = prompt("Rock, Paper or Scissors")
    if (userInput === "Rock") {return "Rock"}
    else if (userInput === "Paper") {return "Paper"}
    else if (userInput === "Scissors") {return "Scissors"}
    else {return "Are you mad or something?"}
};
alert(getHumanChoice());
let humanScore = 0;
let computerScore = 0;