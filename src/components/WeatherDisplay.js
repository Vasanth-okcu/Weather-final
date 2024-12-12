// src/components/WeatherDisplay.js
import React from 'react';
import { useWeather } from '../WeatherContext';  // Import the custom useWeather hook

const WeatherDisplay = () => {
  const { weather, loading } = useWeather();  // Destructure weather and loading from the context

  if (loading) {
    return <p>Loading...</p>;  // Show loading message while fetching data
  }

  if (!weather) {
    return <p>Please enter a city to get the weather.</p>;  // Show message when there's no weather data
  }

  return (
    <div>
      <h2>Weather in {weather.city}</h2>
      <p>Temperature: {weather.temperature}°F</p>
      <p>Description: {weather.description}</p>
    </div>
  );
};

export default WeatherDisplay;
