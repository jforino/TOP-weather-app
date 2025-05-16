const cityNameDivHolder = document.getElementById('city-name'); 
const currentTempHolder = document.getElementById('current-temp'); 
const currentConditions = document.getElementById('current-conditions'); 
const forecastDivContainer = document.getElementById('forecast-div-container'); 

export function insertWeatherData(APICallObject){
    cityNameDivHolder.textContent = `City: ${APICallObject.resolvedAddress}`
    currentTempHolder.textContent = `Current Temp: ${APICallObject.currentConditions.temp}`
    currentConditions.textContent = `Current Conditions: ${APICallObject.currentConditions.conditions}`

    let forecastArray = APICallObject.days; 

    if(forecastDivContainer.childNodes.length < 3){

        for(let i = 1; i < 4; i++){
            let currentForecastDay = forecastArray[i]; 
            console.log(currentForecastDay);

            let forecastDayDiv = document.createElement('div'); 
            let forecastDayList = document.createElement('ul')

            forecastDayDiv.append(forecastDayList); 

            let forecastDayDate = document.createElement('li')
            forecastDayDate.textContent = `Date: ${currentForecastDay.datetime}`; 

            let forecastDayTemp = document.createElement('li'); 
            forecastDayTemp.textContent = `Forecasted Temp: ${currentForecastDay.temp}`

            forecastDayList.append(forecastDayDate, forecastDayTemp);


            forecastDivContainer.append(forecastDayDiv); 

        }
    }

}