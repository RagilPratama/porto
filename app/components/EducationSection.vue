<script setup>
defineProps({
  education: { type: Array, required: true }
});
</script>

<template>
  <section class="py-24 bg-surface-container-low dark:bg-slate-900/50 scroll-mt-40 relative overflow-hidden" id="education">
    <div class="absolute inset-0 pointer-events-none section-texture section-texture-education"></div>
    <div class="max-w-6xl mx-auto px-8 relative z-10">
      <div class="text-center mb-12">
        <h2 class="font-headline text-3xl md:text-4xl font-bold mb-2 tracking-tight dark:text-white">Education</h2>
        <p class="text-on-surface-variant dark:text-slate-400 text-sm">My academic background and educational qualifications</p>
        <div class="w-20 h-0.5 bg-primary rounded-full mx-auto mt-6"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article
          v-for="(edu, idx) in education"
          :key="idx"
          class="bg-surface-container-lowest dark:bg-slate-900 rounded-2xl border border-outline-variant/30 dark:border-slate-800 shadow-sm p-6"
        >
          <div class="flex flex-col md:flex-row md:items-start gap-5">
            <div class="w-16 h-16 rounded-2xl bg-white dark:bg-slate-100 flex items-center justify-center p-3 shadow-md shrink-0 border border-outline-variant/20 dark:border-slate-700 transition-colors">
               <NuxtImg format="webp" :src="edu.image" :alt="edu.school" class="w-full h-full object-contain" />
             </div>

            <div class="flex-1">
              <h3 class="text-lg md:text-xl font-headline font-bold leading-tight text-on-surface dark:text-white mb-1 transition-colors">{{ edu.degree }}</h3>
              <p class="text-primary dark:text-blue-400 text-base md:text-lg font-bold mb-4">{{ edu.school }}</p>

              <div class="flex flex-wrap items-center gap-2 mb-4 transition-colors">
                <span class="inline-flex items-center gap-1.5 bg-primary-fixed dark:bg-primary/20 text-on-primary-fixed-variant dark:text-blue-400 px-2.5 py-1 rounded-lg text-xs font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-3.5 h-3.5" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3.75v2.5m7.5-2.5v2.5M4.5 9.5h15M6.75 5.75h10.5A2.25 2.25 0 0 1 19.5 8v9.25a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 17.25V8a2.25 2.25 0 0 1 2.25-2.25Z" />
                  </svg>
                  {{ edu.period }}
                </span>
                <span class="inline-flex items-center gap-1.5 bg-secondary-container dark:bg-slate-800 text-on-secondary-fixed-variant dark:text-slate-300 px-2.5 py-1 rounded-lg text-xs font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-3.5 h-3.5" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m12 3.75 2.55 5.16 5.7.83-4.13 4.03.97 5.68L12 16.81l-5.1 2.66.97-5.68-4.13-4.03 5.7-.83L12 3.75Z" />
                  </svg>
                  {{ edu.highlight }}
                </span>
              </div>

              <p class="text-on-surface-variant dark:text-slate-400 text-sm leading-relaxed transition-colors">{{ edu.description }}</p>
            </div>
          </div>

          <div class="border-t border-outline-variant/20 mt-5 pt-4 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <span class="w-3 h-3 rounded-full bg-blue-400"></span>
              <span class="w-3 h-3 rounded-full bg-violet-400"></span>
              <span class="w-3 h-3 rounded-full bg-emerald-400"></span>
              <span class="w-3 h-3 rounded-full bg-amber-400"></span>
            </div>
            <span class="text-lg font-bold text-on-surface-variant dark:text-white transition-colors">{{ edu.year }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
