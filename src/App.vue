<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-[#8130ff] py-5">
    <div class="flex justify-between items-center container mx-auto">

      <div class="bg-logo text-transparent select-none w-40 h-14  flex items-center justify-center">
         <p>MiGym</p>
      </div>

      <nav class="dm-sans-bold flex items-center gap-x-3 text-white text-md">
        <RouterLink class="hover:text-gray-300 transition duration-300" to="/">Home</RouterLink>
        <RouterLink class="hover:text-gray-300 transition duration-300" to="/">Agregar Cliente</RouterLink>
      </nav>
    </div>
  </header>

  <main class="container mx-auto">
    <RouterView />
  </main>
</template>
