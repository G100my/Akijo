<script setup lang="ts">
import Akijo from '~/assets/phobe_1-03.png'
import AkijoSpace from '~/assets/phobe_2-03.png'
import comingsoon_S from '~/assets/phobe_3-03.png'
import comingsoon_L from '~/assets/web_bg.jpg'
import webLogo from '~/assets/web_logo.png'
</script>
<template>
  <!-- <NuxtLayout>
    <NuxtPage />
  </NuxtLayout> -->
  <main class="relative min-h-screen overflow-auto bg-[#ff4c14]">
    <div class="mx-auto flex h-screen max-h-screen max-w-xs flex-col items-center justify-center sm:hidden">
      <img :src="Akijo" alt="Akijo 百變怪" class="w-full" />
      <img :src="AkijoSpace" alt="萩条集結所" class="w-3/5" />
      <img :src="comingsoon_S" alt="Coming soon..." class="w-3/5" />
    </div>
    <div class="hidden sm:block">
      <img :src="comingsoon_L" alt="Coming soon..." class="mx-auto h-screen object-cover" />
      <img :src="webLogo" alt="Akijo 萩条集結所" class="fixed top-2 left-2 rounded-3xl backdrop-invert" />
    </div>
  </main>
</template>
