# Quick Console Guide - Error Fix

## Problem:
Agar `allow pasting` type karne se error aa raha hai, to yeh karo:

## Solution 1: Warning Ko Ignore Karo (Easiest)
1. Warning ko **ignore** karo
2. Console mein **directly type** karo (paste mat karo):
```javascript
document.querySelector('meta[name="keywords"]')?.content
```
3. **Enter** press karo

## Solution 2: Console Refresh Karo
1. Console ko **refresh** karo (F5 ya Ctrl+R)
2. Phir commands type karo

## Solution 3: Elements Tab Use Karo (No Commands Needed)
1. **Elements** tab par click karo
2. `<head>` section expand karo
3. Wahan sab meta tags dikh jayenge

## Working Commands (Type Karo, Paste Mat Karo):

### Single Commands:
```javascript
document.querySelector('meta[name="keywords"]')?.content
```

```javascript
document.querySelector('meta[name="description"]')?.content
```

```javascript
document.title
```

### All-in-One Command:
```javascript
console.log('Title:', document.title); console.log('Description:', document.querySelector('meta[name="description"]')?.content); console.log('Keywords:', document.querySelector('meta[name="keywords"]')?.content);
```

## Best Method: Elements Tab
1. **Elements** tab par jao
2. `<head>` section kholo
3. Wahan sab kuch dikh jayega - no commands needed!
