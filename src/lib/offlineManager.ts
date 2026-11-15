// QuranPath Offline Storage & Cache Manager

export interface OfflineStatus {
  isOnline: boolean;
  isFullyCached: boolean;
  cachedCount: number;
  totalCount: number;
  percent: number;
}

export const OFFLINE_AUDIO_FILES = [
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

export const OFFLINE_CORE_ROUTES = [
  "/",
  "/path",
  "/practice",
  "/quiz",
  "/progress",
  "/profile",
];

// All 18 level quizzes for complete offline coverage
export const OFFLINE_QUIZ_ROUTES = Array.from(
  { length: 18 },
  (_, i) => `/quiz/q${i + 1}`
);

// Foundation lesson routes for instant offline availability
export const OFFLINE_LESSON_ROUTES = [
  "/learn/l1-1",
  "/learn/l1-2",
  "/learn/l1-3",
  "/learn/l1-4",
  "/learn/l2-1",
  "/learn/l2-2",
  "/learn/l2-3",
  "/learn/l2-4",
];

export const OFFLINE_ASSETS = [
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/icon-maskable.png",
  "/icons/apple-touch-icon.png",
  "/icons/icon.svg",
  "/favicon.ico",
];

export const OFFLINE_ROUTES = [
  ...OFFLINE_CORE_ROUTES,
  ...OFFLINE_QUIZ_ROUTES,
  ...OFFLINE_LESSON_ROUTES,
  ...OFFLINE_ASSETS,
];

export const ALL_OFFLINE_TARGETS = [...OFFLINE_ROUTES, ...OFFLINE_AUDIO_FILES];

const CACHE_NAME = "quranpath-core-v1.2.0";

/**
 * Helper to parse HTML and extract all Next.js static scripts and stylesheets.
 */
function extractHtmlAssetUrls(html: string): string[] {
  const urls: string[] = [];
  const scriptRegex = /(?:src|href)="(\/_next\/static\/[^"]+)"/g;
  let match: RegExpExecArray | null;
  while ((match = scriptRegex.exec(html)) !== null) {
    urls.push(match[1]);
  }
  return Array.from(new Set(urls));
}

export async function checkOfflineStatus(): Promise<OfflineStatus> {
  const isOnline = typeof window !== "undefined" ? navigator.onLine : true;

  if (typeof window === "undefined" || !("caches" in window)) {
    return {
      isOnline,
      isFullyCached: false,
      cachedCount: 0,
      totalCount: ALL_OFFLINE_TARGETS.length,
      percent: 0,
    };
  }

  try {
    const cache = await caches.open(CACHE_NAME);
    let cachedCount = 0;

    for (const target of ALL_OFFLINE_TARGETS) {
      const match = await cache.match(target, { ignoreSearch: true });
      if (match) {
        cachedCount++;
      }
    }

    const totalCount = ALL_OFFLINE_TARGETS.length;
    const percent = Math.min(100, Math.round((cachedCount / totalCount) * 100));

    return {
      isOnline,
      isFullyCached: cachedCount >= totalCount - 2, // allowance for any minor asset
      cachedCount,
      totalCount,
      percent,
    };
  } catch (err) {
    console.warn("[OfflineManager] Cache check error:", err);
    return {
      isOnline,
      isFullyCached: false,
      cachedCount: 0,
      totalCount: ALL_OFFLINE_TARGETS.length,
      percent: 0,
    };
  }
}

export async function downloadAllForOffline(
  onProgress?: (percent: number, currentItem: string) => void
): Promise<{ success: boolean; cachedCount: number }> {
  if (typeof window === "undefined" || !("caches" in window)) {
    return { success: false, cachedCount: 0 };
  }

  try {
    const cache = await caches.open(CACHE_NAME);
    let count = 0;
    const total = ALL_OFFLINE_TARGETS.length;
    const discoveredAssets = new Set<string>();

    for (let i = 0; i < total; i++) {
      const url = ALL_OFFLINE_TARGETS[i];
      try {
        const response = await fetch(url, { cache: "reload" });
        if (response && response.status === 200) {
          await cache.put(url, response.clone());
          count++;

          const contentType = response.headers.get("content-type") || "";
          if (contentType.includes("text/html")) {
            // 1. Precache client-side Next.js RSC payload
            try {
              const rscResp = await fetch(url, { headers: { RSC: "1" }, cache: "reload" });
              if (rscResp && rscResp.status === 200) {
                await cache.put(url + "?_rsc=1", rscResp.clone());
                await cache.put(new Request(url, { headers: { RSC: "1" } }), rscResp);
              }
            } catch (_) {}

            // 2. Discover and collect linked JS/CSS chunks
            try {
              const html = await response.text();
              const linkedAssets = extractHtmlAssetUrls(html);
              for (const assetUrl of linkedAssets) {
                discoveredAssets.add(assetUrl);
              }
            } catch (_) {}
          }
        }
      } catch (e) {
        console.warn(`[OfflineManager] Failed to cache ${url}:`, e);
      }

      if (onProgress) {
        const percent = Math.round(((i + 1) / total) * 100);
        onProgress(percent, url);
      }
    }

    // 3. Cache all discovered Next.js static JS/CSS bundles
    for (const assetUrl of Array.from(discoveredAssets)) {
      try {
        const assetResp = await fetch(assetUrl, { cache: "reload" });
        if (assetResp && assetResp.status === 200) {
          await cache.put(assetUrl, assetResp);
          count++;
        }
      } catch (_) {}
    }

    return { success: count > 0, cachedCount: count };
  } catch (err) {
    console.error("[OfflineManager] Download failed:", err);
    return { success: false, cachedCount: 0 };
  }
}

/**
 * Automatically schedule offline caching 25 seconds after the website is fully loaded.
 * Ensures the app and all 30 alphabet audio MP3s are pre-cached in the background without user intervention.
 */
export function initAutoOfflineCaching(
  onComplete?: (cachedCount: number) => void
): () => void {
  if (typeof window === "undefined") return () => {};

  let timerId: NodeJS.Timeout | null = null;

  const runAutoCache = async () => {
    if (typeof navigator !== "undefined" && !navigator.onLine) return;

    try {
      const status = await checkOfflineStatus();
      if (!status.isFullyCached) {
        console.log("[QuranPath Offline] Starting automatic background caching (+25s after load)...");
        const res = await downloadAllForOffline();
        if (res.success) {
          console.log(`[QuranPath Offline] Auto caching complete (${res.cachedCount} items saved).`);
          window.dispatchEvent(new CustomEvent("quranpath:offline-updated"));
          if (onComplete) onComplete(res.cachedCount);
        }
      } else {
        console.log("[QuranPath Offline] Device is already 100% cached for offline use.");
      }
    } catch (err) {
      console.warn("[QuranPath Offline] Auto caching error:", err);
    }
  };

  const schedule = () => {
    timerId = setTimeout(runAutoCache, 25000); // exactly 25 seconds after load
  };

  if (document.readyState === "complete") {
    schedule();
  } else {
    window.addEventListener("load", schedule, { once: true });
  }

  return () => {
    if (timerId) clearTimeout(timerId);
    window.removeEventListener("load", schedule);
  };
}
