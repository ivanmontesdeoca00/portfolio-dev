import React, { useState } from 'react';
import { projectsData } from '../../data/projectsData';
import { ExternalLink, Terminal, Shield, Code, Server } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export const ProjectsGrid = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  const categories = [
    { id: 'all', label: 'Todos los Proyectos', icon: Terminal },
    { id: 'security', label: 'Ciberseguridad & Labs', icon: Shield },
    { id: 'development', label: 'Desarrollo (Python/Java)', icon: Code },
    { id: 'systems', label: 'Sistemas & Docker', icon: Server },
  ];

  return (
    <section id="projects" className="py-16 px-4 flex justify-center">
      <div className="w-full max-w-5xl flex flex-col gap-8">
        
        {/* Cabecera y Selector */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-cyber-border pb-6">
          <div>
            <span className="text-xs font-mono text-cyber-emerald uppercase tracking-wider">// Portafolio Práctico</span>
            <h2 className="text-3xl font-bold text-white mt-1">Laboratorios & Código</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                    activeFilter === cat.id
                      ? 'bg-cyber-emerald text-black font-semibold shadow-lg shadow-cyber-emerald/20'
                      : 'bg-cyber-card border border-cyber-border text-gray-400 hover:text-white hover:border-gray-600'
                  }`}
                >
                  <Icon size={14} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grilla de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-cyber-card border border-cyber-border rounded-2xl overflow-hidden hover:border-cyber-emerald/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative w-full h-52 bg-[#12131a] overflow-hidden border-b border-cyber-border flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-card via-transparent to-transparent opacity-90" />
                <span className="absolute top-3 left-3 bg-[#08080a]/80 backdrop-blur-md border border-cyber-border text-[11px] font-mono text-gray-300 px-2.5 py-1 rounded-md">
                  {project.category.toUpperCase()}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyber-emerald transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono bg-[#141620] text-gray-300 border border-cyber-border px-2 py-0.5 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-cyber-border/60">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-300 hover:text-cyber-emerald transition-colors"
                    >
                      <FaGithub size={15} />
                      <span>Ver Repositorio</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
