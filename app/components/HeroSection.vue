<script setup>
const { scrollTo } = useSectionNavigation()
const { t } = useI18n()
const localized = useLocalizedData()

const heroTitleTargets = computed(() => localized.value.hero.roles)
const heroTitleTyped = ref('')
let heroTypingInterval = null
let heroTypingTimeout = null
let heroTypingIndex = 0
let heroTypingTargetIndex = 0

onMounted(() => {
  const startHeroTyping = () => {
    const activeTitle = heroTitleTargets.value[heroTypingTargetIndex]
    heroTypingInterval = window.setInterval(() => {
      if (heroTypingIndex < activeTitle.length) {
        heroTitleTyped.value += activeTitle.charAt(heroTypingIndex)
        heroTypingIndex += 1
        return
      }

      window.clearInterval(heroTypingInterval)
      heroTypingInterval = null

      heroTypingTimeout = window.setTimeout(() => {
        heroTitleTyped.value = ''
        heroTypingIndex = 0
        heroTypingTargetIndex = (heroTypingTargetIndex + 1) % heroTitleTargets.value.length
        startHeroTyping()
      }, 1400)
    }, 75)
  }

  startHeroTyping()
})
onBeforeUnmount(() => {
  if (heroTypingInterval) window.clearInterval(heroTypingInterval)
  if (heroTypingTimeout) window.clearTimeout(heroTypingTimeout)
})
</script>

<template>
  <section class="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 scroll-mt-40" id="hero">
    <!-- Decorative rotated color blocks -->
    <!-- <div
      class="hidden md:block absolute -top-6 right-[42%] w-16 h-16 rounded-xl bg-primary-container border-[3px] border-ink rotate-12 animate-float -z-0"
      aria-hidden="true"
    ></div>
    <div
      class="hidden lg:block absolute bottom-16 left-[46%] w-10 h-10 rounded-full bg-tertiary border-[3px] border-ink -rotate-6 -z-0"
      aria-hidden="true"
    ></div> -->

    <div
      class="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10"
    >
      <div class="lg:col-span-7 text-center lg:text-left">
        <!-- Status Badge -->
        <span
          data-animate="fade-down"
          data-delay="100"
          class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-white dark:bg-[#1e1e1e] border-[3px] border-ink nb-shadow-sm text-ink dark:text-white text-xs font-bold font-label uppercase tracking-wider mb-6"
        >
          <span class="relative flex h-2.5 w-2.5">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"
            ></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
          </span>
          {{ t('hero.badge') }}
        </span>

        <h1
          data-animate="fade-right"
          data-delay="200"
          class="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-ink dark:text-white leading-[0.95] mb-7"
        >
          {{ t('hero.title') }}
          <span class="block mt-4">
            <span
              class="inline-flex items-center min-h-[1.2em] bg-primary-container text-ink border-[3px] border-ink rounded-xl px-3 py-1 nb-shadow text-3xl sm:text-4xl md:text-5xl -rotate-1"
              >{{ heroTitleTyped }}<span class="animate-blink ml-0.5">|</span></span
            >
          </span>
        </h1>

        <p
          data-animate="fade-right"
          data-delay="400"
          class="text-lg text-ink/70 dark:text-slate-300 max-w-xl mb-9 leading-relaxed mx-auto lg:mx-0 font-medium"
        >
          {{ t('hero.description') }}
        </p>

        <!-- Action Buttons -->
        <div
          data-animate="fade-up"
          data-delay="600"
          class="flex flex-wrap gap-4 justify-center lg:justify-start"
        >
          <button
            @click="scrollTo('contact')"
            class="bg-primary text-white px-7 py-3.5 rounded-xl font-bold text-lg border-[3px] border-ink nb-shadow nb-press flex items-center gap-2"
          >
            <span>{{ t('hero.ctaPrimary') }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <button
            @click="scrollTo('experience')"
            class="bg-white dark:bg-[#1e1e1e] text-ink dark:text-white px-7 py-3.5 rounded-xl font-bold text-lg border-[3px] border-ink nb-shadow nb-press"
          >
            {{ t('hero.ctaSecondary') }}
          </button>
        </div>
      </div>

      <!-- Right Visual Showcase -->
      <div data-animate="zoom-in" data-delay="300" class="lg:col-span-5 relative">
        <div class="relative w-full max-w-sm mx-auto aspect-[4/5]">
          <!-- Offset color blocks behind portrait -->
          <div
            class="absolute inset-0 rounded-3xl bg-primary-container border-[3px] border-ink translate-x-4 translate-y-4"
            aria-hidden="true"
          ></div>
          <div
            class="absolute inset-0 rounded-3xl bg-primary border-[3px] border-ink translate-x-2 translate-y-2"
            aria-hidden="true"
          ></div>

          <!-- Portrait frame -->
          <div
            class="relative w-full h-full rounded-3xl overflow-hidden border-[3px] border-ink bg-white"
          >
            <NuxtImg
              format="webp"
              quality="70"
              fetchpriority="high"
              loading="eager"
              width="504"
              height="672"
              sizes="(max-width: 768px) 78vw, (max-width: 1280px) 36vw, 504px"
              densities="x1 x2"
              src="/profile.jpg"
              :alt="t('hero.portraitAlt')"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Sticker Badge 1: Frontend -->
          <div
            class="absolute -top-4 -right-3 sm:-right-5 bg-primary-container text-ink px-3.5 py-2.5 rounded-xl border-[3px] border-ink nb-shadow z-30 animate-float rotate-3"
          >
            <div class="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                class="w-4 h-4"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 6.75 21 12l-3.75 5.25M6.75 6.75 3 12l3.75 5.25M14.25 4.5 9.75 19.5"
                />
              </svg>
              <span class="text-xs font-bold tracking-tight">{{ t('hero.frontendBadge') }}</span>
            </div>
          </div>

          <!-- Sticker Badge 2: Backend -->
          <div
            class="absolute bottom-10 -left-3 sm:-left-6 bg-tertiary text-white px-3.5 py-2.5 rounded-xl border-[3px] border-ink nb-shadow z-30 animate-float -rotate-3"
            style="animation-delay: -2s"
          >
            <div class="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                class="w-4 h-4"
                aria-hidden="true"
              >
                <ellipse cx="12" cy="5.5" rx="7" ry="3" />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 5.5v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6M5 11.5v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"
                />
              </svg>
              <span class="text-xs font-bold tracking-tight">{{ t('hero.backendBadge') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
