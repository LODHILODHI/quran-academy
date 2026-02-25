# Vercel Deployment Guide - Quran Academy

## ✅ Step 1: GitHub Repository (Completed!)
- ✅ Code successfully pushed to: `https://github.com/LODHILODHI/quran-academy.git`

## 🚀 Step 2: Deploy on Vercel

### Method 1: Via Vercel Website (Recommended)

1. **Go to Vercel:**
   - Visit: https://vercel.com
   - Sign up / Sign in with GitHub account

2. **Import Project:**
   - Click **"Add New..."** → **"Project"**
   - Select **"Import Git Repository"**
   - Choose **"quran-academy"** repository
   - Click **"Import"**

3. **Configure Project:**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `.next` (auto-detected)
   - **Install Command:** `npm install` (auto-detected)

4. **Environment Variables (if needed):**
   - Add any environment variables if your app uses them
   - For now, you can skip this

5. **Deploy:**
   - Click **"Deploy"**
   - Wait for build to complete (2-3 minutes)
   - Your site will be live! 🎉

### Method 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? quran-academy
# - Directory? ./
# - Override settings? No
```

## 📝 Important Notes:

### Build Settings (Auto-detected by Vercel):
- **Framework:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Node Version:** Latest (auto)

### After Deployment:

1. **Get Your Live URL:**
   - Vercel will give you a URL like: `quran-academy.vercel.app`
   - You can also add a custom domain later

2. **Automatic Deployments:**
   - Every push to `main` branch will auto-deploy
   - Preview deployments for pull requests

3. **Custom Domain (Optional):**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS settings

## 🔧 Troubleshooting:

### If Build Fails:

1. **Check Build Logs:**
   - Go to Vercel Dashboard → Your Project → Deployments
   - Click on failed deployment to see logs

2. **Common Issues:**
   - **Missing dependencies:** Make sure `package.json` has all dependencies
   - **Build errors:** Check TypeScript/ESLint errors locally first
   - **Environment variables:** Add them in Vercel dashboard

3. **Test Build Locally:**
   ```bash
   npm run build
   ```
   If this works locally, it should work on Vercel too!

## ✅ Next Steps After Deployment:

1. ✅ Test your live website
2. ✅ Check all pages are working
3. ✅ Test on mobile devices
4. ✅ Add custom domain (optional)
5. ✅ Set up analytics (optional)
6. ✅ Configure environment variables if needed

## 🎉 You're Done!

Your Next.js website is now live on Vercel!

**Repository:** https://github.com/LODHILODHI/quran-academy.git  
**Vercel Dashboard:** https://vercel.com/dashboard

---

**Need Help?**
- Vercel Docs: https://vercel.com/docs
- Next.js on Vercel: https://vercel.com/docs/frameworks/nextjs
