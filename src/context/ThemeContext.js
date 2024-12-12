import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the ThemeContext
export const ThemeContext = createContext();

// ThemeProvider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light'); // Get theme from localStorage (if exists)

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'; // Toggle theme
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save the theme in localStorage
  };

  // Apply the theme class to the body element
  useEffect(() => {
    // Set body class to either 'light' or 'dark'
    document.body.className = theme;
    // Apply default colors for light and dark themes
    document.body.style.color = theme === 'light' ? '#000' : '#fff'; // Text color
    document.body.style.backgroundColor = theme === 'light' ? '#fff' : '#121212'; // Background color
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook to use theme and toggleTheme in other components
export const useTheme = () => useContext(ThemeContext);
