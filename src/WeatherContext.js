import React, { createContext, useContext, useState } from 'react';

// Create the Weather Context
const WeatherContext = createContext();

// Define the Provider Component
export function WeatherProvider({ children }) {
  const [weather, setWeather] = useState(null);

  return (
    <WeatherContext.Provider value={{ weather, setWeather }}>
      {children}
    </WeatherContext.Provider>
  );
}

// Custom Hook to use Weather Context
export function useWeather() {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
}
