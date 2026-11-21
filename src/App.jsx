import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { BentoAbout } from './components/sections/BentoAbout';
import { ProjectsGrid } from './components/sections/ProjectsGrid';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

// Configuración de la animación: entra desde arriba (-30px) hacia su posición natural (0px)
const pageVariants = {
  initial: {
    opacity: 0,
    y: -35,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 1, 0.5, 1], // Curva suave y natural
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.25,
      ease: 'easeIn',
    },
  },
};

function App() {
  const [currentView, setCurrentView] = useState('home');

  return (
    <div className="min-h-screen bg-cyber-bg text-gray-200 flex flex-col justify-between overflow-x-hidden">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      
      <main className="flex-grow pt-24 pb-12 flex flex-col justify-center">
        {/* AnimatePresence gestiona la salida y entrada cuando cambia la key */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full"
          >
            {currentView === 'home' && (
              <Hero onNavigateProjects={() => setCurrentView('projects')} />
            )}
            
            {currentView === 'about' && (
              <BentoAbout onBack={() => setCurrentView('home')} />
            )}

            {currentView === 'projects' && (
              <ProjectsGrid onBack={() => setCurrentView('home')} />
            )}

            {currentView === 'experience' && (
              <Experience onBack={() => setCurrentView('home')} />
            )}

            {currentView === 'contact' && (
              <Contact onBack={() => setCurrentView('home')} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setCurrentView={setCurrentView} />
    </div>
  );
}

export default App;
