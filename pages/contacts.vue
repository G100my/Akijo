<script setup lang="ts">
import ImgHero from '@/assets/contacts-hero.jpg'
import { BASE_INFO, QUICK_LINKS } from '@/constants/siteMeta'
</script>
<template>
  <section>
    <div>
      <h2 class="_page_title">LOCATIONS</h2>
    </div>

    <div
      class="flex flex-col lg:flex-row lg:h-[440px] border-2 border-slate-950"
    >
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
            <div class="flex flex-col gap-2 lg:gap-8 lg:flex-row">
              <p v-for="i in BASE_INFO.opening_time">
                {{ i }}
              </p>
            </div>
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
            class="flex-[3] lg:flex-1 flex border-r-2 border-slate-950 lg:justify-center lg:gap-4 items-center justify-around"
          >
            <NuxtLink
              v-for="i in QUICK_LINKS"
              :to="i.to"
              class="px-4 aspect-square flex items-center justify-center"
            >
              <component :is="i.icon" class="h-8 w-8" />
            </NuxtLink>
          </nav>
          <a
            :href="BASE_INFO.google_navigation_url"
            class="flex-[2] lg:flex-1 bg-design-orange font-bold"
            target="_blank"
          >
            GOOGLE 導航
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
