/**
 * Tipos centrais do conteúdo do portfólio.
 * Todo texto exibível é bilíngue (LocalizedText). Para adicionar conteúdo,
 * basta editar os arrays em `src/data/` — nenhum componente precisa mudar.
 */

/** Texto localizado em Português e Inglês. */
export interface LocalizedText {
  pt: string;
  en: string;
}

/** Links de contato/sociais do perfil. */
export interface ProfileLinks {
  github: string;
  linkedin: string;
  email: string;
  /** Número no formato internacional só com dígitos, ex.: 5546991100092 */
  whatsapp: string;
  /** Caminho para o PDF do currículo (opcional). */
  cv?: string;
}

/** Dados principais do topo (Hero) e rodapé. */
export interface Profile {
  name: string;
  title: LocalizedText;
  summary: LocalizedText;
  location: LocalizedText;
  /** Caminho da foto/avatar. Deixe vazio para exibir um placeholder. */
  photo?: string;
  links: ProfileLinks;
}

/** Um emprego/experiência profissional. */
export interface Job {
  company: string;
  role: LocalizedText;
  /** Período legível, ex.: 'set 2025 — atual'. */
  period: LocalizedText;
  location: string;
  /** Bullets de responsabilidades/realizações. */
  bullets: LocalizedText[];
  /** Marca a experiência atual (destaque visual). */
  current?: boolean;
}

/** Um projeto (geralmente um repositório do GitHub). */
export interface Project {
  name: string;
  description: LocalizedText;
  /** Tags de tecnologia, ex.: ['Vue', 'GraphQL', 'NestJS']. */
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  /** Caminho da imagem/thumbnail. Deixe vazio para placeholder. */
  image?: string;
  /** Projetos em destaque aparecem primeiro. */
  featured?: boolean;
}

/** Um grupo de skills, ex.: 'Backend' -> ['Node.js', 'NestJS']. */
export interface SkillGroup {
  title: LocalizedText;
  skills: string[];
}

/** Um certificado. */
export interface Certificate {
  title: LocalizedText;
  issuer: string;
  date: string;
  url?: string;
  image?: string;
}

/** Uma formação acadêmica. */
export interface Education {
  institution: string;
  course: LocalizedText;
  period: string;
}
