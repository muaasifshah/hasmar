const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {TailwindConfig} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./data/**/*.md"],
  darkMode: "class",
  plugins: [
    selectedVariantPlugin,
    expandedVariantPlugin,
    require("@tailwindcss/typography"),
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
      keyframes: {
        "ripple-1": {
          "0%": {
            transform: "scale(1)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(1.5)",
            opacity: "0",
          },
        },
        "ripple-2": {
          "0%": {
            transform: "scale(1)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(1.7)",
            opacity: "0",
          },
        },
        "thankyou-stroke": {
          "100%": { strokeDashoffset: "0" },
        },
        "thankyou-scaleOnly": {
          "0%, 100%": { transform: "none" },
          "50%": { transform: "scale3d(1.1, 1.1, 1)" },
        },
        "thankyou-fillOnly": {
          "100%": { boxShadow: "inset 0px 0px 0px 30px #7ac142" },
        },
      },
      animation: {
        "ripple-1": "ripple-1 2s infinite ease-in-out",
        "ripple-2": "ripple-2 2s infinite ease-in-out",
        "thankyou-stroke":
          "thankyou-stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards",
        "thankyou-scale": "thankyou-scaleOnly 0.3s ease-in-out 0.9s both",
        "thankyou-fill": "thankyou-fillOnly 0.4s ease-in-out 0.4s forwards",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #FFFFFF 27%, #D3EFFF 100%)",
      },
      willChange: {
        "opacity-transform": "opacity, transform",
      },
      screens: {
        "2xs": "320px",
        xs: "480px",
      },
    },
    fontFamily: {
      sans: ["REM", ...defaultTheme.fontFamily.sans],
      mono: ["Ramaraja", ...defaultTheme.fontFamily.mono],
      //source: ["Source Code Pro", "sans-serif"],
      //roboto: ["Roboto", "sans-serif"],
      //inter: ["Inter", "sans-serif"],
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1.333" }], // 12px
      sm: ["0.875rem", { lineHeight: "1.425" }], // 14px
      base: ["1rem", { lineHeight: "1.5" }], // 16px
      lg: ["1.125rem", { lineHeight: "1.556" }], // 18px
      xl: ["1.25rem", { lineHeight: "1.556" }], // 20px
      "2xl": ["1.5rem", { lineHeight: "1.333" }], // 24px
      "3xl": ["1.875rem", { lineHeight: "1.2" }], // 30px
      "4xl": ["2.25rem", { lineHeight: "1.111" }], // 36px
      "5xl": ["3rem", { lineHeight: "1.083" }], // 48px
      "6xl": ["4rem", { lineHeight: "1.0625" }], // 64px
      "7xl": ["4.5rem", { lineHeight: "1.05" }], // 72px
      "8xl": ["6rem", { lineHeight: "1.125" }], // 96px
      "9xl": ["8rem", { lineHeight: "1.125" }], // 128px
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      inherit: "inherit",
      white: "#fff",
      black: "#000",
      gray: {
        50: "#f7f7f7",
        100: "#e3e3e3",
        200: "#c8c8c8",
        300: "#a4a4a4",
        400: "#818181",
        500: "#666666",
        600: "#515151",
        700: "#434343",
        800: "#383838",
        900: "#121212",
      },
      blue: {
        50: "#eef7ff",
        100: "#d9edff",
        200: "#bce0ff",
        300: "#8ecdff",
        400: "#59b0ff",
        500: "#3992ff",
        brand: "#12B6F5", // hard-coded in embedded SVG for <docs-*> elements
        brandHover: "#27c3ff", // hard-coded in embedded SVG for <docs-*> elements
        600: "#1b6ef5",
        700: "#1458e1",
        800: "#1747b6",
        900: "#193f8f",
      },
    },
    container({ theme }) {
      return {
        center: true,
        padding: {
          DEFAULT: theme("spacing.6", "1.5rem"),
          sm: theme("spacing.6", "1.5rem"),
          md: theme("spacing.8", "2rem"),
          lg: theme("spacing.10", "2.5rem"),
        },
      };
    },
  },
  // classes that exist within the docs
  safelist: [
    "w-full",
    "mb-4",
    "rounded-lg",
    "aspect-[4/3]",
    "aspect-[1/1]",
    "overflow-hidden",
  ],
};

function selectedVariantPlugin({ addVariant, e }) {
  addVariant("selected", ({ modifySelectors, separator }) => {
    modifySelectors(({ className, selector }) => {
      let pseudo = "";
      if (/:(hover|focus|focus-within|focus-visible)$/.test(selector)) {
        let i = selector.lastIndexOf(":");
        if (i != -1) {
          pseudo = selector.substr(i);
        }
      }
      return `.${e(
        `selected${separator}${className}`,
      )}:where([data-selected])${pseudo}`;
    });
  });
}

function expandedVariantPlugin({ addVariant, e }) {
  addVariant("expanded", ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(
        `expanded${separator}${className}`,
      )}:where([aria-expanded="true"])`;
    });
  });
  addVariant("not-expanded", ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(
        `not-expanded${separator}${className}`,
      )}:where([aria-expanded="false"])`;
    });
  });
}

/**
 * @typedef {import("tailwindcss").Config} TailwindConfig
 */
