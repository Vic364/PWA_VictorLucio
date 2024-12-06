const CACHE_NAME = "v1_cache_portafolio_victor";
const urlsToCache = [
  "./index.html",
  "./css/style.css",
  "./js/script.js",

"./img/active-directory-icon.png",
"./img/agrofuturo",
  "./img/android-chrome-192x192.png",
  "./img/android-chrome-512x512.png",
  "./img/apple-touch-icon.png",
  "./img/aquanexus.jpg",
  "./img/c++-icon.png",
  "./img/casa-inteligente.jpg",
  "./img/email-icon.png",
  "./img/facebook-icon.png",
  "./img/favicon-16x16.png",
  "./img/favicon-32x32.png",
  "./img/favicon.ico",
  "./img/github-icon.png",
  "./img/html-icon.png",
  "./img/javascript-icon.png",
  "./img/linkedin-icon.png",
  "./img/motoko-icon.png",
  "./img/perfiil.jpg",
  "./img/react-icon.png",
  "./img/whatsapp-icon.png"
];

// Evento de instalación: almacena los archivos en caché
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache).then(() => self.skipWaiting());
    })
  );
});

// Evento de activación: elimina las versiones antiguas del caché
self.addEventListener("activate", (e) => {
  const cacheWhitelist = [CACHE_NAME];

  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Evento fetch: busca en el caché, si no encuentra, hace la solicitud a la red
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
