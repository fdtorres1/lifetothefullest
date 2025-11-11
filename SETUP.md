# Setup & Deployment Guide

## Git Repository Setup

The project has been initialized with git and the initial commit has been made. To push to a remote repository:

### Option 1: Create a New GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository named `lifetothefullest`
2. Do NOT initialize it with a README, .gitignore, or license (we already have these)
3. Copy the repository URL (e.g., `https://github.com/yourusername/lifetothefullest.git`)

4. Add the remote and push:
```bash
git remote add origin https://github.com/yourusername/lifetothefullest.git
git branch -M main
git push -u origin main
```

### Option 2: Use Existing Remote

If you already have a remote repository:
```bash
git remote add origin <your-repository-url>
git push -u origin main
```

## Next Steps After Pushing

1. **Set up deployment** (recommended: Vercel)
   - Connect your GitHub repository
   - Deploy automatically on push

2. **Update Patient Portal URL**
   - Edit `src/components/PatientPortalLink.tsx`
   - Update notification message or add actual portal URL

3. **Configure Contact Form**
   - Set up form submission service (Formspree, Netlify Forms, etc.)
   - Update form handler in `src/components/ContactForm.tsx`

4. **Add Therapist Information**
   - Update `src/lib/staff.ts` with team member data
   - Individual pages are auto-generated at `/team/[slug]`

5. **Customize Domain**
   - Point your domain to the deployed site
   - Update any hardcoded URLs if needed

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (Astro default port: 4321)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code
npm run lint
```

## Environment Setup

Currently no environment variables are required. If you add:
- Form submission services
- Analytics
- Other third-party integrations

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
# Add other variables as needed
```

## Deployment Platforms

### Vercel (Recommended for Astro)
1. Import your GitHub repository
2. Vercel auto-detects Astro (configured with `@astrojs/vercel` adapter)
3. Deploy with one click
4. The project uses serverless functions for optimal performance

### Netlify
1. Connect GitHub repository
2. Install `@astrojs/netlify` adapter: `npm install @astrojs/netlify`
3. Update `astro.config.mjs` to use Netlify adapter
4. Build command: `npm run build`
5. Publish directory: `dist`

### Other Platforms
Any platform supporting Node.js and Astro will work. Ensure:
- Node.js 18+ is available (Node.js 22 recommended for Vercel)
- Build command: `npm run build`
- Install appropriate Astro adapter for your platform

