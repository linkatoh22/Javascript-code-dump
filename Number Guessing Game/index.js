
//RANDOM NUMBER
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;


//GUESS
let attemps = 0;
let guess;
let running = true ; 

while (running)
    {
        guess= window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
        guess=Number(guess);
        if(isNaN(guess))
            {
                window.alert("Please enter a valid number");
            }
        else if (guess < minNum || guess > maxNum)
            {
                window.alert("Out of range");
            }
        else {
            console.log("RUN HERE");
            attemps++;
            if(guess<answer)
                {
                    window.alert ("Lower than the answer! Try again");
                }
            else if (guess> answer)
                {
                    window.alert ("Higher than the answer! Try again");
                }
            else
            {
                window.alert(`Correct! The answer was ${guess}. It took you ${attemps} attemps`);
                running=false;
            }
        }
    }