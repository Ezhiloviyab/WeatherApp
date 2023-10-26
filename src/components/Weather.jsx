import React, { useState, useEffect } from "react";
import DisplayWeather from "./DisplayWeather";
import "./weather.css";
// import sunnyBackground from "./sunny.jpeg";
// import rainyBackground from "./rain.jpeg";
// import cloudyBackground from "./cloud.jpeg";
// import hazeBackground from "./haze.jpeg";


function Weather() {
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: "Chennai",
    country: "IN",
  });

  const APIKEY = "1a20153b9bd39f3252ca6cbad2294d1f";

  useEffect(() => {
    fetchWeatherData();
  }, []);

  async function fetchWeatherData() {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
    )
      .then((res) => res.json())
      .then((data) => data);

    setWeather({ data: data });
  }

  async function weatherData(e) {
    e.preventDefault();
    if (form.city === "") {
      alert("Add values");
    } else {
      fetchWeatherData();
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setForm({ ...form, city: value });
    }
    if (name === "country") {
      setForm({ ...form, country: value });
    }
  }

  return (
    <div className={`weather ${getBackgroundClass(weather.data)}`}>
      <span className="title">Today weather</span>
      <br />
      <form>
        <input
          type="text"
          placeholder="city"
          name="city"
          value={form.city}
          onChange={(e) => handleChange(e)}
        />
        &nbsp; &nbsp; &nbsp;&nbsp;
        <input
          type="text"
          placeholder="Country"
          name="country"
          value={form.country}
          onChange={(e) => handleChange(e)}
        />
        <button className="getweather" onClick={(e) => weatherData(e)}>
          Search
        </button>
      </form>

      {weather.data !== undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    </div>
  );
}

function getBackgroundClass(data) {
  if (!data || data.cod === 404) {
    return "default-bg"; // Default background
  }

  const weatherCondition = data.weather[0].main.toLowerCase();
  const conditionToClass = {
    clear: "sunny-bg",
    rainy: "rainy-bg",
    clouds: "cloudy-bg",
    haze:"haze-bg",
    mist:"haze-bg"
    // Add other weather conditions as needed
  };

  return conditionToClass[weatherCondition] || "default-bg";
}

export default Weather;
