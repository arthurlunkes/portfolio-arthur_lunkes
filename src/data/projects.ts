import { Project } from '../interfaces/content';

/**
 * Projetos. Os marcados com `featured: true` aparecem primeiro.
 *
 * IMAGENS: coloque os arquivos em `public/projects/`. A `image` é a capa do card;
 * as extras vão em `images: ['/projects/clipsi-2.png', ...]` e aparecem na galeria
 * do modal (clique em "Ver detalhes"). A capa entra na galeria automaticamente.
 *
 * MODAL: `longDescription` e `highlights` só aparecem no modal de detalhes —
 * o card da grade continua mostrando apenas `description` e as tags.
 */
export const projects: Project[] = [
  {
    name: 'learning-NGINX',
    description: {
      pt: 'Estudos de NGINX com Docker: load balancing e reverse proxy.',
      en: 'NGINX studies with Docker: load balancing and reverse proxy.',
    },
    tags: ['NGINX', 'Docker'],
    repoUrl: 'https://github.com/arthurlunkes/learning-NGINX',
  },
  {
    name: 'my_finances',
    description: {
      pt: 'App de gestão de finanças pessoais feito em Flutter/Dart.',
      en: 'Personal finance management app built with Flutter/Dart.',
    },
    tags: ['Flutter', 'Dart'],
    repoUrl: 'https://github.com/arthurlunkes/my_finances',
    featured: true,
    image: '/projects/my_finances.png',
  },
  {
    name: 'portfolio-decision-system',
    title: 'Decision Portfolio',
    description: {
      pt: 'Projeto de TCC: sistema de apoio à decisão com GraphQL, NestJS e Vue.',
      en: 'Capstone (TCC) project: decision support system with GraphQL, NestJS and Vue.',
    },
    longDescription: {
      pt: 'Sistema de apoio à decisão desenvolvido como Trabalho de Conclusão de Curso. Ajuda a priorizar e comparar alternativas de portfólio de projetos a partir de critérios configuráveis, com API GraphQL em NestJS e interface em Vue.',
      en: 'Decision support system built as my capstone project. It helps prioritize and compare project portfolio alternatives using configurable criteria, with a NestJS GraphQL API and a Vue interface.',
    },
    highlights: [
      {
        pt: 'API GraphQL em NestJS com TypeScript e PostgreSQL',
        en: 'NestJS GraphQL API with TypeScript and PostgreSQL',
      },
      {
        pt: 'Interface em Vue para cadastro de critérios e comparação de alternativas',
        en: 'Vue interface for criteria setup and alternative comparison',
      },
      {
        pt: 'Deploy próprio em VPS com NGINX e subdomínio dedicado',
        en: 'Self-hosted deployment on a VPS with NGINX and a dedicated subdomain',
      },
    ],
    tags: ['Vue', 'GraphQL', 'NestJS', 'TypeScript', 'PostgreSQL'],
    repoUrl: 'https://github.com/arthurlunkes/portfolio-decision-system',
    liveUrl: 'https://tcc.arthurlunkes.com.br/login',
    featured: true,
    image: '/projects/decisionportfolio.png',
  },
  {
    name: 'MyAutomationEmbedded',
    description: {
      pt: 'Código para ESP32 (DOIT ESP32 DEVKIT V1) — automação embarcada.',
      en: 'Code for ESP32 (DOIT ESP32 DEVKIT V1) — embedded automation.',
    },
    tags: ['C++', 'ESP32', 'IoT'],
    repoUrl: 'https://github.com/arthurlunkes/MyAutomationEmbedded',
  },
  {
    name: 'mobile-home-assist',
    description: {
      pt: 'Aplicativo mobile em Flutter/Dart.',
      en: 'Mobile application built with Flutter/Dart.',
    },
    tags: ['Flutter', 'Dart'],
    repoUrl: 'https://github.com/arthurlunkes/mobile-home-assist',
  },
  {
    name: 'clipsi',
    title: 'Clipsi',
    description: {
      pt: 'Aplicação web desenvolvida com Vue.',
      en: 'Web application built with Vue.',
    },
    longDescription: {
      pt: 'Aplicação web em Vue com dashboard próprio, hospedada em VPS com NGINX e domínio dedicado. Projeto usado como laboratório de frontend, deploy e infraestrutura.',
      en: 'Vue web application with its own dashboard, hosted on a VPS with NGINX and a dedicated domain. Used as a lab for frontend, deployment and infrastructure practice.',
    },
    highlights: [
      { pt: 'Dashboard construído em Vue', en: 'Dashboard built with Vue' },
      {
        pt: 'Publicado em VPS própria com NGINX e HTTPS',
        en: 'Deployed on my own VPS with NGINX and HTTPS',
      },
    ],
    tags: ['Vue', 'JavaScript', 'NGINX'],
    repoUrl: 'https://github.com/arthurlunkes/clipsi',
    liveUrl: 'https://clipsi.arthurlunkes.com.br/dashboard',
    featured: true,
    image: '/projects/clipsi.png',
  },
  {
    name: 'dark-patterned-eye',
    description: {
      pt: 'Extensão de navegador para identificar dark patterns, com React e Plasmo.',
      en: 'Browser extension to identify dark patterns, built with React and Plasmo.',
    },
    tags: ['TypeScript', 'React', 'Plasmo'],
    repoUrl: 'https://github.com/arthurlunkes/dark-patterned-eye',
    featured: true,
  },
  {
    name: 'cantina-unimater',
    description: {
      pt: 'Software acadêmico para gestão de cantina universitária (projeto em equipe).',
      en: 'Academic software for university canteen management (team project).',
    },
    tags: ['TypeScript'],
    repoUrl: 'https://github.com/arthurlunkes/cantina-unimater',
    featured: true,
  },
  {
    name: 'ecommerce-backend',
    description: {
      pt: 'Backend de e-commerce construído com NestJS (fins educacionais).',
      en: 'E-commerce backend built with NestJS (educational).',
    },
    tags: ['TypeScript', 'NestJS'],
    repoUrl: 'https://github.com/arthurlunkes/ecommerce-backend',
  },
  {
    name: 'ecommerce-cms',
    description: {
      pt: 'Frontend de e-commerce em React + TypeScript (fins educacionais).',
      en: 'E-commerce frontend in React + TypeScript (educational).',
    },
    tags: ['TypeScript', 'React'],
    repoUrl: 'https://github.com/arthurlunkes/ecommerce-cms',
  },
  {
    name: 'Desafios_Selenium',
    description: {
      pt: 'Desafios de mineração de dados usando o framework Selenium.',
      en: 'Data mining challenges using the Selenium framework.',
    },
    tags: ['Python', 'Selenium'],
    repoUrl: 'https://github.com/arthurlunkes/Desafios_Selenium',
  },
  {
    name: 'Project_Contas_A_Receber',
    description: {
      pt: 'Aplicação fullstack de contas a receber com Spring Boot, React e PostgreSQL.',
      en: 'Fullstack accounts receivable app with Spring Boot, React and PostgreSQL.',
    },
    tags: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
    repoUrl: 'https://github.com/arthurlunkes/Project_Contas_A_Receber',
    featured: true,
  },
];
