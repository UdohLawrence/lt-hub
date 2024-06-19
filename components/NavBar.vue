<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();

const toggleDark = useToggle(isDark);

const showMobileMenu = ref(false);
</script>

<template>
  <nav class="max-w-[1100px] flex justify-between items-center mx-auto px-3 py-2">
    <NuxtLink to="/">
      <div class="flex items-center">
        <img
          src="../assets/images/logo.png"
          alt="Website Logo"
          class="w-12 mr-3"
        />
        <h1 class="text-lg sm:text-xl font-semibold sm:font-bold">
          Lesson Teachers Hub
        </h1>
      </div>
    </NuxtLink>

    <ul class="hidden md:flex justify-between space-x-4 font-semibold">
      <li>
        <NuxtLink to="/" class="hover:text-lg">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about" class="hover:text-lg">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact" class="hover:text-lg">Contact Us</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/login" class="hover:text-2xl">Login</NuxtLink>
      </li>
    </ul>
    <div class="flex justify-between items-center">
      <button class="sm:hidden cursor-pointer text-xl mr-3">&#9776;</button>
      <NuxtLink to="#">
        <Button
          class="hidden sm:inline bg-violet-500 text-white text-lg font-semibold py-2 px-3 rounded-2xl mr-3"
          text="SignUp"
        />
      </NuxtLink>
      <span v-if="isDark" @click="toggleDark()">
        <img
          src="../assets/images/light-mode.png"
          alt="Light Mode Switch"
          class="w-4 sm:w-8"
        />
      </span>
      <span v-if="!isDark" @click="toggleDark()">
        <img
          src="../assets/images/dark-mode.png"
          alt="Light Mode Switch"
          class="w-3 sm:w-6"
        />
      </span>
    </div>
  </nav>
</template>
