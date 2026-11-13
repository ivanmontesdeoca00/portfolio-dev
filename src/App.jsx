import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { BentoAbout } from './components/sections/BentoAbout';
import { ProjectsGrid } from './components/sections/ProjectsGrid';
import { Experience } from './components/sections/Experience';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cyber-bg text-gray-200">
      <Navbar />
      <main>
        <Hero />
        <BentoAbout />
        <ProjectsGrid />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;
