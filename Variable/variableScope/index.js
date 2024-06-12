// VARIABLE SCOPE =  WHERE A VARIABLE IS RECOGNIZED AND
//                  ACCESSIBLE (LOCAL VS GLOBAL)
//GLOBAL : EVERYONE CAN ACCESS
//LOCAL : ONLY AVAILABLE IN SOME SCOPE IF DECLARE IN IT
let x = 3; //global
function function1 ()
{
    let x = 1; //local 
    console.log(x); //PRINT LOCAL FUNCTION
}

function fucntion2 ()
{
    console.log (x); //PRINT GLOBAL FUNCTION
}

function1();
fucntion2();