import { Profile } from '../interfaces/content';

/**
 * Dados principais do perfil. Para trocar a foto, coloque o arquivo em
 * `public/` (ex.: public/avatar.jpg) e defina `photo: '/avatar.jpg'`.
 */
export const profile: Profile = {
  name: 'Arthur Lunkes',
  title: {
    pt: 'Desenvolvedor Fullstack — Node.js · Vue · GraphQL · PostgreSQL · DevOps',
    en: 'Fullstack Developer — Node.js · Vue · GraphQL · PostgreSQL · DevOps',
  },
  summary: {
    pt: 'Desenvolvedor fullstack com experiência profissional em TI desde os 15 anos. Trabalho com Node.js, Vue.js, GraphQL, PostgreSQL, Docker, NGINX e infraestrutura Linux. Gosto de resolver problemas difíceis, otimizar sistemas e entregar soluções estáveis em produção — do backend à infraestrutura, DevOps e arquitetura distribuída.',
    en: 'Fullstack developer working professionally in IT since the age of 15. I work with Node.js, Vue.js, GraphQL, PostgreSQL, Docker, NGINX and Linux infrastructure. I enjoy solving hard problems, optimizing systems and shipping stable production solutions — from backend to infrastructure, DevOps and distributed architecture.',
  },
  location: {
    pt: 'Pato Branco, Paraná — Brasil',
    en: 'Pato Branco, Paraná — Brazil',
  },
  photo: '/avatar.jpg', // deixe vazio para exibir o placeholder; ex.: '/avatar.jpg'
  links: {
    github: 'https://github.com/arthurlunkes',
    linkedin: 'https://www.linkedin.com/in/arthurlunkes',
    email: 'arthur.lunkes2017@gmail.com',
    instagram: 'https://www.instagram.com/arthur_lunkes',
    whatsapp: '5546991100092',
    cv: '/curriculo-arthur-lunkes.pdf', // ex.: '/curriculo-arthur-lunkes.pdf' (coloque o PDF em public/)
  },
};
