function refreshWeather(response) {
  let valueElement = document.querySelector("#value");

  valueElement.innerHTML = Math.round(value);
}

function searchCity(city) {
  // make api call and update the interface
  let apiKey = "a6fa43b1789f324t7dff7bf43co046f3";
  let apiURL =
    "https://api.shecodes.io/weather/v1/current?query=${city}&key=${api}";
  axios.get(apiURL).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
