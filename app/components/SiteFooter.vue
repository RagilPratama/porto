<script setup>
defineProps({
  socials: { type: Array, required: true }
})

const { t } = useI18n()
</script>

<template>
  <footer
    data-animate="fade-up"
    class="bg-paper dark:bg-paper-dark border-t-2 border-ink w-full py-10 relative"
  >
    <div
      class="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6 sm:px-8 gap-6"
    >
      <p class="text-xs sm:text-sm text-ink/60 dark:text-slate-400 font-medium">
        {{ t('footer.copyright') }}
      </p>
      <div class="flex flex-wrap gap-3 justify-center">
        <a
          v-for="social in socials"
          :key="social.name"
          :href="social.url"
          target="_blank"
          class="glass-pill nb-press px-4 py-1.5 rounded-full text-xs font-bold text-ink dark:text-slate-200 hover:text-primary dark:hover:text-primary-fixed-dim"
        >
          {{ social.name }}
        </a>
      </div>
    </div>
  </footer>
</template>
