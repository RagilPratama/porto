<script setup>
const { t } = useI18n();
const localized = useLocalizedData();

const education = computed(() => {
  const items = localized.value.education.items;
  return items.map((item, idx) => ({
    ...item,
    image: '/graduation.png',
    year: idx === 0 ? '2025' : '2018'
  }));
});
</script>

<template>
  <section class="py-24 scroll-mt-40 relative overflow-hidden" id="education">
    <div class="absolute inset-0 pointer-events-none section-texture section-texture-education opacity-70"></div>
    <div class="max-w-6xl mx-auto px-8 relative z-10">
      <div class="text-center mb-12" data-animate="fade-up">
        <h2 class="font-headline text-3xl md:text-4xl font-extrabold mb-2 tracking-tight text-slate-900 dark:text-white">{{ t('education.title') }}</h2>
        <p class="text-slate-600 dark:text-slate-300 text-sm font-medium">{{ t('education.subtitle') }}</p>
        <div class="w-20 h-1 bg-primary rounded-full mx-auto mt-6 shadow-sm"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article
          v-for="(edu, idx) in education"
          :key="idx"
          data-animate="fade-up"
          :data-delay="idx * 150"
          class="glass-panel rounded-3xl p-7 transition-all duration-300 hover:scale-[1.02]"
        >
          <div class="flex flex-col md:flex-row md:items-start gap-5">
            <div class="w-16 h-16 rounded-2xl bg-white/70 dark:bg-slate-800/70 flex items-center justify-center p-3 shadow-lg shrink-0 border border-white/80 dark:border-white/10">
               <NuxtImg format="webp" quality="75" width="128" height="128" sizes="64px" densities="x1 x2" :src="edu.image" :alt="edu.school" class="w-full h-full object-contain" />
            </div>

            <div class="flex-1">
              <h3 class="text-lg md:text-xl font-headline font-extrabold leading-tight text-slate-900 dark:text-white mb-1 tracking-tight">{{ edu.degree }}</h3>
              <p class="text-primary dark:text-primary-fixed-dim text-base md:text-lg font-extrabold mb-4">{{ edu.school }}</p>

              <div class="flex flex-wrap items-center gap-2 mb-4">
                <span class="inline-flex items-center gap-1.5 bg-primary/10 text-on-primary-fixed-variant dark:text-primary-fixed-dim px-3 py-1 rounded-xl text-xs font-bold border border-primary/20">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-3.5 h-3.5" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3.75v2.5m7.5-2.5v2.5M4.5 9.5h15M6.75 5.75h10.5A2.25 2.25 0 0 1 19.5 8v9.25a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 17.25V8a2.25 2.25 0 0 1 2.25-2.25Z" />
                  </svg>
                  {{ edu.period }}
                </span>
                <span class="inline-flex items-center gap-1.5 bg-secondary/10 text-secondary dark:text-secondary-fixed-dim px-3 py-1 rounded-xl text-xs font-bold border border-secondary/20">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-3.5 h-3.5" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m12 3.75 2.55 5.16 5.7.83-4.13 4.03.97 5.68L12 16.81l-5.1 2.66.97-5.68-4.13-4.03 5.7-.83L12 3.75Z" />
                  </svg>
                  {{ edu.highlight }}
                </span>
              </div>

              <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium">{{ edu.description }}</p>
            </div>
          </div>

          <div class="border-t border-white/40 dark:border-white/10 mt-6 pt-4 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-secondary"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            </div>
            <span class="text-base font-extrabold text-slate-800 dark:text-slate-200">{{ edu.year }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
