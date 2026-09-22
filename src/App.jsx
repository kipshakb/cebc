import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Benefits from './components/Benefits';
import Connections from './components/Connections';
import WhyJoin from './components/WhyJoin';
import Pricing from './components/Pricing';
import Application from './components/Application';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-20"> {/* Padding for fixed navbar */}
          <Hero />
          <Philosophy />
          <Benefits />
          <Connections />
          <WhyJoin />
          <Pricing />
          <Application />
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
