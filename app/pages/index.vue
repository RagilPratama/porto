<script setup>
const activeCategory = ref('all');
const activeSection = ref('hero');

const categories = [
  { id: 'all', name: 'All' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'fullstack', name: 'Fullstack' },
  { id: 'backend', name: 'Backend / API' }
];

const techStack = [
  { group: 'frontend', items: [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
    { name: 'Vuetify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuetify/vuetify-original.svg' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Materialize', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materializecss/materializecss-original.svg' }
  ]},
  { group: 'backend', items: [
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
    { name: 'CodeIgniter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    { name: 'MariaDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' }
  ]}
];

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'AIA Indonesia',
    period: 'Sep 2023 — Present',
    location: 'Jakarta, Indonesia',
    points: [
      'Developed and maintained web applications using Vue.js 2 & 3, Vue Router, and Vuex/Pinia',
      'Translated UI/UX designs into responsive and interactive user interfaces',
      'Integrated REST APIs to ensure smooth data flow and functionality',
      'Optimized application performance through code splitting and reusable components',
      'Collaborated with cross-functional teams to deliver high-quality features',
      'Ensured cross-browser compatibility and responsive design',
      'Version control (Git) and documentation'
    ],
    isCurrent: true
  },
  {
    role: 'Fullstack Developer',
    company: 'BKKBN Indonesia',
    period: 'Jun 2019 — Sep 2023',
    location: 'Jakarta, Indonesia',
    points: [
      'Developed BKKBN Portal using Laravel',
      'Integrated APIs across multiple BKKBN internal projects',
      'Presented applications to national users across Indonesia',
      'Built BKKBN Siga Application with ReactJS',
      'Gathered and discussed program requirements with government stakeholders'
    ]
  },
  {
    role: 'Fullstack Developer',
    company: 'PT Dritama BrokerIndo',
    period: 'Jan 2019 — Jun 2019',
    location: 'Jakarta, Indonesia',
    points: [
      'Integrated payment gateways (Midtrans)',
      'Connected with major insurance APIs (Zurich, KB, Sinarmas, etc.)',
      'Built databases and REST APIs using Lumen PHP',
      'Created interactive frontends with ReactJS'
    ]
  },
  {
    role: 'Quality Assurance',
    company: 'Indonesia Smartcloud',
    period: 'May 2018 — Dec 2018',
    location: 'Jakarta, Indonesia',
    points: [
      'Created PHP Unit tests and conducted Blackbox Testing',
      'Developed and implemented QA plans and procedures',
      'Performed quality checks at every stage (UAT, Regression, Integration)',
      'Identified and reported bugs collaboratively with developers'
    ]
  }
];

const education = [
  {
    school: 'Universitas Indraprasta PGRI (UNINDRA)',
    period: 'Graduated: 2025',
    location: 'Jakarta, Indonesia',
    isRecent: true
  },
  {
    school: 'Vocational High School Wikrama',
    period: 'Graduated: 2018',
    location: 'Bogor, Indonesia'
  }
];

const portfolio = [
  { id: 1, title: 'AIA Insurance Web App', category: 'frontend', image: 'https://companieslogo.com/img/orig/1299.HK_BIG-a3180b6a.png?t=1720244490', description: 'Responsive insurance portal built with Vue.js 3, Pinia, and Vue Router.', tags: ['Vue.js 3', 'Pinia', 'Vuetify', 'REST API'], info: 'AIA Indonesia — Internal' },
  { id: 2, title: 'BKKBN Portal & Siga App', category: 'fullstack', image: 'https://mediacenter.riau.go.id/foto_berita/medium/sesuaikan-dengan-generasi-milenial-bkkbn-riau-perkenalkan-logo-baru.jpg', description: 'National family data portal with API ecosystem used across Indonesia.', tags: ['Laravel', 'ReactJS', 'MySQL', 'REST API'], info: 'BKKBN Indonesia — Government Project' },
  { id: 3, title: 'WowPremi', category: 'fullstack', image: '/wowpremi.png', description: 'Online insurance application for Android, iOS & Web with Midtrans integration.', tags: ['Lumen PHP', 'ReactJS', 'Midtrans', 'MySQL'], web: 'https://wowpremi.com/', appStore: 'https://itunes.apple.com/gb/app/wowpremi/id1427272279?mt=8', playStore: 'https://play.google.com/store/apps/details?id=com.dritama.wowpremi' },
  { id: 4, title: 'BKKBN API Ecosystem', category: 'backend', image: 'https://mediacenter.riau.go.id/foto_berita/medium/sesuaikan-dengan-generasi-milenial-bkkbn-riau-perkenalkan-logo-baru.jpg', description: 'Centralized RESTful API layer connecting multiple internal projects.', tags: ['Laravel', 'MySQL', 'PostgreSQL', 'RESTful API'], info: 'BKKBN Indonesia — Government Project' },
  { id: 5, title: 'AIA+', category: 'frontend', image: 'https://companieslogo.com/img/orig/1299.HK_BIG-a3180b6a.png?t=1720244490', description: 'Real-time digital platform connecting customers and insurance companies.', tags: ['Vue.js 3', 'Pinia', 'REST API', 'Realtime'], info: 'AIA Indonesia — Customer Facing' },
  { id: 6, title: 'OGYA Recruitment System', category: 'fullstack', image: 'https://ogya.co.id/assets/OGYA-LOGO-01-1-CVLaQrUB.png', description: 'Management system for candidate selection and HR dashboard.', tags: ['Laravel', 'Vue.js', 'MySQL', 'REST API'], web: 'https://ogya.co.id' },
  { id: 7, title: 'OASE — BCA', category: 'backend', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyDL48YXf0J3DjfcEKeyvCxbT9uJVND1kEQ&s', description: 'Internal banking API system for Bank Central Asia built with Node.js.', tags: ['Node.js', 'Express.js', 'MySQL', 'REST API'], info: 'BCA — Internal' },
  { id: 8, title: 'Sheldon Dental Management', category: 'fullstack', image: 'https://sheldondental.id/images/logo.jpg', description: 'Clinic management system with complex doctor commission calculations.', tags: ['Laravel', 'Dashboard', 'Payroll', 'Fullstack'], web: 'https://sheldondental.id' },
  { id: 9, title: 'Carfix Indonesia', category: 'backend', image: 'https://carfix.co.id/wp-content/uploads/2024/10/icon-1.png', description: 'Manual QA role ensuring quality across car workshop network platforms.', tags: ['QA', 'Manual Testing', 'UAT', 'Bug Reporting'], info: 'Carfix Indonesia — Quality Assurance', qaLabel: 'QA / Tester' },
  { id: 10, title: 'PINS Indonesia Mobile App', category: 'frontend', image: 'https://static.wikia.nocookie.net/logopedia/images/0/0f/PINS_Indonesia.png/revision/latest/scale-to-width-down/1000?cb=20190923144123', description: 'Responsive mobile application interface developed with Angular framework.', tags: ['Angular', 'Mobile App', 'TypeScript', 'Frontend'], info: 'PINS Indonesia — Mobile Development' }
];

const filteredPortfolio = computed(() => {
  if (activeCategory.value === 'all') return portfolio;
  return portfolio.filter(p => p.category === activeCategory.value);
});

onMounted(() => {
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  }, { rootMargin: '-20% 0px -80% 0px' });
  
  sections.forEach(sec => observer.observe(sec));
});

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    activeSection.value = id;
  }
};
</script>

<template>
  <div class="bg-surface font-body text-on-surface">
    <!-- Navbar -->
    <nav class="sticky top-0 w-full z-50 bg-white shadow-[0_20px_40px_rgba(0,163,255,0.06)] border-b border-slate-100">
      <div class="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
        <div class="text-2xl font-bold tracking-tighter text-slate-900 font-headline">
          M. Ragil Pratama
        </div>
        <div class="hidden md:flex items-center gap-8 font-headline font-semibold tracking-tight">
          <a v-for="link in ['hero', 'tech', 'experience', 'education', 'portfolio', 'contact']" 
             :key="link"
             @click.prevent="scrollTo(link)"
             href="#"
             :class="[
               'capitalize transition-all duration-300',
               activeSection === link ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-slate-600 hover:text-blue-500'
             ]">
            {{ link === 'tech' ? 'Tech Stack' : link }}
          </a>
        </div>
        <a @click.prevent="scrollTo('contact')" href="#" class="inline-block bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2 rounded-md font-semibold hover:opacity-90 active:scale-95 transition-all shadow-sm">
          Hire Me
        </a>
      </div>
    </nav>

    <main class="blueprint-bg">
      <!-- Hero Section -->
      <section class="relative overflow-hidden pt-20 pb-32" id="hero">
        <div class="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10"></div>
        <div class="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary-container/20 rounded-full blur-[100px] -z-10"></div>
        <div class="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-7 z-10">
            <span class="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-wider mb-6">
              Fullstack Developer
            </span>
            <h1 class="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface leading-[1.1] mb-8">
              Need a Website or System? <br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-primary transition-all duration-300">I Build Scalable Web Apps</span> That Grow Your Business
            </h1>
            <p class="text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
              Fullstack Developer specializing in high-performance frontend frameworks (Vue.js, React) and robust backend architectures (Laravel, Node.js). Crafting seamless digital experiences from end to end.
            </p>
            <div class="flex flex-wrap gap-4">
              <button @click="scrollTo('contact')" class="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-md font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95">
                Start Collaboration
              </button>
              <button @click="scrollTo('experience')" class="bg-surface-container-lowest text-primary border border-outline-variant/30 px-8 py-4 rounded-md font-bold text-lg hover:bg-surface-bright transition-all">
                View Roadmap
              </button>
            </div>
          </div>
          <div class="lg:col-span-5 relative">
            <div class="relative w-full aspect-square flex items-center justify-center">
              <div class="absolute inset-0 border-[1px] border-primary/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div class="absolute inset-4 border-[1px] border-primary/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              
              <div class="absolute top-4 -right-4 glass-card px-4 py-3 rounded-xl shadow-xl z-30 animate-float">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <span class="material-symbols-outlined text-sm">code</span>
                  </div>
                  <span class="text-xs font-bold tracking-tight">Frontend Dev</span>
                </div>
              </div>
              <div class="absolute bottom-20 -left-8 glass-card px-4 py-3 rounded-xl shadow-xl z-30 animate-float" style="animation-delay: -2s;">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <span class="material-symbols-outlined text-sm">database</span>
                  </div>
                  <span class="text-xs font-bold tracking-tight">Backend Dev</span>
                </div>
              </div>

              <div class="relative w-[85%] h-[85%] group">
                <div class="absolute inset-0 bg-primary/5 rounded-3xl -rotate-3 transition-transform group-hover:rotate-0 duration-500"></div>
                <div class="absolute inset-0 bg-primary/10 rounded-3xl rotate-3 transition-transform group-hover:rotate-0 duration-500"></div>
                <div class="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-surface-container-high border-4 border-white">
                  <img src="https://instagram.fcgk31-1.fna.fbcdn.net/v/t51.82787-15/657737607_18451619035110514_6738889570991742381_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=100&ig_cache_key=Mzg2MTIxNDMxNTc1MjQ1MzQ2OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=ynd-b4boYAYQ7kNvwGLWRHs&_nc_oc=AdqdnIWZ8ul8Wnoxl_Oe1Z2xaC8g30ttGDrGXhFTyVp33if314ffBE4VHdTUXlc7FJQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcgk31-1.fna&_nc_gid=JxjOpRzKpr0DrLrJUQP-nA&_nc_ss=7a32e&oh=00_AfzJUfdGNGnu-Ev5T-q3-cpBSU1-Of3zJrrpJDFbo4pNLQ&oe=69CAD1F0" alt="Professional portrait" class="w-full h-full object-cover rounded-3xl" />
                  <div class="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-60"></div>
                  <div class="absolute inset-0 opacity-10 pointer-events-none" style="background-image: radial-gradient(#fff 1px, transparent 1px); background-size: 20px 20px;"></div>
                </div>
              </div>
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[100px] -z-10 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Tech Stack Section -->
      <section class="py-24 bg-surface-container-low" id="tech">
        <div class="max-w-7xl mx-auto px-8">
          <div class="mb-16">
            <h2 class="font-headline text-4xl font-bold mb-4">Technical Stack</h2>
            <p class="text-on-surface-variant max-w-2xl">The blueprint of my development philosophy involves selecting the right tool for the specific architectural challenge.</p>
          </div>
          <div class="gap-6 flex flex-col items-center">
            <div v-for="(row, idx) in techStack" :key="idx" class="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10" :class="idx === 1 ? 'mt-8' : ''">
              <div v-for="tech in row.items" :key="tech.name" class="w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow" :title="tech.name">
                <img :src="tech.icon" :alt="tech.name" class="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience Section -->
      <section class="py-24 bg-surface" id="experience">
        <div class="max-w-4xl mx-auto px-8">
          <div class="text-center mb-20">
            <h2 class="font-headline text-4xl font-bold mb-4">Work Experience</h2>
            <p class="text-on-surface-variant">A chronological journey of building real-world solutions across industries.</p>
          </div>
          <div class="relative border-l-2 border-surface-container-highest ml-4 md:ml-0">
            <div v-for="(exp, idx) in experiences" :key="idx" class="mb-16 relative pl-12">
              <div :class="['absolute -left-[11px] top-0 w-5 h-5 rounded-full ring-4', exp.isCurrent ? 'bg-primary ring-primary/20' : 'bg-surface-container-highest ring-surface-container-low']"></div>
              <div class="flex flex-col md:flex-row md:items-baseline justify-between mb-1 gap-2">
                <h3 class="text-2xl font-headline font-bold">{{ exp.role }}</h3>
                <span :class="['text-sm font-bold px-3 py-1 rounded-full', exp.isCurrent ? 'text-primary bg-primary-fixed' : 'text-on-surface-variant bg-surface-container-high']">
                  {{ exp.period }}
                </span>
              </div>
              <p :class="['font-bold mb-1', exp.isCurrent ? 'text-primary' : 'text-on-surface']">{{ exp.company }}</p>
              <p class="text-sm text-on-surface-variant mb-4">{{ exp.location }}</p>
              <ul class="space-y-2 text-on-surface-variant leading-relaxed list-none">
                <li v-for="point in exp.points" :key="point" class="flex gap-2">
                  <span :class="[exp.isCurrent ? 'text-primary' : 'text-outline', 'mt-1']">▸</span>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Education Section -->
      <section class="py-24 bg-surface-container-low" id="education">
        <div class="max-w-4xl mx-auto px-8">
          <div class="text-center mb-20">
            <h2 class="font-headline text-4xl font-bold mb-4">Education</h2>
            <p class="text-on-surface-variant">Academic foundations that shaped my technical journey.</p>
          </div>
          <div class="relative border-l-2 border-surface-container-highest ml-4 md:ml-0">
            <div v-for="(edu, idx) in education" :key="idx" class="mb-16 relative pl-12">
              <div :class="['absolute -left-[11px] top-0 w-5 h-5 rounded-full ring-4', edu.isRecent ? 'bg-primary ring-primary/20' : 'bg-surface-container-highest ring-surface-container-low']"></div>
              <div class="flex flex-col md:flex-row md:items-baseline justify-between mb-1 gap-2">
                <h3 class="text-2xl font-headline font-bold">{{ edu.school }}</h3>
                <span :class="['text-sm font-bold px-3 py-1 rounded-full', edu.isRecent ? 'text-primary bg-primary-fixed' : 'text-on-surface-variant bg-surface-container-high']">
                  {{ edu.period }}
                </span>
              </div>
              <p class="text-sm text-on-surface-variant">{{ edu.location }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Portfolio Section -->
      <section class="py-24 bg-surface" id="portfolio">
        <div class="max-w-7xl mx-auto px-8">
          <div class="text-center mb-16">
            <h2 class="font-headline text-4xl font-bold mb-4">Portfolio</h2>
            <p class="text-on-surface-variant max-w-2xl mx-auto">A selection of projects I've built — from government platforms to insurance web apps and beyond.</p>
          </div>

          <!-- Filter Tabs -->
          <div class="flex flex-wrap justify-center gap-3 mb-12">
            <button 
              v-for="cat in categories" 
              :key="cat.id" 
              @click="activeCategory = cat.id"
              :class="[
                'px-5 py-2 rounded-full text-sm font-semibold transition-all',
                activeCategory === cat.id ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
              ]">
              {{ cat.name }}
            </button>
          </div>

          <!-- Cards Grid -->
          <transition-group 
            name="portfolio" 
            tag="div" 
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              v-for="project in filteredPortfolio" 
              :key="project.id"
              class="portfolio-card group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/20 hover:-translate-y-1">
              <div class="relative h-48 bg-white flex items-center justify-center overflow-hidden">
                <img :src="project.image" :alt="project.title" :class="[project.category === 'fullstack' && project.title !== 'WowPremi' ? 'object-cover w-full h-full' : 'object-contain w-full h-full p-6', 'group-hover:scale-105 transition-transform duration-500']" />
                <div class="absolute top-4 left-4">
                  <span :class="['text-xs font-bold px-3 py-1 rounded-full', project.qaLabel ? 'bg-secondary text-on-secondary' : project.category === 'frontend' ? 'bg-primary text-on-primary' : project.category === 'fullstack' ? 'bg-tertiary text-on-tertiary' : 'bg-secondary text-on-secondary']">
                    {{ project.qaLabel || (project.category.charAt(0).toUpperCase() + project.category.slice(1)) }}
                  </span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="font-headline text-xl font-bold mb-2">{{ project.title }}</h3>
                <p class="text-on-surface-variant text-sm mb-4 leading-relaxed">{{ project.description }}</p>
                <div class="flex flex-wrap gap-2 mb-5">
                  <span v-for="tag in project.tags" :key="tag" class="text-xs px-2 py-1 rounded-md bg-secondary-container text-on-secondary-container font-medium">{{ tag }}</span>
                </div>
                <div class="flex flex-wrap gap-3">
                  <template v-if="project.web">
                    <a :href="project.web" target="_blank" class="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
                      <span class="material-symbols-outlined text-sm">open_in_new</span> Web
                    </a>
                  </template>
                  <template v-if="project.appStore">
                    <a :href="project.appStore" target="_blank" class="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 fill-current" viewBox="0 0 814 1000"><path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105-43.8-155.5-127.4C46 790.9 0 663.1 0 541.8C0 347.4 108.2 225 225.4 225c61.6 0 111.4 40.8 149.2 40.8 37.8 0 96.2-43.1 161.4-43.1 25.8 0 108.2 2.6 168.1 80.8zm-127.4-184c30.1-36.8 51.9-87.8 51.9-138.9 0-7.1-.6-14.3-1.9-20.1-48.7 1.9-106.4 32.5-141.5 74.6-26.1 30.1-51.9 81.1-51.9 132.8 0 7.7 1.3 15.5 1.9 17.8 3.2.6 8.4 1.3 13.6 1.3 43.8 0 98.3-29.5 127.9-67.5z"/></svg> App Store
                    </a>
                  </template>
                  <template v-if="project.playStore">
                    <a :href="project.playStore" target="_blank" class="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
                      <span class="material-symbols-outlined text-sm">android</span> Play Store
                    </a>
                  </template>
                  <span v-if="project.info" class="text-xs text-on-surface-variant italic">{{ project.info }}</span>
                </div>
              </div>
            </div>
          </transition-group>
        </div>
      </section>

      <!-- Let's Collaborate Section -->
      <section class="py-24 bg-surface-container-low relative" id="contact">
        <div class="max-w-7xl mx-auto px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 class="font-headline text-5xl font-extrabold mb-8 tracking-tight">Let's <span class="text-primary">Collaborate</span></h2>
              <p class="text-lg text-on-surface-variant mb-12 leading-relaxed">
                Have a complex architectural challenge or a project that needs a steady hand? I'm currently open to consulting and lead engineering roles.
              </p>
              <div class="space-y-6">
                <div class="flex items-center gap-6 group">
                  <div class="w-14 h-14 rounded-xl bg-surface-container-lowest flex items-center justify-center shadow-sm text-primary">
                    <span class="material-symbols-outlined">alternate_email</span>
                  </div>
                  <div>
                    <p class="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Email</p>
                    <p class="text-lg font-bold">ragilpratamaaa@gmail.com</p>
                  </div>
                </div>
                <div class="flex items-center gap-6 group">
                  <div class="w-14 h-14 rounded-xl bg-surface-container-lowest flex items-center justify-center shadow-sm text-primary">
                    <span class="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <p class="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Location</p>
                    <p class="text-lg font-bold">Bogor, Indonesia</p>
                  </div>
                </div>
              </div>
              <div class="mt-12 w-full h-48 rounded-xl bg-surface-container-highest overflow-hidden relative shadow-inner">
                <img class="w-full h-full object-cover opacity-50 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUB7_qSH1VP9UxZUpDpQ3GjKwT859rdwqFKFTNhQ-PqQjpmwi7lJehG4MKSzN_HznWA1AbFg_SxO9OUhqs6KhfkVjsvFCTgYD8Ss-9O4HW8T-AtIjrRXuJdkLSSvVzTCToyNvcDaYjTAWATs-0XRPe8YSMe0nPCxwSDFsXHi3bRiNZxsxe2nS5RZVK0TxkmJsAlWXuy2WuMRSv8JSuvAw3xq6cppGTrUhUv7-lFQR5ZRpOWrYjdhYeA-hBlAsPatYZCa7ye_CURdZZ" alt="Map" />
                <div class="absolute inset-0 flex items-center justify-center">
                  <span class="material-symbols-outlined text-primary text-4xl" style="font-variation-settings: 'FILL' 1;">location_on</span>
                </div>
              </div>
            </div>
            <div class="bg-surface-container-lowest p-10 rounded-2xl shadow-[0_20px_40px_rgba(0,98,157,0.06)]">
              <form class="space-y-6" @submit.prevent>
                <div class="space-y-2">
                  <label class="block text-sm font-bold text-on-surface-variant uppercase">Full Name</label>
                  <input class="w-full bg-surface-container-low border-0 rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline" placeholder="John Doe" type="text"/>
                </div>
                <div class="space-y-2">
                  <label class="block text-sm font-bold text-on-surface-variant uppercase">Work Email</label>
                  <input class="w-full bg-surface-container-low border-0 rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline" placeholder="john@company.com" type="email"/>
                </div>
                <div class="space-y-2">
                  <label class="block text-sm font-bold text-on-surface-variant uppercase">Project Brief</label>
                  <textarea class="w-full bg-surface-container-low border-0 rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline" placeholder="Tell me about your project needs..." rows="4"></textarea>
                </div>
                <button class="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-[0.98]">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-white w-full py-12 border-t border-slate-100">
      <div class="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-6">
        <div class="font-headline font-bold text-slate-900 text-xl">
          M. Ragil Pratama
        </div>
        <p class="text-sm text-slate-500">
          © 2024 M. Ragil Pratama. Built with precision.
        </p>
        <div class="flex gap-6">
          <a v-for="social in ['LinkedIn', 'GitHub', 'Twitter', 'Email']" :key="social" class="text-slate-500 hover:text-blue-500 hover:translate-y-[-2px] transition-transform text-sm font-medium" href="#">
            {{ social }}
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.portfolio-enter-active,
.portfolio-leave-active {
  transition: all 0.5s ease;
}
.portfolio-enter-from,
.portfolio-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
