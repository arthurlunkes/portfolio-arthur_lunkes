# Arthur Lunkes — Portfolio

Personal portfolio of **Arthur Lunkes**, a fullstack developer (Node.js, Vue, GraphQL,
PostgreSQL, DevOps). A single-page application built with React, TypeScript and SASS,
featuring a **bilingual (PT/EN)** interface, a **dark/light theme**, and a fully
**data-driven** content layer so new projects, jobs, skills or certificates can be added
by editing a single file — no components to touch.

🌐 **Live:** [dev.arthurlunkes.com.br](https://dev.arthurlunkes.com.br)

## Overview

- **Bilingual (PT/EN)** — language toggle in the navbar, persisted in `localStorage`.
- **Dark / light theme** — dark by default, techie/dev aesthetic with neon accents and a monospace touch.
- **Responsive** — mobile-first, no horizontal overflow, collapsible mobile menu.
- **Data-driven & scalable** — all content lives in typed files under `src/data/`.
- **Contact form without a backend** — sends the message via WhatsApp (`wa.me`) or email (`mailto`).
- **Sections** — Hero, About, Experience (timeline), Projects, Skills, Education & Certificates, Contact.

## Tech Stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [SASS / SCSS](https://sass-lang.com/) with design tokens and CSS custom properties for theming
- [Create React App](https://create-react-app.dev/) (react-scripts)
- Deploy: GitHub Actions (SSH) + NGINX serving the static build

## Project Structure

```
src/
├── contexts/          # ThemeContext + LanguageContext (React Context)
├── data/              # ← content lives here (edit these to update the site)
│   ├── profile.ts     #   name, title, summary, links, photo
│   ├── experience.ts  #   jobs
│   ├── projects.ts    #   projects (featured ones first)
│   ├── skills.ts      #   skill groups
│   ├── certificates.ts#   certificates (fill in when available)
│   ├── education.ts   #   education
│   └── ui.ts          #   static UI labels (PT/EN)
├── interfaces/        # content + language types
├── components/
│   ├── ui/            # Section, SectionTitle, Card, Tag
│   ├── layout/        # Navbar, Footer
│   └── sections/      # Hero, About, Experience, Projects, Skills, Education, Contact
├── styles/            # SCSS: base tokens/theme/mixins + per-component partials
└── main/App.tsx       # page composition
```

## Editing content

All content is bilingual via `LocalizedText = { pt: string; en: string }`. To update the
site you almost never edit a component — just the data files:

| I want to add / change...      | Edit                          |
| ------------------------------ | ----------------------------- |
| A project                      | `src/data/projects.ts` (`featured: true` shows it first) |
| A job / experience             | `src/data/experience.ts`      |
| A skill or skill group         | `src/data/skills.ts`          |
| A certificate                  | `src/data/certificates.ts`    |
| Education                      | `src/data/education.ts`       |
| Name, title, summary, links    | `src/data/profile.ts`         |
| Section titles / button labels | `src/data/ui.ts`              |

**Profile photo:** drop the file into `public/` (e.g. `public/avatar.jpg`) and set
`photo: '/avatar.jpg'` in `src/data/profile.ts`. Same idea for the CV via `links.cv`.

**Theme colors:** `src/styles/base/_thema.scss`; spacing/fonts/breakpoints in
`src/styles/base/_tokens.scss`.

## Running locally

```bash
npm install
npm start          # http://localhost:3000
```

Build for production:

```bash
npm run build      # outputs to ./build
```

> Note: this repo carries a Yarn 1 lockfile. If your local `yarn` is on Yarn 2+/Corepack,
> prefer `npm` (as above) or pin Yarn 1 to avoid lockfile errors.

## Deployment

Push to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which connects to the server over SSH, pulls the latest code, runs `npm run build`, and
ensures the NGINX site config is installed and reloaded. NGINX serves the static `build/`
folder ([`deploy/nginx/dev.arthurlunkes.com.br.conf`](deploy/nginx/dev.arthurlunkes.com.br.conf)).

Required GitHub configuration:

- **Variables:** `SSH_HOST`, `SSH_USER`, `SSH_PORT`
- **Secrets:** `SSH_PRIVATE_KEY`

On the server the project is expected at `/root/portfolio-arthur_lunkes`. For HTTPS, run
`sudo certbot --nginx -d dev.arthurlunkes.com.br` once.
