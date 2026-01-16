# Deployment Guide - Vyuha Rachana

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - 5 minutes)

**Why Vercel?**

- Native Next.js support (optimal performance)
- Automatic deployments from GitHub
- Free tier includes production deploys
- Built-in analytics and monitoring
- Global edge network CDN

#### Steps:

1. **Push to GitHub**

   ```bash
   cd /Volumes/myssd/projects/iks
   git add .
   git commit -m "Initial Vyuha Rachana deployment"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/iks.git
   git push -u origin main
   ```

2. **Connect to Vercel**

   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import from GitHub
   - Select the `iks` repository
   - Vercel auto-detects Next.js
   - Click "Deploy"

3. **Configure Environment** (if needed)

   - No environment variables required for this project
   - Default settings work perfectly

4. **Custom Domain** (Optional)
   - In Vercel dashboard → Settings → Domains
   - Add your custom domain
   - Point DNS records as instructed

**Result**: Your site will be live in ~2 minutes
Example: `https://iks.vercel.app`

---

### Option 2: Netlify (5 minutes)

#### Steps:

1. **Push to GitHub** (same as above)

2. **Connect to Netlify**

   - Visit [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect GitHub account
   - Select `iks` repository

3. **Build Settings**

   - Build command: `npm run build`
   - Publish directory: `.next`
   - Deploy button: Click "Deploy site"

4. **Custom Domain**
   - In Netlify dashboard → Site settings → Domain management
   - Add your domain

**Result**: Site live at `https://[random-name].netlify.app`

---

### Option 3: AWS S3 + CloudFront (Static Hosting)

For ultra-low cost static hosting:

#### Steps:

1. **Build the site**

   ```bash
   npm run build
   ```

2. **Deploy to S3**

   - Create S3 bucket with public access
   - Upload `.next/static` folder
   - Upload `public` folder
   - Create `_next` folder structure

3. **CloudFront Distribution**
   - Create CloudFront distribution
   - Point to S3 bucket
   - Configure caching rules
   - Set custom domain

**Cost**: ~$1/month for typical traffic

---

### Option 4: Traditional Node.js Hosting

For shared hosting or VPS providers:

#### Providers:

- Railway.app
- Render.com
- Fly.io
- DigitalOcean App Platform
- Heroku

#### General Steps:

1. **Push to GitHub**

2. **Connect hosting platform**

   - Import GitHub repository
   - Select deployment branch (main)

3. **Configure**

   - Environment: Node.js 18+
   - Build: `npm run build`
   - Start: `npm start`

4. **Deploy**
   - Platform auto-deploys on git push

---

## 📋 Pre-Deployment Checklist

Before deploying to production:

- [ ] Run `npm run build` locally - no errors
- [ ] Test production build: `npm start`
- [ ] Visit all pages and test animations
- [ ] Test on mobile device
- [ ] Test dark mode toggle
- [ ] Verify all links work
- [ ] Check animation performance
- [ ] Test keyboard navigation

### Quick Verification

```bash
# Build verification
npm run build

# Should output:
# ✓ Compiled successfully
# Route (app)
# ├ ○ /
# ├ ○ /about
# ├ ○ /chakravyuha
# ├ ○ /garudavyuha
# └ ○ /mandalavyuha
```

---

## 🔒 Security Considerations

This is a **static site** with no backend, so security is minimal:

✅ **No vulnerabilities** in dependencies (audited on install)
✅ **No authentication** required
✅ **No database** to compromise
✅ **No user data** collection
✅ **HTTPS automatic** on all platforms above

---

## 📊 Performance Expectations

After deployment, you should see:

- **First Contentful Paint**: < 500ms
- **Largest Contentful Paint**: < 1.5s
- **Time to Interactive**: < 2s
- **Animation Frame Rate**: 60 FPS
- **Page Load**: < 2 seconds on 4G

**Why it's fast:**

- Static HTML pre-rendered
- SVG content lightweight
- GSAP animations use GPU
- Global CDN edge caching
- Minimal JavaScript bundle

---

## 🌐 DNS & Domain Configuration

### If using custom domain:

**Vercel Example:**

```
CNAME Record:
Name: yoursite.com
Value: cname.vercel-dns.com

Wait 24-48 hours for DNS propagation
```

**Netlify Example:**

```
Change nameservers to Netlify:
ns1.netlify.com
ns2.netlify.com
ns3.netlify.com
ns4.netlify.com
```

Check DNS status:

```bash
dig yoursite.com
nslookup yoursite.com
```

---

## 📈 Post-Deployment Monitoring

### Analytics Available (on Vercel/Netlify):

- Page views and unique visitors
- Core Web Vitals
- Geographic distribution
- Device types
- Referrer sources

### Set Up Monitoring:

1. Log into platform dashboard
2. Navigate to Analytics
3. View real-time metrics
4. Set up alerts (optional)

---

## 🔄 Deployment Workflow

After initial deployment:

### Making Updates

```bash
# 1. Make code changes locally
# 2. Test thoroughly
npm run dev
# 3. Commit changes
git add .
git commit -m "Update formation descriptions"
# 4. Push to GitHub
git push origin main
# 5. Vercel/Netlify auto-deploys
# Done! Changes live in ~1 minute
```

### Rollback (if needed)

- **Vercel**: Deployments tab → Select previous → Click "Rollback"
- **Netlify**: Deploys tab → Select previous → Click "Publish"

---

## 🎯 SEO Optimization

The site includes:

✅ **Proper metadata** in `layout.tsx`

```typescript
title: "Vyuha Rachana: Ancient Indian Military Science"
description: "Interactive visualizations of ancient Indian military formations..."
keywords: ["Chakravyuha", "Garudavyuha", "Mandalavyuha", ...]
```

✅ **Open Graph tags** for social sharing
✅ **Semantic HTML** structure
✅ **Fast page speed** (Core Web Vitals optimized)
✅ **Mobile-friendly** design
✅ **Sitemap** auto-generated

### Google Search Console Setup:

1. Visit [search.google.com/search-console](https://search.google.com/search-console)
2. Add property (your domain)
3. Verify ownership (DNS or HTML file)
4. Submit sitemap (`/sitemap.xml` auto-generated)

---

## 🔐 Environment Variables (If Needed)

For future features, this is how to add environment variables:

### Create `.env.local`:

```bash
# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXX

# API Keys (if adding features)
NEXT_PUBLIC_API_URL=https://api.example.com
```

### In production (Vercel example):

- Dashboard → Settings → Environment Variables
- Add variables for production, preview, development

---

## 📞 Troubleshooting Deployment

### Site shows "404 Not Found"

- **Solution**: Wait 5 minutes for deployment to complete
- **Check**: View deployment logs in platform dashboard

### Animations not working

- **Solution**: Clear browser cache (Cmd+Shift+Delete)
- **Check**: Open DevTools → Network → see .js files load

### Styles look wrong

- **Solution**: Hard refresh (Cmd+Shift+R)
- **Check**: CSS files loaded in Network tab

### Slow page load

- **Solution**: Likely first visit (cold start)
- **Normal**: Subsequent visits will be instant (cached)

### Dark mode not working

- **Solution**: Browser may cache old CSS
- **Fix**: Clear cache or use Incognito window

---

## 📚 Production Monitoring

### Set up error tracking (optional):

**Sentry Integration:**

```bash
npm install @sentry/nextjs
# Configure in next.config.ts
```

**But for this project:** Not necessary (no backend failures possible)

---

## 💰 Cost Breakdown

### Vercel (Recommended)

- **Free Tier**:

  - 100 GB bandwidth/month
  - Unlimited deployments
  - Automatic HTTPS
  - Perfect for this site

- **Pro Tier** (if needed):
  - $20/month
  - Enhanced analytics
  - Priority support

### Netlify

- **Free Tier**:
  - 100 GB bandwidth/month
  - CI/CD included
  - Sufficient for this project

### AWS S3 + CloudFront

- **Monthly**: ~$1-5 depending on traffic
- **One-time**: Domain registration ~$10/year

### Recommendation

**Start free** on Vercel or Netlify → Upgrade only if traffic exceeds limits

---

## 🎉 Deployment Complete!

Once deployed:

1. **Test live site**

   - Visit your domain
   - Test all pages
   - Check animations

2. **Share with others**

   - Send link to team
   - Share on social media
   - Get feedback

3. **Monitor performance**
   - Watch analytics dashboard
   - Track user engagement
   - Celebrate success! 🎊

---

## 📞 Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **Next.js Docs**: https://nextjs.org/docs
- **GitHub Help**: https://docs.github.com

---

## ✅ Deployment Status

**Project**: Vyuha Rachana
**Status**: ✅ Ready for Production Deployment
**Estimated Deployment Time**: 5-15 minutes
**Recommended Platform**: Vercel

Your ancient Indian military formations website is ready to go live! 🚀

---

**Last Updated**: January 2026
**Next.js Version**: 16.1.2
**Node Version Required**: 18.0+
