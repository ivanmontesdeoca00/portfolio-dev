import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';

import { TerminalWindow } from '../ui/TerminalWindow';
import { ArrowUpRight, Download, ShieldCheck, Code2 } from 'lucide-react';

// En la declaración del componente:
export const Hero = ({ onNavigateProjects }) => {

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 flex justify-center bg-grid-pattern">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Lado izquierdo: Textos y CTA */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 bg-cyber-card border border-cyber-border px-3.5 py-1.5 rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-cyber-emerald animate-ping"></span>
            <span className="text-xs font-mono text-gray-300 font-medium">Disponible para proyectos & roles Tech</span>
          </div>

          <div className="flex items-center gap-4 sm:gap-5">
            <img
              src="/projects/foto-personal.png"
              alt="Iván Montes de Oca"
              className="w-50 h-50 sm:w-50 sm:h-50 rounded-full object-cover border-2 border-cyber-emerald shadow-lg shadow-cyber-emerald/20 shrink-0"
            />
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Iván Montes de Oca
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-gray-400 font-normal leading-relaxed">
            Especializandome en <span className="text-cyber-emerald font-semibold">Ciberseguridad (Pentesting)</span>, conocimientos solidos en <span className="text-cyber-emerald font-semibold">JAVA </span>,
            administración de sistemas y bases de datos con <span className="text-white font-medium"> PostgreSQL, MySQL y Docker</span> y desarrollador Full Stack con <span className="text-cyan-400 font-semibold">JavaScript | ReactJs | NodeJs | Python</span>
            </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
           <button
            onClick={onNavigateProjects}
            className="inline-flex items-center gap-2 bg-cyber-emerald text-black font-mono font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl hover:bg-emerald-400 transition-all shadow-lg shadow-cyber-emerald/20"
          >
            <span>&lt;/&gt; Ver Proyectos</span>
          </button>
                    {/* Fila de Botones de Acción */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
           

        

            {/* Botón Chico: Mira mi CV */}
            <a
              href="/cv-ivan-montes-de-oca.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#12131a] border border-cyber-emerald/40 text-cyber-emerald font-mono text-xs px-3.5 py-2.5 rounded-xl hover:bg-cyber-emerald/10 hover:border-cyber-emerald transition-all shadow-sm"
              title="Abrir CV en formato PDF"
            >
              <FileText size={14} />
              <span>Mira mi CV</span>
              <ExternalLink size={12} />
            </a>
          </div>



            <a
              href="https://github.com/ivanmontesdeoca00?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cyber-card border border-cyber-border hover:border-gray-500 text-gray-200 px-5 py-2.5 rounded-xl transition-all font-mono text-sm"
            >
              <span>GitHub Repos</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Badges de foco técnico */}
          <div className="flex items-center gap-6 pt-4 text-xs font-mono text-gray-400 border-t border-cyber-border/60">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-cyber-emerald" />
              <span>eJPT Preparation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyan-400 font-bold">#</span>
              <span>Linux & Containers</span>
            </div>
          </div>
        </div>

        {/* Lado derecho: Terminal interactiva */}
        <div className="lg:col-span-5 w-full">
          <TerminalWindow />
        </div>

      </div>
    </section>
  );
};
