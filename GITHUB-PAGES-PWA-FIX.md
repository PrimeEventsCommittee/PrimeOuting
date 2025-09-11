# GitHub Pages PWA Deployment Guide

## The Issue You Experienced

When adding your PWA to the homescreen from GitHub Pages, it was redirecting to `https://pratyush-tsys.github.io/` instead of `https://pratyush-tsys.github.io/PrimeEventsCommittee/`.

This happened because the original `manifest.json` had:
```json
{
  "start_url": "/",
  "scope": "/"
}
```

On GitHub Pages, `/` refers to the root domain, not your repository folder.

## Solutions Implemented

### 1. **Smart Auto-Detection** (Recommended)
I've implemented a smart system that automatically detects the correct base path:

- **`pwa-config.js`** - Automatically detects if you're on GitHub Pages and adjusts all paths
- **Dynamic manifest** - Creates the correct manifest on-the-fly
- **Smart service worker** - Adapts to any base path automatically

### 2. **Fallback Manifest**
The `manifest.json` now uses relative paths:
```json
{
  "start_url": "./",
  "scope": "./"
}
```

## Files Modified/Added

### New Files:
- `pwa-config.js` - Auto-detects GitHub Pages paths

### Updated Files:
- `manifest.json` - Uses relative paths as fallback
- `sw.js` - Dynamic base path handling
- `index.html` - Includes new config script

## Testing

### Local Testing:
```bash
# Test locally (should work with any base path)
python -m http.server 8000
# Visit: http://localhost:8000
```

### GitHub Pages Testing:
1. Push all files to your repository
2. Visit: `https://pratyush-tsys.github.io/PrimeEventsCommittee/`
3. Test "Add to Home Screen"
4. Check that it opens to the correct URL

## Verification Steps

1. **Check Manifest in DevTools:**
   - Open DevTools (F12)
   - Go to Application tab
   - Click "Manifest" in sidebar
   - Verify `start_url` shows correct path

2. **Test Install Prompt:**
   - Should appear automatically on compatible browsers
   - Install and verify opening location

3. **Check Service Worker:**
   - Application tab → Service Workers
   - Should show registration for correct scope

## Common GitHub Pages Issues & Solutions

### Issue: Icons not loading
**Solution:** Ensure all icon files exist in `images/` folder

### Issue: Manifest not found
**Solution:** Check that `manifest.json` is in root directory

### Issue: Service worker not registering
**Solution:** Ensure `sw.js` is in root directory and site is served over HTTPS

### Issue: Wrong repository name
**Solution:** The script auto-detects, but you can manually verify in browser console

## Manual Override (If Needed)

If auto-detection fails, you can manually set the path in `pwa-config.js`:

```javascript
// Force a specific base path
constructor() {
  this.basePath = '/YourRepositoryName'; // Replace with your repo name
  this.isGitHubPages = true;
}
```

## Repository Structure for GitHub Pages

```
your-repo/
├── index.html
├── manifest.json
├── sw.js
├── pwa.js
├── pwa-config.js
├── css/
├── js/
├── images/
│   ├── icon-48x48.png
│   ├── icon-96x96.png
│   ├── icon-144x144.png
│   ├── icon-192x192.png
│   └── icon-512x512.png
└── (other files)
```

## Debug Information

The browser console will show:
```
PWA Config: Initializing with base path: /PrimeEventsCommittee
PWA Config: Updated manifest for GitHub Pages with base path: /PrimeEventsCommittee
Service Worker: Base path updated to: /PrimeEventsCommittee
```

## Next Steps

1. **Generate icons** using `icon-generator.html`
2. **Push to GitHub** and test on GitHub Pages
3. **Verify PWA functionality** works correctly
4. **Test on mobile devices** for full experience

This solution should work for any GitHub Pages deployment and automatically adapt to different base paths!
