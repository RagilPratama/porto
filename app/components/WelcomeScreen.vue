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
      class="fixed inset-0 z-[9999] bg-[#141414] flex items-center justify-center overflow-hidden"
    >
      <!-- Grid pattern overlay -->
      <div
        class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none"
      />

      <!-- Floating sticker blocks -->
      <div
        class="absolute top-[18%] left-[14%] w-14 h-14 rounded-xl bg-[#C8F94E] border-[3px] border-black rotate-12 animate-float pointer-events-none"
      />
      <div
        class="absolute bottom-[20%] right-[16%] w-12 h-12 rounded-full bg-[#6C3EF4] border-[3px] border-black -rotate-6 animate-float pointer-events-none"
        style="animation-delay: -2s"
      />

      <!-- Main content -->
      <div class="relative w-full mx-auto px-6 sm:px-8">
        <div class="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 class="font-display font-bold leading-[0.95]">
            <div class="mb-3 sm:mb-4">
              <span
                v-for="(word, i) in line1Words"
                :key="word"
                class="welcome-word inline-block px-1 sm:px-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tighter"
                :style="{ animationDelay: `${200 + i * 200}ms` }"
                >{{ word }}</span
              >
            </div>
            <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <span
                v-for="(word, i) in line2Words"
                :key="word"
                class="welcome-word welcome-word-up inline-block px-3 py-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black border-[3px] border-black rounded-xl tracking-tighter"
                :class="i === 0 ? 'bg-[#C8F94E] -rotate-1' : 'bg-[#6C3EF4] !text-white rotate-1'"
                :style="{ animationDelay: `${800 + i * 200}ms` }"
                >{{ word }}</span
              >
            </div>
          </h1>
        </div>

        <!-- CTA link -->
        <div class="welcome-cta text-center" style="animation-delay: 1200ms">
          <span
            class="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-none bg-white border-[3px] border-black nb-shadow-sm"
          >
            <svg
              class="w-4 h-4 sm:w-5 sm:h-5 text-[#6C3EF4]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
            <span class="text-sm sm:text-base md:text-lg font-bold text-black font-body">
              {{ displayedUrl }}<span class="animate-blink">|</span>
            </span>
          </span>
        </div>
      </div>
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
