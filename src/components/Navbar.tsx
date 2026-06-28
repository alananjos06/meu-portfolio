import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-md px-6 py-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        
        <Link href="/" className="text-xl font-bold tracking-tight text-zinc-100 hover:text-cyan-400 transition-colors">
          alananjos<span className="text-cyan-400">.</span>dev
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium text-zinc-400">
          <Link href="#about" className="relative text-zinc-400 hover:text-zinc-100 font-medium text-sm transition-colors duration-300 group py-1">
            Sobre
            <span className="absolute bottom-0 left-1/2 w-0 h-[1.5px] bg-cyan-400 transition-all duration-300 -translate-x-1/2 group-hover:w-full" />
          </Link>
          <Link href="#projects" className="relative text-zinc-400 hover:text-zinc-100 font-medium text-sm transition-colors duration-300 group py-1">
            Projetos
            <span className="absolute bottom-0 left-1/2 w-0 h-[1.5px] bg-cyan-400 transition-all duration-300 -translate-x-1/2 group-hover:w-full" />
          </Link>
          <Link href="#skills" className="relative text-zinc-400 hover:text-zinc-100 font-medium text-sm transition-colors duration-300 group py-1">
            Habilidades
            <span className="absolute bottom-0 left-1/2 w-0 h-[1.5px] bg-cyan-400 transition-all duration-300 -translate-x-1/2 group-hover:w-full" />
          </Link>
          
          <Link href="#contact" className="relative text-zinc-400 hover:text-zinc-100 font-medium text-sm transition-colors duration-300 group py-1">
            Contato
            <span className="absolute bottom-0 left-1/2 w-0 h-[1.5px] bg-cyan-400 transition-all duration-300 -translate-x-1/2 group-hover:w-full" />
          </Link>
        </div>
      </div>
    </nav>
  );
}