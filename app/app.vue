<script setup>
const showWelcome = ref(true)
const showContent = ref(false)
const scrollReady = ref(false)

provide('scrollReady', scrollReady)

function onWelcomeComplete() {
  showContent.value = true
  nextTick(() => {
    showWelcome.value = false
    scrollReady.value = true
  })
}
</script>

<template>
  <div class="scroll-smooth scroll-pt-20">
    <!-- Welcome screen - always render on client, hidden via CSS on server -->
    <ClientOnly>
      <WelcomeScreen v-if="showWelcome" @complete="onWelcomeComplete" />
      <template #fallback>
        <div class="fixed inset-0 z-[9999] bg-[#141414]" />
      </template>
    </ClientOnly>

    <!-- Page content - hidden until welcome completes -->
    <div :style="showContent ? {} : { visibility: 'hidden', height: '100vh', overflow: 'hidden' }">
      <NuxtPage />
    </div>
  </div>
</template>
