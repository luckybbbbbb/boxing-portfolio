import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Training from './components/Training';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-['Inter']">
      <Navigation />
      <Hero />
      <About />
      <Achievements />
      {/* <Training /> */}
      <Gallery />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;