<script setup>
const { t } = useI18n()
const localized = useLocalizedData()

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
]

const experiences = computed(() => {
  const items = localized.value.experience.items
  return items.map((item, idx) => ({
    ...item,
    ...experienceMeta[idx],
    type: t('experience.fullTime')
  }))
})

const experienceVisible = ref(false)
let experienceObserver = null

onMounted(() => {
  const experienceSection = document.getElementById('experience')
  if (!experienceSection) return

  experienceObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          experienceVisible.value = true
          experienceObserver?.disconnect()
          experienceObserver = null
        }
      })
    },
    { threshold: 0, rootMargin: '0px 0px -100px 0px' }
  )

  const observe = () => experienceObserver?.observe(experienceSection)
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(observe, { timeout: 1200 })
  } else {
    setTimeout(observe, 200)
  }
})

onBeforeUnmount(() => {
  experienceObserver?.disconnect()
  experienceObserver = null
})
</script>

<template>
  <section
    :class="[
      'py-24 scroll-mt-40 relative overflow-hidden',
      { 'experience-visible': experienceVisible }
    ]"
    id="experience"
  >
    <div class="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
      <div class="text-center mb-16" data-animate="fade-up">
        <div class="inline-flex items-center gap-2 mb-4">
          <span
            class="bg-ink text-paper dark:bg-white dark:text-ink rounded-none px-2 py-0.5 font-label font-bold text-xs"
            >02</span
          >
          <span
            class="uppercase tracking-[0.25em] text-xs font-bold text-ink/50 dark:text-slate-400"
            >{{ t('nav.links.experience') }}</span
          >
        </div>
        <WordReveal
          :text="t('experience.title')"
          tag="h2"
          class="font-display text-4xl md:text-5xl font-bold mb-4 text-ink dark:text-white tracking-tighter"
        />
        <p class="text-ink/60 dark:text-slate-300 max-w-xl mx-auto font-medium">
          {{ t('experience.subtitle') }}
        </p>
      </div>

      <div class="relative">
        <div
          class="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-ink/30 dark:bg-white/20"
        ></div>
        <div
          class="md:hidden absolute left-[19px] top-2 bottom-2 w-0.5 bg-ink/30 dark:bg-white/20"
        ></div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-8 md:gap-y-6">
          <article
            v-for="(exp, idx) in experiences"
            :key="`exp-${idx}-${exp.company}`"
            :class="[
              'relative experience-card',
              idx % 2 !== 0 ? 'md:mt-10' : '',
              exp.role === 'Quality Assurance' ? 'md:col-span-2 md:mt-0' : ''
            ]"
            :style="{ '--exp-delay': `${idx * 100}ms` }"
          >
            <div
              :class="[
                'hidden md:block absolute top-6 w-5 h-5 rounded-full border-2 border-ink z-10',
                exp.isCurrent ? 'bg-primary' : 'bg-primary-container'
              ]"
              :style="
                exp.role === 'Quality Assurance'
                  ? { left: '50%', transform: 'translateX(-50%)' }
                  : idx % 2 === 0
                    ? { left: 'calc(100% + 16px)', transform: 'translateX(-50%)' }
                    : { left: '-16px', transform: 'translateX(-50%)' }
              "
            ></div>
            <div
              class="md:hidden absolute left-[7px] top-5 w-[26px] h-[26px] rounded-full border-2 border-ink bg-white dark:bg-[#1e1e1e] z-10 flex items-center justify-center"
            >
              <div
                :class="[
                  'w-2.5 h-2.5 rounded-full',
                  exp.isCurrent ? 'bg-primary animate-pulse' : 'bg-primary-container'
                ]"
              ></div>
            </div>

            <div
              :class="[
                'glass-panel nb-press rounded-3xl pl-12 md:pl-0 overflow-hidden',
                exp.isCurrent ? '!bg-primary-container dark:!bg-[#242424]' : ''
              ]"
            >
              <div class="p-6 md:p-7">
                <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                  <div>
                    <h3
                      class="text-xl md:text-2xl font-display font-bold text-ink dark:text-white leading-tight tracking-tight"
                    >
                      {{ exp.role }}
                    </h3>
                    <p class="text-primary dark:text-primary-fixed-dim font-bold text-base mt-1">
                      {{ exp.company }}
                    </p>
                  </div>
                  <div class="flex flex-wrap gap-2 md:justify-end shrink-0">
                    <span
                      v-if="exp.isCurrent"
                      class="inline-flex items-center rounded-none px-3 py-1 text-xs font-bold uppercase font-label bg-primary text-white border-[3px] border-ink"
                      >{{ t('experience.current') }}</span
                    >
                    <span
                      class="inline-flex items-center rounded-none px-3 py-1 text-xs font-bold bg-white dark:bg-[#1e1e1e] border-2 border-ink text-ink dark:text-slate-300"
                      >{{ exp.type }}</span
                    >
                    <span
                      class="inline-flex items-center rounded-none px-3 py-1 text-xs font-bold bg-white dark:bg-[#1e1e1e] border-2 border-ink text-ink/70 dark:text-slate-400 font-label"
                      >{{ exp.period }}</span
                    >
                  </div>
                </div>

                <p
                  class="text-xs font-bold text-ink/60 dark:text-slate-400 mb-4 flex items-center gap-1.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-3.5 h-3.5 text-primary"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.307-.066l.003-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.624-.388 1.454-.977 2.37-1.782C15.556 14.908 17.5 12.05 17.5 8.5a7.5 7.5 0 00-15 0c0 3.55 1.944 6.408 3.765 8.07.916.805 1.746 1.394 2.37 1.782.311.193.57.337.757.433a5.742 5.742 0 00.282.14l.017.008.006.003zM10 11.25a2.75 2.75 0 100-5.5 2.75 2.75 0 000 5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  {{ exp.location }}
                </p>

                <div class="mb-4">
                  <p
                    class="text-sm font-semibold text-ink/90 dark:text-slate-200 leading-relaxed border-l-4 border-primary pl-4 max-w-prose"
                  >
                    {{ exp.impact }}
                  </p>
                </div>

                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    v-for="stack in exp.tech"
                    :key="stack"
                    class="text-[11px] px-2.5 py-1 rounded-none bg-paper dark:bg-[#141414] border-2 border-ink text-ink dark:text-slate-300 font-bold"
                  >
                    {{ stack }}
                  </span>
                </div>

                <ul
                  class="space-y-2 text-sm text-ink/70 dark:text-slate-300 leading-relaxed list-none"
                >
                  <li v-for="point in exp.points" :key="point" class="flex gap-2.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      class="w-4 h-4 mt-0.5 text-primary shrink-0"
                      aria-hidden="true"
                    >
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
