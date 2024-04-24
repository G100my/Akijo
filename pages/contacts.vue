<script setup lang="ts">
import ImgHero from '@/assets/contacts-hero.jpg'
import { BASE_INFO, QUICK_LINKS } from '@/constants/siteMeta'
</script>
<template>
  <section>
    <div class="flex px-[140px] items-center bg">
      <h2 class="font-black text-40 py-12">LOCATIONS</h2>
    </div>

    <div class="flex h-[440px] border-2 border-slate-950">
      <div class="flex-[6] border-r-2 border-slate-950">
        <img
          :src="ImgHero"
          alt="akijo picture"
          class="h-full w-full object-cover"
        />
      </div>
      <div class="flex-[4] flex flex-col divide-y-2 divide-slate-950 h-full">
        <div class="flex-1">
          <div class="p-10 flex gap-8 h-full">
            <p class="font-bold text-16">門市地址</p>
            <p>{{ BASE_INFO.address }}</p>
          </div>
        </div>
        <div class="flex-1">
          <div class="p-10 flex gap-8 h-full">
            <p class="font-bold text-16">營業時間</p>
            <p class="whitespace-break-spaces">{{ BASE_INFO.opening_time }}</p>
          </div>
        </div>
        <div class="flex-1">
          <div class="p-10 flex gap-8 h-full">
            <p class="font-bold text-16">聯絡電話</p>
            <p>{{ BASE_INFO.tel }}</p>
          </div>
        </div>
        <div class="flex flex-1">
          <nav
            class="flex-1 flex border-r-2 border-slate-950 justify-center gap-4 items-center"
          >
            <NuxtLink
              v-for="i in QUICK_LINKS"
              :to="i.to"
              class="px-4 aspect-square flex items-center justify-center"
            >
              <component :is="i.icon" class="h-8 w-8" />
            </NuxtLink>
          </nav>
          <button class="flex-1 bg-design-orange font-bold" type="button">
            GOOGLE 導航
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
