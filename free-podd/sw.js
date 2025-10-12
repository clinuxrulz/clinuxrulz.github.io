// Name your cache and set the paths that you want to cache
var basePath = self.location.pathname.substring(0, self.location.pathname.lastIndexOf("/"));
var CACHE_NAME = 'free-pod-sw-cache';
var urlsToCache = [
    ...[
        "hot", "sausages", "doughnut", "chocolate",
        "cold", "chicken", "sweets", "ice-cream",
        "pizza", "pepperoni", "apple", "banana",
        "spaghetti", "icing", "strawberry",
    ].flatMap(x => [basePath + "/img/" + x + ".jpg", basePath + "/sound/" + x + ".mp3"])
];

// Install a service worker
self.addEventListener('install', event => {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

// Cache and return requests
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

// Update a service worker
self.addEventListener('activate', event => {
    var cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
