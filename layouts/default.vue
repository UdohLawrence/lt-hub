<script setup>

</script>

<template>
    <header class="w-screen min-w-[340px] shadow-lg fixed top-0 z-10 bg-white dark:bg-slate-600 dark:text-slate-200">
        <NavBar />
    </header>
    <main class="w-screen dark:bg-slate-700">
        <div>
            <slot></slot>
        </div>
    </main>
    <footer>
        <Footer />
    </footer>
</template>