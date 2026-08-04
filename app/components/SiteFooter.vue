<script setup>
defineProps({
  socials: { type: Array, required: true }
});

const { t } = useI18n();
</script>

<template>
  <footer class="bg-slate-50 dark:bg-slate-900 w-full py-12 border-t border-slate-100 dark:border-slate-800 transition-colors">
    <div class="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-6 text-start">
      <div class="font-headline font-bold text-slate-900 dark:text-white text-xl">
        M. Ragil Pratama
      </div>
      <p class="text-sm text-slate-500 dark:text-slate-400">
        {{ t('footer.copyright') }}
      </p>
      <div class="flex gap-6">
        <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank" class="text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 hover:translate-y-[-2px] transition-transform text-sm font-medium">
          {{ social.name }}
        </a>
      </div>
    </div>
  </footer>
</template>
