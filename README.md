# Portfolio2

A modern, responsive portfolio website built to showcase projects, skills, and experience. Designed for performance, clean UI, and easy customization.

## Live Demo
- **Website:** Janakjocee2.vercel.app

## Preview
_Add screenshots or a short GIF here._
- `./docs/preview.png` (recommended)

---

## Features
- Responsive layout (mobile-first)
- Fast, modern UI
- Projects/Work showcase
- About / Skills / Experience sections
- Contact section (and/or contact form if implemented)
- SEO-friendly structure (titles, metadata, semantic HTML)
- Easy to customize content (projects, links, text, theme)

---

## Tech Stack
- **TypeScript** (primary)
- **HTML**
- **CSS**
- **JavaScript**

> If you used a framework (React / Next.js / Vite / Angular / etc.), add it here as well.

---

## Getting Started (Run Locally)

### 1) Clone the repository
```bash
git clone https://github.com/janakjocee/Portfolio2.git
cd Portfolio2
```

### 2) Install dependencies
Use the package manager your project is configured for:

```bash
npm install
```

### 3) Start the development server
```bash
npm run dev
```

### 4) Build for production
```bash
npm run build
```

### 5) Preview the production build (optional)
```bash
npm run preview
```

> If your repo does **not** use these scripts (for example, it’s plain HTML/CSS/JS), replace this section with: “Open `index.html` in a browser” or describe the actual commands.

---

## Project Structure
_(Adjust names to match your repo.)_

```text
Portfolio2/
├─ src/                # App source (components, pages, styles, etc.)
├─ public/             # Static assets (images, icons, etc.)
├─ index.html          # Entry HTML (if applicable)
├─ package.json        # Scripts + dependencies (if applicable)
└─ README.md
```

---

## Customization Guide

### Update your profile information
Look for a config/data file (common examples):
- `src/data.ts`
- `src/data/projects.ts`
- `src/constants.ts`
- `src/content/*`

Update:
- Name / headline
- About section
- Skills
- Experience
- Projects (title, description, links, tech)
- Social links (GitHub, LinkedIn, email)

### Update images and icons
- Replace files in `public/` (or your assets folder)
- Update image paths referenced in the code

### Update SEO
Update:
- Page title
- Description meta tag
- Open Graph tags (for link previews)
- Favicon

Common locations:
- `index.html`
- `public/manifest.json`
- framework-specific SEO config files

---

## Deployment

### Option A — Vercel
1. Import the repo: `janakjocee/Portfolio2`
2. Set build settings (if needed)
3. Deploy

### Option B — Netlify
1. New site from Git
2. Choose this repo
3. Build command: `npm run build`
4. Publish directory: `dist` or `build` (depends on your tooling)

### Option C — GitHub Pages
If static:
1. Build/export static files (if required)
2. Push to `gh-pages` branch or `/docs` folder
3. Enable Pages in repo settings

> Replace the commands/paths with what your project actually uses.

---

## Roadmap (Optional)
- [ ] Add blog section
- [ ] Add project filtering by tech tags
- [ ] Add dark/light theme toggle
- [ ] Improve Lighthouse/SEO score
- [ ] Add contact form with spam protection

---

## Contributing
Contributions are welcome.

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit: `git commit -m "Add your feature"`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

---

## License
Add a license if you want others to reuse your code:

- MIT License (common for portfolios)
- Or keep it private/all-rights-reserved

**License:** _(choose one and link it — e.g., `MIT`)_

---

## Contact
- **Author:** janakjocee
- **GitHub:** https://github.com/janakjocee
- **LinkedIn:** _(add your LinkedIn URL)_
- **Email:** _(add your email or a contact link)_

---

## Acknowledgements (Optional)
- Inspiration / design references
- Icon libraries (e.g., Font Awesome, Lucide, Heroicons)
- Hosting provider (Vercel/Netlify)
