# Vasini Singh — Senior Product Designer Portfolio

[![Live Demo](https://img.shields.io/badge/demo-live-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vasinisingh.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A production-grade personal portfolio that turns eight years of product design work into a credible, conversion-focused hiring asset. Built for recruiters, hiring managers, and design leaders who need to evaluate craft, business impact, and execution quality in under five minutes — without sacrificing the depth required for a serious case study review.

**Who it is for:** SaaS and enterprise teams hiring senior product designers, and stakeholders evaluating design leadership for complex B2B, healthcare, compliance, and AI-adjacent products.

**Business problem it solves:** Strong designers often lose opportunities because their work lives in scattered PDFs, Figma links, and slide decks that fail to communicate outcomes. This site centralizes proof of impact — adoption rates, time saved, satisfaction scores, and live product status — inside a fast, trustworthy experience that mirrors the calm, strategic product voice Vasini brings to client work.

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

## Key Features

### Homepage that sells outcomes, not aesthetics
A hero with clear positioning, credibility stats (8+ years, 40+ products, 5 industries), and a curated **Selected Work** grid that surfaces business metrics — adoption, savings, satisfaction — before a visitor clicks into any case study.

### Five deep-dive case studies
Long-form narrative pages for real product work across high-stakes domains:

| Project | Domain | Outcome signal |
| --- | --- | --- |
| **Arreglio** | B2B service coordination for repair shops | 3× faster processing, $50K annual savings, 98% adoption |
| **ecoPRISM** | Enterprise ESG compliance (ABB) | 95% task completion, 4.6/5 satisfaction, 40% time saved |
| **MockOraa** | AI interview practice (EdTech) | 81 SUS score, 4.45/5 CSAT, 67% confusion reduction |
| **WorkMark** | HR tech — invisible work recognition | Projected recognition +30%, review prep −60% |
| **NeuroAssist** | Clinical stroke-care workflow | 8-stage end-to-end flow, 4 pathways, zero dead-end states |

Each case study follows a repeatable story arc: problem → role → challenge → solution → impact → reflection → gallery → CTA, with prev/next navigation to keep reviewers in flow.

### Interactive experience timeline
A two-panel About experience that lets hiring managers explore career history by company and drill into individual shipped projects — with live product / live MVP status badges — without leaving the page.

### Lead capture that respects the visitor
A validated contact form (client-side validation, loading states, success/error feedback) integrated with Web3Forms so inbound opportunities reach inbox reliably — no backend infrastructure required.

### Content architecture built to scale
Portfolio projects, metrics, tags, and experience data live in typed data modules. Adding a sixth case study means a new route folder and section components — not rewriting the entire site.

### Blogs hub (content-ready)
A dedicated `/blogs` route structured for design writing and thought leadership, positioned for ongoing SEO and personal brand growth.

### Resume download paths
Multiple CTA entry points (hero, footer, contact) drive recruiters toward the next step in the hiring funnel.

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
| Build tooling | Turbopack (`next dev --turbopack`, `next build --turbopack`) |
| Form handling | Web3Forms REST API |
| Deployment | [Vercel](https://vercel.com/) |
| Linting | ESLint 9 + `eslint-config-next` |

---

## Architecture Overview

This project uses the **Next.js App Router** with a deliberate **server-first, client-on-demand** split:

- **Route files** (`src/app/**/page.tsx`) are Server Components. They export per-page `metadata` for SEO and statically compose page sections.
- **Interactive UI** (navigation, forms, scroll animations, experience timeline) is isolated in `'use client'` components to keep the client JavaScript bundle lean.
- **Feature-based component folders** mirror product domains: `home/`, `about/`, `projects/{slug}/`, `contact/`, `blogs/`, `layout/`, `ui/`.
- **Shared primitives** (`CaseStudyHero`, `PrevNextProject`, `MinimalLayout`, `ProjectEyebrow`) enforce visual and structural consistency across five different case study narratives.
- **Data layer** (`src/data/projects.ts`, `src/data/experience-timeline.ts`) decouples content from presentation — the same project objects power the homepage grid, projects index, and case study metadata.
- **Cross-cutting lib** (`metadata.ts`, `typography.ts`, `utils.ts`) centralizes SEO helpers, typographic scale, and class-name merging.

### Why these decisions matter

| Decision | Business / engineering rationale |
| --- | --- |
| Static generation for all 12 routes | Predictable performance for global recruiters on any connection; no server latency on page load |
| Composable case study sections | Each project tells a different story without forking the entire layout system |
| Typed portfolio data | Prevents broken links, missing metrics, and inconsistent cards when content changes |
| Centralized metadata factory | Every new page gets Open Graph, Twitter, and canonical URLs automatically |
| Minimal global state | React `useState` only where interaction demands it — no unnecessary state library |

---

## Performance Optimizations

Production build results (Next.js 15 + Turbopack):

| Route | First Load JS |
| --- | --- |
| `/` | 137 kB |
| `/about` | 154 kB |
| `/projects/workmark` | 145 kB |
| Shared baseline | 129 kB |

**Techniques in use:**

- **Full static prerendering** — all 12 app routes ship as pre-built HTML (`○ Static`).
- **`next/image`** — responsive images with `fill`, optimized formats, and remote pattern allowlisting for Unsplash avatars.
- **WebP assets** — hero and case study imagery stored as `.webp` in `/public/images`.
- **`next/font`** — self-hosted Google fonts with zero layout shift and no render-blocking font requests.
- **Intersection Observer scroll reveals** — homepage project cards animate in when visible, not on initial paint.
- **`prefers-reduced-motion`** — global CSS and timeline logic respect user motion preferences.
- **Turbopack** — faster dev and production compile cycles during iteration.

---

## Responsive Design

Mobile-first Tailwind breakpoints (`sm`, `md`, `lg`) drive layout at every level:

- **Navigation:** transparent fixed header on desktop; collapsible hamburger menu on mobile with active-route indicators.
- **Grids:** homepage projects scale `1 → 2 → 3` columns; case study heroes stack content and imagery vertically on small screens.
- **Typography:** fluid type scale via shared tokens (`h1Page`, `h2Page`, `h2Section`) — readable on phone, impactful on desktop.
- **Spacing:** CSS custom properties (`--section-padding`, `--container-padding`) increase section rhythm at larger viewports.
- **Touch targets:** full-width mobile CTAs, adequate padding on form fields and nav items.

---

## Accessibility

- Semantic landmarks: `<header>`, `<main>`, `<nav>`, `<section>`.
- `lang="en"` on the document root.
- Form fields paired with visible `<label htmlFor="...">` associations.
- `aria-label` on the mobile menu toggle; `aria-labelledby` on major sections (experience timeline).
- `prefers-reduced-motion: reduce` disables animations globally and switches smooth scroll to instant in the timeline.
- Focus-visible patterns on interactive SVG elements in complex case study visuals.
- Sufficient color contrast on the black-and-white design system (`#202022` ink on white).

---

## Challenges Solved

### 1. Telling five different product stories with one design system
Each case study (automotive SaaS, ESG compliance, clinical UX, HR AI, EdTech AI) has unique narrative sections — wireframes, personas, information architecture, metrics — without duplicating layout code. `CaseStudyHero` accepts flexible props (metrics, status badges, YouTube embeds, prototype links) while each `page.tsx` assembles only the sections that story needs.

### 2. Making career history scannable for busy reviewers
The Experience Timeline V2 uses a master–detail pattern: company list on the left, project detail on the right, with live-status tags and smooth-scroll behavior that respects reduced-motion settings. Recruiters can evaluate breadth (companies, roles) and depth (individual shipped products) in one interaction.

### 3. Keeping content updates safe at scale
Portfolio cards, homepage selection, and case study ordering are driven from `projects.ts` with TypeScript interfaces (`PortfolioProject`, `ProjectMetric`). A content edit in one file propagates everywhere — reducing the risk of stale copy on the homepage vs. the projects index.

### 4. Production contact flow without a custom backend
The contact form validates on the client, posts to Web3Forms, and surfaces loading / success / error UI states — giving hiring managers a frictionless path to reach out without maintaining server infrastructure.

### 5. SEO for a personal brand site
A `createPageMetadata()` helper generates title, description, Open Graph, Twitter card, and canonical URL for every route — critical when recruiters Google a candidate name or share a case study link on LinkedIn.

---

## What I Learned

- **Server vs. client boundaries in App Router** — keeping pages as Server Components and pushing interactivity to leaf components materially reduces bundle size on content-heavy routes.
- **Content-driven architecture for portfolios** — treating case studies as data + composition beats monolithic page files when the number of projects grows.
- **Design systems in code** — shared typography tokens and UI primitives (`ProjectEyebrow`, `Button`, container utilities) keep five case studies visually cohesive without a component library dependency.
- **Static-first deployment** — pre-rendering every route on Vercel delivers consistent global performance for an audience that spans time zones and devices.
- **Accessibility as a default** — reduced-motion support and semantic structure are cheaper to build in from the start than to retrofit after launch.

---

## Future Improvements

- Move Web3Forms `access_key` to an environment variable (`NEXT_PUBLIC_` or server action) to keep secrets out of source control.
- Add `sitemap.xml` and `robots.txt` via Next.js metadata routes for stronger crawl coverage.
- Implement `next/image` `priority` on above-the-fold hero images for faster LCP.
- Add structured data (`Person`, `CreativeWork`) JSON-LD for rich search results.
- Introduce a lightweight CMS (Sanity, Contentlayer, or MDX) so case study copy can be updated without redeploying.
- Add Playwright or Cypress smoke tests for critical flows: navigation, contact form, case study prev/next.
- Complete NeuroAssist and Suana visual assets to replace placeholder imagery.
- Publish blog posts with dynamic `[slug]` routes and RSS feed.

---

## Installation

### Prerequisites

- Node.js 20+
- npm (or pnpm / yarn)

### Setup

```bash
# Clone the repository
git clone https://github.com/sukrutikonhar/vasinisingh.git
cd vasinisingh

# Install dependencies
npm install

# Start development server (Turbopack)
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
│   └── images/                  # Optimized WebP/PNG assets (projects, about, logo)
├── src/
│   ├── app/                     # Next.js App Router — routes & page-level metadata
│   │   ├── layout.tsx           # Root layout, fonts, global metadata
│   │   ├── globals.css          # Design tokens, animations, a11y utilities
│   │   ├── page.tsx             # Homepage
│   │   ├── about/page.tsx
│   │   ├── blogs/page.tsx
│   │   ├── contact/page.tsx
│   │   └── projects/
│   │       ├── page.tsx         # Projects index
│   │       ├── arreglio/page.tsx
│   │       ├── ecoprism/page.tsx
│   │       ├── mockoraa/page.tsx
│   │       ├── neuroassist/page.tsx
│   │       └── workmark/page.tsx
│   ├── components/
│   │   ├── about/               # About page sections + experience timeline v2
│   │   ├── blogs/               # Blog listing components
│   │   ├── contact/             # Contact form, info, hero
│   │   ├── home/                # Homepage sections (hero, grid, testimonials)
│   │   ├── layout/              # MinimalLayout, header, footer
│   │   ├── projects/            # Shared case study + per-project sections
│   │   │   ├── arreglio/
│   │   │   ├── ecoprism/
│   │   │   ├── mockoraa/
│   │   │   ├── neuroassist/
│   │   │   ├── workmark/
│   │   │   ├── CaseStudyHero.tsx
│   │   │   └── PrevNextProject.tsx
│   │   └── ui/                  # Button, Logo, ProjectEyebrow
│   ├── data/
│   │   ├── projects.ts          # Portfolio project definitions & metrics
│   │   └── experience-timeline.ts  # Career history & shipped products
│   └── lib/
│       ├── metadata.ts          # SEO & Open Graph helpers
│       ├── typography.ts        # Shared type scale tokens
│       └── utils.ts             # cn() — clsx + tailwind-merge
├── next.config.ts               # Image remote patterns
├── package.json
├── tsconfig.json
└── eslint.config.mjs
```

**Scale:** 12 static routes · 130+ React components · 5 full case studies · 2 typed data modules

---

## Deployment

| Step | Detail |
| --- | --- |
| Platform | Vercel (native Next.js integration) |
| Trigger | Push to `main` → automatic production deploy |
| Output | Fully static HTML for all routes |
| Domain | [vasinisingh.vercel.app](https://vasinisingh.vercel.app/) |
| Env vars | Web3Forms access key (recommended: move to Vercel env) |

```bash
# Manual production verification
npm run build
npm run start
```

No Docker, database, or server runtime required — the site is a static frontend deployed to the edge.

---

## Skills Demonstrated

| Skill | Evidence in this project |
| --- | --- |
| **React** | 130+ functional components; hooks for forms, scroll, intersection observers, and timeline state |
| **Next.js** | App Router, Server Components, static generation, `next/image`, `next/font`, per-route metadata |
| **TypeScript** | Typed data models (`PortfolioProject`, `ExperienceCompany`), props interfaces across all components |
| **Component Architecture** | Feature folders, shared layout primitives, composable case study sections |
| **State Management** | Local React state only — no external store; appropriate for a content site |
| **API Integration** | Contact form → Web3Forms REST with async fetch, error handling, and UI feedback |
| **Responsive Design** | Mobile-first Tailwind grids, fluid typography, adaptive navigation |
| **Performance Optimization** | Static prerender, WebP images, font optimization, ~129 kB shared JS baseline |
| **SEO** | `createPageMetadata()`, Open Graph, Twitter cards, canonical URLs, semantic HTML |
| **Deployment** | Vercel CI/CD, production build verified, edge-static delivery |

---

## Why This Project Matters

Hiring managers do not hire designers based on pretty mockups alone — they hire people who can **translate complex product problems into outcomes users and businesses trust**. This portfolio proves that capability end to end:

1. **It sells business impact first.** Every featured project leads with metrics recruiters understand — adoption, savings, satisfaction, task completion — not tool names or process jargon.

2. **It demonstrates production thinking.** The site is not a prototype. It is a statically generated, type-safe, SEO-ready application deployed to production with real contact capture — the same discipline required when shipping client-facing SaaS.

3. **It shows architectural maturity.** Case studies are composed from reusable sections; content lives in typed data modules; server and client boundaries are intentional. This is how maintainable frontend systems are built on product teams.

4. **It reflects UX craft in the implementation.** Calm typography, reduced-motion support, mobile navigation, and scroll-driven reveals mirror the "trust before action" design philosophy described in the work itself.

5. **It compresses evaluation time.** A recruiter can scan the homepage in 30 seconds, dive into a relevant case study in 5 minutes, and contact the candidate in one click — reducing friction in the hiring funnel the same way good product design reduces friction for end users.

For frontend and product engineering leaders, this repository is evidence that Vasini Singh does not only design interfaces — she ships coherent, performant, recruiter-ready product experiences.

---

## Repository Metadata (for GitHub)

### Suggested repository description

```
Production-grade portfolio for a Senior Product Designer — Next.js 15, React 19, TypeScript, 5 case studies with measurable impact, static deploy on Vercel.
```

### Suggested topics / tags

```
nextjs, react, typescript, tailwindcss, portfolio, product-design, case-study, frontend, vercel, app-router, static-site, ui-ux, design-system, seo, accessibility
```

### Additional badge ideas

```markdown
[![TypeScript](https://img.shields.io/badge/types-TypeScript-blue?style=flat-square&logo=typescript)]()
[![Vercel](https://img.shields.io/badge/deployed-Vercel-black?style=flat-square&logo=vercel)](https://vasinisingh.vercel.app/)
[![Static Site](https://img.shields.io/badge/SSG-12_routes-success?style=flat-square)]()
[![License](https://img.shields.io/badge/license-Private-lightgrey?style=flat-square)]()
```

---

## Author

**Vasini Singh** — Senior Product Designer  
[Live portfolio](https://vasinisingh.vercel.app/) · [GitHub](https://github.com/sukrutikonhar/vasinisingh)

---

*Built with Next.js 15, React 19, and TypeScript. Designed and developed as a single source of truth for hiring conversations.*
