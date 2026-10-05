<script setup>
const progress = ref(0)

const onScroll = () => {
  const h = document.documentElement
  const max = h.scrollHeight - h.clientHeight
  progress.value = max > 0 ? Math.min(100, (h.scrollTop / max) * 100) : 0
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
})
</script>

<template>
  <div class="fixed top-0 left-0 right-0 z-[60] h-1.5 pointer-events-none">
    <div
      class="h-full bg-primary border-b-[3px] border-ink"
      :style="{ width: progress + '%' }"
    ></div>
  </div>
</template>
