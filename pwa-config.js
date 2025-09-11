// PWA Configuration for GitHub Pages
// This file automatically detects the correct base path for GitHub Pages deployment

class PWAConfig {
  constructor() {
    this.basePath = this.detectBasePath();
    this.isGitHubPages = this.basePath !== '';
  }

  detectBasePath() {
    const hostname = window.location.hostname;
    const pathname = window.location.pathname;
    
    // Check if we're on GitHub Pages
    if (hostname.includes('github.io')) {
      // Extract repository name from path
      const pathParts = pathname.split('/').filter(part => part);
      if (pathParts.length > 0) {
        return '/' + pathParts[0];
      }
    }
    
    // For custom domains or localhost, no base path needed
    return '';
  }

  getFullPath(relativePath) {
    // Remove leading slash if present
    const cleanPath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
    return this.basePath + '/' + cleanPath;
  }

  updateManifest() {
    // Get the manifest link element
    const manifestLink = document.querySelector('link[rel="manifest"]');
    if (!manifestLink) return;

    // If we're on GitHub Pages, we need to update the manifest dynamically
    if (this.isGitHubPages) {
      // Create a new manifest object with correct paths
      const manifest = {
        "name": "Prime Outing 2025 - Official Website",
        "short_name": "Prime Outing 2025",
        "description": "Join us for an unforgettable team outing experience to the beautiful hills of Dehradun. Prime Outing 2025 is designed to strengthen team bonds, create lasting memories, and provide the perfect break from work routine.",
        "start_url": this.basePath + "/",
        "display": "standalone",
        "background_color": "#F8CB2E",
        "theme_color": "#EE5007",
        "orientation": "portrait-primary",
        "scope": this.basePath + "/",
        "lang": "en",
        "icons": [
          {
            "src": this.getFullPath("images/icon-192x192.png"),
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": this.getFullPath("images/icon-512x512.png"),
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": this.getFullPath("images/icon-144x144.png"),
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": this.getFullPath("images/icon-96x96.png"),
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": this.getFullPath("images/icon-48x48.png"),
            "sizes": "48x48",
            "type": "image/png"
          },
          {
            "src": this.getFullPath("images/PrimePWA.jpg"),
            "sizes": "any",
            "type": "image/jpeg",
            "purpose": "any"
          }
        ],
        "screenshots": [
          {
            "src": this.getFullPath("images/pexels-alexander-suhorucov-6457578.jpg"),
            "sizes": "1920x1080",
            "type": "image/jpeg",
            "form_factor": "wide",
            "label": "Prime Outing 2025 Event"
          },
          {
            "src": this.getFullPath("images/pexels-alexander-suhorucov-6457579.jpg"),
            "sizes": "1080x1920",
            "type": "image/jpeg",
            "form_factor": "narrow",
            "label": "Prime Outing 2025 Mobile View"
          }
        ],
        "categories": ["events", "entertainment", "lifestyle"],
        "related_applications": [],
        "prefer_related_applications": false,
        "shortcuts": [
          {
            "name": "Event Schedule",
            "short_name": "Schedule",
            "description": "View the event schedule and timeline",
            "url": this.basePath + "/#schedule",
            "icons": [
              {
                "src": this.getFullPath("images/icon-96x96.png"),
                "sizes": "96x96"
              }
            ]
          },
          {
            "name": "About Event",
            "short_name": "About",
            "description": "Learn more about Prime Outing 2025",
            "url": this.basePath + "/#about",
            "icons": [
              {
                "src": this.getFullPath("images/icon-96x96.png"),
                "sizes": "96x96"
              }
            ]
          }
        ]
      };

      // Create a blob URL for the dynamic manifest
      const manifestBlob = new Blob([JSON.stringify(manifest, null, 2)], {
        type: 'application/json'
      });
      const manifestURL = URL.createObjectURL(manifestBlob);
      
      // Update the manifest link
      manifestLink.href = manifestURL;
      
      console.log('PWA Config: Updated manifest for GitHub Pages with base path:', this.basePath);
    }
  }

  updateServiceWorkerRegistration() {
    // Store the base path for service worker to use
    if ('serviceWorker' in navigator) {
      // Pass the base path to the service worker
      navigator.serviceWorker.ready.then(registration => {
        if (registration.active) {
          registration.active.postMessage({
            type: 'SET_BASE_PATH',
            basePath: this.basePath
          });
        }
      });
    }
  }

  init() {
    console.log('PWA Config: Initializing with base path:', this.basePath);
    
    // Update manifest if needed
    this.updateManifest();
    
    // Update service worker configuration
    this.updateServiceWorkerRegistration();
    
    // Store config globally for other scripts
    window.pwaConfig = {
      basePath: this.basePath,
      isGitHubPages: this.isGitHubPages,
      getFullPath: (path) => this.getFullPath(path)
    };
  }
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new PWAConfig().init();
  });
} else {
  new PWAConfig().init();
}
