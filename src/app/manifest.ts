import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "QuranPath — পবিত্র কুরআন পাঠ ও তাজবীদ",
    short_name: "QuranPath",
    description: "সহজ ও কার্যকর পদ্ধতিতে আরবি হরফ ও সহীহ তাজবীদ সহকারে পবিত্র কুরআন পাঠ শিখুন।",
    start_url: "/",
    id: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#0E1713",
    theme_color: "#064E3B",
    lang: "bn",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
