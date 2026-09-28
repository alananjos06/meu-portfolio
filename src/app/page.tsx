import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import ProfileBadge from '@/components/ProfileBadge';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
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
                Desenvolvedora Júnior
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
                {["React (Vite)", "JavaScript ES6+", "TypeScript", "Tailwind CSS"].map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-zinc-800/40 border border-zinc-700/30 text-zinc-400 text-xs px-2.5 py-1 rounded text-center font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <ProfileBadge />
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
