/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{html,js,ts,jsx,tsx,mdx}"],
  theme: {
    textColorPrimary: "var(--textColorPrimary)",
    screens: {
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      backgroundImage: {
        "radial-overlay":
          "radial-gradient(ellipse at center, transparent 0%, transparent 30%, rgba(0,0,0,0.541) 75%, rgba(0,0,0,0.966) 100%)",
      },

      colors: {
        primary: "#30354b",
        black: "var(--textColorPrimary)",
        purple: "#7D52F4",
      },
    },
  },
  plugins: [],
};
