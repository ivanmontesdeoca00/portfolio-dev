import React from 'react';
import { experienceData, educationData } from '../../data/experienceData';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-16 px-4 flex justify-center bg-[#060709]">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Columna 1: Experiencia Laboral Técnica */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-cyber-emerald/10 border border-cyber-emerald/20 rounded-xl text-cyber-emerald">
              <Briefcase size={20} />
            </div>
            <div>
              <span className="text-xs font-mono text-cyber-emerald uppercase">// Práctica Aplicada</span>
              <h2 className="text-2xl font-bold text-white">Experiencia Técnica</h2>
            </div>
          </div>

          <div className="flex flex-col gap-6 border-l border-cyber-border pl-4 ml-3">
            {experienceData.map((item, idx) => (
              <div key={idx} className="relative group">
                <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-cyber-emerald/50 border border-cyber-emerald group-hover:scale-125 transition-transform" />
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-1">
                  <Calendar size={13} />
                  <span>{item.period}</span>
                </div>
                <h3 className="text-lg font-bold text-white">{item.role}</h3>
                <span className="text-xs font-mono text-cyan-400 block mb-2">{item.company}</span>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.badges.map((b, i) => (
                    <span key={i} className="text-[10px] font-mono bg-[#141620] text-gray-300 border border-cyber-border px-2 py-0.5 rounded">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Columna 2: Educación & Certificaciones */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 border border-purple-500/20 rounded-xl text-purple-400">
              <GraduationCap size={20} />
            </div>
            <div>
              <span className="text-xs font-mono text-purple-400 uppercase">// Formación Continua</span>
              <h2 className="text-2xl font-bold text-white">Educación & Rutas</h2>
            </div>
          </div>

          <div className="flex flex-col gap-6 border-l border-cyber-border pl-4 ml-3">
            {educationData.map((item, idx) => (
              <div key={idx} className="relative group">
                <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-purple-500/50 border border-purple-400 group-hover:scale-125 transition-transform" />
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-1">
                  <Calendar size={13} />
                  <span>{item.period}</span>
                </div>
                <h3 className="text-lg font-bold text-white">{item.degree}</h3>
                <span className="text-xs font-mono text-purple-400 block mb-2">{item.institution}</span>
                <p className="text-sm text-gray-400 leading-relaxed">{item.details}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
