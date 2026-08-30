<script setup>
defineProps({
  navLinks: { type: Array, required: true }
})

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)
const colorMode = useColorMode()
const { activeSection, scrollTo } = useSectionNavigation()
const { t, locale, setLocale } = useI18n()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const switchLanguage = () => {
  setLocale(locale.value === 'en' ? 'id' : 'en')
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 20
  })
})
</script>

<template>
  <nav
    :class="[
      'sticky top-0 z-50 w-full transition-all duration-300',
      isScrolled
        ? 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-white/5 shadow-[0_2px_16px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_16px_rgba(0,0,0,0.3)]'
        : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-14">
        <!-- Nav Links (desktop only) -->
        <div class="hidden md:flex items-center gap-0.5">
          <a
            v-for="link in navLinks"
            :key="link"
            @click.prevent="scrollTo(link)"
            href="#"
            class="relative px-3.5 py-1.5 text-sm font-medium rounded-lg transition-all duration-300 group"
            :class="
              activeSection === link
                ? 'text-primary dark:text-cyan-400'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
            "
          >
            <span
              v-if="activeSection === link"
              class="absolute inset-0 bg-primary/8 dark:bg-cyan-400/10 rounded-lg transition-all duration-300"
            ></span>
            <span class="relative">{{ t(`nav.links.${link}`) }}</span>
            <span
              v-if="activeSection === link"
              class="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-primary to-cyan-400 rounded-full"
            ></span>
          </a>
        </div>

        <!-- Right: Actions -->
        <div class="flex items-center gap-1 ml-auto">
          <!-- Language -->
          <button
            @click="switchLanguage"
            class="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-slate-100 dark:hover:bg-white/5 transition-colors duration-200"
            :aria-label="t('nav.switchLanguage')"
          >
            <svg
              v-if="locale === 'en'"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 20"
              class="w-4 h-4 rounded-sm"
              aria-hidden="true"
            >
              <rect width="30" height="10" y="0" fill="#ce1126" />
              <rect width="30" height="10" y="10" fill="#fff" />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 20"
              class="w-4 h-4 rounded-sm"
              aria-hidden="true"
            >
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

          <!-- Theme -->
          <button
            @click="toggleColorMode"
            class="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-slate-100 dark:hover:bg-white/5 transition-colors duration-200 group"
            :aria-label="t('nav.toggleTheme')"
          >
            <client-only>
              <svg
                v-if="colorMode.value === 'dark'"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="w-4 h-4 text-amber-400 group-hover:rotate-90 transition-transform duration-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="w-4 h-4 text-slate-500 group-hover:-rotate-90 transition-transform duration-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            </client-only>
          </button>

          <!-- CTA (hidden on mobile) -->
          <a
            @click.prevent="scrollTo('contact')"
            href="#"
            class="hidden sm:inline-flex items-center gap-1.5 bg-gradient-to-r from-primary to-cyan-500 text-white pl-4 pr-3 py-1.5 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            {{ t('nav.hireMe') }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-3.5 h-3.5"
            >
              <path
                fill-rule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clip-rule="evenodd"
              />
            </svg>
          </a>

          <!-- Mobile Toggle -->
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="md:hidden w-8 h-8 rounded-lg flex items-center justify-center hover:bg-slate-100 dark:hover:bg-white/5 transition-colors duration-200"
            :aria-label="t('nav.toggleMenu')"
          >
            <div class="flex flex-col gap-1 w-4">
              <span
                :class="[
                  'h-0.5 bg-slate-600 dark:bg-slate-300 rounded-full transition-all duration-300 origin-center',
                  isMobileMenuOpen ? 'rotate-45 translate-y-[3px]' : ''
                ]"
              ></span>
              <span
                :class="[
                  'h-0.5 bg-slate-600 dark:bg-slate-300 rounded-full transition-all duration-300',
                  isMobileMenuOpen ? 'opacity-0 scale-x-0' : ''
                ]"
              ></span>
              <span
                :class="[
                  'h-0.5 bg-slate-600 dark:bg-slate-300 rounded-full transition-all duration-300 origin-center',
                  isMobileMenuOpen ? '-rotate-45 -translate-y-[3px]' : ''
                ]"
              ></span>
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden mt-2 mx-4 p-3 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-white/30 dark:border-white/8 shadow-2xl"
      >
        <a
          v-for="link in navLinks"
          :key="`m-${link}`"
          @click.prevent="
            scrollTo(link)
            isMobileMenuOpen = false
          "
          href="#"
          :class="[
            'flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200',
            activeSection === link
              ? 'bg-primary/10 text-primary dark:text-cyan-400'
              : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5'
          ]"
        >
          <span
            v-if="activeSection === link"
            class="w-1.5 h-1.5 rounded-full bg-primary dark:bg-cyan-400"
          ></span>
          <span v-else class="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600"></span>
          {{ t(`nav.links.${link}`) }}
        </a>
        <div class="mt-2 pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
          <a
            @click.prevent="
              scrollTo('contact')
              isMobileMenuOpen = false
            "
            href="#"
            class="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-cyan-500 text-white py-2.5 rounded-xl font-bold text-sm shadow-lg"
          >
            {{ t('nav.hireMe') }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-4 h-4"
            >
              <path
                fill-rule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>
