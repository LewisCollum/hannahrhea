//import type { Config } from 'tailwindcss'
import {nextui} from "@nextui-org/react";

// const config: Config = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         white: "#FFFFFF",
//         black: "#000000"
//       },
//       fontFamily: {
//         'quote': ['Reenie Beanie'],
//         'roboto': ['Roboto Condensed'],
//       },
//     },
//   },
//   darkMode: "class",
//   plugins: [nextui()],
// }
// export default config

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
          fontFamily: {
              'cursive': ['Great Vibes'],
          },
          colors: {
              white: "#FFFFFF",
              black: "#000000"
          },
      },
  },
  darkMode: "class",
  plugins: [nextui({
      prefix: "nextui",
      addCommonColors: false,
      defaultTheme: "light",
      defaultExtendTheme: "light",
      layout: {
        fontSize: {
            tiny: "1rem", // text-tiny
            small: "4rem", // text-small
            medium: "6rem", // text-medium
            large: "9rem", // text-large
        },
      },
      themes: {
          light: {
              layout: {}, // light theme layout tokens
              colors: {
                  primary: {
                      DEFAULT: "#ffbdbd",
                      foreground: "white",
                  },
                  focus: "#FFFFFF",
              },
          },
          dark: {
              layout: {}, // dark theme layout tokens
              colors: {
                  primary: {
                      DEFAULT: "#ffbdbd",
                      foreground: "white",
                  },
                  focus: "#FFFFFF",
              },
          },
      }
  })],
};
