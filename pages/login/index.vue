<script setup>

definePageMeta({
  layout: 'login'
})

</script>

<template>
  <div class="flex flex-col md:flex-row h-screen">
    <section
      class="hidden md:flex flex-col items-center justify-center bg-login bg-center opacity-50 bg-cover bg-no-repeat p-8 w-1/2"
    >
      <LoginFlyer />
    </section>
    <section class="flex flex-col px-3 sm:p-5 w-full md:w-1/2">
      <Login />
    </section>
  </div>
</template>
