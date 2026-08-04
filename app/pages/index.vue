<script setup>
const { navLinks, techStack, totalTechCount, socials } = useSiteData();
const { setupSectionObserver, stopSectionObserver } = useSectionNavigation();

onMounted(() => {
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
  stopSectionObserver();
});
</script>

<template>
  <div class="min-h-screen bg-surface dark:bg-slate-950 font-body text-on-surface dark:text-slate-200 transition-colors duration-500">
    <SiteNavbar :nav-links="navLinks" />

    <main class="blueprint-bg">
      <HeroSection />
      <TechStackSection :tech-stack="techStack" :total-tech-count="totalTechCount" />
      <LazyExperienceSection />
      <EducationSection />
      <LazyPortfolioSection />
      <TerminalSection :tech-stack="techStack" />
      <ContactSection />
    </main>

    <SiteFooter :socials="socials" />
  </div>
</template>
