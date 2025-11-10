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

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Deployment**: Ready for Vercel, Netlify, or any Node.js hosting

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

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
lifetothefullest/
├── app/
│   ├── about/          # About Us page
│   ├── contact/        # Contact page with forms
│   ├── locations/      # Location pages
│   │   ├── oak-brook/
│   │   └── orland-park/
│   ├── resources/      # Resources & Links page
│   ├── services/       # Services page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   └── SchemaMarkup.tsx # SEO schema markup
├── public/             # Static assets
└── package.json
```

## Features

### Design & UX

- **Calming Color Palette**: Soft blues (#4a90a4) and warm neutrals for a therapeutic feel
- **Responsive Design**: Mobile-first approach, works on all devices
- **Accessibility**: Semantic HTML, proper contrast, keyboard navigation
- **Fast Loading**: Optimized images and code splitting

### SEO Optimization

- **Location-Specific Pages**: Separate pages for each office location
- **Schema Markup**: Structured data for local business information
- **Meta Tags**: Optimized titles and descriptions for each page
- **Local SEO**: Community names and location keywords throughout

### Key Pages

1. **Home**: Welcoming hero, service overview, location teasers
2. **About**: Practice philosophy, team bios, therapeutic approach
3. **Services**: Detailed service listings with descriptions
4. **Locations**: Individual pages for Oak Brook and Orland Park with maps
5. **Contact**: Contact forms, office hours, addresses
6. **Resources**: Crisis hotlines, mental health organizations, helpful links

## Customization

### Updating Contact Information

Edit the following files:
- `components/Footer.tsx` - Footer contact info
- `app/contact/page.tsx` - Contact page details
- `app/locations/*/page.tsx` - Location-specific contact info

### Adding Therapist Bios

Update `app/about/page.tsx` to replace placeholder team member sections with actual therapist information, photos, and credentials.

### Patient Portal Integration

Update the Patient Portal link in:
- `components/Header.tsx` - Replace `#patient-portal` with actual portal URL
- `app/contact/page.tsx` - Update portal link

### Form Submission

The contact form in `app/contact/page.tsx` currently uses a placeholder submission handler. Integrate with your preferred form service:

- Formspree
- Netlify Forms
- EmailJS
- Custom API endpoint

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform supporting Next.js:
- Netlify
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

**Version**: 1.0.0  
**Last Updated**: 2024
