import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h2>About Us</h2>
      <p>We are a weather application that provides accurate and timely weather forecasts.</p>
      <nav>
        <Link to="team">Team &emsp; </Link>
        <Link to="mission">Mission</Link>
      </nav>
      <div className="about-content">
        <Outlet />
      </div>
    </div>
  );
};

export default About;