# Hyntrixx Education Platform - Frontend

A production-ready React + TypeScript + Tailwind CSS frontend for the Hyntrixx education platform.

## 🎨 Design & Tech Stack

- **React 18** - Modern UI framework
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth scroll animations
- **Vite** - Lightning-fast build tool

## 🎯 Color Scheme (Only)

- Black (`#000000`)
- White (`#FFFFFF`)
- Yellow (`#FFD700`)

## 📁 Project Structure

```
src/
├── components/       # React components
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── CareerReadySkills.tsx
│   ├── ValueProposition.tsx
│   ├── StudentPrograms.tsx
│   ├── KidsPrograms.tsx
│   ├── UniqueFeatures.tsx
│   └── CTASection.tsx
├── pages/           # Page compositions
│   └── Home.tsx
├── layouts/         # Layout wrappers
│   └── MainLayout.tsx
├── utils/           # Utility functions
│   └── animations.ts
├── styles/          # Global styles
│   └── tailwind.css
├── App.tsx          # Main app component
└── main.tsx         # Entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
cd frontend
npm install
```

### Development

```bash
npm run dev
```

Opens `http://localhost:5173` in your browser with hot reload.

### Build for Production

```bash
npm run build
```

Generates optimized files in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎬 Animations

All scroll-triggered animations are defined in `src/utils/animations.ts` using Framer Motion:

- **fadeInUp** - Elements slide up while fading in
- **fadeInDown** - Elements slide down while fading in
- **scaleIn** - Elements scale from 0.9 to 1
- **stagger** - Multiple elements animate with staggered timing
- **slideInLeft/Right** - Elements slide from sides

**Hero Hourglass** - Continuously rotates and fades as user scrolls

## 📱 Responsive Design

All components are fully responsive:
- Mobile-first approach
- Breakpoints: `sm`, `md`, `lg` (Tailwind defaults)
- Navbar collapses on small screens
- Course cards adapt grid layout

## 📝 Key Features

- ✅ Fixed navbar with navigation links
- ✅ Hero section with rotating hourglass icon
- ✅ Career-ready skills section (black background)
- ✅ Value proposition with dual CTAs
- ✅ Student & Kids learning program cards
- ✅ Unique features showcase
- ✅ Yellow CTA section
- ✅ Smooth scroll animations
- ✅ No jank, performant transitions

## 🔌 Backend Integration

Frontend is currently independent. When backend is ready:

```bash
# Update API calls in components
// Replace placeholder endpoints with:
// http://localhost:5000/api/courses
// http://localhost:5000/api/users/login
```

## 📦 Tailwind Configuration

See `tailwind.config.js` for color customization (black/white/yellow only).

## 🆘 Troubleshooting

- **Hot reload not working?** - Restart dev server with `npm run dev`
- **Animations stuttering?** - Ensure GPU acceleration is enabled in browser
- **Build fails?** - Clear `node_modules` and `dist`, then `npm install && npm run build`

## 📄 License

Proprietary - Hyntrixx 2026
