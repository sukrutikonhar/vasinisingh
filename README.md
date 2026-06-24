# Vasini Singh Portfolio — Frontend Build

[![Live Demo](https://img.shields.io/badge/demo-live-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vasinisingh.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A production-grade portfolio website I designed and built for **Vasini Singh**, a Senior Product Designer. This repo documents the **frontend engineering work** — not the design case studies themselves, which belong to the client.

**My role:** Full-stack frontend developer — architecture, component system, routing, performance, SEO, contact integration, responsive implementation, and Vercel deployment.

**Client:** [Vasini Singh](https://vasinisingh.vercel.app/) — Senior Product Designer (content, UX direction, case study narratives, visual design)

**What I delivered:** A fast, statically generated Next.js application that turns a designer's scattered Figma files and PDFs into a cohesive hiring asset — 12 routes, 130+ components, 5 long-form case studies, an interactive experience timeline, and a working contact funnel — deployed to production on Vercel.

---

## Live Demo

**[https://vasinisingh.vercel.app/](https://vasinisingh.vercel.app/)**

---

## Screenshots

> Add screenshots to `/public/images/readme/` and replace the placeholders below.

| Homepage | Case Study |
| --- | --- |
| ![Homepage hero and selected work](./public/images/readme/homepage.png) | ![Case study detail page](./public/images/readme/case-study.png) |

| About — Experience Timeline | Contact |
| --- | --- |
| ![Interactive experience timeline](./public/images/readme/about-timeline.png) | ![Contact form and info](./public/images/readme/contact.png) |

---

## What I Built

### Multi-page portfolio application
Implemented the full site from a designer's specifications: homepage, about, projects index, contact, blogs, and five individual case study routes — each with its own section composition and SEO metadata.

### Reusable case study engine
Built a composable architecture so each project (B2B SaaS, ESG compliance, clinical UX, HR tech, EdTech) can tell a different story without forking the layout. Shared primitives (`CaseStudyHero`, `PrevNextProject`, `MinimalLayout`) keep five narratives structurally consistent while allowing per-project section assembly.

### Interactive experience timeline
Engineered a master–detail About page component: company selection, project drill-down, live product / MVP status badges, smooth scroll with `prefers-reduced-motion` fallback, and mobile-friendly layout.

### Content-driven data layer
Separated presentation from content with typed TypeScript modules (`projects.ts`, `experience-timeline.ts`). The client can update portfolio cards, metrics, and career history in one place — changes propagate to the homepage grid, projects index, and case study pages automatically.

### Production contact form
Integrated Web3Forms with client-side validation, async submission, loading states, and success/error feedback — no custom backend required.

### Performance-first static delivery
All 12 routes pre-render at build time. Images optimized via `next/image` and WebP assets. Fonts loaded through `next/font`. Shared JS baseline ~129 kB.

---

## Client Context

The site showcases Vasini's product design work across high-stakes domains. I implemented the frontend to surface her business outcomes clearly:

| Case Study | Domain | Metrics surfaced in UI |
| --- | --- | --- |
| **Arreglio** | B2B service coordination | 3× faster processing, $50K savings, 98% adoption |
| **ecoPRISM** | Enterprise ESG (ABB) | 95% task completion, 4.6/5 satisfaction, 40% time saved |
| **MockOraa** | AI interview practice | 81 SUS score, 4.45/5 CSAT, 67% confusion reduction |
| **WorkMark** | HR tech / recognition | Projected +30% recognition, −60% review prep |
| **NeuroAssist** | Clinical stroke-care UX | 8-stage flow, 4 pathways, zero dead-end states |

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| UI library | [React 19](https://react.dev/) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) |
| Icons | [Lucide React](https://lucide.dev/), [Iconify](https://iconify.design/) |
| Fonts | `next/font` — Inter (body), Space Grotesk (display) |
| Utilities | `clsx`, `tailwind-merge` |
| Build tooling | Turbopack |
| Form handling | Web3Forms REST API |
| Deployment | [Vercel](https://vercel.com/) |
| Linting | ESLint 9 + `eslint-config-next` |

---

## Architecture Overview

I structured this as a **server-first Next.js App Router** project with client components only where interactivity is required:

- **Server Components** for all route files — static generation, per-page `metadata`, minimal client JS
- **Client Components** isolated to navigation, forms, scroll animations, and the experience timeline
- **Feature-based folders** — `home/`, `about/`, `projects/{slug}/`, `contact/`, `blogs/`, `layout/`, `ui/`
- **Shared layout primitives** — consistent header, footer, case study hero, prev/next navigation
- **Typed data modules** — single source of truth for portfolio and experience content
- **Cross-cutting lib** — `createPageMetadata()`, typography tokens, `cn()` utility

### Key engineering decisions

| Decision | Why I made it |
| --- | --- |
| Static generation for all routes | Global recruiters get instant page loads with no server latency |
| Composable case study sections | Each project has unique narrative blocks without duplicating layout code |
| Typed portfolio data | Content updates stay safe — no broken cards or stale metrics across pages |
| Centralized metadata factory | Every route gets Open Graph, Twitter cards, and canonical URLs for free |
| No global state library | Local React state is sufficient; keeps bundle lean on a content site |

---

## Performance Optimizations

Verified production build (Next.js 15 + Turbopack):

| Route | First Load JS |
| --- | --- |
| `/` | 137 kB |
| `/about` | 154 kB |
| `/projects/workmark` | 145 kB |
| Shared baseline | 129 kB |

**What I implemented:**

- Full static prerendering — all 12 routes ship as pre-built HTML
- `next/image` with responsive `fill` layouts and remote pattern allowlisting
- WebP image assets throughout `/public/images`
- `next/font` for zero layout-shift font loading
- Intersection Observer scroll reveals on homepage project cards
- Global `prefers-reduced-motion` CSS + timeline scroll behavior fallback
- Turbopack for faster dev/build iteration

---

## Responsive Design

Mobile-first implementation across all breakpoints:

- Fixed header with transparent → solid scroll state; hamburger menu on mobile
- Responsive grids: `1 → 2 → 3` columns on homepage; stacked heroes on small screens
- Fluid typography via shared tokens (`h1Page`, `h2Page`, `h2Section`)
- CSS custom properties for section/container padding that scale with viewport
- Touch-friendly CTAs and form fields on mobile

---

## Accessibility

Built-in from the start, not bolted on later:

- Semantic HTML landmarks (`header`, `main`, `nav`, `section`)
- `lang="en"` on document root
- Form labels with `htmlFor` associations
- `aria-label` on mobile menu toggle; `aria-labelledby` on timeline section
- `prefers-reduced-motion: reduce` disables animations globally
- Focus-visible handling on interactive SVG elements in case study visuals

---

## Engineering Challenges I Solved

### 1. Five different case studies, one component system
Each case study needed unique sections (wireframes, personas, IA diagrams, metrics dashboards) but shared visual language. I built flexible shared components (`CaseStudyHero` accepts metrics, badges, YouTube embeds, prototype links) and composed each route from only the sections that story needs.

### 2. Scannable career history without page reloads
The Experience Timeline V2 required a two-panel master–detail UI with company switching, project selection, live-status tags, and accessible scroll behavior — all in a single About page without routing overhead.

### 3. Content that stays in sync everywhere
Portfolio data powers the homepage selected-work grid, the projects index, and individual case study metadata. One typed edit in `projects.ts` updates all surfaces — preventing the common portfolio bug of inconsistent copy across pages.

### 4. Contact capture without backend infrastructure
Integrated Web3Forms so the client's inbound leads reach her inbox with validated form UX (loading, success, error states) and zero server maintenance.

### 5. SEO for a personal brand domain
Built `createPageMetadata()` to generate title, description, Open Graph, Twitter card, and canonical URL for every route — so shared case study links render correctly on LinkedIn and in search results.

---

## What I Learned

- **Server/client boundaries in App Router** — pushing interactivity to leaf components materially reduced bundle size on content-heavy routes
- **Content-driven architecture** — data modules + composition scales better than monolithic page files as case studies grow
- **Design-to-code collaboration** — implementing a designer's system in Tailwind tokens and shared primitives without a component library dependency
- **Static-first client delivery** — pre-rendering every route gives predictable global performance without ops overhead
- **Accessibility as a build requirement** — reduced-motion and semantic structure are cheaper upfront than retrofitting

---

## Future Improvements

- Move Web3Forms `access_key` to a Vercel environment variable
- Add `sitemap.xml` and `robots.txt` via Next.js metadata routes
- Set `next/image` `priority` on above-the-fold hero images for faster LCP
- Add JSON-LD structured data (`Person`, `CreativeWork`)
- Introduce MDX or a headless CMS so the client can update copy without redeploying
- Add Playwright smoke tests for navigation, contact form, and case study flows
- Dynamic `[slug]` blog routes with RSS feed

---

## Installation

### Prerequisites

- Node.js 20+
- npm (or pnpm / yarn)

### Setup

```bash
git clone https://github.com/sukrutikonhar/vasinisingh.git
cd vasinisingh
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server with Turbopack |
| `npm run build` | Production build (static generation) |
| `npm run start` | Serve production build locally |
| `npm run lint` | ESLint across the project |

---

## Project Structure

```
vasini-portfolio/
├── public/
│   └── images/                  # Client assets (WebP/PNG)
├── src/
│   ├── app/                     # Next.js App Router — routes & metadata
│   │   ├── layout.tsx
│   │   ├── globals.css          # Design tokens, animations, a11y
│   │   ├── page.tsx             # Homepage
│   │   ├── about/page.tsx
│   │   ├── blogs/page.tsx
│   │   ├── contact/page.tsx
│   │   const └── projects/         # 5 case study routes + index
│   ├── components/
│   │   ├── about/               # Experience timeline v2
│   │   ├── home/                # Hero, grid, testimonials
│   │   ├── layout/              # Header, footer, MinimalLayout
│   │   ├── projects/            # Shared + per-project case study sections
│   │   └── ui/                  # Button, Logo, ProjectEyebrow
│   ├── data/
│   │   ├── projects.ts          # Portfolio definitions
│   │   └── experience-timeline.ts
│   └── lib/
│       ├── metadata.ts          # SEO helpers
│       ├── typography.ts        # Type scale tokens
│       └── utils.ts             # cn() utility
├── next.config.ts
├── package.json
└── tsconfig.json
```

**Scale:** 12 static routes · 130+ React components · 5 case studies · 2 typed data modules

---

## Deployment

| Detail | Value |
| --- | --- |
| Platform | Vercel |
| Output | Fully static HTML for all routes |
| Live URL | [vasinisingh.vercel.app](https://vasinisingh.vercel.app/) |
| Deploy trigger | Push to `master` |

```bash
npm run build
npm run start
```

No Docker, database, or server runtime — edge-static frontend only.

---

## Skills Demonstrated (My Work)

| Skill | How this repo proves it |
| --- | --- |
| **React** | 130+ components; hooks for forms, scroll, intersection observers, timeline state |
| **Next.js** | App Router, Server Components, SSG, `next/image`, `next/font`, per-route metadata |
| **TypeScript** | Typed data models and props interfaces across the codebase |
| **Component Architecture** | Feature folders, shared primitives, composable case study pages |
| **State Management** | Appropriate local React state — no unnecessary global store |
| **API Integration** | Web3Forms REST with async fetch, validation, and UI feedback states |
| **Responsive Design** | Mobile-first Tailwind, adaptive nav, fluid typography |
| **Performance** | Static prerender, WebP images, ~129 kB shared JS baseline |
| **SEO** | Open Graph, Twitter cards, canonical URLs on every route |
| **Deployment** | Vercel CI/CD, verified production build |
| **Design Collaboration** | Translated a designer's vision into a maintainable, production codebase |

---

## Why This Project Matters (For Recruiters)

This repo is evidence of **shipping real client work to production**, not a tutorial clone:

1. **End-to-end delivery.** I took a designer's portfolio from concept to a live Vercel deployment with working contact capture — the full client project lifecycle.

2. **Architecture at scale.** 130+ components organized by feature, not a single-page throwaway. Case studies compose from shared primitives; content lives in typed modules.

3. **Production discipline.** Static generation, SEO metadata, accessibility defaults, performance budgets, and error-handled form submission — the same standards expected on product teams.

4. **Complex UI without over-engineering.** Interactive timeline, scroll animations, multi-route case studies — implemented with intentional server/client splits, not by adding Redux or a CMS prematurely.

5. **Maintainable for the client.** The content layer is separated from components so the site owner can grow case studies and update career data without restructuring the app.

For hiring managers evaluating frontend engineers: this is a **client portfolio build** that demonstrates I can translate design intent into a performant, typed, deployable Next.js application.

---

## Repository Metadata (for GitHub)

### Suggested repository description

```
Client portfolio build — Next.js 15, React 19, TypeScript, 5 case study
```

### Suggested topics / tags

```
nextjs, react, typescript, tailwindcss, frontend, portfolio-website, client-project, vercel, app-router, static-site, component-architecture, seo, accessibility, web-development
```

### Additional badges

```markdown
[![Built for Client](https://img.shields.io/badge/project-client_portfolio-blue?style=flat-square)]()
[![Vercel](https://img.shields.io/badge/deployed-Vercel-black?style=flat-square&logo=vercel)](https://vasinisingh.vercel.app/)
[![Static Site](https://img.shields.io/badge/SSG-12_routes-success?style=flat-square)]()
```

---

## Credits

| Role | Person |
| --- | --- |
| **Developer** | [Sukruti Konhar](https://github.com/sukrutikonhar) |
| **Client / Designer** | [Vasini Singh](https://vasinisingh.vercel.app/) |

Design content, case study narratives, and visual direction belong to the client. Frontend architecture, implementation, and deployment are my work.

---

*Built with Next.js 15, React 19, and TypeScript. A client project showcasing production frontend engineering.*
