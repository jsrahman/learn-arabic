// QuranPath 100% Offline Progressive Web App Service Worker
const CACHE_NAME = "quranpath-core-v1.1.0";
const AUDIO_CACHE_NAME = "quranpath-audio-v1.0.0";

// Complete list of core assets and 30 authentic Arabic alphabet pronunciations
const PRECACHE_ASSETS = [
  "/",
  "/path",
  "/practice",
  "/quiz",
  "/progress",
  "/profile",
  "/learn/l1-1",
  "/quiz/q1",
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/icon-maskable.png",
  "/icons/apple-touch-icon.png",
  "/icons/icon.svg",
  "/favicon.ico",
  // 30 Core Alphabet Audio MP3s (~800 KB total)
  "/audio/alphabet/alif.mp3",
  "/audio/alphabet/ayn.mp3",
  "/audio/alphabet/baa.mp3",
  "/audio/alphabet/daad.mp3",
  "/audio/alphabet/daal.mp3",
  "/audio/alphabet/dhaal.mp3",
  "/audio/alphabet/faa.mp3",
  "/audio/alphabet/ghayn.mp3",
  "/audio/alphabet/haa_chest.mp3",
  "/audio/alphabet/haa_throat.mp3",
  "/audio/alphabet/hamzah.mp3",
  "/audio/alphabet/jeem.mp3",
  "/audio/alphabet/kaaf.mp3",
  "/audio/alphabet/khaa.mp3",
  "/audio/alphabet/laam.mp3",
  "/audio/alphabet/laam_alif.mp3",
  "/audio/alphabet/meem.mp3",
  "/audio/alphabet/noon.mp3",
  "/audio/alphabet/qaaf.mp3",
  "/audio/alphabet/raa.mp3",
  "/audio/alphabet/saad.mp3",
  "/audio/alphabet/seen.mp3",
  "/audio/alphabet/sheen.mp3",
  "/audio/alphabet/taa.mp3",
  "/audio/alphabet/taa_emphatic.mp3",
  "/audio/alphabet/thaa.mp3",
  "/audio/alphabet/waw.mp3",
  "/audio/alphabet/yaa.mp3",
  "/audio/alphabet/zaa_emphatic.mp3",
  "/audio/alphabet/zay.mp3",
];

// Install Event: Precaching App Shell and Audio
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(async (cache) => {
        // Cache assets with error resilience
        for (const asset of PRECACHE_ASSETS) {
          try {
            await cache.add(asset);
          } catch (err) {
            console.warn(`[QuranPath SW] Pre-caching skipped for ${asset}:`, err);
          }
        }
      })
      .then(() => self.skipWaiting())
  );
});

// Activate Event: Clean up stale caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_NAME && name !== AUDIO_CACHE_NAME)
            .map((name) => caches.delete(name))
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch Event: Offline-first Audio, Stale-While-Revalidate Static, and App Shell Navigation
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Ignore non-GET or chrome-extension schemes
  if (request.method !== "GET" || !request.url.startsWith("http")) {
    return;
  }

  const url = new URL(request.url);

  // 1. Audio Files (Cache-First for instant offline playback)
  if (
    request.destination === "audio" ||
    url.pathname.endsWith(".mp3") ||
    url.hostname.includes("everyayah.com")
  ) {
    event.respondWith(
      caches.open(AUDIO_CACHE_NAME).then(async (audioCache) => {
        const cached = await audioCache.match(request);
        if (cached) {
          return cached;
        }

        // Also check core cache
        const coreCached = await caches.match(request);
        if (coreCached) {
          return coreCached;
        }

        // Fetch from network and save to audio cache
        try {
          const networkResponse = await fetch(request);
          if (networkResponse && networkResponse.status === 200) {
            audioCache.put(request, networkResponse.clone());
          }
          return networkResponse;
        } catch (err) {
          // If offline and audio missing, return null so client falls back to SpeechSynthesis
          return new Response(null, { status: 404, statusText: "Offline audio unavailable" });
        }
      })
    );
    return;
  }

  // 2. Navigation Requests (Pages, dynamic /learn/* and /quiz/*)
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(async () => {
          // 1. Check if exact route is cached (e.g. /path, /quiz)
          const exactMatch = await caches.match(request);
          if (exactMatch) {
            return exactMatch;
          }

          // 2. Check if a dynamic route matches /learn/* -> fallback to cached /learn/l1-1 or /
          if (url.pathname.startsWith("/learn/")) {
            const cachedLesson = await caches.match("/learn/l1-1");
            if (cachedLesson) return cachedLesson;
          }

          // 3. Check if a dynamic route matches /quiz/* -> fallback to cached /quiz/q1 or /
          if (url.pathname.startsWith("/quiz/")) {
            const cachedQuiz = await caches.match("/quiz/q1");
            if (cachedQuiz) return cachedQuiz;
          }

          // 4. Universal App Shell Fallback: serve root cached page
          const appShell = await caches.match("/");
          if (appShell) {
            return appShell;
          }

          return new Response("Offline - QuranPath", {
            headers: { "Content-Type": "text/html" },
          });
        })
    );
    return;
  }

  // 3. Static Assets (JS chunks, CSS, images, fonts): Cache-first with background revalidation
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        // Fetch fresh copy in background if online
        fetch(request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(request, networkResponse);
              });
            }
          })
          .catch(() => {});
        return cachedResponse;
      }

      // Not in cache, fetch from network and cache
      return fetch(request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200) {
          return networkResponse;
        }

        // Cache static scripts, styles, and assets
        if (
          url.pathname.startsWith("/_next/static/") ||
          url.pathname.startsWith("/icons/") ||
          url.pathname.endsWith(".png") ||
          url.pathname.endsWith(".svg") ||
          url.pathname.endsWith(".ico")
        ) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseToCache);
          });
        }

        return networkResponse;
      });
    })
  );
});
