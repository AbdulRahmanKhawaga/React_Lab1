import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx';
import Hero from './components/hero/Hero.jsx';
import About from './components/about/About.jsx';
import Skills from './components/skills/Skills.jsx' ;
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {

  return (
    <>
     <Navbar />
     <Hero />
     <About />
     <Skills />
     <Portfolio />
     <Footer />
    </>
  )
}

export default App
