let cityInput = document.getElementById("cityInput");
let addInput = document.getElementById("add");
let cityOutput = document.getElementById("cityoutput");
let descOutput = document.getElementById("description");
let tempOutput = document.getElementById("temp");
let windOutput = document.getElementById("wind");
const apiKey = "3045dd712ffe6e702e3245525ac7fa38  ";






async function GetWeather() {



  let weatherResult =await (await fetch(`
  https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}`
  )).json()

  setInfo(weatherResult);

}

function setInfo(data) {
      var cityName = data["name"];
      var description = data["weather"][0]["description"];
      var temp = data["main"]["temp"];
      var wind = data["wind"]["speed"];

      cityOutput.innerHTML = `City : ${cityName}`;
      descOutput.innerHTML = `Description : ${description}`;
      tempOutput.innerHTML = `Temprature : ${convertToCel(temp)}`;
      windOutput.innerHTML = `Wind Speed : ${wind} km/h`;
    }







  function convertToCel(value) {
        return (value - 273).toFixed(0);
      }









// async function GetWeather() {

//       var weatherResult = await (
//         await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
// ${cityInput.value}&appid=${apiKey}`)
//       ).json();

//       setInfo(weatherResult);
//     }

// function setInfo(data) {
//       var cityName = data["name"];
//       var description = data["weather"][0]["description"];
//       var temp = data["main"]["temp"];
//       var wind = data["wind"]["speed"];

//       cityOutput.innerHTML = `City : ${cityName}`;
//       descOutput.innerHTML = `Description : ${description}`;
//       tempOutput.innerHTML = `Temprature : ${convertToCel(temp)}`;
//       windOutput.innerHTML = `Wind Speed : ${wind} km/h`;
//     }

addInput.addEventListener("click", GetWeather);
