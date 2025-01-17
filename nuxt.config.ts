// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  extends: '@nuxt-themes/typography',
  compatibilityDate: '2024-04-03',
  modules: [
    '@nuxt/content',
    "@nuxt/ui",
    "@nuxtjs/mdc",
    "@nuxtjs/tailwindcss",
    '@vesp/nuxt-fontawesome',
    "@nuxt/image"
  ],
  ssr: false,
  devtools: { enabled: true },
  $production: {
    routeRules: {
      '/**': { isr: true },
    }
  },
  sourcemap: {
    server: true,
    client: true
  },
  $development: {},
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: [
      {
        path: '@/components',
        pathPrefix: false,    
      },
    ],
  fontawesome: {
    icons: {
      solid: ['bars', 'xmark'],
    },
  },
  content: {
    documentDriven: true,
    markdown: {
      mdc: true,
      rehypePlugins: [
        'rehype-figure'
      ],
      // Object syntax can be used to override default options
      remarkPlugins: {
        // Override remark-emoji options
        'remark-emoji': {
          emoticon: true
        },
        // Disable remark-gfm
        'remark-gfm': false,
        // Add remark-oembed
        // 'remark-oembed': {
          // Options
        // }
      },
    },
    highlight: {
      // Theme used in all color schemes.
      theme: {
        // Default theme (same as single string)
        default: 'nord',
        // Theme used if `html.dark`
        dark: 'github-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai'
      }
    }
  },
})