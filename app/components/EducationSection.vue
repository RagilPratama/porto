<script setup>
const { t } = useI18n()
const localized = useLocalizedData()

const education = computed(() => {
  const items = localized.value.education.items
  return items.map((item, idx) => ({
    ...item,
    image: '/graduation.png',
    year: idx === 0 ? '2025' : '2018'
  }))
})
</script>

<template>
  <section class="py-24 scroll-mt-40 relative overflow-hidden" id="education">
    <div class="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
      <div class="text-center mb-12" data-animate="fade-up">
        <div class="inline-flex items-center gap-2 mb-4">
          <span
            class="bg-ink text-paper dark:bg-white dark:text-ink rounded-full px-2.5 py-0.5 font-display font-bold text-xs"
            >03</span
          >
          <span
            class="uppercase tracking-[0.25em] text-xs font-bold text-ink/50 dark:text-slate-400"
            >{{ t('nav.links.education') }}</span
          >
        </div>
        <h2
          class="font-display text-4xl md:text-5xl font-bold mb-2 tracking-tighter text-ink dark:text-white"
        >
          {{ t('education.title') }}
        </h2>
        <p class="text-ink/60 dark:text-slate-300 text-sm font-medium">
          {{ t('education.subtitle') }}
        </p>
        <div
          class="w-20 h-1.5 bg-primary-container border-2 border-ink rounded-full mx-auto mt-6"
        ></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article
          v-for="(edu, idx) in education"
          :key="idx"
          data-animate="fade-up"
          :data-delay="idx * 150"
          class="glass-panel nb-press rounded-3xl p-7"
        >
          <div class="flex flex-col md:flex-row md:items-start gap-5">
            <div
              class="w-16 h-16 rounded-2xl bg-white dark:bg-[#141414] flex items-center justify-center p-3 shrink-0 border-2 border-ink"
            >
              <NuxtImg
                format="webp"
                quality="75"
                width="128"
                height="128"
                sizes="64px"
                densities="x1 x2"
                :src="edu.image"
                :alt="edu.school"
                class="w-full h-full object-contain"
              />
            </div>

            <div class="flex-1">
              <h3
                class="text-lg md:text-xl font-display font-bold leading-tight text-ink dark:text-white mb-1 tracking-tight"
              >
                {{ edu.degree }}
              </h3>
              <p
                class="text-primary dark:text-primary-fixed-dim text-base md:text-lg font-bold mb-4"
              >
                {{ edu.school }}
              </p>

              <div class="flex flex-wrap items-center gap-2 mb-4">
                <span
                  class="inline-flex items-center gap-1.5 bg-primary-container text-ink px-3 py-1 rounded-full text-xs font-bold border-2 border-ink"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="w-3.5 h-3.5"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 3.75v2.5m7.5-2.5v2.5M4.5 9.5h15M6.75 5.75h10.5A2.25 2.25 0 0 1 19.5 8v9.25a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 17.25V8a2.25 2.25 0 0 1 2.25-2.25Z"
                    />
                  </svg>
                  {{ edu.period }}
                </span>
                <span
                  class="inline-flex items-center gap-1.5 bg-white dark:bg-[#1e1e1e] text-ink dark:text-slate-200 px-3 py-1 rounded-full text-xs font-bold border-2 border-ink"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="w-3.5 h-3.5"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m12 3.75 2.55 5.16 5.7.83-4.13 4.03.97 5.68L12 16.81l-5.1 2.66.97-5.68-4.13-4.03 5.7-.83L12 3.75Z"
                    />
                  </svg>
                  {{ edu.highlight }}
                </span>
              </div>

              <p class="text-ink/60 dark:text-slate-300 text-sm leading-relaxed font-medium">
                {{ edu.description }}
              </p>
            </div>
          </div>

          <div
            class="border-t-2 border-ink/10 dark:border-white/10 mt-6 pt-4 flex items-center justify-between"
          >
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-primary-container border-2 border-ink"></span>
              <span class="w-3 h-3 rounded-full bg-primary border-2 border-ink"></span>
              <span class="w-3 h-3 rounded-full bg-tertiary border-2 border-ink"></span>
            </div>
            <span class="font-display text-xl font-bold text-ink dark:text-white">{{
              edu.year
            }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
