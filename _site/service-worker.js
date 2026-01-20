/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

// Cache names
const PRECACHE = 'precache-v012426';
const RUNTIME = 'runtime';

// Files that must always be available offline
const PRECACHE_URLS = [
  '/offline/',
  '/art/mk_profile_img.webp',
  '/css/main.min.121825.css',
  '/css/kadwa-v12-latin-700.woff2',
  '/css/merriweather-sans-v27-latin-700.woff2',
  '/css/merriweather-sans-v27-latin-regular.woff2'
];

// Install: precache critical assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE).then(cache => {
      return cache.addAll(PRECACHE_URLS);
    }).then(() => self.skipWaiting())
  );
});

// Activate: clean up old caches
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(
        cachesToDelete.map(cacheToDelete => caches.delete(cacheToDelete))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: cache-first, network fallback, offline page for navigations
self.addEventListener('fetch', event => {
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // Serve from cache if we have it
      if (cachedResponse) {
        return cachedResponse;
      }

      // Otherwise try the network
      return fetch(event.request)
        .then(response => {
          return caches.open(RUNTIME).then(cache => {
            cache.put(event.request, response.clone());
            return response;
          });
        })
        .catch(() => {
          // Offline fallback for page navigations only
          if (event.request.mode === 'navigate') {
            return caches.match('/offline/');
          }
        });
    })
  );
});
