let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const userInput = document.getElementById('userInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
const resetButton = document.getElementById('resetButton');

// Handle the Guess Button click event
guessButton.addEventListener('click', function() {
  const userGuess = parseInt(userInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = "Please enter a number between 1 and 100.";
    message.style.color = "red";
  } else {
    attempts++;
    attemptsDisplay.textContent = attempts;

    if (userGuess === randomNumber) {
      message.textContent = `Correct! The number was ${randomNumber}. You guessed it in ${attempts} attempts!`;
      message.style.color = "green";
      guessButton.disabled = true;
      resetButton.style.display = "block";
    } else if (userGuess < randomNumber) {
      message.textContent = "Too low! Try again.";
      message.style.color = "orange";
    } else {
      message.textContent = "Too high! Try again.";
      message.style.color = "orange";
    }
  }

  userInput.value = ''; // Clear the input field
});

// Handle the Reset Button click event
resetButton.addEventListener('click', function() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  attemptsDisplay.textContent = attempts;
  message.textContent = '';
  userInput.value = '';
  guessButton.disabled = false;
  resetButton.style.display = "none";
});
