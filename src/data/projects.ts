export type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
};

export const projects: Project[] = [
  {
    title: "Zero Touch - Geração automática de testes de software",
    description:
      "Desenvolvimento de sistema para geração automática de testes de software usando Granite 13B. Atuei no Front-End com React, auxiliei na API em Django/PostgreSQL e configurei pipelines de CI/CD via GitHub Actions e Docker.",
    tags: [
      "React (Vite)",
      "Tailwind CSS",
      "Django",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
      "IBM Watsonx",
      "IBM Bob Orchestrator",
    ],
    github: "https://github.com/KrispLabs/IBM-orchestrate",
  },
  {
    title: "Open Resource - Recrutamento com agentes de IA",
    description:
      "Plataforma de recrutamento e orquestração de talentos com inteligência artificial (IA) integrada, projetada para otimizar a avaliação de candidatos, os fluxos de trabalho de recrutamento e a inteligência contextual de contratação.",
    tags: [
      "React (Vite)",
      "Figma (Design Tokens)",
      "CSS Modules",
      "APIs REST",
      "Python",
      "Tailwind CSS",
      "TypeScript",
    ],
    github: "https://github.com/krisplabs/open-resource",
    live: "https://open-resource-hr.vercel.app/login",
  },
  {
    title: "FinFreela - Educador financeiro inteligente",
    description:
      "Aplicação interativa focada em educação financeira desenvolvida em React. Conta com gerenciamento de estados dinâmicos para controle de fluxos de caixa, interface intuitiva e gráficos focados na experiência do usuário.",
    tags: ["JavaScript", "LocalStorage", "React (Vite)", "CSS Modules"],
    github: "https://github.com/alananjos06/educador-financeiro-inteligente",
    live: "https://alananjos06.github.io/educador-financeiro-inteligente/",
  },
];
