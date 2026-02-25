# Website Keywords Check Karne Ka Tareeqa

## Browser Inspect Element Se Keywords Kaise Dekhein

### Method 1: Inspect Element (Easiest)
1. Website kholo
2. **Right-click** karo aur **"Inspect"** ya **"Inspect Element"** select karo
   - Ya **F12** key press karo
   - Ya **Ctrl+Shift+I** (Windows) / **Cmd+Option+I** (Mac)
3. **Elements** tab mein jao
4. `<head>` section expand karo
5. Yahan dekho:
   - `<title>` tag - Page ka title
   - `<meta name="description">` - Meta description
   - `<meta name="keywords">` - Keywords (agar hai)
   - `<meta property="og:title">` - Open Graph title
   - `<meta property="og:description">` - Open Graph description

### Method 2: View Page Source
1. **Right-click** → **"View Page Source"** (ya **Ctrl+U**)
2. **Ctrl+F** se search karo: `keywords`, `description`, `title`
3. Meta tags dekh lo

### Method 3: Console Commands
1. Inspect Element kholo
2. **Console** tab mein jao
3. Ye commands run karo:

```javascript
// Keywords check karo
document.querySelector('meta[name="keywords"]')?.content

// Description check karo
document.querySelector('meta[name="description"]')?.content

// Title check karo
document.title

// All meta tags dekhne ke liye
Array.from(document.querySelectorAll('meta')).forEach(meta => {
  console.log(meta.name || meta.property, ':', meta.content);
});
```

### Method 4: SEO Tools (Better Analysis)
- **Google Search Console** - Apni website ke liye
- **Ahrefs** - Competitor analysis
- **SEMrush** - Keyword research
- **Ubersuggest** - Free keyword tool
- **Screaming Frog** - Technical SEO audit

## Kya Dekhna Chahiye:

### 1. Meta Keywords (Old Method)
```html
<meta name="keywords" content="keyword1, keyword2, keyword3">
```
**Note:** Google ab meta keywords ko ignore karta hai, lekin kuch websites abhi bhi use karti hain.

### 2. Title Tag (Most Important)
```html
<title>Your Page Title with Keywords</title>
```

### 3. Meta Description
```html
<meta name="description" content="Your description with keywords">
```

### 4. Open Graph Tags (Social Media)
```html
<meta property="og:title" content="Title">
<meta property="og:description" content="Description">
```

### 5. Headings (H1, H2, H3)
- Inspect karke headings check karo
- Keywords headings mein bhi hone chahiye

### 6. Alt Text (Images)
- Images par right-click → Inspect
- `alt` attribute check karo

## Apni Website Ke Keywords Check Karne Ke Liye:

Aapki website (Quran Academy) mein already keywords set hain:
- `app/page.tsx` - Line 13-19
- `app/layout.tsx` - Line 21-27

Inspect element se aap apni website khol kar bhi check kar sakte ho!
