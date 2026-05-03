<script setup>
const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Bank Central Asia (BCA) - Ocean',
    type: 'Full-time',
    period: 'Apr 2026 — Present',
    location: 'Jakarta, Indonesia',
    impact: 'Building Ocean by BCA, an integrated business ecosystem platform connecting 34+ million customers with banking, operational, and industry networks.',
    tech: ['Next.js', 'Micro Frontend', 'TypeScript', 'REST API'],
    points: [
      'Developed and maintained Ocean by BCA (ocean.bca.co.id), a comprehensive business ecosystem platform with integrated dashboard, product recommendations, and myEcosystem features.',
      'Implemented micro frontend architecture using Next.js to enable scalable, modular development across multiple business domains.',
      'Built real-time integrated dashboards displaying cash flow, transaction trends, and business analytics for data-driven decision making.',
      'Collaborated with cross-functional teams to deliver features supporting 99% digital transactions with 76% volume growth.'
    ],
    isCurrent: true
  },
  {
    role: 'Frontend Developer',
    company: 'AIA Indonesia',
    type: 'Full-time',
    period: 'Aug 2023 — Apr 2026',
    location: 'Jakarta, Indonesia',
    impact: 'Shipped reusable frontend architecture and performance-focused UI for insurance products serving millions of policyholders.',
    tech: ['Vue 3', 'Pinia', 'Vue Router', 'REST API'],
    points: [
      'Built and maintained customer-facing modules with Vue.js 2/3 and Pinia state patterns, delivering policy management, claims submission, and premium payment features for web and mobile web platforms.',
      'Converted design specs into responsive, accessible interfaces with consistent component standards, establishing a shared design system used across multiple product teams to reduce UI drift.',
      'Integrated REST APIs and improved delivery quality through cross-team collaboration with backend engineers and QA, reducing integration-related defects by enforcing contract-first development practices.'
    ]
  },
  {
    role: 'Backend Developer',
    company: 'Bank Central Asia (BCA) - OASE',
    type: 'Full-time',
    period: 'Feb 2023 — Jul 2023',
    location: 'Jakarta, Indonesia',
    impact: 'Engineered high-performance backend services for internal banking infrastructure handling secure transaction processing.',
    tech: ['Node.js', 'Express.js', 'MySQL', 'REST API'],
    points: [
      'Developed and maintained OASE, an internal banking application focused on secure data processing, supporting daily operations for thousands of internal users across BCA branches.',
      'Designed scalable RESTful APIs to facilitate seamless communication between banking modules — including transaction monitoring, reporting pipelines, and user management — with proper authentication and role-based access control.',
      'Optimized backend workflows, query execution plans, and database indexing strategies to ensure high availability and sub-second response times under heavy concurrent load.'
    ]
  },
  {
    role: 'Fullstack Developer',
    company: 'BKKBN Indonesia',
    type: 'Full-time',
    period: 'Jan 2020 — Feb 2023',
    location: 'Jakarta, Indonesia',
    impact: 'Delivered national-scale public service platforms serving family planning and population programs across Indonesia.',
    tech: ['Laravel', 'ReactJS', 'MySQL', 'Integration API'],
    points: [
      'Developed core services, admin dashboards, and role-based access control for the BKKBN Portal using Laravel, enabling regional teams to manage program data independently.',
      'Built RESTful API integrations connecting several internal BKKBN ecosystems — including family planning reporting, population data, and regional budget tracking — into a unified platform.',
      'Delivered and presented production-ready solutions to nationwide stakeholders, ensuring compliance with government data standards and accessibility requirements.',
      'Maintained and optimized MySQL databases handling large-scale population and program datasets, improving query performance for reporting modules.'
    ]
  },
  {
    role: 'Fullstack Developer',
    company: 'Kementerian ESDM',
    type: 'Full-time',
    period: 'Jun 2019 — Jan 2020',
    location: 'Jakarta, Indonesia',
    impact: 'Spearheaded the development of internal management systems and public-facing portals for mineral and coal governance.',
    tech: ['CodeIgniter', 'Laravel', 'Yii', 'PHP'],
    points: [
      'Built and deployed SIDARA and SUPEL applications for internal mineral and coal management using CodeIgniter and Laravel, enabling ministry staff to track licensing, production, and compliance data in real time.',
      'Developed and maintained the Minerba homepage as a public-facing portal, improving accessibility to ministry regulations, mineral data dashboards, and public announcements for citizens and industry stakeholders.',
      'Implemented robust backend logic and architectural patterns with Yii and Laravel frameworks, including multi-tier authentication, audit logging, and data validation for government compliance requirements.',
      'Designed normalized MySQL database schemas for mineral resource datasets, supporting complex reporting queries across regional mining operations nationwide.'
    ]
  },
  {
    role: 'Fullstack Developer',
    company: 'PT Dritama BrokerIndo',
    type: 'Full-time',
    period: 'Jan 2019 — Jun 2019',
    location: 'Jakarta, Indonesia',
    impact: 'Accelerated insurance onboarding workflows through payment gateway and multi-partner API integration.',
    tech: ['Lumen', 'ReactJS', 'Midtrans', 'MySQL'],
    points: [
      'Integrated Midtrans payment gateway into web and mobile insurance enrollment flows, handling policy purchases, premium calculations, and real-time payment confirmation.',
      'Connected external insurance provider APIs (Zurich, KB, Sinarmas, and others) to automate quote retrieval, policy issuance, and claims data exchange across multiple insurers.',
      'Developed RESTful APIs with Lumen (Laravel micro-framework) for backend orchestration and built interactive frontend modules with ReactJS for the customer-facing insurance portal.',
      'Designed and optimized MySQL schemas for policy, customer, and transaction data, ensuring data integrity across multi-provider insurance workflows.'
    ]
  },
  {
    role: 'Quality Assurance',
    company: 'Indonesia Smartcloud',
    type: 'Full-time',
    period: 'May 2018 — Dec 2018',
    location: 'Jakarta, Indonesia',
    impact: 'Improved release confidence and product stability through structured testing discipline and systematic defect reporting.',
    tech: ['QA Testing', 'Regression', 'Integration Test', 'UAT'],
    points: [
      'Executed black-box and regression test suites across web and mobile platforms before each release milestone, reducing post-release defect rates by catching issues early in the cycle.',
      'Prepared comprehensive test plans, test cases, and QA checklists for UAT and integration testing cycles, covering functional, edge-case, and cross-browser scenarios.',
      'Tracked, documented, and communicated defects with developers through structured reporting workflows — from reproduction steps to verification and closure — ensuring accountability and traceability.',
      'Contributed to process improvements by advocating for shift-left testing practices and maintaining a centralized knowledge base of recurring issues and their root causes.'
    ]
  }
];

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
  }, { threshold: 0.15 });

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
  <section :class="['py-24 bg-surface dark:bg-slate-950 cv-auto scroll-mt-40 relative overflow-hidden', { 'experience-visible': experienceVisible }]" id="experience">
    <div class="absolute inset-0 pointer-events-none section-texture section-texture-experience"></div>
    <div class="max-w-7xl mx-auto px-8 relative z-10">
      <div class="text-center mb-16">
        <h2 class="font-headline text-4xl font-bold mb-4 dark:text-white">Work Experience</h2>
        <p class="text-on-surface-variant dark:text-slate-400">A chronological journey of building real-world solutions across industries.</p>
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
                    <span v-if="exp.isCurrent" class="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold bg-primary text-on-primary">Current</span>
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
