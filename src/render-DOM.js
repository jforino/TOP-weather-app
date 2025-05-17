import { parse, format } from 'date-fns'; 

const cityNameDivHolder = document.getElementById('city-name'); 
const currentTempHolder = document.getElementById('current-temp'); 
const currentConditions = document.getElementById('current-conditions'); 
const forecastDivContainer = document.getElementById('forecast-div-container'); 
const feelsLikeContainer = document.getElementById('feels-like');
const todaysDateContainer = document.getElementById('todays-date'); 
const conditionsImage = document.getElementById('conditions-image'); 
const weatherDescriptionContainer = document.getElementById('weather-description'); 

export function insertWeatherData(APICallObject){
    cityNameDivHolder.textContent = `City: ${APICallObject.resolvedAddress}`
    todaysDateContainer.textContent = `Today's Date: ${format(new Date(APICallObject.days[0].datetime), "EEEE, MM-dd-yyyy")}`
    currentTempHolder.textContent = `Current Temp: ${APICallObject.currentConditions.temp}° F`
    feelsLikeContainer.textContent = `Feels Like: ${APICallObject.currentConditions.feelslike}° F`;
    currentConditions.textContent = `Current Conditions: ${APICallObject.currentConditions.conditions}`
    weatherDescriptionContainer.textContent = `${APICallObject.description}`; 
    
    conditionsImage.src = `/images/${APICallObject.currentConditions.icon}.svg`
    conditionsImage.onload = () => {
        conditionsImage.style.visibility = 'visible'; 
    };



    let forecastArray = APICallObject.days; 

    if(forecastDivContainer.childNodes.length < 3){

        for(let i = 1; i < 4; i++){
            let currentForecastDay = forecastArray[i]; 
            console.log(currentForecastDay);

            let forecastDayDiv = document.createElement('div'); 
            let forecastDayList = document.createElement('ul')

            forecastDayDiv.append(forecastDayList); 

            let forecastDayDate = document.createElement('li')
            let formattedDate = format(new Date(currentForecastDay.datetime), "EEEE, MM-dd-yyyy");
            
            forecastDayDate.textContent = `${formattedDate}`; 

            let forecastDayTemp = document.createElement('li'); 
            forecastDayTemp.textContent = `Forecasted Temp: ${currentForecastDay.temp}° F`

            let forecastConditionsImg = document.createElement('img'); 
            forecastConditionsImg.src = `/images/${currentForecastDay.icon}.svg`
            forecastConditionsImg.height = 50
            forecastConditionsImg.widows = 50

            forecastDayList.append(forecastDayDate, forecastDayTemp, forecastConditionsImg);


            forecastDivContainer.append(forecastDayDiv); 

        }
    }

}