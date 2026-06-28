'use client';

import { useState, MouseEvent } from 'react';

export default function Projects() {
  const projectsList = [
    {
      title: "Zero Touch - System for the automatic generation and updating of software tests",
      description: "Desenvolvimento de sistema para geração automática de testes de software usando Granite 13B. Atuei no Front-End com React, auxiliei na API em Django/PostgreSQL e configurei pipelines de CI/CD via GitHub Actions e Docker.",
      tags: ["React (Vite)", "Tailwind CSS", "Django", "PostgreSQL", "Docker", "GitHub Actions", "IBM Watsonx", "IBM Bob Orchestrator"],
      github: "https://github.com/KrispLabs/IBM-orchestrate",
      live: "#"
    },
    {
      title: "Open Resource - Agent AI Hiring",
      description: "Plataforma de recrutamento e orquestração de talentos com inteligência artificial (IA) integrada, projetada para otimizar a avaliação de candidatos, os fluxos de trabalho de recrutamento e a inteligência contextual de contratação.",
      tags: ["React (Vite)", "Figma(Design Tokens)", "CSS modules", "APIs REST", "Python", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/krisplabs/open-resource",
      live: "https://open-resource-hr.vercel.app/login"
    },
    {
      title: "FinFreela - Smart Financial Educator",
      description: "Aplicação interativa focada em educação financeira desenvolvida em React. Conta com gerenciamento de estados dinâmicos para controle de fluxos de caixa, interface intuitiva e gráficos focados na experiência do usuário.",
      tags: ["JavaScript", "Node.js", "SQLite", "React (Vite)", "CSS modules", "LocalStorage"],
      github: "https://github.com/alananjos06/educador-financeiro-inteligente",
      live: "https://alananjos06.github.io/educador-financeiro-inteligente/"
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [coords, setCoords] = useState({ rotateX: 0, rotateY: 0, glowX: 0, glowY: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>, index: number) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    const glowX = e.clientX - box.left;
    const glowY = e.clientY - box.top;

    setHoveredIndex(index);
    setCoords({ 
      rotateX: -(y / box.height) * 20, 
      rotateY: (x / box.width) * 20, 
      glowX, 
      glowY 
    });
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setCoords({ rotateX: 0, rotateY: 0, glowX: 0, glowY: 0 });
  };

 return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24 border-t border-zinc-800/50">
      <p className="text-xs font-semibold tracking-wider text-cyan-400 uppercase mb-2">// PORTFOLIO</p>
      <h2 className="text-3xl md:text-4xl font-black tracking-tight text-zinc-50 mb-12">Projetos em Destaque</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full" style={{ perspective: '1000px' }}>
        {projectsList.map((project, index) => {
          const isHovered = hoveredIndex === index;

          return (
  <div 
    key={index}
    onMouseMove={(e) => handleMouseMove(e, index)}
    onMouseLeave={handleMouseLeave}
    style={{
      transform: isHovered 
        ? `perspective(1000px) rotateX(${coords.rotateX}deg) rotateY(${coords.rotateY}deg)` 
        : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
      transition: isHovered 
        ? 'none' 
        : 'transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color 0.4s ease',
      transformStyle: 'preserve-3d'
    }}
    className="relative bg-zinc-900/20 border border-zinc-800/80 rounded-xl p-6 flex flex-col justify-between hover:border-cyan-500/40 group cursor-pointer overflow-hidden transform">
    
    <div 
      className="absolute pointer-events-none inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
      style={{
        background: isHovered 
          ? `radial-gradient(400px circle at ${coords.glowX}px ${coords.glowY}px, rgba(34, 211, 238, 0.15), transparent 80%)`
          : 'none'
      }}
    />

              <div style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }} className="transition-transform duration-200">
                <div className="flex items-center justify-between mb-6">
                  <svg className="w-8 h-8 text-cyan-400/80 transition-transform duration-300 group-hover:scale-105" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 002-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                  
                  <div className="flex items-center gap-3 text-zinc-400 relative z-20">
                    <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-zinc-100 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.48.0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-zinc-100 group-hover:text-cyan-400 transition-colors tracking-tight">
                  {project.title}
                </h3>
              </div>

             
              <div style={{ transform: 'translateZ(15px)' }}>
                <p className="text-zinc-400 text-sm mt-3 leading-relaxed min-h-[96px]">
                  {project.description}
                </p>
              </div>

             
              <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-zinc-800/30 min-h-[64px] items-start content-start" style={{ transform: 'translateZ(10px)' }}>
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono text-zinc-400 bg-zinc-950/40 border border-zinc-800/60 px-2.5 py-0.5 rounded-md whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}