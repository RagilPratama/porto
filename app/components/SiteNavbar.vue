<script setup>
defineProps({
  navLinks: { type: Array, required: true }
});

const isMobileMenuOpen = ref(false);
const colorMode = useColorMode();
const { activeSection, scrollTo } = useSectionNavigation();

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};
</script>

<template>
  <nav class="sticky top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-[0_20px_40px_rgba(0,163,255,0.06)] border-b border-slate-100 dark:border-slate-800 transition-all">
    <div class="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
      <div class="text-xl sm:text-2xl font-bold tracking-tighter text-slate-900 dark:text-white font-headline transition-all">
        <span class="hidden sm:inline">M. Ragil Pratama </span>
      </div>
      <div class="hidden md:flex items-center gap-8 font-headline font-semibold tracking-tight">
        <a v-for="link in navLinks"
           :key="link"
           @click.prevent="scrollTo(link)"
           href="#"
           :class="[
             'capitalize transition-all duration-300',
             activeSection === link ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-1' : 'text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-300'
           ]">
          {{ link === 'tech' ? 'Tech Stack' : link }}
        </a>
      </div>
      <div class="flex items-center gap-4">
        <!-- Theme Switcher -->
        <button
          @click="toggleColorMode"
          class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:ring-2 hover:ring-primary/30 transition-all duration-300 group"
          aria-label="Toggle theme"
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

        <a @click.prevent="scrollTo('contact')" href="#" class="inline-block bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2 rounded-md font-semibold hover:opacity-90 active:scale-95 transition-all shadow-sm text-sm sm:text-base">
          Hire Me
        </a>

        <!-- Mobile Menu Toggle -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Toggle menu"
        >
          <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div v-if="isMobileMenuOpen" class="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 shadow-xl z-40 overflow-hidden">
        <div class="flex flex-col p-4 gap-2">
          <a v-for="link in navLinks"
             :key="`mobile-${link}`"
             @click.prevent="scrollTo(link); isMobileMenuOpen = false"
             href="#"
             :class="[
               'px-4 py-3 rounded-xl transition-all font-semibold',
               activeSection === link ? 'bg-primary/10 text-primary' : 'text-slate-600 dark:text-slate-400'
             ]">
            {{ link === 'tech' ? 'Tech Stack' : link }}
          </a>
          <button @click="scrollTo('contact'); isMobileMenuOpen = false" class="mt-2 w-full bg-primary text-white py-3 rounded-xl font-bold shadow-lg">
            Hire Me
          </button>
        </div>
      </div>
    </transition>
  </nav>
</template>
