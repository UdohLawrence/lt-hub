<script setup>
 defineProps(['error']); 

 const handleClearError = () => {
    clearError({redirect: '/'});
 }
</script>

<template>
    <main class="w-screen h-screen flex items-center justify-center">
        <div class="mx-auto p-4 shadow-2xl bg-white dark:bg-slate-600">
            <h2 class="text-6xl text-center font-bold">{{ error.statusCodes }}</h2>
            <p class="text-7xl text-center text-slate-800 my-5 dark:text-slate-200">Oops......</p>
            <p class="text-xl text-center text-slate-800 dark:text-slate-200 my-5">Seems like you took a wrong turn there!</p>
            <p class="text-7xl text-center text-slate-800 my-5 dark:text-slate-200">{{ error.message }}</p>
            <button class="text-white bg-violet-500 rounded-xl px-3 py-2 mx-auto" @click="handleClearError">Go Home</button>
        </div>
    </main>
</template>