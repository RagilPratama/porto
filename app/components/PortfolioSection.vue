<script setup>
const { t } = useI18n()
const localized = useLocalizedData()

const categories = computed(() => [
  { id: 'all', name: t('portfolio.categories.all') },
  { id: 'frontend', name: t('portfolio.categories.frontend') },
  { id: 'fullstack', name: t('portfolio.categories.fullstack') },
  { id: 'backend', name: t('portfolio.categories.backend') }
])

const activeCategory = ref('all')

const portfolioMeta = [
  {
    id: 13,
    category: 'frontend',
    image: 'https://shl.co.id/wp-content/uploads/2019/04/Bank-BCA.png',
    tags: ['Next.js', 'Micro Frontend', 'TypeScript', 'REST API'],
    web: 'https://ocean.bca.co.id/id'
  },
  {
    id: 1,
    category: 'frontend',
    image: 'https://companieslogo.com/img/orig/1299.HK_BIG-a3180b6a.png?t=1720244490',
    tags: ['Vue.js 3', 'Pinia', 'Vuetify', 'REST API']
  },
  {
    id: 12,
    category: 'backend',
    image: 'https://shl.co.id/wp-content/uploads/2019/04/Bank-BCA.png',
    tags: ['Node.js', 'Express.js', 'MySQL', 'REST API'],
    playStore: 'https://play.google.com/store/apps/details?id=com.bca.oase&hl=id'
  },
  {
    id: 138,
    category: 'fullstack',
    image: '/logoesdm.png',
    tags: ['CodeIgniter', 'Laravel', 'MySQL', 'Government']
  },
  {
    id: 139,
    category: 'fullstack',
    image: '/logoesdm.png',
    tags: ['Laravel', 'Yii', 'PHP', 'CMS']
  },
  {
    id: 2,
    category: 'fullstack',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Logo_BkkbN.png',
    tags: ['Laravel', 'ReactJS', 'MySQL', 'REST API']
  },
  {
    id: 3,
    category: 'fullstack',
    image: '/wowpremi.png',
    tags: ['Lumen PHP', 'ReactJS', 'Midtrans', 'MySQL'],
    web: 'https://wowpremi.com/',
    appStore: 'https://itunes.apple.com/gb/app/wowpremi/id1427272279?mt=8',
    playStore: 'https://play.google.com/store/apps/details?id=com.dritama.wowpremi'
  },
  {
    id: 4,
    category: 'backend',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Logo_BkkbN.png',
    tags: ['Laravel', 'MySQL', 'PostgreSQL', 'RESTful API']
  },
  {
    id: 5,
    category: 'frontend',
    image: 'https://companieslogo.com/img/orig/1299.HK_BIG-a3180b6a.png?t=1720244490',
    tags: ['Vue.js 3', 'Pinia', 'REST API', 'Realtime'],
    playStore: 'https://play.google.com/store/apps/details?id=id.co.aiafinancial.aiaplus&hl=id',
    appStore: 'https://apps.apple.com/kw/app/aia-indonesia/id6745874762'
  },
  {
    id: 6,
    category: 'fullstack',
    image: 'https://ogya.co.id/assets/OGYA-LOGO-01-1-CVLaQrUB.png',
    tags: ['Laravel', 'Vue.js', 'MySQL', 'REST API'],
    web: 'https://ogya.co.id'
  },
  {
    id: 11,
    category: 'frontend',
    image: 'https://ogya.co.id/assets/OGYA-LOGO-01-1-CVLaQrUB.png',
    tags: ['ReactJS', 'Responsive', 'REST API'],
    web: 'https://ogya.co.id'
  },
  {
    id: 7,
    category: 'backend',
    image: 'https://cdn.techinasia.com/data/images/a06d955d350ded214f6338db66339594.jpg',
    tags: ['PHPUnit', 'QA', 'Blackbox Testing', 'UAT'],
    qaLabel: 'QA Engineer'
  },
  {
    id: 8,
    category: 'backend',
    image: 'https://carfix.co.id/wp-content/uploads/2024/10/icon-1.png',
    tags: ['Laravel', 'QA Engineer', 'Manual Testing', 'E-commerce', 'UAT'],
    web: 'https://carfix.co.id/',
    qaLabel: 'QA Engineer'
  },
  {
    id: 9,
    category: 'fullstack',
    image: 'https://sheldondental.id/images/logo.jpg',
    tags: ['Laravel', 'MySQL', 'Management', 'System'],
    web: 'https://sheldondental.id'
  },
  {
    id: 10,
    category: 'frontend',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkXBQh2taVPVeoFGE2GexcKk0KbsCtw0-aHw&s',
    tags: ['Vue.js', 'Bootstrap', 'Responsive', 'Dashboard']
  },
  {
    id: 16,
    category: 'frontend',
    image: 'https://massiveentertainment.id/logonya.webp',
    tags: ['Vue.js', 'Tailwind CSS', 'Responsive', 'Company Profile'],
    web: 'https://massiveentertainment.id/'
  }
]

const portfolio = computed(() => {
  const items = localized.value.portfolio.items
  return items.map((item, idx) => ({
    ...item,
    ...portfolioMeta[idx],
    num: idx + 1
  }))
})

const filteredPortfolio = computed(() => {
  if (activeCategory.value === 'all') return portfolio.value
  return portfolio.value.filter((p) => p.category === activeCategory.value)
})

const displayOrder = [5, 2, 1, 7, 10, 9, 3, 12, 4, 15, 13, 8, 11, 6, 14, 16]

const displayedPortfolio = computed(() => {
  const items = filteredPortfolio.value
  if (activeCategory.value !== 'all') return items
  const byNum = Object.fromEntries(items.map((i) => [i.num, i]))
  return displayOrder.map((n) => byNum[n]).filter(Boolean)
})

const isFeatured = (project) => activeCategory.value === 'all' && project.num === 1

const isWide = (project) => activeCategory.value === 'all' && [1, 2, 3, 9, 15].includes(project.num)

const wideSide = (project) => {
  if (!isWide(project)) return ''
  return [1, 3, 13].includes(project.num) ? 'lg:col-start-1' : 'lg:col-start-2'
}

const countByCategory = computed(() => {
  const counts = { all: portfolio.value.length }
  for (const p of portfolio.value) {
    counts[p.category] = (counts[p.category] || 0) + 1
  }
  return counts
})

// Neo-brutalist category theming: solid color-coded badge + dot texture
const categoryTheme = {
  frontend: {
    badge: 'bg-primary text-white',
    dots: 'dots-violet',
    logoHover: 'group-hover:bg-primary/5'
  },
  fullstack: {
    badge: 'bg-tertiary text-white',
    dots: 'dots-orange',
    logoHover: 'group-hover:bg-tertiary/5'
  },
  backend: {
    badge: 'bg-primary-container text-ink',
    dots: 'dots-lime',
    logoHover: 'group-hover:bg-primary-container/10'
  }
}

const themeFor = (project) => {
  if (project.qaLabel) return categoryTheme.backend
  return categoryTheme[project.category] || categoryTheme.frontend
}

const getProjectBadgeLabel = (project) => {
  return project.qaLabel || t(`portfolio.categories.${project.category}`)
}

// Shared link-button classes (neo-brutalist)
const linkClass =
  'text-xs font-bold rounded-none border-[3px] border-ink bg-white dark:bg-[#1e1e1e] text-ink dark:text-white px-4 py-1.5 inline-flex items-center gap-1.5 nb-shadow-sm nb-press'
</script>

<template>
  <section class="py-20 md:py-24 scroll-mt-40 relative overflow-hidden" id="portfolio">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div data-animate="fade-right">
          <div class="inline-flex items-center gap-2 mb-4">
            <span
              class="bg-ink text-paper dark:bg-white dark:text-ink rounded-none px-2 py-0.5 font-label font-bold text-xs"
              >04</span
            >
            <span
              class="uppercase tracking-[0.25em] text-xs font-bold text-ink/50 dark:text-slate-400"
              >{{ t('portfolio.featured') }}</span
            >
          </div>
          <h2
            class="font-display text-4xl md:text-5xl font-bold text-ink dark:text-white tracking-tighter"
          >
            {{ t('portfolio.title') }}
            <span
              class="inline-flex items-center justify-center bg-primary-container text-ink border-[3px] border-ink px-2.5 nb-shadow-sm -rotate-2 text-2xl md:text-3xl align-middle"
              >{{ countByCategory.all }}</span
            >
          </h2>
          <p class="text-ink/60 dark:text-slate-300 max-w-xl mt-3 font-medium">
            {{ t('portfolio.subtitle') }}
          </p>
        </div>

        <!-- Filter Pills -->
        <div data-animate="fade-left" class="flex flex-wrap gap-2.5 shrink-0">
          <button
            v-for="cat in categories"
            :key="cat.id"
            @click="activeCategory = cat.id"
            :class="[
              'px-4 py-2 rounded-none text-xs sm:text-sm font-bold transition-all duration-150 inline-flex items-center gap-2 border-[3px] border-ink nb-shadow-sm',
              activeCategory === cat.id
                ? 'bg-primary text-white'
                : 'bg-white dark:bg-[#1e1e1e] text-ink dark:text-slate-200 nb-press'
            ]"
          >
            {{ cat.name }}
            <span
              :class="[
                'text-[10px] font-bold px-2 py-0.5 rounded-none leading-none border-2 border-ink',
                activeCategory === cat.id
                  ? 'bg-white/25 text-white !border-white/50'
                  : 'bg-primary-container text-ink'
              ]"
              >{{ countByCategory[cat.id] }}</span
            >
          </button>
        </div>
      </div>

      <!-- Bento grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="project in displayedPortfolio"
          :key="project.id"
          data-animate="zoom-in"
          :data-delay="50"
          :class="[
            'group relative rounded-3xl overflow-hidden glass-panel nb-press',
            isWide(project) ? 'lg:col-span-2' : '',
            wideSide(project)
          ]"
        >
          <template v-if="isWide(project)">
            <div class="md:grid md:grid-cols-2 h-full">
              <div
                class="relative h-52 md:h-full overflow-hidden flex items-center justify-center p-6 bg-paper dark:bg-[#141414] border-b-2 md:border-b-0 md:border-r-2 border-ink"
              >
                <div :class="['absolute inset-0 dots opacity-60', themeFor(project).dots]"></div>
                <div
                  :class="[
                    'relative z-[1] w-40 h-40 md:w-44 md:h-44 bg-white dark:bg-[#1e1e1e] border-[3px] border-ink nb-shadow transition-transform duration-300 group-hover:-rotate-2',
                    themeFor(project).logoHover
                  ]"
                >
                  <NuxtImg
                    :src="project.image"
                    :alt="project.title"
                    quality="95"
                    densities="x1 x2"
                    class="w-full h-full object-contain p-3"
                    loading="lazy"
                  />
                </div>
                <div class="absolute top-3.5 left-4">
                  <span
                    :class="[
                      'text-[10px] font-bold px-3 py-1 rounded-none border-[3px] border-ink nb-shadow-sm uppercase font-label',
                      themeFor(project).badge
                    ]"
                  >
                    {{ getProjectBadgeLabel(project) }}
                  </span>
                </div>
              </div>
              <div class="p-6 md:p-7 flex flex-col justify-center relative">
                <div v-if="isFeatured(project)" class="flex items-center gap-2 mb-3">
                  <span
                    class="inline-flex items-center gap-1.5 bg-primary-container text-ink border-[3px] border-ink rounded-none px-2.5 py-0.5 text-[11px] tracking-wider uppercase font-bold font-label"
                  >
                    <span class="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                    {{ t('portfolio.featured') }}
                  </span>
                </div>
                <div v-else class="h-6 mb-3"></div>
                <h3
                  class="font-display text-xl md:text-2xl font-bold mb-2 text-ink dark:text-white group-hover:text-primary transition-colors tracking-tight"
                >
                  {{ project.title }}
                </h3>
                <p
                  class="text-ink/60 dark:text-slate-300 text-xs sm:text-[13px] leading-relaxed mb-4 font-medium max-w-prose"
                >
                  {{ project.description }}
                </p>
                <div class="flex flex-wrap gap-1.5 mb-5">
                  <span
                    v-for="tag in project.tags"
                    :key="tag"
                    class="text-[10px] font-bold px-2.5 py-1 rounded-none border-2 border-ink bg-paper dark:bg-[#141414] text-ink dark:text-slate-200"
                    >{{ tag }}</span
                  >
                </div>
                <div class="flex flex-wrap items-center gap-3">
                  <a v-if="project.web" :href="project.web" target="_blank" :class="linkClass">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      class="w-3.5 h-3.5"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
                      />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2 12h20" />
                    </svg>
                    {{ t('portfolio.web') }}
                  </a>
                  <a
                    v-if="project.appStore"
                    :href="project.appStore"
                    target="_blank"
                    :class="linkClass"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      class="w-3.5 h-3.5"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"
                      />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M10 2c1 .5 2 2 2 5" />
                    </svg>
                    {{ t('portfolio.appStore') }}
                  </a>
                  <a
                    v-if="project.playStore"
                    :href="project.playStore"
                    target="_blank"
                    :class="linkClass"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      class="w-3.5 h-3.5"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                      />
                    </svg>
                    {{ t('portfolio.playStore') }}
                  </a>
                  <span
                    v-if="project.info"
                    class="text-xs text-ink/50 dark:text-slate-400 italic font-medium"
                    >{{ project.info }}</span
                  >
                </div>
              </div>
            </div>
          </template>

          <template v-else>
            <div
              class="relative h-40 overflow-hidden flex items-center justify-center bg-paper dark:bg-[#141414] border-b-2 border-ink"
            >
              <div :class="['absolute inset-0 dots opacity-60', themeFor(project).dots]"></div>
              <div
                :class="[
                  'relative z-[1] w-28 h-28 md:w-32 md:h-32 bg-white dark:bg-[#1e1e1e] border-[3px] border-ink nb-shadow transition-transform duration-300 group-hover:-rotate-2',
                  themeFor(project).logoHover
                ]"
              >
                <NuxtImg
                  :src="project.image"
                  :alt="project.title"
                  quality="95"
                  densities="x1 x2"
                  class="w-full h-full object-contain p-2.5"
                  loading="lazy"
                />
              </div>
              <div class="absolute top-3.5 left-4">
                <span
                  :class="[
                    'text-[10px] font-bold px-3 py-1 rounded-none border-[3px] border-ink nb-shadow-sm uppercase font-label',
                    themeFor(project).badge
                  ]"
                >
                  {{ getProjectBadgeLabel(project) }}
                </span>
              </div>
            </div>

            <div class="p-6 pt-4">
              <h3
                class="font-display text-lg font-bold mb-1.5 text-ink dark:text-white group-hover:text-primary transition-colors tracking-tight"
              >
                {{ project.title }}
              </h3>
              <p
                class="text-ink/60 dark:text-slate-300 text-xs sm:text-[13px] leading-relaxed mb-4 font-medium"
              >
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-1.5 mb-4">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="text-[10px] font-bold px-2.5 py-1 rounded-none border-2 border-ink bg-paper dark:bg-[#141414] text-ink dark:text-slate-200"
                  >{{ tag }}</span
                >
              </div>
              <div class="flex flex-wrap items-center gap-2.5">
                <a v-if="project.web" :href="project.web" target="_blank" :class="linkClass">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="w-3.5 h-3.5"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
                    />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2 12h20" />
                  </svg>
                  {{ t('portfolio.web') }}
                </a>
                <a
                  v-if="project.appStore"
                  :href="project.appStore"
                  target="_blank"
                  :class="linkClass"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="w-3.5 h-3.5"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"
                    />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 2c1 .5 2 2 2 5" />
                  </svg>
                  {{ t('portfolio.appStore') }}
                </a>
                <a
                  v-if="project.playStore"
                  :href="project.playStore"
                  target="_blank"
                  :class="linkClass"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="w-3.5 h-3.5"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                    />
                  </svg>
                  {{ t('portfolio.playStore') }}
                </a>
                <span
                  v-if="project.info"
                  class="text-xs text-ink/50 dark:text-slate-400 italic font-medium"
                  >{{ project.info }}</span
                >
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.dots {
  background-image: radial-gradient(rgba(17, 17, 17, 0.14) 1.4px, transparent 1.4px);
  background-size: 16px 16px;
}
.dots-violet {
  background-image: radial-gradient(rgba(108, 62, 244, 0.22) 1.4px, transparent 1.4px);
  background-size: 16px 16px;
}
.dots-orange {
  background-image: radial-gradient(rgba(255, 90, 31, 0.22) 1.4px, transparent 1.4px);
  background-size: 16px 16px;
}
.dots-lime {
  background-image: radial-gradient(rgba(120, 150, 20, 0.28) 1.4px, transparent 1.4px);
  background-size: 16px 16px;
}
.dark .dots-violet {
  background-image: radial-gradient(rgba(199, 182, 255, 0.18) 1.4px, transparent 1.4px);
}
.dark .dots-orange {
  background-image: radial-gradient(rgba(255, 180, 140, 0.18) 1.4px, transparent 1.4px);
}
.dark .dots-lime {
  background-image: radial-gradient(rgba(200, 249, 78, 0.16) 1.4px, transparent 1.4px);
}
</style>
