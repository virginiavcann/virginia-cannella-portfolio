# Fixed Image Paths - No Leading Slash & PNG Extension

## Changes Made

1. ✅ **Removed leading slash** - Changed `/images/` to `images/`
2. ✅ **Changed extension to .png** - All images now use `.png` instead of `.jpg`

## Updated Image Filenames

### Home Page
- `images/hero.png` (was `/images/hero.jpg`)

### Portfolio Page
- `images/art-preview.png` (was `/images/art-preview.jpg`)
- `images/curation-preview.png` (was `/images/curation-preview.jpg`)
- `images/writing-preview.png` (was `/images/writing-preview.jpg`)

### Art Page
- `images/fibers-1.png` (was `/images/fibers-1.jpg`)
- `images/fibers-2.png` (was `/images/fibers-2.jpg`)
- `images/2d-1.png` (was `/images/2d-1.jpg`)
- `images/2d-2.png` (was `/images/2d-2.jpg`)
- `images/digital-1.png` (was `/images/digital-1.jpg`)
- `images/digital-2.png` (was `/images/digital-2.jpg`)

## Files to Replace

**3 page files:**
- `src/pages/home.js` - Updated hero image path
- `src/pages/portfolio.js` - Updated preview image paths
- `src/pages/art.js` - Updated all art image paths

## How to Install

1. **Replace the files** in your project:
   - Copy `src/pages/home.js` to your `portfolio-site/src/pages/` folder
   - Copy `src/pages/portfolio.js` to your `portfolio-site/src/pages/` folder
   - Copy `src/pages/art.js` to your `portfolio-site/src/pages/` folder

2. **Make sure your images are .png files** in the `public/images/` folder:
   - Convert any .jpg files to .png, OR
   - Rename your existing files to have .png extension

3. **Refresh your browser** with a hard refresh:
   - Mac: `Cmd + Shift + R`
   - Windows/Linux: `Ctrl + Shift + R`

## Important Note

All images should be in `public/images/` folder with `.png` extension:
- `public/images/hero.png`
- `public/images/art-preview.png`
- `public/images/curation-preview.png`
- `public/images/writing-preview.png`
- `public/images/fibers-1.png`
- `public/images/fibers-2.png`
- `public/images/2d-1.png`
- `public/images/2d-2.png`
- `public/images/digital-1.png`
- `public/images/digital-2.png`

The paths now work correctly without the leading slash!