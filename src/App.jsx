import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Benefits from './components/Benefits';
import ChineseCompanies from './components/ChineseCompanies';
import EurasianCooperation from './components/EurasianCooperation';
import Pricing from './components/Pricing';
import Application from './components/Application';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <div> {/* Padding handled by sections or scroll-padding */}
          <Hero />
          <Philosophy />
          <ChineseCompanies />
          <EurasianCooperation />
          <Benefits />
          <Pricing />
          <Application />
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
