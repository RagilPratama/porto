<script setup>
const props = defineProps({
  techStack: { type: Array, required: true },
  totalTechCount: { type: Number, required: true }
})

const { t } = useI18n()

const frontendItems = computed(
  () => props.techStack.find((g) => g.group === 'frontend')?.items ?? []
)
const backendItems = computed(() => props.techStack.find((g) => g.group === 'backend')?.items ?? [])
</script>

<template>
  <section class="py-20 md:py-24 overflow-hidden scroll-mt-40 relative" id="tech">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
      <div class="mb-14 text-center" data-animate="fade-up">
        <div class="inline-flex items-center gap-2 mb-4">
          <span
            class="bg-ink text-paper dark:bg-white dark:text-ink rounded-none px-2 py-0.5 font-label font-bold text-xs"
            >01</span
          >
          <span
            class="uppercase tracking-[0.25em] text-xs font-bold text-ink/50 dark:text-slate-400"
            >{{ t('nav.links.tech') }}</span
          >
        </div>
        <WordReveal
          :text="t('tech.title')"
          tag="h2"
          class="font-display text-4xl md:text-5xl font-bold mb-4 text-ink dark:text-white tracking-tighter"
        />
        <p class="text-ink/60 dark:text-slate-300 max-w-2xl mx-auto font-medium">
          {{ t('tech.description') }}
        </p>
      </div>

      <!-- Infinite logo marquees -->
      <div class="space-y-5">
        <div
          data-animate="fade-right"
          data-delay="100"
          class="marquee marquee-mask overflow-hidden"
          role="region"
          :aria-label="t('tech.title')"
        >
          <div class="marquee-track" style="--marquee-duration: 48s">
            <div
              v-for="copy in 2"
              :key="'fe-' + copy"
              class="flex gap-4 pr-4 items-stretch shrink-0"
              :aria-hidden="copy === 1"
            >
              <div
                v-for="tech in frontendItems"
                :key="tech.name"
                class="glass-pill rounded-none px-5 py-3 flex items-center gap-3 shrink-0 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div
                  class="w-9 h-9 rounded-lg bg-paper dark:bg-[#141414] flex items-center justify-center p-1.5 border-[3px] border-ink"
                >
                  <NuxtImg
                    format="webp"
                    :src="tech.icon"
                    :alt="tech.name"
                    class="w-full h-full object-contain"
                  />
                </div>
                <span
                  class="font-bold text-sm text-ink dark:text-slate-200 whitespace-nowrap tracking-tight"
                  >{{ tech.name }}</span
                >
              </div>
            </div>
          </div>
        </div>

        <div
          data-animate="fade-left"
          data-delay="200"
          class="marquee marquee-mask overflow-hidden"
          role="region"
          :aria-label="t('tech.title')"
        >
          <div class="marquee-track marquee-track-reverse" style="--marquee-duration: 42s">
            <div
              v-for="copy in 2"
              :key="'be-' + copy"
              class="flex gap-4 pr-4 items-stretch shrink-0"
              :aria-hidden="copy === 1"
            >
              <div
                v-for="tech in backendItems"
                :key="tech.name"
                class="glass-pill rounded-none px-5 py-3 flex items-center gap-3 shrink-0 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div
                  class="w-9 h-9 rounded-lg bg-paper dark:bg-[#141414] flex items-center justify-center p-1.5 border-[3px] border-ink"
                >
                  <NuxtImg
                    format="webp"
                    :src="tech.icon"
                    :alt="tech.name"
                    class="w-full h-full object-contain"
                  />
                </div>
                <span
                  class="font-bold text-sm text-ink dark:text-slate-200 whitespace-nowrap tracking-tight"
                  >{{ tech.name }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section: colorful bento cards -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          data-animate="zoom-in"
          data-delay="0"
          class="bg-primary-container text-ink border-[3px] border-ink rounded-3xl nb-shadow-lg nb-press text-center p-8"
        >
          <div class="text-5xl md:text-6xl font-display font-bold mb-2">
            <CountUp :to="totalTechCount" suffix="+" />
          </div>
          <div class="text-xs md:text-sm font-bold uppercase tracking-widest">
            {{ t('tech.technologies') }}
          </div>
        </div>
        <div
          data-animate="zoom-in"
          data-delay="100"
          class="bg-white dark:bg-[#1e1e1e] text-ink dark:text-white border-[3px] border-ink rounded-3xl nb-shadow-lg nb-press text-center p-8"
        >
          <div
            class="text-5xl md:text-6xl font-display font-bold mb-2 text-primary dark:text-primary-fixed-dim"
          >
            <CountUp :to="7" suffix="+" />
          </div>
          <div class="text-xs md:text-sm font-bold uppercase tracking-widest">
            {{ t('tech.years') }}
          </div>
        </div>
        <div
          data-animate="zoom-in"
          data-delay="200"
          class="bg-primary text-white border-[3px] border-ink rounded-3xl nb-shadow-lg nb-press text-center p-8"
        >
          <div class="text-5xl md:text-6xl font-display font-bold mb-2">
            <CountUp :to="10" suffix="+" />
          </div>
          <div class="text-xs md:text-sm font-bold uppercase tracking-widest">
            {{ t('tech.projects') }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
