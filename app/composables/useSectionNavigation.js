const activeSection = ref('hero')
let sectionObserver = null

export const useSectionNavigation = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (!el) return

    activeSection.value = id

    // Custom rAF smooth scroll so it works even when the OS has
    // "reduce motion" enabled (which disables native smooth scrolling).
    const navOffset = 72 // sticky navbar height + breathing room
    const startY = window.scrollY || window.pageYOffset
    const targetY = Math.max(0, el.getBoundingClientRect().top + startY - navOffset)
    const distance = targetY - startY

    if (Math.abs(distance) < 2) return

    const duration = 650
    const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
    let startTime = null

    const step = (now) => {
      if (startTime === null) startTime = now
      const progress = Math.min((now - startTime) / duration, 1)
      window.scrollTo(0, startY + distance * easeInOutCubic(progress))
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }

  const setupSectionObserver = () => {
    const sections = document.querySelectorAll('section[id]')
    sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id
          }
        })
      },
      { rootMargin: '-20% 0px -80% 0px' }
    )

    sections.forEach((sec) => sectionObserver?.observe(sec))
  }

  const stopSectionObserver = () => {
    sectionObserver?.disconnect()
    sectionObserver = null
  }

  return { activeSection, scrollTo, setupSectionObserver, stopSectionObserver }
}
