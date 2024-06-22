<script setup>

</script>

<template>
    <div class="flex flex-col mx-auto items-center justify-center p-6">
        <h2 class="text-center text-2xl text-violet-600 font-semibold my-7">
          Login
        </h2>
        <form class="text-center">
          <input
            type="email"
            placeholder="Email"
            required
            class="w-full mx-auto mb-3 p-4 border border-solid rounded-xl border-violet-300"
          />
          <input
            type="password"
            placeholder="Password"
            required
            class="w-full mx-auto p-4 border border-solid rounded-xl border-violet-300"
          />
          <NuxtLink to="#">
            <p class="text-rose-400 text-center my-5">Forgot password?</p>
          </NuxtLink>
          <button
            class="w-full bg-violet-500 text-white px-4 py-2 rounded-md mx-auto mb-5"
          >
            Login
          </button>
          <span class="text-base text-center"
            >Don't have an account?
            <NuxtLink to="#" class="text-blue-500"> Signup </NuxtLink>
          </span>
        </form>
        <div class="flex items-center justify-center my-5">
          <hr class="w-2/5" />
          <span>or</span>
          <hr class="w-2/5" />
        </div>
        <div class="flex flex-col md:flex-row w-full gap-4">
          <button
            class="w-full bg-blue text-slate-700 flex items-center justify-center gap-4 px-4 py-2 rounded-md mx-auto border border-blue-500"
          >
          <img src="/assets/images/facebook.png" alt="Facebook Login Logo" class="w-6">
            <p>Login with Facebook</p>
          </button>
          <button
            class="w-full bg-white text-slate-700 flex items-center justify-center gap-4 px-4 py-2 rounded-md mx-auto border border-blue-500"
          >
          <img src="/assets/images/google.png" alt="Google Login Logo" class="w-6">
            <p>Login with Google</p>
          </button>
        </div>
      </div>
</template>
