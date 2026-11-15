// QuranPath 100% Offline Progressive Web App Service Worker
const CACHE_NAME = "quranpath-core-v1.2.0";
const AUDIO_CACHE_NAME = "quranpath-audio-v1.0.0";

// Comprehensive list of routes across all 8 modules + all 18 quizzes and foundation lessons
const CORE_ROUTES = [
  "/",
  "/path",
  "/practice",
  "/quiz",
  "/progress",
  "/profile",
  "/learn/l1-1",
  "/learn/l1-2",
  "/learn/l1-3",
  "/learn/l1-4",
  "/learn/l2-1",
  "/learn/l2-2",
  "/learn/l2-3",
  "/learn/l2-4",
  // All 18 level quizzes for instant offline access
  "/quiz/q1",
  "/quiz/q2",
  "/quiz/q3",
  "/quiz/q4",
  "/quiz/q5",
  "/quiz/q6",
  "/quiz/q7",
  "/quiz/q8",
  "/quiz/q9",
  "/quiz/q10",
  "/quiz/q11",
  "/quiz/q12",
  "/quiz/q13",
  "/quiz/q14",
  "/quiz/q15",
  "/quiz/q16",
  "/quiz/q17",
  "/quiz/q18",
];

const STATIC_ASSETS = [
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/icon-maskable.png",
  "/icons/apple-touch-icon.png",
  "/icons/icon.svg",
  "/favicon.ico",
];

const ALPHABET_AUDIO = [
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

const PRECACHE_ASSETS = [
  ...CORE_ROUTES,
  ...STATIC_ASSETS,
  ...ALPHABET_AUDIO,
];

// Helper: Extract Next.js script and stylesheet URLs from HTML
function extractAssetUrls(html) {
  const urls = [];
  const scriptRegex = /(?:src|href)="(\/_next\/static\/[^"]+)"/g;
  let match;
  while ((match = scriptRegex.exec(html)) !== null) {
    urls.push(match[1]);
  }
  return Array.from(new Set(urls));
}

// Install Event: Precaching App Shell, Routes, Audio, and linked JS/CSS chunks
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(async (cache) => {
        const discoveredChunks = new Set();

        // 1. Precache explicit static assets & audio
        for (const asset of PRECACHE_ASSETS) {
          try {
            const resp = await fetch(asset, { cache: "reload" });
            if (resp && resp.status === 200) {
              await cache.put(asset, resp.clone());

              // If it's an HTML page, discover linked JS chunks and CSS
              const contentType = resp.headers.get("content-type") || "";
              if (contentType.includes("text/html")) {
                const html = await resp.text();
                const linkedAssets = extractAssetUrls(html);
                for (const chunkUrl of linkedAssets) {
                  discoveredChunks.add(chunkUrl);
                }

                // Also pre-cache RSC payload for client-side router navigation
                try {
                  const rscResp = await fetch(asset, { headers: { RSC: "1" }, cache: "reload" });
                  if (rscResp && rscResp.status === 200) {
                    await cache.put(asset + "?_rsc=1", rscResp.clone());
                    await cache.put(new Request(asset, { headers: { RSC: "1" } }), rscResp);
                  }
                } catch (_) {}
              }
            }
          } catch (err) {
            console.warn(`[QuranPath SW] Pre-caching skipped for ${asset}:`, err);
          }
        }

        // 2. Cache all discovered script and CSS chunks
        for (const chunkUrl of discoveredChunks) {
          try {
            const chunkResp = await fetch(chunkUrl, { cache: "reload" });
            if (chunkResp && chunkResp.status === 200) {
              await cache.put(chunkUrl, chunkResp);
            }
          } catch (_) {}
        }
      })
      .then(() => self.skipWaiting())
  );
});

// Activate Event: Clean up stale caches and claim clients immediately
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

// Fetch Event: Offline-first Audio, App Router Navigation, RSC, and Static Assets
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
        const cached = await audioCache.match(request, { ignoreSearch: true });
        if (cached) return cached;

        const coreCached = await caches.match(request, { ignoreSearch: true });
        if (coreCached) return coreCached;

        try {
          const networkResponse = await fetch(request);
          if (networkResponse && networkResponse.status === 200) {
            audioCache.put(request, networkResponse.clone());
          }
          return networkResponse;
        } catch (_) {
          return new Response(null, { status: 404, statusText: "Offline audio unavailable" });
        }
      })
    );
    return;
  }

  // 2. Full Page Navigation Requests (request.mode === "navigate")
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
              cache.put(url.pathname, responseClone.clone());
            });
          }
          return networkResponse;
        })
        .catch(async () => {
          // 1. Check exact route match
          const exactMatch =
            (await caches.match(request, { ignoreSearch: true })) ||
            (await caches.match(url.pathname, { ignoreSearch: true }));
          if (exactMatch) return exactMatch;

          // 2. Check dynamic /learn/* route fallback
          if (url.pathname.startsWith("/learn/")) {
            const cachedLesson =
              (await caches.match(url.pathname, { ignoreSearch: true })) ||
              (await caches.match("/learn/l1-1", { ignoreSearch: true }));
            if (cachedLesson) return cachedLesson;
          }

          // 3. Check dynamic /quiz/* route fallback
          if (url.pathname.startsWith("/quiz/")) {
            const cachedQuiz =
              (await caches.match(url.pathname, { ignoreSearch: true })) ||
              (await caches.match("/quiz/q1", { ignoreSearch: true }));
            if (cachedQuiz) return cachedQuiz;
          }

          // 4. Universal App Shell Fallback: serve cached root page
          const appShell = await caches.match("/", { ignoreSearch: true });
          if (appShell) return appShell;

          return new Response("Offline - QuranPath", {
            headers: { "Content-Type": "text/html" },
          });
        })
    );
    return;
  }

  // 3. Next.js App Router RSC Requests (Client-side Link navigation)
  const isRSC =
    request.headers.get("RSC") === "1" ||
    url.searchParams.has("_rsc") ||
    request.headers.get("Next-Router-State-Tree");

  if (isRSC) {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
              cache.put(url.pathname + "?_rsc=1", responseClone.clone());
            });
          }
          return networkResponse;
        })
        .catch(async () => {
          // Check if exact RSC request is cached
          const cachedRSC =
            (await caches.match(request, { ignoreSearch: true })) ||
            (await caches.match(url.pathname + "?_rsc=1", { ignoreSearch: true }));
          if (cachedRSC) return cachedRSC;

          // Fallback dynamic RSC shells
          if (url.pathname.startsWith("/quiz/")) {
            const quizRSC =
              (await caches.match("/quiz/q1?_rsc=1", { ignoreSearch: true })) ||
              (await caches.match("/quiz/q1", { ignoreSearch: true }));
            if (quizRSC) return quizRSC;
          }

          if (url.pathname.startsWith("/learn/")) {
            const lessonRSC =
              (await caches.match("/learn/l1-1?_rsc=1", { ignoreSearch: true })) ||
              (await caches.match("/learn/l1-1", { ignoreSearch: true }));
            if (lessonRSC) return lessonRSC;
          }

          // If no RSC cached, return a 504 with redirect hint to force browser navigation fallback
          return new Response(null, {
            status: 504,
            statusText: "Offline - Next.js fallback to hard navigation",
            headers: { "X-Next-Fallback": "1" },
          });
        })
    );
    return;
  }

  // 4. Static Assets (JS chunks, CSS, images, fonts, icons)
  event.respondWith(
    caches.match(request, { ignoreSearch: true }).then((cachedResponse) => {
      if (cachedResponse) {
        // Background revalidation if online
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
      return fetch(request)
        .then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200) {
            return networkResponse;
          }

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
        })
        .catch(() => {
          return new Response("", {
            status: 404,
            statusText: "Offline asset unavailable",
          });
        });
    })
  );
});
