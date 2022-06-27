/* 
steps in solving a problem:

1. Understand the problem
2. Plan on how you're going to solve the problem
3. Pseudocode-- write down the logic of your program in natural language
4. Start by solving sub-problems of the big problem.
There are two players-- the computer and I.
If you choose Rock you beat scissors;
If you choose Paper you beat rock;
If you choose scissors you beat paper;
If both parties choose the same shape, then there is a tie and the game should be repeated to break the tie.*/


//Steps to create the rock, paper, scissors game. 
//Create the HTML file for displaying computer choice, user-choice, result, buttons, 
//Create reference to the HTML elements in JavaScript
//Add a mouse-click event listener 
//create a function that will be called when the mouse is clicked.
// Create a computer-choice random number.
//match each random number to the possible choices.
//create a function that will generate results and determine the winner.
//Create a loop that will play the game five times.*/

/*const computerChoiceDisplay= document.getElementById('computer-choice');
const userChoiceDisplay= document.getElementById('user-choice');
const resultDisplay= document.getElementById('result');
const possibleChoices= document.querySelectorAll('button');
let computerChoice;
let result;



function userChoice(e){
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
} 


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', userChoice));


function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)+1;
    
    if(randomNumber === 1){
        computerChoice = 'rock';

    }

    if(randomNumber === 2){
        computerChoice = 'paper';

    }

    if(randomNumber === 3){
        computerChoice = 'scissors';

    }

     computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    
    if( userChoice === computerChoice){
        result = "It's a tie.";
    }   

    if( userChoice === 'rock' && computerChoice === 'scissors'){
        result = 'You won! Rock beat scissors';
    }

    if( userChoice === 'paper' && computerChoice === 'scissors'){
        result = 'You lose! Scissors beat paper';
    }

    if( userChoice === 'scissors' && computerChoice === 'paper'){
        result = 'You won! Scissors beat paper';
    }

    if( userChoice === 'rock' && computerChoice === 'paper'){
        result = 'You lose! Paper beat rock';
    }

    if( userChoice === 'paper' && computerChoice === 'rock'){
        result = 'You won! Paper beat rock';
    }

    if( userChoice === 'scissors' && computerChoice === 'rock'){
        result = 'You lose! Rock beat scissors';
    }

    resultDisplay.innerHTML = result;
}*/

const userChoiceDisplay = document.createElement('h1');
const computerChoiceDisplay = document.createElement('h1');
const resultDisplay = document.createElement('h1');
const gameGrid = document.getElementById('game');
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);


const choices = ['rock', 'paper', 'scissors'];
let userChoice;
let computerChoice;

const handleClick = (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = 'User Choice: '+ userChoice;
    generateComputerChoice();
    getResult();

}


const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    computerChoiceDisplay.innerHTML = 'Computer Choice: ' + randomChoice;
    computerChoice = randomChoice;
}



for(let i=0; i< choices.length; i++) {
    const button = document.createElement('button');
    button.id = choices[i];
    button.innerHTML = choices[i];
    button.addEventListener('click', handleClick);
    gameGrid.appendChild(button);
}

const getResult = () => {
    switch (userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            resultDisplay.innerHTML = 'YOU  WIN!';
            break;

        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            resultDisplay.innerHTML = 'YOU LOSE!';
            break;

        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
            resultDisplay.innerHTML = "IT'S A TIE!";
            break;

        
    }
}

