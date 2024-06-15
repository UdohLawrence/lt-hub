<script setup>

  import { useDark, useToggle } from '@vueuse/core';

  const isDark = useDark();

  const toggleDark = useToggle(isDark);



</script>

<template>
    <nav class="max-w-[1100px] flex justify-between items-center mx-auto p-2">
      <NuxtLink to="/">
        <div class="flex items-center">
          <img src="../assets/images/logo.png" alt="Website Logo" class="w-12">
          <h1 class="text-2xl font-bold ">Lesson Teachers Hub</h1>
      </div>
      </NuxtLink>
      <ul class="hidden md:flex justify-between space-x-4 text-xl font-semibold">
        <li>
            <NuxtLink to="#" class="hover:text-2xl">Home</NuxtLink>
        </li>
        <li>
            <NuxtLink to="#" class="hover:text-2xl">About</NuxtLink>
        </li>
        <li>
            <NuxtLink to="#" class="hover:text-2xl">Contact Us</NuxtLink>
        </li>
        <li>
            <NuxtLink to="#" class="hover:text-2xl">Login</NuxtLink>
        </li>
      </ul>
      <div class="flex justify-between items-center">
        <NuxtLink to="#">
          <button class="hidden sm:inline bg-violet-500 text-white text-lg font-semibold py-2 px-3 rounded-2xl mr-3">
            Sign Up
        </button>
      </NuxtLink>
        <span v-if="isDark" @click="toggleDark()">
          <img src="../assets/images/light-mode.png" alt="Light Mode Switch" class="w-8">
        </span>
        <span v-if="!isDark" @click="toggleDark()">
          <img src="../assets/images/dark-mode.png" alt="Light Mode Switch" class="w-6">
        </span>
         </div>
      
    </nav>
</template>