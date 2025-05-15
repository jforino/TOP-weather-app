export function grabUserCitySearchInput(){

    return new Promise((resolve) => {

    let userInputField = document.getElementById('user-input-field'); 
    let userFormField = document.getElementById('user-search-input-form'); 
        
    const handleSubmit = (e) => {
        e.preventDefault(); 

        const input = userInputField.value;
        resolve(input); 

    }
   
    userFormField.addEventListener('submit', handleSubmit); 
    });
}