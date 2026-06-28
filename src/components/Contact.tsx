'use client';

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-24 border-t border-zinc-800/50 text-center flex flex-col items-center justify-center">
      <p className="text-xs font-semibold tracking-wider text-cyan-400 uppercase mb-2">
        // START_CONVERSATION ()
      </p>
      
      <div className="text-center py-13 border-t border-zinc-800/50">
  <h2 className="text-3xl font-black tracking-tight text-zinc-50 mb-4">
    Vamos construir algo incrível juntos?
  </h2>
  <p className="text-zinc-400 max-w-xl mx-auto mb-8 text-base leading-relaxed">
    Estou sempre aberta a novas oportunidades, parcerias em hackathons ou apenas para trocar uma ideia sobre desenvolvimento web e IA.
  </p>

  <div className="flex items-center justify-center gap-6 text-sm font-medium">
    <a 
      href="https://linkedin.com/in/alana-anjos-aga222" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-zinc-400 hover:text-cyan-400 transition-colors duration-300"
    >
      LinkedIn
    </a>
    <span className="text-zinc-700">|</span>
    <a 
      href="https://github.com/alananjos06" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-zinc-400 hover:text-cyan-400 transition-colors duration-300"
    >
      GitHub
    </a>
    <span className="text-zinc-700">|</span>
    <a 
      href="mailto:anjosa840@gmail.com" 
      className="text-zinc-400 hover:text-cyan-400 transition-colors duration-300"
    >
      E-mail
    </a>
  </div>

  <p className="text-white text-xs font-mono mt-16">
    © 2026 alananjos.dev • Built with Next.js & Tailwind CSS
  </p>
</div>
</section>
)};