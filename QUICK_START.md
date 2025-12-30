# 🚀 Quick Start Guide

Get your portfolio live in 5 minutes!

## Prerequisites

- Node.js 18+ installed ([Download here](https://nodejs.org/))
- A GitHub account
- A Vercel account (free) - Sign up at [vercel.com](https://vercel.com)

## Step-by-Step Deployment

### 1️⃣ Setup Your Project (2 minutes)

```bash
# Navigate to your project folder
cd portfolio

# Install dependencies
npm install

# Test locally
npm run dev
```

Visit `http://localhost:3000` - Your portfolio should be running!

### 2️⃣ Customize Your Content (15 minutes)

**Open `app/page.jsx` and update:**

1. **Line 180-190**: Your name, title, and bio
2. **Line 33-60**: Your projects (title, description, tech stack, links)
3. **Line 62-68**: Your skills
4. **Line 215-225**: Social media links
5. **Line 260**: Your location

**Tip**: Use the search function (Ctrl/Cmd + F) to find "Your Name" and replace all instances!

### 3️⃣ Deploy to Vercel (3 minutes)

**Option A: GitHub + Vercel (Recommended)**

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "My awesome portfolio"

# Create a new repository on GitHub, then:
git remote add origin YOUR_GITHUB_URL
git push -u origin main
```

Then:
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Click "Deploy"
4. **Done!** 🎉 Your portfolio is live!

**Option B: Direct Deploy with Vercel CLI**

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy (follow the prompts)
vercel

# For production deployment
vercel --prod
```

### 4️⃣ Add Your Domain (Optional)

1. In Vercel Dashboard, go to your project
2. Settings → Domains
3. Add your custom domain (e.g., yourname.com)
4. Follow DNS configuration instructions

## 🎨 Customization Checklist

- [ ] Update name and title
- [ ] Add your bio and description
- [ ] Replace placeholder projects with your real projects
- [ ] Update skills and technologies
- [ ] Add your social media links
- [ ] Update contact email
- [ ] Change year and location
- [ ] Test all links work correctly
- [ ] Optional: Customize colors and fonts

## 📸 Adding Project Images (Optional)

1. Create a `/public/projects` folder
2. Add your project images there
3. In `page.jsx`, add an `image` property to each project:
   ```javascript
   {
     title: "My Project",
     image: "/projects/my-project.jpg",
     // ... other properties
   }
   ```
4. Update the project card component to display images

## 🔧 Common Issues

**"Module not found" error?**
→ Run `npm install` again

**Port 3000 already in use?**
→ Kill the process or use a different port: `npm run dev -- -p 3001`

**Deployment failed?**
→ Check the build logs in Vercel dashboard for specific errors

**Changes not showing?**
→ Clear browser cache (Ctrl/Cmd + Shift + R) or use incognito mode

## 📱 Testing Before Deploy

**Desktop**: Test in Chrome, Firefox, Safari
**Mobile**: Use Chrome DevTools (F12 → Toggle device toolbar)
**Responsiveness**: Resize browser window to check breakpoints

## 🎯 After Deployment

- [ ] Share your portfolio URL on social media
- [ ] Add it to your resume
- [ ] Update your email signature
- [ ] List it on your LinkedIn profile
- [ ] Submit to portfolio showcase sites

## 💡 Pro Tips

1. **SEO**: Update metadata in `app/layout.jsx`
2. **Analytics**: Add Google Analytics or Vercel Analytics
3. **Updates**: Changes pushed to GitHub auto-deploy on Vercel
4. **Preview**: Every branch gets a preview URL on Vercel
5. **Performance**: Use Lighthouse in Chrome DevTools to check scores

## 🆘 Need Help?

- Check the main README.md for detailed documentation
- Vercel has excellent [documentation](https://vercel.com/docs)
- Next.js [documentation](https://nextjs.org/docs)

---

**You're all set!** 🚀 Now go deploy and share your amazing portfolio with the world!
