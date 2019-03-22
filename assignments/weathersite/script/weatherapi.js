var span = document.getElementById("current-temp");
let weatherRequest = new XMLHttpRequest();
var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=2193c20ec75fcfb06c28f61f81d5bfc1';
weatherRequest.open('GET', apiURLstring);
weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    span.textContent = weatherData.main.temp;
    console.log(weatherData)
}
weatherRequest.send();