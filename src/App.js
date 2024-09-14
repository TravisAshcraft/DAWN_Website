// src/App.js
import React from 'react';
import HeroSection from './Pages/HeroSection';
import Roadmap from './Components/Roadmap';
import ZombieShowcase from './Components/ZombieShowcase';
import Footer from './Pages/Footer';
import './App.css';
import NewsletterSignUp from "./Components/NewsletterSignUp";

function App() {
  return (
      <div className="App">
        <HeroSection />
        <Roadmap />
        <NewsletterSignUp/>
          <ZombieShowcase/>
        <Footer />
      </div>
  );
}

export default App;
