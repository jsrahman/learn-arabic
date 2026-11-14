"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export type PlatformType = "desktop" | "android" | "ios" | "unknown";

interface PWAContextType {
  isInstallable: boolean;
  isInstalled: boolean;
  hasNativePrompt: boolean;
  platform: PlatformType;
  promptInstall: () => Promise<void>;
  isIOS: boolean;
  isAndroid: boolean;
  isDesktop: boolean;
  showInstallModal: boolean;
  setShowInstallModal: (val: boolean) => void;
  showIOSPrompt: boolean;
  setShowIOSPrompt: (val: boolean) => void;
}

const PWAContext = createContext<PWAContextType>({
  isInstallable: false,
  isInstalled: false,
  hasNativePrompt: false,
  platform: "desktop",
  promptInstall: async () => {},
  isIOS: false,
  isAndroid: false,
  isDesktop: true,
  showInstallModal: false,
  setShowInstallModal: () => {},
  showIOSPrompt: false,
  setShowIOSPrompt: () => {},
});

export const usePWA = () => useContext(PWAContext);

export function PWAProvider({ children }: { children: React.ReactNode }) {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [platform, setPlatform] = useState<PlatformType>("desktop");
  const [showInstallModal, setShowInstallModal] = useState(false);

  useEffect(() => {
    // 1. Check if already installed / standalone
    if (
      typeof window !== "undefined" &&
      (window.matchMedia("(display-mode: standalone)").matches ||
        (window.navigator as unknown as { standalone?: boolean }).standalone === true)
    ) {
      setIsInstalled(true);
    }

    // 2. Detect Platform
    const userAgent = typeof window !== "undefined" ? window.navigator.userAgent.toLowerCase() : "";
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    const isAndroidDevice = /android/.test(userAgent);

    if (isIosDevice) {
      setPlatform("ios");
    } else if (isAndroidDevice) {
      setPlatform("android");
    } else {
      setPlatform("desktop");
    }

    // 3. Register Service Worker with complete load resilience
    const registerSW = () => {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker
          .register("/sw.js")
          .then((reg) => {
            console.log("[QuranPath PWA] Service Worker registered:", reg.scope);
          })
          .catch((err) => {
            console.warn("[QuranPath PWA] Service Worker registration failed:", err);
          });
      }
    };

    if ("serviceWorker" in navigator) {
      if (document.readyState === "complete") {
        registerSW();
      } else {
        window.addEventListener("load", registerSW);
      }
    }

    // 4. Capture beforeinstallprompt event for Chrome / Android / Edge / Brave
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
      setShowInstallModal(false);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
      window.removeEventListener("load", registerSW);
    };
  }, []);

  const promptInstall = async () => {
    if (deferredPrompt) {
      try {
        await deferredPrompt.prompt();
        const choiceResult = await deferredPrompt.userChoice;
        if (choiceResult.outcome === "accepted") {
          setIsInstalled(true);
          setShowInstallModal(false);
        }
        setDeferredPrompt(null);
      } catch (err) {
        console.warn("[QuranPath PWA] Install error, falling back to guide:", err);
        setShowInstallModal(true);
      }
    } else {
      setShowInstallModal(true);
    }
  };

  const isIOS = platform === "ios";
  const isAndroid = platform === "android";
  const isDesktop = platform === "desktop";
  const isInstallable = !isInstalled;
  const hasNativePrompt = deferredPrompt !== null;

  return (
    <PWAContext.Provider
      value={{
        isInstallable,
        isInstalled,
        hasNativePrompt,
        platform,
        promptInstall,
        isIOS,
        isAndroid,
        isDesktop,
        showInstallModal,
        setShowInstallModal,
        showIOSPrompt: showInstallModal && isIOS,
        setShowIOSPrompt: setShowInstallModal,
      }}
    >
      {children}
    </PWAContext.Provider>
  );
}
