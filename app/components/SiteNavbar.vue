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

const goTo = (link) => {
  scrollTo(link)
  isMobileMenuOpen.value = false
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
      'sticky top-0 z-50 w-full transition-all duration-200 bg-paper dark:bg-paper-dark',
      isScrolled ? 'border-b-2 border-ink' : 'border-b-2 border-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 gap-3">
        <!-- Nav Links (desktop only) -->
        <div class="hidden md:flex items-center gap-1 mr-auto">
          <a
            v-for="link in navLinks"
            :key="link"
            @click.prevent="scrollTo(link)"
            href="#"
            class="relative px-3 py-1.5 text-sm font-bold rounded-lg transition-all duration-150"
            :class="
              activeSection === link
                ? 'bg-primary-container text-ink border-[3px] border-ink nb-shadow-sm'
                : 'text-ink/60 dark:text-slate-400 hover:text-ink dark:hover:text-white border-2 border-transparent'
            "
          >
            {{ t(`nav.links.${link}`) }}
          </a>
        </div>

        <!-- Right: Actions -->
        <div class="flex items-center gap-2 shrink-0">
          <!-- Language -->
          <button
            @click="switchLanguage"
            class="w-9 h-9 rounded-lg flex items-center justify-center bg-white dark:bg-[#1e1e1e] border-[3px] border-ink nb-shadow-sm nb-press"
            :aria-label="t('nav.switchLanguage')"
          >
            <svg
              v-if="locale === 'en'"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 20"
              class="w-4 h-4 rounded-[2px]"
              aria-hidden="true"
            >
              <rect width="30" height="10" y="0" fill="#ce1126" />
              <rect width="30" height="10" y="10" fill="#fff" />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 20"
              class="w-4 h-4 rounded-[2px]"
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
            class="w-9 h-9 rounded-lg flex items-center justify-center bg-white dark:bg-[#1e1e1e] border-[3px] border-ink nb-shadow-sm nb-press group"
            :aria-label="t('nav.toggleTheme')"
          >
            <client-only>
              <svg
                v-if="colorMode.value === 'dark'"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
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
                stroke-width="2.2"
                class="w-4 h-4 text-ink group-hover:-rotate-12 transition-transform duration-500"
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
            class="hidden sm:inline-flex items-center gap-1.5 bg-primary-container text-ink border-[3px] border-ink pl-4 pr-3 py-1.5 rounded-none text-sm font-bold nb-shadow-sm nb-press"
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

          <!-- Mobile Toggle -->
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="md:hidden w-9 h-9 rounded-lg flex items-center justify-center bg-white dark:bg-[#1e1e1e] border-[3px] border-ink nb-shadow-sm"
            :aria-label="t('nav.toggleMenu')"
          >
            <div class="flex flex-col gap-1 w-4">
              <span
                :class="[
                  'h-0.5 bg-ink dark:bg-white rounded-full transition-all duration-300 origin-center',
                  isMobileMenuOpen ? 'rotate-45 translate-y-[3px]' : ''
                ]"
              ></span>
              <span
                :class="[
                  'h-0.5 bg-ink dark:bg-white rounded-full transition-all duration-300',
                  isMobileMenuOpen ? 'opacity-0 scale-x-0' : ''
                ]"
              ></span>
              <span
                :class="[
                  'h-0.5 bg-ink dark:bg-white rounded-full transition-all duration-300 origin-center',
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
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden mt-2 mx-4 p-3 rounded-2xl bg-white dark:bg-[#1e1e1e] border-[3px] border-ink nb-shadow-lg"
      >
        <a
          v-for="link in navLinks"
          :key="`m-${link}`"
          @click.prevent="goTo(link)"
          href="#"
          :class="[
            'flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-150 mb-1 border-2',
            activeSection === link
              ? 'bg-primary-container text-ink border-ink'
              : 'text-ink/70 dark:text-slate-300 border-transparent hover:border-ink hover:bg-paper dark:hover:bg-paper-dark'
          ]"
        >
          <span
            :class="[
              'w-2 h-2 rounded-full',
              activeSection === link ? 'bg-primary' : 'bg-ink/30 dark:bg-slate-600'
            ]"
          ></span>
          {{ t(`nav.links.${link}`) }}
        </a>
        <div class="mt-2 pt-3 border-t-2 border-ink/10 dark:border-white/10">
          <a
            @click.prevent="goTo('contact')"
            href="#"
            class="flex items-center justify-center gap-2 bg-primary text-white border-[3px] border-ink py-2.5 rounded-xl font-bold text-sm nb-shadow"
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
