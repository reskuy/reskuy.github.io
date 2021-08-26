importScripts("precache-manifest.696172bac02de46a719e045a5d32ba83.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.open('mysite-dynamic').then(function(cache) {
        return fetch(event.request).then(function(response) {
            cache.put(event.request, response.clone());
            return response;
        });
     })  
    );
  })
