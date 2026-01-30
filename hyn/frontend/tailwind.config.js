module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      yellow: {
        50: "#FFFACD",
        100: "#FFFF99",
        200: "#FFFF66",
        300: "#FFFF33",
        400: "#FFD400",  // Primary accent yellow
        500: "#FFC700",
        600: "#FFB700",
        700: "#FFA700",
        800: "#FF9700",
        900: "#FF8700",
      },
      gray: {
        50: "#F9F9F9",
        100: "#F3F3F3",
        200: "#E8E8E8",
        300: "#D1D1D1",
        400: "#A1A1A1",
        500: "#808080",
        600: "#333333",
        700: "#222222",
        800: "#111111",
        900: "#0A0A0A",
      },
      transparent: "transparent",
      current: "currentColor",
    },
    extend: {
      fontFamily: {
        sans: ["system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
        serif: ["Georgia", "Garamond", "serif"],
      }
    }
  },
  plugins: []
};
