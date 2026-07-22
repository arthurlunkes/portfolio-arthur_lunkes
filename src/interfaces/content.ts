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
  /** Mesmo número formatado para exibição, ex.: '+55 46 99110-0092' */
  whatsappDisplay: string;
  instagram: string;
  /** Perfil público do Trailhead (Salesforce). */
  trailhead?: string;
  /** Caminho para o PDF do currículo (opcional). */
  cv?: string;
}

/** Resumo do perfil Trailhead (Salesforce). */
export interface TrailheadProfile {
  url: string;
  /** Rank atual, ex.: 'Ranger'. */
  rank: string;
  badges: number;
  points: number;
  trails: number;
  superbadges: number;
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
  /** Estatísticas do Trailhead exibidas na seção de formação. */
  trailhead?: TrailheadProfile;
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
  /** Nome amigável exibido no card/modal. Se ausente, usa `name`. */
  title?: string;
  description: LocalizedText;
  /** Texto longo exibido no modal de detalhes (opcional). */
  longDescription?: LocalizedText;
  /** Bullets de destaques/funcionalidades exibidos no modal. */
  highlights?: LocalizedText[];
  /** Tags de tecnologia, ex.: ['Vue', 'GraphQL', 'NestJS']. */
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  /** Caminho da imagem/thumbnail. Deixe vazio para placeholder. */
  image?: string;
  /**
   * Imagens adicionais da galeria do modal (`/projects/...`). A `image` já entra
   * como primeira automaticamente — liste aqui só as extras.
   */
  images?: string[];
  /** Ano ou período do projeto, ex.: '2024'. */
  year?: string;
  /** Projetos em destaque aparecem primeiro. */
  featured?: boolean;
}

/** Um grupo de skills, ex.: 'Backend' -> ['Node.js', 'NestJS']. */
export interface SkillGroup {
  title: LocalizedText;
  skills: string[];
}

/** Modalidade de um certificado: presencial ou remoto/online. */
export type CertificateMode = 'in-person' | 'remote';

/** Um certificado. */
export interface Certificate {
  title: LocalizedText;
  issuer: string;
  date: string;
  /** Presencial ou remoto. */
  mode: CertificateMode;
  /** Cidade/UF do evento — obrigatório na prática quando `mode` é presencial. */
  place?: string;
  url?: string;
  image?: string;
}

/** Uma formação acadêmica. */
export interface Education {
  institution: string;
  course: LocalizedText;
  period: string;
}
