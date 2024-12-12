import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Weather from './pages/Weather';
import ReduxExample from './pages/ReduxExample';
import { WeatherProvider } from './WeatherContext';
import store from './redux/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from './context/ThemeContext';
import TeamPage from './pages/team'; // Import TeamPage
import MissionPage from './pages/mission'; // Import MissionPage

// Import the styles for global layout and theming
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router>
          <Navbar />
          <div className="page-wrapper"> {/* Wrapper for controlling width */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />}>
                <Route path="team" element={<TeamPage />} />
                <Route path="mission" element={<MissionPage />} />
              </Route>
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/weather"
                element={
                  <WeatherProvider>
                    <Weather />
                  </WeatherProvider>
                }
              />
              <Route path="/redux-example" element={<ReduxExample />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;