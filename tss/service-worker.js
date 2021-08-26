importScripts("precache-manifest.696172bac02de46a719e045a5d32ba83.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('fetch', function(event) {
    event.respondWith(
        (async function() {
           var cache = await caches.open(cacheName);
           var cachedFiles = await cache.match(event.request);
           if(cachedFiles) {
               return cachedFiles;
           } else {
               try {
                   var response = await fetch(event.request);
                   await cache.put(event.request, response.clone());
                   return response;
               } catch(e) { /* ... */ }
           }
       }())
   )
 })