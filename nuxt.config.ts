import tailwindScrollbar from 'tailwind-scrollbar';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'nuxt-viewport'],
  components: [
    {
      path: '~/components/ui',
      pathPrefix: false
    },
    '~/components'
  ],
  nitro: {
    storage: {
      'fs': {
        driver: 'fs',
        base: './data/cache'
      }
    }
  },
  runtimeConfig: {
    apiUrl: 'Url to rapid api from .env file',
    apiHost: 'X-RapidAPI-Host from .env file',
    apiKey: 'X-RapidAPI-Key from .env file',
    public: {
      api: 'https://fakestoreapi.com' // uses to emulate authorization
    }
  },
  typescript: {
    typeCheck: true,
    strict: true,
  },
  tailwindcss: {
    // @ts-ignore
    config: {
      plugins: [tailwindScrollbar]
    }
  },
  viewport: {
    breakpoints: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
    defaultBreakpoints: {
      desktop: 'lg',
      mobile: 'xs',
      tablet: 'md',
    },
    fallbackBreakpoint: 'lg'
  }
})
