# Handled Studio Website

## Project Overview

This is the marketing website for **Handled Studio**, a premium wedding concierge service specializing in bespoke wedding paper (invitations, save the dates, etc.) and custom wedding websites.

**Live site**: Deployed via Vercel (connected to GitHub repo)
**Repository**: https://github.com/tyadon/handled-studio-web
**Design aesthetic**: Editorial luxury - magazine-inspired, dramatic typography, refined elegance

## Deployment

- **Platform**: Vercel
- **Method**: Auto-deploy from GitHub `main` branch
- **Build**: `npm run build` (Next.js static export)
- Pushes to `main` automatically trigger new deployments

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS with custom theme
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Fonts**: Cormorant Garamond (display), Outfit (body), Cormorant SC (accents)

## Project Structure

```
app/
├── layout.tsx          # Root layout with fonts & metadata
├── page.tsx            # Main landing page (assembles all sections)
└── globals.css         # Global styles, Tailwind imports, custom utilities

components/
├── Header.tsx          # Fixed navigation with mobile menu
├── Hero.tsx            # Hero section with SVG illustration
├── Introduction.tsx    # Brand story section
├── Services.tsx        # Paper & Website services cards
├── Process.tsx         # 4-step journey (Discover, Design, Deliver, Done)
├── Portfolio.tsx       # Work showcase grid
├── Testimonial.tsx     # Customer quote
├── CallToAction.tsx    # Contact CTA section
├── Footer.tsx          # Site footer
└── ui/
    ├── Button.tsx          # Styled button component
    ├── SectionReveal.tsx   # Scroll-triggered reveal wrapper
    └── AnimatedText.tsx    # Text animation component

lib/
└── utils.ts            # Utility functions (cn for classnames)

tailwind.config.ts      # Custom theme with brand colors & typography
```

## Brand Colors

| Name | Hex | Usage |
|------|-----|-------|
| Burgundy 900 | `#722F37` | Primary brand color, CTAs, accents |
| Cream 100 | `#FAF7F2` | Primary background |
| Cream 50 | `#FFFDF9` | Alternate section backgrounds |
| Blush 200 | `#E8D5D0` | Soft accents |
| Ink 900 | `#1A1A1A` | Primary text |
| Ink 500 | `#6B6461` | Secondary text |

## Key Design Patterns

### Typography
- Display headlines use `font-display` (Cormorant Garamond)
- Body text uses `font-body` (Outfit)
- Labels/captions use `font-accent` (Cormorant SC) with letter-spacing
- Responsive font sizes via `text-display-xl`, `text-display-lg`, etc.

### Animations
- All scroll animations use `SectionReveal` component
- Staggered delays for grouped elements (0.1s increments)
- Consistent easing: `[0.22, 1, 0.36, 1]` (luxury feel)
- Animation durations: 0.6s-1s for reveals

### Layout
- Max container width: `90rem`
- Horizontal padding: `px-6 md:px-12 lg:px-20`
- Section vertical spacing: `py-section` (responsive clamp)

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Content to Replace

When adding real content, update:

1. **Portfolio section** (`components/Portfolio.tsx`)
   - Replace placeholder items with real project images
   - Update couple names and categories

2. **Testimonial** (`components/Testimonial.tsx`)
   - Replace with real customer quote

3. **Hero illustration** (`components/Hero.tsx`)
   - The SVG illustration can be replaced with actual brand assets if preferred

4. **Images**
   - Add real images to `public/images/`
   - Currently using styled placeholders

## Adding New Sections

1. Create component in `components/`
2. Use `SectionReveal` for scroll animations
3. Follow existing padding/spacing patterns
4. Import and add to `app/page.tsx`

## Contact Information

- Email: Hello@handled.studio
- Instagram: @handled_studio

## Notes

- The site is a single-page landing page
- All navigation uses anchor links (#services, #process, etc.)
- Mobile menu is full-screen overlay with animated hamburger
- Header becomes sticky with backdrop blur on scroll
