# Image Integration Guide

## Overview

This guide explains how to replace placeholder images with real photos from your existing Kendall Klean website.

## Getting Images from Your Existing Site

### Method 1: Direct Download
1. Visit your existing website: `kendallklean.com`
2. Right-click on any before/after photo
3. Select "Save image as..."
4. Save to your computer

### Method 2: Inspect Element
1. Visit your existing website
2. Press F12 to open Developer Tools
3. Go to Elements/Inspector tab
4. Find the image element and copy the image URL
5. Download using your browser or command line:
   ```bash
   curl -O "https://example.com/image.jpg"
   ```

## Organizing Images

Create the following folder structure in `/public/`:

```
public/
├── images/
│   ├── gallery/
│   │   ├── house-washing-1-before.jpg
│   │   ├── house-washing-1-after.jpg
│   │   ├── driveway-1-before.jpg
│   │   ├── driveway-1-after.jpg
│   │   ├── roof-1-before.jpg
│   │   ├── roof-1-after.jpg
│   │   ├── deck-1-before.jpg
│   │   ├── deck-1-after.jpg
│   │   ├── gutter-1-before.jpg
│   │   ├── gutter-1-after.jpg
│   │   ├── commercial-1-before.jpg
│   │   └── commercial-1-after.jpg
│   ├── hero/
│   │   ├── hero-home.jpg
│   │   ├── hero-services.jpg
│   │   ├── hero-contact.jpg
│   │   └── hero-gallery.jpg
│   ├── team/
│   │   ├── team-owner.jpg
│   │   └── team-technician.jpg
│   └── logos/
│       ├── logo.png
│       ├── logo-white.png
│       └── og-image.png
```

## Optimizing Images

### Best Practices
- **Format**: Use WebP for best compression, JPG as fallback
- **Size**: 
  - Hero images: 1200×600px
  - Gallery images: 600×400px
  - Thumbnails: 300×200px
- **Quality**: Compress without visible quality loss
- **Tools**: 
  - [TinyPNG](https://tinypng.com/) - Best compression
  - [ImageOptim](https://imageoptim.com/) - Batch optimization
  - [Squoosh](https://squoosh.app/) - Web-based converter

### Command Line Optimization (macOS/Linux)
```bash
# Install ImageMagick
brew install imagemagick

# Resize and compress image
convert input.jpg -resize 1200x600 -quality 85 output.jpg

# Convert to WebP
cwebp input.jpg -o output.webp -q 85
```

## Update Image References

### 1. Update Hero Section Images
Edit pages and update `backgroundImage` prop:

```typescript
// Before
backgroundImage: undefined

// After
backgroundImage: "/images/hero/hero-home.jpg"
```

### 2. Update Gallery Component
Edit `src/components/BeforeAfterGallery.tsx`:

```typescript
const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'House Washing - Transformation',
    service: 'House Washing',
    image: '/images/gallery/house-washing-1-after.jpg',
  },
  // ... add more items
];
```

### 3. Update Service Page Images (Optional)
You can add images to individual service pages:

```typescript
<img 
  src="/images/gallery/house-washing-1-before.jpg"
  alt="Before house washing"
  className="rounded-lg shadow-lg"
/>
```

### 4. Update OG Images
Edit `src/app/layout.tsx` for social media sharing:

```typescript
images: [
  {
    url: '/images/logos/og-image.png',
    width: 1200,
    height: 630,
    alt: businessName,
  },
]
```

## Gallery Component Structure

The gallery is located at: `src/components/BeforeAfterGallery.tsx`

### Add New Gallery Items
```typescript
const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'House Washing - Peoria Home',
    service: 'House Washing',
    image: '/images/gallery/house-washing-1-after.jpg',
  },
  {
    id: '2',
    title: 'Driveway Oil Stain Removal',
    service: 'Driveway Cleaning',
    image: '/images/gallery/driveway-1-after.jpg',
  },
  {
    id: '3',
    title: 'Roof Algae Removal',
    service: 'Roof Cleaning',
    image: '/images/gallery/roof-1-after.jpg',
  },
  // Add more items...
];
```

### Gallery Features
- **Filtering**: Click service type to filter
- **Hover Effects**: Image scales up and shows description
- **Responsive**: Works on mobile, tablet, desktop

## Before/After Implementation

To implement true before/after sliders (optional), use a library like:
- [react-before-after-slider-component](https://npm.io/package/react-before-after-slider-component)
- [juxtapose.js](https://juxtapose.knightlab.com/) (iframe-based)

### Simple Before/After with CSS
```tsx
<div className="relative overflow-hidden rounded-lg">
  <img src="/images/gallery/before.jpg" alt="Before" className="w-full" />
  <img 
    src="/images/gallery/after.jpg" 
    alt="After" 
    className="absolute inset-0 w-full h-full object-cover"
    style={{ clipPath: 'inset(0 50% 0 0)' }}
  />
</div>
```

## Hero Images

Hero sections use background images. Update in each page:

### Home Page (`src/app/page.tsx`)
```typescript
<HeroSection
  backgroundImage="/images/hero/hero-home.jpg"
  title="Professional Pressure Washing in Peoria, IL"
  subtitle="Transform Your Home or Business"
  // ...
/>
```

### Services Page (`src/app/services/page.tsx`)
```typescript
<HeroSection
  backgroundImage="/images/hero/hero-services.jpg"
  title="Our Pressure Washing Services"
  // ...
/>
```

## Best Before/After Photo Combinations

1. **House Washing**
   - Grimy, green-stained siding
   - Clean, bright white siding

2. **Driveway**
   - Black oil stains
   - Clean concrete

3. **Roof**
   - Dark moss/algae growth
   - Clean shingles

4. **Deck**
   - Weathered gray wood
   - Restored natural wood color

5. **Gutter**
   - Overflowing with debris
   - Clean flowing gutters

6. **Commercial**
   - Dirty storefront
   - Pristine storefront

## Image Hosting Alternatives

If you prefer not to host images locally:

### CDN Options (Optional)
- [Cloudinary](https://cloudinary.com/) - Free tier, image optimization
- [Imgix](https://www.imgix.com/) - Image API
- [Bunny CDN](https://bunny.net/) - Affordable CDN

Update image URLs:
```typescript
// Local (recommended)
image: '/images/gallery/photo.jpg'

// Cloudinary
image: 'https://res.cloudinary.com/YOUR_CLOUD/image/upload/v1234567890/photo.jpg'
```

## Image Performance Optimization

### Next.js Image Component (Recommended)
Use `next/image` for automatic optimization:

```typescript
import Image from 'next/image';

export default function GalleryItem() {
  return (
    <Image
      src="/images/gallery/photo.jpg"
      alt="After pressure washing"
      width={600}
      height={400}
      priority={false}
      loading="lazy"
    />
  );
}
```

Benefits:
- Automatic WebP conversion
- Responsive images
- Lazy loading
- Image optimization

## Copyright & Rights

When using images:
- ✅ Use photos from your own projects
- ✅ Use photos where you own rights
- ✅ Use photos with client permission
- ✅ Use royalty-free stock photos as placeholders
- ❌ Don't use competitors' photos
- ❌ Don't use copyrighted photos without permission

## Watermarking (Optional)

To protect your before/after photos, consider adding a watermark:

### Simple CSS Watermark
```css
.gallery-image::after {
  content: '© Kendall Klean Pressure Washing';
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(0,0,0,0.5);
  color: white;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 3px;
}
```

## File Size Checklist

- Homepage: Keep total images under 500KB
- Gallery page: Keep under 2MB for fast loading
- Individual images: 50-200KB each (after compression)
- Hero images: 400×600 minimum (larger for retina displays)

## Updating Images Later

To update images later:
1. Replace files in `/public/images/`
2. Commit changes to git
3. Push to GitHub
4. Vercel auto-deploys
5. Clear browser cache if needed (Ctrl+Shift+Delete)

## Troubleshooting

### Images Not Showing
- Check file path is correct (case-sensitive on Linux)
- Verify files are in `/public` folder
- Use relative paths starting with `/`
- Check browser console for 404 errors

### Images Look Blurry
- Increase image quality setting in compression tool
- Use larger source images (at least 1.5x display size)
- Check browser zoom level (should be 100%)

### Images Take Too Long to Load
- Compress images more
- Resize to smaller dimensions
- Use WebP format
- Implement lazy loading

### Gallery Won't Filter
- Check service names match in galleryItems array
- Verify component state is updating
- Check browser console for JavaScript errors

---

For questions about image implementation, refer to:
- [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)
- [Vercel Image Optimization Guide](https://vercel.com/docs/concepts/image-optimization)
