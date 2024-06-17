<script setup>

</script>

<template>
    <header class="w-screen min-w-[340px] shadow-lg bg-white dark:bg-slate-600 dark:text-slate-200">
        <NavBar />
    </header>
    <main class="dark:bg-slate-700">
        <div>
            <slot></slot>
        </div>
    </main>
    <footer>

    </footer>
</template>