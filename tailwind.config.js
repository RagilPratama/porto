/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        // ---- Neo-brutalist palette (token names kept for backward compat) ----
        // Ink + paper
        ink: '#111111',
        paper: '#FBF6EC',
        'paper-dark': '#141414',

        // Primary = electric violet (readable as text + strong as fill)
        primary: '#6C3EF4',
        'on-primary': '#ffffff',
        'on-primary-fixed': '#1b0a52',
        'on-primary-fixed-variant': '#5024d1', // used as hover:bg-* -> darker violet
        'primary-fixed': '#e7deff',
        'primary-fixed-dim': '#c7b6ff', // dark-mode accent text
        'primary-container': '#C8F94E', // lime pop accent
        'on-primary-container': '#2a3400',
        'inverse-primary': '#c7b6ff',
        'surface-tint': '#6C3EF4',

        // Secondary = brutalist blue
        secondary: '#1452FF',
        'on-secondary': '#ffffff',
        'secondary-container': '#dbe4ff',
        'on-secondary-container': '#0a2b8a',
        'secondary-fixed': '#dbe4ff',
        'secondary-fixed-dim': '#a9c3ff',
        'on-secondary-fixed': '#001a5c',
        'on-secondary-fixed-variant': '#0a2b8a',

        // Tertiary = brutalist orange (fullstack category)
        tertiary: '#FF5A1F',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#ffd9c7',
        'on-tertiary-container': '#4a1500',
        'tertiary-fixed': '#ffd9c7',
        'tertiary-fixed-dim': '#ffc9a3',
        'on-tertiary-fixed': '#331000',
        'on-tertiary-fixed-variant': '#8a2b00',

        // Surfaces
        background: '#FBF6EC',
        surface: '#FBF6EC',
        'on-surface': '#111111',
        'on-background': '#111111',
        'surface-bright': '#ffffff',
        'surface-dim': '#efe9db',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#fbf6ec',
        'surface-container': '#f5efe1',
        'surface-container-high': '#efe9db',
        'surface-container-highest': '#e8e2d4',
        'surface-variant': '#e8e2d4',
        'on-surface-variant': '#45413a',
        'inverse-surface': '#111111',
        'inverse-on-surface': '#fbf6ec',

        // Outline / utility
        outline: '#111111',
        'outline-variant': '#111111',

        // Status
        error: '#e4002b',
        'on-error': '#ffffff',
        'error-container': '#ffdad6',
        'on-error-container': '#5c0010'
      },
      fontFamily: {
        headline: ["'Space Grotesk'", "'Plus Jakarta Sans'", 'sans-serif'],
        display: ["'Space Grotesk'", 'sans-serif'],
        body: ['Outfit', 'sans-serif'],
        label: ["'Space Grotesk'", 'Outfit', 'sans-serif']
      },
      borderRadius: {
        DEFAULT: '0.375rem',
        lg: '0.625rem',
        xl: '0.875rem',
        '2xl': '1rem',
        '3xl': '1.25rem',
        full: '9999px'
      },
      boxShadow: {
        brutal: '4px 4px 0 0 #111111',
        'brutal-sm': '2px 2px 0 0 #111111',
        'brutal-lg': '6px 6px 0 0 #111111',
        'brutal-xl': '8px 8px 0 0 #111111'
      }
    }
  },
  plugins: []
}
