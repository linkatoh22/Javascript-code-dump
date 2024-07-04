// Async/Await = Async = makes a function return a promises
//               Await = makes an async function wait for a promise
//                  
//               Allow you write synchronous code in a synchronous  
//               manner
//               Async doesn't have resolved or reject parmeters
//               Everything after Await is placed in a event queue

//ASYNC FUNCTION DONT RETURN REJECT OR RESOLVE
//WITH ASYNC WE DONT NEED .THEN()

function walkDog(){
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            const dogwalked = true;
            if(dogwalked){
                resolve("You walk the dog")
            }
            else { reject("You didn't walk the dog")}

        }, 1500);
    
    });
}

function cleanKitchen(callback)
{
    return new Promise ((resolve,reject) =>{
        setTimeout(()=>{
            const kitchenCleaned = true;
            if (kitchenCleaned){
            resolve("You clean the kitchen")
            }
            else
                reject("You didn't clean the kitchen");
            
        },2500);

    })
    
}

function takeOutTrash(callback){

    return new Promise ( (resolve,reject)=>{
        setTimeout(()=>{
            const trashTakenOut = false;
            if(trashTakenOut){
            resolve("You take out the trash")
            }
            else
            {
                reject("You didn't take out the trash")
            }
        },500)
    })
}
async function doChores(){
    try{
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);

    console.log("You finished all the chores!");
    }
    catch(error)
    {
        console.error(error);
    }
}
doChores();

//AWAIT ONLY VALID WHEN IN ASYNC FUNCTION