document.addEventListener('DOMContentLoaded', function () {
  const apiKey = '54fcf8a6341230278157524bd285f72a';
  const apiUrlBase = 'https://api.openweathermap.org/data/2.5/forecast';
  const form = document.querySelector('form');
  const input = document.getElementById('input');
  const cityName = document.getElementById('cityName');

  function kelvinToFahrenheit(kelvin) {
      return ((kelvin - 273.15) * 9/5 + 32).toFixed(2);
  }

  form.addEventListener('submit', function (event) {
      event.preventDefault();

      const city = input.value;

      if (city) {
          const apiUrl = `${apiUrlBase}?q=${city}&appid=${apiKey}`;

          fetch(apiUrl)
              .then(response => response.json())
              .then(data => {
                  cityName.textContent = `Weather forecast for ${city}`;

                  // Loop through the forecast data
                  for (let i = 0; i < 5; i++) {
                      const tableId = `day${i + 1}`;
                      const dateId = `date${i + 1}`;
                      const weatherId = `weather${i + 1}`;
                      const temperatureId = `temperature${i + 1}`;

                      const date = data.list[i].dt_txt;
                      const weatherDescription = data.list[i].weather[0].description;
                      const temperatureKelvin = data.list[i].main.temp;
                      
                      // Convert temperature from Kelvin to Fahrenheit
                      const temperatureFahrenheit = kelvinToFahrenheit(temperatureKelvin);

                      // Update the table cells with forecast information
                      document.getElementById(dateId).textContent = date;
                      document.getElementById(weatherId).textContent = weatherDescription;
                      document.getElementById(temperatureId).textContent = `${temperatureFahrenheit}°F`;
                  }
              })
              .catch(error => console.error(`Error fetching data: ${error}`));
      }
  });
});
