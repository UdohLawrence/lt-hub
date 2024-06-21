<script setup>

</script>

<template>
    <section
      class=" bg-hero bg-cover bg-center bg-no-repeat"
    >
      <div
        class="absolute inset-0 dark:bg-black/50"
      ></div>
    
      <div
        class="relative mx-auto max-w-[1100px] px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
      >
        <div class="text-center">
          <h1 class="text-3xl font-extrabold sm:text-5xl">
            <span class="bg-gradient-to-bl from-slate-400 to-violet-600 bg-clip-text text-transparent leading-normal">Find your next lesson Tutor</span>
    
            <span class="block font-extrabold text-teal-600">(In Nigeria)</span>
          </h1>
    
          <p class="mt-4 max-w-lg sm:text-xl/relaxed text-center mx-auto text-slate-800 dark:text-slate-300">
            Welcome to Lesson Teacher’s Hub, where education meets convenience!
          </p>
    
          <div class="mt-8 flex flex-col sm:grid sm:grid-cols-3 gap-4 text-center">
            <NuxtLink to="#">
                <button class="block w-full rounded-lg bg-violet-500 px-8 py-3 text-xl font-semibold text-white shadow-md hover:bg-violet-400 opacity-75 focus:outline-none focus:ring">
                    Subject/Skill
                </button>
            </NuxtLink>
            <NuxtLink to="#">
                <button class="block w-full rounded-lg bg-violet-500 px-8 py-3 text-xl font-semibold text-white opacity-75 shadow-md hover:bg-violet-400 focus:outline-none focus:ring">
                    Location
                </button>
            </NuxtLink>
            <NuxtLink to="#">
                <button class="block w-full rounded-lg bg-violet-500 px-8 py-3 text-xl font-semibold text-white opacity-75 shadow-md hover:bg-violet-400 focus:outline-none focus:ring">
                    Request a Tutor
                </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </template>
