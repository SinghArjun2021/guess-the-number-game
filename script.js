let randomNumber = parseInt(Math.random() * 100 + 1);

 const submit = document.querySelector('#subt')
 const userInput = document.querySelector('#guessField')
 const guessSlot = document.querySelector('.guesses')
 const remanining = document.querySelector('.lastResult')
 const  lowOrHigh = document.querySelector('.lowOrHi')
 const startOver = document.querySelector('.resultParas')

 const p = document.createElement('p')

 let prevGuess = [];
 let numGuess = 1;

 let playGame = true;

 if(playGame){
   submit.addEventListener('click', function(e){
     e.preventDefault()
     let guess = parseInt(userInput.value);
     validateGuess(guess);
   });
 }

 function validateGuess(guess){
   //validating whether the input is less than 1 or more than hundred or NaN
    if(isNaN(guess)){
      alert("Please enter a valid number")
    }else if(guess < 1){
      alert("Please enter a number greater than 1")
    }else if(guess > 100){
      alert("Please enter a number less than 100")
    }else {
      prevGuess.push(guess);
      if (numGuess === 11){
        displayGuess(guess);
        displayMessage(`Game Over. Random number was ${randomNumber}`)
        endGame()
      }else {
          displayGuess(guess);
          checkGuess(guess);
      }
    }
 }

 function checkGuess(guess){
   // to check whether the input is equal to the random number and also to display whether the number is higher or lower than the random number
      if(guess === randomNumber){
        displayMessage(`Hurrah! You guessed it Right`);
        endGame();
      }else if(randomNumber > guess){
        displayMessage("Number is Tooo Low")
      }else if(randomNumber < guess){
        displayMessage("Number is Too High")
      }
 }

 function displayGuess(guess){
   //to clean the user input and to add the input values in the array (guessSlot) and to decrement the number of guesses
   userInput.value = '';
   guessSlot.innerHTML +=  `${guess}, `;
   numGuess++;
   remanining.innerHTML = `${11 - numGuess} `;
 }

 function displayMessage(message){
   // to display the lowOrHigh message
   lowOrHigh.innerHTML =  `<h2>${message}</h2>`
 }

 function endGame(){
  // to stop allowing the user from entering more input and to add a Start New Game button 
  userInput.value = '';
  userInput.setAttribute('disabled', '')
  p.classList.add('new-game-button');
  p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
 }



 function newGame(){
  // to reset all the variables 
  const  newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remanining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true
  });
 }
 