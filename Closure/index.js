//closure = A function defined inside of another function,
//          the inner function has access to the variables
//          and scope of the outer function.
//          Allow for private variables and state maintenance
//          Used frequently in JS frameworks: React,Vue,Angular

function outer()
{
    let message="Hello";
    function inner()
    {
        console.log(message);
    }
    inner();
}
outer(); //Hello

//SECOND EXAMPLE

function createCounter()
{
    let count = 0;
    function incremental(){
        count ++;
        console.log(`Count increased to ${count}`);
    }

    function getCount()
    {
        return count;
    }
    return {incremental,getCount};
}

const counter = createCounter();

counter.incremental();
counter.incremental();
counter.incremental();

console.log(`The current count is ${counter.getCount()}`); //3


//THIRD EXAMPLE
function CounterScore(){
    let score = 0;
    function increasedScore(points)
    {
        score += points;
        console.log(`+${points}pts`)
    }

    function decreasedScore(points)
    {
        score -= points;
        console.log(`-${points}pts`)
    }
    function getScore()
    {
        return score;
    }
    return {increasedScore,decreasedScore,getScore};
}

const counterScore = CounterScore();
counterScore.increasedScore(5);
counterScore.decreasedScore(2);
console.log(`The current scrore is ${counterScore.getScore()}`);
