
const toFahrenheit=document.getElementById("toFahrenheit");
const toCelsius=document.getElementById("toCelsius");

let subResult=document.getElementById("result");


function ButtonClick ()
{
    let number = document.getElementById("textBox").value;
    number=Number(number);
    if(toFahrenheit.checked){
        subResult.textContent=`${(number*9/5+32).toFixed(1)} °F`;
    }
    else if (toCelsius.checked)
    {
        subResult.textContent=`${((number-32) * (5/9)).toFixed(1)} ° C`;
    }
    else
    {
        subResult.textContent="Select a unit";
    }
    
}

