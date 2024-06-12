//let age = document.getElementById("input").value ;
let noti= document.getElementById("Result")
let button = document.getElementById("myButton");

button.onclick=function(){
    let age = document.getElementById("input").value ;
    age=Number(age);
    if(age>=20)
        {
            noti.textContent="SUCCESS";
        }
        else if(age<=0)
        {
                noti.textContent="YO MOM";
        }
        else if (age<20)
        {
            noti.textContent="FAILED";
        }
}