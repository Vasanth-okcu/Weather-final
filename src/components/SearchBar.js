import React, { useState } from 'react';
import { useWeather } from '../WeatherContext'; // Ensure correct path to WeatherContext

const SearchBar = () => {
  const { setWeather } = useWeather(); // Get setWeather from context to update weather state
  const [location, setLocation] = useState(""); // State to store user input for location

  // Function to fetch weather data from the API
  const fetchWeatherData = async (location) => {
    try {
      const apiKey = '4b33ef4cab52c46e785d6082b3383114';  // Replace with your actual API key
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
      
      if (!response.ok) {
        throw new Error('Weather data not found');
      }
      
      const data = await response.json();
      return {
        location: data.name,
        temp: data.main.temp,
        condition: data.weather[0].description,
      };
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null;
    }
  };

  // Handle search when user clicks the button
  const handleSearch = async () => {
    const weatherData = await fetchWeatherData(location);  // Get weather data for the location
    if (weatherData) {
      setWeather(weatherData);  // Update the context with the fetched weather data
    } else {
      alert('Failed to fetch weather data');
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
        placeholder="Enter location" 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
