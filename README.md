# SkyElite

A premium private jet charter landing page — built with React, TypeScript, Vite, and Tailwind CSS. Features a video hero, animated backgrounds, 3D tilt cards, scroll-reveal animations, and a working booking form.

## Live Demo

[Add your Vercel/Netlify URL here once deployed]

## Features

- **Video hero section** with a letter-by-letter headline assembly animation
- **Animated backgrounds** across all pages — photo-based with drifting glow orbs, twinkling stars, and gradient overlays
- **3D tilt cards** on Discover, Rates, and Benefits that respond to cursor movement
- **Scroll-reveal animations** powered by Framer Motion
- **Fully responsive** with a dedicated mobile navigation menu
- **Working booking form** on Book Now, with validation and live submission via Formspree
- **Smooth FAQ accordion** with animated expand/collapse
- **Per-page document titles** and scroll-to-top on route change
- **Six pages**: Home, Discover, Book Now, Story, Rates, Benefits, FAQ

## Tech Stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) — build tool and dev server
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [React Router](https://reactrouter.com/) — client-side routing
- [Framer Motion](https://www.framer.com/motion/) — animations
- [Lucide React](https://lucide.dev/) — icons
- [Formspree](https://formspree.io/) — form submission handling

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes bundled with Node.js)

### Installation

```bash
git clone https://github.com/ggi20244966-web/skyelite.git
cd skyelite
npm install
```

### Development

```bash
npm run dev
```

Open the local URL shown in your terminal (usually `http://localhost:5173`).

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

## Project Structure

```
skyelite/
├── public/
│   └── images/          # Background photos for each page
├── src/
│   ├── components/
│   │   ├── AnimatedBackground.tsx
│   │   ├── HeroSection.tsx
│   │   ├── MobileNav.tsx
│   │   ├── Reveal.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── TiltCard.tsx
│   ├── hooks/
│   │   └── usePageTitle.ts
│   ├── pages/
│   │   ├── Discover.tsx
│   │   ├── BookNow.tsx
│   │   ├── Story.tsx
│   │   ├── Benefits.tsx
│   │   ├── Rates.tsx
│   │   └── FAQ.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Configuration

### Booking Form

The Book Now form submits to [Formspree](https://formspree.io/). To use your own endpoint, replace the URL in `src/pages/BookNow.tsx`:

```tsx
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  ...
});
```

### Background Images

Page background photos live in `public/images/` and are referenced in each page component via the `AnimatedBackground` component:

```tsx
<AnimatedBackground image="/images/discover-bg.jpg" />
```

## Deployment

This project deploys cleanly to [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/) with zero configuration:

1. Push this repository to GitHub
2. Import the repo into Vercel or Netlify
3. Build command: `npm run build`
4. Output directory: `dist`

## License

This project is private and not licensed for redistribution.

## Author

Built by Diruwo Oroge.
```

A few notes before you paste this:
- I filled in your GitHub username/repo from the earlier terminal screenshots — double check `ggi20244966-web/skyelite` is correct
- The "Live Demo" link is left as a placeholder since you haven't deployed yet — fill that in once you do Vercel/Netlify
- Swap the Formspree ID reference if you want it hidden, though it's not sensitive data.
