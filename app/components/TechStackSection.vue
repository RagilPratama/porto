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
  <section class="py-24 bg-surface-container-low dark:bg-slate-900/50 overflow-hidden scroll-mt-40 relative" id="tech">
    <!-- Animated diagonal stripes background -->
    <div class="absolute inset-0 pointer-events-none tech-pattern-bg"></div>

    <div class="max-w-7xl mx-auto px-8 relative z-10">
      <div class="mb-16 text-center">
        <h2 class="font-headline text-4xl font-bold mb-4 dark:text-white">{{ t('tech.title') }}</h2>
        <p class="text-on-surface-variant dark:text-slate-400 max-w-2xl mx-auto">{{ t('tech.description') }}</p>
      </div>

      <!-- Infinite logo marquees -->
      <div class="space-y-6">
        <div class="marquee marquee-mask overflow-hidden" role="region" :aria-label="t('tech.title')">
          <div class="marquee-track" style="--marquee-duration: 48s">
            <div v-for="copy in 2" :key="'fe-' + copy" class="flex gap-4 pr-4 items-stretch shrink-0" :aria-hidden="copy === 1">
              <div
                v-for="tech in frontendItems"
                :key="tech.name"
                class="bg-white/80 dark:bg-slate-800/80 border border-primary/10 dark:border-slate-700/50 rounded-xl px-4 py-3 flex items-center gap-3 shrink-0 transition-colors hover:border-primary/30 dark:hover:border-blue-500/50"
              >
                <NuxtImg format="webp" :src="tech.icon" :alt="tech.name" class="w-8 h-8 md:w-10 md:h-10 object-contain" />
                <span class="font-semibold text-sm text-on-surface dark:text-slate-200 whitespace-nowrap">{{ tech.name }}</span>
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
                class="bg-white/80 dark:bg-slate-800/80 border border-primary/10 dark:border-slate-700/50 rounded-xl px-4 py-3 flex items-center gap-3 shrink-0 transition-colors hover:border-primary/30 dark:hover:border-blue-500/50"
              >
                <NuxtImg format="webp" :src="tech.icon" :alt="tech.name" class="w-8 h-8 md:w-10 md:h-10 object-contain" />
                <span class="font-semibold text-sm text-on-surface dark:text-slate-200 whitespace-nowrap">{{ tech.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="mt-16 grid grid-cols-3 gap-6">
        <div class="text-center p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-primary/10 dark:border-slate-700/50">
          <div class="text-3xl md:text-4xl font-bold text-primary dark:text-blue-400 mb-2">{{ totalTechCount }}+</div>
          <div class="text-xs md:text-sm text-on-surface-variant dark:text-slate-400 font-semibold">{{ t('tech.technologies') }}</div>
        </div>
        <div class="text-center p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-primary/10 dark:border-slate-700/50">
          <div class="text-3xl md:text-4xl font-bold text-primary dark:text-blue-400 mb-2">7+</div>
          <div class="text-xs md:text-sm text-on-surface-variant dark:text-slate-400 font-semibold">{{ t('tech.years') }}</div>
        </div>
        <div class="text-center p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-primary/10 dark:border-slate-700/50">
          <div class="text-3xl md:text-4xl font-bold text-primary dark:text-blue-400 mb-2">10+</div>
          <div class="text-xs md:text-sm text-on-surface-variant dark:text-slate-400 font-semibold">{{ t('tech.projects') }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
