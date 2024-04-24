<script setup lang="ts">
import { BRANDS } from '@/constants/siteMeta'
</script>
<template>
  <section>
    <div class="flex px-[140px] items-center bg">
      <h2 class="font-black text-40 py-12">PARTNER</h2>
    </div>

    <hr class="border-t-2 border-slate-950" />

    <ul class="px-[140px] pt-20 pb-32 space-y-20">
      <li v-for="i in BRANDS">
        <div class="flex border-2 border-slate-950 h-[410px]">
          <div class="flex-[5]">
            <img
              :src="i.cover"
              alt=""
              class="h-full aspect-[67/14] object-cover"
            />
          </div>
          <div
            class="flex-[3] px-10 py-10 border-l-2 border-slate-950 flex flex-col"
          >
            <h3 class="font-black text-20">
              <img
                v-if="i.logo"
                :src="i.logo"
                alt="Mojow logo"
                class="max-w-1/2 max-h-10"
              />
              <p class="mt-5">{{ i.name }}</p>
            </h3>

            <p class="text-14 whitespace-pre-line mt-4">{{ i.description }}</p>

            <a
              :href="i.link"
              target="_blank"
              class="w-fit mt-auto border px-14 py-3 border-slate-950 inline-block"
              >Link</a
            >
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>
