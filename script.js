const playerGuess = 10;
const correctNumber = 10;
let message = '';
const finalMessage = (playerGuess > correctNumber) ? 'Too high!' : (playerGuess < correctNumber) ? 'Too low!' : 'Congratulations! You guessed the correct number.';
console.log(finalMessage)