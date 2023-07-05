function displayTemp(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
}

let apiKey = "45c9off7ae4d90355519f98bt6891ad3";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}=metric`;
axios.get(apiUrl).then(displayTemp);
