<script setup>
const { t } = useI18n();
const localized = useLocalizedData();

const categories = computed(() => [
  { id: 'all', name: t('portfolio.categories.all') },
  { id: 'frontend', name: t('portfolio.categories.frontend') },
  { id: 'fullstack', name: t('portfolio.categories.fullstack') },
  { id: 'backend', name: t('portfolio.categories.backend') }
]);

const activeCategory = ref('all');

const portfolioMeta = [
  { id: 13, category: 'frontend', image: 'https://shl.co.id/wp-content/uploads/2019/04/Bank-BCA.png', tags: ['Next.js', 'Micro Frontend', 'TypeScript', 'REST API'], web: 'https://ocean.bca.co.id/id' },
  { id: 1, category: 'frontend', image: 'https://companieslogo.com/img/orig/1299.HK_BIG-a3180b6a.png?t=1720244490', tags: ['Vue.js 3', 'Pinia', 'Vuetify', 'REST API'] },
  { id: 12, category: 'backend', image: 'https://shl.co.id/wp-content/uploads/2019/04/Bank-BCA.png', tags: ['Node.js', 'Express.js', 'MySQL', 'REST API'], playStore: 'https://play.google.com/store/apps/details?id=com.bca.oase&hl=id' },
  { id: 138, category: 'fullstack', image: '/logoesdm.png', tags: ['CodeIgniter', 'Laravel', 'MySQL', 'Government'] },
  { id: 139, category: 'fullstack', image: '/logoesdm.png', tags: ['Laravel', 'Yii', 'PHP', 'CMS'] },
  { id: 2, category: 'fullstack', image: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Logo_BkkbN.png', tags: ['Laravel', 'ReactJS', 'MySQL', 'REST API'] },
  { id: 3, category: 'fullstack', image: '/wowpremi.png', tags: ['Lumen PHP', 'ReactJS', 'Midtrans', 'MySQL'], web: 'https://wowpremi.com/', appStore: 'https://itunes.apple.com/gb/app/wowpremi/id1427272279?mt=8', playStore: 'https://play.google.com/store/apps/details?id=com.dritama.wowpremi' },
  { id: 4, category: 'backend', image: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Logo_BkkbN.png', tags: ['Laravel', 'MySQL', 'PostgreSQL', 'RESTful API'] },
  { id: 5, category: 'frontend', image: 'https://companieslogo.com/img/orig/1299.HK_BIG-a3180b6a.png?t=1720244490', tags: ['Vue.js 3', 'Pinia', 'REST API', 'Realtime'], playStore: 'https://play.google.com/store/apps/details?id=id.co.aiafinancial.aiaplus&hl=id', appStore: 'https://apps.apple.com/kw/app/aia-indonesia/id6745874762' },
  { id: 6, category: 'fullstack', image: 'https://ogya.co.id/assets/OGYA-LOGO-01-1-CVLaQrUB.png', tags: ['Laravel', 'Vue.js', 'MySQL', 'REST API'], web: 'https://ogya.co.id' },
  { id: 11, category: 'frontend', image: 'https://ogya.co.id/assets/OGYA-LOGO-01-1-CVLaQrUB.png', tags: ['ReactJS', 'Responsive', 'REST API'], web: 'https://ogya.co.id' },
  { id: 7, category: 'backend', image: 'https://cdn.techinasia.com/data/images/a06d955d350ded214f6338db66339594.jpg', tags: ['PHPUnit', 'QA', 'Blackbox Testing', 'UAT'], qaLabel: 'QA Engineer' },
  { id: 8, category: 'backend', image: 'https://carfix.co.id/wp-content/uploads/2024/10/icon-1.png', tags: ['Laravel', 'QA Engineer', 'Manual Testing', 'E-commerce', 'UAT'], web: 'https://carfix.co.id/', qaLabel: 'QA Engineer' },
  { id: 9, category: 'fullstack', image: 'https://sheldondental.id/images/logo.jpg', tags: ['Laravel', 'MySQL', 'Management', 'System'], web: 'https://sheldondental.id' },
  { id: 10, category: 'frontend', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkXBQh2taVPVeoFGE2GexcKk0KbsCtw0-aHw&s', tags: ['Vue.js', 'Bootstrap', 'Responsive', 'Dashboard'] }
];

const portfolio = computed(() => {
  const items = localized.value.portfolio.items;
  return items.map((item, idx) => ({
    ...item,
    ...portfolioMeta[idx],
    num: idx + 1
  }));
});

const filteredPortfolio = computed(() => {
  if (activeCategory.value === 'all') return portfolio.value;
  return portfolio.value.filter(p => p.category === activeCategory.value);
});

const displayOrder = [5, 2, 1, 7, 10, 9, 3, 12, 4, 15, 13, 8, 11, 6, 14];

const displayedPortfolio = computed(() => {
  const items = filteredPortfolio.value;
  if (activeCategory.value !== 'all') return items;
  const byNum = Object.fromEntries(items.map(i => [i.num, i]));
  return displayOrder.map(n => byNum[n]).filter(Boolean);
});

const isFeatured = (project) => activeCategory.value === 'all' && project.num === 1;

const isWide = (project) => activeCategory.value === 'all' && [1, 2, 3, 9, 13, 15].includes(project.num);

const wideSide = (project) => {
  if (!isWide(project)) return '';
  return [1, 3, 13].includes(project.num) ? 'lg:col-start-1' : 'lg:col-start-2';
};

const countByCategory = computed(() => {
  const counts = { all: portfolio.value.length };
  for (const p of portfolio.value) {
    counts[p.category] = (counts[p.category] || 0) + 1;
  }
  return counts;
});

const categoryTheme = {
  frontend: {
    badge: 'bg-primary text-on-primary',
    chip: 'bg-primary/10 text-primary dark:bg-blue-400/15 dark:text-blue-400',
    dots: 'dots-blue',
    hover: 'hover:border-blue-400/60 hover:shadow-[0_24px_60px_-18px_rgba(0,98,157,0.45)] dark:hover:shadow-[0_24px_60px_-18px_rgba(56,189,248,0.35)]',
    logoHover: 'group-hover:bg-blue-50 dark:group-hover:bg-blue-500/10'
  },
  fullstack: {
    badge: 'bg-tertiary text-on-tertiary',
    chip: 'bg-indigo-500/10 text-indigo-600 dark:bg-indigo-400/15 dark:text-indigo-400',
    dots: 'dots-indigo',
    hover: 'hover:border-indigo-400/60 hover:shadow-[0_24px_60px_-18px_rgba(99,102,241,0.45)] dark:hover:shadow-[0_24px_60px_-18px_rgba(129,140,248,0.35)]',
    logoHover: 'group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10'
  },
  backend: {
    badge: 'bg-secondary text-on-secondary',
    chip: 'bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/15 dark:text-emerald-400',
    dots: 'dots-emerald',
    hover: 'hover:border-emerald-400/60 hover:shadow-[0_24px_60px_-18px_rgba(16,185,129,0.45)] dark:hover:shadow-[0_24px_60px_-18px_rgba(52,211,153,0.35)]',
    logoHover: 'group-hover:bg-emerald-50 dark:group-hover:bg-emerald-500/10'
  }
};

const themeFor = (project) => {
  if (project.qaLabel) return categoryTheme.backend;
  return categoryTheme[project.category] || categoryTheme.frontend;
};

const getProjectImageClass = (project) => {
  const title = String(project.title ?? '');
  const shouldCover = project.category === 'fullstack'
    && title !== 'WowPremi'
    && !title.includes('OGYA')
    && !title.includes('BKKBN')
    && title !== 'Sheldon Dental Management'
    && title !== 'Carfix'
    && !title.includes('SIDARA')
    && !title.includes('Minerba');

  return shouldCover ? 'object-cover w-full h-full' : 'object-contain w-full h-full p-5';
};

const getProjectBadgeLabel = (project) => {
  return project.qaLabel || t(`portfolio.categories.${project.category}`);
};
</script>

<template>
  <section class="py-24 bg-surface dark:bg-slate-950 scroll-mt-40 relative overflow-hidden" id="portfolio">
    <div class="absolute inset-0 pointer-events-none section-texture section-texture-portfolio"></div>
    <div class="max-w-7xl mx-auto px-8 relative z-10">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <span class="font-label text-xs tracking-[0.3em] uppercase text-primary/70 dark:text-blue-400/70 mb-3 inline-flex items-center gap-2">
            <span class="w-8 h-px bg-primary/50 dark:bg-blue-400/50 inline-block"></span>
            {{ t('portfolio.featured') }}
          </span>
          <h2 class="font-headline text-4xl md:text-5xl font-bold dark:text-white">
            {{ t('portfolio.title') }}
            <span class="text-primary dark:text-blue-400">({{ countByCategory.all }})</span>
          </h2>
          <p class="text-on-surface-variant dark:text-slate-400 max-w-xl mt-3">{{ t('portfolio.subtitle') }}</p>
        </div>

        <div class="flex flex-wrap gap-2.5 shrink-0">
          <button
            v-for="cat in categories"
            :key="cat.id"
            @click="activeCategory = cat.id"
            :class="[
              'px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 inline-flex items-center gap-2 border',
              activeCategory === cat.id
                ? 'bg-primary text-on-primary border-primary shadow-lg shadow-primary/25 scale-105'
                : 'bg-surface-container text-on-surface-variant border-transparent hover:bg-surface-container-high hover:scale-105'
            ]"
          >
            {{ cat.name }}
            <span :class="['text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none', activeCategory === cat.id ? 'bg-white/25' : 'bg-primary/10 text-primary dark:bg-blue-400/15 dark:text-blue-400']">{{ countByCategory[cat.id] }}</span>
          </button>
        </div>
      </div>

      <!-- Bento grid: featured spans 2 cols, rest 1 col, 3 per row -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="project in displayedPortfolio"
          :key="project.id"
          :class="[
            'group relative rounded-3xl overflow-hidden bg-surface-container-lowest dark:bg-slate-900 border-2 transition-all duration-500',
            themeFor(project).hover,
            isWide(project) ? 'lg:col-span-2' : '',
            wideSide(project)
          ]"
        >
          <template v-if="isWide(project)">
            <div class="md:grid md:grid-cols-2 h-full">
              <div class="relative h-52 md:h-full overflow-hidden flex items-center justify-center">
                <div :class="['absolute inset-0 dots', themeFor(project).dots]"></div>
                <span v-if="isFeatured(project)" class="absolute bottom-4 left-5 font-label text-[10px] tracking-[0.25em] uppercase text-primary/60 dark:text-blue-400/60">{{ t('portfolio.featured') }}</span>
                <div :class="['relative z-[1] w-40 h-40 md:w-44 md:h-44 rounded-2xl bg-white/80 dark:bg-slate-800/70 border border-white/60 dark:border-slate-700/60 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:-rotate-2', themeFor(project).logoHover]">
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
                  <span :class="['text-[10px] font-bold px-2.5 py-1 rounded-full', themeFor(project).badge]">
                    {{ getProjectBadgeLabel(project) }}
                  </span>
                </div>
              </div>
              <div class="p-6 md:p-7 flex flex-col justify-center relative">
                <div v-if="isFeatured(project)" class="flex items-center gap-2 mb-3">
                  <span class="inline-flex items-center gap-1.5 font-label text-[11px] tracking-[0.25em] uppercase text-primary/70 dark:text-blue-400/70">
                    <span class="w-1.5 h-1.5 rounded-full bg-primary dark:bg-blue-400 animate-pulse"></span>
                    {{ t('portfolio.featured') }}
                  </span>
                </div>
                <div v-else class="h-6 mb-3"></div>
                <h3 class="font-headline text-xl md:text-2xl font-bold mb-2 dark:text-white group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">{{ project.title }}</h3>
                <p class="text-on-surface-variant dark:text-slate-400 text-[13px] leading-relaxed mb-4">{{ project.description }}</p>
                <div class="flex flex-wrap gap-1.5 mb-5">
                  <span v-for="tag in project.tags" :key="tag" :class="['text-[10px] font-semibold px-2 py-0.5 rounded-md', themeFor(project).chip]">{{ tag }}</span>
                </div>
                <div class="flex flex-wrap items-center gap-3">
                  <template v-if="project.web">
                    <a :href="project.web" target="_blank" class="text-[11px] font-bold text-white bg-primary dark:bg-blue-500 hover:bg-primary/85 dark:hover:bg-blue-400 rounded-full px-4 py-2 transition-colors inline-flex items-center gap-1.5 shadow-lg shadow-primary/25">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-3.5 h-3.5" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H18m0 0v4.5M18 6l-7.5 7.5" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 6h-3A2.25 2.25 0 0 0 4.5 8.25v9A2.25 2.25 0 0 0 6.75 19.5h9A2.25 2.25 0 0 0 18 17.25v-3" />
                      </svg>
                      {{ t('portfolio.web') }}
                    </a>
                  </template>
                  <template v-if="project.appStore">
                    <a :href="project.appStore" target="_blank" class="text-[11px] font-bold text-white bg-slate-800 dark:bg-slate-700 hover:bg-slate-700 dark:hover:bg-slate-600 rounded-full px-4 py-2 transition-colors inline-flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 fill-current" viewBox="0 0 814 1000"><path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105-43.8-155.5-127.4C46 790.9 0 663.1 0 541.8C0 347.4 108.2 225 225.4 225c61.6 0 111.4 40.8 149.2 40.8 37.8 0 96.2-43.1 161.4-43.1 25.8 0 108.2 2.6 168.1 80.8zm-127.4-184c30.1-36.8 51.9-87.8 51.9-138.9 0-7.1-.6-14.3-1.9-20.1-48.7 1.9-106.4 32.5-141.5 74.6-26.1 30.1-51.9 81.1-51.9 132.8 0 7.7 1.3 15.5 1.9 17.8 3.2.6 8.4 1.3 13.6 1.3 43.8 0 98.3-29.5 127.9-67.5z"/></svg> {{ t('portfolio.appStore') }}
                    </a>
                  </template>
                  <template v-if="project.playStore">
                    <a :href="project.playStore" target="_blank" class="text-[11px] font-bold text-white bg-slate-800 dark:bg-slate-700 hover:bg-slate-700 dark:hover:bg-slate-600 rounded-full px-4 py-2 transition-colors inline-flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-3.5 h-3.5" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75 7.5 4.5M15 6.75l1.5-2.25M7.5 9.75h9M8.25 9.75v6.75m7.5-6.75v6.75M9.75 16.5h4.5a2.25 2.25 0 0 0 2.25-2.25V9.75H7.5v4.5a2.25 2.25 0 0 0 2.25 2.25Z" />
                      </svg>
                      {{ t('portfolio.playStore') }}
                    </a>
                  </template>
                  <span v-if="project.info" class="text-[11px] text-on-surface-variant dark:text-slate-400 italic">{{ project.info }}</span>
                </div>
              </div>
            </div>
          </template>

          <template v-else>
            <div class="relative h-36 md:h-40 overflow-hidden flex items-center justify-center">
              <div :class="['absolute inset-0 dots', themeFor(project).dots]"></div>
              <div class="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface-container-lowest/90 dark:from-slate-900/90 to-transparent"></div>
              <div :class="['relative z-[1] w-28 h-28 md:w-32 md:h-32 rounded-2xl bg-white/80 dark:bg-slate-800/70 border border-white/60 dark:border-slate-700/60 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:-rotate-2', themeFor(project).logoHover]">
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
                <span :class="['text-[10px] font-bold px-2.5 py-1 rounded-full', themeFor(project).badge]">
                  {{ getProjectBadgeLabel(project) }}
                </span>
              </div>
            </div>

            <div class="p-5 md:p-6 pt-4">
              <h3 class="font-headline text-lg font-bold mb-1.5 dark:text-white group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">{{ project.title }}</h3>
              <p class="text-on-surface-variant dark:text-slate-400 text-[13px] leading-relaxed mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-1.5 mb-4">
                <span v-for="tag in project.tags" :key="tag" :class="['text-[10px] font-semibold px-2 py-0.5 rounded-md', themeFor(project).chip]">{{ tag }}</span>
              </div>
              <div class="flex flex-wrap items-center gap-2.5">
                <template v-if="project.web">
                  <a :href="project.web" target="_blank" class="text-[11px] font-bold text-primary dark:text-blue-400 hover:underline inline-flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-3.5 h-3.5" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H18m0 0v4.5M18 6l-7.5 7.5" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 6h-3A2.25 2.25 0 0 0 4.5 8.25v9A2.25 2.25 0 0 0 6.75 19.5h9A2.25 2.25 0 0 0 18 17.25v-3" />
                    </svg>
                    {{ t('portfolio.web') }}
                  </a>
                </template>
                <template v-if="project.appStore">
                  <a :href="project.appStore" target="_blank" class="text-[11px] font-bold text-primary dark:text-blue-400 hover:underline inline-flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 fill-current" viewBox="0 0 814 1000"><path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105-43.8-155.5-127.4C46 790.9 0 663.1 0 541.8C0 347.4 108.2 225 225.4 225c61.6 0 111.4 40.8 149.2 40.8 37.8 0 96.2-43.1 161.4-43.1 25.8 0 108.2 2.6 168.1 80.8zm-127.4-184c30.1-36.8 51.9-87.8 51.9-138.9 0-7.1-.6-14.3-1.9-20.1-48.7 1.9-106.4 32.5-141.5 74.6-26.1 30.1-51.9 81.1-51.9 132.8 0 7.7 1.3 15.5 1.9 17.8 3.2.6 8.4 1.3 13.6 1.3 43.8 0 98.3-29.5 127.9-67.5z"/></svg> {{ t('portfolio.appStore') }}
                  </a>
                </template>
                <template v-if="project.playStore">
                  <a :href="project.playStore" target="_blank" class="text-[11px] font-bold text-primary dark:text-blue-400 hover:underline inline-flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-3.5 h-3.5" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75 7.5 4.5M15 6.75l1.5-2.25M7.5 9.75h9M8.25 9.75v6.75m7.5-6.75v6.75M9.75 16.5h4.5a2.25 2.25 0 0 0 2.25-2.25V9.75H7.5v4.5a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                    {{ t('portfolio.playStore') }}
                  </a>
                </template>
                <span v-if="project.info" class="text-[11px] text-on-surface-variant dark:text-slate-400 italic">{{ project.info }}</span>
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
  background-image: radial-gradient(rgba(0, 98, 157, 0.16) 1.2px, transparent 1.2px);
  background-size: 14px 14px;
}

.dots-blue {
  background-image: radial-gradient(rgba(0, 98, 157, 0.16) 1.2px, transparent 1.2px);
  background-size: 14px 14px;
}

.dots-indigo {
  background-image: radial-gradient(rgba(99, 102, 241, 0.16) 1.2px, transparent 1.2px);
  background-size: 14px 14px;
}

.dots-emerald {
  background-image: radial-gradient(rgba(16, 185, 129, 0.16) 1.2px, transparent 1.2px);
  background-size: 14px 14px;
}

.dark .dots-blue {
  background-image: radial-gradient(rgba(56, 189, 248, 0.14) 1.2px, transparent 1.2px);
  background-size: 14px 14px;
}

.dark .dots-indigo {
  background-image: radial-gradient(rgba(129, 140, 248, 0.14) 1.2px, transparent 1.2px);
  background-size: 14px 14px;
}

.dark .dots-emerald {
  background-image: radial-gradient(rgba(52, 211, 153, 0.14) 1.2px, transparent 1.2px);
  background-size: 14px 14px;
}
</style>
