<script setup>
import { ref } from "vue";

// import { useDark, useToggle } from "@vueuse/core";

// const isDark = useDark();

// const toggleDark = useToggle(isDark);

const showMobileMenu = ref(false);

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};

const Links = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Contact", to: "/contact" },
  { name: "Login", to: "/login" },
];
</script>

<template>
  <nav
    class="max-w-[1100px] bg-white dark:bg-slate-700 mx-auto shadow-b-xl py-4 md:flex items-center justify-between px-4"
  >
    <NuxtLink to="/" class="flex justify-start items-center">
      <img
        src="/assets/images/logo.png"
        alt="Site Logo"
        class="w-[32px] mr-3"
      />
      <h1 class="text-xl font-semibold dark:text-white">Lesson Teachers Hub</h1>
    </NuxtLink>
    <span
      class="text-slate-700 text-3xl absolute right-0 top-3 cursor-pointer md:hidden px-3"
      @click="toggleMobileMenu()"
    >
      <button v-if="showMobileMenu">&times;</button>
      <button v-else class="text-xl">&#9776;</button>
    </span>
    <ul
      class="md:flex gap-5 items-center absolute md:static bg-white opacity-75 w-full md:w-auto top-14 px-6 md:px-0 pb-10 md:pb-0 duration-500" :class="[showMobileMenu ? 'left-0' : 'left-[-100%]']"
    >
      <li
        v-for="link in Links"
        class="my-6 md:my-0 text-xl hover:text-violet-400 duration-500"
        :key="link.name"
      >
        <NuxtLink :to="link.to">
          {{ link.name }}
        </NuxtLink>
      </li>
      <Button>Sign Up</Button>
    </ul>
  </nav>
</template>
