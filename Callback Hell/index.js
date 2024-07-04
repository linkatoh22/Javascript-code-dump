// Callback Hell = Situation in JavaScript where callbacks are
//                 nested within other callbacks to the degree
//                  where the code is difficult to read.
//                 Old pattern to handle asynchronous funtions.
//                 Use Promise + async/await to avoid Callback Hell

/* GỠ RA NẾU REVIEW
function task1(){
    setTimeout(() => {
        console.log("Task 1 complete");
    }, 2000);
}

function task2(){
    setTimeout(()=>{
        console.log("Task 2 complete");
    },1000)
}

function task3(){
    setTimeout(()=>{
        console.log("Task 3 complete");
    },3000)
}

function task4(){
    setTimeout(()=>{
        console.log("Task 4 complete");
    },2000)
}

task1();
task2();
task3();
task4();
console.log("All tasks complete");


GỠ RA NẾU REVIEW */


//IN RA: ALL TASKS COMPLETE, TASK2,TASK1,TASK4,TASK3
//NẾU THẬT SỰ CẦN NÓ IN MỘT ORDER TA CẦN LÀM NHƯ DƯỚI SẼ XẢY RA CALLBACK HELL



function task1(Callback){
    setTimeout(() => {
        console.log("Task 1 complete");
        Callback();
    }, 2000);
}

function task2(Callback){
    setTimeout(()=>{
        console.log("Task 2 complete");
        Callback();
    },1000)
}

function task3(Callback){
    setTimeout(()=>{
        console.log("Task 3 complete");
        Callback();
    },3000)
}

function task4(Callback){
    setTimeout(()=>{
        console.log("Task 4 complete");
        Callback();
    },2000)
}

task1(()=>{
    task2( ()=>{
        task3 ( ()=>{
            task4(()=>console.log("All task complete"));
        })
    })
})

//THIS IS CALLBACK HELL