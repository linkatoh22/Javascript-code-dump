const myCheckBox = document.getElementById("myCheckBox");
const visaBtn=document.getElementById("visaBtn");
const masterCardBtn=document.getElementById("masterCardBtn");
const payPalBtn=document.getElementById("payPalBtn");

const submitBtn=document.getElementById("mySubmit");

const subResult=document.getElementById("subResult");
const paymentResult=document.getElementById("paymentResult");

submitBtn.onclick=function(){
    console.log("RUN HERE");
    if(myCheckBox.checked)
        {
            subResult.textContent="You've subscribed !";
        }
        else
        {
            subResult.textContent="You did not subscribed!";
        }
    if(visaBtn.checked)
    {
        paymentResult.textContent="You are paying with visa";
    }
    else if (masterCardBtn.checked)
        {
            paymentResult.textContent="You are paying with MasterCard";
        }
    else if (payPalBtn.checked)
        {
            paymentResult.textContent="You are paying with PayPal";
        }
}