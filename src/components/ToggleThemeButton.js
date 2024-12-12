// /src/components/ToggleThemeButton.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useTheme(); // Get the current theme and toggle function

  return (
    <button
      onClick={toggleTheme}
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        padding: '10px',
        backgroundColor: theme === 'light' ? '#ccc' : '#666',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
      }}
    >
      {theme === 'light' ? '🌙' : '☀️'} {/* Display moon for light and sun for dark theme */}
    </button>
  );
};

export default ToggleThemeButton;
