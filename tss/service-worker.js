importScripts("precache-manifest.eaff8d162f68f59cb31fa4a2269809b5.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");
importScripts("webpusher.js");
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
