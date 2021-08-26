importScripts("precache-manifest.696172bac02de46a719e045a5d32ba83.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('fetch', function(event) {
    if (event.request.url.includes("/api/")) {
        console.log('nih api kedetek di fetch')
        // response to API requests, Cache Update Refresh strategy
      } else {
        console.log('ga ada api kedetek di fetch')
        // response to static files requests, Cache-First strategy
      }
 })