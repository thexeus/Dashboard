import { useState, useEffect } from "react";

// Import GIFs
import clearSkyGif from "./assets/clear-sky.gif";
import rainyGif from "./assets/rainy.gif";
import heavyGif from "./assets/heavy-rain.gif";
import thunderstormGif from "./assets/thunderstorm.gif";

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  // GIF Mapping
  const gifs = {
    clear: clearSkyGif,
    rain: rainyGif,
    heavy: heavyGif,
    thunderstorm: thunderstormGif,
  };

  const fetchWeather = async () => {
    try {
      const locationId = 285;
      const currentDate = new Date().toISOString().split("T")[0];

      const url = `https://api.met.gov.my/v2.1/data?datasetid=FORECAST&datacategoryid=GENERAL&locationid=LOCATION:${locationId}&start_date=${currentDate}&end_date=${currentDate}`;

      const response = await fetch(url, {
        headers: {
            Authorization: `METToken ${import.meta.env.VITE_MET_TOKEN}`,

          "User-Agent": "React-Client/1.0",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      localStorage.setItem("weatherData", JSON.stringify(data)); // Save to localStorage
      localStorage.setItem("lastUpdate", new Date().toISOString()); // Save timestamp
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const getWeatherGif = (weather) => {
    if (!weather) return gifs.clear;
    const weatherLower = weather.toLowerCase();

    if (weatherLower === "no rain") return gifs.clear;
    if (weatherLower === "heavy rain") return gifs.heavy;
    if (weatherLower === "thunderstorms") return gifs.thunderstorm;
    if (weatherLower === "rain") return gifs.rain;

    return gifs.clear;
  };

  useEffect(() => {
    // Check if there's stored data in localStorage
    const savedData = localStorage.getItem("weatherData");
    const lastUpdate = localStorage.getItem("lastUpdate");

    if (savedData && lastUpdate) {
      const lastUpdateDate = new Date(lastUpdate);
      const today = new Date();
      
      // If the last update is today, load from localStorage
      if (
        lastUpdateDate.getFullYear() === today.getFullYear() &&
        lastUpdateDate.getMonth() === today.getMonth() &&
        lastUpdateDate.getDate() === today.getDate()
      ) {
        setWeatherData(JSON.parse(savedData));
      } else {
        fetchWeather(); // Fetch new data if outdated
      }
    } else {
      fetchWeather(); // No stored data, fetch new
    }

    // Set interval to update at midnight + 1 min
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(0, 1, 0, 0); // Midnight + 1 min

    let delay = midnight.getTime() - now.getTime();
    if (delay < 0) {
      midnight.setDate(midnight.getDate() + 1); // If midnight already passed, set for next day
      delay = midnight.getTime() - now.getTime();
    }

    const timer = setTimeout(() => {
      fetchWeather();
    }, delay);

    return () => clearTimeout(timer); // Cleanup timer when unmounting
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!weatherData) return <div>Loading weather data...</div>;

  const results = weatherData.results || [];
  if (results.length === 0) return <div>No weather data available.</div>;

  const location = results[0].locationname;
  const region = results[0].locationrootname;

  let weatherSummary = { Morning: "Unknown", Afternoon: "Unknown", Night: "Unknown" };
  let temperature = { Max: "N/A", Min: "N/A" };
  let significantWeather = null;

  results.forEach((result) => {
    const { datatype, value, attributes } = result;
    if (datatype === "FGM") weatherSummary.Morning = value || "Unknown";
    if (datatype === "FGA") weatherSummary.Afternoon = value || "Unknown";
    if (datatype === "FGN") weatherSummary.Night = value || "Unknown";
    if (datatype === "FMAXT") temperature.Max = value ? `${value}°C` : "N/A";
    if (datatype === "FMINT") temperature.Min = value ? `${value}°C` : "N/A";
    if (datatype === "FSIGW") significantWeather = value ? `${value} (${attributes?.when || "N/A"})` : null;
  });

  return (
    <div className="weather-widget">
      
      <div className="weather-summary">
        <div className="morning-weather">
          <h4>{weatherSummary.Morning}</h4>
          <img src={getWeatherGif(weatherSummary.Morning)} alt="Morning Weather" width="200px" />
          <h4 className="time">Morning</h4>
        </div>
        <div className="afternoon-weather">
          <h4>{weatherSummary.Afternoon}</h4>
          <img src={getWeatherGif(weatherSummary.Afternoon)} alt="Afternoon Weather" width="200px" />
          <h4 className="time">Afternoon</h4>
        </div>
        <div className="night-weather">
          <h4>{weatherSummary.Night}</h4>
          <img src={getWeatherGif(weatherSummary.Night)} alt="Night Weather" width="200px" />
          <h4 className="time">Night</h4>
        </div>
      </div>
    </div>
  );
}

export default Weather;
