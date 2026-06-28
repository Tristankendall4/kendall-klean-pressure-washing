# Images Directory

This folder contains all images used on the Kendall Klean website.

## Structure

```
images/
├── gallery/
│   ├── house-washing-before.jpg
│   ├── house-washing-after.jpg
│   ├── driveway-before.jpg
│   ├── driveway-after.jpg
│   ├── roof-before.jpg
│   ├── roof-after.jpg
│   ├── deck-before.jpg
│   ├── deck-after.jpg
│   ├── gutter-before.jpg
│   ├── gutter-after.jpg
│   ├── commercial-before.jpg
│   └── commercial-after.jpg
└── hero/
    ├── hero-home.jpg
    ├── hero-services.jpg
    ├── hero-contact.jpg
    └── hero-gallery.jpg
```

## How to Add Images

1. **Download images from your existing website** at kendallklean.com
2. **Optimize images for web:**
   - Use TinyPNG or ImageOptim to compress
   - Resize to appropriate dimensions
   - Convert to WebP for better performance
3. **Add to appropriate folder:**
   - Gallery before/after photos → `/gallery/`
   - Hero section background images → `/hero/`
4. **Update component references:**
   - Gallery: Edit `src/components/BeforeAfterGallery.tsx`
   - Hero images: Edit page files in `src/app/`

## Image Guidelines

- **Gallery images:** 600×400px, JPG or WebP format
- **Hero images:** 1200×600px minimum, JPG or WebP format
- **Max file size per image:** 150KB (use compression tools)
- **Format:** JPG for photos, WebP for better performance, PNG for graphics

## References

- See `IMAGE_GUIDE.md` in the project root for detailed integration instructions
- Current gallery images use Unsplash placeholders (see `BeforeAfterGallery.tsx`)
- Hero sections may use placeholder gradients until images are added
