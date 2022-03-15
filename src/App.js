import React from 'react';
import './App.css';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Developer from './components/developer/Developer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Developer />
    </div>
  );
}

export default App;
