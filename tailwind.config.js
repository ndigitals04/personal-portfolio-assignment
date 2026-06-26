/**
 * tailwind.config.js
 * -------------------------------------------------------------------------
 * This file tells Tailwind:
 *   1. WHERE to look for class names (`content`) so it only generates the
 *      CSS that index.html actually uses (keeps output.css small).
 *   2. WHAT custom design tokens (colors / fonts / animations) to add on
 *      top of Tailwind's defaults, based on the "developer / IDE" theme
 *      used throughout the portfolio.
 * -------------------------------------------------------------------------
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tailwind scans this file for class names when it builds output.css
  content: ["./index.html"],

  theme: {
    extend: {
      colors: {
        // Core "editor" surface colors (deep navy, not pure black -> easier on the eyes)
        bg:"#1A312C",          // page background
        panel: "#428475", //#121B2E",       // card / section panel background
        "panel-light": "#89D7B7", //#182437", // slightly lighter panel (hover / nested surfaces)
        edge: "#37645a", //"#243047",        // hairline borders

        // Text colors
        ink: "#FFF4E1", //"#E7ECF3",         // primary text (off-white, not pure white)
        muted: "#fbe4bb", //"#8893A8",       // secondary / supporting text

        // Brand accents
        accent: "#3DD6C4",      // primary accent (teal/cyan) -> links, buttons, highlights
        "accent-dim": "#428475", //"#1F6E66",// darker teal for borders/backgrounds on accent elements
        spark: "#F2A65A",       // secondary accent (amber) -> used sparingly for emphasis

        // "Traffic light" window dots used on the IDE-style project cards
        "dot-red": "#FF5F57",
        "dot-yellow": "#FEBC2E",
        "dot-green": "#28C840",
      },

      fontFamily: {
        // Display font: used for big headings -> geometric + technical feel
        display: ["Space Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
        // Body font: used for paragraphs -> highly readable
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        // Mono font: used for labels, tags, code-like accents
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },

      // Custom subtle animations used for hero entrance + card reveals
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        blink: {
          "0%, 50%": { opacity: 1 },
          "51%, 100%": { opacity: 0 },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out both",
        blink: "blink 1s step-end infinite",
      },

      // Slightly larger max width for the content container
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
