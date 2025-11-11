# Life to the Fullest LLC - Website

A professional, welcoming website for Life to the Fullest LLC, a psychology practice serving Oak Brook and Orland Park, Illinois.

## Overview

This website provides a warm, inviting digital presence for Life to the Fullest LLC, featuring:

- **Home Page**: Hero section, introduction, services overview, and location highlights
- **About Us**: Practice philosophy, therapeutic approach, team information, and why choose us
- **Services**: Comprehensive listing of all counseling services and specialties
- **Locations**: Dedicated pages for Oak Brook and Orland Park offices
- **Contact**: Contact forms, office information, and appointment requests
- **Resources**: Mental health resources, crisis hotlines, and helpful links

## Technology Stack

- **Framework**: Astro 5 (with React islands)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Deployment**: Configured for Vercel (serverless functions)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lifetothefullest
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser (Astro's default port).

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
lifetothefullest/
├── src/
│   ├── pages/
│   │   ├── about.astro          # About Us page
│   │   ├── contact.astro        # Contact page with forms
│   │   ├── index.astro          # Home page
│   │   ├── resources.astro      # Resources & Links page
│   │   ├── services.astro       # Services page
│   │   ├── 404.astro            # 404 error page
│   │   ├── locations/           # Location pages
│   │   │   ├── oak-brook.astro
│   │   │   └── orland-park.astro
│   │   └── team/
│   │       └── [slug].astro     # Dynamic routes for each team member
│   ├── components/
│   │   ├── Header.tsx           # Navigation header (React)
│   │   ├── Footer.astro        # Site footer
│   │   ├── SchemaMarkup.astro   # SEO schema markup
│   │   ├── ContactForm.tsx     # Contact form (React)
│   │   ├── ServiceCard.tsx     # Service card component (React)
│   │   ├── TeamMemberCard.tsx   # Team member card (React)
│   │   ├── TrustIndicator.tsx   # Trust indicator (React)
│   │   ├── PatientPortalLink.tsx # Patient portal link (React)
│   │   └── HeroSection.astro    # Reusable hero section
│   ├── layouts/
│   │   └── Layout.astro         # Root layout with metadata
│   ├── lib/
│   │   └── staff.ts              # Staff member data and utilities
│   └── styles/
│       └── globals.css           # Global styles and Tailwind
├── public/                       # Static assets (images, robots.txt)
├── astro.config.mjs             # Astro configuration
├── vercel.json                  # Vercel deployment config
└── package.json
```

## Features

### Design & UX

- **Modern Color Palette**: Vibrant blue (#4F8FE6) with coral accents (#FF7B7B)
- **Responsive Design**: Mobile-first approach, works on all devices
- **Accessibility**: Semantic HTML, ARIA labels, proper contrast, keyboard navigation
- **Performance**: Optimized images with lazy loading, code splitting via Astro islands
- **User Experience**: Toast notifications instead of alerts, smooth animations

### SEO Optimization

- **Location-Specific Pages**: Separate pages for each office location
- **Schema Markup**: Structured data for local business information (JSON-LD)
- **Meta Tags**: Optimized titles and descriptions for each page
- **Open Graph & Twitter Cards**: Social media sharing optimization
- **Canonical URLs**: Prevents duplicate content issues
- **Sitemap**: Auto-generated XML sitemap
- **robots.txt**: Search engine crawler configuration
- **Local SEO**: Community names and location keywords throughout

### Key Pages

1. **Home**: Welcoming hero with nature background, service overview, location teasers
2. **About**: Practice philosophy, team member cards with summaries, therapeutic approach
3. **Team Members**: Individual pages for each therapist with full bios and credentials
4. **Services**: Detailed service listings with descriptions
5. **Locations**: Individual pages for Oak Brook and Orland Park with maps
6. **Contact**: Contact forms, office hours, addresses
7. **Resources**: Crisis hotlines, mental health organizations, helpful links

## Customization

### Updating Contact Information

Edit the following files:
- `src/components/Footer.astro` - Footer contact info
- `src/pages/contact.astro` - Contact page details
- `src/pages/locations/*.astro` - Location-specific contact info

### Managing Team Members

Team member data is centralized in `src/lib/staff.ts`:
- Each member has a `summary` (for card display) and full `bio` (for individual pages)
- Individual pages are automatically generated at `/team/[slug]` via Astro's static site generation
- Update staff information in one place and it reflects across the site
- Team member cards on the About page link to their individual pages
- Images are optimized with lazy loading and proper alt text

### Patient Portal Integration

The Patient Portal link uses a custom component (`src/components/PatientPortalLink.tsx`) that shows a helpful notification. To update:
- Edit `src/components/PatientPortalLink.tsx` to change the notification message or add actual portal URL
- The component is used in `src/components/Header.tsx` and `src/pages/contact.astro`

### Form Submission

The contact form in `src/components/ContactForm.tsx` currently uses a placeholder submission handler. Integrate with your preferred form service:

- Formspree
- Netlify Forms
- EmailJS
- Custom API endpoint
- Vercel Serverless Functions (recommended for Astro)

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Vercel auto-detects Astro configuration
4. Deploy automatically

The project is configured with `@astrojs/vercel` adapter for optimal serverless deployment.

### Other Platforms

The site can be deployed to any platform supporting Astro:
- Netlify (with `@astrojs/netlify` adapter)
- Cloudflare Pages (with `@astrojs/cloudflare` adapter)
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Environment Variables

Currently, no environment variables are required. If you add form handling or other services, create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
FORM_SUBMISSION_ENDPOINT=your-endpoint
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2024 Life to the Fullest LLC. All rights reserved.

## Support

For questions or issues with the website, please contact the development team.

---

**Version**: 2.0.0  
**Last Updated**: 2025

## Changelog

### v2.0.0 - Major Migration & Optimization Release
- **Framework Migration**: Migrated from Next.js to Astro 5 with React islands architecture
- **Performance Optimizations**:
  - Changed Header to `client:idle` (loads after initial page render)
  - Changed interactive components to `client:visible` (lazy load when visible)
  - Added lazy loading to all staff images
  - Added resource hints (DNS prefetch, preconnect) for external resources
- **SEO Enhancements**:
  - Added Open Graph and Twitter Card metadata to all pages
  - Added canonical URLs to prevent duplicate content
  - Created robots.txt with sitemap reference
  - Enhanced meta tags and structured data
- **User Experience**:
  - Replaced alert() dialogs with modern toast notifications (PatientPortalLink component)
  - Created custom 404 error page with helpful navigation
  - Improved image alt text with credentials
- **Accessibility**:
  - Added ARIA labels and roles throughout
  - Improved keyboard navigation
  - Enhanced semantic HTML structure
  - Better screen reader support
- **Code Quality**:
  - Fixed TypeScript type issues with lucide-react
  - Improved component structure and reusability
  - Better error handling with proper 404 redirects
  - Consistent code patterns across the codebase

### v1.0.6
- Fixed TypeScript error in resources page by adding proper type definitions

### v1.0.5
- Modernized homepage design with brighter, more contemporary styling
- Updated color scheme to vibrant blue (#4F8FE6) with coral accents (#FF7B7B)
- Enhanced typography with larger headings and improved spacing
- Added gradient accent lines and modern card designs
- Improved hero section overlay (slate/gray-blue at 75% opacity)
- Updated button styling across all pages with consistent modern design
- Enhanced service cards with gradient backgrounds and hover effects

### v1.0.4
- Added individual team member pages with full bios
- Created concise summaries for team member cards
- Enhanced About page with clickable team member cards
- Improved hero section with nature-themed background image
- Added dark overlay for better text readability

### v1.0.3
- Integrated staff content from original website
- Enhanced button styling and accessibility

### v1.0.2
- Replaced emojis with lucide-react icons
- Improved footer address mapping

### v1.0.1
- Initial homepage optimizations
- SEO enhancements

### v1.0.0
- Initial release
- Complete site structure and pages
