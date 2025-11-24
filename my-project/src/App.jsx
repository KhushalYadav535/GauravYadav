import React from 'react';
import Background3D from './components/Background3D';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden selection:bg-neonBlue selection:text-deepSpace">
      {/* Ambient gradients that sit behind the 3D canvas */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-0 w-[520px] h-[520px] bg-neonBlue/20 blur-[120px]" />
        <div className="absolute bottom-0 left-[-10%] w-[420px] h-[420px] bg-neonTeal/10 blur-[140px]" />
      </div>

      <Background3D />
      <Navbar />

      <main className="relative z-10 flex flex-col gap-32 pt-28 pb-32">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
