self.addEventListener('install', (event) => {
  console.log('[SW] Install');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('[SW] Activate');
});

self.addEventListener('fetch', (event) => {
  // Fetch event ici si nécessaire
});