import React, { useState } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

export const TerminalWindow = () => {
  const [activeTab, setActiveTab] = useState('whoami');

  const tabsContent = {
    whoami: `{
  "name": "Iván Montes de Oca",
  "role": "Junior Penetration Tester & Software Developer",
  "location": "Chile",
  "status": "Available for Security & Dev roles",
  "focus": ["Offensive Security", "Linux Hardening", "OOP Systems"]
}`,
    nmap: `PORT     STATE SERVICE     VERSION
22/tcp   open  ssh         OpenSSH 8.9 (Ubuntu)
80/tcp   open  http        Nginx 1.24 (Vercel Edge)
3306/tcp open  mysql       MySQL 8.0 (Dockerized)
5432/tcp open  postgresql  PostgreSQL 15 (Dockerized)
Service Info: OS: Linux (Ubuntu 22.04 LTS); CPE: cpe:/o:linux`,
    stack: `[+] Security: TryHackMe, eJPT Path, OWASP Top 10, Nmap
[+] Systems:  Linux (Ubuntu/Debian), Docker, Bash/Zsh, SSH
[+] Dev:      Python (Tkinter/CLI), Java (OOP), React, SQL`
  };

  return (
    <div className="w-full bg-[#0d0e14] border border-cyber-border rounded-xl overflow-hidden shadow-2xl font-mono text-xs sm:text-sm glow-effect">
      {/* Barra superior de terminal estilo Mac */}
      <div className="bg-[#141620] px-4 py-2.5 flex items-center justify-between border-b border-cyber-border">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
          <span className="ml-2 text-gray-400 flex items-center gap-1.5 text-xs">
            <TerminalIcon size={12} /> ivan@lab:~
          </span>
        </div>
        <div className="flex gap-2">
          {Object.keys(tabsContent).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-2 py-0.5 rounded text-xs transition-all ${
                activeTab === tab 
                  ? 'bg-cyber-emerald/20 text-cyber-emerald border border-cyber-emerald/30 font-semibold' 
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              ${tab}
            </button>
          ))}
        </div>
      </div>

      {/* Contenido de la terminal */}
      <div className="p-4 sm:p-5 text-gray-300 leading-relaxed overflow-x-auto min-h-[190px]">
        <div className="flex items-center gap-2 text-gray-400 mb-2">
          <span className="text-cyber-emerald">➜</span>
          <span className="text-cyan-400">~/lab</span>
          <span className="text-gray-300">./audit --exec {activeTab}</span>
        </div>
        <pre className="text-emerald-400/90 whitespace-pre-wrap font-mono">
          {tabsContent[activeTab]}
        </pre>
      </div>
    </div>
  );
};
