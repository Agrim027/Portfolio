import React from 'react';
import Navbar from './components/Navbar';
import TopographicBackground from './components/TopographicBackground';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Marquee from './components/Marquee';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Topographic Animated Background layer */}
      <TopographicBackground />

      {/* Main Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          
          <About />
          <Marquee direction="left" />
          
          <Skills />
          <Marquee direction="right" />
          
          <Projects />
          <Marquee direction="left" />
          
          <Experience />
          <Marquee direction="right" />
          
          <Certifications />
          <Marquee direction="left" />
          
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
