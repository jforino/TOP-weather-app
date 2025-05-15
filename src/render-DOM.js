const cityNameDivHolder = document.getElementById('city-name'); 
const currentTempHolder = document.getElementById('current-temp'); 
const currentConditions = document.getElementById('current-conditions'); 

export function insertWeatherData(APICallObject){
    cityNameDivHolder.textContent = `City: ${APICallObject.resolvedAddress}`
    currentTempHolder.textContent = `Current Temp: ${APICallObject.currentConditions.temp}`
    currentConditions.textContent = `Current Conditions: ${APICallObject.currentConditions.conditions}`

}