function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
  
    let temperature = response.data.temperature.current;
    
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
  }
  
  function searchCity(city) {
    const apiKey = "20ac4e1fof3t6e4bfd071a3613757bcc";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(refreshWeather);
  }
  
  function handleSearchSubmit(event) {
    event.preventDefault(); 
    let searchInput = document.querySelector("#search-form-input");
    searchCity(searchInput.value);
  }
  
  let form = document.querySelector("#search-form");
  form.addEventListener("submit", handleSearchSubmit);

  searchCity("Perth")
