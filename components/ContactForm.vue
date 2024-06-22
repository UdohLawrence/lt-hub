<script setup>
import {reactive} from 'vue'

const name = ""
const email = ""
const message = ""
</script>

<template>
    <section class="w-screen flex items-center justify-center">
        <div class="p-5 mx-auto max-w-screen-sm shadow-2xl rounded-md">
            <h2 class="text-2xl font-bold text-center sm:text-3xl mb-6 text-slate-800 dark:text-slate-100">Get in Touch</h2>
            <form class="w-full mx-auto text-base sm:text-lg flex flex-col items-start gap-2">
                <label for="name">Name:</label>
                <input type="text" name="name" id="name" required minlength="5" maxlength="60" placeholder="Your Name" v-model="name" class="w-full text-slate-900 p-2 rounded-xl border-b border-solid border-slate-200" />
                <label for="email">Email:</label>
                <input type="email" name="email" id="email" required placeholder="example@email.com" v-model="email" class="w-full text-slate-900 p-2 rounded-xl border-b border-solid border-slate-200" />
                <label for="message">Message:</label>
                <textarea name="message" id="message" cols="25" rows="5" required placeholder="Your Message" v-model="message" class="w-full text-slate-800 p-2 rounded-xl border border-solid border-slate-200 focus:border-violet-300"></textarea>
                <button class="bg-violet-500 hover:bg-violet-400 text-white font-semibold p-3 w-full rounded-3xl" >Submit</button>
            </form>
            <p>{{ name }}</p>
            <p>{{ email }}</p>
            <p>{{ message }}</p>
        </div>
    </section>
</template>