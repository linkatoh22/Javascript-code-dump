// fetch = function used for making HTTP requests to fetch 
//         resources. (JSON styles,data,images,files)
//         Simplifies asynchronous data fetching in Javascript and
//         used for interacting with APIs to retrieve and send
//         data asynchronously over the web.
//         fetch (url, {options})
/*

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response =>{ 
        if (!response.ok){
        throw new Error("Could not fetch resources")
        }
        
        return response.json();
    })
    .then(data => console.log(data.id))
    .catch(error => console.error(error));

*/

/*
fetchData();
async function fetchData()
{
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

        if (!response.ok)
        {
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.error(error);
    }
}*/

async function fetchData()
{
    try{
        const findPokemon =  document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${findPokemon}`);
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        
        const pokemonPic = data.sprites.front_default;
        const picturePokemon = document.getElementById("pokemonSprite");
        picturePokemon.src=pokemonPic;
        picturePokemon.style.display="block";

    }
    catch(error){
        console.error(error);
    }
}

