<script setup>
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
    errors.name = form.name.trim() ? '' : 'Full name is required';
  } else if (field === 'email') {
    if (!form.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      errors.email = 'Please enter a valid email address';
    } else {
      errors.email = '';
    }
  } else if (field === 'message') {
    errors.message = form.message.trim() ? '' : 'Message cannot be empty';
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
    alert('Please fill out all fields correctly before sending.');
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
    alert('Failed to send inquiry. Please try again.');
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <section class="py-24 bg-surface-container-low dark:bg-slate-900/50 relative overflow-hidden scroll-mt-40" id="contact">
    <div class="absolute inset-0 pointer-events-none section-texture section-texture-contact"></div>
    <div class="max-w-7xl mx-auto px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div class="text-center lg:text-left">
          <h2 class="font-headline text-4xl sm:text-5xl font-extrabold mb-8 tracking-tight dark:text-white">Let's <span class="text-primary">Collaborate</span></h2>
          <p class="text-lg text-on-surface-variant dark:text-slate-400 mb-12 leading-relaxed">
            Have a complex architectural challenge or a project that needs a steady hand? I'm currently open to consulting and lead engineering roles.
          </p>
          <div class="space-y-6">
            <a href="mailto:ragilpratamaaa@gmail.com" class="flex items-center gap-6 group hover:translate-x-2 transition-transform duration-300">
              <div class="w-14 h-14 rounded-xl bg-surface-container-lowest dark:bg-slate-800 flex items-center justify-center shadow-sm text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-6 h-6" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6.75h-6A5.25 5.25 0 0 0 5.25 12v0A5.25 5.25 0 0 0 10.5 17.25h6a2.25 2.25 0 0 0 2.25-2.25V12A6.75 6.75 0 1 0 12 18.75" />
                </svg>
              </div>
              <div>
                <p class="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Email</p>
                <p class="text-sm sm:text-lg font-bold">ragilpratamaaa@gmail.com</p>
              </div>
            </a>
            <div class="flex items-center gap-6 group">
              <div class="w-14 h-14 rounded-xl bg-surface-container-lowest flex items-center justify-center shadow-sm text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-6 h-6" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11Z" />
                  <circle cx="12" cy="10" r="2.25" />
                </svg>
              </div>
              <div>
                <p class="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Location</p>
                <p class="text-lg font-bold">Bogor, Indonesia</p>
              </div>
            </div>
          </div>
          <div class="mt-12 w-full h-48 rounded-xl bg-surface-container-highest overflow-hidden relative shadow-inner">
            <NuxtImg format="webp" class="w-full h-full object-cover opacity-50 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUB7_qSH1VP9UxZUpDpQ3GjKwT859rdwqFKFTNhQ-PqQjpmwi7lJehG4MKSzN_HznWA1AbFg_SxO9OUhqs6KhfkVjsvFCTgYD8Ss-9O4HW8T-AtIjrRXuJdkLSSvVzTCToyNvcDaYjTAWATs-0XRPe8YSMe0nPCxwSDFsXHi3bRiNZxsxe2nS5RZVK0TxkmJsAlWXuy2WuMRSv8JSuvAw3xq6cppGTrUhUv7-lFQR5ZRpOWrYjdhYeA-hBlAsPatYZCa7ye_CURdZZ" alt="Map" loading="lazy" />
            <div class="absolute inset-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-primary" aria-hidden="true">
                <path d="M12 2.75a7.25 7.25 0 0 0-7.25 7.25c0 5.22 5.44 10.34 6.41 11.2a1.25 1.25 0 0 0 1.68 0c.97-.86 6.41-5.98 6.41-11.2A7.25 7.25 0 0 0 12 2.75Zm0 9.75a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/>
              </svg>
            </div>
          </div>
        </div>
        <div :class="['bg-surface-container-lowest dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-outline-variant/30 dark:border-slate-800 transition-all', { 'animate-shake border-red-500/50 shadow-red-500/10': isShaking }]">
          <form @submit.prevent="handleInquiry" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-2 relative">
                <label class="text-sm font-bold uppercase tracking-widest text-on-surface-variant dark:text-slate-400 ml-1 transition-colors">Full Name <span class="text-red-500">*</span></label>
                <div class="relative">
                  <input v-model="form.name" @input="validateField('name')" @blur="validateField('name')" type="text" placeholder="John Doe" :class="['w-full bg-surface dark:bg-slate-800 border-2 rounded-xl p-4 pr-12 focus:ring-2 focus:ring-primary/30 outline-none transition-all dark:text-white', errors.name ? 'border-red-400/50 ring-2 ring-red-400/10' : 'border-transparent']" required>
                  <div v-if="form.name.trim() && !errors.name" class="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500 animate-in zoom-in duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                      <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p v-if="errors.name" class="text-xs text-red-500 ml-1 font-medium">{{ errors.name }}</p>
              </div>
              <div class="space-y-2 relative">
                <label class="text-sm font-bold uppercase tracking-widest text-on-surface-variant dark:text-slate-400 ml-1 transition-colors">Email <span class="text-red-500">*</span></label>
                <div class="relative">
                  <input v-model="form.email" @input="validateField('email')" @blur="validateField('email')" type="email" placeholder="john@example.com" :class="['w-full bg-surface dark:bg-slate-800 border-2 rounded-xl p-4 pr-12 focus:ring-2 focus:ring-primary/30 outline-none transition-all dark:text-white', errors.email ? 'border-red-400/50 ring-2 ring-red-400/10' : 'border-transparent']" required>
                  <div v-if="form.email.trim() && !errors.email" class="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500 animate-in zoom-in duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                      <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p v-if="errors.email" class="text-xs text-red-500 ml-1 font-medium">{{ errors.email }}</p>
              </div>
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold uppercase tracking-widest text-on-surface-variant dark:text-slate-400 ml-1 transition-colors">Message <span class="text-red-500">*</span></label>
              <div class="relative">
                <textarea v-model="form.message" @input="validateField('message')" @blur="validateField('message')" rows="5" placeholder="Tell me about your project..." :class="['w-full bg-surface dark:bg-slate-800 border-2 rounded-xl p-4 pr-12 focus:ring-2 focus:ring-primary/30 outline-none transition-all dark:text-white', errors.message ? 'border-red-400/50 ring-2 ring-red-400/10' : 'border-transparent']" required></textarea>
                <div v-if="form.message.trim() && !errors.message" class="absolute right-4 top-4 text-emerald-500 animate-in zoom-in duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <p v-if="errors.message" class="text-xs text-red-500 ml-1 font-medium">{{ errors.message }}</p>
            </div>

            <div v-if="showSuccess" class="p-3 bg-green-50 text-green-700 rounded-lg text-sm font-medium flex items-center gap-2 animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.5 12.5 2.25 2.25 4.75-4.75" />
              </svg>
              Inquiry sent successfully! I will contact you soon.
            </div>

            <div v-if="!isFormValid && formTouched" class="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 rounded-xl space-y-2 animate-shake">
              <p class="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">Required Fields:</p>
              <ul class="text-xs text-red-500 dark:text-red-400 font-medium list-disc ml-4">
                <li v-if="!form.name.trim()">Full name is missing</li>
                <li v-if="!form.email.trim()">Email address is missing</li>
                <li v-if="form.email.trim() && !/^\S+@\S+\.\S+$/.test(form.email)">Email format is invalid</li>
                <li v-if="!form.message.trim()">Message cannot be empty</li>
              </ul>
            </div>

            <button
              :disabled="isSubmitting"
              class="w-full py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-primary-container text-on-primary">
              <span v-if="isSubmitting" class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              {{ isSubmitting ? 'Sending...' : 'Send Inquiry' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
