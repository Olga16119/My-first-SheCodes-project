function search(event) {
  event.preventDefault();
  axios.get(apiUrl).then(displayTemperature);
}

let searchForm = document.querySelector("form");
searchForm.addEventListener("submit", search);

let searchInput = document.querySelector(".search-input");
let city = document.querySelector(".current-city");
city.innerHTML = `${searchInput.value}`;

let apiKey = "ef0t819co4fbb2a23ffa030681b76557";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

function displayTemperature(responce) {
  city = responce.data.city;
  console.log(responce);
  let temperature = document.querySelector(".current-temperature-value");
  temperature = responce.data.temperature.current;
}
