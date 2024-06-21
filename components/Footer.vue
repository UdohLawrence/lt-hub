<script setup>
 const year = new Date();

</script>

<template>
  <section class="w-screen bg-white dark:bg-slate-700 p-4">
    <div class="max-w-[1100px] mx-auto p-6 flex flex-col sm:flex-row sm:justify-between">
      <div class="p-6">
        <h3 class="underline text-xl font-semibold mb-3">Resources</h3>
        <ul>
          <li>
            <NuxtLink to="/"> Learning Mind </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/"> About Us </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"> Blog </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"> Refer and Earn </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"> FAQs </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"> How it works - Students </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"> Pay Teachers </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="p-6">
        <h3 class="underline text-xl font-semibold mb-3">For Teachers</h3>
        <ul>
          <li>
            <NuxtLink to="/">Get Paid</NuxtLink>
          </li>

          <li>
            <NuxtLink to="/">Premium Membership</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">Online teaching guide</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">How it works - Teachers</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">Applying to jobs</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">Teacher Ranking</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">Share a story</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="p-6">
        <h3 class="underline text-xl font-semibold mb-3">Help and Feedback</h3>
        <ul>
          <li>
            <NuxtLink to="/">Feedback</NuxtLink>
          </li>

          <li>
            <NuxtLink to="/">Testimonials</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">Contact us</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">Refund policy</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">Privacy policy</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">Terms</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <span class="mx-auto text-center italic block">&copy; Copyright {{ year.getFullYear() }}. All rights reserved!</span>
  </section>
</template>
