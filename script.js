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

function game(){
    let playerPoint = 0;
    let botPoint = 0;

    for (let i = 1; i <= 5; i++) {
        playerSelection = prompt('Round ' + i + '\nBot: ' + botPoint + ' Player: ' + playerPoint +
        '\nRock, paper or scissors: ', '');

        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        if(result == 1){
            playerPoint++;
        }else if(result == 0){
            botPoint++;
        }
    }

    if(playerPoint > botPoint){
        alert('You won! CONGRATULATIONS!' + '\nScoreboard: You: ' + playerPoint + ' Bot: '
        + botPoint);
    }else if(playerPoint < botPoint){
        alert('You lost... \nBetter luck next time' + '\nScoreboard: You: ' + playerPoint + ' Bot: '
        + botPoint);
    }else{
        alert('Draw \nWhat a game!' + '\nScoreboard: You: ' + playerPoint + ' Bot: '
        + botPoint);
    }
}

function playRound(playerSelection, computerSelection){
    
    if (computerSelection == 'Rock'){
        if (playerSelection.toLowerCase() == 'paper'){
            messageResult('win', playerSelection, computerSelection);
            return 1;
        }
        if (playerSelection.toLowerCase() == 'scissors'){
            messageResult('lose', playerSelection, computerSelection);
            return 0;
        }else{
            messageResult('draw', playerSelection, computerSelection);
        }
    }else if (computerSelection == 'Paper'){
        if (playerSelection.toLowerCase() == 'scissors'){
            messageResult('win', playerSelection, computerSelection);
            return 1;
        }
        if (playerSelection.toLowerCase() == 'rock'){
            messageResult('lose', playerSelection, computerSelection);
            return 0;
        }else{
            messageResult('draw', playerSelection, computerSelection);
        }
    }else if (computerSelection == 'Scissors'){
        if (playerSelection.toLowerCase() == 'rock'){
            messageResult('win', playerSelection, computerSelection);
            return 1;
        }
        if (playerSelection.toLowerCase() == 'paper'){
            messageResult('lose', playerSelection, computerSelection);
            return 0;
        }else{
            messageResult('draw', playerSelection, computerSelection);
        }
    }
}

function messageResult(status, playerSelection, computerSelection){

    if (status == 'win')
    {
        console.log("You won! " + playerSelection + " beats " + computerSelection);
    }else if (status == 'lose')
    {
        console.log("You lost! " + computerSelection + " beats " + playerSelection);  
    }else{
        console.log("Draw..."); 
    }

    console.log('Player choice: ' + playerSelection);
    console.log('Computer choice: ' + computerSelection);
}

game();



