let correctWord = "spatula";  // The word you need to guess
let hintIndex = 0;  // Keep track of which hint to show
let hints = [
  "I’m something you can find in a kitchen, and you’re likely to use me for cooking.",
  "I’m often made of wood, plastic, or metal.",
  "I’m used for flipping things in a frying pan or stirring food.",
  "I have a long handle, and my head is flat."
];
let chances = 5;

function checkGuess() {
  let userGuess = document.getElementById("user-guess").value.toLowerCase().trim();
  let messageElement = document.getElementById("message");
  let chancesElement = document.getElementById("chances-left");

  if (userGuess === correctWord) {
    messageElement.innerHTML = "Congratulations! You guessed the word!";
    messageElement.style.color = "green";
    document.getElementById("user-guess").disabled = true;
    return;
  } else {
    chances--;
    if (chances > 0) {
      // Update hint and remaining chances
      hintIndex = (hintIndex + 1) % hints.length;
      document.getElementById("hint").innerHTML = hints[hintIndex];
      messageElement.innerHTML = "Incorrect! Try again.";
      chancesElement.innerHTML = `Chances Left: ${chances}`;
    } else {
      messageElement.innerHTML = "Game Over! The word was: " + correctWord;
      messageElement.style.color = "red";
      document.getElementById("user-guess").disabled = true;
    }
  }

  document.getElementById("user-guess").value = "";
}
