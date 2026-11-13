import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="border-t border-cyber-border bg-[#08080a] py-12 px-4 flex justify-center">
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="font-mono text-white text-sm font-semibold flex items-center gap-2">
            <span className="text-cyber-emerald">●</span> ivanmontesdeoca.dev
          </div>
          <p className="text-xs text-gray-400">
            Enfocado en Pentesting, Hardening Linux y Soluciones de Software.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:Ivanmontesdeoca00@icloud.com"
            className="flex items-center gap-2 bg-cyber-card border border-cyber-border hover:border-cyber-emerald/50 px-3.5 py-2 rounded-xl text-xs font-mono text-gray-200 transition-all"
          >
            <Mail size={15} className="text-cyber-emerald" />
            <span>Ivanmontesdeoca00@icloud.com</span>
          </a>

          <a
            href="https://github.com/ivanmontesdeoca00"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-cyber-card border border-cyber-border hover:border-gray-500 rounded-xl text-gray-300 hover:text-white transition-all"
            aria-label="GitHub"
          >
            <FaGithub size={16} />
          </a>

          <a
            href="https://www.linkedin.com/in/iv%C3%A1n-kevin-montes-de-oca-74986a24b/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-cyber-card border border-cyber-border hover:border-cyan-500/50 rounded-xl text-gray-300 hover:text-cyan-400 transition-all"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={16} />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2.5 bg-cyber-card border border-cyber-border hover:border-gray-500 rounded-xl text-gray-400 hover:text-white transition-all"
            aria-label="Volver arriba"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
