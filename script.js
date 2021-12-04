let computerScore = 0;
let playerScore = 0;


function computerPlay() {
    let computerSelection = Math.floor(Math.random()*3);
    return computerSelection;
}

function playerPlay() {
    let playerSelection = numberizeInput(String(prompt("Rock, paper or scissors?")));
    return playerSelection;
}
 


function game() {
    for (let i = 0; i <= 5; i++) {
        playRound();
    }

    if (playerScore > computerScore) {
        console.log("You won!")
    } else {
        console.log("You were defeated!")
    }
}


function playRound() {

    let pNumber = playerPlay();
    let cNumber = computerPlay();

    let result = pNumber - cNumber;
    if (result<0) {result +=3};
    let playerText = toString(pNumber);
    let computerText = toString(cNumber);

    let resultSentence;
    switch(result) {
        case 0:
            resultSentence = `It's a tie! You both chose ${playerText}!`
            break;
        case 1:
            resultSentence = `You win! ${playerText} beats ${computerText}!`
            playerScore ++;
            break;
        case 2:
            resultSentence = `You lose! ${computerText} beats ${playerText}!`
            computerScore ++;
            break;

    }

    console.log(resultSentence);
    console.log("Your score: " + playerScore)
    console.log("Computer's score: " + computerScore)
    return resultSentence;
}




function toString(number) {
    let sText =
    (number===0) ? "Rock" :
    (number===1) ? "Paper" :
    "Scissors";
    return sText;
}

function numberizeInput(input) {
    let parsedInput = input.toLowerCase();
    let number = (parsedInput==="rock") ? 0 : (input==="paper") ? 1 : 2;
    return number;
}


