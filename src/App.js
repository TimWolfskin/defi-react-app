import React from 'react';
import './App.css';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
