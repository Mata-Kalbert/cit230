let weatherRequest = new XMLHttpRequest();
var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?zip=84770&units=imperial&APPID=2193c20ec75fcfb06c28f61f81d5bfc1';
weatherRequest.open('GET', apiURLstring);
weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);


    var span = document.getElementById("current");
    span.textContent = weatherData.weather[0].description;
    var spanTwo = document.getElementById("high");
    spanTwo.textContent = weatherData.main.temp_max;
    var spanThree = document.getElementById("humidity");
    spanThree.textContent = weatherData.main.humidity;
    var spanfour = document.getElementById("speed");
    spanfour.textContent = weatherData.wind.speed;

    var temp = weatherData.main.temp;
    var speed = parseFloat(document.getElementById("speed").innerHTML);
    var compute = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16)
        + 0.4275 * temp * Math.pow(speed, 0.16);

    document.getElementById("output").innerHTML = compute.toFixed(1);
    


}

weatherRequest.send();