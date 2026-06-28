import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24 border-t border-zinc-800/50 relative overflow-hidden">
      

      <div className="absolute right-[-20px] bottom-[-40px] text-[120px] md:text-[200px] font-black text-zinc-800/25 select-none pointer-events-none tracking-tighter uppercase font-mono">
        ALANA
      </div>

      <p className="text-xs font-semibold tracking-wider text-cyan-400 uppercase mb-2">
        // ABOUT ME
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mt-6 relative z-10">
        

        <div className="md:col-span-2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-zinc-50">
            Minha Trajetória & <br />
            Foco Profissional
          </h2>
          
          <p className="text-zinc-400 leading-relaxed text-base">
            Atualmente estou cursando Bacharelado em <span className="text-zinc-200 font-medium">Sistemas de Informação pela UVA</span> (2026 - 2030). 
            Minha paixão por resolver problemas complexos me levou a atuar ativamente no ecossistema de 
            desenvolvimento, acumulando experiência real sob pressão como <span className="text-cyan-400/90 font-medium">liderança técnica front-end em hackathons internacionais</span>.
          </p>

          <p className="text-zinc-400 leading-relaxed text-base">
            No <span className="text-zinc-200 font-medium">IBM Bob Dev Hackathon</span>, liderei a criação de interfaces com React e colaborei 
            ativamente na estruturação de APIs e pipelines de CI/CD com Docker e GitHub Actions. Além disso, 
            desenvolvi soluções voltadas para inteligência artificial no <span className="text-zinc-200 font-medium">BrightData AI Agents Hackathon</span>, 
            criando componentes interativos e integrando-os a modelos preditivos.
          </p>

         
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="/Alana-Anjos-Curriculo.pdf" 
              download
              className="px-5 py-2.5 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 text-cyan-400 font-bold text-sm rounded-lg transition-all duration-300"
            >
              Download CV
            </a>
            <a 
              href="#projects" 
              className="px-5 py-2.5 border border-zinc-800 hover:border-zinc-700 bg-zinc-900/30 text-zinc-400 hover:text-zinc-200 font-medium text-sm rounded-lg transition-all duration-300"
            >
              Ver Projetos
            </a>
          </div>
        </div>

     
        <div className="flex justify-center">
          <div className="relative w-56 h-56 rounded-full p-1 border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm shadow-xl">
            <div className="w-full h-full rounded-full overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
              <Image 
                src="/alana.jpg" 
                alt="Alana Anjos"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}