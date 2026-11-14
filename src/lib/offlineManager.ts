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

export const OFFLINE_ROUTES = [
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
  "/favicon.ico",
];

export const ALL_OFFLINE_TARGETS = [...OFFLINE_ROUTES, ...OFFLINE_AUDIO_FILES];

const CACHE_NAME = "quranpath-core-v1.1.0";

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
      const match = await cache.match(target);
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

    for (let i = 0; i < total; i++) {
      const url = ALL_OFFLINE_TARGETS[i];
      try {
        const response = await fetch(url, { cache: "reload" });
        if (response && response.status === 200) {
          await cache.put(url, response);
          count++;
        }
      } catch (e) {
        console.warn(`[OfflineManager] Failed to cache ${url}:`, e);
      }

      if (onProgress) {
        const percent = Math.round(((i + 1) / total) * 100);
        onProgress(percent, url);
      }
    }

    return { success: count > 0, cachedCount: count };
  } catch (err) {
    console.error("[OfflineManager] Download failed:", err);
    return { success: false, cachedCount: 0 };
  }
}
