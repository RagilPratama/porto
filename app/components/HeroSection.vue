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
const supportsHeroBg3d = ref(false)
const isHeroBgInteracting = ref(false)
const heroBgTilt = reactive({ x: 0, y: 0 })

const heroBgTopStyle = computed(() => {
  if (!supportsHeroBg3d.value || !isHeroBgInteracting.value) return {}

  return {
    transform: `translate3d(${heroBgTilt.x * 1.1}px, ${heroBgTilt.y * 1}px, 0)`
  }
})

const heroBgBottomStyle = computed(() => {
  if (!supportsHeroBg3d.value || !isHeroBgInteracting.value) return {}

  return {
    transform: `translate3d(${heroBgTilt.x * -1}px, ${heroBgTilt.y * -0.9}px, 0)`
  }
})

const handleHeroBgMove = (event) => {
  if (!supportsHeroBg3d.value) return

  const section = event.currentTarget
  if (!section) return

  const rect = section.getBoundingClientRect()
  const offsetX = (event.clientX - rect.left) / rect.width - 0.5
  const offsetY = (event.clientY - rect.top) / rect.height - 0.5

  isHeroBgInteracting.value = true
  heroBgTilt.x = offsetX * 56
  heroBgTilt.y = offsetY * 44
}

const resetHeroBgMove = () => {
  isHeroBgInteracting.value = false
  heroBgTilt.x = 0
  heroBgTilt.y = 0
}

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
  supportsHeroBg3d.value = window.matchMedia('(hover: hover) and (pointer: fine)').matches
})
onBeforeUnmount(() => {
  if (heroTypingInterval) window.clearInterval(heroTypingInterval)
  if (heroTypingTimeout) window.clearTimeout(heroTypingTimeout)
})
</script>

<template>
  <section
    :class="[
      'relative overflow-hidden pt-24 pb-20 md:pt-20 md:pb-32 scroll-mt-40',
      { 'hero-bg-interacting': isHeroBgInteracting }
    ]"
    id="hero"
    @mousemove="handleHeroBgMove"
    @mouseleave="resetHeroBgMove"
  >
    <!-- Floating Ambient Orbs for Glass depth -->
    <div
      class="absolute top-1/4 -right-20 w-96 h-96 bg-primary/15 rounded-full blur-[120px] -z-10 animate-orb-1 hero-bg-layer hero-bg-top"
      :style="heroBgTopStyle"
    ></div>
    <div
      class="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary-container/15 rounded-full blur-[100px] -z-10 animate-orb-2 hero-bg-layer hero-bg-bottom"
      :style="heroBgBottomStyle"
    ></div>
    <div
      class="absolute inset-x-[-10%] top-[14%] h-[72%] -z-10 pointer-events-none hero-depth-wrap"
    >
      <div class="hero-depth-plane"></div>
    </div>
    <div class="hero-seahorse-wave absolute inset-0 -z-5 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
      <div class="lg:col-span-7 z-10 text-center lg:text-left">
        <!-- Glass Badge -->
        <span
          data-animate="fade-down"
          data-delay="100"
          class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-white/60 dark:border-white/10 text-primary dark:text-primary-fixed-dim text-xs font-bold tracking-wider mb-6 shadow-sm"
        >
          <span class="w-2 h-2 rounded-full bg-primary animate-ping"></span>
          {{ t('hero.badge') }}
        </span>

        <h1
          data-animate="fade-right"
          data-delay="200"
          class="font-sans md:font-headline text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-8"
        >
          {{ t('hero.title') }} <br />
          <span
            class="block mt-2 text-3xl sm:text-4xl md:text-6xl text-primary dark:text-primary-fixed-dim transition-all duration-300"
            >{{ heroTitleTyped }}<span class="animate-pulse text-primary">|</span></span
          >
        </h1>

        <p
          data-animate="fade-right"
          data-delay="400"
          class="text-lg text-slate-600 dark:text-slate-300 max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0 font-medium"
        >
          {{ t('hero.description') }}
        </p>

        <!-- Glass Action Buttons -->
        <div
          data-animate="fade-up"
          data-delay="600"
          class="flex flex-wrap gap-4 justify-center lg:justify-start"
        >
          <button
            @click="scrollTo('contact')"
            class="bg-primary hover:bg-on-primary-fixed-variant text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl border border-white/30 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center gap-2"
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
            class="bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl text-slate-800 dark:text-slate-200 border border-white/70 dark:border-white/10 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/70 dark:hover:bg-slate-800/70 hover:scale-[1.02] transition-all shadow-md"
          >
            {{ t('hero.ctaSecondary') }}
          </button>
        </div>
      </div>

      <!-- Right Visual Showcase with Frosted Glass -->
      <div data-animate="zoom-in" data-delay="300" class="lg:col-span-5 relative">
        <div class="relative w-full aspect-square flex items-center justify-center">
          <div
            class="absolute inset-0 border-[1px] border-primary/20 rounded-full animate-[spin_20s_linear_infinite]"
          ></div>
          <div
            class="absolute inset-4 border-[1px] border-primary/15 rounded-full animate-[spin_15s_linear_infinite_reverse]"
          ></div>

          <!-- Glass Floating Badge 1 -->
          <div
            class="absolute top-4 -right-4 glass-card px-4 py-3 rounded-2xl shadow-xl z-30 animate-float border border-white/80 dark:border-white/15"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-8 h-8 rounded-xl bg-primary/10 text-primary dark:text-primary-fixed-dim flex items-center justify-center border border-primary/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  class="w-4 h-4"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 6.75 21 12l-3.75 5.25M6.75 6.75 3 12l3.75 5.25M14.25 4.5 9.75 19.5"
                  />
                </svg>
              </div>
              <span class="text-xs font-bold tracking-tight text-slate-800 dark:text-slate-200">{{
                t('hero.frontendBadge')
              }}</span>
            </div>
          </div>

          <!-- Glass Floating Badge 2 -->
          <div
            class="absolute bottom-20 -left-8 glass-card px-4 py-3 rounded-2xl shadow-xl z-30 animate-float border border-white/80 dark:border-white/15"
            style="animation-delay: -2s"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-8 h-8 rounded-xl bg-primary/10 text-primary dark:text-primary-fixed-dim flex items-center justify-center border border-primary/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
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
              </div>
              <span class="text-xs font-bold tracking-tight text-slate-800 dark:text-slate-200">{{
                t('hero.backendBadge')
              }}</span>
            </div>
          </div>

          <!-- Glass Portrait Container -->
          <div class="relative w-[85%] h-[85%] group">
            <div
              class="absolute inset-0 bg-primary/10 rounded-3xl -rotate-3 transition-transform group-hover:rotate-0 duration-500 backdrop-blur-md"
            ></div>
            <div
              class="absolute inset-0 bg-primary-container/10 rounded-3xl rotate-3 transition-transform group-hover:rotate-0 duration-500 backdrop-blur-md"
            ></div>
            <div
              class="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-white/40 dark:bg-slate-900/50 backdrop-blur-xl border-4 border-white/80 dark:border-white/20"
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
                class="w-full h-full object-cover rounded-3xl"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60"
              ></div>
              <div
                class="absolute inset-0 opacity-10 pointer-events-none"
                style="
                  background-image: radial-gradient(#fff 1px, transparent 1px);
                  background-size: 20px 20px;
                "
              ></div>
            </div>
          </div>
          <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/15 blur-[100px] -z-10 rounded-full opacity-60"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
