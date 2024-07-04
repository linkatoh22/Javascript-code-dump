const choices =["Rock","Paper","Scissors"];
const computerDisplay = document.getElementById("computerDisplay");
const playerDisplay = document.getElementById("playerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playgame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result=""
    if(playerChoice===computerChoice)
        {
            result="IT'S A TIE!"
        }
    else
    {
        switch(playerChoice)
        {
            case "Rock":
                result = (computerChoice==="Scissors") ? "YOU WIN!": "YOU LOSE!";
                break;
            case "Paper":
                result = (computerChoice === "Rock") ? "YOU WIN!": "YOU LOSE!";
                break;
            case "Scissors":
                result = (computerChoice === "Paper") ? "YOU WIN!":
                "YOU LOSE!";
                break;
        }
    }
    playerDisplay.textContent= `PLAYER: ${playerChoice}`;
    computerDisplay.textContent= `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    
    switch (result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            console.log(computerScore);
            break;
        
        case "IT'S A TIE!":
            if(resultDisplay.classList.contains("greenText"))
                    resultDisplay.classList.remove("greenText");
            else (resultDisplay.classList.contains("redText"))
                    resultDisplay.classList.remove("redText");
            
            break;
    }
}