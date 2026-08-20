<script setup>
const props = defineProps({
  techStack: { type: Array, required: true },
  totalTechCount: { type: Number, required: true }
});

const { t } = useI18n();

const frontendItems = computed(() => props.techStack.find(g => g.group === 'frontend')?.items ?? []);
const backendItems = computed(() => props.techStack.find(g => g.group === 'backend')?.items ?? []);
</script>

<template>
  <section class="py-24 overflow-hidden scroll-mt-40 relative" id="tech">
    <!-- Ambient Glass glow background -->
    <div class="absolute inset-0 pointer-events-none tech-pattern-bg opacity-70"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-primary/10 blur-[100px] pointer-events-none rounded-full"></div>

    <div class="max-w-7xl mx-auto px-8 relative z-10">
      <div class="mb-16 text-center">
        <h2 class="font-headline text-4xl font-extrabold mb-4 text-slate-900 dark:text-white tracking-tight">{{ t('tech.title') }}</h2>
        <p class="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium">{{ t('tech.description') }}</p>
      </div>

      <!-- Infinite logo marquees -->
      <div class="space-y-6">
        <div class="marquee marquee-mask overflow-hidden" role="region" :aria-label="t('tech.title')">
          <div class="marquee-track" style="--marquee-duration: 48s">
            <div v-for="copy in 2" :key="'fe-' + copy" class="flex gap-4 pr-4 items-stretch shrink-0" :aria-hidden="copy === 1">
              <div
                v-for="tech in frontendItems"
                :key="tech.name"
                class="glass-pill rounded-2xl px-5 py-3.5 flex items-center gap-3.5 shrink-0 transition-all duration-300 hover:scale-105 hover:border-primary/40 hover:shadow-lg"
              >
                <div class="w-9 h-9 rounded-xl bg-white/60 dark:bg-slate-800/60 flex items-center justify-center p-1.5 border border-white/80 dark:border-white/10 shadow-inner">
                  <NuxtImg format="webp" :src="tech.icon" :alt="tech.name" class="w-full h-full object-contain" />
                </div>
                <span class="font-bold text-sm text-slate-800 dark:text-slate-200 whitespace-nowrap tracking-tight">{{ tech.name }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="marquee marquee-mask overflow-hidden" role="region" :aria-label="t('tech.title')">
          <div class="marquee-track marquee-track-reverse" style="--marquee-duration: 42s">
            <div v-for="copy in 2" :key="'be-' + copy" class="flex gap-4 pr-4 items-stretch shrink-0" :aria-hidden="copy === 1">
              <div
                v-for="tech in backendItems"
                :key="tech.name"
                class="glass-pill rounded-2xl px-5 py-3.5 flex items-center gap-3.5 shrink-0 transition-all duration-300 hover:scale-105 hover:border-primary/40 hover:shadow-lg"
              >
                <div class="w-9 h-9 rounded-xl bg-white/60 dark:bg-slate-800/60 flex items-center justify-center p-1.5 border border-white/80 dark:border-white/10 shadow-inner">
                  <NuxtImg format="webp" :src="tech.icon" :alt="tech.name" class="w-full h-full object-contain" />
                </div>
                <span class="font-bold text-sm text-slate-800 dark:text-slate-200 whitespace-nowrap tracking-tight">{{ tech.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section with Glass Cards -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="glass-panel text-center p-8 rounded-3xl transition-all hover:scale-[1.02]">
          <div class="text-4xl md:text-5xl font-extrabold text-primary dark:text-primary-fixed-dim mb-2">{{ totalTechCount }}+</div>
          <div class="text-xs md:text-sm text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wider">{{ t('tech.technologies') }}</div>
        </div>
        <div class="glass-panel text-center p-8 rounded-3xl transition-all hover:scale-[1.02]">
          <div class="text-4xl md:text-5xl font-extrabold text-primary dark:text-primary-fixed-dim mb-2">7+</div>
          <div class="text-xs md:text-sm text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wider">{{ t('tech.years') }}</div>
        </div>
        <div class="glass-panel text-center p-8 rounded-3xl transition-all hover:scale-[1.02]">
          <div class="text-4xl md:text-5xl font-extrabold text-primary dark:text-primary-fixed-dim mb-2">10+</div>
          <div class="text-xs md:text-sm text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wider">{{ t('tech.projects') }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
