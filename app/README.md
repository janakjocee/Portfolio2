# Janak Raj Joshi Portfolio

An elite, FAANG-level portfolio website for Janak Raj Joshi - Data Scientist, Analytics Consultant, and Cloud Computing Enthusiast based in London, UK.

![Portfolio Preview](https://janakjocee.vercel.app/preview.jpg)

## ✨ Features

### 🎨 Design & UI
- **Apple-level minimalism** with premium dark theme
- **Glassmorphism effects** with depth shadows
- **Animated gradient background** with floating orbs and particle system
- **Custom cursor animation** (desktop only)
- **Magnetic hover buttons** with spring physics
- **Fully responsive** for all devices

### 🚀 Animations & Interactions
- **Typing animation** in hero section with rotating roles
- **Scroll reveal animations** with stagger effects
- **Animated skill progress bars** with radar chart visualization
- **Interactive project filtering** with smooth transitions
- **Animated counters** for statistics
- **Particle background** with connection lines

### ⚡ Performance & SEO
- **Lighthouse 95+ score** optimized
- **SEO optimized** with meta tags, Open Graph, and structured data
- **TypeScript** for type safety
- **Accessibility** (ARIA labels, keyboard navigation)

### 🛠️ Tech Stack
- **React 18** + **TypeScript**
- **Vite** for fast builds
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Recharts** for data visualization
- **EmailJS** for contact form

## 📁 Folder Structure

```
src/
├── components/
│   ├── animations/         # Animation components
│   ├── backgrounds/        # Background components
│   ├── ui/custom/          # Custom UI components
│   ├── Navigation.tsx
│   └── Footer.tsx
├── data/                   # Data files
├── hooks/                  # Custom hooks
├── sections/               # Page sections
├── App.tsx
└── index.css
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## ⚙️ Configuration

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update credentials in `src/sections/Contact.tsx`

```typescript
await emailjs.sendForm(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formRef.current!,
  'YOUR_PUBLIC_KEY'
);
```

## 📦 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

## 📝 License

This project is open source and available under the MIT License.

---

Built with ❤️ by Janak Raj Joshi
