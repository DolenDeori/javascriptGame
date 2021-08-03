'use strict';

// get the valus form html 
const startButton = document.querySelector('#generate');
const startText = document.querySelector('.NumberGenerate');
const userGuess = document.querySelector('#userGuess');
const checkButton = document.querySelector('#check');
const message = document.querySelector('#message');
const attempts = document.querySelector('.counter');
const userGuessValues = document.querySelector('.userGuessValues');

// generate a random number
let randomNumber;
startButton.addEventListener('click' ,()=>{
    randomNumber = Math.floor(Math.random()*100) + 1;
    startButton.innerHTML = 'Number Generated'
    startText.innerHTML = 'A random number is generated between 1 and 100';
    startButton.disabled = true;
    userGuess.disabled = false
})


let guessVlaueList = []
let counter = 0


checkButton.addEventListener('click' , ()=> {
    const userGuessValue =  parseInt(userGuess.value);
    userGuessValues.value = guessVlaueList.toString();
    console.log(userGuessValue)
    guessVlaueList.push(userGuessValue + " ");
    if (typeof userGuessValue === "number"){
        if (userGuessValue < 100){
            if (userGuessValue === randomNumber){
                message.innerHTML = `Yeee ! You have done it. The Number was ${randomNumber}`;
                message.classList.remove('text-danger');
                message.classList.add('text-success');
                startText.innerHTML = '';
                startButton.disabled = false;
                userGuess.disabled = true;
                userGuess.value = '';
                startButton.innerHTML = 'Generate a New Number'
            }
            else if (userGuessValue > randomNumber){
                message.innerHTML = 'Your is guess is greater than actual try with a smaller number'
                message.classList.add('text-danger');
                userGuess.value = '';
                counter++
                attempts.innerHTML = counter;
            }
            else if (userGuessValue < randomNumber){
                message.innerHTML = 'Your is guess is less than actual try with a greater number';
                message.classList.add('text-danger');
                userGuess.value = '';
                counter++
                attempts.innerHTML = counter;
            }
        }
        else{
            message.innerHTML = 'The number you have entered is greater than 100'
        }
    }
    else{
        message.innerHTML = 'Please Enter a integer between 1 and 100';
        userGuess.value = '';
    }

})


