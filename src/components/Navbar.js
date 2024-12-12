import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';  // Import ThemeContext
import './Navbar.css';

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);  // Access theme and toggleTheme function from context

  return (
    <nav className={`navbar ${theme}`}>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="navbar-item">
          <Link to="/weather">Weather</Link>
        </li>
        <li className="navbar-item">
          <Link to="/redux-example">Redux Example</Link>
        </li>
      </ul>
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '🌞'} {/* Display moon icon for light mode and sun for dark mode */}
      </button>
    </nav>
  );
}

export default Navbar;
