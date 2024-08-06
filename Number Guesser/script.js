let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () =>{
 return Math.floor(Math.random()*10);
};
//console.log(generateTarget());
const compareGuesses = (userGuess, compGuess, secretGuess) => {
  
const humanDifference = Math.abs(secretGuess-userGuess);
const computerDifference = Math.abs(secretGuess-compGuess);
if(humanDifference<=computerDifference){
  return true;
} else {
  return false;
}
};
//console.log(compareGuesses(7, 8, 8));
const updateScore = (winner) =>{
  if(winner==='human'){
    return humanScore++;
  } else if (winner==='computer'){
    return computerScore++;
  }
};
const advanceRound = () => {
  currentRoundNumber++;
}
