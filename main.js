
let paper = document.getElementById('paper');
let rock = document.getElementById('rock');
let scissors = document.getElementById('scissors');
let box = document.getElementById('challenge');
let userDiv = document.getElementById('yourObject');
let comDiv = document.getElementById('comObject');
let scoreReset = document.getElementById('scoreReset');
let resultNaration = document.getElementById('resultNaration');
const choices = ['paper', 'rock', 'scissors'];

/* COMPUTER CHOICE */
let i = Math.floor(Math.random() * 3);
let computerChoice = choices[i];

/* INITIAL SCORE */
let userPoints = 0;
let comPoints = 0;


/* SET THE SCORE TO BE AUTOMATED WITH JS*/
const score = () => {
    let scoreDiv = document.getElementById('score').innerHTML = `${userPoints} - ${comPoints}`;
}

setInterval(score, 50);

/* SHOW CLICKED BUTTON IN THE PLAYED CIRCLE */


const convert = (word) => {
    if(word === 'paper') return '<li class="playBtn far fa-hand-paper"></li>';
    if(word === 'rock') return '<li class="playBtn far fa-hand-rock"></li>';
    return '<li class="playBtn far fa-hand-scissors"></li>';
    
   
}

/* UPDATE SCORE */
const win = () => {
    userPoints++;
    resultNaration.innerHTML = 'You Win!';
    
}
const draw = () => {
    userPoints++;
    comPoints++;
    resultNaration.innerHTML = 'Draw. Play Again!';
}
const lose = () => {
    comPoints++;
    resultNaration.innerHTML = 'You Lose!';
    
}



/* CLICK FUNCTION */
function game(userChoice) {
    box.style.display = 'inline-flex';
    userDiv.innerHTML = convert(userChoice);
    comDiv.innerHTML = convert(computerChoice);
    if (userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'rock' && computerChoice === 'scissors') {
        win(); 
    } else if (userChoice === computerChoice) {
        draw();
    } else {
        lose();
    }
    setInterval(continueGame, 5000);
    
    function continueGame() {
    i = Math.floor(Math.random() * 3);
    computerChoice = choices[i];
    box.style.display = 'none';
    }
    
    
}

/* RESET SCORE */
scoreReset.addEventListener('click', (e) => {
    userPoints = 0;
    comPoints = 0;
    box.style.display = 'none';
    });