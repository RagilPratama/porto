<script setup>
const activeSection = ref('hero');
const isMobileMenuOpen = ref(false);
const colorMode = useColorMode();
const navLinks = ['hero', 'tech', 'experience', 'education', 'portfolio', 'contact'];
const heroTitleTargets = ['Fullstack Developer', 'Frontend Developer', 'Backend Developer'];
const heroTitleTyped = ref('');
let heroTypingInterval = null;
let heroTypingTimeout = null;
let heroTypingIndex = 0;
let heroTypingTargetIndex = 0;

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};
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
const totalTechCount = techStack.reduce((acc, group) => acc + group.items.length, 0);

const education = [
  {
    degree: 'Bachelor Degree in Informatics Engineering',
    school: 'Universitas Indraprasta PGRI (UNINDRA)',
    image: '/graduation.png',
    period: 'Graduated: 2025',
    highlight: 'Jakarta, Indonesia',
    description: 'Focused on software engineering practices, web architecture, and applied fullstack development.',
    year: '2025',
    isRecent: true
  },
  {
    degree: 'Software Engineering Vocational Program',
    school: 'Vocational High School Wikrama',
    image: '/graduation.png',
    period: 'Graduated: 2018',
    highlight: 'Bogor, Indonesia',
    description: 'Built strong foundations in programming, quality assurance, and project collaboration.',
    year: '2018'
  }
];

const socials = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ragil-pratama-824351145/', icon: 'linkedin' },
  { name: 'GitHub', url: 'https://github.com/RagilPratama', icon: 'github' },
  { name: 'Instagram', url: 'https://www.instagram.com/rglprtm/', icon: 'instagram' },
  { name: 'Email', url: 'mailto:ragilpratamaaa@gmail.com', icon: 'email' }
];
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

onMounted(() => {
  const startHeroTyping = () => {
    const activeTitle = heroTitleTargets[heroTypingTargetIndex];
    heroTypingInterval = window.setInterval(() => {
      if (heroTypingIndex < activeTitle.length) {
        heroTitleTyped.value += activeTitle.charAt(heroTypingIndex);
        heroTypingIndex += 1;
        return;
      }

      window.clearInterval(heroTypingInterval);
      heroTypingInterval = null;

      heroTypingTimeout = window.setTimeout(() => {
        heroTitleTyped.value = '';
        heroTypingIndex = 0;
        heroTypingTargetIndex = (heroTypingTargetIndex + 1) % heroTitleTargets.length;
        startHeroTyping();
      }, 1400);
    }, 75);
  };

  startHeroTyping();
  supportsHeroBg3d.value = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  // Defer non-critical observer work to keep the initial paint path lighter.
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => {
      setupSectionObserver();
    }, { timeout: 1200 });
    return;
  }

  setTimeout(() => {
    setupSectionObserver();
  }, 200);
});

onBeforeUnmount(() => {
  if (heroTypingInterval) window.clearInterval(heroTypingInterval);
  if (heroTypingTimeout) window.clearTimeout(heroTypingTimeout);
  sectionObserver?.disconnect();
  sectionObserver = null;
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

const errors = reactive({
  name: '',
  email: '',
  message: ''
});

const isSubmitting = ref(false);
const showSuccess = ref(false);
const formTouched = ref(false);
const isShaking = ref(false);

const isFormValid = computed(() => {
  return form.name.trim() && 
         /^\S+@\S+\.\S+$/.test(form.email) && 
         form.message.trim();
});

const validateField = (field) => {
  if (field === 'name') {
    errors.name = form.name.trim() ? '' : 'Full name is required';
  } else if (field === 'email') {
    if (!form.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      errors.email = 'Please enter a valid email address';
    } else {
      errors.email = '';
    }
  } else if (field === 'message') {
    errors.message = form.message.trim() ? '' : 'Message cannot be empty';
  }
};

const handleInquiry = async () => {
  formTouched.value = true;
  
  // Final validation before sending
  validateField('name');
  validateField('email');
  validateField('message');

  if (!isFormValid.value) {
    isShaking.value = true;
    alert('Please fill out all fields correctly before sending.');
    setTimeout(() => { isShaking.value = false; }, 500);
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
  <div class="min-h-screen bg-surface dark:bg-slate-950 font-body text-on-surface dark:text-slate-200 transition-colors duration-500">
    <!-- Navbar -->
    <nav class="sticky top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-[0_20px_40px_rgba(0,163,255,0.06)] border-b border-slate-100 dark:border-slate-800 transition-all">
      <div class="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
        <div class="text-xl sm:text-2xl font-bold tracking-tighter text-slate-900 dark:text-white font-headline transition-all">
          <span class="hidden sm:inline">M. Ragil Pratama </span>
        </div>
        <div class="hidden md:flex items-center gap-8 font-headline font-semibold tracking-tight">
          <a v-for="link in navLinks" 
             :key="link"
             @click.prevent="scrollTo(link)"
             href="#"
             :class="[
               'capitalize transition-all duration-300',
               activeSection === link ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-1' : 'text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-300'
             ]">
            {{ link === 'tech' ? 'Tech Stack' : link }}
          </a>
        </div>
        <div class="flex items-center gap-4">
          <!-- Theme Switcher -->
          <button 
            @click="toggleColorMode"
            class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:ring-2 hover:ring-primary/30 transition-all duration-300 group"
            aria-label="Toggle theme"
          >
            <client-only>
              <svg v-if="colorMode.value === 'dark'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5 group-hover:rotate-12 transition-transform">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5 group-hover:-rotate-12 transition-transform">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            </client-only>
          </button>

          <a @click.prevent="scrollTo('contact')" href="#" class="inline-block bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2 rounded-md font-semibold hover:opacity-90 active:scale-95 transition-all shadow-sm text-sm sm:text-base">
            Hire Me
          </a>

          <!-- Mobile Menu Toggle -->
          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu Overlay -->
      <transition 
        enter-active-class="transition duration-300 ease-out" 
        enter-from-class="transform -translate-y-4 opacity-0" 
        enter-to-class="transform translate-y-0 opacity-100" 
        leave-active-class="transition duration-200 ease-in" 
        leave-from-class="transform translate-y-0 opacity-100" 
        leave-to-class="transform -translate-y-4 opacity-0"
      >
        <div v-if="isMobileMenuOpen" class="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 shadow-xl z-40 overflow-hidden">
          <div class="flex flex-col p-4 gap-2">
          <a v-for="link in navLinks" 
               :key="`mobile-${link}`"
               @click.prevent="scrollTo(link); isMobileMenuOpen = false"
               href="#"
               :class="[
                 'px-4 py-3 rounded-xl transition-all font-semibold',
                 activeSection === link ? 'bg-primary/10 text-primary' : 'text-slate-600 dark:text-slate-400'
               ]">
              {{ link === 'tech' ? 'Tech Stack' : link }}
            </a>
            <button @click="scrollTo('contact'); isMobileMenuOpen = false" class="mt-2 w-full bg-primary text-white py-3 rounded-xl font-bold shadow-lg">
              Hire Me
            </button>
          </div>
        </div>
      </transition>
    </nav>

    <main class="blueprint-bg">
      <!-- Hero Section -->
      <section :class="['relative overflow-hidden pt-24 pb-20 md:pt-20 md:pb-32 scroll-mt-40', { 'hero-bg-interacting': isHeroBgInteracting }]" id="hero" @mousemove="handleHeroBgMove" @mouseleave="resetHeroBgMove">
        <div class="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 hero-bg-layer hero-bg-top" :style="heroBgTopStyle"></div>
        <div class="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary-container/20 rounded-full blur-[100px] -z-10 hero-bg-layer hero-bg-bottom" :style="heroBgBottomStyle"></div>
        <div class="absolute inset-x-[-10%] top-[14%] h-[72%] -z-10 pointer-events-none hero-depth-wrap">
          <div class="hero-depth-plane"></div>
        </div>
        <div class="hero-seahorse-wave absolute inset-0 -z-5 pointer-events-none"></div>
        <div class="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div class="lg:col-span-7 z-10 text-center lg:text-left">
            <span class="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-wider mb-6">
              Introduction
            </span>
            <h1 class="font-sans md:font-headline text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface dark:text-white leading-[1.1] mb-8">
              Hi, I'm Ragil Pratama <br/>
              <span class="block mt-2 text-3xl sm:text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-primary transition-all duration-300">{{ heroTitleTyped }}<span class="animate-pulse">|</span></span>
            </h1>
            <p class="text-lg text-on-surface-variant dark:text-slate-400 max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0">
              Fullstack developer focused on scalable web architecture, clean API integration, and maintainable code that supports fast product delivery.
            </p>
            <div class="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button @click="scrollTo('contact')" class="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-md font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95">
                Start Collaboration
              </button>
              <button @click="scrollTo('experience')" class="bg-surface-container-lowest text-primary border border-outline-variant/30 px-8 py-4 rounded-md font-bold text-lg hover:bg-surface-bright transition-all">
                View Experience
              </button>
            </div>
          </div>
          <div class="lg:col-span-5 relative">
            <div class="relative w-full aspect-square flex items-center justify-center">
              <div class="absolute inset-0 border-[1px] border-primary/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div class="absolute inset-4 border-[1px] border-primary/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              
              <div class="absolute top-4 -right-4 glass-card px-4 py-3 rounded-xl shadow-xl z-30 animate-float">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-primary/10 dark:bg-blue-500/20 flex items-center justify-center text-primary dark:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-4 h-4" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 21 12l-3.75 5.25M6.75 6.75 3 12l3.75 5.25M14.25 4.5 9.75 19.5" />
                    </svg>
                  </div>
                  <span class="text-xs font-bold tracking-tight">Frontend Dev</span>
                </div>
              </div>
              <div class="absolute bottom-20 -left-8 glass-card px-4 py-3 rounded-xl shadow-xl z-30 animate-float" style="animation-delay: -2s;">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-primary/10 dark:bg-blue-500/20 flex items-center justify-center text-primary dark:text-blue-400">
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
                <div class="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-surface-container-high border-4 border-white dark:border-slate-700/60">
                  <NuxtImg
                    format="webp"
                    quality="70"
                    fetchpriority="high"
                    loading="eager"
                    width="504"
                    height="672"
                    sizes="(max-width: 768px) 78vw, (max-width: 1280px) 36vw, 504px"
                    densities="x1 x2"
                    src="/profile.jpg"
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
      <section class="py-24 bg-surface-container-low dark:bg-slate-900/50 overflow-hidden cv-auto scroll-mt-40 relative" id="tech">
        <!-- Animated diagonal stripes background -->
        <div class="absolute inset-0 pointer-events-none tech-pattern-bg"></div>
        
        <div class="max-w-7xl mx-auto px-8 relative z-10">
          <div class="mb-16 text-center">
            <h2 class="font-headline text-4xl font-bold mb-4 dark:text-white">Technical Stack</h2>
            <p class="text-on-surface-variant dark:text-slate-400 max-w-2xl mx-auto">The blueprint of my development philosophy involves selecting the right tool for the specific architectural challenge.</p>
          </div>
          
          <!-- Unified Tech Grid with Animation -->
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            <template v-for="group in techStack" :key="group.group">
              <div 
                v-for="(tech, idx) in group.items" 
                :key="tech.name" 
                class="group relative tech-card"
                :style="{ '--tech-delay': `${idx * 50}ms` }"
              >
                <!-- Card with glassmorphism effect -->
                <div class="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-primary/10 dark:border-slate-700/50 p-6 hover:shadow-2xl hover:scale-105 hover:border-primary/30 dark:hover:border-blue-500/50 transition-all duration-500 overflow-hidden">
                  <!-- Animated gradient overlay on hover -->
                  <div class="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/10 group-hover:to-primary/5 transition-all duration-500 rounded-2xl"></div>
                  
                  <!-- Icon -->
                  <div class="relative z-10 flex flex-col items-center gap-3">
                    <div class="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <NuxtImg 
                        format="webp" 
                        :src="tech.icon" 
                        :alt="tech.name" 
                        class="w-full h-full object-contain drop-shadow-md" 
                      />
                    </div>
                    
                    <!-- Tech Name -->
                    <span class="text-xs md:text-sm font-bold text-on-surface dark:text-slate-200 text-center leading-tight group-hover:text-primary dark:group-hover:text-blue-400 transition-colors duration-300">
                      {{ tech.name }}
                    </span>
                  </div>
                  
                  <!-- Shine effect on hover -->
                  <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div class="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
                  </div>
                </div>
                
                <!-- Floating badge for category -->
                <div class="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                  <span class="inline-flex items-center justify-center w-6 h-6 rounded-full text-[9px] font-bold shadow-lg" :class="group.group === 'frontend' ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'">
                    {{ group.group === 'frontend' ? 'FE' : 'BE' }}
                  </span>
                </div>
              </div>
            </template>
          </div>
          
          <!-- Stats Section -->
          <div class="mt-16 grid grid-cols-3 gap-6">
            <div class="text-center p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-primary/10 dark:border-slate-700/50">
              <div class="text-3xl md:text-4xl font-bold text-primary dark:text-blue-400 mb-2">{{ totalTechCount }}+</div>
              <div class="text-xs md:text-sm text-on-surface-variant dark:text-slate-400 font-semibold">Technologies</div>
            </div>
            <div class="text-center p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-primary/10 dark:border-slate-700/50">
              <div class="text-3xl md:text-4xl font-bold text-primary dark:text-blue-400 mb-2">7+</div>
              <div class="text-xs md:text-sm text-on-surface-variant dark:text-slate-400 font-semibold">Years Experience</div>
            </div>
            <div class="text-center p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-primary/10 dark:border-slate-700/50">
              <div class="text-3xl md:text-4xl font-bold text-primary dark:text-blue-400 mb-2">10+</div>
              <div class="text-xs md:text-sm text-on-surface-variant dark:text-slate-400 font-semibold">Projects Delivered</div>
            </div>
          </div>
        </div>
      </section>

      <LazyExperienceSection />

      <!-- Education Section -->
      <section class="py-24 bg-surface-container-low dark:bg-slate-900/50 cv-auto scroll-mt-40 relative overflow-hidden" id="education">
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

      <LazyPortfolioSection />

      <!-- Let's Collaborate Section -->
      <section class="py-24 bg-surface-container-low dark:bg-slate-900/50 relative overflow-hidden cv-auto scroll-mt-40" id="contact">
        <div class="absolute inset-0 pointer-events-none section-texture section-texture-contact"></div>
        <div class="max-w-7xl mx-auto px-8 relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div class="text-center lg:text-left">
              <h2 class="font-headline text-4xl sm:text-5xl font-extrabold mb-8 tracking-tight dark:text-white">Let's <span class="text-primary">Collaborate</span></h2>
              <p class="text-lg text-on-surface-variant dark:text-slate-400 mb-12 leading-relaxed">
                Have a complex architectural challenge or a project that needs a steady hand? I'm currently open to consulting and lead engineering roles.
              </p>
              <div class="space-y-6">
                <a href="mailto:ragilpratamaaa@gmail.com" class="flex items-center gap-6 group hover:translate-x-2 transition-transform duration-300">
                  <div class="w-14 h-14 rounded-xl bg-surface-container-lowest dark:bg-slate-800 flex items-center justify-center shadow-sm text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-6 h-6" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6.75h-6A5.25 5.25 0 0 0 5.25 12v0A5.25 5.25 0 0 0 10.5 17.25h6a2.25 2.25 0 0 0 2.25-2.25V12A6.75 6.75 0 1 0 12 18.75" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Email</p>
                    <p class="text-sm sm:text-lg font-bold">ragilpratamaaa@gmail.com</p>
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
            <div :class="['bg-surface-container-lowest dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-outline-variant/30 dark:border-slate-800 transition-all', { 'animate-shake border-red-500/50 shadow-red-500/10': isShaking }]">
              <form @submit.prevent="handleInquiry" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-2 relative">
                    <label class="text-sm font-bold uppercase tracking-widest text-on-surface-variant dark:text-slate-400 ml-1 transition-colors">Full Name <span class="text-red-500">*</span></label>
                    <div class="relative">
                      <input v-model="form.name" @input="validateField('name')" @blur="validateField('name')" type="text" placeholder="John Doe" :class="['w-full bg-surface dark:bg-slate-800 border-2 rounded-xl p-4 pr-12 focus:ring-2 focus:ring-primary/30 outline-none transition-all dark:text-white', errors.name ? 'border-red-400/50 ring-2 ring-red-400/10' : 'border-transparent']" required>
                      <div v-if="form.name.trim() && !errors.name" class="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500 animate-in zoom-in duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                          <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p v-if="errors.name" class="text-xs text-red-500 ml-1 font-medium">{{ errors.name }}</p>
                  </div>
                  <div class="space-y-2 relative">
                    <label class="text-sm font-bold uppercase tracking-widest text-on-surface-variant dark:text-slate-400 ml-1 transition-colors">Email <span class="text-red-500">*</span></label>
                    <div class="relative">
                      <input v-model="form.email" @input="validateField('email')" @blur="validateField('email')" type="email" placeholder="john@example.com" :class="['w-full bg-surface dark:bg-slate-800 border-2 rounded-xl p-4 pr-12 focus:ring-2 focus:ring-primary/30 outline-none transition-all dark:text-white', errors.email ? 'border-red-400/50 ring-2 ring-red-400/10' : 'border-transparent']" required>
                      <div v-if="form.email.trim() && !errors.email" class="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500 animate-in zoom-in duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                          <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p v-if="errors.email" class="text-xs text-red-500 ml-1 font-medium">{{ errors.email }}</p>
                  </div>
                </div>
                <div class="space-y-2">
                  <label class="text-sm font-bold uppercase tracking-widest text-on-surface-variant dark:text-slate-400 ml-1 transition-colors">Message <span class="text-red-500">*</span></label>
                  <div class="relative">
                    <textarea v-model="form.message" @input="validateField('message')" @blur="validateField('message')" rows="5" placeholder="Tell me about your project..." :class="['w-full bg-surface dark:bg-slate-800 border-2 rounded-xl p-4 pr-12 focus:ring-2 focus:ring-primary/30 outline-none transition-all dark:text-white', errors.message ? 'border-red-400/50 ring-2 ring-red-400/10' : 'border-transparent']" required></textarea>
                    <div v-if="form.message.trim() && !errors.message" class="absolute right-4 top-4 text-emerald-500 animate-in zoom-in duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p v-if="errors.message" class="text-xs text-red-500 ml-1 font-medium">{{ errors.message }}</p>
                </div>
                
                <div v-if="showSuccess" class="p-3 bg-green-50 text-green-700 rounded-lg text-sm font-medium flex items-center gap-2 animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.5 12.5 2.25 2.25 4.75-4.75" />
                  </svg>
                  Inquiry sent successfully! I will contact you soon.
                </div>

                <div v-if="!isFormValid && formTouched" class="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 rounded-xl space-y-2 animate-shake">
                  <p class="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">Required Fields:</p>
                  <ul class="text-xs text-red-500 dark:text-red-400 font-medium list-disc ml-4">
                    <li v-if="!form.name.trim()">Full name is missing</li>
                    <li v-if="!form.email.trim()">Email address is missing</li>
                    <li v-if="form.email.trim() && !/^\S+@\S+\.\S+$/.test(form.email)">Email format is invalid</li>
                    <li v-if="!form.message.trim()">Message cannot be empty</li>
                  </ul>
                </div>

                <button 
                  :disabled="isSubmitting" 
                  class="w-full py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-primary-container text-on-primary">
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
    <footer class="bg-slate-50 dark:bg-slate-900 w-full py-12 border-t border-slate-100 dark:border-slate-800 transition-colors">
      <div class="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-6 text-start">
        <div class="font-headline font-bold text-slate-900 dark:text-white text-xl">
          M. Ragil Pratama 
        </div>
        <p class="text-sm text-slate-500 dark:text-slate-400">
          © 2026 M. Ragil Pratama . Built with precision.
        </p>
        <div class="flex gap-6">
          <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank" class="text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 hover:translate-y-[-2px] transition-transform text-sm font-medium">
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

.animate-shake {
  animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
}

@keyframes shake {
  10%, 90% { transform: translate3d(-1px, 0, 0); }
  20%, 80% { transform: translate3d(2px, 0, 0); }
  30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
  40%, 60% { transform: translate3d(4px, 0, 0); }
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
  .hero-seahorse-wave,
  .hero-seahorse-svg,
  .hero-seahorse-bubble,
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

/* Tech card entrance animation */
.tech-card {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
  animation: tech-card-reveal 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  animation-delay: var(--tech-delay, 0ms);
}

@keyframes tech-card-reveal {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

</style>
