const CACHE_NAME = 'legalai-v1';
const STATIC_CACHE_NAME = 'legalai-static-v1';
const DYNAMIC_CACHE_NAME = 'legalai-dynamic-v1';

// Assets to cache on install
const STATIC_ASSETS = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json',
  // Add other static assets as needed
];

// API endpoints to cache with network-first strategy
const API_CACHE_PATTERNS = [
  /\/api\/legal-areas/,
  /\/api\/user\/profile/,
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: Static assets cached');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker: Failed to cache static assets', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - handle requests with different strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension requests
  if (url.protocol === 'chrome-extension:') {
    return;
  }

  // Handle different types of requests
  if (request.destination === 'document') {
    // HTML pages - Network first, fallback to cache
    event.respondWith(networkFirstStrategy(request, STATIC_CACHE_NAME));
  } else if (isApiRequest(request)) {
    // API requests - Network first with cache fallback
    event.respondWith(networkFirstStrategy(request, DYNAMIC_CACHE_NAME));
  } else if (isStaticAsset(request)) {
    // Static assets - Cache first
    event.respondWith(cacheFirstStrategy(request, STATIC_CACHE_NAME));
  } else {
    // Other requests - Network first
    event.respondWith(networkFirstStrategy(request, DYNAMIC_CACHE_NAME));
  }
});

// Network first strategy - try network, fallback to cache
async function networkFirstStrategy(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('Service Worker: Network failed, trying cache', error);
    
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page for HTML requests
    if (request.destination === 'document') {
      return new Response(
        `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Offline - LegalAI</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              display: flex; 
              align-items: center; 
              justify-content: center; 
              min-height: 100vh; 
              margin: 0; 
              background: #f3f4f6;
              color: #374151;
            }
            .container { 
              text-align: center; 
              max-width: 400px; 
              padding: 2rem;
              background: white;
              border-radius: 0.5rem;
              box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            }
            h1 { color: #1f2937; margin-bottom: 1rem; }
            button { 
              background: #3b82f6; 
              color: white; 
              border: none; 
              padding: 0.75rem 1.5rem; 
              border-radius: 0.375rem; 
              cursor: pointer; 
              font-size: 1rem;
              margin-top: 1rem;
            }
            button:hover { background: #2563eb; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>You're Offline</h1>
            <p>Please check your internet connection and try again.</p>
            <button onclick="window.location.reload()">Try Again</button>
          </div>
        </body>
        </html>
        `,
        {
          status: 200,
          headers: { 'Content-Type': 'text/html' }
        }
      );
    }
    
    // Return error response for other requests
    return new Response(
      JSON.stringify({ 
        error: 'Network error', 
        message: 'Please check your internet connection' 
      }),
      {
        status: 503,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}

// Cache first strategy - try cache, fallback to network
async function cacheFirstStrategy(request, cacheName) {
  const cachedResponse = await caches.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('Service Worker: Both cache and network failed', error);
    return new Response('Resource not available offline', { status: 503 });
  }
}

// Helper functions
function isApiRequest(request) {
  const url = new URL(request.url);
  return url.pathname.startsWith('/api/') || 
         API_CACHE_PATTERNS.some(pattern => pattern.test(url.pathname));
}

function isStaticAsset(request) {
  const url = new URL(request.url);
  return url.pathname.startsWith('/static/') ||
         request.destination === 'script' ||
         request.destination === 'style' ||
         request.destination === 'image' ||
         request.destination === 'font';
}

// Handle background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('Service Worker: Background sync', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(handleBackgroundSync());
  }
});

async function handleBackgroundSync() {
  // Handle any queued offline actions
  console.log('Service Worker: Handling background sync');
  
  // You can implement offline action queuing here
  // For example, sending queued chat messages when back online
}