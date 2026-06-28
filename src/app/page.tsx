'use client';

import { useState, MouseEvent } from 'react';
import Image from 'next/image';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    setIsHovered(true);
    setRotateX(-y / 10); 
    setRotateY(x / 10);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <>
      <main className="max-w-5xl mx-auto px-6 min-h-[75vh] flex items-center relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full py-12 relative z-10">
           
          <div className="flex flex-col justify-center">
            
            <div className="overflow-hidden mb-6">
              <div className="animate-mask-text" style={{ animationDelay: '100ms' }}>
                <div className="inline-flex items-center gap-2 border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  Disponível para Oportunidades
                </div>
              </div>
            </div>

           
            <div className="overflow-hidden mb-2">
              <p className="animate-mask-text text-zinc-500 text-sm font-semibold tracking-wider uppercase" style={{ animationDelay: '200ms' }}>
                Junior Programmer
              </p>
            </div>

           
            <div className="overflow-hidden">
              <h1 className="animate-mask-text text-4xl md:text-5xl font-black tracking-tight text-zinc-50 leading-tight" style={{ animationDelay: '300ms' }}>
                Desenvolvedora <br />
                <span className="text-cyan-400">Full Stack</span>
              </h1>
            </div>

          
            <div className="overflow-hidden mt-6">
              <p className="animate-mask-text text-zinc-400 text-base leading-relaxed max-w-md" style={{ animationDelay: '450ms' }}>
                Estudante de Sistemas de Informação focada em construir interfaces funcionais, 
                responsivas e limpas. Tenho experiência prática em hackathons, colaborando desde o 
                front-end até a integração com ferramentas de IA.
              </p>
            </div>

            
            <div className="overflow-hidden mt-8">
              <div className="animate-mask-text flex flex-wrap gap-2 max-w-md" style={{ animationDelay: '600ms' }}>
                {["React(Vite)", "JavaScript ES6+", "TypeScript", "Tailwind CSS"].map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-zinc-800/40 border border-zinc-700/30 text-zinc-400 text-xs px-2.5 py-1 rounded text-center font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

         
          <div 
            className="animate-badge-entrance flex justify-center md:justify-end" 
            style={{ animationDelay: '750ms', perspective: '1000px' }}>
            
        <div className="animate-lanyard-assembly flex flex-col items-center relative select-none pt-28 z-10">
        <svg 
    className="w-12 h-44 text-zinc-700 absolute -top-4" 
    viewBox="0 0 40 160" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg">
    
    <defs>
      <linearGradient id="lanyardFade" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="white" stopOpacity="0" />    
        <stop offset="40%" stopColor="white" stopOpacity="1" />  
      </linearGradient>
    </defs>

    <path 
      d="M10 0 L18 150 C18 154, 22 154, 22 150 L30 0" 
      stroke="url(#lanyardFade)" 
      strokeWidth="4" 
      strokeLinecap="round"
    />
    
    <rect x="16" y="146" width="8" height="10" rx="2" fill="#4b5563" />
    <circle cx="20" cy="151" r="2" fill="#1f2937" />
  </svg>

 
  <div 
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    style={{
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: isHovered ? 'none' : 'transform 0.5s ease-out',
      transformStyle: 'preserve-3d'}}

    className="relative w-64 h-96 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl p-4 flex flex-col items-center justify-between overflow-hidden group hover:border-cyan-500/40 cursor-pointer -mt-4">
   
    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-white/5 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    
    <div className="w-12 h-3 bg-zinc-800 border border-zinc-700 rounded-full mt-1 flex items-center justify-center" style={{ transform: 'translateZ(20px)' }}>
      <div className="w-4 h-1 bg-zinc-950 rounded-full"></div>
    </div>

    <div className="absolute right-2 top-16 text-[10px] font-mono tracking-widest text-zinc-600 uppercase [writing-mode:vertical-lr]" style={{ transform: 'translateZ(15px)' }}>
      Alana Anjos // ID
    </div>

    <div className="w-48 h-56 border border-zinc-700 rounded-md mt-4 overflow-hidden relative shadow-lg" style={{ transform: 'translateZ(30px)' }}>
      <Image src="/alana.jpg" alt="Foto de Alana Anjos" fill className="object-cover" priority/>
    </div>

    <div className="w-full text-left mt-4 pl-2" style={{ transform: 'translateZ(20px)' }}>
      <h3 className="text-zinc-200 font-bold tracking-wide text-base">Alana Anjos</h3>
      <p className="text-cyan-400 font-mono text-xs mt-0.5">Desenvolvedora Full Stack</p>
    </div>

    <div className="w-full h-1 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 mt-2"></div>
  </div>
  </div>
</div>
</div>
</main>
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <Projects />
      </ScrollReveal>
      <ScrollReveal>
        <Skills />
      </ScrollReveal>
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </>
  );
}