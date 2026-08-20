<script setup>
const { t } = useI18n();
const localized = useLocalizedData();

const experienceMeta = [
  {
    company: 'Bank Central Asia (BCA) - Ocean',
    period: 'Apr 2026 — Present',
    location: 'Jakarta, Indonesia',
    tech: ['Next.js', 'Micro Frontend', 'TypeScript', 'REST API'],
    isCurrent: true
  },
  {
    company: 'AIA Indonesia',
    period: 'Aug 2023 — Apr 2026',
    location: 'Jakarta, Indonesia',
    tech: ['Vue 3', 'Pinia', 'Vue Router', 'REST API']
  },
  {
    company: 'Bank Central Asia (BCA) - OASE',
    period: 'Feb 2023 — Jul 2023',
    location: 'Jakarta, Indonesia',
    tech: ['Node.js', 'Express.js', 'MySQL', 'REST API']
  },
  {
    company: 'BKKBN Indonesia',
    period: 'Jan 2020 — Feb 2023',
    location: 'Jakarta, Indonesia',
    tech: ['Laravel', 'ReactJS', 'MySQL', 'Integration API']
  },
  {
    company: 'Kementerian ESDM',
    period: 'Jun 2019 — Jan 2020',
    location: 'Jakarta, Indonesia',
    tech: ['CodeIgniter', 'Laravel', 'Yii', 'PHP']
  },
  {
    company: 'PT Dritama BrokerIndo',
    period: 'Jan 2019 — Jun 2019',
    location: 'Jakarta, Indonesia',
    tech: ['Lumen', 'ReactJS', 'Midtrans', 'MySQL']
  },
  {
    company: 'Indonesia Smartcloud',
    period: 'May 2018 — Dec 2018',
    location: 'Jakarta, Indonesia',
    tech: ['QA Testing', 'Regression', 'Integration Test', 'UAT']
  }
];

const experiences = computed(() => {
  const items = localized.value.experience.items;
  return items.map((item, idx) => ({
    ...item,
    ...experienceMeta[idx],
    type: t('experience.fullTime')
  }));
});

const experienceVisible = ref(false);
let experienceObserver = null;

onMounted(() => {
  const experienceSection = document.getElementById('experience');
  if (!experienceSection) return;

  experienceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        experienceVisible.value = true;
        experienceObserver?.disconnect();
        experienceObserver = null;
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px -100px 0px' });

  const observe = () => experienceObserver?.observe(experienceSection);
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(observe, { timeout: 1200 });
  } else {
    setTimeout(observe, 200);
  }
});

onBeforeUnmount(() => {
  experienceObserver?.disconnect();
  experienceObserver = null;
});
</script>

<template>
  <section :class="['py-24 scroll-mt-40 relative overflow-hidden', { 'experience-visible': experienceVisible }]" id="experience">
    <div class="absolute inset-0 pointer-events-none section-texture section-texture-experience opacity-70"></div>
    <div class="max-w-7xl mx-auto px-8 relative z-10">
      <div class="text-center mb-16">
        <h2 class="font-headline text-4xl font-extrabold mb-4 text-slate-900 dark:text-white tracking-tight">{{ t('experience.title') }}</h2>
        <p class="text-slate-600 dark:text-slate-300 max-w-xl mx-auto font-medium">{{ t('experience.subtitle') }}</p>
      </div>

      <div class="relative">
        <div class="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-primary/20"></div>
        <div class="md:hidden absolute left-[19px] top-2 bottom-2 w-0.5 bg-primary/20"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-8 md:gap-y-6">
          <article
            v-for="(exp, idx) in experiences"
            :key="`exp-${idx}-${exp.company}`"
            :class="['relative experience-card', idx % 2 !== 0 ? 'md:mt-10' : '', exp.role === 'Quality Assurance' ? 'md:col-span-2 md:mt-0' : '']"
            :style="{ '--exp-delay': `${idx * 100}ms` }"
          >
            <div :class="['hidden md:block absolute top-6 w-4 h-4 rounded-full ring-4 z-10', exp.isCurrent ? 'bg-primary ring-primary/30' : 'bg-slate-300 ring-white/60 dark:bg-slate-600 dark:ring-slate-800']" :style="exp.role === 'Quality Assurance' ? { left: '50%', transform: 'translateX(-50%)' } : idx % 2 === 0 ? { left: 'calc(100% + 16px)', transform: 'translateX(-50%)' } : { left: '-16px', transform: 'translateX(-50%)' }"></div>
            <div :class="['md:hidden absolute left-[7px] top-5 w-[26px] h-[26px] rounded-full border-2 z-10 flex items-center justify-center', exp.isCurrent ? 'border-primary bg-primary/10' : 'border-slate-400 dark:border-slate-600 bg-slate-100 dark:bg-slate-900']">
              <div :class="['w-2.5 h-2.5 rounded-full', exp.isCurrent ? 'bg-primary animate-pulse' : 'bg-slate-400 dark:bg-slate-500']"></div>
            </div>

            <div :class="['glass-panel rounded-3xl transition-all duration-300 pl-12 md:pl-0', exp.isCurrent ? 'border-primary/40 dark:border-primary/30 shadow-lg ring-1 ring-primary/10' : 'hover:border-primary/30']">
              <div class="p-6 md:p-7">
                <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                  <div>
                    <h3 class="text-xl md:text-2xl font-headline font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">{{ exp.role }}</h3>
                    <p class="text-primary dark:text-primary-fixed-dim font-extrabold text-base mt-1">{{ exp.company }}</p>
                  </div>
                  <div class="flex flex-wrap gap-2 md:justify-end shrink-0">
                    <span v-if="exp.isCurrent" class="inline-flex items-center rounded-full px-3 py-1 text-xs font-extrabold bg-primary text-white shadow-sm border border-white/30">{{ t('experience.current') }}</span>
                    <span class="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold bg-white/60 dark:bg-slate-800/60 border border-white/80 dark:border-white/10 text-slate-700 dark:text-slate-300">{{ exp.type }}</span>
                    <span class="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold bg-white/60 dark:bg-slate-800/60 border border-white/80 dark:border-white/10 text-slate-600 dark:text-slate-400">{{ exp.period }}</span>
                  </div>
                </div>

                <p class="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5 text-primary">
                    <path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.307-.066l.003-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.624-.388 1.454-.977 2.37-1.782C15.556 14.908 17.5 12.05 17.5 8.5a7.5 7.5 0 00-15 0c0 3.55 1.944 6.408 3.765 8.07.916.805 1.746 1.394 2.37 1.782.311.193.57.337.757.433a5.742 5.742 0 00.282.14l.017.008.006.003zM10 11.25a2.75 2.75 0 100-5.5 2.75 2.75 0 000 5.5z" clip-rule="evenodd" />
                  </svg>
                  {{ exp.location }}
                </p>

                <div class="mb-4">
                  <p class="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed border-l-2 border-primary/40 pl-4 max-w-prose">{{ exp.impact }}</p>
                </div>

                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    v-for="stack in exp.tech"
                    :key="stack"
                    class="text-[11px] px-2.5 py-1 rounded-lg bg-white/70 dark:bg-slate-800/70 border border-white/90 dark:border-white/10 text-slate-700 dark:text-slate-300 font-bold shadow-sm"
                  >
                    {{ stack }}
                  </span>
                </div>

                <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed list-none">
                  <li v-for="point in exp.points" :key="point" class="flex gap-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="w-4 h-4 mt-0.5 text-primary shrink-0" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m5 12 4 4 10-10" />
                    </svg>
                    <span class="font-medium">{{ point }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
