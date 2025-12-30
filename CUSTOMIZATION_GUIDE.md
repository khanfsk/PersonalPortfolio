# 🎨 Customization Guide - Farhan Khan's Portfolio

This guide shows you exactly where to update content as your career progresses.

## 📝 Quick Update Locations

### 1. Adding New Projects

**File**: `app/page.jsx` (Lines 33-80)

Find the `projects` array and add new projects:

```javascript
const projects = [
  {
    title: "Your New Project Name",
    description: "Detailed description with impact metrics",
    tech: ["Tech1", "Tech2", "Tech3"],
    link: "#",  // or actual project URL
    gradient: "from-blue-400 to-cyan-600",  // Choose a gradient
    year: "2025",
    company: "Company or Project Type"
  },
  // ... existing projects
];
```

**Gradient color options**:
- `"from-blue-400 to-cyan-600"` (Blue/Cyan)
- `"from-purple-400 to-pink-600"` (Purple/Pink)
- `"from-orange-400 to-red-600"` (Orange/Red)
- `"from-emerald-400 to-teal-600"` (Green/Teal)
- `"from-yellow-400 to-orange-600"` (Yellow/Orange)

### 2. Updating Work Experience

**File**: `app/page.jsx` (Lines 82-120)

Update the `experiences` array when you get new positions:

```javascript
const experiences = [
  {
    title: "Your New Role",
    company: "Company Name",
    location: "City, Province/State",
    period: "Month Year – Present",
    highlights: [
      "Achievement with metrics",
      "Another accomplishment",
      "Third highlight"
    ]
  },
  // ... existing experiences
];
```

### 3. Updating Skills

**File**: `app/page.jsx` (Lines 122-127)

Modify the `skills` object as you learn new technologies:

```javascript
const skills = {
  "Languages": ["Python", "Java", "C++", "NewLanguage"],
  "AI/ML & Frameworks": ["TensorFlow", "PyTorch", "NewFramework"],
  "Cloud & DevOps": ["Azure", "AWS", "NewTool"]
};
```

**Additional skills section** (Line 890): Update the array with supporting tools/technologies.

### 4. Updating Stats

**File**: `app/page.jsx` (Lines 400-410)

Update your achievement numbers:

```javascript
<div className="text-5xl font-bold text-cyan-400">4+</div>  // Update number
<div className="text-sm text-gray-500 tracking-wide">INTERNSHIPS</div>

<div className="text-5xl font-bold text-cyan-400">#50</div>  // Update ranking
<div className="text-sm text-gray-500 tracking-wide">ALBERTA BADMINTON</div>
```

### 5. Updating Education

**File**: `app/page.jsx` (Lines 415-423)

Update graduation date or degree:

```javascript
<div className="font-semibold text-cyan-400 mb-1">University of Alberta</div>
<div className="text-sm text-gray-400">BSc Computer Science & AI • Co-op Program</div>
<div className="text-xs text-gray-500 mt-1">Expected May 2027</div>  // Update date
```

### 6. Updating Resume

**Steps**:
1. Replace `public/Farhan_KhanRes2.pdf` with your new resume
2. Keep the same filename or update links in:
   - Line 237: Download CV button in hero
   - Line 925: Download CV button in contact

### 7. Updating "Currently Exploring" Section

**File**: `app/page.jsx` (Lines 455-465)

Update with technologies you're currently learning:

```javascript
{['New Tech 1', 'New Tech 2', 'New Tech 3', 'New Tech 4'].map((tech, i) => (
  <span className="px-4 py-2 bg-zinc-900 border border-cyan-400/30 text-cyan-400 text-sm font-medium">
    {tech}
  </span>
))}
```

## 🎨 Design Customization

### Changing Color Scheme

Current colors: Cyan (#22D3EE) and Purple (#A855F7)

**To change the primary color**:

1. **In `app/page.jsx`**, search and replace:
   - `cyan-400` → your new color (e.g., `emerald-400`)
   - `purple-600` → your accent color (e.g., `teal-600`)

2. **In `app/globals.css`** (lines not easily identifiable, use search):
   - Update any hardcoded cyan/purple colors

**Available Tailwind colors**:
- Blue: `blue-400`, `blue-500`, `blue-600`
- Green: `emerald-400`, `green-500`, `teal-600`
- Red: `red-400`, `rose-500`, `orange-600`
- Purple: `purple-400`, `violet-500`, `fuchsia-600`
- Yellow: `yellow-400`, `amber-500`, `orange-600`

### Changing Fonts

Current fonts: **Syne** (headings) and **Epilogue** (body)

**File**: `app/layout.jsx` (Line 18)

Replace the Google Fonts link:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
```

**Then in** `app/globals.css`:
```css
body {
  font-family: 'YourBodyFont', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'YourHeadingFont', sans-serif;
}
```

## 📊 Content Writing Tips

### Project Descriptions
- Start with action verbs: "Built", "Designed", "Led", "Implemented"
- Include metrics: "50+ users", "95% accuracy", "30% improvement"
- Mention technologies used
- Keep to 2-3 sentences

### Experience Highlights
- Use bullet points with metrics
- Show impact, not just tasks
- Quantify achievements when possible
- Keep each point to one line if possible

### About Section
**File**: `app/page.jsx` (Lines 435-450)

Update your bio:
- Paragraph 1: Who you are and current focus
- Paragraph 2: Current role and key achievements
- Paragraph 3: Your approach and philosophy

## 🔗 Updating Links

### Social Media Links

Search for these in `app/page.jsx`:

**GitHub**: Lines 229, 916, 944
```javascript
<a href="https://github.com/khanfsk" ...>
```

**LinkedIn**: Lines 232, 919, 947
```javascript
<a href="https://linkedin.com/in/farhankhan-ai" ...>
```

**Email**: Lines 235, 237, 922, 925, 950
```javascript
<a href="mailto:fkhan3@ualberta.ca" ...>
```

### Project Links

When projects go live, update the `link` property in the projects array (Line ~38):
```javascript
link: "https://your-project-url.com",  // Replace "#" with actual URL
```

## 📱 Adding a Blog Section (Future)

If you want to add a blog later:

1. Create `app/blog/page.jsx`
2. Add navigation link in `app/page.jsx` (Line 200)
3. Create blog posts as markdown in `content/blog/`
4. Use a library like `next-mdx-remote` for rendering

## 🔍 SEO Updates

**File**: `app/layout.jsx` (Lines 3-14)

Update metadata as needed:
```javascript
export const metadata = {
  title: 'Your Name | Your Title',
  description: 'Your updated description',
  keywords: 'Add relevant keywords',
}
```

## 🐛 Common Issues

**Issue**: Changes not showing up
- **Solution**: Hard refresh (Ctrl/Cmd + Shift + R) or clear cache

**Issue**: Build errors after adding content
- **Solution**: Check for syntax errors in arrays/objects, missing commas

**Issue**: Colors not updating
- **Solution**: Make sure to update all instances (search for color names)

## 📝 Before Pushing Updates

Checklist:
- [ ] Test locally with `npm run dev`
- [ ] Check all links work
- [ ] Verify responsive design on mobile
- [ ] Run `npm run build` to check for errors
- [ ] Test in different browsers
- [ ] Update resume PDF if changed

## 💡 Tips

1. **Keep it updated**: Update projects and experience every few months
2. **Metrics matter**: Always include numbers and impact
3. **Stay current**: Update "Currently exploring" section regularly
4. **Backup**: Keep a backup before major changes
5. **Version control**: Commit changes to git regularly

---

**Need help?** Check the main README.md or Next.js documentation.

Happy customizing! 🎨
