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
    position: relative;
    isolation: isolate;
    background-color: #f7f9fb;
    background-image:
        radial-gradient(circle at 12% 12%, rgba(0, 163, 255, 0.08), transparent 26%),
        radial-gradient(circle at 88% 18%, rgba(0, 98, 157, 0.06), transparent 30%),
        radial-gradient(circle at 50% 100%, rgba(0, 163, 255, 0.05), transparent 34%),
        radial-gradient(circle, #00629d11 1px, transparent 1px);
    background-size: auto, auto, auto, 32px 32px;
    background-position: center;
}

.blueprint-bg::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    background:
        linear-gradient(135deg, rgba(255, 255, 255, 0.18), transparent 35%),
        repeating-linear-gradient(90deg, rgba(0, 98, 157, 0.025) 0, rgba(0, 98, 157, 0.025) 1px, transparent 1px, transparent 24px);
    opacity: 0.55;
    mix-blend-mode: soft-light;
}

.dark .blueprint-bg {
    background-color: #020617;
    background-image:
        radial-gradient(circle at 12% 12%, rgba(56, 189, 248, 0.08), transparent 26%),
        radial-gradient(circle at 88% 18%, rgba(59, 130, 246, 0.06), transparent 30%),
        radial-gradient(circle at 50% 100%, rgba(15, 23, 42, 0.72), transparent 42%),
        radial-gradient(circle, rgba(148, 163, 184, 0.08) 1px, transparent 1px);
}

.dark .blueprint-bg::before {
    background:
        linear-gradient(135deg, rgba(15, 23, 42, 0.35), transparent 38%),
        repeating-linear-gradient(90deg, rgba(148, 163, 184, 0.03) 0, rgba(148, 163, 184, 0.03) 1px, transparent 1px, transparent 24px);
    opacity: 0.7;
    mix-blend-mode: screen;
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

.section-texture {
    opacity: 0.8;
    background-repeat: no-repeat;
    pointer-events: none;
    mix-blend-mode: multiply;
}

.dark .section-texture {
    opacity: 0.55;
    mix-blend-mode: screen;
}

.tech-pattern-bg,
.section-texture-tech {
    background-image:
        radial-gradient(circle at 18% 20%, rgba(0, 163, 255, 0.08), transparent 28%),
        radial-gradient(circle at 82% 12%, rgba(0, 98, 157, 0.06), transparent 24%),
        repeating-linear-gradient(135deg, rgba(0, 98, 157, 0.06) 0, rgba(0, 98, 157, 0.06) 1px, transparent 1px, transparent 22px);
}

.section-texture-experience {
    background-image:
        radial-gradient(circle at 14% 18%, rgba(0, 163, 255, 0.07), transparent 26%),
        radial-gradient(circle at 88% 82%, rgba(0, 98, 157, 0.05), transparent 24%),
        repeating-linear-gradient(90deg, rgba(0, 98, 157, 0.035) 0, rgba(0, 98, 157, 0.035) 1px, transparent 1px, transparent 28px);
}

.section-texture-education {
    background-image:
        radial-gradient(circle at 80% 18%, rgba(0, 163, 255, 0.06), transparent 24%),
        radial-gradient(circle at 18% 80%, rgba(0, 98, 157, 0.05), transparent 22%),
        repeating-linear-gradient(135deg, rgba(0, 98, 157, 0.03) 0, rgba(0, 98, 157, 0.03) 1px, transparent 1px, transparent 26px);
}

.section-texture-portfolio {
    background-image:
        radial-gradient(circle at 12% 14%, rgba(0, 163, 255, 0.07), transparent 24%),
        radial-gradient(circle at 88% 24%, rgba(0, 98, 157, 0.05), transparent 22%),
        repeating-linear-gradient(45deg, rgba(0, 98, 157, 0.03) 0, rgba(0, 98, 157, 0.03) 1px, transparent 1px, transparent 30px);
}

.section-texture-contact {
    background-image:
        radial-gradient(circle at 20% 18%, rgba(0, 163, 255, 0.07), transparent 24%),
        radial-gradient(circle at 82% 68%, rgba(0, 98, 157, 0.05), transparent 24%),
        repeating-linear-gradient(90deg, rgba(0, 98, 157, 0.03) 0, rgba(0, 98, 157, 0.03) 1px, transparent 1px, transparent 30px);
}

.dark .tech-pattern-bg,
.dark .section-texture-tech {
    background-image:
        radial-gradient(circle at 18% 20%, rgba(56, 189, 248, 0.12), transparent 28%),
        radial-gradient(circle at 82% 12%, rgba(59, 130, 246, 0.08), transparent 24%),
        repeating-linear-gradient(135deg, rgba(148, 163, 184, 0.07) 0, rgba(148, 163, 184, 0.07) 1px, transparent 1px, transparent 22px);
}

.dark .section-texture-experience {
    background-image:
        radial-gradient(circle at 14% 18%, rgba(56, 189, 248, 0.1), transparent 26%),
        radial-gradient(circle at 88% 82%, rgba(59, 130, 246, 0.08), transparent 24%),
        repeating-linear-gradient(90deg, rgba(148, 163, 184, 0.05) 0, rgba(148, 163, 184, 0.05) 1px, transparent 1px, transparent 28px);
}

.dark .section-texture-education {
    background-image:
        radial-gradient(circle at 80% 18%, rgba(56, 189, 248, 0.1), transparent 24%),
        radial-gradient(circle at 18% 80%, rgba(59, 130, 246, 0.07), transparent 22%),
        repeating-linear-gradient(135deg, rgba(148, 163, 184, 0.05) 0, rgba(148, 163, 184, 0.05) 1px, transparent 1px, transparent 26px);
}

.dark .section-texture-portfolio {
    background-image:
        radial-gradient(circle at 12% 14%, rgba(56, 189, 248, 0.1), transparent 24%),
        radial-gradient(circle at 88% 24%, rgba(59, 130, 246, 0.07), transparent 22%),
        repeating-linear-gradient(45deg, rgba(148, 163, 184, 0.05) 0, rgba(148, 163, 184, 0.05) 1px, transparent 1px, transparent 30px);
}

.dark .section-texture-contact {
    background-image:
        radial-gradient(circle at 20% 18%, rgba(56, 189, 248, 0.1), transparent 24%),
        radial-gradient(circle at 82% 68%, rgba(59, 130, 246, 0.07), transparent 24%),
        repeating-linear-gradient(90deg, rgba(148, 163, 184, 0.05) 0, rgba(148, 163, 184, 0.05) 1px, transparent 1px, transparent 30px);
}

.hero-seahorse-animation {
    overflow: hidden;
}

.hero-seahorse-wave {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.5), transparent 24%),
                radial-gradient(circle at 70% 15%, rgba(59, 130, 246, 0.4), transparent 22%),
                radial-gradient(circle at 40% 60%, rgba(59, 130, 246, 0.3), transparent 18%);
    mask-image: linear-gradient(180deg, rgba(255, 255, 255, 0.85), transparent 80%);
    animation: seahorseWave 12s linear infinite;
}

.hero-seahorse-svg {
    position: absolute;
    right: 4%;
    top: 12%;
    width: min(420px, 38vw);
    height: min(520px, 48vw);
    background-image: radial-gradient(circle at 20% 18%, rgba(56, 189, 248, 0.22), transparent 28%),
                      radial-gradient(circle at 72% 26%, rgba(59, 130, 246, 0.16), transparent 24%);
    filter: blur(0.6px);
    border-radius: 48% 52% 50% 50% / 35% 42% 55% 50%;
    transform: rotate(14deg);
    animation: seahorseTilt 10s ease-in-out infinite;
}

.hero-seahorse-svg::before,
.hero-seahorse-svg::after {
    content: '';
    position: absolute;
    border-radius: 999px;
    background: rgba(59, 130, 246, 0.14);
}

.hero-seahorse-svg::before {
    width: 160px;
    height: 160px;
    top: 18%;
    left: 12%;
    box-shadow: inset 0 0 80px rgba(56, 189, 248, 0.35), 0 0 0 1px rgba(59, 130, 246, 0.12);
}

.hero-seahorse-svg::after {
    width: 120px;
    height: 120px;
    bottom: 8%;
    right: 10%;
    box-shadow: inset 0 0 60px rgba(56, 189, 248, 0.22), 0 0 0 1px rgba(56, 189, 248, 0.10);
}

.hero-seahorse-bubble {
    position: absolute;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.18);
    box-shadow: 0 0 24px rgba(59, 130, 246, 0.12);
    animation: seahorseBubble 8s ease-in-out infinite;
}

.bubble-1 {
    width: 28px;
    height: 28px;
    top: 14%;
    right: 18%;
    animation-delay: 0s;
}

.bubble-2 {
    width: 38px;
    height: 38px;
    top: 44%;
    right: 22%;
    animation-delay: 1.2s;
}

.bubble-3 {
    width: 20px;
    height: 20px;
    top: 70%;
    right: 30%;
    animation-delay: 2.4s;
}

@keyframes seahorseTilt {
    0%, 100% { transform: translateY(0) rotate(14deg); }
    50% { transform: translateY(-12px) rotate(10deg); }
}

@keyframes seahorseBubble {
    0%, 100% { transform: translateY(0); opacity: 0.8; }
    50% { transform: translateY(-16px); opacity: 0.4; }
}

@keyframes seahorseWave {
    0% { transform: translateX(0); }
    100% { transform: translateX(-24px); }
}
</style>
