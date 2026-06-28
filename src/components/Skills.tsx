'use client';

export default function Skills() {
  const skillCategories = [
    {
      title: "Front-End",
      skills: ["React (Vite)", "Next.js", "TypeScript", "JavaScript ES6+", "Tailwind CSS", "HTML5 / CSS3", "Figma (Tokens Studio)"]
    },
    {
      title: "Back-End & Databases",
      skills: ["Node.js", "Django", "MySQL", "PostgreSQL", "SQLite", "REST APIs"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "GitHub Actions (CI/CD)", "Git / GitHub", "Vercel", "Firebase Hosting"]
    }
  ];

  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-24 border-t border-zinc-800/50">
      <p className="text-xs font-semibold tracking-wider text-cyan-400 uppercase mb-2">
        // TECH STACK
      </p>
      
      <h2 className="text-3xl md:text-4xl font-black tracking-tight text-zinc-50 mb-12">
        Habilidades & Tecnologias
      </h2>

    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {skillCategories.map((category, idx) => (
          <div 
            key={idx}
            className="bg-zinc-900/10 border border-zinc-800/60 rounded-xl p-6 hover:border-zinc-700/60 transition-all duration-300 group"
          >
          
            <h3 className="text-lg font-bold text-zinc-200 group-hover:text-cyan-400 transition-colors mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-cyan-500 transition-colors"></span>
              {category.title}
            </h3>

        
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill}
                  className="text-xs font-mono text-zinc-400 bg-zinc-950/40 border border-zinc-800/60 px-3 py-1.5 rounded-lg hover:border-cyan-500/30 hover:text-zinc-200 transition-colors duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}