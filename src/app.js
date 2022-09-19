function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let description = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  cityElement.innerHTML = response.data.name;
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  description.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "6782253072f7d90462731a624097fc54";
let units = "imperial";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Omaha&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(displayTemperature);
