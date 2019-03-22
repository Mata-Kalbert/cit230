let fRequest = new XMLHttpRequest();
let apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=2193c20ec75fcfb06c28f61f81d5bfc1';
fRequest.open('GET', apiURL);
fRequest.send();
fRequest.onload =  function () {
    let weatherData = JSON.parse(fRequest.responseText);
    console.log(weatherData);

    let tempForecast = [];
    let dayWeek = [];
    let icon = [];
    let day = 1;
    
    for (let i = 0; i < weatherData.list.length;  i++) {
        if (weatherData.list[i].dt_txt.includes('18:00:00')) {
            let date = new Date(weatherData.list[i].dt * 1000);
            let dayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            let findDate = dayOfWeek[date.getDay()];
            dayWeek.push(findDate);

            tempForecast[day] = weatherData.list[i].main.temp;
            day++;

            let iconCode = weatherData.list[i].weather["0"].icon;
            let iconPath = "https://openweathermap.org/img/w/" + iconCode + ".png";
            icon.push(iconPath);
        }

    }
    for ( let i = 1; i <=5; i++) {
        document.getElementById('temp'+ i).innerHTML = tempForecast[i];
        document.getElementById('day' + i).innerHTML = dayWeek[i - 1];
        document.getElementById('icon' + i).src = icon[i - 1];
    }
}