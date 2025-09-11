// PWA Installation and Service Worker Management
class PWAManager {
  constructor() {
    this.deferredPrompt = null;
    this.isInstalled = false;
    this.init();
  }

  init() {
    // Register service worker
    this.registerServiceWorker();
    
    // Handle install prompt
    this.handleInstallPrompt();
    
    // Check if already installed
    this.checkInstallStatus();
    
    // Add install button if needed
    this.addInstallButton();
  }

  async registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('Service Worker registered successfully:', registration.scope);
        
        // Handle updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New content is available
              this.showUpdateNotification();
            }
          });
        });

        // Listen for messages from service worker
        navigator.serviceWorker.addEventListener('message', event => {
          console.log('Message from Service Worker:', event.data);
        });

      } catch (error) {
        console.error('Service Worker registration failed:', error);
      }
    }
  }

  handleInstallPrompt() {
    window.addEventListener('beforeinstallprompt', (e) => {
      console.log('PWA: Install prompt triggered');
      e.preventDefault();
      this.deferredPrompt = e;
      this.showInstallButton();
    });

    window.addEventListener('appinstalled', () => {
      console.log('PWA: App was installed');
      this.isInstalled = true;
      this.hideInstallButton();
      this.showInstalledMessage();
    });
  }

  checkInstallStatus() {
    // Check if running in standalone mode
    if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
      this.isInstalled = true;
      console.log('PWA: Running in standalone mode');
    }

    // Check if running in WebAPK on Android
    if (window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches) {
      this.isInstalled = true;
      console.log('PWA: Running as installed app');
    }
  }

  async promptInstall() {
    if (!this.deferredPrompt) {
      console.log('PWA: Install prompt not available');
      return;
    }

    try {
      this.deferredPrompt.prompt();
      const result = await this.deferredPrompt.userChoice;
      console.log('PWA: User choice:', result.outcome);
      
      if (result.outcome === 'accepted') {
        console.log('PWA: User accepted the install prompt');
      } else {
        console.log('PWA: User dismissed the install prompt');
      }
      
      this.deferredPrompt = null;
    } catch (error) {
      console.error('PWA: Error during install prompt:', error);
    }
  }

  addInstallButton() {
    // Create install button
    const installBtn = document.createElement('button');
    installBtn.id = 'pwa-install-btn';
    installBtn.className = 'btn btn-primary position-fixed';
    installBtn.style.cssText = `
      bottom: 20px;
      right: 20px;
      z-index: 1000;
      border-radius: 50px;
      padding: 12px 20px;
      background: var(--primary-color, #F8CB2E);
      border: none;
      color: var(--dark-color, #000);
      font-weight: 600;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      display: none;
      transition: all 0.3s ease;
    `;
    installBtn.innerHTML = '<i class="bi-download me-2"></i>Install App';
    installBtn.addEventListener('click', () => this.promptInstall());
    
    document.body.appendChild(installBtn);
  }

  showInstallButton() {
    const installBtn = document.getElementById('pwa-install-btn');
    if (installBtn && !this.isInstalled) {
      installBtn.style.display = 'block';
      
      // Add animation
      setTimeout(() => {
        installBtn.style.transform = 'scale(1.05)';
        setTimeout(() => {
          installBtn.style.transform = 'scale(1)';
        }, 200);
      }, 100);
    }
  }

  hideInstallButton() {
    const installBtn = document.getElementById('pwa-install-btn');
    if (installBtn) {
      installBtn.style.display = 'none';
    }
  }

  showInstalledMessage() {
    // Show a temporary success message
    const message = document.createElement('div');
    message.className = 'alert alert-success position-fixed';
    message.style.cssText = `
      top: 20px;
      right: 20px;
      z-index: 1001;
      max-width: 300px;
      animation: slideInRight 0.5s ease;
    `;
    message.innerHTML = `
      <i class="bi-check-circle me-2"></i>
      Prime Outing 2025 app installed successfully!
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
      message.remove();
    }, 5000);
  }

  showUpdateNotification() {
    // Show update notification
    const notification = document.createElement('div');
    notification.className = 'alert alert-info position-fixed';
    notification.style.cssText = `
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1001;
      max-width: 400px;
    `;
    notification.innerHTML = `
      <div class="d-flex align-items-center justify-content-between">
        <span><i class="bi-arrow-repeat me-2"></i>New content available!</span>
        <button class="btn btn-sm btn-outline-primary ms-2" onclick="window.location.reload()">
          Update
        </button>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 10000);
  }

  // Share functionality
  async share(data = {}) {
    const shareData = {
      title: 'Prime Outing 2025',
      text: 'Join us for an unforgettable team outing experience!',
      url: window.location.href,
      ...data
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        console.log('PWA: Content shared successfully');
      } else {
        // Fallback to copying URL
        await navigator.clipboard.writeText(shareData.url);
        console.log('PWA: URL copied to clipboard');
        
        // Show feedback
        const feedback = document.createElement('div');
        feedback.className = 'alert alert-success position-fixed';
        feedback.style.cssText = `
          bottom: 80px;
          right: 20px;
          z-index: 1001;
        `;
        feedback.textContent = 'Link copied to clipboard!';
        document.body.appendChild(feedback);
        
        setTimeout(() => feedback.remove(), 3000);
      }
    } catch (error) {
      console.error('PWA: Error sharing:', error);
    }
  }

  // Offline status handling
  handleOfflineStatus() {
    const showOfflineMessage = () => {
      const offlineMsg = document.createElement('div');
      offlineMsg.id = 'offline-message';
      offlineMsg.className = 'alert alert-warning position-fixed w-100';
      offlineMsg.style.cssText = `
        top: 0;
        left: 0;
        z-index: 1002;
        margin: 0;
        border-radius: 0;
        text-align: center;
      `;
      offlineMsg.innerHTML = `
        <i class="bi-wifi-off me-2"></i>
        You're offline. Some features may not be available.
      `;
      document.body.prepend(offlineMsg);
    };

    const hideOfflineMessage = () => {
      const offlineMsg = document.getElementById('offline-message');
      if (offlineMsg) {
        offlineMsg.remove();
      }
    };

    window.addEventListener('online', hideOfflineMessage);
    window.addEventListener('offline', showOfflineMessage);

    // Check initial status
    if (!navigator.onLine) {
      showOfflineMessage();
    }
  }
}

// Initialize PWA Manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const pwaManager = new PWAManager();
  
  // Handle offline status
  pwaManager.handleOfflineStatus();
  
  // Add share button functionality if needed
  const shareButtons = document.querySelectorAll('[data-share]');
  shareButtons.forEach(button => {
    button.addEventListener('click', () => {
      pwaManager.share();
    });
  });
  
  // Make PWA manager globally accessible
  window.pwaManager = pwaManager;
});

// Add some CSS for animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  #pwa-install-btn:hover {
    transform: scale(1.05) !important;
    box-shadow: 0 6px 16px rgba(0,0,0,0.2) !important;
  }

  .alert {
    animation: slideInRight 0.5s ease;
  }

  @media (max-width: 768px) {
    #pwa-install-btn {
      bottom: 10px !important;
      right: 10px !important;
      padding: 10px 16px !important;
      font-size: 14px !important;
    }
  }
`;
document.head.appendChild(style);
