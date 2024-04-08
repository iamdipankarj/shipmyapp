import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-glow": "linear-gradient(135deg,#f79533,#f37055,#ef4e7b,#a166ab,#5073b8,#1098ad,#07b39b,#6fba82)",
        "gradient-cta": "linear-gradient(165deg, #ff7d0f 0, #ffcd05 100%)",
        "gradient-heading": "linear-gradient(to right, #1EE7B5, #BAFD0A, #98FF74, #FA3244, #F94A6E, #15ABF3)",
        "gradient-section": "linear-gradient(135deg, #0074e4 0%, #5522fa 100%)"
      },
      boxShadow: {
        "elevate": "0 0 0 1px rgba(var(--rgb-black), 0.05), 0 1px 0 0 rgba(var(--rgb-black), 0.05), 0 0.2em 1.6em -0.8em rgba(var(--rgb-black), 0.2), 0 0.4em 2.4em -1em rgba(var(--rgb-black), 0.3), 0 0.4em 0.8em -1.2em rgba(var(--rgb-black), 0.4), 0 0.8em 1.2em -1.6em rgba(var(--rgb-black), 0.5), 0 1.2em 1.6em -2em rgba(var(--rgb-black), 0.6)"
      },
      textShadow: {
        sm: '0px 1px 1px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      strokeWidth: {
        '3': '3px',
        '4': '4px',
      },
      colors: {
        "pink-light": "#FF649C",
        "red-primary": "#E22F38"
      },
      keyframes: {
        progress: {
          from: {
            width: '0%'
          },
          to: {
            width: '100%'
          }
        },
        shimmer: {
          '0%': {
            'background-position': '0 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          },
          '100%': {
            'background-position': '0 50%'
          }
        }
      },
      animation: {
        progress: "progress 1.5s ease-in-out forwards",
        shimmer: "shimmer 2s ease-in-out infinite"
      }
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    })
  ],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
      {
        signal: {
          "primary": "#36b37e",
          "primary-content": "#fff",
          "secondary": "#f95c5c",
          "secondary-content": "#fff",
          "accent": "#5856d6",
          "neutral": "#27373f",
          "neutral-content": "#fff",
          "base-100": "#fff",
          "info": "#ffe200",
          "success": "#19911c",
          "success-content": "#fff",
          "warning": "#ffcd05",
          "error": "#ff2d55",
          "error-content": "#fff",
        },
      },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
export default config;
