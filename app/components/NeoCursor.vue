<script setup>
const cursor = ref(null)
const enabled = ref(false)
let raf = null
const mouse = { x: -100, y: -100 }
const cur = { x: -100, y: -100 }
let hovering = false
let active = false
let currentMag = null

const isInteractive = (t) =>
  t && t.closest && t.closest('a, button, [data-magnetic], [role="button"]')

function onMove(e) {
  mouse.x = e.clientX
  mouse.y = e.clientY

  // Magnetic pull for [data-magnetic] elements
  const mag = e.target.closest ? e.target.closest('[data-magnetic]') : null
  if (mag !== currentMag) {
    if (currentMag) currentMag.style.transform = ''
    currentMag = mag
  }
  if (mag) {
    const r = mag.getBoundingClientRect()
    const dx = e.clientX - (r.left + r.width / 2)
    const dy = e.clientY - (r.top + r.height / 2)
    mag.style.transform = `translate(${dx * 0.28}px, ${dy * 0.28}px)`
  }

  hovering = !!isInteractive(e.target)
}

function onDown() {
  active = true
}
function onUp() {
  active = false
}

function render() {
  cur.x += (mouse.x - cur.x) * 0.22
  cur.y += (mouse.y - cur.y) * 0.22
  if (cursor.value) {
    const scale = (active ? 0.75 : 1) * (hovering ? 1.7 : 1)
    cursor.value.style.transform = `translate3d(${cur.x}px, ${cur.y}px, 0) translate(-50%, -50%) rotate(45deg) scale(${scale})`
    cursor.value.classList.toggle('nb-cursor-hover', hovering)
  }
  raf = requestAnimationFrame(render)
}

onMounted(() => {
  // Enable on precise-pointer (desktop) devices only. We intentionally do
  // NOT gate on reduced-motion here — the cursor was explicitly requested,
  // and the movement is minimal/essential rather than decorative.
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  if (!fine) return

  enabled.value = true
  document.documentElement.classList.add('nb-cursor-on')
  window.addEventListener('mousemove', onMove, { passive: true })
  window.addEventListener('mousedown', onDown)
  window.addEventListener('mouseup', onUp)
  render()
})

onBeforeUnmount(() => {
  if (raf) cancelAnimationFrame(raf)
  window.removeEventListener('mousemove', onMove)
  window.removeEventListener('mousedown', onDown)
  window.removeEventListener('mouseup', onUp)
  document.documentElement.classList.remove('nb-cursor-on')
  if (currentMag) currentMag.style.transform = ''
})
</script>

<template>
  <div v-if="enabled" ref="cursor" class="nb-cursor" aria-hidden="true"></div>
</template>

<style scoped>
.nb-cursor {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  width: 15px;
  height: 15px;
  border: 2px solid var(--nb-ink);
  background: transparent;
  pointer-events: none;
  transition:
    background-color 0.15s ease,
    width 0.15s ease,
    height 0.15s ease;
}
.nb-cursor-hover {
  background: var(--nb-lime);
}
</style>
