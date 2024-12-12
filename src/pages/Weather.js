// src/pages/Weather.js
import React from 'react';
import SearchBar from '../components/SearchBar';  // Importing the SearchBar component
import WeatherDisplay from '../components/WeatherDisplay';  // Importing the WeatherDisplay component

const Weather = () => {
  return (
    <div>
      <h1>Weather App</h1>
      <SearchBar />
      <WeatherDisplay />
    </div>
  );
};

export default Weather;
