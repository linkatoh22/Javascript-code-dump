let numberMain=0;

document.getElementById("decreaseButton").onclick=function()
{
    numberMain-=1;
    document.getElementById("countLabel").textContent=numberMain;
}
document.getElementById("increaseButton").onclick=function()
{
    numberMain+=1;
    document.getElementById("countLabel").textContent=numberMain;
}
document.getElementById("resetButton").onclick=function()
{
    numberMain=0;
    document.getElementById("countLabel").textContent=numberMain;
}
