importScripts("precache-manifest.106a0865ca0feedcd202f707a3a4b2e8.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('fetch', function(event) {
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
