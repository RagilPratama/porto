<script setup>
defineProps({
  techStack: { type: Array, required: true }
});

const activeTerminalTab = ref('developer.json');
const { t } = useI18n();
const localized = useLocalizedData();

const terminalFocus = computed(() => localized.value.terminal.developer.focus);
</script>

<template>
  <section class="py-24 bg-surface dark:bg-slate-950 relative overflow-hidden scroll-mt-40" id="terminal-profile">
    <div class="max-w-4xl mx-auto px-8 relative z-10">
      <div class="text-center mb-16">
        <h2 class="font-headline text-3xl md:text-4xl font-bold mb-4 dark:text-white">{{ t('terminal.title') }}</h2>
        <p class="text-on-surface-variant dark:text-slate-400">{{ t('terminal.subtitle') }}</p>
      </div>

      <div class="relative w-full rounded-xl bg-white dark:bg-[#0a0f1c] border border-slate-200 dark:border-slate-700/50 shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden font-mono text-sm md:text-base transition-transform hover:scale-[1.01] duration-500">
        <!-- Top Bar -->
        <div class="flex items-center justify-between px-4 py-3 bg-slate-50 dark:bg-[#131a28] border-b border-slate-200 dark:border-slate-700/50">
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div class="flex items-center gap-1 text-xs font-medium">
            <div @click="activeTerminalTab = 'developer.json'" :class="['px-3 py-1.5 rounded-md border cursor-pointer transition-colors', activeTerminalTab === 'developer.json' ? 'bg-white dark:bg-[#0a2333] text-primary dark:text-[#3bc0df] border-slate-200 dark:border-slate-700/50 shadow-sm dark:shadow-none' : 'text-slate-500 dark:text-slate-400 border-transparent hover:text-slate-700 dark:hover:text-slate-300']">developer.json</div>
            <div @click="activeTerminalTab = 'skills.ts'" :class="['px-3 py-1.5 rounded-md border cursor-pointer transition-colors', activeTerminalTab === 'skills.ts' ? 'bg-white dark:bg-[#0a2333] text-primary dark:text-[#3bc0df] border-slate-200 dark:border-slate-700/50 shadow-sm dark:shadow-none' : 'text-slate-500 dark:text-slate-400 border-transparent hover:text-slate-700 dark:hover:text-slate-300']">skills.ts</div>
          </div>
        </div>

        <!-- Code Body -->
        <div class="p-5 md:p-8 text-slate-600 dark:text-slate-400 text-[13px] md:text-[15px] leading-relaxed overflow-x-auto min-h-[350px]">
          <template v-if="activeTerminalTab === 'developer.json'">
            <div><span class="text-slate-500 dark:text-slate-300">{</span></div>
            <div class="ml-4"><span class="text-blue-600 dark:text-[#3bc0df]">"developer"</span><span class="text-slate-500 dark:text-slate-300">: {</span></div>
            <div class="ml-8"><span class="text-blue-600 dark:text-[#3bc0df]">"name"</span><span class="text-slate-500 dark:text-slate-300">: </span><span class="text-green-600 dark:text-[#27c93f]">"{{ t('terminal.developer.name') }}"</span><span class="text-slate-500 dark:text-slate-300">,</span></div>
            <div class="ml-8"><span class="text-blue-600 dark:text-[#3bc0df]">"role"</span><span class="text-slate-500 dark:text-slate-300">: </span><span class="text-green-600 dark:text-[#27c93f]">"{{ t('terminal.developer.role') }}"</span><span class="text-slate-500 dark:text-slate-300">,</span></div>
            <div class="ml-8"><span class="text-blue-600 dark:text-[#3bc0df]">"location"</span><span class="text-slate-500 dark:text-slate-300">: </span><span class="text-green-600 dark:text-[#27c93f]">"{{ t('terminal.developer.location') }}"</span><span class="text-slate-500 dark:text-slate-300">,</span></div>
            <div class="ml-8"><span class="text-blue-600 dark:text-[#3bc0df]">"status"</span><span class="text-slate-500 dark:text-slate-300">: </span><span class="text-green-600 dark:text-[#27c93f]">"{{ t('terminal.developer.status') }}"</span><span class="text-slate-500 dark:text-slate-300">,</span></div>
            <div class="ml-8"><span class="text-blue-600 dark:text-[#3bc0df]">"architectural_focus"</span><span class="text-slate-500 dark:text-slate-300">: [</span></div>
            <div class="ml-12"><span class="text-amber-600 dark:text-[#e5c07b]">"{{ terminalFocus[0] }}"</span><span class="text-slate-500 dark:text-slate-300">,</span></div>
            <div class="ml-12"><span class="text-amber-600 dark:text-[#e5c07b]">"{{ terminalFocus[1] }}"</span></div>
            <div class="ml-8"><span class="text-slate-500 dark:text-slate-300">]</span></div>
            <div class="ml-4"><span class="text-slate-500 dark:text-slate-300">}</span></div>
            <div><span class="text-slate-500 dark:text-slate-300">}</span></div>
          </template>
          <template v-else>
            <div class="font-mono flex flex-col gap-4 w-full">
              <div class="whitespace-nowrap overflow-x-auto">
                <span class="text-purple-600 dark:text-[#c678dd]">import</span> <span class="text-slate-500 dark:text-slate-300">{ </span><span class="text-amber-600 dark:text-[#e5c07b]">Skill</span><span class="text-slate-500 dark:text-slate-300"> }</span> <span class="text-purple-600 dark:text-[#c678dd]">from</span> <span class="text-green-600 dark:text-[#98c379]">'@/types'</span><span class="text-slate-500 dark:text-slate-300">;</span>
              </div>
              <div class="whitespace-nowrap overflow-x-auto">
                <span class="text-purple-600 dark:text-[#c678dd]">export const</span> <span class="text-blue-600 dark:text-[#61afef]">coreTechnologies</span><span class="text-slate-500 dark:text-slate-300">: </span><span class="text-amber-600 dark:text-[#e5c07b]">Skill</span><span class="text-slate-500 dark:text-slate-300">[] = [</span>
              </div>

              <div class="pl-2 sm:pl-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                <template v-for="group in techStack" :key="group.group">
                  <div
                    v-for="(tech, idx) in group.items"
                    :key="tech.name"
                    class="group relative tech-card"
                    :style="{ '--tech-delay': `${idx * 20}ms` }"
                  >
                    <!-- Terminal-themed card -->
                    <div class="relative bg-slate-50 dark:bg-[#0d1526] border border-slate-200 dark:border-slate-700/50 rounded-lg p-3 hover:border-blue-300 dark:hover:border-[#61afef]/50 hover:bg-blue-50/50 dark:hover:bg-[#13233a] transition-all duration-300 flex flex-col items-center justify-center gap-3 h-full cursor-pointer shadow-sm hover:shadow-md dark:shadow-lg dark:hover:shadow-[#61afef]/10">
                      <div class="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 opacity-80 group-hover:opacity-100">
                        <NuxtImg format="webp" :src="tech.icon" :alt="tech.name" class="w-full h-full object-contain filter group-hover:drop-shadow-[0_0_8px_rgba(97,175,239,0.5)]" />
                      </div>
                      <div class="w-full h-px bg-slate-200 dark:bg-slate-700/50 group-hover:bg-blue-300 dark:group-hover:bg-[#61afef]/30 transition-colors duration-300"></div>
                      <span class="text-[10px] sm:text-xs text-green-600 dark:text-[#98c379] font-medium transition-colors duration-300 text-center leading-tight whitespace-nowrap">
                        '{{ tech.name }}'
                      </span>
                    </div>
                  </div>
                </template>
              </div>

              <div><span class="text-slate-500 dark:text-slate-300">];</span></div>
            </div>
          </template>
        </div>

        <!-- Divider -->
        <div class="h-px w-[95%] bg-slate-200 dark:bg-slate-700/50 mx-auto my-1"></div>

        <!-- Terminal Prompt -->
        <div class="px-5 md:px-8 py-5 flex items-center gap-2 text-[13px] md:text-[15px] whitespace-nowrap overflow-x-auto">
          <span class="text-green-600 dark:text-[#27c93f] font-bold">ragil@ragilpratama:~$</span>
          <span class="text-slate-600 dark:text-slate-400">git status --short</span>
          <span class="w-2 h-5 bg-slate-400 animate-pulse inline-block align-middle ml-1"></span>
        </div>
      </div>
    </div>
  </section>
</template>
