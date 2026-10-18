# Gampa Advaith — Personal Developer Portfolio

> Premium, responsive, editorial personal portfolio website for **Gampa Advaith**, a B.Tech Computer Science student specializing in Artificial Intelligence and Machine Learning at St Peter’s Engineering College.

![Gampa Advaith Portfolio Preview](./public/assets/advaith-photo.jpg)

---

## 🌟 Key Highlights & Philosophy

- **Editorial Aesthetic:** Cream/off-white palette (`#FAF8F2`), near-black typography, muted gray details, and restrained royal blue accents.
- **Fluid Motion & Micro-Interactions:** Fully animated with smooth scroll transitions, responsive hover states, interactive mockup previews, and mobile-friendly drawer navigation.
- **Truthful & Verified:** Zero fabricated metrics, fake stars, or imaginary client reviews. All project links, deployments, and repositories were verified via automated build-time testing.
- **Light & Dark Mode:** Accessible theme toggle with persistence in `localStorage` and zero flash of unstyled theme on initial load.
- **Centralized Configuration:** All personal information, project URLs, and social links are centralized in [`src/data/portfolioData.js`](./src/data/portfolioData.js).

---

## 🗂️ Project Directory Structure

```text
gampa-advaith-portfolio/
├── dist/                      # Standalone production build (HTML, CSS, JS, Assets)
├── public/
│   ├── assets/
│   │   ├── advaith-photo.jpg  # User's uploaded portrait photo
│   │   └── Gampa_Advaith_Resume.pdf # Downloadable resume PDF
│   ├── robots.txt             # SEO crawler instructions
│   └── sitemap.xml            # Sitemap index
├── scripts/
│   ├── verify-links.mjs       # Automated build-time link verification script
│   └── generate-resume-pdf.mjs# Resume PDF generation utility
├── src/
│   ├── components/
│   │   ├── About.jsx          # Profile story, interests, photo frame
│   │   ├── Contact.jsx        # Honest contact form, copy email, mailto launcher
│   │   ├── Education.jsx      # B.Tech CSE (AI & ML) timeline & focus areas
│   │   ├── Footer.jsx         # Monogram, copyright, live audit link
│   │   ├── Hero.jsx           # Striking introduction & interactive floating tech badges
│   │   ├── Icons.jsx          # SVG brand icons (GitHub, LinkedIn, YouTube)
│   │   ├── Navbar.jsx         # Sticky blurred glass navbar & theme toggle
│   │   ├── ProjectCard.jsx    # Interactive cards with isolated action handlers
│   │   ├── ProjectMockups.jsx # Bespoke UI mockups for each real project
│   │   ├── ProjectModal.jsx   # Accessible full-screen project specification modal
│   │   ├── Projects.jsx       # Featured projects grid & category filters
│   │   ├── ResumeModal.jsx    # ATS text preview & PDF download handler
│   │   ├── Skills.jsx         # Filterable skill cards with practical context
│   │   └── VerificationReportModal.jsx # Transparency report modal
│   ├── data/
│   │   └── portfolioData.js   # Single source of truth for all content & links
│   ├── App.jsx                # Root application layout & state
│   ├── index.css              # Tailwind base, paper textures, animations
│   └── main.jsx               # React DOM entry point
├── index.html                 # HTML shell with Google Fonts & Open Graph meta
├── package.json               # Scripts & dependencies
├── tailwind.config.js         # Editorial design tokens
└── vite.config.js             # Vite bundler configuration
```

---

## 🚀 Quick Start & Local Development

### 1. Prerequisites
- **Node.js** v18+ (tested on v24.21.0)
- **npm** v9+ (tested on v11.19.0)

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
```
Creates a zero-config production bundle in the `dist/` directory.

### 5. Run Link Health Check
```bash
npm run verify-links
```
Audits every external URL and GitHub repository to verify live HTTP status codes.

---

## 🔗 Project Link Verification Audit

| Project | Target URL | HTTP Status | Card Label | Notes |
| :--- | :--- | :---: | :---: | :--- |
| **SureDeal** | `https://suredeal.store` | **200 OK** | `Live Demo` | Verified active and responding with live product checker interface. |
| **TruthLens AI** | `https://ai-content-verifier-dzya.onrender.com` | **200 OK** | `Live Demo` | Verified active on Render cloud. |
| **Auto-Pilot AI Video Studio** | `https://autopilot-ai-video-advaith.ap-south-2.elasticbeanstalk.com` | **Timeout** | `Demo Temporarily Unavailable` | AWS Elastic Beanstalk container is sleeping or down. Card honestly marks demo unavailable. |
| **Auto-Pilot Repository** | `https://github.com/gampaadvaith2006/AUTO-PILOT-AI-VIDEO-STUDIO` | **200 OK** | `View Source Code` | Verified public repository on GitHub. |
| **Short Factory** | *None* | *N/A* | `In Active Development` | Upcoming project; no fake links created. |
| **GitHub Profile** | `https://github.com/gampaadvaith2006` | **200 OK** | `GitHub Profile` | Verified active user profile. |
| **LinkedIn** | *Unsupplied* | *N/A* | `Coming Soon` | Disabled placeholder without fake username. |
| **YouTube** | *Unsupplied* | *N/A* | `Coming Soon` | Disabled placeholder without fake channel ID. |

---

## 📝 How to Update Your Information

1. **Update Projects or Social URLs:**
   Open `src/data/portfolioData.js` and edit the `projectsData` or `socialLinks` object.
2. **Replace Profile Photo:**
   Drop your new image at `public/assets/advaith-photo.jpg`.
3. **Replace Resume PDF:**
   Drop your updated single-page PDF at `public/assets/Gampa_Advaith_Resume.pdf`.

---

## 🌐 Free Deployment Guide

### Option A: GitHub Pages (Recommended)
1. Initialize git inside this directory:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Gampa Advaith Portfolio"
   ```
2. Create a repository on your GitHub account (`https://github.com/gampaadvaith2006/portfolio` or `gampaadvaith2006.github.io`).
3. Push your code:
   ```bash
   git remote add origin https://github.com/gampaadvaith2006/portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. In GitHub repo settings -> **Pages** -> Source: **GitHub Actions** (or deploy the `dist/` directory).

### Option B: Vercel / Netlify
- Simply import your repository into [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
- Build command: `npm run build`
- Output directory: `dist`
