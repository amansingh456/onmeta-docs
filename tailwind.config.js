module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          bg: "#000000",
          surface: "#121212",
          text: "#ffffff",
          textSec: "rgba(255, 255, 255, 0.7)",
          brdr: "rgba(255, 255, 255, 0.3)",
          accent: "rgba(0, 255, 136, 0.50)",
          "accent-subtle": "rgba(16, 185, 129, 0.20)",
        },

        light: {
          bg: "#ffffff",
          surface: "#fafafa",
          text: "#0f172a",
          textSec:"#334155",
          brdr: "rgba(15, 23, 42, 0.1)",
          accent: "#32568d",
          // accents: "rgba(16, 185, 129, 0.50)",
          "accent-light": "rgba(16, 185, 129, 0.30)",
          "accent-subtle": "#6f8fb8",
        },

        yellow: {
          primary: "#facc15",
          muted: "#facc15",
          subtle: "rgba(250, 204, 21, 0.30)",
          faint: "rgba(250, 204, 21, 0.20)",
          comment: "#b45309",
        },
      },

      // Custom opacity values for consistency
      opacity: {
        15: "0.15",
        30: "0.30",
        60: "0.60",
        70: "0.70",
      },

      animation: {
        bounce: "bounce 1s infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        spin: "spin 1s linear infinite",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
        "spin-reverse": "spin 15s linear infinite reverse",
      },
    },
  },
  plugins: [],
};
