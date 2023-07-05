function displayCity(response) {
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
}

function displayTemp(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
}

let apiKey = "45c9off7ae4d90355519f98bt6891ad3";
let query = "london";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayCity);
axios.get(apiUrl).then(displayTemp);
