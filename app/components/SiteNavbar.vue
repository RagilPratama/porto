<script setup>
defineProps({
  navLinks: { type: Array, required: true }
});

const isMobileMenuOpen = ref(false);
const colorMode = useColorMode();
const { activeSection, scrollTo } = useSectionNavigation();
const { t, locale, setLocale } = useI18n();

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};

const switchLanguage = () => {
  setLocale(locale.value === 'en' ? 'id' : 'en');
};
</script>

<template>
  <nav class="sticky top-0 z-50 w-full bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-outline-variant/20 dark:border-slate-800/60 transition-all duration-300">
    <!-- Subtle blueprint line accent -->
    <div class="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

    <div class="flex justify-between items-center max-w-7xl mx-auto px-8 py-3.5">
      <!-- Logo -->
      <div class="text-xl sm:text-2xl font-bold tracking-tighter text-on-surface dark:text-white font-headline transition-all">
        <span class="hidden sm:inline">M. Ragil Pratama</span>
      </div>

      <!-- Desktop Nav Links -->
      <div class="hidden md:flex items-center gap-1 font-headline font-semibold tracking-tight">
        <a v-for="link in navLinks"
           :key="link"
           @click.prevent="scrollTo(link)"
           href="#"
           :class="[
             'capitalize px-3.5 py-2 rounded-lg text-[0.85rem] transition-all duration-300',
             activeSection === link
               ? 'bg-primary/10 text-primary shadow-[0_0_12px_rgba(0,98,157,0.08)]'
               : 'text-on-surface-variant dark:text-slate-400 hover:text-on-surface dark:hover:text-white hover:bg-surface-container dark:hover:bg-white/5'
           ]">
          {{ t(`nav.links.${link}`) }}
        </a>
      </div>

      <!-- Right Actions -->
      <div class="flex items-center gap-2.5">
        <!-- Language Switcher -->
        <button
          @click="switchLanguage"
          class="w-9 h-9 p-1.5 rounded-lg bg-surface-container-low dark:bg-white/5 border border-outline-variant/20 dark:border-slate-700/40 hover:border-primary/30 hover:bg-surface-container dark:hover:bg-white/10 transition-all duration-300"
          :aria-label="t('nav.switchLanguage')"
        >
          <svg v-if="locale === 'en'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" class="w-full h-full rounded" aria-hidden="true">
            <rect width="30" height="10" y="0" fill="#ce1126" />
            <rect width="30" height="10" y="10" fill="#fff" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" class="w-full h-full rounded" aria-hidden="true">
            <rect width="30" height="20" fill="#fff" />
            <rect width="30" height="1.55" y="0" fill="#b22234" />
            <rect width="30" height="1.55" y="3.1" fill="#b22234" />
            <rect width="30" height="1.55" y="6.2" fill="#b22234" />
            <rect width="30" height="1.55" y="9.3" fill="#b22234" />
            <rect width="30" height="1.55" y="12.4" fill="#b22234" />
            <rect width="30" height="1.55" y="15.5" fill="#b22234" />
            <rect width="30" height="1.55" y="18.6" fill="#b22234" />
            <rect width="13.5" height="10.5" fill="#3c3b6e" />
            <circle cx="1.5" cy="1.5" r="0.5" fill="#fff" />
            <circle cx="4.5" cy="1.5" r="0.5" fill="#fff" />
            <circle cx="7.5" cy="1.5" r="0.5" fill="#fff" />
            <circle cx="10.5" cy="1.5" r="0.5" fill="#fff" />
            <circle cx="1.5" cy="4.5" r="0.5" fill="#fff" />
            <circle cx="4.5" cy="4.5" r="0.5" fill="#fff" />
            <circle cx="7.5" cy="4.5" r="0.5" fill="#fff" />
            <circle cx="10.5" cy="4.5" r="0.5" fill="#fff" />
            <circle cx="1.5" cy="7.5" r="0.5" fill="#fff" />
            <circle cx="4.5" cy="7.5" r="0.5" fill="#fff" />
            <circle cx="7.5" cy="7.5" r="0.5" fill="#fff" />
            <circle cx="10.5" cy="7.5" r="0.5" fill="#fff" />
          </svg>
        </button>

        <!-- Theme Switcher -->
        <button
          @click="toggleColorMode"
          class="w-9 h-9 p-1.5 rounded-lg bg-surface-container-low dark:bg-white/5 border border-outline-variant/20 dark:border-slate-700/40 text-on-surface-variant dark:text-slate-300 hover:border-primary/30 hover:bg-surface-container dark:hover:bg-white/10 transition-all duration-300 group"
          :aria-label="t('nav.toggleTheme')"
        >
          <client-only>
            <svg v-if="colorMode.value === 'dark'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5 group-hover:rotate-12 transition-transform">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5 group-hover:-rotate-12 transition-transform">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          </client-only>
        </button>

        <!-- Hire Me CTA -->
        <a @click.prevent="scrollTo('contact')" href="#" class="hidden sm:inline-flex items-center gap-2 bg-gradient-to-br from-primary to-primary-container text-on-primary px-5 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/20 active:scale-[0.97] transition-all duration-300 text-sm">
          {{ t('nav.hireMe') }}
        </a>

        <!-- Mobile Menu Toggle -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden w-9 h-9 p-1.5 rounded-lg bg-surface-container-low dark:bg-white/5 border border-outline-variant/20 dark:border-slate-700/40 text-on-surface-variant dark:text-slate-300 hover:border-primary/30 hover:bg-surface-container dark:hover:bg-white/10 transition-all duration-300"
          :aria-label="t('nav.toggleMenu')"
        >
          <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-2 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-2 opacity-0"
    >
      <div v-if="isMobileMenuOpen" class="md:hidden bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-outline-variant/20 dark:border-slate-800/60 z-40">
        <div class="max-w-7xl mx-auto flex flex-col p-4 gap-1">
          <a v-for="link in navLinks"
             :key="`mobile-${link}`"
             @click.prevent="scrollTo(link); isMobileMenuOpen = false"
             href="#"
             :class="[
               'px-4 py-3 rounded-lg transition-all font-semibold text-sm',
               activeSection === link ? 'bg-primary/10 text-primary' : 'text-on-surface-variant dark:text-slate-400 hover:bg-surface-container dark:hover:bg-white/5'
             ]">
              {{ t(`nav.links.${link}`) }}
            </a>
          <button @click="scrollTo('contact'); isMobileMenuOpen = false" class="mt-2 w-full bg-gradient-to-br from-primary to-primary-container text-white py-3 rounded-lg font-bold shadow-lg text-sm">
            {{ t('nav.hireMe') }}
          </button>
        </div>
      </div>
    </transition>
  </nav>
</template>
