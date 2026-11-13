import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeWrapper } from "@/components/ThemeWrapper";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "QuranPath — Learn Arabic to Read the Holy Quran",
  description:
    "An interactive, quiz-based learning platform taking beginners from recognizing individual Arabic letters to reading complete Quranic verses with authentic Tajweed.",
  keywords: [
    "Learn Arabic",
    "Quran Reading",
    "Arabic Alphabet",
    "Noorani Qaida",
    "Tajweed for Beginners",
    "Harakat",
    "Arabic Pronunciation",
  ],
  authors: [{ name: "QuranPath" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-sand-50 dark:bg-night-950 text-sand-900 dark:text-sand-100 min-h-screen flex flex-col font-sans transition-colors duration-200">
        <ThemeWrapper>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </ThemeWrapper>
      </body>
    </html>
  );
}
