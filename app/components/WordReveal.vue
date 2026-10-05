<script setup>
const props = defineProps({
  text: { type: String, required: true },
  tag: { type: String, default: 'span' },
  stagger: { type: Number, default: 55 }
})

const root = ref(null)
const visible = ref(false)
let io = null

const words = computed(() => String(props.text).split(/\s+/).filter(Boolean))

onMounted(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) {
    visible.value = true
    return
  }
  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visible.value = true
          io?.disconnect()
          io = null
        }
      })
    },
    { threshold: 0.2 }
  )
  if (root.value) io.observe(root.value)
})

onBeforeUnmount(() => io?.disconnect())
</script>

<template>
  <component :is="tag" ref="root">
    <span
      v-for="(w, i) in words"
      :key="i + w"
      class="nb-word"
      :class="{ 'nb-word-in': visible }"
      :style="{ transitionDelay: (visible ? i * stagger : 0) + 'ms' }"
      >{{ w }}</span
    >
  </component>
</template>

<style scoped>
.nb-word {
  display: inline-block;
  margin-right: 0.25em;
  opacity: 0;
  transform: translateY(0.4em);
  transition:
    opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.nb-word:last-child {
  margin-right: 0;
}
.nb-word-in {
  opacity: 1;
  transform: none;
}
</style>
