import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A1522",        // near-black blue — primary dark surface
        gunmetal: "#152436",   // secondary dark surface
        plate: "#1E3049",      // raised panel on dark
        steel: "#5B6B7C",      // mid grey-blue, body text on light
        steelLight: "#93A2AF",
        haze: "#EFEDE5",       // warm off-white background
        paper: "#F8F7F3",
        brass: "#B5762C",      // signature accent — brass fitting
        brassLight: "#D99A4E",
        rivet: "#3A4C5E",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      backgroundImage: {
        "diagonal-hatch":
          "repeating-linear-gradient(135deg, rgba(255,255,255,0.035) 0px, rgba(255,255,255,0.035) 1px, transparent 1px, transparent 10px)",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        dash: {
          to: { strokeDashoffset: "0" },
        },
      },
      animation: {
        rise: "rise 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
        dash: "dash 1.8s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
