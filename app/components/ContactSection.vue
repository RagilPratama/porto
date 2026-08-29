<script setup>
const { t } = useI18n();

const form = reactive({
  name: '',
  email: '',
  message: ''
});

const errors = reactive({
  name: '',
  email: '',
  message: ''
});

const isSubmitting = ref(false);
const showSuccess = ref(false);
const formTouched = ref(false);
const isShaking = ref(false);

const isFormValid = computed(() => {
  return form.name.trim() &&
         /^\S+@\S+\.\S+$/.test(form.email) &&
         form.message.trim();
});

const validateField = (field) => {
  if (field === 'name') {
    errors.name = form.name.trim() ? '' : t('contact.form.nameRequired');
  } else if (field === 'email') {
    if (!form.email.trim()) {
      errors.email = t('contact.form.emailRequired');
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      errors.email = t('contact.form.emailInvalid');
    } else {
      errors.email = '';
    }
  } else if (field === 'message') {
    errors.message = form.message.trim() ? '' : t('contact.form.messageRequired');
  }
};

const handleInquiry = async () => {
  formTouched.value = true;

  // Final validation before sending
  validateField('name');
  validateField('email');
  validateField('message');

  if (!isFormValid.value) {
    isShaking.value = true;
    alert(t('contact.form.alertInvalid'));
    setTimeout(() => { isShaking.value = false; }, 500);
    return;
  }

  isSubmitting.value = true;

  // Simulate API call (you can replace this with a real fetch to your backend or a service like Formspree)
  try {
    // Optional: Real mailto fallback if you don't have a backend
    const mailtoUrl = `mailto:ragilpratamaaa@gmail.com?subject=Inquiry from ${form.name}&body=${encodeURIComponent(form.message)}%0D%0A%0D%0AFrom: ${form.name} (${form.email})`;
    window.open(mailtoUrl);

    // Simulated latency
    await new Promise(resolve => setTimeout(resolve, 1500));

    showSuccess.value = true;
    form.name = '';
    form.email = '';
    form.message = '';

    setTimeout(() => {
      showSuccess.value = false;
    }, 5000);
  } catch (error) {
    alert(t('contact.form.alertFailed'));
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <section class="py-24 relative overflow-hidden scroll-mt-40" id="contact">
    <div class="absolute inset-0 pointer-events-none section-texture section-texture-contact opacity-70"></div>
    <div class="max-w-7xl mx-auto px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <!-- Left Contact Info -->
        <div data-animate="fade-right" class="lg:col-span-5 text-center lg:text-left">
          <h2 class="font-headline text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight text-slate-900 dark:text-white">
            {{ t('contact.title') }} <span class="text-primary dark:text-primary-fixed-dim">{{ t('contact.titleAccent') }}</span>
          </h2>
          <p class="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed font-medium">
            {{ t('contact.description') }}
          </p>

          <div class="space-y-4">
            <a href="mailto:ragilpratamaaa@gmail.com" class="glass-panel p-5 rounded-2xl flex items-center gap-5 group hover:translate-x-2 transition-all duration-300">
              <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary dark:text-primary-fixed-dim flex items-center justify-center border border-primary/20 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-6 h-6" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6.75h-6A5.25 5.25 0 0 0 5.25 12v0A5.25 5.25 0 0 0 10.5 17.25h6a2.25 2.25 0 0 0 2.25-2.25V12A6.75 6.75 0 1 0 12 18.75" />
                </svg>
              </div>
              <div>
                <p class="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-0.5">{{ t('contact.email') }}</p>
                <p class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">ragilpratamaaa@gmail.com</p>
              </div>
            </a>

            <div class="glass-panel p-5 rounded-2xl flex items-center gap-5 group">
              <div class="w-12 h-12 rounded-xl bg-secondary/10 text-secondary dark:text-secondary-fixed-dim flex items-center justify-center border border-secondary/20 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-6 h-6" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11Z" />
                  <circle cx="12" cy="10" r="2.25" />
                </svg>
              </div>
              <div>
                <p class="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-0.5">{{ t('contact.location') }}</p>
                <p class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">{{ t('contact.locationValue') }}</p>
              </div>
            </div>
          </div>

          <div class="mt-8 w-full h-44 rounded-3xl overflow-hidden relative shadow-lg border border-white/60 dark:border-white/10">
            <div class="w-full h-full relative">
              <NuxtImg format="webp" class="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUB7_qSH1VP9UxZUpDpQ3GjKwT859rdwqFKFTNhQ-PqQjpmwi7lJehG4MKSzN_HznWA1AbFg_SxO9OUhqs6KhfkVjsvFCTgYD8Ss-9O4HW8T-AtIjrRXuJdkLSSvVzTCToyNvcDaYjTAWATs-0XRPe8YSMe0nPCxwSDFsXHi3bRiNZxsxe2nS5RZVK0TxkmJsAlWXuy2WuMRSv8JSuvAw3xq6cppGTrUhUv7-lFQR5ZRpOWrYjdhYeA-hBlAsPatYZCa7ye_CURdZZ" :alt="t('contact.mapAlt')" loading="lazy" />
              <div class="absolute inset-0 flex items-center justify-center bg-primary/10 backdrop-blur-[1px]">
                <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" aria-hidden="true">
                    <path d="M12 2.75a7.25 7.25 0 0 0-7.25 7.25c0 5.22 5.44 10.34 6.41 11.2a1.25 1.25 0 0 0 1.68 0c.97-.86 6.41-5.98 6.41-11.2A7.25 7.25 0 0 0 12 2.75Zm0 9.75a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Glass Form -->
        <div data-animate="fade-left" :class="['lg:col-span-7 glass-panel rounded-3xl p-8 md:p-10 transition-all shadow-2xl', { 'animate-shake border-red-500/50 shadow-red-500/10': isShaking }]">
          <form @submit.prevent="handleInquiry" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-2 relative">
                <label class="text-xs font-extrabold uppercase tracking-widest text-slate-700 dark:text-slate-300 ml-1">{{ t('contact.form.name') }} <span class="text-red-500">*</span></label>
                <div class="relative">
                  <input v-model="form.name" @input="validateField('name')" @blur="validateField('name')" type="text" :placeholder="t('contact.form.namePlaceholder')" :class="['w-full glass-input rounded-2xl p-4 pr-12 outline-none font-medium text-slate-900 dark:text-white', errors.name ? 'border-red-400 ring-2 ring-red-400/20' : '']" required>
                  <div v-if="form.name.trim() && !errors.name" class="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                      <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p v-if="errors.name" class="text-xs text-red-500 ml-1 font-bold">{{ errors.name }}</p>
              </div>

              <div class="space-y-2 relative">
                <label class="text-xs font-extrabold uppercase tracking-widest text-slate-700 dark:text-slate-300 ml-1">{{ t('contact.form.email') }} <span class="text-red-500">*</span></label>
                <div class="relative">
                  <input v-model="form.email" @input="validateField('email')" @blur="validateField('email')" type="email" :placeholder="t('contact.form.emailPlaceholder')" :class="['w-full glass-input rounded-2xl p-4 pr-12 outline-none font-medium text-slate-900 dark:text-white', errors.email ? 'border-red-400 ring-2 ring-red-400/20' : '']" required>
                  <div v-if="form.email.trim() && !errors.email" class="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                      <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p v-if="errors.email" class="text-xs text-red-500 ml-1 font-bold">{{ errors.email }}</p>
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-xs font-extrabold uppercase tracking-widest text-slate-700 dark:text-slate-300 ml-1">{{ t('contact.form.message') }} <span class="text-red-500">*</span></label>
              <div class="relative">
                <textarea v-model="form.message" @input="validateField('message')" @blur="validateField('message')" rows="5" :placeholder="t('contact.form.messagePlaceholder')" :class="['w-full glass-input rounded-2xl p-4 pr-12 outline-none font-medium text-slate-900 dark:text-white', errors.message ? 'border-red-400 ring-2 ring-red-400/20' : '']" required></textarea>
                <div v-if="form.message.trim() && !errors.message" class="absolute right-4 top-4 text-emerald-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <p v-if="errors.message" class="text-xs text-red-500 ml-1 font-bold">{{ errors.message }}</p>
            </div>

            <div v-if="showSuccess" class="p-4 bg-emerald-500/15 border border-emerald-400/30 text-emerald-700 dark:text-emerald-300 rounded-2xl text-sm font-bold flex items-center gap-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5 text-emerald-500" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.5 12.5 2.25 2.25 4.75-4.75" />
              </svg>
              {{ t('contact.form.success') }}
            </div>

            <div v-if="!isFormValid && formTouched" class="p-4 bg-red-500/15 border border-red-400/30 rounded-2xl space-y-2 animate-shake">
              <p class="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">{{ t('contact.form.requiredFields') }}</p>
              <ul class="text-xs text-red-500 dark:text-red-400 font-medium list-disc ml-4">
                <li v-if="!form.name.trim()">{{ t('contact.form.nameMissing') }}</li>
                <li v-if="!form.email.trim()">{{ t('contact.form.emailMissing') }}</li>
                <li v-if="form.email.trim() && !/^\S+@\S+\.\S+$/.test(form.email)">{{ t('contact.form.emailInvalidShort') }}</li>
                <li v-if="!form.message.trim()">{{ t('contact.form.messageMissing') }}</li>
              </ul>
            </div>

            <button
              :disabled="isSubmitting"
              class="w-full py-4 rounded-2xl font-bold text-lg shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-3 bg-primary hover:bg-on-primary-fixed-variant text-white border border-white/30">
              <span v-if="isSubmitting" class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              {{ isSubmitting ? t('contact.form.sending') : t('contact.form.send') }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
