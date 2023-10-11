import React from 'react';
import './App.css'
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/navbar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Languages from './components/Languages';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Mode from './components/Mode';

function App() {
  return (
    <main>
      <Mode></Mode>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Education></Education>
      <Languages></Languages>
      <Contact></Contact>
      <Resume></Resume>
      <Footer></Footer>
    </main>
  )
}

export default App