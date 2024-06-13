function rollDice(){
    const numOfDice = document.getElementById("myInput").value;
    const diceResult = document.getElementById("diceResults");
    const diceImages = document.getElementById("diceImages");
    const values= [];
    const images = [];
    for(let i = 0; i < numOfDice; i++)
        {
            const value = Math.floor(Math.random() * 6) + 1;
            //values[i]=value;
            values.push(value);
            images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`);
        }
    console.log(values);
    diceResult.textContent=`Dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}