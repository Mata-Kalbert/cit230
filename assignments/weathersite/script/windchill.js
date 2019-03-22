

var temp = parseFloat(document.getElementById('one').innerHTML);
var windS = parseFloat(document.getElementById('two').innerHTML);
var windC = windChill(temp, windS);
document.getElementById('output').innerHTML = windC.toFixed(1);


function windChill(tempF, speed){
var compute = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16)
        + 0.4275 * tempF * Math.pow(speed, 0.16);
return compute
}

