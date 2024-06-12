//while loop = repeat some code WHILE some condition is true
//REPEAT TILL IT NOT TRUE

/*
let username = "";

while (username === "" || username === null )
    {
        window.prompt("Enter user name: ");
    }
console.log(`Hello ${username}`);*/

let loggedIn= false;
let userName="";
let password="";

while (!loggedIn)
    {
        username = window.prompt ("Enter your username: ");
        password = window.prompt ("Enter your password: ");
        if(username !="" && password !="")
            {
                loggedIn=true;
                console.log("Logged in");
            }
        else
        {
            console.log("Invalid credentials! Please try again");
        }
    }
