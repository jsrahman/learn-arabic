/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#fdfbf7",
          100: "#f8f4ec",
          200: "#f1e7d7",
          300: "#e6d5bd",
          400: "#d7be9f",
          500: "#c4a37f",
          600: "#b08967",
          700: "#937053",
          800: "#795c46",
          900: "#634c3b",
        },
        emerald: {
          850: "#04392b",
          950: "#022219",
        },
        gold: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
        night: {
          800: "#0c1d24",
          850: "#08161c",
          900: "#050f14",
          950: "#030a0d",
        },
      },
      fontFamily: {
        arabic: ["var(--font-amiri)", "Amiri", "Scheherazade New", "Noto Naskh Arabic", "Traditional Arabic", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(0, 0, 0, 0.04)",
        card: "0 4px 20px -2px rgba(6, 78, 59, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)",
        "card-hover": "0 12px 30px -4px rgba(6, 78, 59, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.06)",
        "gold-glow": "0 0 24px -4px rgba(245, 158, 11, 0.35)",
        "emerald-glow": "0 0 24px -4px rgba(16, 185, 129, 0.35)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "ripple": "ripple 1.5s cubic-bezier(0, 0.2, 0.8, 1) infinite",
        "bounce-short": "bounceShort 0.5s ease-in-out 1",
      },
      keyframes: {
        ripple: {
          "0%": { transform: "scale(0.8)", opacity: "1" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
        bounceShort: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};
