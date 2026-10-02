# Scroll-Driven Hero Section & Car Animation

An interactive, scroll-driven hero dashboard built with **React**, **Vite**, **Tailwind CSS v4**, and **GSAP (ScrollTrigger)**. As the user scrolls through the page, a top-down supercar moves across a full-bleed track, filling a dynamic trail and unlocking performance metrics sequentially at precise scroll milestones.

---

## 🌟 Key Features

- **Page Load Animation**: Smooth fade and vertical slide-up intro for the main title using GSAP.
- **Scroll-Driven Car Animation**: Pinning hero section using GSAP `ScrollTrigger` where scrolling directly drives the top-down supercar along the track.
- **Dynamic Trail Progress**: Real-time progress bar and trailing fill synchronized with scroll advancement (0% to 100%).
- **Interactive Metric Cards**: Stat cards (Satisfaction Rate, Speed Multiplier, Active Users, System Uptime) reveal progressively at 10%, 35%, 60%, and 85% scroll milestones.
- **Responsive & Dark-Themed UI**: Sleek, modern dark mode design built with Tailwind CSS.
- **Standalone Version**: Includes `standalone.html` pre-configured with CDN links for instant zero-dependency execution.

---

## 🛠️ Tech Stack

- **Frontend Library**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [GSAP (GreenSock)](https://gsap.com/) & [ScrollTrigger](https://gsap.com/scrolltrigger/)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18+ recommended) installed on your system.

### Installation

1. Clone or download the repository:
   ```bash
   git clone <repository-url>
   cd Internship-Assignment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the local development server:
```bash
npm run dev
```

Open your browser and navigate to the local URL (typically `http://localhost:5173`).

---

## 📦 Building for Production

To create an optimized production build:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## 📄 Standalone Version

For quick viewing without Node/NPM overhead, open `standalone.html` directly in any web browser. It includes CDN imports for Tailwind CSS and GSAP.
