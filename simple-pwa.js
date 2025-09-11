// SIMPLE PWA INSTALL HANDLER - NO COMPLEX LOGIC
let deferredPrompt = null;
let installButton = null;

console.log('🚀 PWA Install Handler Loading...');

// 1. Capture the install prompt IMMEDIATELY
window.addEventListener('beforeinstallprompt', (e) => {
    console.log('✅ INSTALL PROMPT CAPTURED!');
    e.preventDefault();
    deferredPrompt = e;
    showInstallButton();
});

// 2. Create and show install button
function showInstallButton() {
    console.log('📱 Creating install button...');
    
    // Remove existing button if any
    const existing = document.getElementById('simple-install-btn');
    if (existing) existing.remove();
    
    // Create new button
    installButton = document.createElement('button');
    installButton.id = 'simple-install-btn';
    installButton.innerHTML = '📱 Install App';
    installButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 9999;
        background: #EE5007;
        color: white;
        border: none;
        padding: 15px 25px;
        border-radius: 50px;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(238, 80, 7, 0.4);
        transition: all 0.3s ease;
    `;
    
    installButton.onclick = installApp;
    document.body.appendChild(installButton);
    
    console.log('✅ Install button added to page');
}

// 3. Handle install
async function installApp() {
    console.log('🚀 Install button clicked!');
    
    if (!deferredPrompt) {
        console.log('❌ No install prompt available');
        showManualInstructions();
        return;
    }
    
    try {
        console.log('📱 Showing install prompt...');
        deferredPrompt.prompt();
        
        const result = await deferredPrompt.userChoice;
        console.log('👤 User choice:', result.outcome);
        
        if (result.outcome === 'accepted') {
            console.log('✅ User accepted install');
            hideInstallButton();
        }
        
        deferredPrompt = null;
    } catch (error) {
        console.error('❌ Install failed:', error);
        showManualInstructions();
    }
}

// 4. Manual instructions fallback
function showManualInstructions() {
    alert(`📱 Install Instructions:

Android Chrome:
• Tap menu (⋮) 
• Select "Add to Home screen"

Desktop Chrome:
• Look for install icon in address bar
• Or menu → More tools → Create shortcut`);
}

// 5. Hide button when installed
function hideInstallButton() {
    if (installButton) {
        installButton.remove();
        installButton = null;
    }
}

// 6. Handle app installed
window.addEventListener('appinstalled', () => {
    console.log('🎉 App installed successfully!');
    hideInstallButton();
});

// 7. Force show button after page load (for testing)
window.addEventListener('load', () => {
    console.log('📄 Page loaded, checking install status...');
    
    // If already installed, don't show button
    if (window.matchMedia('(display-mode: standalone)').matches) {
        console.log('✅ App already installed');
        return;
    }
    
    // Show button after delay if no prompt captured
    setTimeout(() => {
        if (!deferredPrompt) {
            console.log('⏰ No install prompt after 3 seconds, showing manual button');
            showManualInstallButton();
        }
    }, 3000);
});

// 8. Manual install button (always works)
function showManualInstallButton() {
    const manualBtn = document.createElement('button');
    manualBtn.innerHTML = '📱 Install App';
    manualBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 9999;
        background: #F8CB2E;
        color: black;
        border: none;
        padding: 15px 25px;
        border-radius: 50px;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(248, 203, 46, 0.4);
    `;
    
    manualBtn.onclick = showManualInstructions;
    document.body.appendChild(manualBtn);
    
    console.log('🔧 Manual install button added');
}

// 9. Register service worker (required for PWA)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
        try {
            const registration = await navigator.serviceWorker.register('./sw.js');
            console.log('✅ Service Worker registered:', registration.scope);
        } catch (error) {
            console.error('❌ Service Worker registration failed:', error);
        }
    });
}

console.log('🔧 PWA Install Handler Loaded Successfully');