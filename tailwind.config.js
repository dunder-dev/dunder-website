/** @type {import('tailwindcss').Config} */

import typographyPlugin from '@tailwindcss/typography'

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        pink: {
          css: {
            '--tw-prose-body': theme('colors.pink[800]'),
          }
        }
      }),
      animation: {
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
    },
  },
  plugins: [typographyPlugin],
}