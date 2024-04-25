<script setup lang="ts">
import ImageFlower from '@/assets/flower.svg?component'

const { data } = await useAsyncData('events', () =>
  queryContent('events').sort({ date: -1 }).find(),
)
</script>
<template>
  <section>
    <div class="flex px-[140px] items-center bg">
      <h2 class="font-black text-40 py-12">EVENTS</h2>
    </div>

    <hr class="border-t-2 border-slate-950" />

    <ul class="px-[140px] pt-20 pb-32 grid grid-cols-3 gap-4">
      <li v-for="i in data" class="bg-design-lightgray">
        <NuxtLink
          :to="i._path!"
          class="flex flex-col h-full group hover:-translate-x-1 hover:-translate-y-1 transition-transform border-2 border-slate-950"
        >
          <div class="h-64 xl:h-96">
            <img
              :src="`/events/${i.cover}`"
              :alt="i.title"
              class="object-cover w-full h-full object-center"
            />
          </div>

          <div class="relative">
            <div
              class="absolute right-10 inset-y-0 my-auto flex items-center justify-center"
            >
              <ImageFlower
                class="absolute text-[#9A9A9A] transition-colors group-hover:animate-[spin_5s_linear_infinite] group-hover:text-[#ffd626]"
              />
              <p
                class="absolute text-12 transition-colors text-white font-bold group-hover:text-slate-950"
              >
                more
              </p>
            </div>
          </div>

          <div class="p-6 pt-3 bg-[#E5E4DE] flex-1">
            <p class="mb-1 text-14 text-[#9A9A9A]">
              {{ $dayjs(i.date).format('YYYY-MM-DD') }}
            </p>
            <p class="whitespace-nowrap text-18 font-bold text-slate-950">
              {{ i.title }}
            </p>
            <p class="multi-line-ellipsis-[2] mt-2 text-16 whitespace-pre-line">
              {{ i.description }}
            </p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
