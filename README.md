# Vantage Studio — Cinematic Visualization for Architecture & Real Estate

[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)

A complete, production-grade, international architectural visualization and real-estate creative studio web application.

Designed and engineered with the aesthetic restraint, editorial typographic rhythm, and commercial authority of world-class ateliers: **The Boundary**, **Brick Visual**, **Omega Render**, **Binyan Studios**, **Beauty & The Bit**, and **MIR**.

---

## 🏛️ Brand Positioning

- **Primary Tagline**: *"Cinematic Visualization for Architecture & Real Estate"*
- **Secondary Proposition**: *"Architectural visualization, AI-enhanced imagery and cinematic films for projects before they are built."*
- **Target Audience**: Global real-estate developers, international architecture ateliers, interior design firms, and institutional property funds.
- **Visual Language**: Restrained luxury, architectural precision, Swiss neo-grotesk typography (`Plus Jakarta Sans` & `Inter`), generous whitespace, hairline borders, asymmetric 12-column grids, and deliberate dark/light sectional rhythm.

---

## 🧭 Route Map

| Route | Page | Key Features |
|---|---|---|
| `/` | **Homepage** | 12-stage visual rhythm: Fullscreen Video Hero → Intro Statement & Metrics → Selected Work (Asymmetric grid) → Services Overview (Pillars 01–04) → "Architecture in motion" Film Showpiece → Interactive Before/After Comparison → 7-Stage Process Snapshot → Capabilities Typographic Explorer → Trust & Partner Strip → About Atelier Atmosphere → Monumental Black Final CTA → Multi-Column Footer |
| `/work` | **Work Gallery** | Multi-category instant filtering (`All`, `CGI`, `Architecture`, `Real Estate`, `AI Film`, `Animation`, `Interior`, `Exterior`, `Renovation`) with dynamic project count badges and asymmetric masonry layouts |
| `/work/:slug` | **Project Case Study** | Deep-dive case studies for *Riviera Residence*, *Bunker 37*, *Marlow On Mill*, *Venetian Penthouse*, *Freirodaer Weg*, *Cascades at Vista*, *Park Seefeld*, *Papes Residences*. Includes: Metadata header, full-bleed hero visual, architectural story, outcomes, Before/After comparison slider, 5-stage concept-to-final breakdown, render gallery, and "Next Project" teaser navigation |
| `/services` | **Services Overview** | Commercial positioning covering 4 core pillars with deliverable matrices |
| `/services/:slug` | **Service Detail Pages** | Dedicated pages for `/architectural-visualization`, `/ai-films`, `/real-estate-marketing`, and `/renovation`. Each includes: Hero, Problem vs. Solution contrast, 6-item Deliverables matrix, 4-step Workflow, and FAQs |
| `/process` | **Process Timeline** | Sophisticated 7-stage architectural production timeline (Brief → Visual Direction → 3D Prep → Visualization → AI Enhancement → Animation/Film → Final Delivery) with sticky stage navigation |
| `/about` | **About Atelier** | Studio philosophy, manifesto, key metrics ($1B+ GDV, 100+ projects), leadership profiles, and atelier atmosphere |
| `/contact` | **Project Brief Generator** | Interactive B2B lead generation configurator: project typology selector, deliverables checklist, scope & timeline selectors, budget tiers, simulated CAD/PDF file uploader, form validation, and direct London/Zurich/Tashkent studio coordinates |

---

## ⚡ Interactive Highlights

- **Interactive Before / After Slider (`BeforeAfterSlider.tsx`)**: Split comparison slider with smooth mouse and touch drag, vertical hairline divider, and `SOURCE` / `FINAL` badges.
- **Cinematic Video Lightbox (`VideoLightbox.tsx`)**: Ambient dark modal with custom player controls, audio toggle, and keyboard shortcuts (`Space` to pause, `Esc` to close).
- **Interactive Capabilities Explorer (`CapabilitiesSection.tsx`)**: Hovering over sectors dynamically reveals project descriptions and updates the visual preview frame.
- **Refined Desktop Micro-Cursor (`CustomCursor.tsx`)**: Contextual actions (`VIEW`, `PLAY`, `DRAG`) that automatically disables on mobile/touch screens and respects `prefers-reduced-motion`.
- **B2B Project Brief Configurator (`ProjectBriefForm.tsx`)**: Commercial lead capture with interactive deliverable chips, scope options, validation, and success messaging.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite 8](https://vitejs.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/) (with route-level code splitting via `React.lazy` and `Suspense`)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Abdulloh542/vantage-studio.git
cd vantage-studio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) to view the atelier in your browser.

### 4. Build for production
```bash
npm run build
```

### 5. Preview production build
```bash
npm run preview
```

---

## 📄 License

MIT © [Abdulloh Adinaev](https://github.com/Abdulloh542) & Vantage Studio.
