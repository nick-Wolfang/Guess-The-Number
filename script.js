
/**
 * Guess The Number Game
 * TODO: Get user value from input and save it to variable numberGuess
 * TODO: Generate a random number 1 to 100 and save it to variable correctNumber
 * TODO: Console whether the guess is too high, too low, or is correct inside playGame function
 * TODO: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * TODO: Complete the showYouWon, showNumberAbove, showNumberBelow
 * TODO: Use the showYouWon... functions within displayResult to display the correct dialog
 * TODO: Save the guess history in a variable called guess
 * TODO: Display the guess history using displayHistory() function
 * TODO: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses 

// Variable for store the correct random number 
let correctNumber = getRandomNumber();
console.log(correctNumber);

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
    // showYouWon();
    // showNumberAbove();
    // showNumberBelow();
}

var guessList = new Array();
console.log(guessList);

function playGame(){
    let numberGuess = document.getElementById("number-guess").value;
    console.log(numberGuess);
    displayResult(numberGuess);
    saveGuessHistory(numberGuess);
}

function displayResult(numberGuess) {
    if( numberGuess < correctNumber ) {
        console.log("Too Low");
        showNumberBelow();
    }
    else if( numberGuess > correctNumber ){
      console.log("Too High");
      showNumberAbove();
    }
    else
      {
        console.log("Correct");
        showYouWon();
      }
}

function initGame(){
  // *CODE GOES BELOW HERE *
}

function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}

function getRandomNumber(){
  // *CODE GOES BELOW HERE *
  let wholeNumber = Math.floor(Math.random() * 100)+1;
  return wholeNumber;
}

function saveGuessHistory(guess) {
  var list = guessList.push(guess);
  console.log(guessList);
}

function displayHistory() {
  let index; // TODO
  let list = "<ul class='list-group'>";
  // *CODE GOES BELOW HERE *
  list += '</ul>'
  document.getElementById("history").innerHTML = list;
}

function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"
  let dialog = getDialog("won", text);
  console.log(dialog);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  let dialog = getDialog("warning", text);
  console.log(dialog);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  let dialog = getDialog("warning", text);
  console.log(dialog);
  document.getElementById("result").innerHTML = dialog;
}
