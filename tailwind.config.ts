import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
        "space-grotesk": "var(--font-space-grotesk)",
      },
      backgroundImage: {
        "schedule-gradient":
          "linear-gradient(to right, rgba(211, 196, 242, 0.38), rgba(211, 196, 242, 0.38)), url('/images/schedule-bg.png')",
        "speaker-gradient":
          "linear-gradient(to right, rgba(211, 196, 242, 0.38), rgba(211, 196, 242, 0.25)), url('/images/speaker-bg.png')",
        "banner-gradient":
          "linear-gradient(to right, rgba(211, 196, 242, 0.38), rgba(211, 196, 242, 0.25)), url('/images/banner-bg.png')",
        "seed-gradient":
          "linear-gradient(to right, rgba(211, 196, 242, 0.38), rgba(211, 196, 242, 0.25)), url('/images/seed-bg.png')",
        "conference-gradient":
          "linear-gradient(to right, rgba(211, 196, 242, 0.38), rgba(211, 196, 242, 0.25)), url('/images/conference-bg.png')",
        "paper-gradient":
          "linear-gradient(to right, rgba(211, 196, 242, 0.38), rgba(211, 196, 242, 0.25)), url('/images/paper-bg.png')",
        "contact-gradient":
          "linear-gradient(to right, rgba(211, 196, 242, 0.38), rgba(211, 196, 242, 0.25)), url('/images/contact-bg.png')",
      },
    },
  },
  plugins: [],
};
export default config;
