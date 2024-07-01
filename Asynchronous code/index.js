//synchronous = Executes line by line consecutively in a sequential manner
//              Coode that waits for an operattion to complete
//asyynchronous = Allows multiple operation to be performed concurrently without waiting
//              Doesnt't block the execution flow and allows the program to continue
//              (I/O operation, network requests, fetching data)
//              Handled with:  Callbacks, Promises, Async/Await;

//ASYNCHRONOUS THEY DO WHATEVER THEY WANT
setTimeout(()=>console.log("Task 1"),3000);
//THIS IS SYNCHRONOUS THEY DO WHATEVER THEY TELL TO DO
console.log("Task 2");
console.log("Task 3");
console.log("Task 4");


//SECOND EXAMPLE: ASYNCHRONOUS FUNCTION CALLBACK
function func1(callback)
{
    setTimeout( ()=> {console.log("Task 1");
                        callback()},3000 );
}

function func2()
{
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

func1(func2);