<script setup>
defineProps({
  socials: { type: Array, required: true }
});

const { t } = useI18n();
</script>

<template>
  <footer class="bg-white/40 dark:bg-slate-950/40 backdrop-blur-2xl border-t border-white/50 dark:border-white/10 w-full py-12 transition-all relative">
    <div class="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/40 to-transparent"></div>
    <div class="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-6 text-start">
      <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
        {{ t('footer.copyright') }}
      </p>
      <div class="flex flex-wrap gap-3">
        <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank" class="glass-pill px-4 py-1.5 rounded-full text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:scale-105 transition-all shadow-sm">
          {{ social.name }}
        </a>
      </div>
    </div>
  </footer>
</template>
