<template>
  <div class="scroll-smooth scroll-pt-20">
    <NuxtPage />
  </div>
</template>

<style>
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
    color: #0f172a;
}

.dark .glass-card {
    background: rgba(15, 23, 42, 0.75);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #f1f5f9;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}
</style>
