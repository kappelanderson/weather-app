
let h1 = document.querySelector('h1')
let p = document.querySelector('p')

let searchWeather = async (location)=>{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=ac3bf0309e3d0a4cea7658833fe83344`, {mode: 'cors'});
    response.json().then(function(response) {
         
      h1.innerText = `City: ${location}`
      p.innerText = `Weather: ${(response.main.temp - 273).toFixed(2)}°C` 
})
}