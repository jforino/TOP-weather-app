const cityNameDivHolder = document.getElementById('city-name'); 
const currentTempHolder = document.getElementById('current-temp'); 
const currentConditions = document.getElementById('current-conditions'); 
const forecastDivContainer = document.getElementById('forecast-div-container'); 

export function insertWeatherData(APICallObject){
    cityNameDivHolder.textContent = `City: ${APICallObject.resolvedAddress}`
    currentTempHolder.textContent = `Current Temp: ${APICallObject.currentConditions.temp}`
    currentConditions.textContent = `Current Conditions: ${APICallObject.currentConditions.conditions}`

    let forecastArray = APICallObject.days; 

    for(let i = 1; i < 4; i++){
        let currentForecastDay = forecastArray[i]; 
        console.log(currentForecastDay);


    }

    console.log(forecastArray); 

}