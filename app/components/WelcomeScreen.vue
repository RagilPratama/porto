<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['complete'])

const isVisible = ref(false)
const isExiting = ref(false)
const displayedUrl = ref('')
const urlText = 'ragilpratama.site'

const line1Words = ['Welcome', 'To', 'My']
const line2Words = ['Portfolio', 'Website']

onMounted(() => {
  requestAnimationFrame(() => {
    isVisible.value = true
  })

  let i = 0
  const interval = setInterval(() => {
    if (i <= urlText.length) {
      displayedUrl.value = urlText.slice(0, i)
      i++
    } else {
      clearInterval(interval)
    }
  }, 100)

  setTimeout(() => {
    isExiting.value = true
  }, 3400)

  setTimeout(() => {
    emit('complete')
  }, 4400)
})
</script>

<template>
  <Transition name="welcome-screen">
    <div
      v-if="isVisible && !isExiting"
      class="fixed inset-0 z-[9999] bg-[#030014] flex items-center justify-center overflow-hidden"
    >
      <!-- Ambient background effects -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute inset-0 bg-gradient-to-r from-[#00629d]/20 to-[#00a3ff]/20 blur-2xl sm:blur-3xl animate-pulse" />
        <div class="absolute inset-0 bg-gradient-to-tr from-[#00629d]/10 via-transparent to-[#00a3ff]/10 blur-xl sm:blur-2xl animate-float" />
      </div>

      <!-- Main content -->
      <div class="relative w-full mx-auto px-6 sm:px-8">
        <!-- Heading -->
        <div class="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 class="font-bold font-headline leading-tight">
            <div class="mb-2 sm:mb-4">
              <span
                v-for="(word, i) in line1Words"
                :key="word"
                class="welcome-word inline-block px-1 sm:px-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent"
                :style="{ animationDelay: `${200 + i * 200}ms` }"
              >{{ word }}</span>
            </div>
            <div>
              <span
                v-for="(word, i) in line2Words"
                :key="word"
                class="welcome-word welcome-word-up inline-block px-1 sm:px-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-[#00629d] to-[#00a3ff] bg-clip-text text-transparent"
                :style="{ animationDelay: `${800 + i * 200}ms` }"
              >{{ word }}</span>
            </div>
          </h1>
        </div>

        <!-- CTA link -->
        <div
          class="welcome-cta text-center"
          style="animation-delay: 1200ms"
        >
          <span class="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full relative group hover:scale-105 transition-transform duration-300">
            <div class="absolute inset-0 bg-gradient-to-r from-[#00629d]/20 to-[#00a3ff]/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300" />
            <div class="relative flex items-center gap-2 text-sm sm:text-base md:text-lg lg:text-2xl font-body">
              <svg class="w-4 h-4 sm:w-5 sm:h-5 text-[#00a3ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              <span class="bg-gradient-to-r from-[#00629d] to-[#00a3ff] bg-clip-text text-transparent">
                {{ displayedUrl }}<span class="animate-blink">|</span>
              </span>
            </div>
          </span>
        </div>
      </div>

      <!-- Grid pattern overlay -->
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-50" />
    </div>
  </Transition>
</template>

<style scoped>
.welcome-word {
  opacity: 0;
  animation: welcome-fade-right 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.welcome-word-up {
  animation-name: welcome-fade-up;
}

.welcome-cta {
  opacity: 0;
  animation: welcome-fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.welcome-screen-leave-active {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.welcome-screen-leave-to {
  opacity: 0;
  transform: scale(1.1);
  filter: blur(10px);
}
</style>
