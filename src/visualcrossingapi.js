const KEY = 'HYRSNDF6DRN3Q2TDZJZQT3NPE';
let APICallResultsObject; 

export async function callVisualCrossingAPI(cityName){

    const loadingDiv = document.getElementById('loading-div');

    const API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=us&key=${KEY}&contentType=json`
    let APICall = await fetch(`${API_URL}`, {mode:'cors'});
    APICallResultsObject = APICall.json();


    loadingDiv.style.display = 'none'; 
    return APICallResultsObject; 

   
}
