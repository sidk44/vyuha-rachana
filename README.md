# Vyuha Rachana: Ancient Indian Military Science

An interactive Next.js 14 + TypeScript website featuring visualizations of ancient Indian military formations with a vintage digital museum aesthetic inspired by ancient Indian manuscripts and battlefield maps.

## Features

### Three Interactive Formations

1. **Chakravyuha** - The Concentric Rotating Trap

   - Circular formation with rotating defense rings
   - Center command with graduated protective layers
   - Dynamic rotation creates spatial confusion for enemies

2. **Garudavyuha** - The Eagle Formation

   - Named after Garuda, the celestial eagle
   - Forward-facing with extended wings for pincer attacks
   - Coordinated wing movements for encirclement

3. **Mandalavyuha** - The Defensive Ring
   - Inspired by mandala sacred geometry
   - Multi-directional 360-degree defense
   - Graduated concentric rings protecting command center

### Interactive Modes for Each Formation

- **Build Animation**: Watch formations construct themselves with ceremonial precision
- **Simulate Mode**: Enemy enters and formation responds with tactical maneuvers
- **Explain Mode**: Detailed breakdown of zones, roles, and strategic advantages

## Design Aesthetic

- **Vintage Digital Museum**: Parchment textures and ink-drawn diagrams
- **Color Palette**: Muted saffron (#d4af37), brass (#a67c52), and torchlight glows (#ff8c42)
- **Typography**: Professional serif fonts with ceremonial spacing and letter tracking
- **Animations**: Slow, deliberate, and academic - honoring the ancient sources

## Technology Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables
- **Animations**:
  - GSAP + ScrollTrigger for timeline-based animations
  - Framer Motion for UI transitions
- **Visualizations**: SVG-based formation diagrams with code-generated geometry

## Project Structure

```
app/
├── layout.tsx              # Root layout with metadata
├── globals.css             # Vintage manuscript styling
├── page.tsx                # Home page with formation cards
├── chakravyuha/
│   └── page.tsx            # Chakravyuha interactive page
├── garudavyuha/
│   └── page.tsx            # Garudavyuha interactive page
├── mandalavyuha/
│   └── page.tsx            # Mandalavyuha interactive page
└── about/
    └── page.tsx            # Historical context and information

components/
└── formations/
    ├── ChakravyuhaVisual.tsx   # Concentric rings visualization
    ├── GarudavyuhaVisual.tsx   # Eagle formation visualization
    └── MandalavyuhaVisual.tsx  # Mandala rings visualization
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Production Build

```bash
npm run build
npm start
```

## Key Design Decisions

### Color System

Uses CSS custom properties defined in `globals.css`:

- `--parchment`: Main background (light tan)
- `--saffron`: Primary accent (golden yellow)
- `--brass`: Secondary accent (warm brown)
- `--torchlight`: Glow effect color
- Automatically adjusts for dark mode

### Animation Philosophy

- **Ceremonial Timing**: Animations use slow, deliberate timing (1-4 seconds)
- **Academic Precision**: No flashy effects - geometric precision takes priority
- **Multi-Stage Build**: Formations assemble layer by layer
- **Responsive Simulation**: Zones activate based on combat sequence timeline

### SVG Generation

- Formations are mathematically generated based on:
  - Concentric circles for Chakravyuha and Mandalavyuha
  - Geometric paths for Garudavyuha wings
  - Precise soldier positioning using trigonometry
- All SVG elements are dynamically created with proper attributes

### Interactive States

Each formation page includes:

- Build mode with construction sequence
- Simulate mode with enemy approach and formation response
- Explain mode with labeled zones and strategic breakdown
- Play/Pause controls for animation replay

## Historical Sources

The formations are inspired by:

- **The Mahabharata** - Extensive accounts of Kurukshetra war formations
- **The Ramayana** - Formation tactics in Lanka campaign
- **The Arthashastra** - Kautilya's military science treatise

## Browser Compatibility

- Modern browsers with CSS Grid, CSS Variables, and SVG support
- Tested on:
  - Safari (macOS, iOS)
  - Chrome/Edge (Windows, macOS, Linux)
  - Firefox (Windows, macOS, Linux)

## Performance Optimizations

- Static site generation for fast initial load
- SVG-based visualizations (scalable, lightweight)
- GSAP animations use GPU acceleration
- CSS containment for efficient paint cycles
- Lazy loading of formation pages

## Future Enhancements

- [ ] More formations (Sarvatobhadra, Surachakra, etc.)
- [ ] Mobile touch controls for formation interaction
- [ ] 3D formation visualizations
- [ ] Comparison mode between formations
- [ ] Historical battle case studies
- [ ] Formation strategy calculator

## License

MIT

## Credits

Created as an educational exploration of ancient Indian military science and strategic geometric formations.

---

**Vyuha Rachana** © 2026 — Exploring the Mathematical Precision of Ancient Indian Military Strategy
