// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    
    <div>
      <h1><center>Welcome to Frontend Final Project</center></h1>
      <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/weather">Weather</Link></li> {/* Link to Weather */}
        </ul>
      </nav>
    </div>
  );
};

export default Home;
