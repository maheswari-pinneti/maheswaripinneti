# ✦ Maheswari Pinneti — Engineering Portfolio

[![CI](https://github.com/maheswari-pinneti/maheswaripinneti/actions/workflows/ci.yml/badge.svg)](https://github.com/maheswari-pinneti/maheswaripinneti/actions/workflows/ci.yml)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=flat-square&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![SQLite](https://img.shields.io/badge/SQLite-07405E?style=flat-square&logo=sqlite&logoColor=white)](https://sqlite.org/)

A production-grade, monolithic full-stack developer portfolio and technical web application. Built for absolute performance and meticulously engineered following a strict dark-mode glassmorphism aesthetic.

## 🚀 Features

- **Monolithic Architecture**: Frontend React SPA and Backend Express API served seamlessly from a single unified Docker container.
- **Privacy-Conscious Analytics**: Custom SQLite-backed route tracking with zero reliance on 3rd-party cookies (e.g., Google Analytics).
- **Live Interactive WebGL**: Accelerated 3D Physics simulations built natively with `@react-three/fiber` on the `/playground` route (code-split for extreme performance).
- **Dynamic Content**: Full persistent backend powering a live Guestbook and Contact form.
- **SEO & PWA Optimized**: Fully mapped `sitemap.xml`, Open Graph tags, and a `manifest.json` for native iOS/Android installation.
- **Automated QA Pipeline**: 100% CI/CD coverage utilizing GitHub Actions, Vitest, and Playwright for E2E navigation testing.

## 🛠 Tech Stack

**Frontend**
- React 19 / TypeScript / Vite
- Framer Motion (Micro-animations)
- Three.js / React Three Fiber
- Vanilla CSS (Mobile-First, Fluid Typography)

**Backend & Data**
- Node.js / Express
- `better-sqlite3` (Optimized WAL mode)
- Rate Limiting & Helmet Security

**DevOps & QA**
- Playwright E2E Testing
- Vercel Serverless Ready (`vercel.json`)
- Dockerized (`Dockerfile`)
- GitHub Actions CI/CD & Dependabot

## 💻 Local Development

1. **Clone & Install**
   ```bash
   git clone https://github.com/maheswari-pinneti/maheswaripinneti.git
   cd maheswaripinneti
   npm install
   ```

2. **Start the Frontend (Vite)**
   ```bash
   npm run dev
   ```

3. **Start the Backend (Express)**
   Open a separate terminal and run:
   ```bash
   npm run server
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## 📜 License

Designed and engineered by [Maheswari Pinneti](https://maheswari-pinneti.dev). All rights reserved.
