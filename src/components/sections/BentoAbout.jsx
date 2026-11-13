import React from 'react';
import { skillsData } from '../../data/skillsData';
import { Shield, Server, Code, Award, ExternalLink } from 'lucide-react';

export const BentoAbout = () => {
  return (
    <section id="about" className="py-16 px-4 flex justify-center">
      <div className="w-full max-w-5xl flex flex-col gap-8">
        
        <div className="flex flex-col gap-2">
          <span className="text-xs font-mono text-cyber-emerald uppercase tracking-wider">// Perfil Técnico</span>
          <h2 className="text-3xl font-bold text-white">Arquitectura de Capacidades</h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Card 1: Seguridad Ofensiva (Destacado Bento) */}
          <div className="md:col-span-2 bg-cyber-card border border-cyber-border hover:border-cyber-emerald/40 transition-all rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 bg-cyber-emerald/10 border border-cyber-emerald/20 rounded-xl text-cyber-emerald">
                  <Shield size={22} />
                </div>
                <span className="text-xs font-mono text-cyber-emerald border border-cyber-emerald/30 px-2 py-0.5 rounded">Offensive Security</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Pentesting & Auditoría de Sistemas</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Entrenamiento constante en metodologías prácticas de explotación web (OWASP Top 10), escaneo exhaustivo de superficies de red con Nmap y preparación orientada a la certificación <strong>eJPT</strong>.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {skillsData.security.map((item, idx) => (
                <div key={idx} className="bg-[#141620] border border-cyber-border/70 p-2.5 rounded-lg">
                  <div className="font-mono text-xs text-white font-medium">{item.name}</div>
                  <div className="text-[11px] text-gray-400">{item.level}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: TryHackMe & Labs Badge */}
          <div className="bg-cyber-card border border-cyber-border hover:border-red-500/40 transition-all rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="p-2.5 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 w-fit mb-4">
                <Award size={22} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">TryHackMe Profile</h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4">
                Práctica hands-on completando salas del Jr Penetration Tester path y auditorías en laboratorios locales.
              </p>
            </div>
            
            <a
              href="https://tryhackme.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#141620] border border-cyber-border hover:border-gray-500 text-gray-200 text-xs font-mono py-2.5 rounded-xl transition-all"
            >
              <span>Ver Insignias THM</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Card 3: Infraestructura & Linux */}
          <div className="bg-cyber-card border border-cyber-border hover:border-cyan-500/40 transition-all rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="p-2.5 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-cyan-400 w-fit mb-4">
                <Server size={22} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Sistemas & Docker</h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4">
                Administración de entornos Linux (Ubuntu), segmentación de red, SSH y despliegue de contenedores.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {skillsData.systems.map((item, idx) => (
                <span key={idx} className="bg-[#141620] text-gray-300 text-xs font-mono px-2 py-1 rounded border border-cyber-border">
                  {item.name}
                </span>
              ))}
            </div>
          </div>

          {/* Card 4: Desarrollo & Persistencia */}
          <div className="md:col-span-2 bg-cyber-card border border-cyber-border hover:border-cyber-purple/40 transition-all rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 bg-purple-500/10 border border-purple-500/20 rounded-xl text-purple-400">
                  <Code size={22} />
                </div>
                <span className="text-xs font-mono text-purple-400 border border-purple-500/30 px-2 py-0.5 rounded">Core Development</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Desarrollo Orientado a Objetos & Datos</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Construcción de software con arquitectura limpia: lógica en Python y Java (POO), interfaces gráficas (Tkinter, AWT) y modelado relacional en MySQL, PostgreSQL y SQLite.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {skillsData.development.map((item, idx) => (
                <div key={idx} className="bg-[#141620] border border-cyber-border/70 p-2.5 rounded-lg">
                  <div className="font-mono text-xs text-white font-medium">{item.name}</div>
                  <div className="text-[11px] text-gray-400">{item.level}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
