
const fruits = [{name:"apple",color:"red",calories:95},
    {name:"pineapple",color:"yellow",calories:105},
    {name:"banana",color :"yellow",calories:123},
    {name:"coconut",color:"white",calories:95},
    {name:"orange",color:"orange",calories:45}
];


const maxFruits = fruits.reduce ( (max,fruit)=>
     max.calories < fruit.calories ? 
        fruit : max );

const minFruits = fruits.reduce( (min,fruit)=>
    min.calories<fruit.calories? 
    min:fruit);
console.log(maxFruits);
console.log("Min");
console.log(minFruits);