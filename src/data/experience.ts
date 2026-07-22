import { Job } from '../interfaces/content';

/**
 * Experiência profissional (mais recente primeiro).
 * Para adicionar um emprego, basta inserir um novo objeto no array.
 */
export const experience: Job[] = [
  {
    company: 'SINNCTECH',
    role: { pt: 'Desenvolvedor Fullstack Pleno II', en: 'Fullstack Developer (Mid II)' },
    period: { pt: 'jun 2026 — atual', en: 'Jun 2026 — Present' },
    location: 'Pato Branco, PR',
    current: true,
    bullets: [
      {
        pt: 'Evolução de features críticas em Node.js, GraphQL, Vue.js e PostgreSQL',
        en: 'Evolution of critical features in Node.js, GraphQL, Vue.js and PostgreSQL',
      },
      {
        pt: 'Participação em decisões de arquitetura e revisão de código do time',
        en: 'Involvement in architecture decisions and team code reviews',
      },
      {
        pt: 'Automação de deploys, observabilidade e tuning de performance em produção',
        en: 'Deploy automation, observability and production performance tuning',
      },
    ],
  },
  {
    company: 'SINNCTECH',
    role: { pt: 'Desenvolvedor Fullstack Pleno I', en: 'Fullstack Developer (Mid I)' },
    period: { pt: 'set 2025 — mai 2026', en: 'Sep 2025 — May 2026' },
    location: 'Pato Branco, PR',
    bullets: [
      {
        pt: 'Desenvolvimento fullstack com Node.js, GraphQL, Vue.js e PostgreSQL',
        en: 'Fullstack development with Node.js, GraphQL, Vue.js and PostgreSQL',
      },
      {
        pt: 'Otimização de banco e APIs, melhorando estabilidade e performance',
        en: 'Database and API optimization, improving stability and performance',
      },
      {
        pt: 'Configuração e manutenção de pipelines CI/CD',
        en: 'Setup and maintenance of CI/CD pipelines',
      },
      {
        pt: 'Administração de VMs e servidores Linux/Windows',
        en: 'Administration of Linux/Windows VMs and servers',
      },
      {
        pt: 'Configuração avançada de NGINX e roteamento por subdomínios',
        en: 'Advanced NGINX configuration and subdomain routing',
      },
      {
        pt: 'Implantação e monitoramento com Datadog, Zabbix e Grafana',
        en: 'Deployment and monitoring with Datadog, Zabbix and Grafana',
      },
      {
        pt: 'Documentação técnica e suporte ao time com Go e Flutter',
        en: 'Technical documentation and team support with Go and Flutter',
      },
    ],
  },
  {
    company: 'SINNCTECH',
    role: { pt: 'Desenvolvedor Fullstack Júnior IV', en: 'Fullstack Developer (Junior IV)' },
    period: { pt: 'abr 2025 — set 2025', en: 'Apr 2025 — Sep 2025' },
    location: 'Pato Branco, PR',
    bullets: [
      {
        pt: 'Desenvolvimento de novas funcionalidades em sistemas corporativos',
        en: 'Development of new features in corporate systems',
      },
      {
        pt: 'Manutenção de APIs GraphQL e rotinas de backend',
        en: 'Maintenance of GraphQL APIs and backend routines',
      },
      {
        pt: 'Ajustes de componentes Vue.js e melhorias no frontend',
        en: 'Vue.js component adjustments and frontend improvements',
      },
      {
        pt: 'Suporte ao time em processos de deploy e infraestrutura',
        en: 'Team support in deploy and infrastructure processes',
      },
    ],
  },
  {
    company: 'Router X Consultoria de Redes',
    role: {
      pt: 'Analista de Suporte Computacional — Servidores III',
      en: 'IT Support Analyst — Servers III',
    },
    period: { pt: 'jan 2024 — mar 2025', en: 'Jan 2024 — Mar 2025' },
    location: 'Chapecó, SC',
    bullets: [
      {
        pt: 'Administração de servidores Linux/Windows para provedores de internet',
        en: 'Administration of Linux/Windows servers for internet providers',
      },
      {
        pt: 'Automação de rotinas com Python (DNS, alertas, monitoramento)',
        en: 'Routine automation with Python (DNS, alerts, monitoring)',
      },
      {
        pt: 'Diagnóstico e resolução de incidentes em ambientes críticos',
        en: 'Diagnosis and resolution of incidents in critical environments',
      },
      {
        pt: 'Criação e administração de servidores: DNS, E-mail, Asterisk, Zabbix, Grafana, SpeedTest, Proxmox e VMware',
        en: 'Setup and administration of servers: DNS, Email, Asterisk, Zabbix, Grafana, SpeedTest, Proxmox and VMware',
      },
    ],
  },
  {
    company: 'Alfa Consultorias e Desenvolvimento',
    role: { pt: 'Desenvolvedor Fullstack Júnior IV', en: 'Fullstack Developer (Junior IV)' },
    period: { pt: 'ago 2023 — dez 2023', en: 'Aug 2023 — Dec 2023' },
    location: 'Pato Branco, PR',
    bullets: [
      {
        pt: 'Desenvolvimento fullstack em aplicações web e mobile',
        en: 'Fullstack development for web and mobile applications',
      },
      {
        pt: 'Manutenção, correções e criação de novos fluxos internos',
        en: 'Maintenance, fixes and creation of new internal flows',
      },
      {
        pt: 'Participação na evolução da arquitetura backend e frontend',
        en: 'Participation in evolving backend and frontend architecture',
      },
    ],
  },
  {
    company: 'Atlas Eletrodomésticos',
    role: { pt: 'Administrador/Desenvolvedor Salesforce', en: 'Salesforce Admin/Developer' },
    period: { pt: 'jun 2021 — mar 2023', en: 'Jun 2021 — Mar 2023' },
    location: 'Pato Branco, PR',
    bullets: [
      { pt: 'Integração Salesforce ↔ SAP', en: 'Salesforce ↔ SAP integration' },
      {
        pt: 'Automação de processos e criação de fluxos, telas e componentes personalizados',
        en: 'Process automation and creation of custom flows, screens and components',
      },
      {
        pt: 'Controle de usuários, perfis, permissões, papéis e segurança',
        en: 'Management of users, profiles, permissions, roles and security',
      },
      {
        pt: 'Desenvolvimento de relatórios e dashboards para áreas internas',
        en: 'Development of reports and dashboards for internal teams',
      },
    ],
  },
  {
    company: 'Atlas Eletrodomésticos',
    role: { pt: 'Aprendiz de TI', en: 'IT Apprentice' },
    period: { pt: 'ago 2019 — mai 2021', en: 'Aug 2019 — May 2021' },
    location: 'Pato Branco, PR',
    bullets: [
      {
        pt: 'Suporte em computadores, impressoras e redes',
        en: 'Support for computers, printers and networks',
      },
      {
        pt: 'Instalações, formatações, permissões e manutenção em geral',
        en: 'Installations, formatting, permissions and general maintenance',
      },
    ],
  },
  {
    company: 'Vibra Foods',
    role: { pt: 'Aprendiz de TI', en: 'IT Apprentice' },
    period: { pt: 'ago 2017 — fev 2019', en: 'Aug 2017 — Feb 2019' },
    location: 'Pato Branco, PR',
    bullets: [
      {
        pt: 'Suporte a usuários, instalação de softwares, manutenção e redes',
        en: 'User support, software installation, maintenance and networks',
      },
      {
        pt: 'Formatação de computadores e otimização de rotinas de TI',
        en: 'Computer formatting and optimization of IT routines',
      },
      { pt: 'Backup de servidores via fita DAT', en: 'Server backups via DAT tape' },
    ],
  },
];
