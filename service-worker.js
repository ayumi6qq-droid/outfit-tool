const CACHE_NAME = 'outfit-v19r9-pwa-v1';
const PRECACHE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/apple-touch-icon.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./assets/01.webp",
  "./assets/01_hat2.webp",
  "./assets/02.webp",
  "./assets/03.webp",
  "./assets/04.webp",
  "./assets/04_hat2.webp",
  "./assets/05.webp",
  "./assets/06.webp",
  "./assets/07.webp",
  "./assets/08.webp",
  "./assets/09.webp",
  "./assets/10.webp",
  "./assets/10_hat2.webp",
  "./assets/11.webp",
  "./assets/11_hat2.webp",
  "./assets/12.webp",
  "./assets/12_hat2.webp",
  "./assets/13.webp",
  "./assets/14.webp",
  "./assets/14_hat2.webp",
  "./assets/15.webp",
  "./assets/15_hat2.webp",
  "./assets/16.webp",
  "./assets/16_hat2.webp",
  "./assets/17.webp",
  "./assets/18.webp",
  "./assets/19.webp",
  "./assets/20.webp",
  "./assets/20_hat2.webp",
  "./assets/21.webp",
  "./assets/22.webp",
  "./assets/22_hat2.webp",
  "./assets/23.webp",
  "./assets/23_hat2.webp",
  "./assets/24.webp",
  "./assets/25.webp"
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
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
  if (url.origin !== self.location.origin) return;

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put('./index.html', copy));
          return response;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        }
        return response;
      });
    })
  );
});
