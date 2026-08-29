export function useScrollAnimation() {
  let observer = null
  let mutationObserver = null

  const observeElements = () => {
    if (!observer) return
    document.querySelectorAll('[data-animate]:not(.is-observed)').forEach((el) => {
      el.classList.add('is-observed')
      observer.observe(el)
    })
  }

  const initScrollAnimation = () => {
    if (typeof window === 'undefined') return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            const delay = el.dataset.delay || '0'
            setTimeout(() => {
              el.classList.add('is-visible')
            }, Number(delay))
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.01, rootMargin: '50px 0px 0px 0px' }
    )

    observeElements()

    mutationObserver = new MutationObserver(() => {
      observeElements()
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    })

    setTimeout(() => {
      document.querySelectorAll('[data-animate]:not(.is-visible)').forEach((el) => {
        el.classList.add('is-visible')
      })
    }, 2000)
  }

  const cleanup = () => {
    observer?.disconnect()
    mutationObserver?.disconnect()
    observer = null
    mutationObserver = null
  }

  return { initScrollAnimation, cleanup }
}
