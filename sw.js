const CACHE_NAME = 'kod-eksam-v2';
const PRECACHE = [
  './',
  './index.html',
  './exam.html',
  './data/questions-bank.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE)));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  const isBankJs = url.pathname.endsWith('/data/questions-bank.js');
  const isStaticAsset =
    url.pathname.endsWith('/manifest.webmanifest') ||
    /\/icons\//.test(url.pathname);

  if (event.request.mode === 'navigate') {
    const cacheKey = url.pathname.endsWith('/exam.html') ? './exam.html' : './index.html';
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(cacheKey, copy));
          }
          return response;
        })
        .catch(() =>
          caches.match(cacheKey)
            .then(response => response || caches.match('./index.html'))
            .then(response => response || caches.match('./'))
        )
    );
    return;
  }

  if (isBankJs) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put('./data/questions-bank.js', copy));
          }
          return response;
        })
        .catch(() => caches.match('./data/questions-bank.js'))
    );
    return;
  }

  if (isStaticAsset) {
    event.respondWith(
      caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return response;
      }))
    );
  }
});
