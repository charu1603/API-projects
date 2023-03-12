const button = document.querySelector('button');

button.addEventListener('click', ()=>{
    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition( onSuccess, onError);
    }else{
        button.innerText = "Your browser not support";
    }
});

function onSuccess(position){
let {latitude, longitude} = position.coords;


fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=a8fd6368344241d6ad824e4eb848ff52`)
.then(response => response.json()).then(result => {
let allDetails = result.results[0].components;
let{county, postcode, country} = allDetails;
button.innerText = `${county}, ${postcode}, ${country}`;
console.table(allDetails);
}).catch(()=>{
    button.innerText = "something went wrong";

})
}

function onError(error){
   if(error.code == 1){
    button.innerText = "You denied the request";
   }
   else if(error.code == 2){
    button.innerText = "Location is not available";
   }else{
    button.innerText = "Something went wrong";
   }
   button.setAttribute('disabled' , 'true');
}