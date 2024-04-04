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
      },
      animation: {
        progress: "progress 1.5s ease-in-out forwards",
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
