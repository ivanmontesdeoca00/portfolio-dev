import React from 'react';
import { Terminal, Shield, Code2, Rocket } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = ({ setCurrentView }) => {
  return (
    <footer className="w-full border-t border-cyber-border bg-[#050507] text-gray-400 py-10 px-4 mt-auto">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Info y Estado */}
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <button
            onClick={() => {
              if (setCurrentView) setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 text-white font-mono font-semibold text-sm hover:text-cyber-emerald transition-colors"
          >
            <Terminal size={16} className="text-cyber-emerald" />
            <span>ivan@dev:~#</span>
          </button>
          
          <p className="text-xs font-mono text-gray-500">
            © {new Date().getFullYear()} Iván Montes de Oca. Todos los derechos reservados.
          </p>
        </div>

        {/* Badge Demostrativo: React + Vercel */}
        <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0e1017] border border-cyber-border text-xs font-mono text-gray-300 shadow-inner">
          <Code2 size={15} className="text-cyan-400" />
          <span>Desarrollado en <strong className="text-white font-semibold">React.js</strong></span>
          <span className="text-gray-600">•</span>
          <Rocket size={14} className="text-cyber-emerald" />
          <span>Deploy en <strong className="text-white font-semibold">Vercel</strong></span>
        </div>

        {/* Redes */}
        <div className="flex items-center gap-4 text-gray-400">
          <a
            href="https://github.com/ivanmontesdeoca00"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors p-2 hover:bg-cyber-cardHover rounded-lg"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/iv%C3%A1n-kevin-montes-de-oca-74986a24b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors p-2 hover:bg-cyber-cardHover rounded-lg"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
        </div>

      </div>
    </footer>
  );
};
