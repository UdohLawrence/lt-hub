<script setup></script>

<template>
  <section
    class="w-screen shadow-xl rounded-md bg-white dark:bg-slate-700 p-5">
  <h1 class="text-3xl font-semibold text-center text-slate-700 bg-white p-6 dark:bg-slate-700 dark:text-slate-100"> Class Categories</h1>
    <div class="max-w-[1100px] gap-5 mx-auto flex flex-col sm:grid sm:grid-cols-3 rounded-md shadow-xl p-5">
      <figure class="relative h-96 w-auto">
      <img
        class="w-full h-full rounded-xl object-cover object-center"
        src="/assets/images/cat-1.jpeg"
        alt="nature image"
      />
      <figcaption
        class="absolute bottom-0 text-center w-full rounded-md bg-violet-400 opacity-75 py-4 px-6 shadow-lg"
      >
        Home Tutor
      </figcaption>
    </figure>
    <figure class="relative h-96 w-auto">
      <img
        class="h-full w-full rounded-xl object-cover object-center"
        src="/assets/images/cat-2.jpeg"
        alt="nature image"
      />
      <figcaption
        class="absolute bottom-0 text-center w-full rounded-md bg-violet-400 opacity-75 py-4 px-6 shadow-lg"
      >
        Languages
      </figcaption>
    </figure>
    <figure class="relative h-96 w-auto">
      <img
        class="h-full w-full rounded-xl object-cover object-center"
        src="/assets/images/cat-3.jpeg"
        alt="nature image"
      />
      <figcaption
        class="absolute bottom-0 text-center w-full rounded-md bg-violet-400 opacity-75 py-4 px-6 shadow-lg"
      >
        Exams Prep
      </figcaption>
    </figure>
    </div>
    <p class="text-center text-slate-100 text-xl font-semibold bg-violet-600 opacity-50 max-w-[320px] mx-auto px-6 py-4 rounded-full mt-5">Explore more categories</p>
  </section>
  
</template>
