# Console Commands - Keywords Check Karne Ke Liye

## Step-by-Step Guide:

### Step 1: Console Kholo
- Website par **F12** press karo
- Ya **Right-click** → **Inspect** → **Console** tab select karo

### Step 2: Warning Ko Handle Karo
Agar yellow warning dikhe:
```
Warning: Don't paste code into the DevTools Console...
```
To pehle type karo:
```
allow pasting
```
Phir **Enter** press karo.

### Step 3: Commands Run Karo

#### 1. Keywords Check Karne Ke Liye:
```javascript
document.querySelector('meta[name="keywords"]')?.content
```

#### 2. Description Check Karne Ke Liye:
```javascript
document.querySelector('meta[name="description"]')?.content
```

#### 3. Title Check Karne Ke Liye:
```javascript
document.title
```

#### 4. Sab Meta Tags Dekhne Ke Liye:
```javascript
Array.from(document.querySelectorAll('meta')).forEach(meta => {
  console.log(meta.name || meta.property, ':', meta.content);
});
```

#### 5. Open Graph Tags Check Karne Ke Liye:
```javascript
document.querySelector('meta[property="og:title"]')?.content
document.querySelector('meta[property="og:description"]')?.content
```

#### 6. Sab SEO Tags Ek Saath:
```javascript
console.log('Title:', document.title);
console.log('Description:', document.querySelector('meta[name="description"]')?.content);
console.log('Keywords:', document.querySelector('meta[name="keywords"]')?.content);
console.log('OG Title:', document.querySelector('meta[property="og:title"]')?.content);
console.log('OG Description:', document.querySelector('meta[property="og:description"]')?.content);
```

## Important Notes:
- Commands ko **type** karo ya **paste** karo (agar allow pasting enable hai)
- Har command ke baad **Enter** press karo
- Result console mein dikhega
- Agar koi tag nahi hai, to `undefined` ya `null` dikhega
