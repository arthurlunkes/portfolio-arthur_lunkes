import { LocalizedText } from '../interfaces/content';

/**
 * Textos estáticos da interface (labels de seção, botões, etc).
 * Centralizados aqui para manter tudo bilíngue e fácil de ajustar.
 */
export const ui: Record<string, LocalizedText> = {
  // Navbar
  navAbout: { pt: 'Sobre', en: 'About' },
  navExperience: { pt: 'Experiência', en: 'Experience' },
  navProjects: { pt: 'Projetos', en: 'Projects' },
  navSkills: { pt: 'Skills', en: 'Skills' },
  navEducation: { pt: 'Formação', en: 'Education' },
  navContact: { pt: 'Contato', en: 'Contact' },
  toggleThemeAria: { pt: 'Alternar tema', en: 'Toggle theme' },
  toggleMenuAria: { pt: 'Abrir menu', en: 'Open menu' },

  // Hero
  heroGreeting: { pt: 'Olá, eu sou', en: "Hi, I'm" },
  heroCtaProjects: { pt: 'Ver projetos', en: 'View projects' },
  heroCtaContact: { pt: 'Entrar em contato', en: 'Get in touch' },
  heroDownloadCv: { pt: 'Baixar CV', en: 'Download CV' },
  photoPlaceholder: { pt: 'Sua foto aqui', en: 'Your photo here' },

  // Sections titles/subtitles
  aboutTitle: { pt: 'Sobre mim', en: 'About me' },
  experienceTitle: { pt: 'Experiência', en: 'Experience' },
  experienceSubtitle: { pt: 'Minha trajetória profissional', en: 'My professional journey' },
  projectsTitle: { pt: 'Projetos', en: 'Projects' },
  projectsSubtitle: { pt: 'Uma seleção do que já construí', en: 'A selection of what I have built' },
  skillsTitle: { pt: 'Skills & Tecnologias', en: 'Skills & Technologies' },
  educationTitle: { pt: 'Formação', en: 'Education' },
  certificatesTitle: { pt: 'Certificados', en: 'Certificates' },
  certificatesEmpty: {
    pt: 'Em breve — certificados serão adicionados aqui.',
    en: 'Coming soon — certificates will be added here.',
  },
  currentBadge: { pt: 'Atual', en: 'Current' },

  // Projects card
  viewCode: { pt: 'Código', en: 'Code' },
  viewLive: { pt: 'Ver online', en: 'Live' },

  // Contact
  contactTitle: { pt: 'Vamos conversar', en: "Let's talk" },
  contactSubtitle: {
    pt: 'Me mande uma mensagem por WhatsApp ou e-mail.',
    en: 'Send me a message via WhatsApp or email.',
  },
  formName: { pt: 'Seu nome', en: 'Your name' },
  formEmail: { pt: 'Seu e-mail (opcional)', en: 'Your email (optional)' },
  formMessage: { pt: 'Sua mensagem', en: 'Your message' },
  formSendWhatsapp: { pt: 'Enviar no WhatsApp', en: 'Send via WhatsApp' },
  formSendEmail: { pt: 'Enviar por e-mail', en: 'Send via email' },
  formErrorMessage: {
    pt: 'Escreva uma mensagem antes de enviar.',
    en: 'Please write a message before sending.',
  },

  // Footer
  footerBuilt: { pt: 'Feito com React & TypeScript', en: 'Built with React & TypeScript' },
  footerRights: { pt: 'Todos os direitos reservados.', en: 'All rights reserved.' },
};
