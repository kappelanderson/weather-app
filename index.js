
let weather_dom = document.querySelector('#weather')
let city_dom = document.querySelector('#city')
let currentDate_dom = document.querySelector('#currentDate')
let grade_dom = document.querySelector('#grade')
let search_dom = document.querySelector('input')
let feelslike_dom = document.querySelector('.feelslike').querySelector('.info_value')
let humidity_dom = document.querySelector('.humidity').querySelector('.info_value')
let windspeed_dom = document.querySelector('.windspeed').querySelector('.info_value')




let searchWeather = async ()=>{
    let location = search_dom.value
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=ac3bf0309e3d0a4cea7658833fe83344`, {mode: 'cors'});
    response.json().then(function(response) {
      weather_dom.innerText = response.weather[0].description.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
      city_dom.innerText = location
      currentDate_dom.innerText = new Date()
      grade_dom.innerText = `${((response.main.temp - 273.15)*9/5 + 32).toFixed(2)}°F`
      feelslike_dom.innerText = `${((response.main.feels_like - 273.15)*9/5 + 32).toFixed(2)}°F`
      humidity_dom.innerText = `${response.main.humidity}%`
      windspeed_dom.innerText = `${response.wind.speed}m/s`


})
}

document.querySelector('button').addEventListener('click', ()=>{
  if(search_dom.value != ''){
  searchWeather()}
})

/*      <div class="info">
<div class="img">
<img src="Feelslike" alt="">
</div>
<div class="info_text">
<p class="info_title">Feels Like</p>
<p class="info_value">18°</p>
</div>
<div class="info">
<div class="img">
    <img src="Humidity" alt="">
</div>
<div class="info_text">
    <p class="info_title">Humidity</p>
    <p class="info_value">98%</p>
</div>
</div>
<div class="info">
<div class="img">
    <img src="chanceofrain" alt="">
</div>
<div class="info_text">
    <p class="info_title">Chance of Rain</p>
    <p class="info_value">78%</p>
</div>
</div>
<div class="info">
<div class="img">
    <img src="windspeed" alt="">
</div>
<div class="info_text">
    <p class="info_title">Wind Speed</p>
    <p class="info_value">11mph</p>
</div>
</div> */