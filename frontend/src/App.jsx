// src/App.jsx
import React from 'react';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
import VerticalNavbar from './Components/VerticalNavbar';
import About from './Components/About';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Reviews from './Components/Reviews';
import ContactMe from './Components/ContactMe';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Navbar/>
      <VerticalNavbar />
      <HeroSection />
      <About/>
      <Services/>
      <Projects/>
      <Reviews/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;