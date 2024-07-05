const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");

const apiKey="8f3290be40bc8d4e408728de0967fdce";

weatherForm.addEventListener("submit", async event=>{
    event.preventDefault();// PREVENT REFRESH THE PAGE
    
    const city = cityInput.value ;
    
    if(city){
        try {
            
            const weatherData = await getWeatherData(city);
            //console.log(weatherData);
            displayWeatherInfo(weatherData);
            
        }
        catch(error)
        {
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("Please enter a city");
    }
});

async function getWeatherData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    let response = await fetch (apiUrl);
    if(!response.ok){
        console.error("Unvalid city");
        displayError("Unvalid city");
    }
    else{
        
        
        return await response.json();
        
    }
}

function displayWeatherInfo(data){
    
    const {name:city,
           main :{temp,humidity},
           weather: [{description,id}] } = data;
    card.textContent="";
    card.style.display="flex";
    
    const displayCity = document.createElement("p");
    const displayTemp = document.createElement("p");
    const displayHumid = document.createElement("p");
    const displayDescription = document.createElement("p");
    const displayIcon = document.createElement("p");

    displayCity.textContent = city;
    displayTemp.textContent=`${(temp-273.15).toFixed(1)}°C`;
    displayHumid.textContent=`Humidity: ${humidity}%`;
    displayDescription.textContent=description;
    displayIcon.textContent=getWeatherEmoji(id);

    displayCity.classList="cityDisplay";
    displayTemp.classList="tempDisplay";
    displayHumid.classList="humidityDisplay";
    displayDescription.classList="descDisplay";
    displayIcon.classList="weatherEmoji";

    card.appendChild(displayCity);
    card.appendChild(displayTemp);
    card.appendChild(displayHumid);
    card.appendChild(displayDescription);
    card.appendChild(displayIcon);
}

function getWeatherEmoji(weatherId){
    switch(true)
    {
        case(weatherId>=200 && weatherId<300):
            return "🌩️";
        case(weatherId>=300 && weatherId<400):
            return "🌧️";
        case(weatherId>=500 && weatherId<600):
            return "🌧️";
        case(weatherId>=600 && weatherId<700):
            return "🌨️";
        case(weatherId>=700 && weatherId<800):
            return "☁️";
        case(weatherId === 800):
            return "☀️";
        case(weatherId >= 801 && weatherId < 810):
            return "🌤️";
        default:
            return "❓";
        
        
    }
}

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent=message;
    errorDisplay.classList="errorDisplay";
    card.style.display="flex";
    card.appendChild(errorDisplay);
}