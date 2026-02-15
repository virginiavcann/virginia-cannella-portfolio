# Portfolio Website

A clean, professional portfolio website built with Vite and deployed on GitHub Pages.

## Features

- 📱 Fully responsive design (mobile and desktop)
- 🎨 Clean, professional aesthetic with cream background and royal blue accents
- 🖼️ Image gallery support for artwork
- 🔗 Multi-page navigation with routing
- ⚡ Fast performance with Vite
- 🚀 Easy deployment to GitHub Pages

## Color Palette

- Background: Cream (#FFFDD0)
- Primary Text: Royal Blue (#4169E1)
- Secondary Text: Darker Royal Blue (#2B4C9F)

## Font

The site uses IBM Plex Sans from Google Fonts, a clean, professional Helvetica-like typeface.

## Project Structure

```
portfolio-site/
├── public/
│   └── images/          # Place your images here
├── src/
│   ├── pages/           # Page components
│   │   ├── home.js
│   │   ├── portfolio.js
│   │   ├── art.js
│   │   ├── cv.js
│   │   ├── bio.js
│   │   └── contact.js
│   ├── styles/
│   │   └── main.css     # Main stylesheet
│   └── main.js          # App entry point and router
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Setup Instructions

### 1. Initialize the Project

```bash
cd portfolio-site
npm install
```

### 2. Add Your Images

Place your images in the `public/images/` folder:

- `hero.jpg` - Main landing page image
- `art-preview.jpg`, `curation-preview.jpg`, `writing-preview.jpg` - Portfolio previews
- `fibers-1.jpg`, `fibers-2.jpg` - Fibers artwork
- `2d-1.jpg`, `2d-2.jpg` - 2D artwork
- `digital-1.jpg`, `digital-2.jpg` - Digital artwork

The site includes SVG placeholders if images are missing.

### 3. Customize Content

Edit the following files to add your information:

- `src/pages/home.js` - Change "Your Name" to your actual name
- `src/pages/cv.js` - Add your CV content
- `src/pages/bio.js` - Add your biography
- `src/pages/contact.js` - Update contact information
- `src/pages/art.js` - Customize artwork titles and add more pieces

### 4. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your site.

## GitHub Pages Deployment

### Step 1: Update vite.config.js

Edit `vite.config.js` and replace `'your-repo-name'` with your actual GitHub repository name:

```javascript
export default defineConfig({
  base: '/your-repo-name/', // e.g., '/my-portfolio/'
})
```

### Step 2: Create GitHub Repository

1. Create a new repository on GitHub (e.g., `my-portfolio`)
2. Initialize git in your project folder:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/your-repo-name.git
git push -u origin main
```

### Step 3: Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
1. Build your site
2. Push the built files to the `gh-pages` branch
3. GitHub will automatically serve your site

### Step 4: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll to **Pages** section
4. Under **Source**, select `gh-pages` branch
5. Click **Save**

Your site will be live at: `https://YOUR_USERNAME.github.io/your-repo-name/`

## Updating Your Site

After making changes:

```bash
git add .
git commit -m "Update content"
git push origin main
npm run deploy
```

## Page Structure

### Home Page
- Name/title at top center
- Navigation links with submenus
- Hero image from static resources

### Portfolio
- Overview of work categories
- Preview images for Art, Curation, and Writing

### Art
- Gallery layout with three categories:
  - Fibers
  - 2D
  - Digital

### CV
- Education
- Exhibitions
- Publications
- Awards & Recognition
- Professional Experience

### Bio
- Personal story and artistic journey

### Contact
- Email
- Social media links
- Location

## Adding More Images

To add more artwork to the Art page:

1. Add your image to `public/images/` (e.g., `fibers-3.jpg`)
2. Edit `src/pages/art.js` and add a new gallery item:

```javascript
<div class="gallery-item">
  <img src="/images/fibers-3.jpg" alt="Fibers work 3" />
  <div class="gallery-item-title">Fibers Work 3</div>
</div>
```

## Customization

### Changing Colors

Edit CSS variables in `src/styles/main.css`:

```css
:root {
  --cream: #FFFDD0;
  --royal-blue: #4169E1;
  --royal-blue-dark: #2B4C9F;
  /* Add more custom colors */
}
```

### Changing Font

Update the Google Fonts link in `index.html` and the font-family in `src/styles/main.css`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This is your personal portfolio site - customize it however you like!

## Troubleshooting

### Images not showing
- Check that images are in `public/images/` folder
- Verify image filenames match exactly (case-sensitive)
- Check browser console for 404 errors

### GitHub Pages not updating
- Wait a few minutes after deployment
- Clear browser cache
- Check GitHub Actions tab for build status

### Site not loading on GitHub Pages
- Verify `base` path in `vite.config.js` matches your repo name
- Check that `gh-pages` branch exists
- Ensure GitHub Pages is enabled in repository settings
