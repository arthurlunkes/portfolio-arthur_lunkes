import { SkillGroup } from '../interfaces/content';

/**
 * Skills agrupadas. Para adicionar, inclua uma string na lista do grupo
 * ou adicione um novo grupo ao array.
 */
export const skills: SkillGroup[] = [
  {
    title: { pt: 'Frontend', en: 'Frontend' },
    skills: ['Vue.js', 'React', 'TypeScript', 'JavaScript', 'SASS/SCSS', 'HTML5'],
  },
  {
    title: { pt: 'Backend', en: 'Backend' },
    skills: ['Node.js', 'NestJS', 'GraphQL', 'Spring Boot', 'FastAPI', 'REST APIs'],
  },
  {
    title: { pt: 'Bancos de Dados', en: 'Databases' },
    skills: ['PostgreSQL', 'MySQL'],
  },
  {
    title: { pt: 'DevOps & Infra', en: 'DevOps & Infra' },
    skills: ['Docker', 'NGINX', 'CI/CD', 'Linux', 'VMware', 'Proxmox', 'Zabbix', 'Grafana', 'Datadog'],
  },
  {
    title: { pt: 'Linguagens', en: 'Languages' },
    skills: ['TypeScript', 'JavaScript', 'Python', 'Go', 'Dart', 'Java', 'C++'],
  },
  {
    title: { pt: 'Mobile', en: 'Mobile' },
    skills: ['Flutter', 'React Native'],
  },
];
