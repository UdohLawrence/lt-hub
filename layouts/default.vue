<script setup>

</script>

<template>
    <header class="w-screen min-w-[340px] shadow-lg bg-white dark:bg-slate-600 dark:text-slate-200">
        <NavBar />
    </header>
    <main>
        <div>
            <slot></slot>
        </div>
    </main>
    <footer>

    </footer>
</template>