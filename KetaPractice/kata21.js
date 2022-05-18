let prompt = require("prompt-sync")();
const maxNumber = 100
let randomNumber = Math.floor(Math.random() * maxNumber)
console.log(`The random number = ${randomNumber}`)


const compareNumbers = function (knownNumber) {
  let attempts = 0;
  let guess;
  do {
    guess = prompt("Guess a number: ");
    attempts++;
    if (guess > knownNumber) {
      console.log('Too High!');
    } else if (guess < knownNumber) {
      console.log('Too Low!');
    } else if (!parseInt(guess)) {
      console.log('Not a number! Try again!');
    } else if (guess == knownNumber) {
      console.log('You got it! You took ' + attempts + ' attempts!');
    }
  } while (guess != knownNumber);
};

compareNumbers(randomNumber);
