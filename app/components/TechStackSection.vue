<script setup>
defineProps({
  techStack: { type: Array, required: true },
  totalTechCount: { type: Number, required: true }
});
</script>

<template>
  <section class="py-24 bg-surface-container-low dark:bg-slate-900/50 overflow-hidden scroll-mt-40 relative" id="tech">
    <!-- Animated diagonal stripes background -->
    <div class="absolute inset-0 pointer-events-none tech-pattern-bg"></div>

    <div class="max-w-7xl mx-auto px-8 relative z-10">
      <div class="mb-16 text-center">
        <h2 class="font-headline text-4xl font-bold mb-4 dark:text-white">Technical Stack</h2>
        <p class="text-on-surface-variant dark:text-slate-400 max-w-2xl mx-auto">The blueprint of my development philosophy involves selecting the right tool for the specific architectural challenge.</p>
      </div>

      <!-- Unified Tech Grid with Animation -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        <template v-for="group in techStack" :key="group.group">
          <div
            v-for="(tech, idx) in group.items"
            :key="tech.name"
            class="group relative tech-card"
            :style="{ '--tech-delay': `${idx * 50}ms` }"
          >
            <!-- Card with glassmorphism effect -->
            <div class="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-primary/10 dark:border-slate-700/50 p-6 hover:shadow-2xl hover:scale-105 hover:border-primary/30 dark:hover:border-blue-500/50 transition-all duration-500 overflow-hidden">
              <!-- Animated gradient overlay on hover -->
              <div class="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/10 group-hover:to-primary/5 transition-all duration-500 rounded-2xl"></div>

              <!-- Icon -->
              <div class="relative z-10 flex flex-col items-center gap-3">
                <div class="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <NuxtImg
                    format="webp"
                    :src="tech.icon"
                    :alt="tech.name"
                    class="w-full h-full object-contain drop-shadow-md"
                  />
                </div>

                <!-- Tech Name -->
                <span class="text-xs md:text-sm font-bold text-on-surface dark:text-slate-200 text-center leading-tight group-hover:text-primary dark:group-hover:text-blue-400 transition-colors duration-300">
                  {{ tech.name }}
                </span>
              </div>

              <!-- Shine effect on hover -->
              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div class="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
              </div>
            </div>

            <!-- Floating badge for category -->
            <div class="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
              <span class="inline-flex items-center justify-center w-6 h-6 rounded-full text-[9px] font-bold shadow-lg" :class="group.group === 'frontend' ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'">
                {{ group.group === 'frontend' ? 'FE' : 'BE' }}
              </span>
            </div>
          </div>
        </template>
      </div>

      <!-- Stats Section -->
      <div class="mt-16 grid grid-cols-3 gap-6">
        <div class="text-center p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-primary/10 dark:border-slate-700/50">
          <div class="text-3xl md:text-4xl font-bold text-primary dark:text-blue-400 mb-2">{{ totalTechCount }}+</div>
          <div class="text-xs md:text-sm text-on-surface-variant dark:text-slate-400 font-semibold">Technologies</div>
        </div>
        <div class="text-center p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-primary/10 dark:border-slate-700/50">
          <div class="text-3xl md:text-4xl font-bold text-primary dark:text-blue-400 mb-2">7+</div>
          <div class="text-xs md:text-sm text-on-surface-variant dark:text-slate-400 font-semibold">Years Experience</div>
        </div>
        <div class="text-center p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-primary/10 dark:border-slate-700/50">
          <div class="text-3xl md:text-4xl font-bold text-primary dark:text-blue-400 mb-2">10+</div>
          <div class="text-xs md:text-sm text-on-surface-variant dark:text-slate-400 font-semibold">Projects Delivered</div>
        </div>
      </div>
    </div>
  </section>
</template>
