// import React, { useState, useEffect } from 'react';
// import './App.css';

// const Weather = () => {
//   const [city, setCity] = useState('London');
//   const [weather, setWeather] = useState(null);

//   const fetchWeather = async () => {
//     try {
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`
//       );
//       if (response.ok) {
//         const data = await response.json();
//         setWeather(data);
//       } else {
//         console.error('API request failed with status:', response.status);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchWeather();
//   }, [city]);

//   const handleCityChange = (event) => {
//     setCity(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     fetchWeather();
//   };

//   if (!weather) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="weather">
//       <h1>Weather App</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="city">City:</label>
//         <input
//           type="text"
//           id="city"
//           name="city"
//           value={city}
//           onChange={handleCityChange}
//         />
//         <button type="submit">Submit</button>
//       </form>
//       <h2>{weather.name}</h2>
//       <p>{weather.weather[0].description}</p>
//       <p>Temperature: {weather.main.temp}</p>
//       <p>Feels Like: {weather.main.feels_like}</p>
//       <p>Humidity: {weather.main.humidity}</p>
//     </div>
//   );
// };

// export default Weather;
import React from "react";
import "./App.css";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

export default App;