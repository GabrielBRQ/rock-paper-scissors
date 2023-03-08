const container = document.querySelector('#container');
const title = document.querySelector('#title');
const buttonDiv = document.querySelector('#buttons');
const text = document.querySelector('#text');
const options = document.querySelectorAll('button');
const scoreboard = document.createElement('p');
const h1 = document.createElement('h1');
const playAgain = document.createElement('button');
const rockIcon = document.createElement('img');
const paperIcon = document.createElement('img');
const scissorsIcon = document.createElement('img');
let playerPoint = 0;
let botPoint = 0;
// it will be to verify rounds
let i = 0;


rockIcon.src = 'images/rock-icon.png';
paperIcon.src = 'images/paper-icon.png';
scissorsIcon.src = 'images/scissors-freepik.png';

h1.setAttribute('style', 'color: #e5e7eb; font-size: 60px; font-family: "Roboto";');
scoreboard.setAttribute('style', 'color: #e5e7eb; font-size: 40px; font-family: "Roboto";');
playAgain.setAttribute('style',
'background-color: rgb(13, 17, 23); border: 2px solid #797979; border-radius: 8px; color: #e5e7eb; font-size: 40px; font-family: "Roboto";')
rockIcon.setAttribute('style', 'width: 125px; height: 125px;');
paperIcon.setAttribute('style', 'width: 125px; height: 125px;');
scissorsIcon.setAttribute('style', 'width: 125px; height: 125px;');

function getComputerChoice(){
    let cpuChoice = Math.floor(Math.random() * 3) + 1;
    if (cpuChoice == 2){
        return 'Rock';
    }else if (cpuChoice == 3){
        return 'Paper';
    }else{
        return 'Scissors';
    }
}

options.forEach((button) => {
    var playerSelection = '';
    //for each one we add a 'click' listener
    button.addEventListener('click', () => {
    if(button.id == 'rock'){
        playerSelection = 'Rock';
        computerSelection = getComputerChoice(); 
        playRound(playerSelection, computerSelection);            
    }
    else if (button.id == 'paper'){
        playerSelection = 'Paper';
        computerSelection = getComputerChoice(); 
        playRound(playerSelection, computerSelection);
    }else{
        playerSelection = 'Scissors';
        computerSelection = getComputerChoice(); 
         playRound(playerSelection, computerSelection);
    }     
    });
});


function playRound(playerSelection, computerSelection){
    //verify all possibilities
    if (computerSelection == 'Rock'){
        if (playerSelection.toLowerCase() == 'paper'){
            playerPoint++;
            messageResult('win', playerSelection, computerSelection);
            h1.appendChild(paperIcon); 
        }
        else if (playerSelection.toLowerCase() == 'scissors'){
            botPoint++;
            messageResult('lose', playerSelection, computerSelection);   
            h1.appendChild(scissorsIcon);
        }else{
            messageResult('draw', playerSelection, computerSelection);
            h1.appendChild(rockIcon);
        }
        h1.appendChild(rockIcon);

    }else if (computerSelection == 'Paper'){
        if (playerSelection.toLowerCase() == 'scissors'){
            playerPoint++;
            messageResult('win', playerSelection, computerSelection);
            h1.appendChild(scissorsIcon);
        }
        else if (playerSelection.toLowerCase() == 'rock'){
            botPoint++;
            messageResult('lose', playerSelection, computerSelection);
            h1.appendChild(rockIcon);
        }else{   
            messageResult('draw', playerSelection, computerSelection);
            h1.appendChild(paperIcon);
        }
        h1.appendChild(paperIcon);
    }else if (computerSelection == 'Scissors'){
        if (playerSelection.toLowerCase() == 'rock'){
            playerPoint++;
            messageResult('win', playerSelection, computerSelection);  
            h1.appendChild(rockIcon); 
        }
        else if (playerSelection.toLowerCase() == 'paper'){
            botPoint++;
            messageResult('lose', playerSelection, computerSelection); 
            h1.appendChild(paperIcon);
            h1.appendChild(scissorsIcon);    
        }else{
            messageResult('draw', playerSelection, computerSelection);
            h1.appendChild(scissorsIcon);
        }
        h1.appendChild(scissorsIcon);
    }
}

function messageResult(status, playerSelection, computerSelection){
    if (status == 'win')
    {
        h1.textContent = "You won! " + playerSelection + " beats " + computerSelection;   
    }else if (status == 'lose')
    {
        h1.textContent ="You lost! " + computerSelection + " beats " + playerSelection;  
    }else{
        h1.textContent = "Draw...";       
    }
    container.appendChild(h1);
    scoreboard.textContent = 'You: ' + playerPoint + ' Bot: ' + botPoint; 
    //Check if is the first round
    if(i == 0){
        container.removeChild(title);
    }
    i++;
    if(playerPoint >= 5){
        h1.textContent = ('You won, CONGRATULATIONS!');
        endGame();
    } else if (botPoint >= 5){
        h1.textContent = ('You lost... \n Better luck next time.');
        endGame();
    }
    h1.appendChild(scoreboard);
}

function endGame(){
    //remove buttons and finish the game
    buttonDiv.removeChild(options[0]);
    buttonDiv.removeChild(options[1]);
    buttonDiv.removeChild(options[2]);

    playAgain.innerText = 'Play Again';
    buttonDiv.appendChild(playAgain);

    text.textContent = 'Thank you for playing!';
    playAgain.addEventListener('click', () => {
        window.location.reload();
    });
};