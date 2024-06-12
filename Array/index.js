let fruits = ["apple", "orange", "banana"];

fruits [3] = "coconut";


fruits.push("coconut"); //PUSH to the last elements
fruits.pop(); // REMOVE last elements


fruits.unshift("mango"); //ADD mango to the first pos
fruits.shift(); //REMOVE first elements


for (let i=0;i<fruits.length;i++)
    {
        console.log(fruits[i]);
    }


let index = fruits.indexOf("apple"); //SEARCH for apple index;
//IF return -1 elements does not exists

//OTHER WAY TO PRINT THE FRUITS
for (let x of fruits)
    {
        console.log(x);
    }

//SORT ARRAY
//SORT ASCENDING
fruits.sort();
//SORT REVERSE
fruits.sort().reverse();