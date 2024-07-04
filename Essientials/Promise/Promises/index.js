//Promises = An Object that manages asynchronous operation.
//           Wrap a Promises Object around {asynchronous code}
//           "I promises to return a value"
//           PENDING -> RESOLVED or REJECTED
//           new Promises ((resolve, reject) => {asynchronous code})

//DO THESE CHORES IN ORDER

// 1. WALK THE DOG
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
// 2. CLEAN THE KITCHEN
function cleanKitchen(callback)
{
    return new Promise ((resolve,reject) =>{
        setTimeout(()=>{
            const kitchenCleaned = false;
            if (kitchenCleaned){
            resolve("You clean the kitchen")
            }
            else
                reject("You didn't clean the kitchen");
            
        },2500);

    })
    
}
// 3. TAKE OUT THE TRASH
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

walkDog().then(value =>{console.log(value); return cleanKitchen()})
        .then(value =>{console.log(value); return takeOutTrash()})
        .then(value =>{console.log(value); console.log("YOU FINISHED ALL THE CHORES")})
        .catch(error =>console.error(error)); //CATCH WILL CATCH ANY REJECT

