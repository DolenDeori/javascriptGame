'use strict';

// get the valus form html 
const startButton = document.querySelector('#generate');
const startText = document.querySelector('.NumberGenerate');
const userGuess = document.querySelector('#userGuess');
const checkButton = document.querySelector('#check');
const message = document.querySelector('#message');
const attempts = document.querySelector('.counter');

// generate a random number
let randomNumber;
startButton.addEventListener('click' ,()=>{
    randomNumber = Math.floor(Math.random()*100) + 1;
    startButton.innerHTML = 'Number Generated'
    startText.innerHTML = 'A random number is generated between 1 to 100';
    startButton.disabled = true;
    userGuess.disabled = false
})
let counter = 0
checkButton.addEventListener('click' , ()=> {
    const userGuessValue = Number(userGuess.value)
    console.log(userGuessValue)
    if (userGuessValue < 100){
        if (userGuessValue === randomNumber){
            message.innerHTML = `Yeee ! You have done it. The Number was ${randomNumber}`;
            startText.innerHTML = '';
            startButton.disabled = false;
            userGuess.disabled = true;
            userGuess.value = '';
            startButton.innerHTML = 'Generate a New Number'
        }
        else if (userGuessValue > randomNumber){
            message.innerHTML = 'Your is guess is greater than actual try with a smaller number'
            userGuess.value = '';
            counter++
            attempts.innerHTML = counter;
        }
        else if (userGuessValue < randomNumber){
            message.innerHTML = 'Your is guess is less than actual try with a greater number';
            userGuess.value = '';
            counter++
            attempts.innerHTML = counter;
        }
    }
    else{
        message.innerHTML = 'The number you have entered is greater than 100'
    }
})


