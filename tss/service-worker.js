importScripts("precache-manifest.ec0b0c54728f480a68446c4a2dcdcbf2.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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
