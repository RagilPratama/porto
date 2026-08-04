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
  <section :class="['py-24 bg-surface dark:bg-slate-950 scroll-mt-40 relative overflow-hidden', { 'experience-visible': experienceVisible }]" id="experience">
    <div class="absolute inset-0 pointer-events-none section-texture section-texture-experience"></div>
    <div class="max-w-7xl mx-auto px-8 relative z-10">
      <div class="text-center mb-16">
        <h2 class="font-headline text-4xl font-bold mb-4 dark:text-white">{{ t('experience.title') }}</h2>
        <p class="text-on-surface-variant dark:text-slate-400">{{ t('experience.subtitle') }}</p>
      </div>

      <div class="relative">
        <div class="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-px bg-outline-variant/30 dark:bg-slate-800"></div>
        <div class="md:hidden absolute left-[19px] top-2 bottom-2 w-px bg-outline-variant/40 dark:bg-slate-700"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-8 md:gap-y-5">
          <article
            v-for="(exp, idx) in experiences"
            :key="`exp-${idx}-${exp.company}`"
            :class="['relative experience-card', idx % 2 !== 0 ? 'md:mt-10' : '', exp.role === 'Quality Assurance' ? 'md:col-span-2 md:mt-0' : '']"
            :style="{ '--exp-delay': `${idx * 100}ms` }"
          >
            <div :class="['hidden md:block absolute top-6 w-3.5 h-3.5 rounded-full ring-4 z-10', exp.isCurrent ? 'bg-primary ring-primary/20' : 'bg-surface-container-highest ring-surface-container-low dark:bg-slate-700 dark:ring-slate-900']" :style="exp.role === 'Quality Assurance' ? { left: '50%', transform: 'translateX(-50%)' } : idx % 2 === 0 ? { left: 'calc(100% + 16px)', transform: 'translateX(-50%)' } : { left: '-16px', transform: 'translateX(-50%)' }"></div>
            <div :class="['md:hidden absolute left-[7px] top-5 w-[26px] h-[26px] rounded-full border-2 z-10 flex items-center justify-center', exp.isCurrent ? 'border-primary bg-primary/10 dark:bg-primary/20' : 'border-outline-variant dark:border-slate-600 bg-surface dark:bg-slate-900']">
              <div :class="['w-2.5 h-2.5 rounded-full', exp.isCurrent ? 'bg-primary animate-pulse' : 'bg-on-surface-variant/40 dark:bg-slate-500']"></div>
            </div>

            <div :class="['rounded-2xl border transition-all duration-300 pl-12 md:pl-0', exp.isCurrent ? 'bg-primary-fixed/30 border-primary/40 shadow-[0_12px_30px_rgba(0,98,157,0.10)] dark:bg-primary/10 dark:border-primary/30' : 'bg-surface-container-lowest dark:bg-slate-900 border-outline-variant/30 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-outline-variant/60 dark:hover:border-slate-700']">
              <div class="p-5 md:p-6">
                <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h3 class="text-xl md:text-2xl font-headline font-bold text-on-surface dark:text-white leading-tight">{{ exp.role }}</h3>
                    <p class="text-primary dark:text-blue-400 font-bold text-base mt-1">{{ exp.company }}</p>
                  </div>
                  <div class="flex flex-wrap gap-2 md:justify-end shrink-0">
                    <span v-if="exp.isCurrent" class="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold bg-primary text-on-primary">{{ t('experience.current') }}</span>
                    <span class="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold bg-secondary-container text-on-secondary-fixed-variant">{{ exp.type }}</span>
                    <span class="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold bg-surface-container-high dark:bg-slate-800 text-on-surface-variant dark:text-slate-300">{{ exp.period }}</span>
                  </div>
                </div>

                <p class="text-xs text-on-surface-variant dark:text-slate-400 mb-4">{{ exp.location }}</p>

                <div class="mb-4 rounded-xl bg-surface-container dark:bg-slate-800/50 p-3 border border-outline-variant/20 dark:border-slate-700">
                  <p class="text-sm font-medium text-on-surface dark:text-slate-200">{{ exp.impact }}</p>
                </div>

                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    v-for="stack in exp.tech"
                    :key="stack"
                    class="text-[11px] px-2 py-1 rounded-md bg-white dark:bg-slate-800 border border-outline-variant/30 dark:border-slate-700 text-on-surface-variant dark:text-slate-400 font-semibold"
                  >
                    {{ stack }}
                  </span>
                </div>

                <ul class="space-y-2 text-sm text-on-surface-variant dark:text-slate-400 leading-relaxed list-none">
                  <li v-for="point in exp.points" :key="point" class="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4 mt-0.5 text-primary shrink-0" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m5 12 4 4 10-10" />
                    </svg>
                    <span>{{ point }}</span>
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
