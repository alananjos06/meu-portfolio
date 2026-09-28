'use client';

import { useState, MouseEvent } from 'react';
import Image from 'next/image';

export default function ProfileBadge() {
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
    <div
      className="animate-badge-entrance flex justify-center md:justify-end"
      style={{ animationDelay: '750ms', perspective: '1000px' }}>

      <div className="animate-lanyard-assembly flex flex-col items-center relative select-none pt-28 z-10">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-28"
          viewBox="0 0 64 112"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">

          <defs>
            <linearGradient id="lanyardFade" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3f3f46" stopOpacity="0" />
              <stop offset="45%" stopColor="#52525b" stopOpacity="1" />
            </linearGradient>
          </defs>

          <path d="M20 0 L28 84" stroke="url(#lanyardFade)" strokeWidth="5" strokeLinecap="round" />
          <path d="M44 0 L36 84" stroke="url(#lanyardFade)" strokeWidth="5" strokeLinecap="round" />

          <rect x="27" y="80" width="10" height="32" rx="3" fill="#52525b" />
          <circle cx="32" cy="87" r="2.5" fill="#18181b" />
        </svg>

        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transition: isHovered ? 'none' : 'transform 0.5s ease-out',
            transformStyle: 'preserve-3d'
          }}
          className="tilt-card relative w-64 h-96 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl p-4 flex flex-col items-center justify-between overflow-hidden group hover:border-cyan-500/40 -mt-4">

          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-white/5 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="w-12 h-3 bg-zinc-800 border border-zinc-700 rounded-full mt-1 flex items-center justify-center" style={{ transform: 'translateZ(20px)' }}>
            <div className="w-4 h-1 bg-zinc-950 rounded-full"></div>
          </div>

          <div className="absolute right-2 top-16 text-[10px] font-mono tracking-widest text-zinc-600 uppercase [writing-mode:vertical-lr]" style={{ transform: 'translateZ(15px)' }}>
            Alana Anjos // ID
          </div>

          <div className="w-48 h-56 border border-zinc-700 rounded-md mt-4 overflow-hidden relative shadow-lg" style={{ transform: 'translateZ(30px)' }}>
            <Image src="/alana.jpg" alt="Foto de Alana Anjos" fill sizes="192px" className="object-cover" priority />
          </div>

          <div className="w-full text-left mt-4 pl-2" style={{ transform: 'translateZ(20px)' }}>
            <h2 className="text-zinc-200 font-bold tracking-wide text-base">Alana Anjos</h2>
            <p className="text-cyan-400 font-mono text-xs mt-0.5">Desenvolvedora Full Stack</p>
          </div>

          <div className="w-full h-1 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 mt-2"></div>
        </div>
      </div>
    </div>
  );
}
