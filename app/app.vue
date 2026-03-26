<template>
  <div class="scroll-smooth scroll-pt-20">
    <NuxtPage />
  </div>
</template>

<style>
.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
.glass-nav {
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
}
.blueprint-bg {
    background-image: radial-gradient(circle, #00629d11 1px, transparent 1px);
    background-size: 32px 32px;
}
@keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
}
.animate-float {
    animation: float 6s ease-in-out infinite;
}
.glass-card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.4);
}
</style>
