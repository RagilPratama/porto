const activeSection = ref('hero');
let sectionObserver = null;

export const useSectionNavigation = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      activeSection.value = id;
    }
  };

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

  const stopSectionObserver = () => {
    sectionObserver?.disconnect();
    sectionObserver = null;
  };

  return { activeSection, scrollTo, setupSectionObserver, stopSectionObserver };
};
