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
    { name: 'Materialize', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materializecss/materializecss-original.svg' },
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg' }
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
    type: 'Full-time',
    period: 'Sep 2023 — Present',
    location: 'Jakarta, Indonesia',
    impact: 'Shipped reusable frontend architecture and performance-focused UI for insurance products.',
    tech: ['Vue 3', 'Pinia', 'Vue Router', 'REST API'],
    points: [
      'Built and maintained customer-facing modules with Vue.js 2/3 and Pinia state patterns.',
      'Converted design specs into responsive interfaces with consistent component standards.',
      'Integrated REST APIs and improved delivery quality through cross-team collaboration.'
    ],
    isCurrent: true
  },
  {
    role: 'Fullstack Developer',
    company: 'BKKBN Indonesia',
    type: 'Full-time',
    period: 'Jun 2019 — Sep 2023',
    location: 'Jakarta, Indonesia',
    impact: 'Delivered national-scale public service platforms used by teams across Indonesia.',
    tech: ['Laravel', 'ReactJS', 'MySQL', 'Integration API'],
    points: [
      'Developed core services and admin features for the BKKBN Portal using Laravel.',
      'Built API integrations connecting several internal BKKBN ecosystems.',
      'Delivered and presented production-ready solutions to nationwide stakeholders.'
    ]
  },
  {
    role: 'Fullstack Developer',
    company: 'PT Dritama BrokerIndo',
    type: 'Full-time',
    period: 'Jan 2019 — Jun 2019',
    location: 'Jakarta, Indonesia',
    impact: 'Accelerated insurance onboarding workflows through payment and partner API integration.',
    tech: ['Lumen', 'ReactJS', 'Midtrans', 'MySQL'],
    points: [
      'Integrated Midtrans payment gateway for web and mobile insurance flow.',
      'Connected external insurance APIs (Zurich, KB, Sinarmas, and others).',
      'Developed REST APIs with Lumen and interactive frontend modules with ReactJS.'
    ]
  },
  {
    role: 'Quality Assurance',
    company: 'Indonesia Smartcloud',
    type: 'Full-time',
    period: 'May 2018 — Dec 2018',
    location: 'Jakarta, Indonesia',
    impact: 'Improved release confidence with stronger testing discipline and defect reporting.',
    tech: ['QA Testing', 'Regression', 'Integration Test', 'UAT'],
    points: [
      'Ran black-box and regression validation before release milestones.',
      'Prepared test plans and QA checklists for UAT and integration cycles.',
      'Tracked defects with developers until verification and closure.'
    ]
  }
];

const education = [
  {
    degree: 'Bachelor Degree in Informatics Engineering',
    school: 'Universitas Indraprasta PGRI (UNINDRA)',
    period: 'Graduated: 2025',
    highlight: 'Jakarta, Indonesia',
    description: 'Focused on software engineering practices, web architecture, and applied fullstack development.',
    year: '2025',
    isRecent: true
  },
  {
    degree: 'Software Engineering Vocational Program',
    school: 'Vocational High School Wikrama',
    period: 'Graduated: 2018',
    highlight: 'Bogor, Indonesia',
    description: 'Built strong foundations in programming, quality assurance, and project collaboration.',
    year: '2018'
  }
];

const portfolio = [
  { id: 1, title: 'AIA Insurance Web App', category: 'frontend', image: 'https://companieslogo.com/img/orig/1299.HK_BIG-a3180b6a.png?t=1720244490', description: 'Responsive insurance portal built with Vue.js 3, Pinia, and Vue Router.', tags: ['Vue.js 3', 'Pinia', 'Vuetify', 'REST API'], info: 'AIA Indonesia — Internal' },
  { id: 2, title: 'BKKBN Portal & Siga App', category: 'fullstack', image: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Logo_BkkbN.png', description: 'National family data portal with API ecosystem used across Indonesia.', tags: ['Laravel', 'ReactJS', 'MySQL', 'REST API'], info: 'BKKBN Indonesia — Government Project' },
  { id: 3, title: 'WowPremi', category: 'fullstack', image: '/wowpremi.png', description: 'Online insurance application for Android, iOS & Web with Midtrans integration.', tags: ['Lumen PHP', 'ReactJS', 'Midtrans', 'MySQL'], web: 'https://wowpremi.com/', appStore: 'https://itunes.apple.com/gb/app/wowpremi/id1427272279?mt=8', playStore: 'https://play.google.com/store/apps/details?id=com.dritama.wowpremi' },
  { id: 4, title: 'BKKBN API Ecosystem', category: 'backend', image: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Logo_BkkbN.png', description: 'Centralized RESTful API layer connecting multiple internal projects.', tags: ['Laravel', 'MySQL', 'PostgreSQL', 'RESTful API'], info: 'BKKBN Indonesia — Government Project' },
  { id: 5, title: 'AIA+', category: 'frontend', image: 'https://companieslogo.com/img/orig/1299.HK_BIG-a3180b6a.png?t=1720244490', description: 'Real-time digital platform connecting customers and insurance companies.', tags: ['Vue.js 3', 'Pinia', 'REST API', 'Realtime'], info: 'AIA Indonesia — Customer Facing', playStore: 'https://play.google.com/store/apps/details?id=id.co.aiafinancial.aiaplus&hl=id', appStore: 'https://apps.apple.com/kw/app/aia-indonesia/id6745874762' },
  { id: 6, title: 'OGYA Recruitment System', category: 'fullstack', image: 'https://ogya.co.id/assets/OGYA-LOGO-01-1-CVLaQrUB.png', description: 'Management system for candidate selection and HR dashboard.', tags: ['Laravel', 'Vue.js', 'MySQL', 'REST API'], web: 'https://ogya.co.id' },
  { id: 11, title: 'OGYA Company Profile', category: 'frontend', image: 'https://ogya.co.id/assets/OGYA-LOGO-01-1-CVLaQrUB.png', description: 'Modern company profile website showcasing services and career portal.', tags: ['ReactJS', 'Responsive', 'REST API'], web: 'https://ogya.co.id' },
  { id: 7, title: 'OASE — BCA', category: 'backend', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyDL48YXf0J3DjfcEKeyvCxbT9uJVND1kEQ&s', description: 'Internal banking API system for Bank Central Asia built with Node.js.', tags: ['Node.js', 'Express.js', 'MySQL', 'REST API'], info: 'BCA — Internal' },
  { id: 8, title: 'Sheldon Dental Management', category: 'fullstack', image: 'https://sheldondental.id/images/logo.jpg', description: 'Clinic management system with complex doctor commission calculations.', tags: ['Laravel', 'Dashboard', 'Payroll', 'Fullstack'], web: 'https://sheldondental.id' },
  { id: 9, title: 'Carfix Indonesia', category: 'backend', image: 'https://carfix.co.id/wp-content/uploads/2024/10/icon-1.png', description: 'Manual QA role ensuring quality across car workshop network platforms.', tags: ['QA', 'Manual Testing', 'UAT', 'Bug Reporting'], info: 'Carfix Indonesia — Quality Assurance', qaLabel: 'QA / Tester', web: 'https://carfix.co.id/' },
  { id: 12, title: 'SmartCloud Indonesia', category: 'backend', image: 'https://cdn.techinasia.com/data/images/a06d955d350ded214f6338db66339594.jpg', description: 'Quality assurance role for cloud infrastructure and SaaS platform testing.', tags: ['QA', 'Manual Testing', 'SaaS', 'Cloud'], info: 'SmartCloud Indonesia — Quality Assurance', qaLabel: 'QA / Tester' },
  { id: 10, title: 'PINS Indonesia Mobile App', category: 'frontend', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkXBQh2taVPVeoFGE2GexcKk0KbsCtw0-aHw&s', description: 'Responsive mobile application interface developed with Angular framework.', tags: ['Angular', 'Mobile App', 'TypeScript', 'Frontend'], info: 'PINS Indonesia — Mobile Development' }
];

const socials = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ragil-pratama-824351145/', icon: 'linkedin' },
  { name: 'GitHub', url: 'https://github.com/RagilPratama', icon: 'github' },
  { name: 'Instagram', url: 'https://www.instagram.com/rglprtm/', icon: 'instagram' },
  { name: 'Email', url: 'mailto:ragilpratamaaa@gmail.com', icon: 'email' }
];

const filteredPortfolio = computed(() => {
  if (activeCategory.value === 'all') return portfolio;
  return portfolio.filter(p => p.category === activeCategory.value);
});

const leftExperiences = computed(() => experiences.filter((_, idx) => idx % 2 === 0));
const rightExperiences = computed(() => experiences.filter((_, idx) => idx % 2 !== 0));
const experienceVisible = ref(false);
const supportsHeroBg3d = ref(false);
const isHeroBgInteracting = ref(false);
const heroBgTilt = reactive({ x: 0, y: 0 });

const heroBgTopStyle = computed(() => {
  if (!supportsHeroBg3d.value || !isHeroBgInteracting.value) return {};

  return {
    transform: `translate3d(${heroBgTilt.x * 1.1}px, ${heroBgTilt.y * 1}px, 0)`
  };
});

const heroBgBottomStyle = computed(() => {
  if (!supportsHeroBg3d.value || !isHeroBgInteracting.value) return {};

  return {
    transform: `translate3d(${heroBgTilt.x * -1}px, ${heroBgTilt.y * -0.9}px, 0)`
  };
});

const heroBgCenterStyle = computed(() => {
  if (!supportsHeroBg3d.value || !isHeroBgInteracting.value) return {};

  return {
    transform: `translate3d(${heroBgTilt.x * 0.7}px, ${heroBgTilt.y * 0.7}px, 0) scale(1.035)`
  };
});

const handleHeroBgMove = (event) => {
  if (!supportsHeroBg3d.value) return;

  const section = event.currentTarget;
  if (!section) return;

  const rect = section.getBoundingClientRect();
  const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
  const offsetY = (event.clientY - rect.top) / rect.height - 0.5;

  isHeroBgInteracting.value = true;
  heroBgTilt.x = offsetX * 56;
  heroBgTilt.y = offsetY * 44;
};

const resetHeroBgMove = () => {
  isHeroBgInteracting.value = false;
  heroBgTilt.x = 0;
  heroBgTilt.y = 0;
};

let sectionObserver = null;
let experienceObserver = null;

const setupSectionObserver = () => {
  const sections = document.querySelectorAll('section[id]');
  sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  }, { rootMargin: '-20% 0px -80% 0px' });

  sections.forEach(sec => sectionObserver?.observe(sec));
};

const setupExperienceObserver = () => {
  const experienceSection = document.getElementById('experience');
  if (!experienceSection) return;

  experienceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        experienceVisible.value = true;
        experienceObserver?.disconnect();
        experienceObserver = null;
      }
    });
  }, { threshold: 0.15 });

  experienceObserver.observe(experienceSection);
};

onMounted(() => {
  supportsHeroBg3d.value = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  // Defer non-critical observer work to keep the initial paint path lighter.
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => {
      setupSectionObserver();
      setupExperienceObserver();
    }, { timeout: 1200 });
    return;
  }

  setTimeout(() => {
    setupSectionObserver();
    setupExperienceObserver();
  }, 200);
});

onBeforeUnmount(() => {
  sectionObserver?.disconnect();
  sectionObserver = null;
  experienceObserver?.disconnect();
  experienceObserver = null;
});

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    activeSection.value = id;
  }
};

const form = reactive({
  name: '',
  email: '',
  message: ''
});

const isSubmitting = ref(false);
const showSuccess = ref(false);

const handleInquiry = async () => {
  if (!form.name || !form.email || !form.message) {
    alert('Please fill out all fields');
    return;
  }

  isSubmitting.value = true;
  
  // Simulate API call (you can replace this with a real fetch to your backend or a service like Formspree)
  try {
    // Optional: Real mailto fallback if you don't have a backend
    const mailtoUrl = `mailto:ragilpratamaaa@gmail.com?subject=Inquiry from ${form.name}&body=${encodeURIComponent(form.message)}%0D%0A%0D%0AFrom: ${form.name} (${form.email})`;
    window.open(mailtoUrl);

    // Simulated latency
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    showSuccess.value = true;
    form.name = '';
    form.email = '';
    form.message = '';
    
    setTimeout(() => {
      showSuccess.value = false;
    }, 5000);
  } catch (error) {
    alert('Failed to send inquiry. Please try again.');
  } finally {
    isSubmitting.value = false;
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
      <section :class="['relative overflow-hidden pt-20 pb-32', { 'hero-bg-interacting': isHeroBgInteracting }]" id="hero" @mousemove="handleHeroBgMove" @mouseleave="resetHeroBgMove">
        <div class="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 hero-bg-layer hero-bg-top" :style="heroBgTopStyle"></div>
        <div class="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary-container/20 rounded-full blur-[100px] -z-10 hero-bg-layer hero-bg-bottom" :style="heroBgBottomStyle"></div>
        <div class="absolute inset-0 -z-10 pointer-events-none hero-bg-layer hero-bg-center" :style="heroBgCenterStyle">
          <div class="absolute left-[8%] top-[18%] w-40 h-40 rounded-[36px] border border-primary/15 bg-gradient-to-br from-primary/10 to-transparent rotate-[16deg]"></div>
          <div class="absolute right-[10%] bottom-[16%] w-44 h-44 rounded-full border border-primary-container/20 bg-gradient-to-tr from-primary-container/15 to-transparent"></div>
        </div>
        <div class="absolute inset-x-[-10%] top-[14%] h-[72%] -z-10 pointer-events-none hero-depth-wrap">
          <div class="hero-depth-plane"></div>
        </div>
        <div class="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-7 z-10">
            <span class="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-wider mb-6">
              Fullstack Developer
            </span>
            <h1 class="font-sans md:font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface leading-[1.1] mb-8">
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-4 h-4" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 21 12l-3.75 5.25M6.75 6.75 3 12l3.75 5.25M14.25 4.5 9.75 19.5" />
                    </svg>
                  </div>
                  <span class="text-xs font-bold tracking-tight">Frontend Dev</span>
                </div>
              </div>
              <div class="absolute bottom-20 -left-8 glass-card px-4 py-3 rounded-xl shadow-xl z-30 animate-float" style="animation-delay: -2s;">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-4 h-4" aria-hidden="true">
                      <ellipse cx="12" cy="5.5" rx="7" ry="3" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 5.5v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6M5 11.5v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
                    </svg>
                  </div>
                  <span class="text-xs font-bold tracking-tight">Backend Dev</span>
                </div>
              </div>

              <div class="relative w-[85%] h-[85%] group">
                <div class="absolute inset-0 bg-primary/5 rounded-3xl -rotate-3 transition-transform group-hover:rotate-0 duration-500"></div>
                <div class="absolute inset-0 bg-primary/10 rounded-3xl rotate-3 transition-transform group-hover:rotate-0 duration-500"></div>
                <div class="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-surface-container-high border-4 border-white">
                  <NuxtImg
                    format="webp"
                    quality="70"
                    fetchpriority="high"
                    loading="eager"
                    width="504"
                    height="672"
                    sizes="(max-width: 768px) 78vw, (max-width: 1280px) 36vw, 504px"
                    densities="x1 x2"
                    src="https://instagram.fcgk31-1.fna.fbcdn.net/v/t51.82787-15/657737607_18451619035110514_6738889570991742381_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=100&ig_cache_key=Mzg2MTIxNDMxNTc1MjQ1MzQ2OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=ynd-b4boYAYQ7kNvwGLWRHs&_nc_oc=AdqdnIWZ8ul8Wnoxl_Oe1Z2xaC8g30ttGDrGXhFTyVp33if314ffBE4VHdTUXlc7FJQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcgk31-1.fna&_nc_gid=JxjOpRzKpr0DrLrJUQP-nA&_nc_ss=7a32e&oh=00_AfzJUfdGNGnu-Ev5T-q3-cpBSU1-Of3zJrrpJDFbo4pNLQ&oe=69CAD1F0"
                    alt="Professional portrait"
                    class="w-full h-full object-cover rounded-3xl"
                  />
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
      <section class="py-24 bg-surface-container-low overflow-hidden cv-auto" id="tech">
        <div class="max-w-7xl mx-auto px-8">
          <div class="mb-16">
            <h2 class="font-headline text-4xl font-bold mb-4">Technical Stack</h2>
            <p class="text-on-surface-variant max-w-2xl">The blueprint of my development philosophy involves selecting the right tool for the specific architectural challenge.</p>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            <!-- Left: Lottie Animation -->
            <div class="flex justify-center items-center">
              <client-only>
                <div class="w-full max-w-[555px] aspect-square">
                  <iframe 
                    src="https://lottie.host/embed/d38287a4-2d79-44f8-8150-ccda04366ba1/xVIPM2t6Tw.lottie" 
                    title="Animated technical stack illustration"
                    loading="lazy"
                    style="width: 100%; height: 100%; border: none;"
                  ></iframe>
                </div>
              </client-only>
            </div>

            <!-- Right: Tech Icons (Unified) -->
            <div class="flex flex-col justify-center h-full">
              <div class="flex flex-wrap gap-6 justify-start lg:justify-start">
                <template v-for="group in techStack" :key="group.group">
                  <div v-for="tech in group.items" :key="tech.name" class="group relative">
                    <div class="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center p-4 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ring-1 ring-primary/5 group-hover:ring-primary/20" :title="tech.name">
                      <NuxtImg format="webp" :src="tech.icon" :alt="tech.name" class="w-full h-full object-contain transition-all duration-500" />
                    </div>
                    <!-- Tooltip Style -->
                    <span class="absolute -top-12 left-1/2 -translate-x-1/2 bg-surface-container-highest text-on-surface-variant text-[11px] px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 whitespace-nowrap z-10 font-bold shadow-lg pointer-events-none border border-outline-variant/30 uppercase tracking-tighter">
                      {{ tech.name }}
                    </span>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience Section -->
      <section :class="['py-24 bg-surface cv-auto', { 'experience-visible': experienceVisible }]" id="experience">
        <div class="max-w-6xl mx-auto px-8">
          <div class="text-center mb-14">
            <h2 class="font-headline text-3xl md:text-4xl font-bold mb-2 tracking-tight">Work Experience</h2>
            <p class="text-on-surface-variant text-sm">A focused timeline of roles, impact, and technology stack.</p>
            <div class="w-20 h-0.5 bg-primary rounded-full mx-auto mt-6"></div>
          </div>

          <div class="relative">
            <div class="hidden md:block absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-px bg-outline-variant/50"></div>

            <div class="grid grid-cols-1 md:grid-cols-2 md:gap-12 gap-6">
              <div class="space-y-6">
                <article
                  v-for="(exp, idx) in leftExperiences"
                  :key="`left-${idx}-${exp.company}`"
                  class="relative md:pr-10 experience-card"
                  :style="{ '--exp-delay': `${idx * 120}ms` }"
                >
                  <div :class="['rounded-2xl border p-6 transition-all duration-300', exp.isCurrent ? 'bg-primary-fixed/30 border-primary/40 shadow-[0_12px_30px_rgba(0,98,157,0.10)]' : 'bg-surface-container-lowest border-outline-variant/30 shadow-sm hover:shadow-md']">
                    <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                      <div>
                        <h3 class="text-xl md:text-2xl font-headline font-bold text-on-surface leading-tight">{{ exp.role }}</h3>
                        <p class="text-primary font-bold text-base mt-1">{{ exp.company }}</p>
                      </div>
                      <div class="flex flex-wrap gap-2 md:justify-end">
                        <span v-if="exp.isCurrent" class="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold bg-primary text-on-primary">Current</span>
                        <span class="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold bg-secondary-container text-on-secondary-fixed-variant">{{ exp.type }}</span>
                        <span class="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold bg-surface-container-high text-on-surface-variant">{{ exp.period }}</span>
                      </div>
                    </div>

                    <p class="text-xs text-on-surface-variant mb-4">{{ exp.location }}</p>

                    <div class="mb-4 rounded-xl bg-surface-container p-3 border border-outline-variant/20">
                      <p class="text-sm font-medium text-on-surface">{{ exp.impact }}</p>
                    </div>

                    <div class="flex flex-wrap gap-2 mb-4">
                      <span
                        v-for="stack in exp.tech"
                        :key="stack"
                        class="text-[11px] px-2 py-1 rounded-md bg-white border border-outline-variant/30 text-on-surface-variant font-semibold"
                      >
                        {{ stack }}
                      </span>
                    </div>

                    <ul class="space-y-2 text-sm text-on-surface-variant leading-relaxed list-none">
                      <li v-for="point in exp.points" :key="point" class="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4 mt-0.5 text-primary shrink-0" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="m5 12 4 4 10-10" />
                        </svg>
                        <span>{{ point }}</span>
                      </li>
                    </ul>
                  </div>

                  <div :class="['hidden md:block absolute right-0 translate-x-1/2 top-8 w-3.5 h-3.5 rounded-full ring-4 z-10', exp.isCurrent ? 'bg-primary ring-primary/20' : 'bg-surface-container-highest ring-surface-container-low']"></div>
                </article>
              </div>

              <div class="space-y-6 md:mt-8">
                <article
                  v-for="(exp, idx) in rightExperiences"
                  :key="`right-${idx}-${exp.company}`"
                  class="relative md:pl-10 experience-card"
                  :style="{ '--exp-delay': `${idx * 120 + 80}ms` }"
                >
                  <div :class="['rounded-2xl border p-6 transition-all duration-300', exp.isCurrent ? 'bg-primary-fixed/30 border-primary/40 shadow-[0_12px_30px_rgba(0,98,157,0.10)]' : 'bg-surface-container-lowest border-outline-variant/30 shadow-sm hover:shadow-md']">
                    <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                      <div>
                        <h3 class="text-xl md:text-2xl font-headline font-bold text-on-surface leading-tight">{{ exp.role }}</h3>
                        <p class="text-primary font-bold text-base mt-1">{{ exp.company }}</p>
                      </div>
                      <div class="flex flex-wrap gap-2 md:justify-end">
                        <span v-if="exp.isCurrent" class="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold bg-primary text-on-primary">Current</span>
                        <span class="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold bg-secondary-container text-on-secondary-fixed-variant">{{ exp.type }}</span>
                        <span class="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold bg-surface-container-high text-on-surface-variant">{{ exp.period }}</span>
                      </div>
                    </div>

                    <p class="text-xs text-on-surface-variant mb-4">{{ exp.location }}</p>

                    <div class="mb-4 rounded-xl bg-surface-container p-3 border border-outline-variant/20">
                      <p class="text-sm font-medium text-on-surface">{{ exp.impact }}</p>
                    </div>

                    <div class="flex flex-wrap gap-2 mb-4">
                      <span
                        v-for="stack in exp.tech"
                        :key="stack"
                        class="text-[11px] px-2 py-1 rounded-md bg-white border border-outline-variant/30 text-on-surface-variant font-semibold"
                      >
                        {{ stack }}
                      </span>
                    </div>

                    <ul class="space-y-2 text-sm text-on-surface-variant leading-relaxed list-none">
                      <li v-for="point in exp.points" :key="point" class="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4 mt-0.5 text-primary shrink-0" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="m5 12 4 4 10-10" />
                        </svg>
                        <span>{{ point }}</span>
                      </li>
                    </ul>
                  </div>

                  <div :class="['hidden md:block absolute left-0 -translate-x-1/2 top-8 w-3.5 h-3.5 rounded-full ring-4 z-10', exp.isCurrent ? 'bg-primary ring-primary/20' : 'bg-surface-container-highest ring-surface-container-low']"></div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Education Section -->
      <section class="py-24 bg-surface-container-low cv-auto" id="education">
        <div class="max-w-6xl mx-auto px-8">
          <div class="text-center mb-12">
            <h2 class="font-headline text-3xl md:text-4xl font-bold mb-2 tracking-tight">Education</h2>
            <p class="text-on-surface-variant text-sm">My academic background and educational qualifications</p>
            <div class="w-20 h-0.5 bg-primary rounded-full mx-auto mt-6"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article
              v-for="(edu, idx) in education"
              :key="idx"
              class="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm p-6"
            >
              <div class="flex flex-col md:flex-row md:items-start gap-5">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-container to-primary flex items-center justify-center text-on-primary shadow-md shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-8 h-8" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 6.75C6.5 5.8 8.38 5.5 10.5 5.5c1.97 0 3.74.38 5.25 1.25V18c-1.5-.88-3.28-1.25-5.25-1.25-2.12 0-4 .3-6 1.25V6.75Zm15 0c-2-.95-3.88-1.25-6-1.25-1.97 0-3.74.38-5.25 1.25V18c1.5-.88 3.28-1.25 5.25-1.25 2.12 0 4 .3 6 1.25V6.75Z" />
                  </svg>
                </div>

                <div class="flex-1">
                  <h3 class="text-lg md:text-xl font-headline font-bold leading-tight text-on-surface mb-1">{{ edu.degree }}</h3>
                  <p class="text-primary text-base md:text-lg font-bold mb-4">{{ edu.school }}</p>

                  <div class="flex flex-wrap items-center gap-2 mb-4">
                    <span class="inline-flex items-center gap-1.5 bg-primary-fixed text-on-primary-fixed-variant px-2.5 py-1 rounded-lg text-xs font-semibold">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-3.5 h-3.5" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3.75v2.5m7.5-2.5v2.5M4.5 9.5h15M6.75 5.75h10.5A2.25 2.25 0 0 1 19.5 8v9.25a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 17.25V8a2.25 2.25 0 0 1 2.25-2.25Z" />
                      </svg>
                      {{ edu.period }}
                    </span>
                    <span class="inline-flex items-center gap-1.5 bg-secondary-container text-on-secondary-fixed-variant px-2.5 py-1 rounded-lg text-xs font-semibold">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-3.5 h-3.5" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m12 3.75 2.55 5.16 5.7.83-4.13 4.03.97 5.68L12 16.81l-5.1 2.66.97-5.68-4.13-4.03 5.7-.83L12 3.75Z" />
                      </svg>
                      {{ edu.highlight }}
                    </span>
                  </div>

                  <p class="text-on-surface-variant text-sm leading-relaxed">{{ edu.description }}</p>
                </div>
              </div>

              <div class="border-t border-outline-variant/20 mt-5 pt-4 flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <span class="w-3 h-3 rounded-full bg-blue-400"></span>
                  <span class="w-3 h-3 rounded-full bg-violet-400"></span>
                  <span class="w-3 h-3 rounded-full bg-emerald-400"></span>
                  <span class="w-3 h-3 rounded-full bg-amber-400"></span>
                </div>
                <span class="text-lg font-bold text-on-surface-variant">{{ edu.year }}</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Portfolio Section -->
      <section class="py-24 bg-surface cv-auto" id="portfolio">
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
                <NuxtImg format="webp" :src="project.image" :alt="project.title" :class="[(project.category === 'fullstack' && project.title !== 'WowPremi' && !project.title.includes('OGYA') && !project.title.includes('BKKBN') && project.title !== 'Sheldon Dental Management') ? 'object-cover w-full h-full' : 'object-contain w-full h-full p-6', 'group-hover:scale-105 transition-transform duration-500']" loading="lazy" />
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
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-3.5 h-3.5" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H18m0 0v4.5M18 6l-7.5 7.5" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 6h-3A2.25 2.25 0 0 0 4.5 8.25v9A2.25 2.25 0 0 0 6.75 19.5h9A2.25 2.25 0 0 0 18 17.25v-3" />
                      </svg>
                      Web
                    </a>
                  </template>
                  <template v-if="project.appStore">
                    <a :href="project.appStore" target="_blank" class="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 fill-current" viewBox="0 0 814 1000"><path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105-43.8-155.5-127.4C46 790.9 0 663.1 0 541.8C0 347.4 108.2 225 225.4 225c61.6 0 111.4 40.8 149.2 40.8 37.8 0 96.2-43.1 161.4-43.1 25.8 0 108.2 2.6 168.1 80.8zm-127.4-184c30.1-36.8 51.9-87.8 51.9-138.9 0-7.1-.6-14.3-1.9-20.1-48.7 1.9-106.4 32.5-141.5 74.6-26.1 30.1-51.9 81.1-51.9 132.8 0 7.7 1.3 15.5 1.9 17.8 3.2.6 8.4 1.3 13.6 1.3 43.8 0 98.3-29.5 127.9-67.5z"/></svg> App Store
                    </a>
                  </template>
                  <template v-if="project.playStore">
                    <a :href="project.playStore" target="_blank" class="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-3.5 h-3.5" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75 7.5 4.5M15 6.75l1.5-2.25M7.5 9.75h9M8.25 9.75v6.75m7.5-6.75v6.75M9.75 16.5h4.5a2.25 2.25 0 0 0 2.25-2.25V9.75H7.5v4.5a2.25 2.25 0 0 0 2.25 2.25Z" />
                      </svg>
                      Play Store
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
      <section class="py-24 bg-surface-container-low relative cv-auto" id="contact">
        <div class="max-w-7xl mx-auto px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 class="font-headline text-5xl font-extrabold mb-8 tracking-tight">Let's <span class="text-primary">Collaborate</span></h2>
              <p class="text-lg text-on-surface-variant mb-12 leading-relaxed">
                Have a complex architectural challenge or a project that needs a steady hand? I'm currently open to consulting and lead engineering roles.
              </p>
              <div class="space-y-6">
                <a href="mailto:ragilpratamaaa@gmail.com" class="flex items-center gap-6 group hover:translate-x-2 transition-transform duration-300">
                  <div class="w-14 h-14 rounded-xl bg-surface-container-lowest flex items-center justify-center shadow-sm text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-6 h-6" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6.75h-6A5.25 5.25 0 0 0 5.25 12v0A5.25 5.25 0 0 0 10.5 17.25h6a2.25 2.25 0 0 0 2.25-2.25V12A6.75 6.75 0 1 0 12 18.75" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Email</p>
                    <p class="text-lg font-bold">ragilpratamaaa@gmail.com</p>
                  </div>
                </a>
                <div class="flex items-center gap-6 group">
                  <div class="w-14 h-14 rounded-xl bg-surface-container-lowest flex items-center justify-center shadow-sm text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-6 h-6" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11Z" />
                      <circle cx="12" cy="10" r="2.25" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Location</p>
                    <p class="text-lg font-bold">Bogor, Indonesia</p>
                  </div>
                </div>
              </div>
              <div class="mt-12 w-full h-48 rounded-xl bg-surface-container-highest overflow-hidden relative shadow-inner">
                <NuxtImg format="webp" class="w-full h-full object-cover opacity-50 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUB7_qSH1VP9UxZUpDpQ3GjKwT859rdwqFKFTNhQ-PqQjpmwi7lJehG4MKSzN_HznWA1AbFg_SxO9OUhqs6KhfkVjsvFCTgYD8Ss-9O4HW8T-AtIjrRXuJdkLSSvVzTCToyNvcDaYjTAWATs-0XRPe8YSMe0nPCxwSDFsXHi3bRiNZxsxe2nS5RZVK0TxkmJsAlWXuy2WuMRSv8JSuvAw3xq6cppGTrUhUv7-lFQR5ZRpOWrYjdhYeA-hBlAsPatYZCa7ye_CURdZZ" alt="Map" loading="lazy" />
                <div class="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-primary" aria-hidden="true">
                    <path d="M12 2.75a7.25 7.25 0 0 0-7.25 7.25c0 5.22 5.44 10.34 6.41 11.2a1.25 1.25 0 0 0 1.68 0c.97-.86 6.41-5.98 6.41-11.2A7.25 7.25 0 0 0 12 2.75Zm0 9.75a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div class="bg-surface-container-lowest p-10 rounded-2xl shadow-[0_20px_40px_rgba(0,98,157,0.06)]">
              <form class="space-y-6" @submit.prevent="handleInquiry">
                <div class="space-y-2">
                  <label class="block text-sm font-bold text-on-surface-variant uppercase">Full Name</label>
                  <input v-model="form.name" class="w-full bg-surface-container-low border-0 rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline" placeholder="John Doe" type="text" required />
                </div>
                <div class="space-y-2">
                  <label class="block text-sm font-bold text-on-surface-variant uppercase">Work Email</label>
                  <input v-model="form.email" class="w-full bg-surface-container-low border-0 rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline" placeholder="john@company.com" type="email" required />
                </div>
                <div class="space-y-2">
                  <label class="block text-sm font-bold text-on-surface-variant uppercase">Project Brief</label>
                  <textarea v-model="form.message" class="w-full bg-surface-container-low border-0 rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline" placeholder="Tell me about your project needs..." rows="4" required></textarea>
                </div>
                
                <div v-if="showSuccess" class="p-3 bg-green-50 text-green-700 rounded-lg text-sm font-medium flex items-center gap-2 animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.5 12.5 2.25 2.25 4.75-4.75" />
                  </svg>
                  Inquiry sent successfully! I will contact you soon.
                </div>

                <button :disabled="isSubmitting" class="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3">
                  <span v-if="isSubmitting" class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  {{ isSubmitting ? 'Sending...' : 'Send Inquiry' }}
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
          <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank" class="text-slate-500 hover:text-blue-500 hover:translate-y-[-2px] transition-transform text-sm font-medium">
            {{ social.name }}
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
.portfolio-enter-active,
.portfolio-leave-active {
  transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1);
}
.portfolio-leave-active {
  position: absolute;
}
.portfolio-enter-from,
.portfolio-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(30px);
}
/* Ensure moving items are animated smoothly */
.portfolio-move {
  transition: transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
}

.cv-auto {
  content-visibility: auto;
  contain-intrinsic-size: 1px 1000px;
}

.hero-bg-layer {
  transition: transform 220ms ease-out;
  will-change: transform;
}

#hero {
  perspective: 1200px;
}

.hero-depth-wrap {
  transform-style: preserve-3d;
}

.hero-depth-plane {
  width: 100%;
  height: 100%;
  border-radius: 42px;
  border: 1px solid rgba(0, 98, 157, 0.22);
  background:
    linear-gradient(140deg, rgba(0, 163, 255, 0.18), rgba(0, 98, 157, 0.05) 58%, rgba(255, 255, 255, 0.04)),
    repeating-linear-gradient(
      90deg,
      rgba(0, 98, 157, 0.1) 0,
      rgba(0, 98, 157, 0.1) 1px,
      transparent 1px,
      transparent 36px
    ),
    repeating-linear-gradient(
      0deg,
      rgba(0, 98, 157, 0.08) 0,
      rgba(0, 98, 157, 0.08) 1px,
      transparent 1px,
      transparent 36px
    );
  box-shadow: 0 55px 110px rgba(0, 51, 90, 0.24), inset 0 0 40px rgba(255, 255, 255, 0.12);
  transform: rotateX(68deg) rotateZ(-10deg) translateZ(-70px);
  animation: hero-depth-float 7.4s ease-in-out infinite alternate;
  opacity: 0.8;
}

.hero-bg-top {
  animation: hero-bg-top-float 7.2s ease-in-out infinite alternate;
}

.hero-bg-bottom {
  animation: hero-bg-bottom-float 8.6s ease-in-out infinite alternate;
}

.hero-bg-center {
  animation: hero-bg-center-float 9.4s ease-in-out infinite alternate;
}

.hero-bg-interacting .hero-bg-layer {
  animation-play-state: paused;
}

@keyframes hero-bg-top-float {
  from { transform: translate3d(0, 0, 0) rotate(0deg); }
  to { transform: translate3d(20px, -14px, 0) rotate(4deg); }
}

@keyframes hero-bg-bottom-float {
  from { transform: translate3d(0, 0, 0) rotate(0deg); }
  to { transform: translate3d(-18px, 12px, 0) rotate(-3deg); }
}

@keyframes hero-bg-center-float {
  from { transform: translate3d(0, 0, 0) scale(1); }
  to { transform: translate3d(12px, -10px, 0) scale(1.04); }
}

@keyframes hero-depth-float {
  from {
    transform: rotateX(68deg) rotateZ(-10deg) translate3d(-10px, 0, -70px);
  }
  to {
    transform: rotateX(68deg) rotateZ(-8deg) translate3d(14px, -14px, -40px);
  }
}

.experience-card {
  opacity: 0;
  transform: translateY(18px) scale(0.98);
  filter: blur(2px);
}

.experience-visible .experience-card {
  animation: experience-reveal 620ms cubic-bezier(0.2, 0.7, 0.2, 1) forwards;
  animation-delay: var(--exp-delay, 0ms);
}

@keyframes experience-reveal {
  from {
    opacity: 0;
    transform: translateY(18px) scale(0.98);
    filter: blur(2px);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-bg-layer,
  .hero-depth-plane,
  .experience-card {
    opacity: 1;
    transform: none;
    filter: none;
    animation: none;
  }
}

@media (hover: none), (pointer: coarse) {
  .hero-bg-layer {
    transition: none;
    animation-duration: 12s;
  }

  .hero-depth-plane {
    animation-duration: 11s;
    opacity: 0.72;
  }
}
</style>
