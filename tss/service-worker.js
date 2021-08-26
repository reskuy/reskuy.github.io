importScripts("precache-manifest.696172bac02de46a719e045a5d32ba83.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('fetch', function(event) {
    // if (event.request.url.includes("/api/")) {
    //     console.log('nih api kedetek di fetch')
    //     // response to API requests, Cache Update Refresh strategy
    //   } else {
    //     console.log('ga ada api kedetek di fetch')
    //     // response to static files requests, Cache-First strategy
    //   }
    event.respondWith(async function() {
        try{
          var res = await fetch(event.request);
          var cache = await caches.open('cache');
          cache.put(event.request.url, res.clone());
          return res;
        }
        catch(error){
          return caches.match(event.request);
         }
       }());
 })

//  self.addEventListener('activate', evt =>
//   evt.waitUntil(
//     caches.keys().then(cacheNames => {
//       return Promise.all(
//         cacheNames.map(cacheName => {
//           if (cacheName !== CURRENT_CACHE) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   )
// );