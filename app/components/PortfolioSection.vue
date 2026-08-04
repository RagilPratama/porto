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
    ...portfolioMeta[idx]
  }));
});

const filteredPortfolio = computed(() => {
  if (activeCategory.value === 'all') return portfolio.value;
  return portfolio.value.filter(p => p.category === activeCategory.value);
});

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

  return shouldCover ? 'object-cover w-full h-full' : 'object-contain w-full h-full p-4';
};

const getProjectBadgeClass = (project) => {
  if (project.qaLabel) return 'bg-secondary text-on-secondary';
  if (project.category === 'frontend') return 'bg-primary text-on-primary';
  if (project.category === 'fullstack') return 'bg-tertiary text-on-tertiary';
  return 'bg-secondary text-on-secondary';
};

const getProjectBadgeLabel = (project) => {
  return project.qaLabel || t(`portfolio.categories.${project.category}`);
};
</script>

<template>
  <section class="py-24 bg-surface dark:bg-slate-950 scroll-mt-40 relative overflow-hidden" id="portfolio">
    <div class="absolute inset-0 pointer-events-none section-texture section-texture-portfolio"></div>
    <div class="max-w-7xl mx-auto px-8 relative z-10">
      <div class="text-center mb-16">
        <h2 class="font-headline text-4xl font-bold mb-4 dark:text-white">{{ t('portfolio.title') }}</h2>
        <p class="text-on-surface-variant dark:text-slate-400 max-w-2xl mx-auto">{{ t('portfolio.subtitle') }}</p>
      </div>

      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button
          v-for="cat in categories"
          :key="cat.id"
          @click="activeCategory = cat.id"
          :class="[
            'px-5 py-2 rounded-full text-sm font-semibold transition-all',
            activeCategory === cat.id ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
          ]"
        >
          {{ cat.name }}
        </button>
      </div>

      <transition-group name="portfolio" tag="div" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in filteredPortfolio"
          :key="project.id"
          class="portfolio-card group relative rounded-2xl transition-all duration-500 hover:-translate-y-1"
        >
          <div class="portfolio-card-inner h-full rounded-[14px] overflow-hidden bg-surface-container-lowest dark:bg-slate-900">
            <div class="relative h-48 bg-white dark:bg-slate-800 flex items-center justify-center overflow-hidden">
              <NuxtImg
                :src="project.image"
                :alt="project.title"
                quality="95"
                densities="x1 x2"
                :class="[getProjectImageClass(project), 'group-hover:scale-105 transition-transform duration-500']"
                loading="lazy"
              />
              <div class="absolute top-4 left-4">
                <span :class="['text-xs font-bold px-3 py-1 rounded-full', getProjectBadgeClass(project)]">
                  {{ getProjectBadgeLabel(project) }}
                </span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-headline text-xl font-bold mb-2 dark:text-white">{{ project.title }}</h3>
              <p class="text-on-surface-variant dark:text-slate-400 text-sm mb-4 leading-relaxed">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mb-5">
                <span v-for="tag in project.tags" :key="tag" class="text-xs px-2 py-1 rounded-md bg-secondary-container text-on-secondary-container font-medium">{{ tag }}</span>
              </div>
              <div class="flex flex-wrap gap-3">
                <template v-if="project.web">
                  <a :href="project.web" target="_blank" class="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-3.5 h-3.5" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H18m0 0v4.5M18 6l-7.5 7.5" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 6h-3A2.25 2.25 0 0 0 4.5 8.25v9A2.25 2.25 0 0 0 6.75 19.5h9A2.25 2.25 0 0 0 18 17.25v-3" />
                    </svg>
                    {{ t('portfolio.web') }}
                  </a>
                </template>
                <template v-if="project.appStore">
                  <a :href="project.appStore" target="_blank" class="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 fill-current" viewBox="0 0 814 1000"><path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105-43.8-155.5-127.4C46 790.9 0 663.1 0 541.8C0 347.4 108.2 225 225.4 225c61.6 0 111.4 40.8 149.2 40.8 37.8 0 96.2-43.1 161.4-43.1 25.8 0 108.2 2.6 168.1 80.8zm-127.4-184c30.1-36.8 51.9-87.8 51.9-138.9 0-7.1-.6-14.3-1.9-20.1-48.7 1.9-106.4 32.5-141.5 74.6-26.1 30.1-51.9 81.1-51.9 132.8 0 7.7 1.3 15.5 1.9 17.8 3.2.6 8.4 1.3 13.6 1.3 43.8 0 98.3-29.5 127.9-67.5z"/></svg> {{ t('portfolio.appStore') }}
                  </a>
                </template>
                <template v-if="project.playStore">
                  <a :href="project.playStore" target="_blank" class="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-3.5 h-3.5" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75 7.5 4.5M15 6.75l1.5-2.25M7.5 9.75h9M8.25 9.75v6.75m7.5-6.75v6.75M9.75 16.5h4.5a2.25 2.25 0 0 0 2.25-2.25V9.75H7.5v4.5a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                    {{ t('portfolio.playStore') }}
                  </a>
                </template>
                <span v-if="project.info" class="text-xs text-on-surface-variant dark:text-slate-400 italic transition-colors">{{ project.info }}</span>
              </div>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
  </section>
</template>

<style scoped>
.portfolio-card {
  isolation: isolate;
  border-radius: 1rem;
  border: 2.5px solid rgba(0, 98, 157, 0.25);
  box-shadow:
    0 14px 34px rgba(0, 51, 90, 0.12),
    0 1px 3px rgba(15, 23, 42, 0.08);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1));
}

.portfolio-card::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  pointer-events: none;
  border: 1px solid rgba(255, 255, 255, 0.45);
  opacity: 0.9;
}

.portfolio-card::after {
  content: '';
  position: absolute;
  inset: -8px;
  border-radius: 24px;
  background:
    radial-gradient(circle at top right, rgba(0, 163, 255, 0.18), transparent 54%),
    radial-gradient(circle at bottom left, rgba(81, 95, 116, 0.12), transparent 58%);
  filter: blur(12px);
  opacity: 0;
  pointer-events: none;
  z-index: -1;
  transition: opacity 350ms ease;
}

.portfolio-card:hover {
  box-shadow:
    0 24px 62px rgba(0, 51, 90, 0.2),
    0 8px 20px rgba(0, 98, 157, 0.14),
    0 0 0 1px rgba(0, 98, 157, 0.12);
  border-color: rgba(0, 98, 157, 0.55);
}

.portfolio-card:hover::after {
  opacity: 0.86;
}

.dark .portfolio-card {
  border-color: rgba(56, 189, 248, 0.35);
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.35));
  box-shadow:
    0 16px 36px rgba(2, 6, 23, 0.5),
    0 1px 2px rgba(148, 163, 184, 0.06);
}

.dark .portfolio-card:hover {
  box-shadow:
    0 26px 64px rgba(2, 6, 23, 0.58),
    0 0 0 1px rgba(56, 189, 248, 0.2),
    0 0 18px rgba(56, 189, 248, 0.14);
}

.portfolio-card-inner {
  border-radius: calc(1rem - 2px);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.58);
}
</style>
