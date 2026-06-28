# Quick Start Deployment Checklist

## Pre-Deployment (Local Testing)

### 1. Install & Configure
- [x] `npm install` - Install all dependencies (✅ Done)
- [ ] Update `.env.local` with business information
- [x] `npm run build` - Production build tested successfully
- [ ] Test with `npm run dev` - Verify all pages load locally

### 2. Test All Pages
- [ ] Home page (/): All CTAs working, forms functional
- [ ] Services (/services): All 7 service links working
- [ ] Individual services: house-washing, driveway-cleaning, roof-cleaning, deck-fence, gutter-cleaning, commercial, fleet-washing
- [ ] Gallery (/gallery): Images loading, filters working
- [ ] Contact (/contact): Form submissions working
- [ ] Service areas: peoria, east-peoria, pekin pages
- [ ] Mobile responsiveness: Test on mobile device/browser

### 3. Test Conversions
- [ ] Mobile sticky button works on mobile view
- [ ] All forms can be submitted (check console)
- [ ] Phone numbers are clickable on mobile (`tel:` links)
- [ ] CTAs contrast is visible and clickable

### 4. SEO Verification
- [ ] Sitemap generates at `/sitemap.xml`
- [ ] Robots.txt at `/robots.txt`
- [ ] Meta titles and descriptions on all pages
- [ ] Schema.org markup in source (View Page Source)
- [ ] No console errors

### 5. Performance Check
- [ ] Run `npm run build` successfully
- [ ] Check build output for errors
- [ ] Test production build with `npm start`

## Deployment to Vercel

### 1. Prepare Repository
```bash
git add .
git commit -m "Initial Kendall Klean pressure washing site"
git push origin main
```

### 2. Create Vercel Account
- [ ] Sign up at [vercel.com](https://vercel.com)
- [ ] Connect GitHub account
- [ ] Authorize Vercel to access repositories

### 3. Deploy Project
- [ ] Click "New Project" in Vercel
- [ ] Select your GitHub repository
- [ ] Vercel should auto-detect Next.js
- [ ] Click "Deploy"
- [ ] Wait for deployment to complete (~3-5 minutes)

### 4. Add Environment Variables
In Vercel Project Settings > Environment Variables:
- [ ] `NEXT_PUBLIC_PHONE_NUMBER`
- [ ] `NEXT_PUBLIC_BUSINESS_NAME`
- [ ] `NEXT_PUBLIC_BUSINESS_EMAIL`
- [ ] `NEXT_PUBLIC_BUSINESS_ADDRESS`
- [ ] `NEXT_PUBLIC_LATITUDE` (40.6936 for Peoria)
- [ ] `NEXT_PUBLIC_LONGITUDE` (-89.5891 for Peoria)
- [ ] `NEXT_PUBLIC_SERVICE_AREA`

Re-deploy after adding variables.

### 5. Configure Custom Domain
- [ ] Go to Vercel project settings
- [ ] Under "Domains", add `kendallklean.com`
- [ ] Choose DNS provider or use Vercel DNS
- [ ] If using existing registrar:
  - Update nameservers to Vercel's nameservers
  - Wait 24-48 hours for propagation
- [ ] Test domain in browser

## Post-Deployment

### 1. Verify Deployment
- [ ] Visit `https://kendallklean.com`
- [ ] Test all pages load correctly
- [ ] Test mobile view
- [ ] Verify CTAs and forms
- [ ] Test phone links on mobile

### 2. Google Search Console
- [ ] Sign up at [search.google.com](https://search.google.com)
- [ ] Add property for `kendallklean.com`
- [ ] Verify ownership (DNS method recommended)
- [ ] Submit sitemap: `https://kendallklean.com/sitemap.xml`
- [ ] Wait for Google to index site (24-48 hours)

### 3. Google Business Profile
- [ ] Go to [google.com/business](https://www.google.com/business/)
- [ ] Verify your business
- [ ] Add photos (before/after cleaning photos)
- [ ] Update business hours and services
- [ ] Add website link
- [ ] Add service areas

### 4. Analytics Setup
- [ ] Sign up for Google Analytics 4
- [ ] Get Measurement ID (G-XXXXXXXXXX)
- [ ] Update `.env.local` with ID
- [ ] Update Vercel environment variables
- [ ] Verify tracking is working (check GA dashboard)

### 5. Monitoring
- [ ] Enable Vercel Analytics in project settings
- [ ] Monitor Core Web Vitals in Vercel dashboard
- [ ] Set up error notifications
- [ ] Add email notifications for failed deployments

## Image Integration

### 1. Prepare Your Images
- [ ] Export before/after photos from existing site
- [ ] Optimize images:
  - Resize to appropriate dimensions
  - Compress with TinyPNG or similar
  - Convert to WebP for better performance
- [ ] Organize by service type

### 2. Add Images to Website
- [ ] Create folders in `/public/images/`:
  - `/public/images/gallery/` (before/after photos)
  - `/public/images/services/` (service icons/photos)
  - `/public/images/testimonials/` (customer photos)

### 3. Update Image URLs
In components, replace placeholder image URLs:
```javascript
// Before
image: 'https://images.unsplash.com/photo-...'

// After
image: '/images/gallery/house-washing-before-after.webp'
```

### 4. Update Gallery
In `src/components/BeforeAfterGallery.tsx`:
- Update galleryItems array with real image paths
- Update service titles and descriptions
- Update image dimensions

## Content Updates

### 1. Business Information
- [ ] Update phone number (currently +1-309-555-0100)
- [ ] Update email (currently info@kendallklean.com)
- [ ] Update address and coordinates
- [ ] Update service areas if needed

### 2. Pricing
- [ ] Update pricing ranges in:
  - `src/components/PricingSection.tsx`
  - Individual service pages

### 3. Reviews
- [ ] Replace mock reviews with real customer testimonials:
  - `src/components/ReviewsSection.tsx`
  - Add real names and service types
  - Keep 5-star ratings (only show genuine reviews)

### 4. About Section
- [ ] Add real company story
- [ ] Update experience years
- [ ] Add team member information
- [ ] Add company achievements/certifications

## Marketing & Growth

### 1. Directory Listings
- [ ] Google Business Profile (completed above)
- [ ] Yelp Business profile
- [ ] Angie's List
- [ ] HomeAdvisor
- [ ] Local chamber of commerce website
- [ ] Peoria Better Business Bureau

### 2. Local SEO
- [ ] Ensure business name, address, phone (NAP) consistent across all listings
- [ ] Get local backlinks from directories and local news
- [ ] Add schema.org LocalBusiness markup (already done)

### 3. Social Media
- [ ] Create Facebook business page
- [ ] Link to website in bio
- [ ] Post before/after photos regularly
- [ ] Encourage customer reviews

### 4. Email Marketing (Optional)
- [ ] Set up email service (Mailchimp, Klaviyo, etc.)
- [ ] Create newsletter signup form
- [ ] Send monthly cleaning tips and seasonal promotions

## Ongoing Maintenance

### Weekly
- [ ] Monitor form submissions
- [ ] Check for broken links
- [ ] Monitor phone call volume

### Monthly
- [ ] Update gallery with new projects
- [ ] Add new customer reviews
- [ ] Check analytics and conversion rates
- [ ] Verify all CTAs are working

### Quarterly
- [ ] Update pricing if needed
- [ ] Refresh service descriptions
- [ ] Check Core Web Vitals
- [ ] Review and respond to online reviews

### Annually
- [ ] Update business information if changed
- [ ] Refresh design/content
- [ ] Plan SEO improvements
- [ ] Review and update deployment

## Troubleshooting

### Page Not Loading
```bash
npm run build
# Check for errors in output
npm start
# Test locally
```

### Environment Variables Not Working
- Verify variables are set in Vercel dashboard
- Check variable names match (must start with `NEXT_PUBLIC_`)
- Re-deploy after adding variables

### Images Not Showing
- Verify image paths are correct
- Check images are in `/public` folder
- Use relative paths starting with `/`

### Forms Not Submitting
- Check browser console for errors
- Verify form inputs have `required` attribute
- Test with sample data

### SEO Issues
- Submit sitemap to Google Search Console
- Check meta descriptions in source
- Verify schema markup: [schema.org validator](https://validator.schema.org/)

## Support Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Estimated Total Setup Time**: 2-3 hours
**Go-Live Timeline**: Same day deployment + 24-48 hours for indexing
