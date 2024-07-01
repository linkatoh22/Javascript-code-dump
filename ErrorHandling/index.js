//Error = An object that is created to represent a problem that occurs
//        Occur often with user input or establishing a connection
// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handleany thrown Errors from try { }
// finally { } =(optional) Always executes. Used mostly for clean up
//              ex. close files, close connection, release resources

/*
try {
    console.log(x);
}
catch (error)
{
    //NETWORK ERRORS
    //PROMISES REJECTION
    //SECURITY ERRORS
    console.error(error);
}
finally{ //RUN WHETHERS THERE IS ERROR OR NOT
    //CLOSE FILES
    //CLOSE CONNECTIONS
    //RELEASE RESOURCES
    console.log("This always Execute");
}
console.log("You have reached the end!");*/1

//SECOND EXAMPLE
try{
    const dividend = Number(window.prompt("Enter a dividend"));
    const dividesor= Number(window.prompt("Enter a dividesor"));
    if(dividesor==0)
        {
            throw new Error("You can't divide by zero");
        }
    if(isNaN(dividend)||isNaN(dividesor))
        {
            throw new Error ("Values must be a number");
        }
    const result = dividend / dividesor; 
    console.log(result);
}
catch (error)
{
    console.error(error);1
}
console.log("You have reached the end! 222");
