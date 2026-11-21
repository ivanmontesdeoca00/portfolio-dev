import React, { useState } from 'react';
import { Mail, Copy, Check, Shield, ArrowUpRight, ArrowLeft } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Contact = ({ onBack }) => {
  const [copied, setCopied] = useState(false);
  const email = 'Ivanmontesdeoca00@icloud.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="px-4 flex justify-center animate-fadeIn">
      <div className="w-full max-w-5xl flex flex-col gap-8">
        
        {/* Barra superior con botón volver */}
        <div className="flex items-center justify-between border-b border-cyber-border pb-6">
          <div>
            <span className="text-xs font-mono text-cyber-emerald uppercase tracking-wider">// Communication Link</span>
            <h2 className="text-3xl font-bold text-white mt-1">Conectemos</h2>
            <p className="text-gray-400 text-sm mt-2 max-w-xl">
              Disponible para roles y desafíos en Ciberseguridad Ofensiva (Pentesting / Red Team Jr), 
              administración de infraestructura Linux/Docker y desarrollo de software.
            </p>
          </div>

          {onBack && (
            <button
              onClick={onBack}
              className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono bg-cyber-card border border-cyber-border text-gray-300 hover:text-white hover:border-cyber-emerald/50 transition-all"
            >
              <ArrowLeft size={14} className="text-cyber-emerald" />
              <span>Volver al inicio</span>
            </button>
          )}
        </div>

        {/* Grid de canales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Card Correo */}
          <div className="bg-cyber-card border border-cyber-border rounded-2xl p-6 flex flex-col justify-between hover:border-cyber-emerald/50 transition-all group">
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyber-emerald/10 border border-cyber-emerald/30 flex items-center justify-center text-cyber-emerald">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Correo Electrónico</h3>
                <p className="text-xs text-gray-400 font-mono mt-1 break-all">{email}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-6">
              <a
                href={`mailto:${email}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 bg-cyber-emerald text-black text-xs font-mono font-semibold py-2.5 px-3 rounded-xl hover:bg-emerald-400 transition-colors"
              >
                <span>Escribir</span>
                <ArrowUpRight size={14} />
              </a>
              <button
                onClick={copyEmail}
                className="p-2.5 bg-[#141620] border border-cyber-border text-gray-300 hover:text-white rounded-xl transition-colors"
                title="Copiar al portapapeles"
              >
                {copied ? <Check size={16} className="text-cyber-emerald" /> : <Copy size={16} />}
              </button>
            </div>
          </div>

          {/* Card LinkedIn */}
          <div className="bg-cyber-card border border-cyber-border rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition-all group">
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <FaLinkedin size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">LinkedIn</h3>
                <p className="text-xs text-gray-400 font-mono mt-1">Perfil profesional y trayectoria</p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://www.linkedin.com/in/iv%C3%A1n-kevin-montes-de-oca-74986a24b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-[#141620] border border-cyber-border text-gray-200 text-xs font-mono font-medium py-2.5 px-3 rounded-xl hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
              >
                <span>Ver Perfil</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Card GitHub */}
          <div className="bg-cyber-card border border-cyber-border rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/50 transition-all group">
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <FaGithub size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">GitHub</h3>
                <p className="text-xs text-gray-400 font-mono mt-1">@ivanmontesdeoca00</p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://github.com/ivanmontesdeoca00"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-[#141620] border border-cyber-border text-gray-200 text-xs font-mono font-medium py-2.5 px-3 rounded-xl hover:border-purple-500/50 hover:text-purple-400 transition-all"
              >
                <span>Explorar Repos</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

        </div>

        {/* Badge inferior */}
        <div className="bg-cyber-card/60 border border-cyber-border rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-gray-400">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-emerald opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-emerald"></span>
            </span>
            <span>Ubicación: Iquique, Chile (Disponible para remoto / presencial)</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <Shield size={14} className="text-cyber-emerald" />
            <span>Respuesta en menos de 24 horas</span>
          </div>
        </div>

      </div>
    </section>
  );
};
