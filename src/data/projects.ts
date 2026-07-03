import { Project } from '../interfaces/content';

/**
 * Projetos. Os marcados com `featured: true` aparecem primeiro.
 * Para adicionar um projeto, insira um novo objeto no array. Para exibir uma
 * imagem, coloque o arquivo em `public/projects/` e defina `image: '/projects/nome.png'`.
 */
export const projects: Project[] = [
  {
    name: 'my_finances',
    description: {
      pt: 'App de gestão de finanças pessoais feito em Flutter/Dart.',
      en: 'Personal finance management app built with Flutter/Dart.',
    },
    tags: ['Flutter', 'Dart'],
    repoUrl: 'https://github.com/arthurlunkes/my_finances',
    featured: true,
  },
  {
    name: 'portfolio-decision-system',
    description: {
      pt: 'Projeto de TCC: sistema de apoio à decisão com GraphQL, NestJS e Vue.',
      en: 'Capstone (TCC) project: decision support system with GraphQL, NestJS and Vue.',
    },
    tags: ['Vue', 'GraphQL', 'NestJS', 'TypeScript'],
    repoUrl: 'https://github.com/arthurlunkes/portfolio-decision-system',
    featured: true,
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
    name: 'clipsi',
    description: {
      pt: 'Aplicação web desenvolvida com Vue.',
      en: 'Web application built with Vue.',
    },
    tags: ['Vue', 'JavaScript'],
    repoUrl: 'https://github.com/arthurlunkes/clipsi',
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
    name: 'Project_Contas_A_Receber',
    description: {
      pt: 'Aplicação fullstack de contas a receber com Spring Boot, React e PostgreSQL.',
      en: 'Fullstack accounts receivable app with Spring Boot, React and PostgreSQL.',
    },
    tags: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
    repoUrl: 'https://github.com/arthurlunkes/Project_Contas_A_Receber',
    featured: true,
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
    name: 'learning-NGINX',
    description: {
      pt: 'Estudos de NGINX com Docker: load balancing e reverse proxy.',
      en: 'NGINX studies with Docker: load balancing and reverse proxy.',
    },
    tags: ['NGINX', 'Docker'],
    repoUrl: 'https://github.com/arthurlunkes/learning-NGINX',
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
];
