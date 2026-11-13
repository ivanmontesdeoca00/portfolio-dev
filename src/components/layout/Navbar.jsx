import React from 'react';
import { Terminal, Shield } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Navbar = () => {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="w-full max-w-5xl bg-cyber-card/70 backdrop-blur-md border border-cyber-border rounded-2xl px-6 py-3 flex items-center justify-between shadow-2xl">
        <a href="#" className="flex items-center gap-2 text-white font-mono font-semibold text-sm hover:text-cyber-emerald transition-colors">
          <Terminal size={18} className="text-cyber-emerald" />
          <span>ivan@dev:~#</span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
          <a href="#about" className="hover:text-cyber-emerald transition-colors">Sobre Mí</a>
          <a href="#projects" className="hover:text-cyber-emerald transition-colors">Proyectos</a>
          <a href="#experience" className="hover:text-cyber-emerald transition-colors">Trayectoria</a>
          <a href="#contact" className="hover:text-cyber-emerald transition-colors">Contacto</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/ivanmontesdeoca00"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-white hover:bg-cyber-cardHover rounded-lg transition-all"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/iv%C3%A1n-kevin-montes-de-oca-74986a24b/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyber-cardHover rounded-lg transition-all"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="#projects"
            className="hidden sm:flex items-center gap-1.5 text-xs font-mono font-medium bg-cyber-emerald/10 text-cyber-emerald border border-cyber-emerald/30 px-3 py-1.5 rounded-lg hover:bg-cyber-emerald/20 transition-all"
          >
            <Shield size={14} />
            <span>eJPT Path</span>
          </a>
        </div>
      </nav>
    </header>
  );
};
