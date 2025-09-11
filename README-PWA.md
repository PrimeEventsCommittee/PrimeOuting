# Prime Outing 2025 - Progressive Web App

This website has been enhanced with Progressive Web App (PWA) capabilities, making it installable and usable offline.

## Features Added

### 📱 Web App Manifest (`manifest.json`)
- **App Name**: Prime Outing 2025 - Official Website
- **Theme Colors**: 
  - Primary: #F8CB2E (Golden Yellow)
  - Secondary: #EE5007 (Orange Red)
- **Display Mode**: Standalone (looks like a native app)
- **Icons**: Multiple sizes for different devices
- **Shortcuts**: Quick access to Schedule and About sections
- **Screenshots**: For app store listings

### 🔧 Service Worker (`sw.js`)
- **Offline Support**: Website works without internet connection
- **Caching Strategy**: 
  - Cache-first for static resources
  - Stale-while-revalidate for external fonts/CSS
  - Network-first for navigation with offline fallback
- **Background Sync**: Handles offline actions
- **Push Notifications**: Ready for event updates
- **Auto-updates**: Notifies users when new content is available

### ⚡ PWA Manager (`pwa.js`)
- **Install Prompt**: Floating install button
- **Update Notifications**: Alerts when new version is available
- **Offline Status**: Shows connection status
- **Share Functionality**: Native sharing or clipboard fallback
- **Installation Detection**: Hides install button when already installed

### 🎨 App Icons
Use the `icon-generator.html` file to create all required icons:
1. Open `icon-generator.html` in your browser
2. Download all icon sizes (48x48, 96x96, 144x144, 192x192, 512x512)
3. Save them in the `images/` folder

### 📴 Offline Page (`offline.html`)
- Beautiful offline experience
- Lists available offline features
- Auto-refreshes when connection is restored
- Matches the app's design theme

## Setup Instructions

### 1. Generate Icons
1. Open `icon-generator.html` in your browser
2. Click each download button to save the icons
3. Move all downloaded icons to the `images/` folder

### 2. Test PWA Features
1. Serve the website using a local server (required for service workers)
2. Open in Chrome/Edge and check for install prompt
3. Test offline functionality by going offline in DevTools
4. Check manifest in DevTools > Application > Manifest

### 3. Local Server Setup
For development, you can use any of these:

**Python (if installed):**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Node.js (if installed):**
```bash
npx serve .
# or
npx http-server
```

**PHP (if installed):**
```bash
php -S localhost:8000
```

Then visit `http://localhost:8000`

### 4. Deployment Considerations
- **HTTPS Required**: PWAs require HTTPS in production
- **Service Worker Scope**: The SW file should be at the root level
- **Manifest Path**: Ensure manifest.json is accessible from root
- **Icon Paths**: Verify all icon paths are correct

## Browser Support

### Full PWA Support:
- Chrome/Chromium (Desktop & Mobile)
- Edge (Desktop & Mobile)
- Samsung Internet
- Firefox (Limited - no install prompt)

### Partial Support:
- Safari (iOS 11.3+) - No install prompt, but add to home screen works
- Firefox - Service worker works, no install prompt

## Testing Checklist

- [ ] Service worker registers successfully
- [ ] Manifest is valid (check in DevTools)
- [ ] Install prompt appears (Chrome/Edge)
- [ ] App works offline
- [ ] Icons display correctly
- [ ] Theme colors applied
- [ ] Offline page shows when appropriate
- [ ] Update notifications work

## PWA Audit

Use Chrome DevTools > Lighthouse to audit PWA compliance:
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Check "Progressive Web App"
4. Click "Generate report"

## Customization

### Updating Colors
Edit the CSS variables in `templatemo-festava-live.css`:
```css
--primary-color: #F8CB2E;
--secondary-color: #EE5007;
```

### Updating App Name
Update in multiple files:
- `manifest.json` - name and short_name
- `index.html` - title and meta tags
- `sw.js` - CACHE_NAME version

### Adding New Cached Resources
Add to the `urlsToCache` array in `sw.js`

## Troubleshooting

### Service Worker Not Registering
- Check browser console for errors
- Ensure you're serving over HTTPS or localhost
- Verify sw.js is at the correct path

### Install Prompt Not Showing
- Must be served over HTTPS (or localhost)
- User must engage with the site first
- Chrome may delay prompt based on user behavior

### Icons Not Displaying
- Check file paths in manifest.json
- Ensure icons are in correct format (PNG recommended)
- Verify icon files actually exist

### Offline Functionality Not Working
- Check if service worker registered successfully
- Verify resources are being cached (DevTools > Application > Storage)
- Test in incognito mode to avoid cache issues

## Files Added/Modified

### New Files:
- `manifest.json` - Web app manifest
- `sw.js` - Service worker
- `pwa.js` - PWA management script
- `icon-generator.html` - Icon generation tool
- `offline.html` - Offline page
- `README-PWA.md` - This documentation

### Modified Files:
- `index.html` - Added manifest link, PWA meta tags, and PWA script

## Next Steps

1. **Generate and add icons** using the icon generator
2. **Test thoroughly** on different devices and browsers
3. **Deploy to HTTPS** server for full functionality
4. **Submit to app stores** (optional - PWAs can be listed in some app stores)
5. **Set up push notifications** (requires backend integration)
6. **Add more offline functionality** as needed

---

For questions or issues, refer to the [PWA documentation](https://web.dev/progressive-web-apps/) or browser-specific implementation guides.
