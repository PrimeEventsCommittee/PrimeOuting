const CACHE_NAME = 'prime-outing-2025-v1.0.2';

// Dynamic base path - will be set by the main page
let BASE_PATH = '';

// Detect base path from current location
if (self.location.hostname.includes('github.io')) {
  const pathParts = self.location.pathname.split('/').filter(part => part);
  if (pathParts.length > 0) {
    BASE_PATH = '/' + pathParts[0];
  }
}

const getUrlsToCache = (basePath = '') => [
  `${basePath}/`,
  `${basePath}/index.html`,
  `${basePath}/offline.html`,
  `${basePath}/css/bootstrap.min.css`,
  `${basePath}/css/bootstrap-icons.css`,
  `${basePath}/css/templatemo-festava-live.css`,
  `${basePath}/js/bootstrap.min.js`,
  `${basePath}/js/click-scroll.js`,
  `${basePath}/js/custom.js`,
  `${basePath}/js/jquery.min.js`,
  `${basePath}/js/jquery.sticky.js`,
  `${basePath}/js/script.js`,
  `${basePath}/script.js`,
  `${basePath}/styles.css`,
  `${basePath}/pwa.js`,
  `${basePath}/pwa-config.js`,
  `${basePath}/fonts/bootstrap-icons.woff`,
  `${basePath}/fonts/bootstrap-icons.woff2`,
  `${basePath}/images/edward-unsplash-blur.jpg`,
  `${basePath}/images/nainoa-shizuru-unsplash-blur.jpg`,
  `${basePath}/images/nicholas-green-unsplash-blur.jpg`,
  `${basePath}/images/pexels-alexander-suhorucov-6457578.jpg`,
  `${basePath}/images/pexels-alexander-suhorucov-6457579.jpg`,
  `${basePath}/images/artists/abstral-official-bdlMO9z5yco-unsplash.jpg`,
  `${basePath}/images/artists/joecalih-UmTZqmMvQcw-unsplash.jpg`,
  `${basePath}/images/artists/soundtrap-rAT6FJ6wltE-unsplash.jpg`,
  // Add icon files when they're created
  `${basePath}/images/icon-48x48.png`,
  `${basePath}/images/icon-96x96.png`,
  `${basePath}/images/icon-144x144.png`,
  `${basePath}/images/icon-192x192.png`,
  `${basePath}/images/icon-512x512.png`,
  // External resources (cache strategy: stale-while-revalidate)
  'https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;400;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=Fredoka+One&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

let urlsToCache = getUrlsToCache(BASE_PATH);

// Install event - cache resources
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching files');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('Service Worker: Cached all files successfully');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Service Worker: Error caching files', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker: Activated');
      return self.clients.claim();
    })
  );
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Handle navigation requests
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          // If online, cache and return the response
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(request, responseClone);
          });
          return response;
        })
        .catch(() => {
          // If offline, try to serve from cache first, then offline page
          return caches.match(request)
            .then(cachedResponse => {
              if (cachedResponse) {
                return cachedResponse;
              }
              // Serve offline page if no cached version exists
              return caches.match(`${BASE_PATH}/offline.html`);
            });
        })
    );
    return;
  }

  // Handle external font and CSS requests with stale-while-revalidate strategy
  if (url.origin !== location.origin && 
      (request.destination === 'style' || request.destination === 'font')) {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache => {
        return cache.match(request).then(cachedResponse => {
          const fetchPromise = fetch(request).then(networkResponse => {
            cache.put(request, networkResponse.clone());
            return networkResponse;
          }).catch(() => {
            // Return cached version if network fails
            return cachedResponse;
          });
          
          // Return cached version immediately, update in background
          return cachedResponse || fetchPromise;
        });
      })
    );
    return;
  }

  // Handle all other requests with cache-first strategy
  event.respondWith(
    caches.match(request)
      .then(cachedResponse => {
        // Return cached version if available
        if (cachedResponse) {
          return cachedResponse;
        }

        // Otherwise, fetch from network
        return fetch(request).then(response => {
          // Don't cache non-successful responses
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          // Add to cache
          caches.open(CACHE_NAME).then(cache => {
            cache.put(request, responseToCache);
          });

          return response;
        }).catch(() => {
          // If request fails and it's an image, return a placeholder
          if (request.destination === 'image') {
            return new Response('', {
              status: 200,
              statusText: 'OK',
              headers: new Headers({
                'Content-Type': 'image/svg+xml'
              })
            });
          }
          
          // For other requests, return a generic offline response
          return new Response('Offline - Content not available', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({
              'Content-Type': 'text/plain'
            })
          });
        });
      })
  );
});

// Handle background sync for offline actions
self.addEventListener('sync', event => {
  console.log('Service Worker: Background sync triggered', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Add any background sync logic here
      console.log('Service Worker: Performing background sync')
    );
  }
});

// Handle push notifications
self.addEventListener('push', event => {
  console.log('Service Worker: Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : 'New update from Prime Outing 2025!',
    icon: '/images/icon-192x192.png',
    badge: '/images/icon-96x96.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View Details',
        icon: '/images/icon-48x48.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/images/icon-48x48.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Prime Outing 2025', options)
  );
});

// Handle notification click
self.addEventListener('notificationclick', event => {
  console.log('Service Worker: Notification clicked', event);
  
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow(BASE_PATH + '/')
    );
  }
});

// Handle messages from the main thread
self.addEventListener('message', event => {
  console.log('Service Worker: Message received', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'SET_BASE_PATH') {
    BASE_PATH = event.data.basePath;
    urlsToCache = getUrlsToCache(BASE_PATH);
    console.log('Service Worker: Base path updated to:', BASE_PATH);
  }
});

// Periodic background sync (when supported)
self.addEventListener('periodicsync', event => {
  console.log('Service Worker: Periodic sync triggered', event.tag);
  
  if (event.tag === 'content-sync') {
    event.waitUntil(
      // Add periodic sync logic here
      console.log('Service Worker: Performing periodic content sync')
    );
  }
});
