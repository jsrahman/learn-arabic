import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeWrapper } from "@/components/ThemeWrapper";
import { PWAProvider } from "@/components/PWAProvider";
import { PWAInstallModal } from "@/components/PWAInstallModal";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "QuranPath — পবিত্র কুরআন পাঠ ও তাজবীদ শিক্ষা",
  description:
    "সহজ ও কার্যকর পদ্ধতিতে আরবি হরফ ও সহীহ তাজবীদ সহকারে পবিত্র কুরআন পাঠ শিখুন। ১৮টি প্রগ্রেসিভ লেভেল ও ৬৩০টি ইন্টারেক্টিভ কুইজ।",
  manifest: "/manifest.json",
  applicationName: "QuranPath",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "QuranPath",
  },
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  keywords: [
    "কুরআন শিক্ষা",
    "নূরানী কায়দা",
    "তাজবীদ",
    "Learn Quran",
    "Arabic Alphabet",
    "Noorani Qaida",
    "Tajweed Rules",
    "Quran Reading App",
  ],
  authors: [{ name: "QuranPath" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#064E3B" },
    { media: "(prefers-color-scheme: dark)", color: "#030a0d" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body className="bg-sand-50 dark:bg-night-950 text-sand-900 dark:text-sand-100 min-h-screen flex flex-col font-sans transition-colors duration-200 overflow-x-hidden min-w-0 w-full">
        <ThemeWrapper>
          <PWAProvider>
            <Navbar />
            <main className="flex-1 w-full">{children}</main>
            <Footer />
            <PWAInstallModal />
            <Toaster
              position="bottom-center"
              toastOptions={{
                duration: 3500,
                style: {
                  background: "#0c1d24",
                  color: "#fdfbf7",
                  border: "1px solid rgba(255,255,255,0.12)",
                  fontSize: "13px",
                  borderRadius: "14px",
                  padding: "10px 16px",
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
                },
                error: {
                  iconTheme: {
                    primary: "#ef4444",
                    secondary: "#ffffff",
                  },
                },
                success: {
                  iconTheme: {
                    primary: "#10b981",
                    secondary: "#ffffff",
                  },
                },
              }}
            />
          </PWAProvider>
        </ThemeWrapper>
      </body>
    </html>
  );
}
