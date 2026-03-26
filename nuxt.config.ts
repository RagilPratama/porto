export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light'
  },
  googleFonts: {
    families: {
      'Plus Jakarta Sans': [400, 600, 700, 800],
      'Outfit': [400, 600, 700, 800]
    },
    display: 'swap',
    download: true,
    inject: true
  },
  image: {
    domains: [
      'instagram.fcgk31-1.fna.fbcdn.net',
      'companieslogo.com',
      'ogya.co.id',
      'encrypted-tbn0.gstatic.com',
      'sheldondental.id',
      'carfix.co.id',
      'cdn.techinasia.com',
      'lh3.googleusercontent.com',
      'upload.wikimedia.org',
      'shl.co.id',
      'cdn-icons-png.flaticon.com'
    ]
  },
  app: {
    head: {
      title: 'M. Ragil Pratama S.T | Fullstack Developer Portfolio',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Professional Fullstack Developer with 7+ years of experience in Vue.js, React, Node.js, and Laravel. Building high-performing, scalable digital solutions.' },
        { name: 'author', content: 'M. Ragil Pratama S.T' },
        { name: 'keywords', content: 'Fullstack Developer, Vue.js, React, Node.js, Laravel, Portfolio, Web Development, Software Engineer, Jakarta, Bogor' },
        { name: 'google-site-verification', content: 'oLDOT4WEB8TLHCcSwnK_pMdOpL5GMfTAM5bvARv0rQc' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://ragilpratama.com/' },
        { property: 'og:title', content: 'M. Ragil Pratama S.T | Fullstack Developer' },
        { property: 'og:description', content: 'Building high-performing, scalable digital solutions with modern tech stacks like Vue.js, React, Laravel, and Node.js.' },
        { property: 'og:image', content: 'https://instagram.fcgk31-1.fna.fbcdn.net/v/t51.82787-15/657737607_18451619035110514_6738889570991742381_n.jpg' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'M. Ragil Pratama S.T | Fullstack Developer' },
        { name: 'twitter:description', content: 'Building high-performing, scalable digital solutions with modern tech stacks like Vue.js, React, Laravel, and Node.js.' },
        { name: 'twitter:image', content: 'https://instagram.fcgk31-1.fna.fbcdn.net/v/t51.82787-15/657737607_18451619035110514_6738889570991742381_n.jpg' },
        
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://ragilpratama.com/' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined' }
      ],
      script: [
        { 
          src: 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs', 
          type: 'module',
          defer: true 
        }
      ]
    }
  },
  nitro: {
    compressPublicAssets: true,
    minify: true
  },
  routeRules: {
    // Assets are hashed by Vite, safe to cache for 1 year
    '/_nuxt/**': { headers: { 'cache-control': 's-maxage=31536000, public, immutable' } },
    // Images/Fonts should also have long cache
    '/**/*.webp': { headers: { 'cache-control': 's-maxage=31536000, public' } },
    '/**/*.png': { headers: { 'cache-control': 's-maxage=31536000, public' } },
    '/**/*.jpg': { headers: { 'cache-control': 's-maxage=31536000, public' } }
  }
})