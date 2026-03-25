let getComputerChoice = function () {randomNumber = Math.floor(Math.random() * 3)
if (randomNumber === 0) {return "Scissors"}
else if (randomNumber === 1) {return "Paper"}
else if  (randomNumber === 2) {return "Rock"}
else {return "What is a this"}};
let getHumanChoice = function () {userInput = prompt("Rock, Paper or Scissors")
    let cleanInput = userInput.toLowerCase();
    if (cleanInput === "rock") {return "Rock"}
    else if (cleanInput === "paper") {return "Paper"}
    else if (cleanInput === "scissors") {return "Scissors"}
    else {return "Are you mad or something?"}
};



let playGame = function () {
  let playRound = function (humanChoice, computerChoice) {
   const HumanChoice = getHumanChoice();
const ComputerChoice = getComputerChoice();
    if (HumanChoice === "Rock" && ComputerChoice === "Paper") {
        computerScore++;
        return console.log("You lose, Paper beats Rock")} 
    else if (HumanChoice === "Rock" && ComputerChoice === "Scissors") {
        humanScore++;
        return console.log("You win, Rock beats Scissors")}
    else if (HumanChoice === "Rock" && ComputerChoice === "Rock") {
        return console.log("That is a tie")}
    else if (HumanChoice === "Paper" && ComputerChoice === "Rock") {
        humanScore++;
        return console.log("You win, Paper beats Rock")} 
    else if (HumanChoice === "Paper" && ComputerChoice === "Scissors") {
        computerScore++;
        return console.log("You lose, Scissors beats Paper")}
    else if (HumanChoice === "Paper" && ComputerChoice === "Paper") {
        return console.log("That is a tie")} 
    else if (HumanChoice === "Scissors" && ComputerChoice === "Paper") {
        humanScore++;
        return console.log("You win, Scissors beats Paper")} 
    else if (HumanChoice === "Scissors" && ComputerChoice === "Rock") {
        computerScore++;
        return console.log("You lose, Rock beats Scissors")}
    else if (HumanChoice === "Scissors" && ComputerChoice === "Scissors") {
        return console.log("That is a tie")} 
    else {return console.log("What is going on here")}           
};
 
let humanScore = 0;
let computerScore = 0;
let i = 1;
while (i < 6) 
{playRound()
    i++
}
if (humanScore > computerScore) {
    console.log("You are an awesome human, you won!");
}
else if (computerScore > humanScore) {
    console.log("You are an embarassment to humanity, computer won!");
}
else {console.log("It is a tie")};
};

console.log(playGame());
