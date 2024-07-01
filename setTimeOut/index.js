

/*
const timeoutId = setTimeout(function(){window.alert("Hello")},3000);

clearTimeout(timeoutId);

setTimeout(()=>window.alert("Hello"),3000);*/
let timeoutId;
function startTimer()
{
    timeoutId=setTimeout(()=>window.alert("Hello"),3000);
    console.log("STARTER");
}

function clearTimer()
{
    clearTimeout(timeoutId);
    console.log("STOPPER");
}