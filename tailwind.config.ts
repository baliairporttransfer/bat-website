import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#F3F6FA",
          100: "#E7EDF4",
          600: "#17345D",
          700: "#102948",
          800: "#0B1F3A",
          900: "#08142B"
        },
        gold: {
          50: "#FBF8EC",
          100: "#F5EFCF",
          400: "#DEC45F",
          500: "#D4AF37",
          600: "#B99422"
        }
      },
      boxShadow: {
        luxury: "0 24px 70px rgba(8,20,43,0.18)",
        soft: "0 14px 40px rgba(8,20,43,0.10)"
      },
      borderRadius: {
        "4xl": "2rem"
      },
      backgroundImage: {
        "hero-overlay": "linear-gradient(90deg, rgba(8,20,43,.92) 0%, rgba(8,20,43,.72) 45%, rgba(8,20,43,.28) 100%)"
      }
    }
  },
  plugins: []
};

export default config;
