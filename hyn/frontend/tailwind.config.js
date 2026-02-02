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
      },
      // ============ MODERN FLAT + DEPTH SHADOWS ============
      boxShadow: {
        // Elevation 1: Subtle, delicate (buttons, inputs, small cards)
        xs: "0 2px 4px rgba(0, 0, 0, 0.06)",
        sm: "0 4px 8px rgba(0, 0, 0, 0.08)",
        
        // Elevation 2: Soft, approachable (cards, modals)
        md: "0 8px 16px rgba(0, 0, 0, 0.1)",
        lg: "0 12px 24px rgba(0, 0, 0, 0.12)",
        
        // Elevation 3: Prominent, layered (floating elements, dropdowns)
        xl: "0 16px 32px rgba(0, 0, 0, 0.14)",
        "2xl": "0 20px 40px rgba(0, 0, 0, 0.16)",
        
        // Elevation 4: Premium, floating (modals, floating UI)
        "2xl-premium": "0 24px 48px rgba(0, 0, 0, 0.18), 0 0 1px rgba(0, 0, 0, 0.12)",
        "3xl": "0 28px 56px rgba(0, 0, 0, 0.2)",
        
        // Special depth effects
        "depth-sm": "0 2px 6px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.08)",
        "depth-md": "0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.1)",
        "depth-lg": "0 8px 20px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.12)",
        "depth-xl": "0 12px 28px rgba(0, 0, 0, 0.12), 0 8px 16px rgba(0, 0, 0, 0.14)",
        
        // Accent glow (for yellow accent elements)
        "glow-accent": "0 0 16px rgba(255, 212, 0, 0.3), 0 8px 24px rgba(0, 0, 0, 0.08)",
        "glow-accent-sm": "0 0 8px rgba(255, 212, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.06)",
        
        // Inset shadows for depth
        "inset-top": "inset 0 1px 2px rgba(255, 255, 255, 0.5)",
        "inset-bottom": "inset 0 -1px 2px rgba(0, 0, 0, 0.06)",
        
        // No shadow (flat)
        none: "none",
      },
      // ============ SPACING (4px base) ============
      spacing: {
        ...require('tailwindcss/defaultConfig').theme.spacing,
      },
      // ============ TRANSITIONS & DURATION ============
      transitionDuration: {
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        250: "250ms",
        300: "300ms",
        350: "350ms",
        400: "400ms",
      },
      // ============ CUSTOM EASING ============
      transitionTimingFunction: {
        "ease-smooth-in": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "ease-smooth-out": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "ease-emphasis": "cubic-bezier(0.22, 1, 0.36, 1)",
        "ease-gentle": "cubic-bezier(0.22, 0.82, 0.54, 0.9)",
        "ease-precise": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      // ============ BORDER RADIUS (Modern Flat) ============
      borderRadius: {
        none: "0",
        xs: "0.25rem", // 4px
        sm: "0.375rem", // 6px
        md: "0.5rem", // 8px
        lg: "0.75rem", // 12px
        xl: "1rem", // 16px
        "2xl": "1.25rem", // 20px
        full: "9999px",
      },
    }
  },
  plugins: []
};
