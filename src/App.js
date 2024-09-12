// src/App.js
import React from 'react';
import HeroSection from './Pages/HeroSection';
import Roadmap from './Components/Roadmap';
import ZombieShowcase from './Components/ZombieShowcase';
import Footer from './Pages/Footer';
import './App.css';

function App() {
  return (
      <div className="App">
        <HeroSection />
        <Roadmap />
        <ZombieShowcase />
        <Footer />
      </div>
  );
}

export default App;
