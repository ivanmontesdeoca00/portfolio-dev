import React from 'react';
import { TerminalWindow } from '../ui/TerminalWindow';
import { ArrowUpRight, Download, ShieldCheck, Code2 } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 flex justify-center bg-grid-pattern">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Lado izquierdo: Textos y CTA */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 bg-cyber-card border border-cyber-border px-3.5 py-1.5 rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-cyber-emerald animate-ping"></span>
            <span className="text-xs font-mono text-gray-300 font-medium">Disponible para proyectos & roles Tech</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Iván Montes de Oca
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 font-normal leading-relaxed">
            Especializado en <span className="text-cyber-emerald font-semibold">Seguridad Ofensiva (Pentesting)</span>, 
            administración de sistemas <span className="text-white font-medium">Linux/Docker</span> y desarrollo de software orientado a objetos y soluciones de escritorio.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-cyber-emerald text-black font-semibold px-5 py-2.5 rounded-xl hover:bg-emerald-400 transition-all font-mono text-sm shadow-lg shadow-cyber-emerald/20"
            >
              <Code2 size={18} />
              <span>Ver Proyectos</span>
            </a>

            <a
              href="https://github.com/ivanmontesdeoca00"
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
