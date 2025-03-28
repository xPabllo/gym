import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Classes from './components/Classes';
import Trainers from './components/Trainers';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Classes />
      <Trainers />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
