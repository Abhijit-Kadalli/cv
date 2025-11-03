# Abhijit Kadalli — Portfolio

Modern portfolio website built with **Next.js 15**, featuring a blog and showcasing research in Data and Computational Neuroscience.

🌐 **Live Site:** https://abhijit-kadalli.github.io/cv/

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Custom CSS
- **Deployment:** GitHub Pages

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment to GitHub Pages

The site is configured to deploy to GitHub Pages at `/cv/` subpath.

### First-Time Setup

1. Build the site:
```bash
npm run build
```

2. Push the `out` directory to `gh-pages` branch:
```bash
git subtree push --prefix out origin gh-pages
```

3. Configure GitHub Pages to serve from the `gh-pages` branch

### Subsequent Deployments

Simply run:
```bash
npm run build
git add out
git commit -m "Update site"
git subtree push --prefix out origin gh-pages
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Main portfolio page
│   ├── layout.tsx         # Root layout with metadata
│   ├── globals.css        # Global styles
│   └── blog/              # Blog section
│       ├── page.tsx       # Blog index
│       └── posts/         # Individual blog posts
├── components/            # Reusable React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Card.tsx
├── public/                # Static assets
│   └── images/           # Images and icons
└── next.config.ts        # Next.js configuration
```

## Features

- **Responsive Design:** Mobile-first approach with breakpoints at 880px and 1024px
- **SEO Optimized:** OpenGraph, Twitter Cards, JSON-LD structured data
- **Static Export:** Fully static site, no server required
- **Fast Performance:** Optimized fonts, images, and minimal JavaScript
- **Blog System:** File-based routing for blog posts

## Original Site

The original static HTML/CSS version is preserved in the `old-static-site` branch:
```bash
git checkout old-static-site
```

## License

© 2025 Abhijit Kadalli
