<script setup>
const props = defineProps({
  to: { type: Number, required: true },
  suffix: { type: String, default: '' },
  duration: { type: Number, default: 1400 }
})

const el = ref(null)
const display = ref(0)
let io = null

const run = () => {
  const start = performance.now()
  const ease = (t) => 1 - Math.pow(1 - t, 3)
  const step = (now) => {
    const p = Math.min((now - start) / props.duration, 1)
    display.value = Math.round(ease(p) * props.to)
    if (p < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

onMounted(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) {
    display.value = props.to
    return
  }
  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          run()
          io?.disconnect()
          io = null
        }
      })
    },
    { threshold: 0.4 }
  )
  if (el.value) io.observe(el.value)
})

onBeforeUnmount(() => io?.disconnect())
</script>

<template>
  <span ref="el">{{ display }}{{ suffix }}</span>
</template>
