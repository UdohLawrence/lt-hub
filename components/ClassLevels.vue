<script setup>

</script>

<template>
    <section class="w-screen flex flex-col bg-white dark:bg-slate-700 p-6">
        <h2
      class="text-3xl font-semibold text-center mb-5 pt-6 dark:text-slate-100"
    >
      Class Levels
    </h2>
        <p class=" max-w-[960px] text-center mx-auto text-lg px-12 my-5 text-slate-600 dark:text-slate-200">Each of these categories represents a distinct stage in a student's educational journey, with tailored curricula and developmental goals.</p>
        <div class="flex flex-col sm:grid sm:grid-cols-3 gap-4 max-w-[1100px] mx-auto p-4 rounded-xl shadow-2xl">
            <div class="p-6">
                <img src="/assets/images/class1.png" alt="Nursery pupil" class="rounded-full">
                <h5 class="text-center dark:text-slate-200 font-semibold mt-6">Nursery</h5>
            </div>
            <div class="p-6">
                <img src="/assets/images/class2.png" alt="Primary pupil" class="rounded-full">
                <h5 class="text-center dark:text-slate-200 font-semibold mt-6">Primary</h5>
            </div>
            <div class="p-6">
                <img src="/assets/images/class3.png" alt="Secondary school student" class="rounded-full">
                <h5 class="text-center dark:text-slate-200 font-semibold mt-6">Secondary</h5>
            </div>
        </div>
    </section>
</template>