let is_loading = false;
let error_message = "";
let weather_data = null;

const output = document.getElementById("weather-output");

function renderWeather() {
  output.innerHTML = "";

  if (is_loading) {
    output.innerHTML = "<p>Loading...</p>";
    return;
  }

  if (error_message) {
    output.innerHTML = `<p style="color:red;">${error_message}</p>`;
    return;
  }

  if (weather_data) {
    const period = weather_data.properties.periods[0];

    output.innerHTML = `
      <h2>${period.temperature}°</h2>
      <p>${period.shortForecast}</p>
    `;
    return;
  }

  output.innerHTML = "<p>Weather data not available.</p>";
}

async function getWeatherData() {
  is_loading = true;
  error_message = "";
  renderWeather();

  try {
    const response = await fetch(
      "https://api.weather.gov/gridpoints/MSO/105,131/forecast",
    );

    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const data = await response.json();
    weather_data = data;
  } catch (error) {
    error_message = error.message;
  } finally {
    is_loading = false;
    renderWeather();
  }
}

getWeatherData();
