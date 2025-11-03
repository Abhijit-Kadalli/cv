# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Abhijit Kadalli, hosted on GitHub Pages at https://abhijit-kadalli.github.io/cv/. The site showcases research experience in Data and Computational Neuroscience, projects, skills, and a blog focused on applied mathematics, machine learning, and neuroscience.

## Architecture

### Static Site Structure
- **Main portfolio**: `index.html` - Single-page application with sections (About, Experience, Projects, Skills, Contact)
- **Blog**: `blog/` directory with `index.html` listing posts and `posts/` subdirectory for individual articles
- **Styling**: Single CSS file at `css/styles.css` with mobile-first responsive design
- **No build system**: Pure HTML/CSS with inline JavaScript for minimal interactivity

### Path Handling
The site uses a `<base href="/cv/">` tag in the main index.html to handle GitHub Pages deployment. All asset paths are absolute from the `/cv/` root:
- Images: `/cv/images/profilepic.png`
- CSS: Referenced relative to document location
- Blog paths: `/cv/blog/index.html`

**Important**: When adding new pages or assets, ensure paths account for the `/cv/` base path.

### Content Organization
- **Hero section**: Introduction with CTA buttons (Email, GitHub, LinkedIn)
- **Experience cards**: First card spans full width (featured role), remaining cards in 2-column grid on desktop
- **Projects**: Grid of project cards, some with GitHub links
- **Blog posts**: Individual HTML files in `blog/posts/` with `.post-raw` class for pre-formatted content that preserves line breaks

### Styling Conventions
- Primary color: `#0e1b22` (dark text/backgrounds)
- Background: `#f7f7f7` (light gray)
- Font: Montserrat from Google Fonts
- Cards use hover effects: `translateY(-2px)` with box-shadow
- Desktop breakpoint at `1024px` increases font sizes for readability
- Mobile breakpoint at `880px` switches to single-column layouts
- Sticky header with blur backdrop effect

### SEO & Metadata
- Structured data (JSON-LD) for Person schema in main index
- OpenGraph and Twitter Card meta tags
- Canonical URLs specified
- Semantic HTML with proper heading hierarchy

## Development Workflow

### Testing Locally
Since this is a static site, simply open `index.html` in a browser:
```bash
# Option 1: Direct file open
firefox index.html

# Option 2: Local HTTP server (recommended for testing base path)
python -m http.server 8000
# Then visit http://localhost:8000/
```

### Deployment
The site deploys automatically via GitHub Pages from the `main` branch. After pushing commits:
```bash
git add .
git commit -m "Description of changes"
git push origin main
```
Changes appear at https://abhijit-kadalli.github.io/cv/ within minutes.

### Adding Blog Posts
1. Create new HTML file in `blog/posts/` (e.g., `blog/posts/my-new-post.html`)
2. Copy structure from existing post (e.g., `real-time-eeg-lsl.html`)
3. Add entry to `blog/index.html` in the cards section
4. Use `.post-raw` class for main content to preserve formatting

### Editing Content
- Experience/Projects: Edit directly in `index.html` within respective `<section>` tags
- Styles: All CSS in `css/styles.css` - organized by component (header, hero, cards, footer, etc.)
- Contact info: Update in both footer and contact section
- Skills: Edit in `#skills .skills-grid` section

## Common Patterns

### Card Component
```html
<article class="card">
  <header class="card-header">
    <h3>Title</h3>
    <div class="meta">Metadata</div>
  </header>
  <p>Description</p>
  <div class="tags">Tag1 • Tag2 • Tag3</div>
</article>
```

### Clickable Cards
Add `.card-hit` element to make entire card clickable:
```html
<article class="card">
  <!-- content -->
  <a class="card-hit" href="url" aria-label="Description"></a>
</article>
```

### Blog Post Structure
Blog posts use `.post-raw` for main content which preserves whitespace and line breaks:
```html
<pre class="post-raw">Your content here
with preserved
line breaks</pre>
```

## Key Files

- `index.html` - Main portfolio page (285 lines)
- `css/styles.css` - All styling (114 lines)
- `blog/index.html` - Blog listing page
- `blog/posts/*.html` - Individual blog posts
- `images/profilepic.png` - Profile photo
- `running.gif` - Favicon

## Notes

- No JavaScript framework dependencies
- No package.json or build tooling
- Google Fonts (Montserrat, Merriweather) loaded from CDN
- Year in footer auto-updates via inline script
- Design emphasizes readability with generous line-height and responsive typography
