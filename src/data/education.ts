import { Education } from '../interfaces/content';

/**
 * Formação acadêmica (mais recente primeiro).
 * Para adicionar, insira um novo objeto no array.
 */
export const education: Education[] = [
  {
    institution: 'Centro Universitário Mater Dei (Unimater)',
    course: {
      pt: 'Bacharelado em Sistemas de Informação',
      en: "Bachelor's in Information Systems",
    },
    period: '2022 — 2027',
  },
  {
    institution: 'Colégio Estadual de Pato Branco (CEPB)',
    course: {
      pt: 'Técnico em Informática (integrado ao ensino médio)',
      en: 'Technical degree in IT (integrated with high school)',
    },
    period: '2017 — 2020',
  },
];
