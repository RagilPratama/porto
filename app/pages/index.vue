<script setup>
const { navLinks, techStack, totalTechCount, socials } = useSiteData()
const { setupSectionObserver, stopSectionObserver } = useSectionNavigation()
const { initScrollAnimation, cleanup } = useScrollAnimation()
const scrollReady = inject('scrollReady', ref(true))

onMounted(() => {
  setupSectionObserver()

  if (scrollReady.value) {
    nextTick(() => initScrollAnimation())
  }

  watch(scrollReady, (ready) => {
    if (ready) {
      nextTick(() => initScrollAnimation())
    }
  })
})

onBeforeUnmount(() => {
  stopSectionObserver()
  cleanup()
})
</script>

<template>
  <div
    class="min-h-screen bg-surface dark:bg-slate-950 font-body text-on-surface dark:text-slate-200 transition-colors duration-500"
  >
    <SiteNavbar :nav-links="navLinks" />

    <main class="blueprint-bg">
      <HeroSection />
      <TechStackSection :tech-stack="techStack" :total-tech-count="totalTechCount" />
      <LazyExperienceSection />
      <EducationSection />
      <LazyPortfolioSection />
      <ContactSection />
    </main>

    <SiteFooter :socials="socials" />
  </div>
</template>
