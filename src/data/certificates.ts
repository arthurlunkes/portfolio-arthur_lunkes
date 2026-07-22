import { Certificate } from '../interfaces/content';

/**
 * Certificados (mais recentes primeiro).
 *
 * COMO ADICIONAR: coloque o PDF em `public/certificates/` (nome em kebab-case,
 * sem acentos nem espaços) e adicione um item aqui apontando `url` para ele.
 * `image` é opcional — se informada, aparece como thumbnail no card.
 */
export const certificates: Certificate[] = [
  {
    title: { pt: 'Introduction to NGINX', en: 'Introduction to NGINX' },
    issuer: 'Udemy',
    date: '06/2025',
    mode: 'remote',
    url: '/certificates/introduction-to-nginx-2025.pdf',
  },
  {
    title: { pt: 'Festival Agile Trends 2023', en: 'Agile Trends Festival 2023' },
    issuer: 'Agile Trends',
    date: '11/2023',
    mode: 'in-person',
    place: 'Pato Branco, PR',
    url: '/certificates/festival-agile-trends-2023.pdf',
  },
  {
    title: { pt: 'Introduction to IoT', en: 'Introduction to IoT' },
    issuer: 'Cisco Networking Academy',
    date: '09/2023',
    mode: 'remote',
    url: '/certificates/cisco-introduction-to-iot-2023.pdf',
  },
  {
    title: { pt: 'Python Essentials 1', en: 'Python Essentials 1' },
    issuer: 'Cisco Networking Academy / OpenEDG Python Institute',
    date: '05/2023',
    mode: 'remote',
    url: '/certificates/python-essentials-1-2023.pdf',
  },
  {
    title: {
      pt: 'XIX Latinoware — Congresso Latino-Americano de Software Livre e Tecnologias Abertas',
      en: '19th Latinoware — Latin American Congress on Free Software and Open Technologies',
    },
    issuer: 'PTI / Itaipu Binacional',
    date: '11/2022',
    mode: 'in-person',
    place: 'Foz do Iguaçu, PR',
    url: '/certificates/latinoware-2022.pdf',
  },
  {
    title: { pt: 'Hackathon Atlas', en: 'Atlas Hackathon' },
    issuer: 'Sebrae/PR',
    date: '10/2022',
    mode: 'in-person',
    place: 'Pato Branco, PR',
    url: '/certificates/hackathon-atlas-2022.pdf',
  },
  {
    title: {
      pt: 'Salesforce Apex: introdução completa para iniciantes',
      en: 'Salesforce Apex: The Complete Introduction for Beginners',
    },
    issuer: 'Udemy',
    date: '10/2022',
    mode: 'remote',
    url: '/certificates/salesforce-apex-2022.pdf',
  },
  {
    title: {
      pt: 'Semana Acadêmica de Sistemas de Informação 2022',
      en: 'Information Systems Academic Week 2022',
    },
    issuer: 'UNIMATER — Centro Universitário Mater Dei',
    date: '09/2022',
    mode: 'in-person',
    place: 'Pato Branco, PR',
    url: '/certificates/semana-academica-si-unimater-2022.pdf',
  },
  {
    title: { pt: 'Startup Weekend Pato Branco', en: 'Startup Weekend Pato Branco' },
    issuer: 'Sebrae/PR',
    date: '08/2022',
    mode: 'in-person',
    place: 'Pato Branco, PR',
    url: '/certificates/startup-weekend-pato-branco-2022.pdf',
  },
  {
    title: {
      pt: 'Trailhead Virtual Bootcamp for New Admins',
      en: 'Trailhead Virtual Bootcamp for New Admins',
    },
    issuer: 'Salesforce Trailhead Academy',
    date: '08/2022',
    mode: 'remote',
    url: '/certificates/trailhead-bootcamp-new-admins-2022.pdf',
  },
  {
    title: {
      pt: 'TDC 2022 Innovation — Trilha Stadium (quarta)',
      en: 'TDC 2022 Innovation — Stadium Track (Wednesday)',
    },
    issuer: 'The Developer’s Conference',
    date: '06/2022',
    mode: 'in-person',
    place: 'Florianópolis, SC',
    url: '/certificates/tdc-2022-innovation-quarta.pdf',
  },
  {
    title: {
      pt: 'TDC 2022 Innovation — Trilha Stadium (quinta)',
      en: 'TDC 2022 Innovation — Stadium Track (Thursday)',
    },
    issuer: 'The Developer’s Conference',
    date: '06/2022',
    mode: 'in-person',
    place: 'Florianópolis, SC',
    url: '/certificates/tdc-2022-innovation-quinta.pdf',
  },
  {
    title: {
      pt: 'TDC 2022 Innovation — Trilha Stadium (sexta)',
      en: 'TDC 2022 Innovation — Stadium Track (Friday)',
    },
    issuer: 'The Developer’s Conference',
    date: '06/2022',
    mode: 'in-person',
    place: 'Florianópolis, SC',
    url: '/certificates/tdc-2022-innovation-sexta.pdf',
  },
  {
    title: {
      pt: 'Primeira Oficina de Drones — Projeto ATOMIC',
      en: 'First Drone Workshop — ATOMIC Project',
    },
    issuer: 'UNIMATER — Centro Universitário Mater Dei',
    date: '05/2022',
    mode: 'in-person',
    place: 'Pato Branco, PR',
    url: '/certificates/oficina-de-drones-atomic-2022.pdf',
  },
  {
    title: {
      pt: 'Salesforce para Iniciantes',
      en: 'Salesforce for Beginners',
    },
    issuer: 'Souforce.cloud',
    date: '09/2021',
    mode: 'remote',
    url: '/certificates/salesforce-para-iniciantes-2021.pdf',
  },
  {
    title: {
      pt: 'Introdução à Inovação Corporativa',
      en: 'Introduction to Corporate Innovation',
    },
    issuer: 'AEVO',
    date: '07/2021',
    mode: 'remote',
    url: '/certificates/introducao-a-inovacao-corporativa-2021.pdf',
  },
  {
    title: {
      pt: 'Inteligência Emocional | Coaching de Emoções',
      en: 'Emotional Intelligence | Emotion Coaching',
    },
    issuer: 'Udemy',
    date: '07/2021',
    mode: 'remote',
    url: '/certificates/inteligencia-emocional-2021.pdf',
  },
  {
    title: { pt: 'Desenhe o Seu Futuro', en: 'Design Your Future' },
    issuer: 'Sebrae/PR',
    date: '10/2019',
    mode: 'in-person',
    place: 'Pato Branco, PR',
    url: '/certificates/desenhe-o-seu-futuro-2019.pdf',
  },
];
